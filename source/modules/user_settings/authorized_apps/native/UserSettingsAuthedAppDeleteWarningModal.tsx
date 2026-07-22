// Module ID: 11621
// Function ID: 90263
// Name: UserSettingsAuthedAppDeleteWarningModal
// Dependencies: []
// Exports: default

// Module 11621 (UserSettingsAuthedAppDeleteWarningModal)
const _module = require(dependencyMap[0]);
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = _module);
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedAppDeleteWarningModal.tsx");

export default function UserSettingsAuthedAppDeleteWarningModal(application) {
  let onDelete;
  let scopes;
  application = application.application;
  ({ scopes, onDelete } = application);
  let obj = require(dependencyMap[1]);
  let result = obj.isSocialLayerSDKAuthorization(application, scopes);
  const intl = require(dependencyMap[2]).intl;
  if (result) {
    obj = { applicationName: application.name };
    let formatToPlainStringResult = intl.formatToPlainString(tmp2(tmp3[2]).t.paC+US, obj);
  } else {
    formatToPlainStringResult = intl.string(tmp2(tmp3[2]).t.DT39A+);
  }
  const intl2 = require(dependencyMap[2]).intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = require(dependencyMap[2]).t;
  if (result) {
    obj = { applicationName: application.name };
    let formatToPlainStringResult1 = formatToPlainString(t.inM1Yt, obj);
  } else {
    const obj1 = { applicationName: application.name };
    formatToPlainStringResult1 = formatToPlainString(t.QWGvxA, obj1);
  }
  const obj2 = {};
  let tmp8 = importDefault(dependencyMap[3])(application.id);
  if (tmp8) {
    const obj3 = {};
    const intl3 = require(dependencyMap[2]).intl;
    const obj4 = { applicationName: application.name };
    obj3.children = intl3.format(require(dependencyMap[2]).t.KRnERi, obj4);
    tmp8 = callback(importDefault(dependencyMap[4]), obj3);
    const tmp12 = importDefault(dependencyMap[4]);
  }
  const items = [tmp8, ];
  if (result) {
    const obj5 = { look: require(dependencyMap[4]).InfoBoxLooks.WARNING };
    const intl4 = require(dependencyMap[2]).intl;
    obj5.children = intl4.string(require(dependencyMap[2]).t.LY35Zy);
    result = callback(importDefault(dependencyMap[4]), obj5);
    const tmp17 = importDefault(dependencyMap[4]);
  }
  items[1] = result;
  obj2.children = items;
  const obj6 = { title: formatToPlainStringResult, content: formatToPlainStringResult1, extraContent: callback2(closure_4, obj2) };
  const obj7 = {};
  const obj8 = { variant: "destructive" };
  const intl5 = require(dependencyMap[2]).intl;
  obj8.text = intl5.string(require(dependencyMap[2]).t.xUqheM);
  obj8.onPress = onDelete;
  const items1 = [callback(require(dependencyMap[5]).AlertActionButton, obj8, "confirm"), ];
  const obj9 = { variant: "secondary" };
  const intl6 = require(dependencyMap[2]).intl;
  obj9.text = intl6.string(require(dependencyMap[2]).t.ETE/oC);
  items1[1] = callback(require(dependencyMap[5]).AlertActionButton, obj9, "cancel");
  obj7.children = items1;
  obj6.actions = callback2(closure_4, obj7);
  return callback(require(dependencyMap[5]).AlertModal, obj6);
};
