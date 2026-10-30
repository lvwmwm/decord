// Module ID: 11277
// Function ID: 11278
// Name: SafetyToolsCrisisTextLineActionSheet
// Dependencies: [19, 17, 11230, 21, 5009, 575, 11278, 1114, 5619, 5629, 5704, 11243, 2]
// Exports: default

// Module 11277 (SafetyToolsCrisisTextLineActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import LinkingDefault from "Linking" /* 5704 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 11243 */;
import SafetyToolsActionSheetWrapperDefault from "SafetyToolsActionSheetWrapper" /* 11278 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 11230 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ CRISIS_TEXT_LINE_SMS_URI: closure_4, CRISIS_TEXT_LINE_URL: hasOwnProperty } = Constants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, description: obj3 };
obj2 = { display: "flex", alignItems: "center", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_16, paddingTop: 0 };
createStyles = createStyles.createStyles;
obj3 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8, maxWidth: 300 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsCrisisTextLineActionSheet.tsx");

export default function SafetyToolsCrisisTextLineActionSheet(trackAnalyticsEvent) {
  let channelId;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  let onClose;
  let recipientId;
  let warningId;
  let warningType;
  trackAnalyticsEvent = trackAnalyticsEvent.trackAnalyticsEvent;
  ({ channelId, recipientId, warningId, warningType, onClose } = trackAnalyticsEvent);
  const tmp = closure_8();
  let obj = { hasHeaderBack: true, recipientId, warningId, warningType, headerTitle: intl.string(trackAnalyticsEvent(1114).t.NUMAsF), channelId, onClose, children: closure_7(View, obj2) };
  const tmp2 = SafetyToolsActionSheetWrapperDefault;
  intl = trackAnalyticsEvent(1114).intl;
  obj2 = { style: tmp.container, children: items };
  const obj3 = { variant: "text-md/medium", color: "text-default", style: tmp.description, children: intl2.string(trackAnalyticsEvent(1114).t.uicS5l) };
  const Text = trackAnalyticsEvent(5619).Text;
  intl2 = trackAnalyticsEvent(1114).intl;
  items = [closure_6(Text, obj3), , ];
  const obj4 = {
    variant: "secondary",
    size: "lg",
    text: intl3.string(trackAnalyticsEvent(1114).t.lkUb4S),
    grow: true,
    onPress() {
      const obj = LinkingDefault;
      obj.openURL(React3);
      trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_CTL_SMS);
    }
  };
  const Button = trackAnalyticsEvent(5629).Button;
  intl3 = trackAnalyticsEvent(1114).intl;
  items[1] = closure_6(Button, obj4);
  const obj5 = {
    variant: "secondary",
    size: "lg",
    text: intl4.string(trackAnalyticsEvent(1114).t.ogLlvy),
    grow: true,
    onPress() {
      const obj = LinkingDefault;
      obj.openURL(hasOwnProperty);
      trackAnalyticsEvent(SafetyWarningUtils.CtaEventTypes.USER_SAFETY_TOOLS_CTL_WEB);
    }
  };
  const Button2 = trackAnalyticsEvent(5629).Button;
  intl4 = trackAnalyticsEvent(1114).intl;
  items[2] = closure_6(Button2, obj5);
  return closure_6(tmp2, obj);
};
