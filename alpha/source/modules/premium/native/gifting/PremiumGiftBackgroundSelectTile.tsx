// Module ID: 14351
// Function ID: 14352
// Name: PremiumGiftBackgroundSelectTile
// Dependencies: [19, 17, 1391, 14352, 21, 14353, 14354, 14355, 14356, 14357, 14358, 14359, 14360, 14361, 5005, 587, 558, 576, 1125, 2600, 5707, 2]

// Module 14351 (PremiumGiftBackgroundSelectTile)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1125 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import _modDef2600 from "module_2600" /* 2600 */;
import FastImageDefault from "FastImage" /* 5707 */;
import PremiumGiftingConstants from "PremiumGiftingConstants" /* 14352 */;
import AssetRegistryDefault from "AssetRegistry" /* 14353 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14354 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 14355 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 14356 */;
import _modDef14357 from "module_14357" /* 14357 */;
import _modDef14358 from "module_14358" /* 14358 */;
import _modDef14359 from "module_14359" /* 14359 */;
import _modDef14360 from "module_14360" /* 14360 */;
import _modDef14361 from "module_14361" /* 14361 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let CAKE;
let CHEST;
let COFFEE;
let STANDARD_BOX;
let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
({ View: c3, Pressable: closure_4 } = react_native);
const PremiumGiftStyles = PremiumConstants.PremiumGiftStyles;
const GIFT_STYLE_DESCRIPTIONS = PremiumGiftingConstants.GIFT_STYLE_DESCRIPTIONS;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const GIFT_STYLE_IMG = { [STANDARD_BOX]: AssetRegistryDefault, [CAKE]: AssetRegistryDefault2, [CHEST]: AssetRegistryDefault3, [COFFEE]: AssetRegistryDefault4 };
({ STANDARD_BOX, CAKE, CHEST, COFFEE } = PremiumGiftStyles);
let obj2 = { uri: _modDef14357 };
GIFT_STYLE_IMG[PremiumGiftStyles.NITROWEEN_STANDARD] = obj2;
GIFT_STYLE_IMG[PremiumGiftStyles.SNOWGLOBE] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.BOX] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.CUP] = null;
let obj3 = { uri: _modDef14358 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CAKE] = obj3;
let obj4 = { uri: _modDef14359 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CHEST] = obj4;
let obj5 = { uri: _modDef14360 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_COFFEE] = obj5;
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: _modDef14361 };
({ uri: _modDef14361 });
let closure_9 = createStyles.createStyles((arg0) => {
  let num;
  let size1;
  size = { width: 78, height: 44, justifyContent: "center", marginEnd: nativeDefault.space.PX_8, marginStart: num };
  num = 0;
  if (0 === arg0) {
    num = 20;
  }
  const obj = { container: size, selected: size1, image: { width: 72, height: 38, alignSelf: "center" } };
  size1 = { position: "absolute", borderColor: tmp(587).colors.TEXT_BRAND, borderRadius: tmp(587).radii.sm, borderWidth: 2, flex: 1, width: 78, height: 44 };
  return obj;
});
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftBackgroundSelectTile(index) {
  let giftStyle;
  let intl2;
  let items;
  let onPress;
  let selected;
  const obj = react2;
  const cResult = obj.c(15);
  ({ selected, giftStyle, onPress } = index);
  const tmp4 = closure_9(index.index);
  let tmp6 = null;
  if (null != obj[giftStyle]) {
    let tmp7;
    if (cResult[0] !== giftStyle) {
      const intl = tmp(1125).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj2 = { giftStyle: intl2.string(GIFT_STYLE_DESCRIPTIONS[giftStyle]) };
      const prop = _modDef2600["+utqaz"];
      intl2 = tmp(1125).intl;
      const formatToPlainStringResult = formatToPlainString(prop, obj2);
      cResult[0] = giftStyle;
      cResult[1] = formatToPlainStringResult;
      tmp7 = formatToPlainStringResult;
    } else {
      tmp7 = cResult[1];
    }
    if (cResult[2] === selected) {
      let tmp12;
      if (cResult[3] === tmp4.selected) {
        tmp12 = cResult[4];
      }
      if (cResult[5] === obj[giftStyle]) {
        let tmp16;
        if (cResult[6] === tmp4.image) {
          tmp16 = cResult[7];
        }
        if (cResult[8] === onPress) {
          if (cResult[9] === selected) {
            if (cResult[10] === tmp4.container) {
              if (cResult[11] === tmp7) {
                if (cResult[12] === tmp12) {
                  let tmp20;
                  if (cResult[13] === tmp16) {
                    tmp20 = cResult[14];
                  }
                  tmp6 = tmp20;
                }
              }
            }
          }
        }
        const obj3 = { "aria-label": tmp7, "aria-selected": selected, style: tmp4.container, onPress, children: items };
        items = [tmp12, tmp16];
        const tmp23 = metroImportDefault(React3, obj3);
        cResult[8] = onPress;
        cResult[9] = selected;
        cResult[10] = tmp4.container;
        cResult[11] = tmp7;
        cResult[12] = tmp12;
        cResult[13] = tmp16;
        cResult[14] = tmp23;
        tmp20 = tmp23;
      }
      const obj4 = { resizeMode: "contain", style: tmp4.image, source: obj[giftStyle] };
      const tmp19 = metroRequire(FastImageDefault, obj4);
      cResult[5] = obj[giftStyle];
      cResult[6] = tmp4.image;
      cResult[7] = tmp19;
      tmp16 = tmp19;
    }
    let tmp13 = selected;
    if (tmp13) {
      const obj5 = { style: tmp4.selected };
      tmp13 = metroRequire(_false, obj5);
    }
    cResult[2] = selected;
    cResult[3] = tmp4.selected;
    cResult[4] = tmp13;
    tmp12 = tmp13;
  }
  return tmp6;
}) : (function GiftBackgroundSelectTile(onPress) {
  let formatToPlainString;
  let giftStyle;
  let intl2;
  let items;
  let obj;
  let obj2;
  let prop;
  let selected;
  ({ selected, giftStyle } = onPress);
  onPress = onPress.onPress;
  const tmp = closure_9(onPress.index);
  let tmp4Result = null;
  if (null != obj[giftStyle]) {
    obj = { "aria-label": formatToPlainString(prop, obj2), "aria-selected": selected, style: tmp.container, onPress, children: items };
    const intl = intl3.intl;
    formatToPlainString = intl.formatToPlainString;
    obj2 = { giftStyle: intl2.string(GIFT_STYLE_DESCRIPTIONS[giftStyle]) };
    prop = _modDef2600["+utqaz"];
    intl2 = intl3.intl;
    const tmp4 = metroImportDefault;
    const tmp5 = React3;
    const tmp8 = importDefault;
    if (selected) {
      const obj3 = { style: tmp.selected };
      selected = metroRequire(_false, obj3);
    }
    items = [selected, ];
    const obj4 = { resizeMode: "contain", style: tmp.image, source: obj[giftStyle] };
    items[1] = metroRequire(tmp8(5707), obj4);
    tmp4Result = tmp4(tmp5, obj);
  }
  return tmp4Result;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundSelectTile.tsx");

export default tmp5;
export { GIFT_STYLE_IMG };
