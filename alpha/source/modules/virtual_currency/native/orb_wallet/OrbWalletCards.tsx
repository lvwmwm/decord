// Module ID: 17647
// Function ID: 17648
// Name: OrbWalletCards
// Dependencies: [32, 19, 17, 17648, 1074, 1386, 21, 5009, 575, 6971, 5712, 5619, 5629, 8020, 7048, 1114, 5253, 7712, 7345, 2173, 17651, 12291, 504, 17639, 17652, 8511, 11380, 2]
// Exports: OrbWalletPrimaryCard

// Module 17647 (OrbWalletCards)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import intl5 from "intl" /* 1114 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import _modDef2173 from "module_2173" /* 2173 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import FastImageDefault from "FastImage" /* 5712 */;
import Card_Card from "Card/Card" /* 6971 */;
import XSmallIcon2 from "XSmallIcon" /* 7048 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7712 */;
import IconButton2 from "IconButton" /* 8020 */;
import AssetRegistryDefault from "AssetRegistry" /* 8511 */;
import useIsPremiumSubscriber from "useIsPremiumSubscriber" /* 11380 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 12291 */;
import OrbWalletUtils from "OrbWalletUtils" /* 17639 */;
import _modDef17651 from "module_17651" /* 17651 */;
import _modDef17652 from "module_17652" /* 17652 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import OrbChallengesStore from "OrbChallengesStore" /* 17648 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
function BaseOrbWalletPrimaryCard(buttonVariant) {
  let IconButton;
  let XSmallIcon;
  let buttonIcon;
  let buttonText;
  let imageAccessibilityLabel;
  let imageUri;
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
  let str = buttonVariant.buttonVariant;
  ({ title, imageUri, imageAccessibilityLabel, subTextDescription, buttonText, buttonIcon } = buttonVariant);
  if (str === undefined) {
    str = "secondary";
  }
  let str2 = buttonVariant.buttonSize;
  if (str2 === undefined) {
    str2 = "md";
  }
  let flag = buttonVariant.buttonLoading;
  if (flag === undefined) {
    flag = false;
  }
  ({ onCtaPress, onClose } = buttonVariant);
  const tmp = closure_11();
  const obj = { variant: "secondary", border: "faint", radius: 16, style: tmp.primaryCard, children: items2 };
  const obj2 = { style: tmp.primaryCardContent, children: items };
  const Card = Card_Card.Card;
  items = [, ];
  const obj3 = { source: { uri: imageUri }, style: tmp.primaryCardGraphic, resizeMode: "contain", accessible: true, accessibilityLabel: imageAccessibilityLabel };
  items[0] = React4(FastImageDefault, obj3);
  const obj4 = { style: tmp.primaryCardText, children: items1 };
  items1 = [React4(Text_Text.Text, { variant: "text-md/semibold", color: "text-strong", accessibilityRole: "header", children: title }), React4(Text_Text.Text, { variant: "text-sm/normal", color: "text-default", children: subTextDescription })];
  items[1] = authStore(View, obj4);
  items2 = [authStore(View, obj2), React4(components_Button_Button.Button, { text: buttonText, size: str2, icon: buttonIcon, variant: str, loading: flag, onPress: onCtaPress }), ];
  const obj5 = { style: tmp.primaryCardCloseButton, children: React4(IconButton, obj6) };
  obj6 = { variant: "icon-only", size: "sm", icon: React4(XSmallIcon, obj7), accessibilityLabel: intl.string(intl5.t.cpT0Cq), onPress: onClose };
  IconButton = IconButton2.IconButton;
  obj7 = { size: "xxs", color: nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT };
  XSmallIcon = XSmallIcon2.XSmallIcon;
  intl = intl5.intl;
  items2[2] = React4(View, obj5);
  return authStore(Card, obj);
}
function openOrbsShopFromWallet() {
  let items;
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = { analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.ORBS_BALANCE_MENU, screen: constants.ORBS };
  const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
  items = [];
  CollectiblesActionCreators;
  items[0] = AnalyticsLocationDefault.ORBS_BALANCE_MENU;
  const result = openCollectiblesShopMobile(obj2);
}
function OrbWalletShopPrimaryCard(onClose) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  const obj = { title: intl.string(_modDef2173.v8QrJf), imageUri: _modDef17651, imageAccessibilityLabel: intl2.string(_modDef2173.qa1xyr), subTextDescription: intl3.string(_modDef2173.HACucK), buttonText: intl4.string(_modDef2173["7raRgL"]), buttonIcon: AssetRegistryDefault2, buttonVariant: "primary", buttonSize: "sm", onCtaPress: openOrbsShopFromWallet, onClose };
  onClose = onClose.onClose;
  intl = intl5.intl;
  intl2 = intl5.intl;
  intl3 = intl5.intl;
  intl4 = intl5.intl;
  return React4(BaseOrbWalletPrimaryCard, obj);
}
function OrbWalletNitroUpsellPrimaryCard(onClose) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let obj3;
  onClose = onClose.onClose;
  const items = [OrbChallengesStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => {
    let num = OrbChallengesStore.nitroGatedOrbMultiplier;
    if (num == null) {
      num = 1.2;
    }
    return num;
  });
  OrbWalletUtils;
  let tmp7 = null;
  if (null != stateFromStores) {
    const obj2 = { title: intl.string(_modDef2173.ZqCAos), imageUri: _modDef17652, imageAccessibilityLabel: intl2.string(_modDef2173.FkfrRH), subTextDescription: intl3.format(_modDef2173["Ba/7wO"], obj3), buttonText: intl4.string(_modDef2173.U9UQJE), buttonIcon: AssetRegistryDefault, buttonVariant: "expressive", onCtaPress: tmp6, onClose };
    intl = tmp(1114).intl;
    intl2 = tmp(1114).intl;
    intl3 = tmp(1114).intl;
    obj3 = { multiplier: stateFromStores };
    intl4 = tmp(1114).intl;
    tmp7 = React4(BaseOrbWalletPrimaryCard, obj2);
  }
  return tmp7;
}
const View = react_native.View;
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { primaryCard: obj2, primaryCardContent: obj3, primaryCardGraphic: size, primaryCardText: obj4, primaryCardCloseButton: obj5 };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingEnd: nativeDefault.space.PX_24 };
size = { width: 56, height: 56, borderRadius: nativeDefault.radii.md };
obj4 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj5 = { position: "absolute", top: nativeDefault.space.PX_4, end: nativeDefault.space.PX_4 };
let closure_11 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/virtual_currency/native/orb_wallet/OrbWalletCards.tsx");

export function OrbWalletPrimaryCard(orbBalance) {
  let c0;
  let tmp3;
  orbBalance = orbBalance.orbBalance;
  c0 = undefined;
  const obj = useIsPremiumSubscriber;
  const isPremiumSubscriber = obj.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  [tmp3, c0] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback(() => _undefined(true), []);
  let tmp5 = null;
  if (!tmp3) {
    let tmp8;
    if (isPremiumSubscriber) {
      let tmp9 = null;
      if (null != orbBalance) {
        tmp9 = null;
        if (orbBalance >= 1400) {
          const obj2 = { onClose: callback };
          tmp9 = React4(OrbWalletShopPrimaryCard, obj2);
        }
      }
      tmp8 = tmp9;
    } else {
      const obj3 = { onClose: callback };
      tmp8 = React4(OrbWalletNitroUpsellPrimaryCard, obj3);
    }
    tmp5 = tmp8;
  }
  return tmp5;
}
