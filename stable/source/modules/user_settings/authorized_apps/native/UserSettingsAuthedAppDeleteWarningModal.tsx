// Module ID: 12730
// Function ID: 12731
// Name: UserSettingsAuthedAppDeleteWarningModal
// Dependencies: [21, 11665, 1114, 12731, 9589, 4986, 2]
// Exports: default

// Module 12730 (UserSettingsAuthedAppDeleteWarningModal)
import util from "util" /* 1114 */;
import AlertModal from "AlertModal" /* 4986 */;
import isSocialLayerApplication from "isSocialLayerApplication" /* 11665 */;
import shouldWarnAuthorizedAppTwoWayDefault from "shouldWarnAuthorizedAppTwoWay" /* 12731 */;
import jsxProd from "jsxProd" /* 21 */;
import size from "module_2" /* 2 */;

({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
let result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedAppDeleteWarningModal.tsx");

export default function UserSettingsAuthedAppDeleteWarningModal(application) {
  application = application.application;
  ({ scopes, onDelete } = application);
  const result = isSocialLayerApplication.isSocialLayerSDKAuthorization(application, scopes);
  const intl = util.intl;
  if (result) {
    const obj2 = { applicationName: application.name };
    let formatToPlainStringResult = intl.formatToPlainString(tmp(1114).t["paC+US"], obj2);
  } else {
    formatToPlainStringResult = intl.string(tmp(1114).t["DT39A+"]);
  }
  const intl2 = tmp(1114).intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = tmp(1114).t;
  if (result) {
    const obj3 = { applicationName: application.name };
    let formatToPlainStringResult1 = formatToPlainString(t.inM1Yt, obj3);
  } else {
    const obj4 = { applicationName: application.name };
    formatToPlainStringResult1 = formatToPlainString(t.QWGvxA, obj4);
  }
  let tmp9 = shouldWarnAuthorizedAppTwoWayDefault(application.id);
  if (tmp9) {
    const obj5 = { children: null };
    const intl3 = tmp(1114).intl;
    const obj6 = { applicationName: application.name };
    obj5.children = intl3.format(tmp(1114).t.KRnERi, obj6);
    tmp9 = React3(tmp8(9589), obj5);
    const tmp8Result = tmp8(9589);
  }
  const items = [tmp9, ];
  let tmp12 = result;
  if (result) {
    const obj7 = { look: tmp(9589).InfoBoxLooks.WARNING, children: null };
    const intl4 = tmp(1114).intl;
    obj7.children = intl4.string(tmp(1114).t.LY35Zy);
    tmp12 = React3(tmp8(9589), obj7);
    const tmp8Result2 = tmp8(9589);
  }
  items[1] = tmp12;
  const obj8 = { title: formatToPlainStringResult, content: formatToPlainStringResult1, extraContent: hasOwnProperty(React4, { children: items }), actions: null };
  const obj9 = { children: null };
  const obj10 = { variant: "destructive", text: null, onPress: null };
  const intl5 = tmp(1114).intl;
  obj10.text = intl5.string(util.t.xUqheM);
  obj10.onPress = onDelete;
  const items1 = [React3(AlertModal.AlertActionButton, obj10, "confirm"), ];
  const obj11 = { variant: "secondary", text: null };
  const intl6 = tmp(1114).intl;
  obj11.text = intl6.string(util.t["ETE/oC"]);
  items1[1] = React3(AlertModal.AlertActionButton, obj11, "cancel");
  obj9.children = items1;
  obj8.actions = hasOwnProperty(React4, obj9);
  return React3(AlertModal.AlertModal, obj8);
};
