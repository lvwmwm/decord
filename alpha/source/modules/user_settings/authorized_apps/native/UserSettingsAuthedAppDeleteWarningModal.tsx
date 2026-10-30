// Module ID: 14122
// Function ID: 14123
// Name: UserSettingsAuthedAppDeleteWarningModal
// Dependencies: [21, 11526, 1114, 14123, 11354, 5959, 2]
// Exports: default

// Module 14122 (UserSettingsAuthedAppDeleteWarningModal)
import intl7 from "intl" /* 1114 */;
import InfoBox from "InfoBox" /* 11354 */;
import isSocialLayerApplication from "isSocialLayerApplication" /* 11526 */;
import shouldWarnAuthorizedAppTwoWayDefault from "shouldWarnAuthorizedAppTwoWay" /* 14123 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const InfoBoxDefault = InfoBox;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
let result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedAppDeleteWarningModal.tsx");

export default function UserSettingsAuthedAppDeleteWarningModal(application) {
  let formatToPlainStringResult;
  let formatToPlainStringResult1;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items1;
  let obj6;
  let obj9;
  let onDelete;
  let scopes;
  application = application.application;
  ({ scopes, onDelete } = application);
  const obj = isSocialLayerApplication;
  const result = obj.isSocialLayerSDKAuthorization(application, scopes);
  const intl = intl7.intl;
  if (result) {
    const obj2 = { applicationName: application.name };
    formatToPlainStringResult = intl.formatToPlainString(tmp(1114).t["paC+US"], obj2);
  } else {
    formatToPlainStringResult = intl.string(tmp(1114).t["DT39A+"]);
  }
  const intl2 = tmp(1114).intl;
  const formatToPlainString = intl2.formatToPlainString;
  const t = tmp(1114).t;
  if (result) {
    const obj3 = { applicationName: application.name };
    formatToPlainStringResult1 = formatToPlainString(t.inM1Yt, obj3);
  } else {
    const obj4 = { applicationName: application.name };
    formatToPlainStringResult1 = formatToPlainString(t.QWGvxA, obj4);
  }
  let tmp9 = shouldWarnAuthorizedAppTwoWayDefault(application.id);
  if (tmp9) {
    const obj5 = { children: intl3.format(intl7.t.KRnERi, obj6) };
    const tmp8Result = InfoBoxDefault;
    intl3 = tmp(1114).intl;
    obj6 = { applicationName: application.name };
    tmp9 = _false(tmp8Result, obj5);
  }
  const items = [tmp9, ];
  let tmp12 = result;
  if (tmp12) {
    const obj7 = { look: InfoBox.InfoBoxLooks.WARNING, children: intl4.string(intl7.t.LY35Zy) };
    const tmp8Result2 = InfoBoxDefault;
    intl4 = tmp(1114).intl;
    tmp12 = _false(tmp8Result2, obj7);
  }
  items[1] = tmp12;
  const obj8 = { title: formatToPlainStringResult, content: formatToPlainStringResult1, extraContent: hasOwnProperty(React3, { children: items }), actions: hasOwnProperty(React3, obj9) };
  obj9 = { children: items1 };
  const AlertModal = tmp(5959).AlertModal;
  const obj10 = { variant: "destructive", text: intl5.string(intl7.t.xUqheM), onPress: onDelete };
  const AlertActionButton = tmp(5959).AlertActionButton;
  intl5 = tmp(1114).intl;
  items1 = [_false(AlertActionButton, obj10, "confirm"), ];
  const obj11 = { variant: "secondary", text: intl6.string(intl7.t["ETE/oC"]) };
  const AlertActionButton2 = tmp(5959).AlertActionButton;
  intl6 = tmp(1114).intl;
  items1[1] = _false(AlertActionButton2, obj11, "cancel");
  return _false(AlertModal, obj8);
};
