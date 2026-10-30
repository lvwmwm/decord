// Module ID: 17640
// Function ID: 17641
// Name: OrbWalletComponents
// Dependencies: [19, 17, 1072, 1074, 1386, 6775, 21, 5009, 575, 9506, 5619, 17641, 17645, 4435, 1114, 2173, 17639, 7345, 11380, 5712, 17646, 14457, 5253, 7712, 9658, 6778, 5700, 2062, 9531, 5629, 14677, 12291, 9358, 2]
// Exports: OrbBalanceHeader, OrbWalletFooter

// Module 17640 (OrbWalletComponents)
import nativeDefault from "native" /* 575 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import intl5 from "intl" /* 1114 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2062 */;
import _modDef2173 from "module_2173" /* 2173 */;
import _mod4435 from "module_4435" /* 4435 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import openURLDefault from "openURL" /* 5700 */;
import FastImageDefault from "FastImage" /* 5712 */;
import QuestConstants from "QuestConstants" /* 6775 */;
import QuestTypes from "QuestTypes" /* 6778 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7712 */;
import NitroWheelIcon2 from "NitroWheelIcon" /* 9506 */;
import _mod9531 from "module_9531" /* 9531 */;
import QuestUtils from "QuestUtils" /* 9658 */;
import useIsPremiumSubscriber from "useIsPremiumSubscriber" /* 11380 */;
import AssetRegistryDefault from "AssetRegistry" /* 12291 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14677 */;
import OrbWalletUtils from "OrbWalletUtils" /* 17639 */;
import useNitroProgramReward from "useNitroProgramReward" /* 17641 */;
import ProgramRewardsActionCreatorsDefault from "ProgramRewardsActionCreators" /* 17645 */;
import _modDef17646 from "module_17646" /* 17646 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
function OrbWalletPremiumHeaderInlineText(onPress) {
  let items;
  onPress = onPress.onPress;
  const text = onPress.text;
  const tmp = closure_14();
  const obj = { style: tmp.headerInlineText, children: items };
  const obj2 = { size: "xs", color: nativeDefault.colors.ICON_SUBTLE, accessible: false };
  const NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
  items = [unpackModuleId(NitroWheelIcon, obj2), ];
  let headerInlineLinkText = null;
  const Text = Text_Text.Text;
  const tmp2 = authStore2;
  const tmp3 = hasOwnProperty;
  if (null != onPress) {
    headerInlineLinkText = tmp.headerInlineLinkText;
  }
  items[1] = unpackModuleId(Text, { variant: "text-xs/medium", color: "text-subtle", style: headerInlineLinkText, children: text });
  const tmp2Result = tmp2(tmp3, obj);
  let tmp4Result = tmp2Result;
  if (null != onPress) {
    const obj3 = { onPress, accessibilityRole: "link", hitSlop: nativeDefault.space.PX_8, children: tmp2Result };
    tmp4Result = tmp4(React3, obj3);
  }
  return tmp4Result;
}
function OrbWalletNitroRewardTag() {
  let intl;
  let obj3;
  const obj = useNitroProgramReward;
  const nitroProgramReward = obj.useNitroProgramReward();
  const programReward = nitroProgramReward.programReward;
  const passesGeneralUIInvariant = nitroProgramReward.passesGeneralUIInvariant;
  const effect = react.useEffect(() => {
    ProgramRewardsActionCreatorsDefault();
  }, []);
  if (passesGeneralUIInvariant) {
    if (null != programReward) {
      const _Math = Math;
      const _Date = Date;
      const self = this;
      const self2 = this;
      const differenceInCalendarDays = tmp(4435).differenceInCalendarDays;
      _mod4435;
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const date = new Date(programReward.next_reward_date);
      const date1 = new Date();
      const obj2 = { text: intl.format(_modDef2173.SM0hiz, obj3) };
      const maxResult = max(1, differenceInCalendarDays(date, date1));
      intl = tmp(1114).intl;
      obj3 = { orbAmount: programReward.reward_amount, days: maxResult };
      return unpackModuleId(OrbWalletPremiumHeaderInlineText, obj2);
    }
  }
  return null;
}
function OrbWalletNitroUpsellTag() {
  let intl;
  let openNitroCheckoutFromOrbWallet;
  const obj2 = { text: intl.string(_modDef2173.JZycSO), onPress: openNitroCheckoutFromOrbWallet };
  const obj = OrbWalletUtils;
  openNitroCheckoutFromOrbWallet = obj.useOpenNitroCheckoutFromOrbWallet(AnalyticsLocationDefault.ORB_WALLET_HEADER_NITRO_UPSELL_CTA);
  intl = intl5.intl;
  return unpackModuleId(OrbWalletPremiumHeaderInlineText, obj2);
}
function OrbWalletHeaderTags() {
  const obj = useIsPremiumSubscriber;
  return unpackModuleId(obj.useIsPremiumSubscriber(PremiumTypes.TIER_2) ? OrbWalletNitroRewardTag : OrbWalletNitroUpsellTag, {});
}
function openOrbsShopFromWallet() {
  let items;
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = { analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.ORB_WALLET, screen: constants2.ORBS };
  const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
  items = [];
  CollectiblesActionCreators;
  items[0] = AnalyticsLocationDefault.ORB_WALLET;
  const result = openCollectiblesShopMobile(obj2);
}
function openQuestHomeFromWallet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = QuestUtils;
  const obj3 = { mergeExistingRoutes: true, filter: RewardFilterTypes.VIRTUAL_CURRENCY, fromContent: QuestTypes.QuestContent.ORBS_BALANCE_MENU };
  obj2.openQuestHome(obj3);
}
function openOrbWalletHelp() {
  const tmp = openURLDefault;
  const obj = HelpdeskUtilsDefault;
  tmp(obj.getArticleURL(metroRequire.ORBS_WALLET));
}
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ HelpdeskArticles: metroRequire, NOOP: metroImportDefault } = Constants);
const constants2 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const PremiumTypes = PremiumConstants.PremiumTypes;
const RewardFilterTypes = QuestConstants.RewardFilterTypes;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, headerAssetSlot: { width: 48, height: 48, alignItems: "center", justifyContent: "center", overflow: "visible" }, headerAsset: { width: 68, height: 68 }, headerContent: obj3, headerInlineText: obj4, headerInlineLinkText: { textDecorationLine: "underline" }, footerButtons: obj5, footerButton: { flex: 1 }, footerMeta: obj6 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, justifyContent: "center", gap: nativeDefault.space.PX_4 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj6 = { flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let closure_14 = createStyles(obj);
let result = size.fileFinishedImporting("modules/virtual_currency/native/orb_wallet/OrbWalletComponents.tsx");

export function OrbBalanceHeader(orbBalance) {
  let items;
  let items1;
  let obj3;
  let obj4;
  let obj8;
  let stringResult;
  let tmp10;
  let tmp7;
  orbBalance = orbBalance.orbBalance;
  const tmp = closure_14();
  const obj = { style: tmp.header, children: items };
  const obj2 = { style: tmp.headerAssetSlot, importantForAccessibility: "no-hide-descendants", children: unpackModuleId(tmp7, obj3) };
  obj3 = { source: obj4, style: tmp.headerAsset, resizeMode: "contain" };
  obj4 = { uri: _modDef17646 };
  tmp7 = FastImageDefault;
  items = [unpackModuleId(hasOwnProperty, obj2), ];
  const obj5 = { style: tmp.headerContent, children: items1 };
  const intl = intl5.intl;
  if (null == orbBalance) {
    stringResult = intl.string(tmp8(1114).t.cKwv4k);
    tmp10 = tmp8;
  } else {
    const obj6 = { balance: orbBalance };
    stringResult = intl.formatToPlainString(tmp8(1114).t.zPaLL9, obj6);
    tmp10 = tmp8;
  }
  const obj7 = { accessible: true, accessibilityLabel: stringResult, accessibilityState: { busy: null == orbBalance }, children: unpackModuleId(tmp10(14457).BalanceCounter, obj8) };
  obj8 = { value: orbBalance, onValueChange: onValueReached, onValueReached, targetTotalCounterTime: 1500, textVariant: "display-md", textColor: "text-strong" };
  items1 = [unpackModuleId(hasOwnProperty, obj7), unpackModuleId(OrbWalletHeaderTags, {})];
  items[1] = authStore2(hasOwnProperty, obj5);
  return authStore2(hasOwnProperty, obj);
}
export function OrbWalletFooter() {
  let Button;
  let Button2;
  let Text2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items2;
  let items3;
  let obj11;
  let obj14;
  let obj4;
  let obj6;
  const tmp = closure_14();
  const obj = _mod9531;
  const totalRedeemed = obj.useFetchVirtualCurrencyTotalRedeemed().totalRedeemed;
  const obj2 = { style: tmp.footerButtons, children: items };
  const obj3 = { style: tmp.footerButton, children: unpackModuleId(Button, obj4) };
  obj4 = { text: intl.string(intl5.t.JALI2K), variant: "secondary", size: "md", icon: AssetRegistryDefault2, onPress: openQuestHomeFromWallet };
  Button = components_Button_Button.Button;
  intl = intl5.intl;
  items = [unpackModuleId(hasOwnProperty, obj3), ];
  const obj5 = { style: tmp.footerButton, children: unpackModuleId(Button2, obj6) };
  obj6 = { text: intl2.string(intl5.t.pWG4ze), variant: "secondary", size: "md", icon: AssetRegistryDefault, onPress: openOrbsShopFromWallet };
  Button2 = components_Button_Button.Button;
  intl2 = intl5.intl;
  items[1] = unpackModuleId(hasOwnProperty, obj5);
  const items1 = [authStore2(hasOwnProperty, obj2), ];
  let tmp4Result = null != totalRedeemed;
  const obj7 = { style: tmp.footerMeta, children: items3 };
  const tmp6 = hasOwnProperty;
  if (tmp4Result) {
    const obj8 = { children: items2 };
    const obj9 = { size: "xs", color: nativeDefault.colors.ICON_MUTED, accessible: false };
    const TrophyIcon = tmp2(9358).TrophyIcon;
    items2 = [unpackModuleId(TrophyIcon, obj9), , ];
    const obj10 = { variant: "text-sm/normal", color: "text-muted", children: intl3.format(_modDef2173.B5tZXw, obj11) };
    const Text = tmp2(5619).Text;
    intl3 = tmp2(1114).intl;
    obj11 = { orbAmount: totalRedeemed };
    items2[1] = unpackModuleId(Text, obj10);
    items2[2] = unpackModuleId(Text_Text.Text, { variant: "text-xs/normal", color: "text-subtle", accessible: false, children: "\u2022" });
    tmp4Result = tmp4(tmp5, obj8);
  }
  items3 = [tmp4Result, ];
  const obj12 = { children: items1 };
  const obj13 = { onPress: openOrbWalletHelp, accessibilityRole: "link", hitSlop: nativeDefault.space.PX_8, children: unpackModuleId(Text2, obj14) };
  obj14 = { variant: "text-sm/normal", color: "text-link", children: intl4.string(intl5.t["5qZv9E"]) };
  Text2 = tmp2(5619).Text;
  intl4 = tmp2(1114).intl;
  items3[1] = unpackModuleId(React3, obj13);
  items1[1] = authStore2(tmp6, obj7);
  return authStore2(map1, obj12);
}
