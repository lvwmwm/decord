// Module ID: 11808
// Function ID: 91609
// Name: GiftBackgroundSelectTile
// Dependencies: []
// Exports: default

// Module 11808 (GiftBackgroundSelectTile)
importAll(dependencyMap[0]);
({ View: closure_3, Pressable: closure_4 } = arg1(dependencyMap[1]));
const PremiumGiftStyles = arg1(dependencyMap[2]).PremiumGiftStyles;
const GIFT_STYLE_DESCRIPTIONS = arg1(dependencyMap[3]).GIFT_STYLE_DESCRIPTIONS;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let obj = { [PremiumGiftStyles.STANDARD_BOX]: importDefault(dependencyMap[5]), [PremiumGiftStyles.CAKE]: importDefault(dependencyMap[6]), [PremiumGiftStyles.CHEST]: importDefault(dependencyMap[7]), [PremiumGiftStyles.COFFEE]: importDefault(dependencyMap[8]) };
obj = { uri: importDefault(dependencyMap[9]) };
obj[PremiumGiftStyles.NITROWEEN_STANDARD] = obj;
obj[PremiumGiftStyles.SNOWGLOBE] = null;
obj[PremiumGiftStyles.BOX] = null;
obj[PremiumGiftStyles.CUP] = null;
obj = { uri: importDefault(dependencyMap[10]) };
obj[PremiumGiftStyles.SEASONAL_CAKE] = obj;
const tmp4 = arg1(dependencyMap[4]);
obj[PremiumGiftStyles.SEASONAL_CHEST] = { uri: importDefault(dependencyMap[11]) };
const obj1 = { uri: importDefault(dependencyMap[11]) };
obj[PremiumGiftStyles.SEASONAL_COFFEE] = { uri: importDefault(dependencyMap[12]) };
const obj2 = { uri: importDefault(dependencyMap[12]) };
obj[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: importDefault(dependencyMap[13]) };
const obj3 = { uri: importDefault(dependencyMap[13]) };
let closure_9 = arg1(dependencyMap[14]).createStyles((arg0) => {
  let obj = {};
  obj = { marginEnd: importDefault(dependencyMap[15]).space.PX_8 };
  let num = 0;
  if (0 === arg0) {
    num = 20;
  }
  obj.marginStart = num;
  obj.container = obj;
  obj = { borderColor: importDefault(dependencyMap[15]).colors.TEXT_BRAND, borderRadius: importDefault(dependencyMap[15]).radii.sm };
  obj.selected = obj;
  obj.image = {};
  return obj;
});
const obj7 = arg1(dependencyMap[14]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundSelectTile.tsx");

export default function GiftBackgroundSelectTile(index) {
  let giftStyle;
  let selected;
  ({ selected, giftStyle } = index);
  const tmp = callback2(index.index);
  let tmp4Result = null;
  if (null != obj[giftStyle]) {
    let obj = {};
    const intl = arg1(dependencyMap[16]).intl;
    obj = {};
    const intl2 = arg1(dependencyMap[16]).intl;
    obj.giftStyle = intl2.string(GIFT_STYLE_DESCRIPTIONS[giftStyle]);
    obj.aria-label = intl.formatToPlainString(importDefault(dependencyMap[17]).+utqaz, obj);
    obj.aria-selected = selected;
    obj.style = tmp.container;
    obj.onPress = index.onPress;
    if (selected) {
      obj = { style: tmp.selected };
      selected = callback(closure_3, obj);
    }
    const items = [selected, ];
    const obj1 = { resizeMode: "contain", style: tmp.image, source: tmp2 };
    items[1] = callback(importDefault(dependencyMap[18]), obj1);
    obj.children = items;
    tmp4Result = closure_7(closure_4, obj);
    const tmp4 = closure_7;
    const tmp5 = closure_4;
  }
  return tmp4Result;
};
export const GIFT_STYLE_IMG = obj;
