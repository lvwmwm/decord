// Module ID: 14239
// Function ID: 14240
// Name: ConjureDevicePermissionSettingsSheet
// Dependencies: [19, 17, 21, 5004, 587, 558, 576, 14240, 1125, 3863, 7284, 7331, 10835, 7023, 7334, 2]

// Module 14239 (ConjureDevicePermissionSettingsSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import _modDef3863 from "module_3863" /* 3863 */;
import useConjureDevicePermissionSettingsDefault from "useConjureDevicePermissionSettings" /* 14240 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, permission, tmp5;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { content: obj2 };
obj2 = { paddingBottom: nativeDefault.space.PX_16 };
let closure_5 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureDevicePermissionSettingsSheet(appName) {
  let first;
  let setAllowed;
  let settings;
  let tmp11;
  let tmp16;
  let tmp9;
  let tmp = setAllowed;
  let tmp2 = dependencyMap;
  let obj = setAllowed(576);
  const cResult = obj.c(18);
  appName = appName.appName;
  const applicationId = appName.applicationId;
  const tmp4 = closure_5();
  ({ settings, setAllowed } = useConjureDevicePermissionSettingsDefault(applicationId));
  useConjureDevicePermissionSettingsDefault(applicationId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(1125).intl;
    let stringResult = intl.string(tmp5(3863)["7a+RNP"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== appName) {
    const intl2 = tmp(1125).intl;
    let obj2 = { app: appName };
    const formatToPlainStringResult = intl2.formatToPlainString(_modDef3863.IJY15p, obj2);
    cResult[1] = appName;
    cResult[2] = formatToPlainStringResult;
    tmp9 = formatToPlainStringResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== tmp9) {
    const tmp13 = jsx(tmp(7284).BottomSheetTitleHeader, { title: first, subtitle: tmp9 });
    cResult[3] = tmp9;
    cResult[4] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === setAllowed) {
    let tmp15;
    let tmp18;
    if (cResult[6] === settings) {
      tmp15 = cResult[7];
    }
    if (cResult[10] !== tmp15) {
      const tmp20 = jsx(tmp(7023).TableRowGroup, { hasIcons: false, children: tmp15 });
      cResult[10] = tmp15;
      cResult[11] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[11];
    }
    if (cResult[12] === tmp4.content) {
      let tmp21;
      if (cResult[13] === tmp18) {
        tmp21 = cResult[14];
      }
      if (cResult[15] === tmp11) {
        let tmp25;
        if (cResult[16] === tmp21) {
          tmp25 = cResult[17];
        }
        return tmp25;
      }
      const tmp27 = jsx(tmp(7334).ActionSheet, { startExpanded: true, header: tmp11, children: tmp21 });
      cResult[15] = tmp11;
      cResult[16] = tmp21;
      cResult[17] = tmp27;
      tmp25 = tmp27;
    }
    const tmp24 = <View style={tmp14}>{tmp18}</View>;
    cResult[12] = tmp4.content;
    cResult[13] = tmp18;
    cResult[14] = tmp24;
    tmp21 = tmp24;
  }
  if (cResult[8] !== setAllowed) {
    class C {
      constructor(arg0) {
        permission = appName.permission;
        decision = appName.decision;
        tmp3 = closure_1_2;
        tmp = closure_1_4;
        tmp2 = setAllowed;
        obj = { label: null, subLabel: null, value: null, onValueChange: null };
        TableSwitchRow = setAllowed(closure_1_2[11]).TableSwitchRow;
        obj2 = setAllowed(closure_1_2[12]);
        obj.label = obj2.getConjureDevicePermissionLabel(permission);
        stringResult = undefined;
        if (null == decision) {
          intl = tmp2(tmp3[8]).intl;
          tmp5 = closure_1_1;
          stringResult = intl.string(closure_1_1(tmp3[9])["wyav+H"]);
        }
        obj.subLabel = stringResult;
        obj.value = "granted" === decision;
        obj.onValueChange = function onValueChange() { /* body not rendered: F152262 */ };
        return tmp(TableSwitchRow, obj, permission);
      }
    }
    cResult[8] = setAllowed;
    cResult[9] = C;
    tmp16 = C;
  } else {
    class C {
      constructor(arg0) {
        permission = appName.permission;
        decision = appName.decision;
        tmp3 = closure_1_2;
        tmp = closure_1_4;
        tmp2 = setAllowed;
        obj = { label: null, subLabel: null, value: null, onValueChange: null };
        TableSwitchRow = setAllowed(closure_1_2[11]).TableSwitchRow;
        obj2 = setAllowed(closure_1_2[12]);
        obj.label = obj2.getConjureDevicePermissionLabel(permission);
        stringResult = undefined;
        if (null == decision) {
          intl = tmp2(tmp3[8]).intl;
          tmp5 = closure_1_1;
          stringResult = intl.string(closure_1_1(tmp3[9])["wyav+H"]);
        }
        obj.subLabel = stringResult;
        obj.value = "granted" === decision;
        obj.onValueChange = function onValueChange() { /* body not rendered: F152262 */ };
        return tmp(TableSwitchRow, obj, permission);
      }
    }
  }
  const mapped = settings.map(tmp16);
  cResult[5] = setAllowed;
  cResult[6] = settings;
  cResult[7] = mapped;
  tmp15 = mapped;
}) : (function ConjureDevicePermissionSettingsSheet(arg0) {
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
  let obj2 = { title: intl.string(_modDef3863["7a+RNP"]), subtitle: intl2.formatToPlainString(_modDef3863.IJY15p, { app: appName }) };
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
        stringResult = intl.string(require("module_3863")["wyav+H"]);
      }
      return tmp(TableSwitchRow, obj, permission);
    })
  });
  const TableRowGroup = require("TableRowGroup").TableRowGroup;
  return <ActionSheet startExpanded header={null}>{null}</ActionSheet>;
});
const result = size.fileFinishedImporting("modules/conjure/device_permissions/native/ConjureDevicePermissionSettingsSheet.tsx");

export default tmp3;
export const CONJURE_DEVICE_PERMISSION_SETTINGS_SHEET_KEY = "ConjureDevicePermissionSettingsSheet";
