// Module ID: 12680
// Function ID: 12681
// Name: confirmExternalAppLaunchAlert
// Dependencies: [19, 17, 2142, 21, 5243, 5957, 12681, 5866, 1113, 5873, 5949, 6205, 2]
// Exports: confirmExternalAppLaunchAlert

// Module 12680 (confirmExternalAppLaunchAlert)
import react_native from "react-native" /* 17 */;
import intl4 from "intl" /* 1113 */;
import Constants from "Constants" /* 2142 */;
import Text_Text from "Text/Text" /* 5866 */;
import components_Button_Button from "components/Button/Button" /* 5873 */;
import LinkingDefault from "Linking" /* 5949 */;
import FastImageDefault from "FastImage" /* 5957 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 6205 */;
import AssetRegistryDefault from "AssetRegistry" /* 12681 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
function ConfirmActivityGateContent(application) {
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj5;
  application = application.application;
  const tmp = closure_7();
  const obj = { style: tmp.alertContainer, children: items };
  const obj2 = { source: AssetRegistryDefault, style: tmp.announcementBirb };
  const tmp2 = FastImageDefault;
  items = [hasOwnProperty(tmp2, obj2), , , ];
  const obj3 = { style: tmp.alertEyebrowText, variant: "body-sm/medium", children: intl.string(intl4.t["06YebE"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = hasOwnProperty(Text, obj3);
  const obj4 = { style: tmp.alertTitleText, variant: "heading-lg/semibold", children: intl2.format(intl4.t["Z/eMDT"], obj5) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  obj5 = { activityName: application.name };
  items[2] = hasOwnProperty(Text2, obj4);
  const obj6 = { style: tmp.alertSubtitleText, variant: "body-sm/normal", children: intl3.string(intl4.t.z81WwD) };
  const Text3 = Text_Text.Text;
  intl3 = intl4.intl;
  items[3] = hasOwnProperty(Text3, obj6);
  return metroRequire(View, obj);
}
function LinkButton() {
  let Button;
  let intl;
  let obj2;
  let obj = { style: closure_7().linkWrapper, children: hasOwnProperty(Button, obj2) };
  obj2 = {
    variant: "secondary",
    size: "sm",
    onPress: function handlePress() {
      const obj = LinkingDefault;
      obj.openURL(PRIVATE_APPS_HELP_ARTICLE);
    },
    text: intl.string(intl4.t.E0gf5l)
  };
  Button = components_Button_Button.Button;
  intl = intl4.intl;
  return hasOwnProperty(View, obj);
}
const View = react_native.View;
const PRIVATE_APPS_HELP_ARTICLE = Constants.PRIVATE_APPS_HELP_ARTICLE;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ alertContainer: { display: "flex", alignItems: "center", padding: 8 }, alertEyebrowText: { marginTop: 40, textAlign: "center" }, alertTitleText: { marginTop: 16, textAlign: "center" }, alertSubtitleText: { marginTop: 16, textAlign: "center" }, announcementBirb: { width: 90, height: 100, position: "absolute", top: -66 }, linkWrapper: { marginTop: 8 } });
const result = size.fileFinishedImporting("modules/activities/confirmExternalAppLaunchAlert.native.tsx");

export function confirmExternalAppLaunchAlert(arg0) {
  let application;
  let intl;
  let intl2;
  let onCancel;
  let onConfirm;
  ({ application, onConfirm, onCancel } = arg0);
  const tmp = AlertActionCreatorsDefault;
  const show = tmp.show;
  const obj = { title: "", children: hasOwnProperty(ConfirmActivityGateContent, { application }), onConfirm, confirmText: intl.string(intl4.t["3PatSz"]), onCancel, cancelText: intl2.string(intl4.t["ETE/oC"]), footer: hasOwnProperty(LinkButton, {}), isDismissable: false };
  intl = intl4.intl;
  intl2 = intl4.intl;
  return resolve(show(obj));
}
