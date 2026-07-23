// Module ID: 11631
// Function ID: 90312
// Name: UserSettingsAuthedAppDeleteWarningModal
// Dependencies: [33, 10855, 1212, 11632, 8214, 4475, 2]
// Exports: default

// Module 11631 (UserSettingsAuthedAppDeleteWarningModal)
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
let closure_5;
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = jsxProd);
let result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedAppDeleteWarningModal.tsx");

export default function UserSettingsAuthedAppDeleteWarningModal(application) {
  let onDelete;
  let scopes;
  application = application.application;
  ({ scopes, onDelete } = application);
  let obj = require(10855) /* isSocialLayerApplication */;
  let result = obj.isSocialLayerSDKAuthorization(application, scopes);
  const intl = require(1212) /* getSystemLocale */.intl;
  if (result) {
    obj = { applicationName: application.name };
    let formatToPlainStringResult = intl.formatToPlainString(tmp2(1212).t["paC+US"], obj);
  } else {
    formatToPlainStringResult = intl.string(tmp2(1212).t["DT39A+"]);
  }
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = require(1212) /* getSystemLocale */.t;
  if (result) {
    obj = { applicationName: application.name };
    let formatToPlainStringResult1 = formatToPlainString(t.inM1Yt, obj);
  } else {
    const obj1 = { applicationName: application.name };
    formatToPlainStringResult1 = formatToPlainString(t.QWGvxA, obj1);
  }
  const obj2 = {};
  let tmp8 = importDefault(11632)(application.id);
  if (tmp8) {
    const obj3 = {};
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const obj4 = { applicationName: application.name };
    obj3.children = intl3.format(require(1212) /* getSystemLocale */.t.KRnERi, obj4);
    tmp8 = callback(importDefault(8214), obj3);
    const tmp12 = importDefault(8214);
  }
  const items = [tmp8, ];
  if (result) {
    const obj5 = { look: require(8214) /* InfoBox */.InfoBoxLooks.WARNING };
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj5.children = intl4.string(require(1212) /* getSystemLocale */.t.LY35Zy);
    result = callback(importDefault(8214), obj5);
    const tmp17 = importDefault(8214);
  }
  items[1] = result;
  obj2.children = items;
  const obj6 = { title: formatToPlainStringResult, content: formatToPlainStringResult1, extraContent: callback2(closure_4, obj2) };
  const obj7 = {};
  const obj8 = { variant: "destructive" };
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj8.text = intl5.string(require(1212) /* getSystemLocale */.t.xUqheM);
  obj8.onPress = onDelete;
  const items1 = [callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj8, "confirm"), ];
  const obj9 = { variant: "secondary" };
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj9.text = intl6.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
  items1[1] = callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj9, "cancel");
  obj7.children = items1;
  obj6.actions = callback2(closure_4, obj7);
  return callback(require(4475) /* getAlertModalItemKey */.AlertModal, obj6);
};
