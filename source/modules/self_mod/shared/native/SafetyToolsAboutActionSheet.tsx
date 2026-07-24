// Module ID: 10187
// Function ID: 78723
// Name: SafetyToolsAboutScreen
// Dependencies: [57, 31, 27, 10166, 653, 33, 4130, 689, 10160, 4098, 10163, 10164, 10188, 1212, 3830, 10173, 4126, 1920, 4543, 2]
// Exports: default

// Module 10187 (SafetyToolsAboutScreen)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { getSafetyToolsActionSheetKey as closure_6 } from "LOCATION_CONTEXT_MOBILE";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.aboutContainer = _createForOfIteratorHelperLoose;
let obj1 = { alignSelf: "center", textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.description = obj1;
let obj2 = { alignSelf: "center", textAlign: "center", marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.reportFalsePositive = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsAboutActionSheet.tsx");

export default function SafetyToolsAboutScreen(channelId) {
  channelId = channelId.channelId;
  const recipientId = channelId.recipientId;
  const warningId = channelId.warningId;
  const warningType = channelId.warningType;
  const tmp = warningType(first.useState(false), 2);
  first = tmp[0];
  let closure_5 = tmp[1];
  const tmp3 = _createForOfIteratorHelperLoose();
  let obj = channelId(warningId[8]);
  const tmp4 = null != obj.useSafetyToolsButtonTooltipForChannel(channelId);
  let closure_6 = tmp4;
  const items = [channelId, warningId, warningType, recipientId, tmp4];
  const items1 = [channelId, first];
  const callback = first.useCallback(() => {
    let obj = recipientId(warningId[9]);
    obj.hideActionSheet(tmp4(channelId));
    obj = { channelId, warningId, warningType, senderId: recipientId, cta: channelId(warningId[10]).CtaEventTypes.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS, isNudgeWarning: tmp4 };
    channelId(warningId[10]).trackCtaEvent(obj);
  }, items);
  const HelpdeskArticles = first.useCallback(() => {
    if (!first) {
      callback(true);
      let obj = channelId(warningId[11]);
      const reportFalsePositiveResult = channelId(warningId[11]).reportFalsePositive(channelId);
      channelId(warningId[11]).reportFalsePositive(channelId).then(() => {
        outer1_5(false);
        let obj = channelId(warningId[12]);
        obj = { id: "safety-tools-report-false-positive" };
        const intl = channelId(warningId[13]).intl;
        obj.text = intl.string(channelId(warningId[13]).t.FhgVWi);
        obj.showSafetyToast(obj);
        recipientId(warningId[9]).hideActionSheet(callback(outer1_0));
      }).catch(() => {
        outer1_5(false);
        const intl = channelId(warningId[13]).intl;
        channelId(warningId[14]).presentError(intl.string(channelId(warningId[13]).t.R0RpRX));
      });
      const nextPromise = channelId(warningId[11]).reportFalsePositive(channelId).then(() => {
        outer1_5(false);
        let obj = channelId(warningId[12]);
        obj = { id: "safety-tools-report-false-positive" };
        const intl = channelId(warningId[13]).intl;
        obj.text = intl.string(channelId(warningId[13]).t.FhgVWi);
        obj.showSafetyToast(obj);
        recipientId(warningId[9]).hideActionSheet(callback(outer1_0));
      });
    }
  }, items1);
  obj = { hasHeaderBack: true, recipientId, warningId, warningType };
  let intl = channelId(warningId[13]).intl;
  obj.headerTitle = intl.string(channelId(warningId[13]).t.qI14KM);
  obj.channelId = channelId;
  obj.onClose = channelId.onClose;
  obj = { style: tmp3.aboutContainer };
  const obj1 = { variant: "text-md/medium", style: tmp3.description };
  const intl2 = channelId(warningId[13]).intl;
  const obj2 = {};
  let obj5 = recipientId(warningId[17]);
  obj2.learnMoreLink = obj5.getArticleURL(HelpdeskArticles.SAFETY_ALERTS);
  obj1.children = intl2.format(channelId(warningId[13]).t["njJ/Cg"], obj2);
  const items2 = [callback(channelId(warningId[16]).Text, obj1), ];
  const obj3 = { variant: "secondary", size: "lg", disabled: first };
  const intl3 = channelId(warningId[13]).intl;
  obj3.text = intl3.string(channelId(warningId[13]).t.Xb2REN);
  obj3.onPress = callback;
  items2[1] = callback(channelId(warningId[18]).Button, obj3);
  obj.children = items2;
  const items3 = [callback2(closure_5, obj), ];
  const obj4 = { variant: "text-md/medium", style: tmp3.reportFalsePositive };
  const intl4 = channelId(warningId[13]).intl;
  obj5 = {
    reportFalsePositiveHook(children) {
      const obj = { variant: "text-sm/medium", color: "text-link", disabled: first, onPress: closure_7, children };
      return outer1_8(channelId(warningId[16]).Text, obj, arg1);
    }
  };
  obj4.children = intl4.format(channelId(warningId[13]).t["2uYViD"], obj5);
  items3[1] = callback(channelId(warningId[16]).Text, obj4);
  obj.children = items3;
  return callback2(recipientId(warningId[15]), obj);
};
