// Module ID: 10172
// Function ID: 78668
// Name: SafetyToolsCrisisTextLineActionSheet
// Dependencies: [31, 27, 10166, 33, 4130, 689, 10173, 1212, 4126, 4543, 3827, 10163, 2]
// Exports: default

// Module 10172 (SafetyToolsCrisisTextLineActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import LOCATION_CONTEXT_MOBILE from "LOCATION_CONTEXT_MOBILE";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ CRISIS_TEXT_LINE_SMS_URI: closure_4, CRISIS_TEXT_LINE_URL: closure_5 } = LOCATION_CONTEXT_MOBILE);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_16, padding: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: 0 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { textAlign: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, maxWidth: 300 };
_createForOfIteratorHelperLoose.description = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("LOCATION_CONTEXT_MOBILE").fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsCrisisTextLineActionSheet.tsx");

export default function SafetyToolsCrisisTextLineActionSheet(trackAnalyticsEvent) {
  let channelId;
  let onClose;
  let recipientId;
  let warningId;
  let warningType;
  trackAnalyticsEvent = trackAnalyticsEvent.trackAnalyticsEvent;
  ({ channelId, recipientId, warningId, warningType, onClose } = trackAnalyticsEvent);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { hasHeaderBack: true, recipientId, warningId, warningType };
  const intl = trackAnalyticsEvent(1212).intl;
  obj.headerTitle = intl.string(trackAnalyticsEvent(1212).t.NUMAsF);
  obj.channelId = channelId;
  obj.onClose = onClose;
  obj = { style: tmp.container };
  obj = { variant: "text-md/medium", color: "text-default", style: tmp.description };
  const intl2 = trackAnalyticsEvent(1212).intl;
  obj.children = intl2.string(trackAnalyticsEvent(1212).t.uicS5l);
  const items = [callback(trackAnalyticsEvent(4126).Text, obj), , ];
  const obj1 = { variant: "secondary", size: "lg", text: null, grow: true };
  const intl3 = trackAnalyticsEvent(1212).intl;
  obj1.text = intl3.string(trackAnalyticsEvent(1212).t.lkUb4S);
  obj1.onPress = function onPress() {
    outer1_1(outer1_2[10]).openURL(outer1_4);
    trackAnalyticsEvent(trackAnalyticsEvent(outer1_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_CTL_SMS);
  };
  items[1] = callback(trackAnalyticsEvent(4543).Button, obj1);
  const obj2 = { variant: "secondary", size: "lg", text: null, grow: true };
  const intl4 = trackAnalyticsEvent(1212).intl;
  obj2.text = intl4.string(trackAnalyticsEvent(1212).t.ogLlvy);
  obj2.onPress = function onPress() {
    outer1_1(outer1_2[10]).openURL(outer1_5);
    trackAnalyticsEvent(trackAnalyticsEvent(outer1_2[11]).CtaEventTypes.USER_SAFETY_TOOLS_CTL_WEB);
  };
  items[2] = callback(trackAnalyticsEvent(4543).Button, obj2);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(importDefault(10173), obj);
};
