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
  {
    title: '小牛講正經 講 故事',
    feedID: 'andyko1988',
    homepageURL: 'https://www.youtube.com/@%E5%B0%8F%E7%89%9B%E8%AC%9B%E6%AD%A3%E7%B6%93',
    itemFilters: ItemFiltersPreset.between3minTo60Min,
  },

  // ===== 以上 5 個 =====

  {
    title: '爱否科技 評 3C',
    feedID: 'FView-CN',
    homepageURL: 'https://www.youtube.com/@FView-CN',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'epcdiy 聊 科技',
    feedID: 'epcdiy',
    homepageURL: 'https://www.youtube.com/@epcdiy/videos',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '蘋果迷 聊 科技',
    feedID: 'applefans520',
    homepageURL: 'https://www.youtube.com/@applefans520',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '蘋果妹 聊 科技',
    feedID: 'applemei',
    homepageURL: 'https://www.youtube.com/@applemei',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '李老師 聊 中國',
    feedID: 'whyyoutouzhele',
    homepageURL: 'https://www.youtube.com/@whyyoutouzhele',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },

  // ===== 以上 10 個 =====

  {
    title: '先看评测 聊 3C',
    feedID: 'Prelook',
    homepageURL: 'https://www.youtube.com/@%E5%85%88%E7%9C%8B%E8%AF%84%E6%B5%8B/videos',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '數位宇宙',
    feedID: 'digitaluniverse616',
    homepageURL: 'https://www.youtube.com/@%E6%95%B8%E4%BD%8D%E5%AE%87%E5%AE%99',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
]

// 

// --------------------------------------

if (CONFIG.debug) {
  feedList = [
    // {
    //   title: 'IT咖啡馆',
    //   feedID: 'it-coffee',
    //   homepageURL: 'https://www.youtube.com/channel/UCXLV-KfDQAFUJ_as9H1Lfbw',
    //   itemFilters: [
    //     ItemFiltersPreset.between3minTo30Min,
    //   ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
    // },
    {
      title: '紫骷 玩遊戲',
      feedID: 'Zikukirby',
      homepageURL: 'https://www.youtube.com/channel/UCQceikp-aRr_e5uCARuPvEQ',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
  ]
}


module.exports = feedList
