// Module ID: 14648
// Function ID: 14649
// Name: PremiumGiftBackgroundSelectTile
// Dependencies: [19, 17, 1387, 14649, 21, 14650, 14651, 14652, 14653, 14654, 14655, 14656, 14657, 14658, 5141, 575, 1113, 2731, 5851, 2]
// Exports: default

// Module 14648 (PremiumGiftBackgroundSelectTile)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import _modDef2731 from "module_2731" /* 2731 */;
import PremiumGiftingConstants from "PremiumGiftingConstants" /* 14649 */;
import AssetRegistryDefault from "AssetRegistry" /* 14650 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14651 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 14652 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 14653 */;
import _modDef14654 from "module_14654" /* 14654 */;
import _modDef14655 from "module_14655" /* 14655 */;
import _modDef14656 from "module_14656" /* 14656 */;
import _modDef14657 from "module_14657" /* 14657 */;
import _modDef14658 from "module_14658" /* 14658 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
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
let obj2 = { uri: _modDef14654 };
GIFT_STYLE_IMG[PremiumGiftStyles.NITROWEEN_STANDARD] = obj2;
GIFT_STYLE_IMG[PremiumGiftStyles.SNOWGLOBE] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.BOX] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.CUP] = null;
let obj3 = { uri: _modDef14655 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CAKE] = obj3;
let obj4 = { uri: _modDef14656 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CHEST] = obj4;
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_COFFEE] = { uri: _modDef14657 };
({ uri: _modDef14657 });
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: _modDef14658 };
({ uri: _modDef14658 });
let closure_9 = createStyles.createStyles((arg0) => {
  let num;
  let size1;
  size = { width: 78, height: 44, justifyContent: "center", marginEnd: nativeDefault.space.PX_8, marginStart: num };
  num = 0;
  if (0 === arg0) {
    num = 20;
  }
  const obj = { container: size, selected: size1, image: { width: 72, height: 38, alignSelf: "center" } };
  size1 = { position: "absolute", borderColor: tmp(575).colors.TEXT_BRAND, borderRadius: tmp(575).radii.sm, borderWidth: 2, flex: 1, width: 78, height: 44 };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundSelectTile.tsx");

export default function GiftBackgroundSelectTile(onPress) {
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
    prop = _modDef2731["+utqaz"];
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
    items[1] = metroRequire(tmp8(5851), obj4);
    tmp4Result = tmp4(tmp5, obj);
  }
  return tmp4Result;
};
export { GIFT_STYLE_IMG };
