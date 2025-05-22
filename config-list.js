const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
const CONFIG = require('../config-json.js')

let feedList = [
  {
    title: '阿肥 評 3C',
    feedID: 'EXVREAL',
    homepageURL: 'https://www.youtube.com/channel/UCnkAn2XuC5t6d2CXWJDtr9Q',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'FUN 評 3C',
    feedID: 'FUN-rp3dq',
    homepageURL: 'https://www.youtube.com/@FUN-rp3dq',
    itemFilters: ItemFiltersPreset.between3minTo60Min,
  },
  {
    title: 'AKU遊戲窩 玩 遊戲',
    feedID: 'AKUGAMEChannel',
    homepageURL: 'https://www.youtube.com/channel/UCC5DpD05rp_TJapb3jDEAmQ',
    itemFilters: ItemFiltersPreset.between3minTo60Min,
  },
  {
    title: '邦尼幫你 評 3C',
    feedID: 'isbonny',
    homepageURL: 'https://www.youtube.com/@isbonny',
    itemFilters: ItemFiltersPreset.between3minTo60Min,
  },
]

// 

// --------------------------------------

if (CONFIG.debug) {
  feedList = [
    {
      title: 'IT咖啡馆',
      feedID: 'it-coffee',
      homepageURL: 'https://www.youtube.com/channel/UCXLV-KfDQAFUJ_as9H1Lfbw',
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min,
      ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
    },
  ]
}


module.exports = feedList
