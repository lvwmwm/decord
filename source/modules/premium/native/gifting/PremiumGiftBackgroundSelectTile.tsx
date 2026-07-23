// Module ID: 11819
// Function ID: 91684
// Name: GiftBackgroundSelectTile
// Dependencies: [31, 27, 1851, 11820, 33, 11821, 11822, 11823, 11824, 11825, 11826, 11827, 11828, 11829, 4130, 689, 1212, 2262, 5085, 2]
// Exports: default

// Module 11819 (GiftBackgroundSelectTile)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { PremiumGiftStyles } from "GuildFeatures";
import { GIFT_STYLE_DESCRIPTIONS } from "GIFT_STYLE_DESCRIPTIONS";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_3, Pressable: closure_4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let obj = { [PremiumGiftStyles.STANDARD_BOX]: require("registerAsset"), [PremiumGiftStyles.CAKE]: require("registerAsset"), [PremiumGiftStyles.CHEST]: require("registerAsset"), [PremiumGiftStyles.COFFEE]: require("registerAsset") };
obj = { uri: require("metadata") };
obj[PremiumGiftStyles.NITROWEEN_STANDARD] = obj;
obj[PremiumGiftStyles.SNOWGLOBE] = null;
obj[PremiumGiftStyles.BOX] = null;
obj[PremiumGiftStyles.CUP] = null;
obj = { uri: require("metadata") };
obj[PremiumGiftStyles.SEASONAL_CAKE] = obj;
obj[PremiumGiftStyles.SEASONAL_CHEST] = { uri: require("metadata") };
let obj1 = { uri: require("metadata") };
obj[PremiumGiftStyles.SEASONAL_COFFEE] = { uri: require("metadata") };
const obj2 = { uri: require("metadata") };
obj[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: require("metadata") };
let closure_9 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { width: 78, height: 44, justifyContent: "center", marginEnd: importDefault(689).space.PX_8 };
  let num = 0;
  if (0 === arg0) {
    num = 20;
  }
  obj.marginStart = num;
  obj.container = obj;
  obj = { position: "absolute", borderColor: importDefault(689).colors.TEXT_BRAND, borderRadius: importDefault(689).radii.sm, borderWidth: 2, flex: 1, width: 78, height: 44 };
  obj.selected = obj;
  obj.image = { width: 72, height: 38, alignSelf: "center" };
  return obj;
});
const obj3 = { uri: require("metadata") };
const result = require("GuildFeatures").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundSelectTile.tsx");

export default function GiftBackgroundSelectTile(index) {
  let giftStyle;
  let selected;
  ({ selected, giftStyle } = index);
  const tmp = callback2(index.index);
  let tmp4Result = null;
  if (null != obj[giftStyle]) {
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.giftStyle = intl2.string(GIFT_STYLE_DESCRIPTIONS[giftStyle]);
    obj["aria-label"] = intl.formatToPlainString(importDefault(2262)["+utqaz"], obj);
    obj["aria-selected"] = selected;
    obj.style = tmp.container;
    obj.onPress = index.onPress;
    if (selected) {
      obj = { style: tmp.selected };
      selected = callback(closure_3, obj);
    }
    const items = [selected, ];
    const obj1 = { resizeMode: "contain", style: tmp.image, source: tmp2 };
    items[1] = callback(importDefault(5085), obj1);
    obj.children = items;
    tmp4Result = closure_7(closure_4, obj);
    const tmp4 = closure_7;
    const tmp5 = closure_4;
  }
  return tmp4Result;
};
export const GIFT_STYLE_IMG = obj;
