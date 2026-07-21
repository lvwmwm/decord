// Module ID: 10146
// Function ID: 78476
// Name: SafetyToolsAboutScreen
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 10146 (SafetyToolsAboutScreen)
import closure_3 from "result";
import closure_4 from "result";
import { View } from "result";
import { getSafetyToolsActionSheetKey as closure_6 } from "result";
import { HelpdeskArticles } from "result";
import result from "result";
import result from "result";
import result from "result";

({ jsx: closure_8, jsxs: closure_9 } = result);
result = {};
result = { marginHorizontal: require("result").space.PX_32 };
result.aboutContainer = result;
const obj1 = { body: null, ctaLabel: null, marginBottom: require("result").space.PX_24 };
result.description = obj1;
const obj2 = { body: null, ctaLabel: null, marginTop: require("result").space.PX_8 };
result.reportFalsePositive = obj2;
result = result.createStyles(result);
result = result.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsAboutActionSheet.tsx");

export default function SafetyToolsAboutScreen(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const recipientId = channelId.recipientId;
  const importDefault = recipientId;
  const warningId = channelId.warningId;
  const dependencyMap = warningId;
  const warningType = channelId.warningType;
  let callback = warningType;
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  const React = first;
  let closure_5 = tmp[1];
  const tmp3 = result();
  let obj = arg1(dependencyMap[8]);
  const tmp4 = null != obj.useSafetyToolsButtonTooltipForChannel(channelId);
  let closure_6 = tmp4;
  const items = [channelId, warningId, warningType, recipientId, tmp4];
  const items1 = [channelId, first];
  callback = React.useCallback(() => {
    let obj = recipientId(warningId[9]);
    obj.hideActionSheet(tmp4(channelId));
    obj = { channelId, warningId, warningType, senderId: recipientId, cta: channelId(warningId[10]).CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS, isNudgeWarning: tmp4 };
    channelId(warningId[10]).trackCtaEvent(obj);
  }, items);
  const constants = React.useCallback(() => {
    if (!first) {
      callback(true);
      const obj = channelId(warningId[11]);
      const reportFalsePositiveResult = channelId(warningId[11]).reportFalsePositive(channelId);
      channelId(warningId[11]).reportFalsePositive(channelId).then(() => {
        callback3(false);
        let obj = callback(closure_2[12]);
        obj = { id: "safety-tools-report-false-positive" };
        const intl = callback(closure_2[13]).intl;
        obj.text = intl.string(callback(closure_2[13]).t.FhgVWi);
        obj.showSafetyToast(obj);
        callback2(closure_2[9]).hideActionSheet(callback4(callback));
      }).catch(() => {
        callback3(false);
        const intl = callback(closure_2[13]).intl;
        callback(closure_2[14]).presentError(intl.string(callback(closure_2[13]).t.R0RpRX));
      });
      const nextPromise = channelId(warningId[11]).reportFalsePositive(channelId).then(() => {
        callback3(false);
        let obj = callback(closure_2[12]);
        obj = { id: "safety-tools-report-false-positive" };
        const intl = callback(closure_2[13]).intl;
        obj.text = intl.string(callback(closure_2[13]).t.FhgVWi);
        obj.showSafetyToast(obj);
        callback2(closure_2[9]).hideActionSheet(callback4(callback));
      });
    }
  }, items1);
  obj = { hasHeaderBack: true, recipientId, warningId, warningType };
  const intl = arg1(dependencyMap[13]).intl;
  obj.headerTitle = intl.string(arg1(dependencyMap[13]).t.qI14KM);
  obj.channelId = channelId;
  obj.onClose = channelId.onClose;
  obj = { style: tmp3.aboutContainer };
  const obj1 = { variant: "text-md/medium", style: tmp3.description };
  const intl2 = arg1(dependencyMap[13]).intl;
  const obj2 = {};
  let obj5 = importDefault(dependencyMap[17]);
  obj2.learnMoreLink = obj5.getArticleURL(constants.SAFETY_ALERTS);
  obj1.children = intl2.format(arg1(dependencyMap[13]).t.njJ/Cg, obj2);
  const items2 = [callback2(arg1(dependencyMap[16]).TextWithIOSLinkWorkaround, obj1), ];
  const obj3 = { "Bool(true)": 1124139009, "Bool(true)": 153708, disabled: first };
  const intl3 = arg1(dependencyMap[13]).intl;
  obj3.text = intl3.string(arg1(dependencyMap[13]).t.Xb2REN);
  obj3.onPress = callback;
  items2[1] = callback2(arg1(dependencyMap[18]).Button, obj3);
  obj.children = items2;
  const items3 = [callback3(closure_5, obj), ];
  const obj4 = { variant: "text-md/medium", style: tmp3.reportFalsePositive };
  const intl4 = arg1(dependencyMap[13]).intl;
  obj5 = {
    reportFalsePositiveHook(children) {
      return callback2(channelId(warningId[19]).Text, { disabled: first, onPress: closure_7, children }, arg1);
    }
  };
  obj4.children = intl4.format(arg1(dependencyMap[13]).t.2uYViD, obj5);
  items3[1] = callback2(arg1(dependencyMap[19]).Text, obj4);
  obj.children = items3;
  return callback3(importDefault(dependencyMap[15]), obj);
};
