// Module ID: 12080
// Function ID: 12081
// Name: AgeVerificationSpeakerActionSheet
// Dependencies: [19, 17, 21, 5142, 575, 1627, 5376, 7429, 7134, 5753, 1113, 5760, 8028, 6786, 2]
// Exports: default

// Module 12080 (AgeVerificationSpeakerActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6786 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8028 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, header: { alignItems: "center" }, title: { textAlign: "center" }, footer: obj3 };
obj2 = { paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_12 };
let closure_6 = createStyles(obj);
let result = size.fileFinishedImporting("modules/stage_channels/native/components/AgeVerificationSpeakerActionSheet.tsx");

export default function AgeVerificationSpeakerActionSheet(onClose) {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj2;
  let obj3;
  onClose = onClose.onClose;
  function handleDismiss() {
    onClose();
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }
  const tmp = closure_6();
  let obj = { startExpanded: true, onDismiss: handleDismiss, contentStyles: { paddingBottom: useSafeAreaInsetsDefault().bottom }, header: closure_4(View, obj2), children: closure_5(View, obj3) };
  obj2 = { style: tmp.header, children: closure_4(onClose(7134).TrafficConeSpotIllustration, { width: 120, height: 120 }) };
  const ActionSheet = onClose(7429).ActionSheet;
  obj3 = { style: tmp.container, children: items };
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.title, children: intl.string(onClose(1113).t.zvubnM) };
  const Text = onClose(5753).Text;
  intl = onClose(1113).intl;
  items = [closure_4(Text, obj4), ];
  const obj5 = { style: tmp.footer, children: items1 };
  const obj6 = {
    size: "lg",
    onPress: function handleAction() {
      const obj = AgeVerificationActionCreatorsDefault;
      const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT };
      const result = obj.showAgeVerificationGetStartedModal(obj2);
      onClose();
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.hideActionSheet();
    },
    text: intl2.string(onClose(1113).t.KXVgjt)
  };
  const Button = onClose(5760).Button;
  intl2 = onClose(1113).intl;
  items1 = [closure_4(Button, obj6), ];
  const obj7 = { size: "lg", onPress: handleDismiss, text: intl3.string(onClose(1113).t.WAI6xu), variant: "secondary" };
  const Button2 = onClose(5760).Button;
  intl3 = onClose(1113).intl;
  items1[1] = closure_4(Button2, obj7);
  items[1] = closure_5(View, obj5);
  return closure_4(ActionSheet, obj);
};
export const AGE_VERIFICATION_SPEAKER_SHEET_KEY = "AgeVerificationSpeakerActionSheet";
