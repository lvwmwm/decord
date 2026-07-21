// Module ID: 10131
// Function ID: 78421
// Name: SafetyToolsCrisisTextLineActionSheet
// Dependencies: []
// Exports: default

// Module 10131 (SafetyToolsCrisisTextLineActionSheet)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ CRISIS_TEXT_LINE_SMS_URI: closure_4, CRISIS_TEXT_LINE_URL: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { gap: importDefault(dependencyMap[5]).space.PX_16, padding: importDefault(dependencyMap[5]).space.PX_16 };
obj.container = obj;
const tmp4 = arg1(dependencyMap[3]);
obj.description = { marginBottom: importDefault(dependencyMap[5]).space.PX_8 };
let closure_8 = obj.createStyles(obj);
const obj1 = { marginBottom: importDefault(dependencyMap[5]).space.PX_8 };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsCrisisTextLineActionSheet.tsx");

export default function SafetyToolsCrisisTextLineActionSheet(trackAnalyticsEvent) {
  let channelId;
  let onClose;
  let recipientId;
  let warningId;
  let warningType;
  const arg1 = trackAnalyticsEvent.trackAnalyticsEvent;
  ({ channelId, recipientId, warningId, warningType, onClose } = trackAnalyticsEvent);
  const tmp = callback3();
  let obj = { hasHeaderBack: true, recipientId, warningId, warningType };
  const intl = arg1(dependencyMap[7]).intl;
  obj.headerTitle = intl.string(arg1(dependencyMap[7]).t.NUMAsF);
  obj.channelId = channelId;
  obj.onClose = onClose;
  obj = { style: tmp.container };
  obj = { style: tmp.description };
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.children = intl2.string(arg1(dependencyMap[7]).t.uicS5l);
  const items = [callback(arg1(dependencyMap[8]).Text, obj), , ];
  const obj1 = { body: "row", hasDiversityParent: 8, padding: 16, View: "center" };
  const intl3 = arg1(dependencyMap[7]).intl;
  obj1.text = intl3.string(arg1(dependencyMap[7]).t.lkUb4S);
  obj1.onPress = function onPress() {
    callback(closure_2[10]).openURL(closure_4);
    trackAnalyticsEvent(trackAnalyticsEvent(closure_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_CTL_SMS);
  };
  items[1] = callback(arg1(dependencyMap[9]).Button, obj1);
  const obj2 = { body: "row", hasDiversityParent: 8, padding: 16, View: "center" };
  const intl4 = arg1(dependencyMap[7]).intl;
  obj2.text = intl4.string(arg1(dependencyMap[7]).t.ogLlvy);
  obj2.onPress = function onPress() {
    callback(closure_2[10]).openURL(closure_5);
    trackAnalyticsEvent(trackAnalyticsEvent(closure_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_CTL_WEB);
  };
  items[2] = callback(arg1(dependencyMap[9]).Button, obj2);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(importDefault(dependencyMap[6]), obj);
};
