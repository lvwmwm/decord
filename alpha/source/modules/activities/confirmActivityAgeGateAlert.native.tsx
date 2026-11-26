// Module ID: 10121
// Function ID: 10122
// Name: confirmActivityAgeGateAlert
// Dependencies: [19, 17, 21, 5043, 575, 10122, 5634, 1112, 6046, 1186, 2]
// Exports: confirmActivityAgeGateAlert

// Module 10121 (confirmActivityAgeGateAlert)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1112 */;
import native from "native" /* 1186 */;
import Text_Text from "Text/Text" /* 5634 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 6046 */;
import ActivityAnnouncementDefault from "ActivityAnnouncement" /* 10122 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
function ConfirmActivityGateContent(description) {
  let items;
  description = description.description;
  const tmp = closure_6();
  const obj = { style: tmp.alertContainer, children: items };
  items = [React3(ActivityAnnouncementDefault, {}), ];
  const obj2 = { style: tmp.alertBodyText, variant: "body-md/normal", children: description };
  items[1] = React3(Text_Text.Text, obj2);
  return hasOwnProperty(View, obj);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { alertContainer: { display: "flex", alignItems: "center", padding: 8 }, alertBodyText: obj2 };
obj2 = { fontSize: 16, lineHeight: 24, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, textAlign: "center" };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/activities/confirmActivityAgeGateAlert.native.tsx");

export function confirmActivityAgeGateAlert(arg0) {
  let application;
  let intl2;
  let intl3;
  let intl4;
  let onAgree;
  let onDisagree;
  ({ application, onAgree, onDisagree } = arg0);
  const intl = intl5.intl;
  const obj = { applicationName: application.name };
  const formatToPlainStringResult = intl.formatToPlainString(intl5.t.OgmIqy, obj);
  const obj2 = { title: intl2.string(intl5.t.SSDPOF), children: React3(ConfirmActivityGateContent, { description: formatToPlainStringResult }), cancelText: intl3.string(intl5.t.hg1uxn), confirmText: intl4.string(intl5.t.wVq7uo), onConfirm: onAgree, onCancel: onDisagree, confirmColor: native.ButtonColors.RED, isDismissable: false };
  const show = AlertActionCreatorsDefault.show;
  AlertActionCreatorsDefault;
  intl2 = intl5.intl;
  intl3 = intl5.intl;
  intl4 = intl5.intl;
  return resolve(show(obj2));
}
