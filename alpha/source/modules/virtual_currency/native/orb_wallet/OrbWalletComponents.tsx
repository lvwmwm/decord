// Module ID: 17532
// Function ID: 17533
// Name: OrbWalletComponents
// Dependencies: [19, 17, 1072, 1390, 5338, 21, 5306, 575, 9436, 5929, 17530, 7937, 17528, 1113, 2333, 15469, 6020, 17533, 10052, 7418, 17534, 8159, 5552, 10128, 5341, 6008, 2188, 10437, 5936, 10563, 10566, 10324, 2]
// Exports: OrbBalanceHeader, OrbChallengesCard, OrbWalletFooter

// Module 17532 (OrbWalletComponents)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import PremiumConstants from "PremiumConstants" /* 1390 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2188 */;
import _modDef2333 from "module_2333" /* 2333 */;
import QuestConstants from "QuestConstants" /* 5338 */;
import QuestTypes from "QuestTypes" /* 5341 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import Text_Text from "Text/Text" /* 5929 */;
import openURLDefault from "openURL" /* 6008 */;
import FastImageDefault from "FastImage" /* 6020 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 7418 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7937 */;
import NitroWheelIcon2 from "NitroWheelIcon" /* 9436 */;
import QuestUtils from "QuestUtils" /* 10128 */;
import AssetRegistryDefault from "AssetRegistry" /* 10563 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10566 */;
import useIsPremiumSubscriber from "useIsPremiumSubscriber" /* 15469 */;
import VirtualCurrencyAnalyticsUtil from "VirtualCurrencyAnalyticsUtil" /* 17528 */;
import OrbWalletUtils from "OrbWalletUtils" /* 17530 */;
import _modDef17533 from "module_17533" /* 17533 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let c10;
let closure_12;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let unpackModuleId;
function OrbWalletPremiumHeaderInlineText(arg0) {
  let items;
  let obj2;
  let onPress;
  let text;
  ({ text, onPress } = arg0);
  const tmp = closure_13();
  const obj = { onPress, accessibilityRole: "link", hitSlop: nativeDefault.space.PX_8, children: unpackModuleId(hasOwnProperty, obj2) };
  obj2 = { style: tmp.headerInlineText, children: items };
  const obj3 = { size: "xs", color: nativeDefault.colors.ICON_SUBTLE, accessible: false };
  const NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
  items = [authStore(NitroWheelIcon, obj3), ];
  const obj4 = { variant: "body-xs/medium", color: "text-subtle", style: tmp.headerInlineLinkText, children: text };
  items[1] = authStore(Text_Text.Text, obj4);
  return authStore(React3, obj);
}
function OrbWalletNitroUpsellTag() {
  let callback;
  let intl;
  let openNitroCheckoutFromOrbWallet;
  let orbWalletAnalyticsPage;
  let obj = orbWalletAnalyticsPage(17530);
  orbWalletAnalyticsPage = obj.useOrbWalletAnalyticsPage();
  let obj2 = orbWalletAnalyticsPage(17530);
  openNitroCheckoutFromOrbWallet = obj2.useOpenNitroCheckoutFromOrbWallet(openNitroCheckoutFromOrbWallet(7937).ORB_WALLET_HEADER_NITRO_UPSELL_CTA);
  const items = [orbWalletAnalyticsPage, openNitroCheckoutFromOrbWallet];
  const obj3 = { text: intl.string(openNitroCheckoutFromOrbWallet(2333).JZycSO), onPress: callback };
  callback = react.useCallback(() => {
    const obj = VirtualCurrencyAnalyticsUtil;
    const obj2 = { pageType: orbWalletAnalyticsPage, sectionType: AnalyticsLocationDefault.ORB_WALLET, ctaObject: AnalyticsLocationDefault.ORB_WALLET_HEADER_NITRO_UPSELL_CTA };
    obj.trackOrbsClick(obj2);
    openNitroCheckoutFromOrbWallet();
  }, items);
  intl = orbWalletAnalyticsPage(1113).intl;
  return closure_10(OrbWalletPremiumHeaderInlineText, obj3);
}
function OrbWalletHeaderTags() {
  let tmp = null;
  const obj = useIsPremiumSubscriber;
  if (!obj.useIsPremiumSubscriber(PremiumTypes.TIER_2)) {
    tmp = authStore(OrbWalletNitroUpsellTag, {});
  }
  return tmp;
}
function openOrbWalletHelp() {
  const tmp = openURLDefault;
  const obj = HelpdeskUtilsDefault;
  tmp(obj.getArticleURL(metroRequire.ORBS_WALLET));
}
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ HelpdeskArticles: metroRequire, NOOP: metroImportDefault } = Constants);
const PremiumTypes = PremiumConstants.PremiumTypes;
const RewardFilterTypes = QuestConstants.RewardFilterTypes;
let Fragment = Fragment_mod;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, headerAssetSlot: { width: 48, height: 48, alignItems: "center", justifyContent: "center", overflow: "visible" }, headerAsset: { width: 68, height: 68 }, headerContent: obj3, headerInlineText: obj4, headerInlineLinkText: { textDecorationLine: "underline" }, challengesCard: obj5, challengesLoading: obj6, challengesDivider: obj7, challengesEmpty: obj8, footerButtons: obj9, footerButton: { flex: 1 }, footerMeta: obj10 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, justifyContent: "center", gap: nativeDefault.space.PX_4 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj5 = { gap: nativeDefault.space.PX_16 };
obj6 = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center" };
obj7 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj8 = { gap: nativeDefault.space.PX_4 };
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj10 = { flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let closure_13 = createStyles(obj);
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
  const tmp = closure_13();
  const obj = { style: tmp.header, children: items };
  const obj2 = { style: tmp.headerAssetSlot, importantForAccessibility: "no-hide-descendants", children: authStore(tmp7, obj3) };
  obj3 = { source: obj4, style: tmp.headerAsset, resizeMode: "contain" };
  obj4 = { uri: _modDef17533 };
  tmp7 = FastImageDefault;
  items = [authStore(hasOwnProperty, obj2), ];
  const obj5 = { style: tmp.headerContent, children: items1 };
  const intl = intl5.intl;
  if (null == orbBalance) {
    stringResult = intl.string(tmp8(1113).t.cKwv4k);
    tmp10 = tmp8;
  } else {
    const obj6 = { balance: orbBalance };
    stringResult = intl.formatToPlainString(tmp8(1113).t.zPaLL9, obj6);
    tmp10 = tmp8;
  }
  const obj7 = { accessible: true, accessibilityLabel: stringResult, accessibilityState: { busy: null == orbBalance }, children: authStore(tmp10(10052).BalanceCounter, obj8) };
  obj8 = { value: orbBalance, onValueChange: onValueReached, onValueReached, targetTotalCounterTime: 1500, textVariant: "display-md", textColor: "text-strong" };
  items1 = [authStore(hasOwnProperty, obj7), authStore(OrbWalletHeaderTags, {})];
  items[1] = unpackModuleId(hasOwnProperty, obj5);
  return unpackModuleId(hasOwnProperty, obj);
}
export function OrbChallengesCard(title) {
  let items1;
  title = title.title;
  const challenges = title.challenges;
  const isLoading = title.isLoading;
  const onClaim = title.onClaim;
  const inlineNoticeProps = title.inlineNoticeProps;
  let tmp = closure_13();
  let closure_5 = tmp;
  let tmp2 = challenges.length > 0;
  let closure_6 = tmp2;
  let items = [, , , , , , , , ];
  ({ challengesLoading: arr2[0], challengesDivider: arr2[1], challengesEmpty: arr2[2] } = tmp);
  items[3] = title;
  items[4] = challenges;
  items[5] = onClaim;
  items[6] = inlineNoticeProps;
  items[7] = tmp2;
  items[8] = isLoading;
  let obj = { style: tmp.challengesCard, children: items1 };
  let tmp6 = null != inlineNoticeProps;
  const memo = onClaim.useMemo(() => {
    let intl;
    let intl2;
    let items;
    let items1;
    let tmp5;
    if (true === isLoading) {
      let tmp = inlineNoticeProps;
      let tmp2 = null;
      if (null == inlineNoticeProps) {
        let obj2 = { style: challengesDivider.challengesLoading, accessibilityState: { busy: true }, children: authStore(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
        tmp5 = authStore(hasOwnProperty, obj2);
      }
      return tmp5;
    }
    const tmp3 = closure_6;
    if (tmp3) {
      let obj3 = { children: items };
      const obj4 = { variant: "body-sm/normal", color: "text-subtle", children: title };
      items = [
        authStore(Text_Text.Text, obj4),
        challenges.map((achievementIdentifier, index) => {
            let items;
            let tmp2 = index > 0;
            const Fragment = onClaim.Fragment;
            const tmp = closure_2_11;
            if (tmp2) {
              const obj = { style: challengesDivider.challengesDivider };
              tmp2 = closure_2_10(closure_5, obj);
            }
            const obj2 = { children: items };
            items = [tmp2, ];
            const obj3 = { onClaim };
            const OrbChallengeListItem = title(isLoading[20]).OrbChallengeListItem;
            const merged = Object.assign(achievementIdentifier);
            items[1] = closure_2_10(OrbChallengeListItem, obj3);
            return tmp(Fragment, obj2, achievementIdentifier.achievementIdentifier);
          })
      ];
      tmp5 = unpackModuleId(authStore2, obj3);
    } else {
      tmp5 = null;
      if (null == inlineNoticeProps) {
        let obj = { style: challengesDivider.challengesEmpty, children: items1 };
        const obj5 = { variant: "body-sm/medium", color: "text-default", children: intl.string(_modDef2333.xOP5OP) };
        const Text = Text_Text.Text;
        intl = intl5.intl;
        items1 = [authStore(Text, obj5), ];
        const obj6 = { variant: "body-xs/normal", color: "text-subtle", children: intl2.string(_modDef2333.XW2CuY) };
        const Text2 = Text_Text.Text;
        intl2 = intl5.intl;
        items1[1] = authStore(Text2, obj6);
        tmp5 = unpackModuleId(hasOwnProperty, obj);
      }
    }
  }, items);
  const tmp4 = closure_11;
  let tmp5 = closure_5;
  if (tmp6) {
    let obj2 = {};
    const InlineNotice = title(isLoading[21]).InlineNotice;
    let merged = Object.assign(inlineNoticeProps);
    tmp6 = closure_10(InlineNotice, obj2);
  }
  items1 = [tmp6, memo];
  return tmp4(tmp5, obj);
}
export function OrbWalletFooter() {
  let Button;
  let Button2;
  let Text2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  let items4;
  let items5;
  let obj12;
  let obj15;
  let obj5;
  let obj7;
  let orbWalletAnalyticsPage;
  const tmp = closure_13();
  const tmp2 = orbWalletAnalyticsPage;
  let obj = orbWalletAnalyticsPage(17530);
  orbWalletAnalyticsPage = obj.useOrbWalletAnalyticsPage();
  let obj2 = orbWalletAnalyticsPage(10437);
  const totalRedeemed = obj2.useFetchVirtualCurrencyTotalRedeemed().totalRedeemed;
  let items = [orbWalletAnalyticsPage];
  const items1 = [orbWalletAnalyticsPage];
  const callback = react.useCallback(() => {
    const obj = VirtualCurrencyAnalyticsUtil;
    const obj2 = { pageType: orbWalletAnalyticsPage, sectionType: AnalyticsLocationDefault.ORB_WALLET_FOOTER, ctaObject: AnalyticsLocationDefault.ORB_WALLET_QUEST_HOME_CTA };
    obj.trackOrbsClick(obj2);
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.hideActionSheet();
    const obj4 = QuestUtils;
    const obj5 = { mergeExistingRoutes: true, filter: RewardFilterTypes.VIRTUAL_CURRENCY, fromContent: QuestTypes.QuestContent.ORBS_BALANCE_MENU };
    obj4.openQuestHome(obj5);
  }, items);
  let obj3 = { style: tmp.footerButtons, children: items2 };
  let obj4 = { style: tmp.footerButton, children: closure_10(Button, obj5) };
  const callback1 = react.useCallback(() => {
    let items;
    const obj = VirtualCurrencyAnalyticsUtil;
    const obj2 = { pageType: orbWalletAnalyticsPage, sectionType: AnalyticsLocationDefault.ORB_WALLET_FOOTER, ctaObject: AnalyticsLocationDefault.ORB_WALLET_SHOP_CTA };
    obj.trackOrbsClick(obj2);
    const obj3 = { analyticsLocations: items };
    const navigateToShopFromOrbWallet = OrbWalletUtils.navigateToShopFromOrbWallet;
    items = [];
    OrbWalletUtils;
    items[0] = AnalyticsLocationDefault.ORB_WALLET;
    const result = navigateToShopFromOrbWallet(obj3);
  }, items1);
  obj5 = { text: intl.string(orbWalletAnalyticsPage(1113).t.JALI2K), variant: "secondary", size: "md", icon: AssetRegistryDefault, onPress: callback };
  Button = orbWalletAnalyticsPage(5936).Button;
  intl = orbWalletAnalyticsPage(1113).intl;
  items2 = [closure_10(closure_5, obj4), ];
  const obj6 = { style: tmp.footerButton, children: closure_10(Button2, obj7) };
  obj7 = { text: intl2.string(orbWalletAnalyticsPage(1113).t.pWG4ze), variant: "secondary", size: "md", icon: AssetRegistryDefault2, onPress: callback1 };
  Button2 = orbWalletAnalyticsPage(5936).Button;
  intl2 = orbWalletAnalyticsPage(1113).intl;
  items2[1] = closure_10(closure_5, obj6);
  const items3 = [closure_11(closure_5, obj3), ];
  let tmp7Result = null != totalRedeemed;
  const obj8 = { style: tmp.footerMeta, children: items5 };
  const tmp9 = closure_5;
  if (tmp7Result) {
    const obj9 = { children: items4 };
    const obj10 = { size: "xs", color: nativeDefault.colors.ICON_MUTED, accessible: false };
    const TrophyIcon = tmp2(10324).TrophyIcon;
    items4 = [closure_10(TrophyIcon, obj10), , ];
    const obj11 = { variant: "body-sm/normal", color: "text-muted", children: intl3.format(_modDef2333.B5tZXw, obj12) };
    const Text = tmp2(5929).Text;
    intl3 = tmp2(1113).intl;
    obj12 = { orbAmount: totalRedeemed };
    items4[1] = closure_10(Text, obj11);
    items4[2] = closure_10(tmp2(5929).Text, { variant: "body-xs/normal", color: "text-subtle", accessible: false, children: "\u2022" });
    tmp7Result = tmp7(tmp8, obj9);
  }
  items5 = [tmp7Result, ];
  const obj13 = { children: items3 };
  const obj14 = { onPress: openOrbWalletHelp, accessibilityRole: "link", hitSlop: nativeDefault.space.PX_8, children: closure_10(Text2, obj15) };
  obj15 = { variant: "body-sm/normal", color: "text-link", children: intl4.string(tmp2(1113).t["5qZv9E"]) };
  Text2 = tmp2(5929).Text;
  intl4 = tmp2(1113).intl;
  items5[1] = closure_10(closure_4, obj14);
  items3[1] = closure_11(tmp9, obj8);
  return closure_11(closure_12, obj13);
}
