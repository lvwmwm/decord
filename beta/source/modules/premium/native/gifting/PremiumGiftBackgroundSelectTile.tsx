// Module ID: 14701
// Function ID: 14702
// Name: PremiumGiftBackgroundSelectTile
// Dependencies: [19, 17, 1387, 14702, 21, 14703, 14704, 14705, 14706, 14707, 14708, 14709, 14710, 14711, 5170, 575, 1113, 2728, 5874, 2]
// Exports: default

// Module 14701 (PremiumGiftBackgroundSelectTile)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import _modDef2728 from "module_2728" /* 2728 */;
import PremiumGiftingConstants from "PremiumGiftingConstants" /* 14702 */;
import AssetRegistryDefault from "AssetRegistry" /* 14703 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14704 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 14705 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 14706 */;
import _modDef14707 from "module_14707" /* 14707 */;
import _modDef14708 from "module_14708" /* 14708 */;
import _modDef14709 from "module_14709" /* 14709 */;
import _modDef14710 from "module_14710" /* 14710 */;
import _modDef14711 from "module_14711" /* 14711 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
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
let obj2 = { uri: _modDef14707 };
GIFT_STYLE_IMG[PremiumGiftStyles.NITROWEEN_STANDARD] = obj2;
GIFT_STYLE_IMG[PremiumGiftStyles.SNOWGLOBE] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.BOX] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.CUP] = null;
let obj3 = { uri: _modDef14708 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CAKE] = obj3;
let obj4 = { uri: _modDef14709 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CHEST] = obj4;
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_COFFEE] = { uri: _modDef14710 };
({ uri: _modDef14710 });
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: _modDef14711 };
({ uri: _modDef14711 });
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
    prop = _modDef2728["+utqaz"];
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
    items[1] = metroRequire(tmp8(5874), obj4);
    tmp4Result = tmp4(tmp5, obj);
  }
  return tmp4Result;
};
export { GIFT_STYLE_IMG };
