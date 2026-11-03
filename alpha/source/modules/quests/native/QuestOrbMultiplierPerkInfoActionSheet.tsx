// Module ID: 17285
// Function ID: 17286
// Name: QuestOrbMultiplierPerkInfoActionSheet
// Dependencies: [19, 17, 1072, 21, 5141, 575, 5381, 7687, 10161, 5829, 2190, 5754, 1113, 1627, 5718, 5296, 5747, 9835, 3801, 5395, 17282, 2]
// Exports: default

// Module 17285 (QuestOrbMultiplierPerkInfoActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2190 */;
import _modDef3801 from "module_3801" /* 3801 */;
import NitroQuestOrbsMultiplierRive from "NitroQuestOrbsMultiplierRive" /* 5296 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 5718 */;
import Text_Text from "Text/Text" /* 5747 */;
import components_Button_Button from "components/Button/Button" /* 5754 */;
import LinkingDefault from "Linking" /* 5829 */;
import openUserSettings from "openUserSettings" /* 7687 */;
import QuestOrbMultiplierUtils from "QuestOrbMultiplierUtils" /* 9835 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 10161 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
function Footer(eligibleToReceivePremiumRewards) {
  let constants2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let loading;
  let onPress;
  let tmp11;
  eligibleToReceivePremiumRewards = eligibleToReceivePremiumRewards.eligibleToReceivePremiumRewards;
  const tmp = closure_12();
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = openUserSettings;
    const obj3 = { screen: constants2.PREMIUM };
    obj2.openUserSettings(obj3);
  }, []);
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(false, callback, hasOwnProperty.QUEST_ORB_MULTIPLIER_PERK_INFO));
  usePremiumFeatureUpsellGetNitroDefault(false, callback, hasOwnProperty.QUEST_ORB_MULTIPLIER_PERK_INFO);
  const callback1 = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const openURL = LinkingDefault.openURL;
    LinkingDefault;
    const obj2 = HelpdeskUtilsDefault;
    openURL(obj2.getArticleURL(constants.VIRTUAL_CURRENCY_ORB_MULTIPLIER_LEARN_MORE));
  }, []);
  let obj = { style: tmp.buttonContainer, children: null };
  const callback2 = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }, []);
  const Button = components_Button_Button.Button;
  const tmp7 = React4;
  const tmp8 = View;
  if (eligibleToReceivePremiumRewards) {
    let obj2 = { size: "lg", text: intl3.string(intl5.t.hvVgAZ), variant: "primary", onPress: callback1 };
    intl3 = tmp10(1113).intl;
    const items = [metroImportAll(Button, obj2), ];
    let obj3 = { size: "lg", variant: "secondary", text: intl4.string(intl5.t.cpT0Cq), onPress: callback2 };
    const Button3 = tmp10(5754).Button;
    intl4 = tmp10(1113).intl;
    items[1] = metroImportAll(Button3, obj3);
    obj.children = items;
    tmp11 = obj;
  } else {
    const obj4 = { size: "lg", variant: "primary", text: intl.string(intl5.t.pj0XBN), onPress, loading };
    intl = tmp10(1113).intl;
    const items1 = [metroImportAll(Button, obj4), ];
    const obj5 = { size: "lg", variant: "secondary", text: intl2.string(intl5.t.PcTCB7), onPress: callback };
    const Button2 = tmp10(5754).Button;
    intl2 = tmp10(1113).intl;
    items1[1] = metroImportAll(Button2, obj5);
    obj.children = items1;
    tmp11 = obj;
  }
  return tmp7(tmp8, tmp11);
}
function SheetContent(arg0) {
  let body;
  let eligibleToReceivePremiumRewards;
  let items;
  let items1;
  let items2;
  let items3;
  let obj3;
  let title;
  ({ title, body, eligibleToReceivePremiumRewards } = arg0);
  const tmp = closure_12();
  const obj = { children: items };
  const bottom = useSafeAreaInsetsDefault().bottom;
  items = [metroImportAll(ActionSheetHeaderBar.ActionSheetHeaderBar, { variant: "floating" }), ];
  const obj2 = { style: items1, children: React4(View, obj3) };
  items1 = [tmp.container, { marginBottom: bottom }];
  obj3 = { style: tmp.contentContainer, children: items2 };
  items2 = [, , , ];
  const obj4 = { style: tmp.riveContainer, children: metroImportAll(NitroQuestOrbsMultiplierRive.NitroQuestOrbsMultiplierRive, {}) };
  items2[0] = metroImportAll(View, obj4);
  const obj5 = { style: items3, variant: "display-md", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
  items3 = [, ];
  ({ text: arr4[0], title: arr4[1] } = tmp);
  items2[1] = metroImportAll(Text_Text.Text, obj5);
  const obj6 = { style: tmp.text, variant: "text-sm/normal", children: body };
  items2[2] = metroImportAll(Text_Text.Text, obj6);
  items2[3] = metroImportAll(Footer, { eligibleToReceivePremiumRewards });
  items[1] = metroImportAll(View, obj2);
  return React4(authStore, obj);
}
const View = react_native.View;
({ AnalyticsPages: hasOwnProperty, HelpdeskArticles: metroRequire, UserSettingsSections: metroImportDefault } = Constants);
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
const contentStyles = { marginBottom: 0 };
let createStyles = createStyles_mod;
let obj = { container: obj2, contentContainer: obj3, text: obj4, buttonContainer: obj5, title: { textTransform: "none", textAlign: "center", lineHeight: 34, paddingHorizontal: 0 }, riveContainer: { width: "100%", height: 160 } };
obj2 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", width: "100%", marginTop: nativeDefault.space.PX_48 };
obj4 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
obj5 = { width: "100%", gap: nativeDefault.space.PX_12, marginVertical: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
let result = size.fileFinishedImporting("modules/quests/native/QuestOrbMultiplierPerkInfoActionSheet.tsx");

export default function QuestOrbMultiplierPerkInfoActionSheet(multiplier) {
  let c2;
  let obj3;
  let tmp7;
  multiplier = multiplier.multiplier;
  const orbMultiplierEligibility = multiplier.orbMultiplierEligibility;
  const tmp = multiplier;
  let obj = multiplier(9835);
  const result = obj.shouldReceiveQuestOrbMultiplier(orbMultiplierEligibility);
  dependencyMap = result;
  const items = [orbMultiplierEligibility];
  const items1 = [result, orbMultiplierEligibility, multiplier];
  const tmp4 = orbMultiplierEligibility === multiplier(9835).QuestOrbMultiplierEligibilityType.NITRO || orbMultiplierEligibility === tmp(9835).QuestOrbMultiplierEligibilityType.UPSELL;
  const memo = react.useMemo(() => {
    let stringResult;
    if (orbMultiplierEligibility === QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS) {
      const intl2 = tmp(1113).intl;
      stringResult = intl2.string(_modDef3801.c5usUr);
    } else {
      const intl = tmp(1113).intl;
      stringResult = intl.string(tmp(1113).t.Csf5Ol);
    }
    return stringResult;
  }, items);
  const memo1 = react.useMemo(() => {
    let formatResult;
    if (orbMultiplierEligibility === QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS) {
      const intl2 = tmp(1113).intl;
      const obj2 = { bonusOrbMultiplier: multiplier };
      formatResult = intl2.format(_modDef3801.UkrcSH, obj2);
    } else {
      const intl = tmp(1113).intl;
      const format = intl.format;
      const t = tmp(1113).t;
      if (c2) {
        const obj3 = { bonusOrbMultiplier: multiplier };
        formatResult = format(t.NpUfej, obj3);
      } else {
        const obj = { bonusOrbMultiplier: multiplier };
        formatResult = format(t["G5k+lZ"], obj);
      }
    }
    return formatResult;
  }, items1);
  let obj2 = { scrollable: false, handleDisabled: true, startExpanded: true, contentStyles, children: closure_8(tmp7, obj3) };
  const BottomSheet = tmp(5395).BottomSheet;
  obj3 = { visible: tmp4, children: closure_8(SheetContent, { title: memo, body: memo1, eligibleToReceivePremiumRewards: result }) };
  tmp7 = orbMultiplierEligibility(17282);
  return closure_8(BottomSheet, obj2);
};
