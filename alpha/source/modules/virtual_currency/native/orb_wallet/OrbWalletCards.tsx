// Module ID: 17221
// Function ID: 17222
// Name: OrbWalletCards
// Dependencies: [32, 19, 17, 15929, 4986, 1387, 21, 5140, 575, 17222, 17223, 7040, 13038, 5751, 5758, 8098, 7120, 1113, 5724, 7104, 5715, 17210, 7641, 17212, 7412, 7387, 4973, 2298, 12672, 504, 8590, 11558, 2]
// Exports: OrbWalletPrimaryCard, getWalletPrimaryCardType

// Module 17221 (OrbWalletCards)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import _modDef2298 from "module_2298" /* 2298 */;
import LinearGradientDefault from "LinearGradient" /* 5715 */;
import useToken from "useToken" /* 5724 */;
import Text_Text from "Text/Text" /* 5751 */;
import components_Button_Button from "components/Button/Button" /* 5758 */;
import Card_Card from "Card/Card" /* 7040 */;
import _modDef7104 from "module_7104" /* 7104 */;
import XSmallIcon2 from "XSmallIcon" /* 7120 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7387 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7412 */;
import IconButton2 from "IconButton" /* 8098 */;
import useIsPremiumSubscriber from "useIsPremiumSubscriber" /* 11558 */;
import AssetRegistryDefault from "AssetRegistry" /* 12672 */;
import SvgCss from "SvgCss" /* 13038 */;
import OrbWalletUtils from "OrbWalletUtils" /* 17210 */;
import VirtualCurrencyAnalyticsUtil from "VirtualCurrencyAnalyticsUtil" /* 17212 */;
import AssetRegistry from "AssetRegistry" /* 17222 */;
import AssetRegistry2 from "AssetRegistry" /* 17223 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import OrbChallengesStore from "OrbChallengesStore" /* 15929 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4986 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

let c9;
let closure_12;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj4;
let obj5;
let obj6;
let obj7;
let unpackModuleId;
function BaseOrbWalletPrimaryCard(buttonSize) {
  let IconButton;
  let XSmallIcon;
  let backdrop;
  let buttonIcon;
  let buttonText;
  let buttonVariant;
  let graphic;
  let graphicAccessibilityLabel;
  let intl;
  let items;
  let items1;
  let items2;
  let obj6;
  let obj7;
  let onClose;
  let onCtaPress;
  let subTextDescription;
  let title;
  ({ graphic, buttonVariant } = buttonSize);
  ({ title, graphicAccessibilityLabel, backdrop, subTextDescription, buttonText, buttonIcon } = buttonSize);
  if (buttonVariant === undefined) {
    buttonVariant = "secondary";
  }
  let str = buttonSize.buttonSize;
  if (str === undefined) {
    str = "md";
  }
  let flag = buttonSize.buttonLoading;
  if (flag === undefined) {
    flag = false;
  }
  ({ onCtaPress, onClose } = buttonSize);
  const tmp = closure_15();
  const obj = { variant: "secondary", border: "faint", radius: 16, style: tmp.primaryCard, children: items };
  items = [backdrop, , , ];
  obj2 = { style: tmp.primaryCardContent, children: items1 };
  const obj3 = { style: tmp.primaryCardGraphic, accessible: true, accessibilityRole: "image", accessibilityLabel: graphicAccessibilityLabel, children: unpackModuleId(SvgCss.LocalSvg, size) };
  const Card = Card_Card.Card;
  size = { asset: graphic.asset, width: graphic.width, height: graphic.height };
  items1 = [unpackModuleId(metroRequire, obj3), ];
  const obj4 = { style: tmp.primaryCardText, children: items2 };
  items2 = [unpackModuleId(Text_Text.Text, { variant: "body-md/semibold", color: "text-strong", accessibilityRole: "header", children: title }), unpackModuleId(Text_Text.Text, { variant: "body-sm/normal", color: "text-default", children: subTextDescription })];
  items1[1] = authStore2(metroRequire, obj4);
  items[1] = authStore2(metroRequire, obj2);
  items[2] = unpackModuleId(components_Button_Button.Button, { text: buttonText, size: str, icon: buttonIcon, variant: buttonVariant, loading: flag, onPress: onCtaPress });
  const obj5 = { style: tmp.primaryCardCloseButton, children: unpackModuleId(IconButton, obj6) };
  obj6 = { variant: "icon-only", size: "sm", icon: unpackModuleId(XSmallIcon, obj7), accessibilityLabel: intl.string(intl5.t.cpT0Cq), onPress: onClose };
  IconButton = IconButton2.IconButton;
  obj7 = { size: "xxs", color: nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT };
  XSmallIcon = XSmallIcon2.XSmallIcon;
  intl = intl5.intl;
  items[3] = unpackModuleId(metroRequire, obj5);
  return authStore2(Card, obj);
}
function OrbWalletNitroGlow() {
  let obj4;
  let obj5;
  const tmp = closure_15();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START);
  obj2 = useToken;
  const token1 = obj2.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END);
  let items = [token, token1];
  const memo = react.useMemo(() => {
    const items = [token, token1];
    return items;
  }, items);
  const obj3 = { style: tmp.nitroGlow, pointerEvents: "none", maskElement: unpackModuleId(LinearGradientDefault, obj4), children: unpackModuleId(LinearGradientDefault, obj5) };
  obj4 = { style: hasOwnProperty.absoluteFill, colors: ["black", "transparent"], start: obj2.VERTICAL_START, end: obj2.VERTICAL_END };
  obj5 = { style: hasOwnProperty.absoluteFill, colors: memo, start: obj2.HORIZONTAL_START, end: obj2.HORIZONTAL_END };
  const tmp5 = _modDef7104;
  return unpackModuleId(tmp5, obj3);
}
function OrbWalletShopPrimaryCard() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  const tmp3 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp3(AnalyticsLocationDefault.ORB_WALLET_PRIMARY_CARD).analyticsLocations;
  const items = [analyticsLocations];
  const callback = react.useCallback(() => {
    const obj = OrbWalletUtils;
    obj2 = { analyticsLocations };
    return obj.navigateToShopFromOrbWallet(obj2);
  }, items);
  const ORB_WALLET_SHOP_CTA_CARD_MOBILE = analyticsLocations(4973).DismissibleContent.ORB_WALLET_SHOP_CTA_CARD_MOBILE;
  const ORB_WALLET_SHOP_CTA = AnalyticsLocationDefault.ORB_WALLET_SHOP_CTA;
  let obj = analyticsLocations(17210);
  const orbWalletAnalyticsPage = obj.useOrbWalletAnalyticsPage();
  obj2 = analyticsLocations(7641);
  const items1 = [ORB_WALLET_SHOP_CTA_CARD_MOBILE];
  const obj3 = { groupName: constants2.ORB_WALLET, bypassAutoDismiss: true };
  const tmp7 = _slicedToArray(obj2.useSelectedDismissibleContent(items1, obj3), 2);
  let closure_3 = tmp9;
  const items2 = [orbWalletAnalyticsPage, ORB_WALLET_SHOP_CTA, callback, tmp7[1]];
  const first = tmp7[0];
  [][0] = tmp7[1];
  const callback1 = react.useCallback(() => {
    const obj = VirtualCurrencyAnalyticsUtil;
    obj2 = { pageType: orbWalletAnalyticsPage, sectionType: AnalyticsLocationDefault.ORB_WALLET_PRIMARY_CARD, ctaObject: ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA };
    obj.trackOrbsClick(obj2);
    openNitroCheckoutFromOrbWallet();
    closure_3(metroImportAll.TAKE_ACTION);
  }, items2);
  let tmp12 = null;
  if (null != first) {
    const obj4 = { title: intl.string(_modDef2298.v8QrJf), graphic: size1, graphicAccessibilityLabel: intl2.string(_modDef2298.qa1xyr), subTextDescription: intl3.string(_modDef2298.HACucK), buttonText: intl4.string(_modDef2298["7raRgL"]), buttonIcon: AssetRegistryDefault, buttonVariant: "primary", buttonSize: "sm", onCtaPress: callback1, onClose: tmp11 };
    intl = tmp5(1113).intl;
    intl2 = tmp5(1113).intl;
    intl3 = tmp5(1113).intl;
    intl4 = tmp5(1113).intl;
    tmp12 = closure_11(BaseOrbWalletPrimaryCard, obj4);
  }
  return tmp12;
}
function OrbWalletNitroUpsellPrimaryCard() {
  let ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA;
  let closure_3;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let obj7;
  let openNitroCheckoutFromOrbWallet;
  let orbWalletAnalyticsPage;
  let obj = ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA(orbWalletAnalyticsPage[29]);
  const items = [OrbChallengesStore];
  const stateFromStores = obj.useStateFromStores(items, () => OrbChallengesStore.nitroGatedOrbMultiplier);
  obj2 = ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA(orbWalletAnalyticsPage[21]);
  openNitroCheckoutFromOrbWallet = obj2.useOpenNitroCheckoutFromOrbWallet(openNitroCheckoutFromOrbWallet(orbWalletAnalyticsPage[24]).ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA);
  const ORB_WALLET_NITRO_UPSELL_CTA_CARD_MOBILE = ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA(orbWalletAnalyticsPage[26]).DismissibleContent.ORB_WALLET_NITRO_UPSELL_CTA_CARD_MOBILE;
  ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA = openNitroCheckoutFromOrbWallet(orbWalletAnalyticsPage[24]).ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA;
  orbWalletAnalyticsPage = undefined;
  _slicedToArray = undefined;
  const obj3 = ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA(orbWalletAnalyticsPage[21]);
  orbWalletAnalyticsPage = obj3.useOrbWalletAnalyticsPage();
  const items1 = [ORB_WALLET_NITRO_UPSELL_CTA_CARD_MOBILE];
  const obj4 = ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA(orbWalletAnalyticsPage[22]);
  const obj5 = { groupName: constants2.ORB_WALLET, bypassAutoDismiss: true };
  const tmp7 = _slicedToArray(obj4.useSelectedDismissibleContent(items1, obj5), 2);
  _slicedToArray = tmp9;
  const items2 = [orbWalletAnalyticsPage, ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA, openNitroCheckoutFromOrbWallet, tmp7[1]];
  const first = tmp7[0];
  [][0] = tmp7[1];
  const callback = react.useCallback(() => {
    const obj = VirtualCurrencyAnalyticsUtil;
    obj2 = { pageType: orbWalletAnalyticsPage, sectionType: AnalyticsLocationDefault.ORB_WALLET_PRIMARY_CARD, ctaObject: ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA };
    obj.trackOrbsClick(obj2);
    openNitroCheckoutFromOrbWallet();
    closure_3(metroImportAll.TAKE_ACTION);
  }, items2);
  let tmp12 = null;
  if (null != first) {
    tmp12 = null;
    if (null != stateFromStores) {
      const obj6 = { title: intl.string(openNitroCheckoutFromOrbWallet(orbWalletAnalyticsPage[27]).ZqCAos), graphic: size, backdrop: closure_11(OrbWalletNitroGlow, {}), graphicAccessibilityLabel: intl2.string(openNitroCheckoutFromOrbWallet(orbWalletAnalyticsPage[27]).FkfrRH), subTextDescription: intl3.format(openNitroCheckoutFromOrbWallet(orbWalletAnalyticsPage[27])["Ba/7wO"], obj7), buttonText: intl4.string(openNitroCheckoutFromOrbWallet(orbWalletAnalyticsPage[27]).U9UQJE), buttonIcon: openNitroCheckoutFromOrbWallet(orbWalletAnalyticsPage[30]), buttonVariant: "expressive", onCtaPress: callback, onClose: tmp11 };
      intl = tmp(tmp2[17]).intl;
      intl2 = tmp(tmp2[17]).intl;
      intl3 = tmp(tmp2[17]).intl;
      obj7 = { multiplier: stateFromStores };
      intl4 = tmp(tmp2[17]).intl;
      tmp12 = closure_11(BaseOrbWalletPrimaryCard, obj6);
    }
  }
  return tmp12;
}
let _slicedToArray = _slicedToArray_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ ContentDismissActionType: metroImportAll, DismissibleContentGroupName: c9 } = DismissibleContentConstants);
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const OrbWalletPrimaryCardType = { NITRO_UPSELL: "nitro_upsell", SHOP_ORBS: "shop_orbs" };
let obj2 = { NITRO_GLOW_HEIGHT: 72, HORIZONTAL_START: { x: 0, y: 0.5 }, HORIZONTAL_END: { x: 1, y: 0.5 }, VERTICAL_START: { x: 0.5, y: 0 }, VERTICAL_END: { x: 0.5, y: 1 } };
let createStyles = createStyles_mod;
let obj3 = { primaryCard: obj4, nitroGlow: { position: "absolute", top: 0, left: 0, right: 0, height: obj2.NITRO_GLOW_HEIGHT }, primaryCardContent: obj5, primaryCardGraphic: { width: 56, height: 56, alignItems: "center", justifyContent: "center" }, primaryCardText: obj6, primaryCardCloseButton: obj7 };
obj4 = { gap: nativeDefault.space.PX_16, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingEnd: nativeDefault.space.PX_24 };
obj6 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj7 = { position: "absolute", top: nativeDefault.space.PX_4, end: nativeDefault.space.PX_4 };
let closure_15 = createStyles(obj3);
let size = { asset: AssetRegistry, width: 56, height: 37 };
const size1 = { asset: AssetRegistry2, width: 50, height: 37 };
size = size_mod;
const result = size.fileFinishedImporting("modules/virtual_currency/native/orb_wallet/OrbWalletCards.tsx");

export { OrbWalletPrimaryCardType };
export function getWalletPrimaryCardType(isPremiumSubscriber, balance) {
  let NITRO_UPSELL;
  const tmp = isPremiumSubscriber;
  if (tmp) {
    let SHOP_ORBS = null;
    if (null != balance) {
      SHOP_ORBS = null;
      if (balance >= 1400) {
        SHOP_ORBS = obj.SHOP_ORBS;
      }
    }
    NITRO_UPSELL = SHOP_ORBS;
  } else {
    NITRO_UPSELL = obj.NITRO_UPSELL;
  }
  return NITRO_UPSELL;
}
export function OrbWalletPrimaryCard(orbBalance) {
  let NITRO_UPSELL;
  orbBalance = orbBalance.orbBalance;
  const obj = useIsPremiumSubscriber;
  if (obj.useIsPremiumSubscriber(PremiumTypes.TIER_2)) {
    let SHOP_ORBS = null;
    if (null != orbBalance) {
      SHOP_ORBS = null;
      if (orbBalance >= 1400) {
        SHOP_ORBS = obj.SHOP_ORBS;
      }
    }
    NITRO_UPSELL = SHOP_ORBS;
  } else {
    NITRO_UPSELL = obj.NITRO_UPSELL;
  }
  if (obj.SHOP_ORBS === NITRO_UPSELL) {
    return unpackModuleId(OrbWalletShopPrimaryCard, {});
  } else if (tmp5.NITRO_UPSELL === NITRO_UPSELL) {
    return unpackModuleId(OrbWalletNitroUpsellPrimaryCard, {});
  } else {
    return null;
  }
}
