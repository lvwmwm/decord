// Module ID: 8798
// Function ID: 8799
// Name: confirmExternalAppLaunchAlert
// Dependencies: [19, 17, 2005, 21, 4836, 8799, 4832, 1115, 5281, 4525, 5203, 2]
// Exports: confirmExternalAppLaunchAlert

// Module 8798 (confirmExternalAppLaunchAlert)
import intl4 from "intl" /* 1115 */;
import Constants from "Constants" /* 2005 */;
import LinkingDefault from "Linking" /* 4525 */;
import Text_Text from "Text/Text" /* 4832 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import AssetRegistryDefault from "AssetRegistry" /* 8799 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
function ConfirmActivityGateContent(application) {
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj5;
  application = application.application;
  const tmp = closure_8();
  const obj = { style: tmp.alertContainer, children: items };
  items = [, , , ];
  const obj2 = { source: AssetRegistryDefault, style: tmp.announcementBirb };
  items[0] = metroRequire(_false, obj2);
  const obj3 = { style: tmp.alertEyebrowText, variant: "eyebrow", children: intl.string(intl4.t["06YebE"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = metroRequire(Text, obj3);
  const obj4 = { style: tmp.alertTitleText, variant: "heading-lg/bold", children: intl2.format(intl4.t["Z/eMDT"], obj5) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  obj5 = { activityName: application.name };
  items[2] = metroRequire(Text2, obj4);
  const obj6 = { style: tmp.alertSubtitleText, variant: "text-sm/normal", children: intl3.string(intl4.t.z81WwD) };
  const Text3 = Text_Text.Text;
  intl3 = intl4.intl;
  items[3] = metroRequire(Text3, obj6);
  return metroImportDefault(React3, obj);
}
function LinkButton() {
  let Button;
  let intl;
  let obj2;
  let obj = { style: closure_8().linkWrapper, children: metroRequire(Button, obj2) };
  obj2 = {
    variant: "secondary",
    size: "sm",
    onPress() {
      const obj = LinkingDefault;
      obj.openURL(PRIVATE_APPS_HELP_ARTICLE);
    },
    text: intl.string(intl4.t.E0gf5l)
  };
  Button = components_Button_Button.Button;
  intl = intl4.intl;
  return metroRequire(React3, obj);
}
({ Image: c3, View: closure_4 } = react_native);
const PRIVATE_APPS_HELP_ARTICLE = Constants.PRIVATE_APPS_HELP_ARTICLE;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ alertContainer: { display: "flex", alignItems: "center", padding: 8 }, alertEyebrowText: { marginTop: 40, textAlign: "center" }, alertTitleText: { marginTop: 16, textAlign: "center" }, alertSubtitleText: { marginTop: 16, textAlign: "center" }, announcementBirb: { width: 90, height: 100, position: "absolute", top: -66 }, linkWrapper: { marginTop: 8 } });
const result = size.fileFinishedImporting("modules/activities/confirmExternalAppLaunchAlert.native.tsx");

export const confirmExternalAppLaunchAlert = function confirmExternalAppLaunchAlert(arg0) {
  let application;
  let intl;
  let intl2;
  let onCancel;
  let onConfirm;
  ({ application, onConfirm, onCancel } = arg0);
  const tmp = AlertActionCreatorsDefault;
  const show = tmp.show;
  const obj = { title: "", children: metroRequire(ConfirmActivityGateContent, { application }), onConfirm, confirmText: intl.string(intl4.t["3PatSz"]), onCancel, cancelText: intl2.string(intl4.t["ETE/oC"]), footer: metroRequire(LinkButton, {}), isDismissable: false };
  intl = intl4.intl;
  intl2 = intl4.intl;
  return resolve(show(obj));
};
