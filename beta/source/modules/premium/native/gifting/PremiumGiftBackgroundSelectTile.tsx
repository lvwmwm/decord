// Module ID: 13918
// Function ID: 13919
// Name: PremiumGiftBackgroundSelectTile
// Dependencies: [19, 17, 1388, 13919, 21, 13920, 13921, 13922, 13923, 13924, 13925, 13926, 13927, 13928, 4913, 575, 1112, 2888, 5600, 2]
// Exports: default

// Module 13918 (PremiumGiftBackgroundSelectTile)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1112 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import _modDef2888 from "module_2888" /* 2888 */;
import PremiumGiftingConstants from "PremiumGiftingConstants" /* 13919 */;
import AssetRegistryDefault from "AssetRegistry" /* 13920 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13921 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13922 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13923 */;
import _modDef13924 from "module_13924" /* 13924 */;
import _modDef13925 from "module_13925" /* 13925 */;
import _modDef13926 from "module_13926" /* 13926 */;
import _modDef13927 from "module_13927" /* 13927 */;
import _modDef13928 from "module_13928" /* 13928 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
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
let obj2 = { uri: _modDef13924 };
GIFT_STYLE_IMG[PremiumGiftStyles.NITROWEEN_STANDARD] = obj2;
GIFT_STYLE_IMG[PremiumGiftStyles.SNOWGLOBE] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.BOX] = null;
GIFT_STYLE_IMG[PremiumGiftStyles.CUP] = null;
let obj3 = { uri: _modDef13925 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CAKE] = obj3;
let obj4 = { uri: _modDef13926 };
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_CHEST] = obj4;
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_COFFEE] = { uri: _modDef13927 };
({ uri: _modDef13927 });
GIFT_STYLE_IMG[PremiumGiftStyles.SEASONAL_STANDARD_BOX] = { uri: _modDef13928 };
({ uri: _modDef13928 });
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
    prop = _modDef2888["+utqaz"];
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
    items[1] = metroRequire(tmp8(5600), obj4);
    tmp4Result = tmp4(tmp5, obj);
  }
  return tmp4Result;
};
export { GIFT_STYLE_IMG };
