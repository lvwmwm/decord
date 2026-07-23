// Module ID: 10823
// Function ID: 84033
// Name: ConfirmActivityGateContent
// Dependencies: [31, 27, 4155, 33, 4130, 10824, 4126, 1212, 4543, 3827, 4470, 2]
// Exports: confirmExternalAppLaunchAlert

// Module 10823 (ConfirmActivityGateContent)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { PRIVATE_APPS_HELP_ARTICLE } from "items3";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_6;
let closure_7;
const require = arg1;
function ConfirmActivityGateContent(activityName) {
  const tmp = callback3();
  let obj = { style: tmp.alertContainer };
  obj = { source: importDefault(10824), style: tmp.announcementBirb };
  const items = [callback(closure_3, obj), , , ];
  obj = { style: tmp.alertEyebrowText, variant: "eyebrow" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["06YebE"]);
  items[1] = callback(require(4126) /* Text */.Text, obj);
  const obj1 = { style: tmp.alertTitleText, variant: "heading-lg/bold" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl2.format(require(1212) /* getSystemLocale */.t["Z/eMDT"], { activityName: activityName.application.name });
  items[2] = callback(require(4126) /* Text */.Text, obj1);
  const obj3 = { style: tmp.alertSubtitleText, variant: "text-sm/normal" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl3.string(require(1212) /* getSystemLocale */.t.z81WwD);
  items[3] = callback(require(4126) /* Text */.Text, obj3);
  obj.children = items;
  return callback2(closure_4, obj);
}
function LinkButton() {
  let obj = { style: callback3().linkWrapper };
  obj = {
    variant: "secondary",
    size: "sm",
    onPress() {
      outer1_1(outer1_2[9]).openURL(outer1_5);
    }
  };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.text = intl.string(require(1212) /* getSystemLocale */.t.E0gf5l);
  obj.children = callback(require(4543) /* Button */.Button, obj);
  return callback(closure_4, obj);
}
({ Image: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ alertContainer: { display: "flex", alignItems: "center", padding: 8 }, alertEyebrowText: { marginTop: 40, textAlign: "center" }, alertTitleText: { marginTop: 16, textAlign: "center" }, alertSubtitleText: { marginTop: 16, textAlign: "center" }, announcementBirb: { width: 90, height: 100, position: "absolute", top: -66 }, linkWrapper: { marginTop: 8 } });
const result = require("items3").fileFinishedImporting("modules/activities/confirmExternalAppLaunchAlert.native.tsx");

export const confirmExternalAppLaunchAlert = function confirmExternalAppLaunchAlert(arg0) {
  let application;
  let onCancel;
  let onConfirm;
  ({ application, onConfirm, onCancel } = arg0);
  let obj = importDefault(4470);
  obj = { title: "", children: callback(ConfirmActivityGateContent, { application }), onConfirm };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.confirmText = intl.string(require(1212) /* getSystemLocale */.t["3PatSz"]);
  obj.onCancel = onCancel;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.cancelText = intl2.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
  obj.footer = callback(LinkButton, {});
  return Promise.resolve(obj.show(obj));
};
