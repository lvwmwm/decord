// Module ID: 10874
// Function ID: 10875
// Name: confirmExternalAppLaunchAlert
// Dependencies: [19, 17, 2024, 21, 5092, 558, 576, 6156, 10875, 1126, 5088, 4806, 5379, 5299, 2]
// Exports: confirmExternalAppLaunchAlert

// Module 10874 (confirmExternalAppLaunchAlert)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import Constants from "Constants" /* 2024 */;
import LinkingDefault from "Linking" /* 4806 */;
import Text_Text from "Text/Text" /* 5088 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5299 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import FastImageDefault from "FastImage" /* 6156 */;
import AssetRegistryDefault from "AssetRegistry" /* 10875 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
const PRIVATE_APPS_HELP_ARTICLE = Constants.PRIVATE_APPS_HELP_ARTICLE;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ alertContainer: { display: "flex", alignItems: "center", padding: 8 }, alertEyebrowText: { marginTop: 40, textAlign: "center" }, alertTitleText: { marginTop: 16, textAlign: "center" }, alertSubtitleText: { marginTop: 16, textAlign: "center" }, announcementBirb: { width: 90, height: 100, position: "absolute", top: -66 }, linkWrapper: { marginTop: 8 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConfirmActivityGateContent(application) {
  let items;
  let tmp10;
  let tmp12;
  let tmp15;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(19);
  application = application.application;
  const tmp4 = closure_7();
  const alertContainer = tmp4.alertContainer;
  if (cResult[0] !== tmp4.announcementBirb) {
    const obj2 = { source: AssetRegistryDefault, style: tmp4.announcementBirb };
    const tmp8 = FastImageDefault;
    const tmp9 = hasOwnProperty(tmp8, obj2);
    cResult[0] = tmp4.announcementBirb;
    cResult[1] = tmp9;
    tmp5 = tmp9;
  } else {
    tmp5 = cResult[1];
  }
  const alertEyebrowText = tmp4.alertEyebrowText;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl4.t["06YebE"]);
    cResult[2] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp4.alertEyebrowText) {
    const obj3 = { style: alertEyebrowText, variant: "eyebrow", children: tmp10 };
    const tmp14 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[3] = tmp4.alertEyebrowText;
    cResult[4] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[4];
  }
  const alertTitleText = tmp4.alertTitleText;
  if (cResult[5] !== application.name) {
    const intl2 = tmp(1126).intl;
    const obj4 = { activityName: application.name };
    const formatResult = intl2.format(intl4.t["Z/eMDT"], obj4);
    cResult[5] = application.name;
    cResult[6] = formatResult;
    tmp15 = formatResult;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] === tmp4.alertTitleText) {
    let tmp17;
    let tmp19;
    let tmp21;
    if (cResult[8] === tmp15) {
      tmp17 = cResult[9];
    }
    const _Symbol = Symbol;
    const alertSubtitleText = tmp4.alertSubtitleText;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = tmp(1126).intl;
      const stringResult1 = intl3.string(intl4.t.z81WwD);
      cResult[10] = stringResult1;
      tmp19 = stringResult1;
    } else {
      tmp19 = cResult[10];
    }
    if (cResult[11] !== tmp4.alertSubtitleText) {
      const obj5 = { style: alertSubtitleText, variant: "text-sm/normal", children: tmp19 };
      const tmp23 = hasOwnProperty(Text_Text.Text, obj5);
      cResult[11] = tmp4.alertSubtitleText;
      cResult[12] = tmp23;
      tmp21 = tmp23;
    } else {
      tmp21 = cResult[12];
    }
    if (cResult[13] === tmp4.alertContainer) {
      if (cResult[14] === tmp21) {
        if (cResult[15] === tmp5) {
          if (cResult[16] === tmp12) {
            let tmp24;
            if (cResult[17] === tmp17) {
              tmp24 = cResult[18];
            }
            return tmp24;
          }
        }
      }
    }
    const obj6 = { style: alertContainer, children: items };
    items = [tmp5, tmp12, tmp17, tmp21];
    const tmp27 = metroRequire(View, obj6);
    cResult[13] = tmp4.alertContainer;
    cResult[14] = tmp21;
    cResult[15] = tmp5;
    cResult[16] = tmp12;
    cResult[17] = tmp17;
    cResult[18] = tmp27;
    tmp24 = tmp27;
  }
  const tmp18 = hasOwnProperty(Text_Text.Text, { style: alertTitleText, variant: "heading-lg/bold", children: tmp15 });
  cResult[7] = tmp4.alertTitleText;
  cResult[8] = tmp15;
  cResult[9] = tmp18;
  tmp17 = tmp18;
}) : (function ConfirmActivityGateContent(application) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function LinkButton() {
  let first;
  let intl;
  let tmp6;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(4);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function handlePress() {
      const obj = LinkingDefault;
      obj.openURL(PRIVATE_APPS_HELP_ARTICLE);
    }
    cResult[0] = handlePress;
    first = handlePress;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "secondary", size: "sm", onPress: first, text: intl.string(intl4.t.E0gf5l) };
    const Button = tmp(5379).Button;
    intl = tmp(1126).intl;
    const tmp8 = hasOwnProperty(Button, obj2);
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== tmp4.linkWrapper) {
    const obj3 = { style: tmp4.linkWrapper, children: tmp6 };
    const tmp12 = hasOwnProperty(View, obj3);
    cResult[2] = tmp4.linkWrapper;
    cResult[3] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[3];
  }
  return tmp9;
}) : (function LinkButton() {
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
});
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
  const obj = { title: "", children: hasOwnProperty(closure_8, { application }), onConfirm, confirmText: intl.string(intl4.t["3PatSz"]), onCancel, cancelText: intl2.string(intl4.t["ETE/oC"]), footer: hasOwnProperty(closure_9, {}), isDismissable: false };
  intl = intl4.intl;
  intl2 = intl4.intl;
  return resolve(show(obj));
};
