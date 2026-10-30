// Module ID: 14508
// Function ID: 14509
// Name: ConjureDevicePermissionSettingsSheet
// Dependencies: [19, 17, 21, 5009, 575, 14509, 7360, 7315, 1114, 3865, 7054, 7363, 10934, 2]
// Exports: default

// Module 14508 (ConjureDevicePermissionSettingsSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef3865 from "module_3865" /* 3865 */;
import useConjureDevicePermissionSettingsDefault from "useConjureDevicePermissionSettings" /* 14509 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, permission;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { content: obj2 };
obj2 = { paddingBottom: nativeDefault.space.PX_16 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/device_permissions/native/ConjureDevicePermissionSettingsSheet.tsx");

export default function ConjureDevicePermissionSettingsSheet(arg0) {
  let _undefined;
  let appName;
  let applicationId;
  let c0;
  let intl;
  let intl2;
  let settings;
  _require = undefined;
  ({ applicationId, appName } = arg0);
  let tmp = closure_5();
  let tmp2 = useConjureDevicePermissionSettingsDefault(applicationId);
  ({ settings, setAllowed: c0 } = tmp2);
  const ActionSheet = require("ActionSheet").ActionSheet;
  let obj2 = { title: intl.string(_modDef3865["7a+RNP"]), subtitle: intl2.formatToPlainString(_modDef3865.IJY15p, { app: appName }) };
  const BottomSheetTitleHeader = require("BottomSheetTitleHeader").BottomSheetTitleHeader;
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  ({
    hasIcons: false,
    children: settings.map((permission) => {
      let obj2;
      let stringResult;
      permission = permission.permission;
      const decision = permission.decision;
      const obj = {
        label: obj2.getConjureDevicePermissionLabel(permission),
        subLabel: stringResult,
        value: "granted" === decision,
        onValueChange(arg0) {
          return permission(permission, arg0);
        }
      };
      const TableSwitchRow = _undefined(dependencyMap[11]).TableSwitchRow;
      stringResult = undefined;
      obj2 = _undefined(dependencyMap[12]);
      const tmp = jsx;
      const tmp2 = _undefined;
      if (null == decision) {
        const intl = tmp2(tmp3[8]).intl;
        stringResult = intl.string(require("module_3865")["wyav+H"]);
      }
      return tmp(TableSwitchRow, obj, permission);
    })
  });
  const TableRowGroup = require("TableRowGroup").TableRowGroup;
  return <ActionSheet startExpanded header={null}>{null}</ActionSheet>;
};
export const CONJURE_DEVICE_PERMISSION_SETTINGS_SHEET_KEY = "ConjureDevicePermissionSettingsSheet";
