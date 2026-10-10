// Module ID: 16190
// Function ID: 16191
// Name: ShopNitroUpsellBanner
// Dependencies: [19, 21, 5092, 587, 683, 4818, 5056, 13421, 2000, 6878, 1126, 6181, 5391, 1105, 1200, 6207, 5377, 5088, 16186, 5379, 9781, 2]

// Module 16190 (ShopNitroUpsellBanner)
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import intl5 from "intl" /* 1126 */;
import useToken from "useToken" /* 4818 */;
import Card_Card from "Card/Card" /* 6181 */;
import MobileNitroUpsellInShopFeedExperiment from "MobileNitroUpsellInShopFeedExperiment" /* 16186 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let tmp2;
const LinearGradientDefault = tmp2(5391);
const NitroUpsellButtonDefault = tmp2(9781);
class ShopNitroUpsellBanner {
  constructor(arg0) {
    let XSmallIcon;
    let buttonVariant;
    let dismiss;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let isDarkTheme;
    let items1;
    let items2;
    let obj6;
    let paths;
    let tmp11Result;
    ({ isDarkTheme, dismiss, buttonVariant } = arg0);
    const tmp = closure_6();
    let tmp2 = importDefault;
    const tmp4 = _modDef683;
    let obj = useToken;
    const tmp4Result = tmp4(obj.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START));
    const alphaResult = tmp4Result.alpha(0.3);
    const hexResult = alphaResult.hex();
    const tmp7 = _modDef683;
    const obj4 = useToken;
    const tmp7Result = tmp7(obj4.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END));
    const alphaResult1 = tmp7Result.alpha(0.3);
    const hexResult1 = alphaResult1.hex();
    const callback = react.useCallback(() => {
      let intl;
      let intl2;
      let items;
      const openLazy = require("ActionSheetActionCreators").openLazy;
      const obj = { analyticsLocations: items, title: intl.string(require("intl").t.GZWBoL), description: intl2.string(require("intl").t["2+/rrF"]) };
      require("ActionSheetActionCreators");
      items = [];
      const tmp2 = require("asyncRequire")(paths[7], paths.paths);
      items[0] = require("AnalyticsLocation").COLLECTIBLES_SHOP_INDEX_PAGE;
      intl = require("intl").intl;
      intl2 = require("intl").intl;
      openLazy(tmp2, "ShopNitroUpsellPromoSheet", obj);
    }, []);
    let items = [tmp.card, ];
    const obj2 = { variant: "secondary", style: items, children: items2 };
    items[1] = isDarkTheme ? tmp.borderDark : tmp.borderLight;
    const Card = Card_Card.Card;
    const obj3 = { colors: items1, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, style: tmp.gradientBackground, pointerEvents: "none" };
    items1 = [hexResult, hexResult1];
    const tmp2Result = LinearGradientDefault;
    items2 = [React3(tmp2Result, obj3), , ];
    const obj5 = { accessibilityRole: "button", accessibilityLabel: intl.string(intl5.t.WAI6xu), onPress: dismiss, style: tmp.closeButton, children: React3(XSmallIcon, obj6) };
    const PressableOpacity = tmp5(1200).PressableOpacity;
    intl = tmp5(1126).intl;
    obj6 = { size: "md", color: nativeDefault.colors.ICON_DEFAULT };
    XSmallIcon = tmp5(6207).XSmallIcon;
    items2[1] = React3(PressableOpacity, obj5);
    const Stack = tmp5(5377).Stack;
    const obj7 = { variant: "text-sm/medium", color: "mobile-text-heading-primary", style: tmp.text, children: intl2.string(intl5.t.WjOclf) };
    const Text = tmp5(5088).Text;
    intl2 = tmp5(1126).intl;
    const items3 = [React3(Text, obj7), ];
    if (buttonVariant === MobileNitroUpsellInShopFeedExperiment.NitroUpsellBannerButtonVariant.LEARN_MORE) {
      const obj8 = { variant: "primary", size: "sm", text: intl4.string(intl5.t.hvVgAZ), onPress: callback };
      const Button = tmp5(5379).Button;
      intl4 = tmp5(1126).intl;
      tmp11Result = tmp11(Button, obj8);
    } else {
      const obj9 = { text: intl3.string(intl5.t.pj0XBN), onPress: callback, size: "sm", shiny: false };
      const tmp2Result2 = NitroUpsellButtonDefault;
      intl3 = tmp5(1126).intl;
      tmp11Result = tmp11(tmp2Result2, obj9);
    }
    items3[1] = tmp11Result;
    items2[2] = hasOwnProperty(Stack, { direction: "vertical", spacing: 16, children: items3 });
    return hasOwnProperty(Card, obj2);
  }
}
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, borderDark: obj3, borderLight: obj4, gradientBackground: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }, text: { marginRight: 24 }, closeButton: { position: "absolute", top: 8, right: 8 } };
obj2 = { overflow: "hidden", padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_16, borderWidth: 1 };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.unsafe_rawColors.PRIMARY_660 };
obj4 = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const metroRequire = createStyles(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/ShopNitroUpsellBanner.tsx");

export default ShopNitroUpsellBanner;
export { ShopNitroUpsellBanner };
