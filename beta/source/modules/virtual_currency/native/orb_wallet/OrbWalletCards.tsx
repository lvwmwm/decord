// Module ID: 16315
// Function ID: 16316
// Name: OrbWalletCards
// Dependencies: [32, 19, 17, 15027, 4759, 1388, 21, 4913, 575, 16316, 16317, 7047, 16318, 5504, 5511, 7591, 7151, 1112, 5477, 7135, 5468, 16310, 14212, 504, 4746, 9080, 7520, 7539, 16308, 2375, 13011, 8840, 2]
// Exports: OrbWalletPrimaryCard, getWalletPrimaryCardType, useOrbWalletPrimaryCard

// Module 16315 (OrbWalletCards)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1112 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import _modDef2375 from "module_2375" /* 2375 */;
import LinearGradientDefault from "LinearGradient" /* 5468 */;
import useToken from "useToken" /* 5477 */;
import Text_Text from "Text/Text" /* 5504 */;
import components_Button_Button from "components/Button/Button" /* 5511 */;
import Card_Card from "Card/Card" /* 7047 */;
import _modDef7135 from "module_7135" /* 7135 */;
import XSmallIcon2 from "XSmallIcon" /* 7151 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7539 */;
import IconButton2 from "IconButton" /* 7591 */;
import AssetRegistryDefault from "AssetRegistry" /* 8840 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13011 */;
import VirtualCurrencyAnalyticsUtil from "VirtualCurrencyAnalyticsUtil" /* 16308 */;
import AssetRegistry from "AssetRegistry" /* 16316 */;
import AssetRegistry2 from "AssetRegistry" /* 16317 */;
import LocalSvgDefault from "LocalSvg" /* 16318 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import OrbChallengesStore from "OrbChallengesStore" /* 15027 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4759 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c9;
let closure_12;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj4;
let obj5;
let obj6;
let obj7;
let tmp;
let unpackModuleId;
const OrbWalletUtils = tmp(16310);
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
  const obj3 = { style: tmp.primaryCardGraphic, accessible: true, accessibilityRole: "image", accessibilityLabel: graphicAccessibilityLabel, children: unpackModuleId(LocalSvgDefault, size) };
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
  const tmp5 = _modDef7135;
  return unpackModuleId(tmp5, obj3);
}
function OrbWalletShopPrimaryCard(arg0) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let onClose;
  let onCtaPress;
  const obj = { title: intl.string(_modDef2375.v8QrJf), graphic: size1, graphicAccessibilityLabel: intl2.string(_modDef2375.qa1xyr), subTextDescription: intl3.string(_modDef2375.HACucK), buttonText: intl4.string(_modDef2375["7raRgL"]), buttonIcon: AssetRegistryDefault2, buttonVariant: "primary", buttonSize: "sm", onCtaPress, onClose };
  ({ onCtaPress, onClose } = arg0);
  intl = intl5.intl;
  intl2 = intl5.intl;
  intl3 = intl5.intl;
  intl4 = intl5.intl;
  return unpackModuleId(BaseOrbWalletPrimaryCard, obj);
}
function OrbWalletNitroUpsellPrimaryCard(arg0) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let multiplier;
  let onClose;
  let onCtaPress;
  const obj = { title: intl.string(_modDef2375.ZqCAos), graphic: size, backdrop: unpackModuleId(OrbWalletNitroGlow, {}), graphicAccessibilityLabel: intl2.string(_modDef2375.FkfrRH), subTextDescription: intl3.format(_modDef2375.BzzCNE, { multiplier }), buttonText: intl4.string(_modDef2375.U9UQJE), buttonIcon: AssetRegistryDefault, buttonVariant: "expressive", onCtaPress, onClose };
  ({ onCtaPress, onClose, multiplier } = arg0);
  intl = intl5.intl;
  intl2 = intl5.intl;
  intl3 = intl5.intl;
  intl4 = intl5.intl;
  return unpackModuleId(BaseOrbWalletPrimaryCard, obj);
}
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
let result = size.fileFinishedImporting("modules/virtual_currency/native/orb_wallet/OrbWalletCards.tsx");

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
export function useOrbWalletPrimaryCard(balance) {
  let NITRO_UPSELL;
  let ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA;
  let analyticsLocations;
  let closure_2;
  let items2;
  let items3;
  let items4;
  let orbWalletAnalyticsPage;
  let prop;
  let tmp = orbWalletAnalyticsPage;
  let obj = orbWalletAnalyticsPage(16310);
  orbWalletAnalyticsPage = obj.useOrbWalletAnalyticsPage();
  obj2 = orbWalletAnalyticsPage(14212);
  const isPremiumSubscriber = obj2.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  let obj3 = orbWalletAnalyticsPage(504);
  const items = [OrbChallengesStore];
  const stateFromStores = obj3.useStateFromStores(items, () => OrbChallengesStore.nitroGatedOrbMultiplier);
  if (isPremiumSubscriber) {
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
  if (NITRO_UPSELL === obj.SHOP_ORBS) {
    prop = tmp(4746).DismissibleContent.ORB_WALLET_SHOP_CTA_CARD_MOBILE;
  } else {
    prop = null;
    if (NITRO_UPSELL === obj.NITRO_UPSELL) {
      prop = null;
      if (null != stateFromStores) {
        prop = tmp(4746).DismissibleContent.ORB_WALLET_NITRO_UPSELL_CTA_CARD_MOBILE;
      }
    }
  }
  let tmpResult = tmp(9080);
  const useSelectedDismissibleContent = tmpResult.useSelectedDismissibleContent;
  if (null != prop) {
    const items1 = [prop];
    items2 = items1;
  } else {
    items2 = [];
  }
  const obj4 = { groupName: constants2.ORB_WALLET, bypassAutoDismiss: true };
  const tmp15 = analyticsLocations(useSelectedDismissibleContent(items2, obj4), 2);
  dependencyMap = tmp16;
  let tmp17 = null;
  if (null != tmp15[0]) {
    tmp17 = NITRO_UPSELL;
  }
  const tmp19 = NITRO_UPSELL(7520);
  analyticsLocations = tmp19(NITRO_UPSELL(7539).ORB_WALLET_PRIMARY_CARD).analyticsLocations;
  const tmpResult2 = tmp(16310);
  const openNitroCheckoutFromOrbWallet = tmpResult2.useOpenNitroCheckoutFromOrbWallet(NITRO_UPSELL(7539).ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA);
  if (NITRO_UPSELL === obj.SHOP_ORBS) {
    ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA = tmp18(7539).ORB_WALLET_SHOP_CTA;
  } else {
    ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA = tmp18(7539).ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA;
  }
  const obj5 = {
    onCtaPress: openNitroCheckoutFromOrbWallet.useCallback(() => {
      const obj = VirtualCurrencyAnalyticsUtil;
      obj2 = { pageType: orbWalletAnalyticsPage, sectionType: AnalyticsLocationDefault.ORB_WALLET_PRIMARY_CARD, ctaObject: ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA };
      obj.trackOrbsClick(obj2);
      if (NITRO_UPSELL === obj.SHOP_ORBS) {
        const obj3 = { analyticsLocations };
        const tmpResult = OrbWalletUtils;
        const result = tmpResult.navigateToShopFromOrbWallet(obj3);
      } else {
        openNitroCheckoutFromOrbWallet();
      }
      closure_2(metroImportAll.TAKE_ACTION);
    }, items3),
    onClose: openNitroCheckoutFromOrbWallet.useCallback(() => closure_2(metroImportAll.DISMISS), items4),
    visibleCardType: tmp17,
    nitroGatedOrbMultiplier: stateFromStores
  };
  items3 = [orbWalletAnalyticsPage, ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA, NITRO_UPSELL, analyticsLocations, openNitroCheckoutFromOrbWallet, tmp15[1]];
  items4 = [tmp15[1]];
  return obj5;
}
export function OrbWalletPrimaryCard(arg0) {
  let nitroGatedOrbMultiplier;
  let obj;
  let visibleCardType;
  ({ visibleCardType, nitroGatedOrbMultiplier } = arg0);
  const merged = Object.assign(arg0, Object.assign({ visibleCardType: 0, nitroGatedOrbMultiplier: 0 }));
  if (obj.SHOP_ORBS === visibleCardType) {
    obj2 = {};
    const merged1 = Object.assign(merged);
    return unpackModuleId(OrbWalletShopPrimaryCard, obj2);
  } else if (tmp2.NITRO_UPSELL === visibleCardType) {
    let tmp3 = null;
    if (null != nitroGatedOrbMultiplier) {
      obj = { multiplier: nitroGatedOrbMultiplier };
      const merged2 = Object.assign(merged);
      tmp3 = unpackModuleId(OrbWalletNitroUpsellPrimaryCard, obj);
    }
    return tmp3;
  } else {
    return null;
  }
}
