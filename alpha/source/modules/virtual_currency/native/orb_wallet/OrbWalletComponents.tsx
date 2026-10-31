// Module ID: 16893
// Function ID: 16894
// Name: OrbWalletComponents
// Dependencies: [19, 17, 1072, 1385, 6781, 21, 5014, 575, 9528, 5624, 16894, 16898, 4440, 1113, 2172, 16890, 7351, 11416, 5717, 16899, 14495, 6953, 16900, 8025, 5258, 9678, 6784, 5705, 2061, 9553, 5634, 14715, 12329, 9378, 2]
// Exports: OrbBalanceHeader, OrbChallengesCard, OrbWalletFooter

// Module 16893 (OrbWalletComponents)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2061 */;
import _modDef2172 from "module_2172" /* 2172 */;
import _mod4440 from "module_4440" /* 4440 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import openURLDefault from "openURL" /* 5705 */;
import FastImageDefault from "FastImage" /* 5717 */;
import QuestConstants from "QuestConstants" /* 6781 */;
import QuestTypes from "QuestTypes" /* 6784 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6953 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import NitroWheelIcon2 from "NitroWheelIcon" /* 9528 */;
import _mod9553 from "module_9553" /* 9553 */;
import QuestUtils from "QuestUtils" /* 9678 */;
import useIsPremiumSubscriber from "useIsPremiumSubscriber" /* 11416 */;
import AssetRegistryDefault from "AssetRegistry" /* 12329 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14715 */;
import OrbWalletUtils from "OrbWalletUtils" /* 16890 */;
import useNitroProgramReward from "useNitroProgramReward" /* 16894 */;
import ProgramRewardsActionCreatorsDefault from "ProgramRewardsActionCreators" /* 16898 */;
import _modDef16899 from "module_16899" /* 16899 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
function OrbWalletPremiumHeaderInlineText(onPress) {
  let items;
  onPress = onPress.onPress;
  const text = onPress.text;
  const tmp = closure_13();
  const obj = { style: tmp.headerInlineText, children: items };
  const obj2 = { size: "xs", color: nativeDefault.colors.ICON_SUBTLE, accessible: false };
  const NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
  items = [authStore(NitroWheelIcon, obj2), ];
  let headerInlineLinkText = null;
  const Text = Text_Text.Text;
  const tmp2 = unpackModuleId;
  const tmp3 = hasOwnProperty;
  if (null != onPress) {
    headerInlineLinkText = tmp.headerInlineLinkText;
  }
  items[1] = authStore(Text, { variant: "text-xs/medium", color: "text-subtle", style: headerInlineLinkText, children: text });
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
      const differenceInCalendarDays = tmp(4440).differenceInCalendarDays;
      _mod4440;
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const date = new Date(programReward.next_reward_date);
      const date1 = new Date();
      const obj2 = { text: intl.format(_modDef2172.SM0hiz, obj3) };
      const maxResult = max(1, differenceInCalendarDays(date, date1));
      intl = tmp(1113).intl;
      obj3 = { orbAmount: programReward.reward_amount, days: maxResult };
      return authStore(OrbWalletPremiumHeaderInlineText, obj2);
    }
  }
  return null;
}
function OrbWalletNitroUpsellTag() {
  let intl;
  let openNitroCheckoutFromOrbWallet;
  const obj2 = { text: intl.string(_modDef2172.JZycSO), onPress: openNitroCheckoutFromOrbWallet };
  const obj = OrbWalletUtils;
  openNitroCheckoutFromOrbWallet = obj.useOpenNitroCheckoutFromOrbWallet(AnalyticsLocationDefault.ORB_WALLET_HEADER_NITRO_UPSELL_CTA);
  intl = intl5.intl;
  return authStore(OrbWalletPremiumHeaderInlineText, obj2);
}
function OrbWalletHeaderTags() {
  const obj = useIsPremiumSubscriber;
  return authStore(obj.useIsPremiumSubscriber(PremiumTypes.TIER_2) ? OrbWalletNitroRewardTag : OrbWalletNitroUpsellTag, {});
}
function openOrbsShopFromWallet() {
  let items;
  const obj = { analyticsLocations: items };
  const navigateToShopFromOrbWallet = OrbWalletUtils.navigateToShopFromOrbWallet;
  items = [];
  OrbWalletUtils;
  items[0] = AnalyticsLocationDefault.ORB_WALLET;
  const result = navigateToShopFromOrbWallet(obj);
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
  obj4 = { uri: _modDef16899 };
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
  const obj7 = { accessible: true, accessibilityLabel: stringResult, accessibilityState: { busy: null == orbBalance }, children: authStore(tmp10(14495).BalanceCounter, obj8) };
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
      const obj4 = { variant: "text-sm/normal", color: "text-subtle", children: title };
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
            const OrbChallengeListItem = title(isLoading[22]).OrbChallengeListItem;
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
        const obj5 = { variant: "text-sm/medium", color: "text-default", children: intl.string(_modDef2172.xOP5OP) };
        const Text = Text_Text.Text;
        intl = intl5.intl;
        items1 = [authStore(Text, obj5), ];
        const obj6 = { variant: "text-xs/normal", color: "text-subtle", children: intl2.string(_modDef2172.XW2CuY) };
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
    const InlineNotice = title(isLoading[23]).InlineNotice;
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
  let items;
  let items2;
  let items3;
  let obj11;
  let obj14;
  let obj4;
  let obj6;
  const tmp = closure_13();
  const obj = _mod9553;
  const totalRedeemed = obj.useFetchVirtualCurrencyTotalRedeemed().totalRedeemed;
  const obj2 = { style: tmp.footerButtons, children: items };
  const obj3 = { style: tmp.footerButton, children: authStore(Button, obj4) };
  obj4 = { text: intl.string(intl5.t.JALI2K), variant: "secondary", size: "md", icon: AssetRegistryDefault2, onPress: openQuestHomeFromWallet };
  Button = components_Button_Button.Button;
  intl = intl5.intl;
  items = [authStore(hasOwnProperty, obj3), ];
  const obj5 = { style: tmp.footerButton, children: authStore(Button2, obj6) };
  obj6 = { text: intl2.string(intl5.t.pWG4ze), variant: "secondary", size: "md", icon: AssetRegistryDefault, onPress: openOrbsShopFromWallet };
  Button2 = components_Button_Button.Button;
  intl2 = intl5.intl;
  items[1] = authStore(hasOwnProperty, obj5);
  const items1 = [unpackModuleId(hasOwnProperty, obj2), ];
  let tmp4Result = null != totalRedeemed;
  const obj7 = { style: tmp.footerMeta, children: items3 };
  const tmp6 = hasOwnProperty;
  if (tmp4Result) {
    const obj8 = { children: items2 };
    const obj9 = { size: "xs", color: nativeDefault.colors.ICON_MUTED, accessible: false };
    const TrophyIcon = tmp2(9378).TrophyIcon;
    items2 = [authStore(TrophyIcon, obj9), , ];
    const obj10 = { variant: "text-sm/normal", color: "text-muted", children: intl3.format(_modDef2172.B5tZXw, obj11) };
    const Text = tmp2(5624).Text;
    intl3 = tmp2(1113).intl;
    obj11 = { orbAmount: totalRedeemed };
    items2[1] = authStore(Text, obj10);
    items2[2] = authStore(Text_Text.Text, { variant: "text-xs/normal", color: "text-subtle", accessible: false, children: "\u2022" });
    tmp4Result = tmp4(tmp5, obj8);
  }
  items3 = [tmp4Result, ];
  const obj12 = { children: items1 };
  const obj13 = { onPress: openOrbWalletHelp, accessibilityRole: "link", hitSlop: nativeDefault.space.PX_8, children: authStore(Text2, obj14) };
  obj14 = { variant: "text-sm/normal", color: "text-link", children: intl4.string(intl5.t["5qZv9E"]) };
  Text2 = tmp2(5624).Text;
  intl4 = tmp2(1113).intl;
  items3[1] = authStore(React3, obj13);
  items1[1] = unpackModuleId(tmp6, obj7);
  return unpackModuleId(authStore2, obj12);
}
