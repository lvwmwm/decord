// Module ID: 10953
// Function ID: 10954
// Name: SafetyToolsAboutActionSheet
// Dependencies: [32, 19, 17, 10905, 1074, 21, 4836, 576, 10938, 4800, 10912, 10913, 10954, 1115, 4527, 10943, 4832, 2111, 5281, 2]
// Exports: default

// Module 10953 (SafetyToolsAboutActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import Constants2 from "Constants" /* 10905 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10912 */;
import ChannelSafetyWarningsActionCreators from "ChannelSafetyWarningsActionCreators" /* 10913 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
let closure_6 = Constants2.getSafetyToolsActionSheetKey;
let HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { aboutContainer: obj2, description: obj3, reportFalsePositive: obj4 };
obj2 = { marginHorizontal: nativeDefault.space.PX_32 };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "center", textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
obj4 = { alignSelf: "center", textAlign: "center", marginTop: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsAboutActionSheet.tsx");

export default function SafetyToolsAboutScreen(channelId) {
  let format;
  let intl;
  let intl3;
  let intl4;
  let items2;
  let items3;
  let obj5;
  let obj6;
  let obj9;
  let onPress;
  let prop;
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  let disabled;
  const onClose = channelId.onClose;
  let tmp = warningType(disabled.useState(false), 2);
  disabled = tmp[0];
  let closure_5 = tmp[1];
  const tmp3 = closure_10();
  let obj = channelId(warningId[8]);
  const tmp4 = null != obj.useSafetyToolsButtonTooltipForChannel(channelId);
  const isNudgeWarning = tmp4;
  const items = [channelId, warningId, warningType, recipientId, tmp4];
  const items1 = [channelId, disabled];
  const callback = disabled.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(isNudgeWarning(channelId));
    const obj2 = SafetyWarningUtils;
    const obj3 = { channelId, warningId, warningType, senderId: recipientId, cta: SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS, isNudgeWarning };
    obj2.trackCtaEvent(obj3);
  }, items);
  HelpdeskArticles = disabled.useCallback(() => {
    const tmp = first;
    if (!tmp) {
      closure_5(true);
      let obj = ChannelSafetyWarningsActionCreators;
      const reportFalsePositiveResult = obj.reportFalsePositive(channelId);
      const nextPromise = reportFalsePositiveResult.then(() => {
        let intl;
        closure_1_5(false);
        const obj = { id: "safety-tools-report-false-positive", text: intl.string(channelId(warningId[13]).t.FhgVWi) };
        const showSafetyToast = channelId(warningId[12]).showSafetyToast;
        channelId(warningId[12]);
        intl = channelId(warningId[13]).intl;
        showSafetyToast(obj);
        const obj2 = recipientId(warningId[9]);
        obj2.hideActionSheet(isNudgeWarning(closure_1_0));
      });
      nextPromise.catch(() => {
        closure_1_5(false);
        const presentError = channelId(warningId[14]).presentError;
        channelId(warningId[14]);
        const intl = channelId(warningId[13]).intl;
        presentError(intl.string(channelId(warningId[13]).t.R0RpRX));
      });
    }
  }, items1);
  let obj2 = { hasHeaderBack: true, recipientId, warningId, warningType, headerTitle: intl.string(channelId(warningId[13]).t.qI14KM), channelId, onClose, children: items3 };
  const tmp6 = recipientId(warningId[15]);
  intl = channelId(warningId[13]).intl;
  let obj3 = { style: tmp3.aboutContainer, children: items2 };
  const obj4 = { variant: "text-md/medium", style: tmp3.description, children: format(prop, obj5) };
  const Text = channelId(warningId[16]).Text;
  const intl2 = channelId(warningId[13]).intl;
  format = intl2.format;
  obj5 = { learnMoreLink: obj6.getArticleURL(HelpdeskArticles.SAFETY_ALERTS) };
  prop = channelId(warningId[13]).t["njJ/Cg"];
  obj6 = recipientId(warningId[17]);
  items2 = [closure_8(Text, obj4), ];
  const obj7 = { variant: "secondary", size: "lg", disabled, text: intl3.string(channelId(warningId[13]).t.Xb2REN), onPress: callback };
  const Button = channelId(warningId[18]).Button;
  intl3 = channelId(warningId[13]).intl;
  items2[1] = closure_8(Button, obj7);
  items3 = [closure_9(closure_5, obj3), ];
  const obj8 = { variant: "text-md/medium", style: tmp3.reportFalsePositive, children: intl4.format(channelId(warningId[13]).t["2uYViD"], obj9) };
  const Text2 = channelId(warningId[16]).Text;
  intl4 = channelId(warningId[13]).intl;
  obj9 = {
    reportFalsePositiveHook(children, arg1) {
      const obj = { variant: "text-sm/medium", color: "text-link", disabled, onPress, children };
      return metroImportAll(Text_Text.Text, obj, arg1);
    }
  };
  items3[1] = closure_8(Text2, obj8);
  return closure_9(tmp6, obj2);
};
