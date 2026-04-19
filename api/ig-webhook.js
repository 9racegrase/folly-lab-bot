const VERIFY_TOKEN = process.env.IG_VERIFY_TOKEN;
const ACCESS_TOKEN = process.env.IG_ACCESS_TOKEN;

async function sendIGMessage(recipientId, text) {
  await fetch(`https://graph.instagram.com/v21.0/me/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      recipient: { id: recipientId },
      message: { text },
      access_token: ACCESS_TOKEN
    })
  });
}

function getBotReply(msg) {
  const m = msg.toLowerCase();

  if (m.includes('手鍊')) return '可以的，若您想看手鍊，我可以再依風格與預算幫您縮小範圍。\n\n請問比較偏向：日常配戴感、個性感、溫柔療癒，還是送禮款呢？\n\n👉 https://folly-lab.com/product-category/crystals-accessories/%E7%A4%A6%E7%9F%B3%E6%89%8B%E4%B8%B2';
  if (m.includes('項鍊')) return '可以的，若您想看項鍊，我可以依日常配戴感、送禮需求或預算幫您整理推薦。\n\n👉 https://folly-lab.com/product-category/crystals-accessories/%E7%A4%A6%E7%9F%B3%E9%A0%85%E9%8D%8A/';
  if (m.includes('送禮') || m.includes('禮物')) return '如果是送禮，我可以依對方的風格幫您抓方向。\n\n對方平常風格偏溫柔、極簡、個性，還是自然儀式感呢？';
  if (m.includes('客製') || m.includes('訂做')) return '可以客製的。您可以先告訴我：\n\n・想做的品項（手鍊／項鍊）\n・喜歡的晶石或顏色\n・預算範圍\n・是否送禮\n\n我先幫您整理，後續再由客服與您確認細節。';
  if (m.includes('淨化')) return '若您想找日常好入門的淨化用品，我會先從這幾類幫您整理：\n\n🧂 黑鹽 NT$66\n🌿 聖木 NT$55\n🪴 白鼠尾草 NT$88–500\n💎 白水晶碎石 NT$60–120\n\n👉 https://folly-lab.com/product-category/tools';
  if (m.includes('價格') || m.includes('預算') || m.includes('多少')) return '可以的，想先看哪一段預算呢？\n\n・500 以下\n・500–1500\n・1500–3000\n・3000 以上';
  if (m.includes('出貨') || m.includes('現貨') || m.includes('多久')) return '商品是否現貨與出貨時間，會依頁面標示與訂單狀況安排。\n\n若您是要確認個人訂單進度，請提供訂單編號與下單姓名，我會協助轉交客服確認 📦';
  if (m.includes('訂單') || m.includes('查詢')) return '個人訂單查詢需要先核對資料，麻煩您提供訂單編號與下單姓名，我會協助轉交客服為您確認。';
  if (m.includes('保養') || m.includes('清潔')) return '不同材質的保養方式會略有不同，若您告訴我是哪一款商品，我可以幫您整理更準確的建議。';
  if (m.includes('真人') || m.includes('客服') || m.includes('人工')) return '好的，我為您轉由客服協助，回覆會更準確。也歡迎先把需求簡單告訴我，我們會更快為您整理 🙏';
  if (m.includes('gazer') || m.includes('品牌') || m.includes('有哪些')) return 'GAZER 主要以水晶飾品、礦石擺件、脈輪水晶與淨化用品為主。\n\n請告訴我想找的方向，我幫您快速整理 🌿';

  return '感謝您的訊息 🙏 已為您記錄，我們會請真人客服盡快與您聯繫。';
}

export default async function handler(req, res) {
  // Webhook 驗證
  if (req.method === 'GET') {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      return res.status(200).send(challenge);
    }
    return res.status(403).send('Forbidden');
  }

  // 接收訊息
  if (req.method === 'POST') {
    const body = req.body;

    if (body.object === 'instagram') {
      for (const entry of body.entry || []) {
        for (const event of entry.messaging || []) {
          if (event.message && !event.message.is_echo) {
            const senderId = event.sender.id;
            const text = event.message.text || '';
            const reply = getBotReply(text);
            await sendIGMessage(senderId, reply);
          }
        }
      }
    }

    return res.status(200).send('EVENT_RECEIVED');
  }

  res.status(405).send('Method Not Allowed');
}
