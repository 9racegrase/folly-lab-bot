const VERIFY_TOKEN = process.env.IG_VERIFY_TOKEN;
const ACCESS_TOKEN = process.env.IG_ACCESS_TOKEN;

async function sendIGMessage(recipientId, text) {
  await fetch(`https://graph.instagram.com/v21.0/me/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      recipient: { id: recipientId },
      message: { text },
      access_token: ACCESS_TOKEN
    })
  });
}

// 礦石關鍵字對應搜尋連結
const crystalKeywords = {
  '月光石': 'https://folly-lab.com/?s=月光石&post_type=product',
  '藍月光石': 'https://folly-lab.com/?s=藍月光石&post_type=product',
  '拉長石': 'https://folly-lab.com/?s=拉長石&post_type=product',
  '紫水晶': 'https://folly-lab.com/?s=紫水晶&post_type=product',
  '白水晶': 'https://folly-lab.com/?s=白水晶&post_type=product',
  '粉水晶': 'https://folly-lab.com/?s=粉水晶&post_type=product',
  '黑曜石': 'https://folly-lab.com/?s=黑曜石&post_type=product',
  '金曜石': 'https://folly-lab.com/?s=金曜石&post_type=product',
  '銀曜石': 'https://folly-lab.com/?s=銀曜石&post_type=product',
  '雪花黑曜石': 'https://folly-lab.com/?s=雪花黑曜石&post_type=product',
  '青金石': 'https://folly-lab.com/?s=青金石&post_type=product',
  '海藍寶': 'https://folly-lab.com/?s=海藍寶&post_type=product',
  '丹泉石': 'https://folly-lab.com/?s=丹泉石&post_type=product',
  '太陽石': 'https://folly-lab.com/?s=太陽石&post_type=product',
  '黃虎眼': 'https://folly-lab.com/?s=黃虎眼&post_type=product',
  '黑虎眼': 'https://folly-lab.com/?s=黑虎眼&post_type=product',
  '石榴石': 'https://folly-lab.com/?s=石榴石&post_type=product',
  '葡萄石': 'https://folly-lab.com/?s=葡萄石&post_type=product',
  '祖母綠': 'https://folly-lab.com/?s=祖母綠&post_type=product',
  '天使石': 'https://folly-lab.com/?s=天使石&post_type=product',
  '透石膏': 'https://folly-lab.com/?s=透石膏&post_type=product',
  '水草瑪瑙': 'https://folly-lab.com/?s=水草瑪瑙&post_type=product',
  '黑瑪瑙': 'https://folly-lab.com/?s=黑瑪瑙&post_type=product',
  '花珀': 'https://folly-lab.com/?s=花珀&post_type=product',
  '綠幽靈': 'https://folly-lab.com/?s=綠幽靈&post_type=product',
  '紫幽靈': 'https://folly-lab.com/?s=紫幽靈&post_type=product',
  '黑髮晶': 'https://folly-lab.com/?s=黑髮晶&post_type=product',
  '鈦晶': 'https://folly-lab.com/?s=鈦晶&post_type=product',
  '草莓晶': 'https://folly-lab.com/?s=草莓晶&post_type=product',
  '螢石': 'https://folly-lab.com/?s=螢石&post_type=product',
  '黑碧璽': 'https://folly-lab.com/?s=黑碧璽&post_type=product',
  '橄欖石': 'https://folly-lab.com/?s=橄欖石&post_type=product',
  '茶晶': 'https://folly-lab.com/?s=茶晶&post_type=product',
  '梅爾卡巴': 'https://folly-lab.com/?s=梅爾卡巴&post_type=product',
  '生命之花': 'https://folly-lab.com/?s=生命之花&post_type=product',
  '白松石': 'https://folly-lab.com/?s=白松石&post_type=product',
  '彩曜石': 'https://folly-lab.com/?s=彩曜石&post_type=product',
  '黃鐵礦': 'https://folly-lab.com/?s=黃鐵礦球&post_type=product',
  '五行情緒花精': 'https://folly-lab.com/?s=五行情緒花精&post_type=product',
  '花精': 'https://folly-lab.com/?s=花精&post_type=product',
  '綠龍晶': 'https://folly-lab.com/?s=綠龍晶&post_type=product',
  '雪花幽靈': 'https://folly-lab.com/?s=雪花幽靈&post_type=product',
};

const productTypeKeywords = {
  '南美蠟繩手鍊': 'https://folly-lab.com/?s=%E5%8D%97%E7%BE%8E%E8%A0%9F%E7%B9%A9%E6%89%8B%E9%8D%8A&post_type=product',
  '防水蠟繩項鍊': 'https://folly-lab.com/?s=%E9%98%B2%E6%B0%B4%E8%A0%9F%E7%B9%A9%E9%A0%85%E9%8D%8A&post_type=product',
  '極簡鈦鋼項鍊': 'https://folly-lab.com/?s=%E6%A5%B5%E7%B0%A1%E9%88%A6%E9%8B%BC%E9%A0%85%E9%8D%8A&post_type=product',
  '戒指': 'https://folly-lab.com/?s=%E6%88%92%E6%8C%87&post_type=product',
  '淨化盤': 'https://folly-lab.com/?s=%E6%B7%A8%E5%8C%96%E7%9B%A4&post_type=product',
  '浴鹽': 'https://folly-lab.com/?s=%E6%B5%B4%E9%B9%BD&post_type=product',
  '聖木': 'https://folly-lab.com/?s=%E8%81%96%E6%9C%A8&post_type=product',
  '白鼠尾草': 'https://folly-lab.com/?s=%E7%99%BD%E9%BC%A0%E5%B0%BE%E8%8D%89&post_type=product',
};

const fallbackSentUsers = new Set();

function getBotReply(msg) {
  const m = msg.toLowerCase();

  if (m.includes('nice trip') || m.includes('nicetrip') || m.includes('t恤') || m.includes('老帽') || m.includes('托特包')) {
    return '這裡是 NICE TRIP 商品：\n👉 https://folly-lab.com/product-category/nice-trip';
  }
  if (m.includes('tattoo dna') || m.includes('tattoodna') || m.includes('刺青') || m.includes('紋身') || m.includes('清潔慕斯') || m.includes('保養霜')) {
    return 'Tattoo DNA 刺青保養系列：\n\n・清潔慕斯 NT$300\n・Gold 保養霜 NT$400\n・Pink 花香保養霜 NT$300\n・Gold 保養組合 NT$700\n\n👉 https://folly-lab.com/product-category/tattoo-dna';
  }
  if (m.includes('zarpalanga') || m.includes('脈輪咖啡') || m.includes('咖啡')) {
    return '脈輪咖啡是我們精品咖啡品牌線，送禮自用都很合適 ☕\n\n👉 https://folly-lab.com/product-category/zarpalanga';
  }
  if (m.includes('淨化') || m.includes('聖木') || m.includes('白鼠尾草') || m.includes('黑鹽') || m.includes('浴鹽') || m.includes('淨化盤')) {
    return '如果您想找淨化用品，也可以直接告訴我您想看的是聖木、鼠尾草，還是其他空間淨化相關商品 🌿\n\n👉 https://folly-lab.com/product-category/%E8%96%B0%E9%A6%99%E6%B7%A8%E5%8C%96%E7%94%A8%E5%93%81';
  }
  if (m.includes('擺件') || m.includes('擺設') || m.includes('水晶簇') || m.includes('獨角獸') || m.includes('力量動物')) {
    return '礦石擺件這邊有力量動物、神聖幾何等收藏款，適合空間擺設或送禮 🪨\n\n👉 https://folly-lab.com/product-category/%E7%A4%A6%E7%9F%B3%E6%93%BA%E4%BB%B6';
  }
  if (m.includes('花精') || m.includes('五行情緒') || m.includes('巴哈')) {
    return '這裡是花精系列商品：\n👉 https://folly-lab.com/product-category/bach-flower-remedies';
  }

  for (const [keyword, url] of Object.entries(crystalKeywords)) {
    if (m.includes(keyword)) {
      return `您好，這裡幫您整理${keyword}相關商品連結給您參考：\n👉 ${url}\n\n若您想找相近款式，也可以直接告訴我想看的礦石、風格或預算，我再幫您整理方向。`;
    }
  }

  for (const [keyword, url] of Object.entries(productTypeKeywords)) {
    if (m.includes(keyword)) {
      return `這裡是${keyword}相關商品：\n👉 ${url}`;
    }
  }

  if (m.includes('手鍊') || m.includes('手串') || m.includes('手鏈')) {
    return '可以的，請問您比較想看日常配戴款、送禮款，還是客製款呢？\n\n可以先逛逛這裡：\n👉 https://folly-lab.com/product-category/crystals-accessories/%E7%A4%A6%E7%9F%B3%E6%89%8B%E4%B8%B2';
  }
  if (m.includes('項鍊') || m.includes('項鏈')) {
    return '項鍊這邊有礦石項鍊、防水蠟繩、極簡鈦鋼等方向，請問是自用還是送禮呢？\n\n可以先逛逛這裡：\n👉 https://folly-lab.com/product-category/crystals-accessories/%E7%A4%A6%E7%9F%B3%E9%A0%85%E9%8D%8A/';
  }
  if (m.includes('送禮') || m.includes('禮物') || m.includes('送朋友') || m.includes('送女') || m.includes('送男')) {
    return '如果這份禮物是要送人的，我可以先幫您抓一個適合的方向。\n\n想先了解一下，對方平常的風格比較偏溫柔、極簡、個性，還是自然帶點儀式感呢？\n如果方便的話，也可以一起告訴我預算區間，我再幫您整理幾個比較適合的選項給您參考。';
  }
  if (m.includes('客製') || m.includes('訂做')) {
    return '您好，這邊有提供客製方向的討論。\n\n您可以先告訴我想做的品項、偏好的晶石或顏色、預算區間，以及是否有送禮需求，我再先幫您整理方向。';
  }
  if (m.includes('預算') || m.includes('多少錢') || m.includes('多少') || m.includes('便宜')) {
    return '也可以直接告訴我您的預算區間，我會依照價格帶幫您整理比較適合的選項給您參考。\n\n・NT$500 以下\n・NT$500–1500\n・NT$1500–3000\n・NT$3000 以上';
  }
  if (m.includes('訂單') || m.includes('查單') || m.includes('查詢')) {
    return '您好，若您是想查詢訂單進度，麻煩提供訂單編號或收件人姓名，我這邊再幫您確認 📦';
  }
  if (m.includes('出貨') || m.includes('多久') || m.includes('幾天') || m.includes('現貨')) {
    return '您好，這邊幫您確認一下。\n\n若是現貨商品，通常會依照訂單順序安排出貨；若包含預購或客製商品，時間則會依商品製作狀況為主。\n若您方便提供訂單資訊，我可以再幫您協助確認。';
  }
  if (m.includes('保養') || m.includes('清潔') || m.includes('怎麼洗') || m.includes('怎麼戴')) {
    return '您好，若是礦石飾品，平常建議避免長時間碰水、泡溫泉或接觸化學清潔用品，收納時也可單獨放置，會比較有助於維持飾品狀態 🌿';
  }
  if (m.includes('新手') || m.includes('第一次') || m.includes('入門') || m.includes('推薦')) {
    return '如果您是第一次挑選，也可以先告訴我您想找的是項鍊、手鍊、擺件，或是最近比較偏向哪一種感受，我可以先幫您整理幾個適合入門的方向 🌿';
  }
  if (m.includes('真人') || m.includes('客服') || m.includes('人工')) {
    return '這部分我先幫您轉由客服協助，回覆會更準確一些。\n您也可以先把需求或問題整理給我，我這邊一併為您轉達 🙏';
  }

  return '感謝您的訊息 🙏 已為您記錄，我們會請真人客服盡快與您聯繫。';
}

const FALLBACK_MSG = '感謝您的訊息 🙏 已為您記錄，我們會請真人客服盡快與您聯繫。';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];
    if (mode === 'subscribe' && token === VERIFY_TOKEN) return res.status(200).send(challenge);
    return res.status(403).send('Forbidden');
  }

  if (req.method === 'POST') {
    const body = req.body;
    if (body.object === 'instagram') {
      for (const entry of body.entry || []) {
        for (const event of entry.messaging || []) {
          if (event.message && !event.message.is_echo) {
            const senderId = event.sender.id;
            const text = event.message.text || '';
            const reply = getBotReply(text);

            if (reply === FALLBACK_MSG) {
              if (fallbackSentUsers.has(senderId)) continue;
              fallbackSentUsers.add(senderId);
            }

            await sendIGMessage(senderId, reply);
          }
        }
      }
    }
    return res.status(200).send('EVENT_RECEIVED');
  }

  res.status(405).send('Method Not Allowed');
}
