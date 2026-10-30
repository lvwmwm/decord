// Module ID: 11708
// Function ID: 11709
// Name: confirmExternalAppLaunchAlert
// Dependencies: [19, 17, 2019, 21, 5009, 5712, 11709, 5619, 1114, 5629, 5704, 5953, 2]
// Exports: confirmExternalAppLaunchAlert

// Module 11708 (confirmExternalAppLaunchAlert)
import react_native from "react-native" /* 17 */;
import intl4 from "intl" /* 1114 */;
import Constants from "Constants" /* 2019 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import LinkingDefault from "Linking" /* 5704 */;
import FastImageDefault from "FastImage" /* 5712 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5953 */;
import AssetRegistryDefault from "AssetRegistry" /* 11709 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
  const obj3 = { style: tmp.alertEyebrowText, variant: "eyebrow", children: intl.string(intl4.t["06YebE"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = hasOwnProperty(Text, obj3);
  const obj4 = { style: tmp.alertTitleText, variant: "heading-lg/bold", children: intl2.format(intl4.t["Z/eMDT"], obj5) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  obj5 = { activityName: application.name };
  items[2] = hasOwnProperty(Text2, obj4);
  const obj6 = { style: tmp.alertSubtitleText, variant: "text-sm/normal", children: intl3.string(intl4.t.z81WwD) };
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
