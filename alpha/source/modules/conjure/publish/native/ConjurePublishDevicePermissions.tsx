// Module ID: 11779
// Function ID: 11780
// Name: ConjurePublishDevicePermissions
// Dependencies: [19, 21, 558, 576, 1128, 3830, 11780, 2]

// Module 11779 (ConjurePublishDevicePermissions)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import ConjureDevicePermissionRowsDefault from "ConjureDevicePermissionRows" /* 11780 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishDevicePermissions(permissions) {
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(4);
  permissions = permissions.permissions;
  let tmp4 = null;
  if (0 !== permissions.length) {
    let tmp10;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1128).intl;
      const stringResult = intl.string(_modDef3830["6U+4pJ"]);
      const intl2 = tmp(1128).intl;
      const stringResult1 = intl2.string(_modDef3830.X8wPIB);
      cResult[0] = stringResult;
      cResult[1] = stringResult1;
      tmp5 = stringResult;
      tmp6 = stringResult1;
    } else {
      [tmp5, tmp6] = cResult;
    }
    if (cResult[2] !== permissions) {
      const tmp13 = jsx(ConjureDevicePermissionRowsDefault, { permissions, title: tmp5, helperText: tmp6 });
      cResult[2] = permissions;
      cResult[3] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[3];
    }
    tmp4 = tmp10;
  }
  return tmp4;
}) : (function ConjurePublishDevicePermissions(permissions) {
  permissions = permissions.permissions;
  let tmp = null;
  if (0 !== permissions.length) {
    ConjureDevicePermissionRowsDefault;
    const intl = intl3.intl;
    const intl2 = intl3.intl;
    tmp = <tmp5 permissions={permissions} title={intl.string(_modDef3830["6U+4pJ"])} helperText={intl2.string(_modDef3830.X8wPIB)} />;
  }
  return tmp;
});
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishDevicePermissions.tsx");

export default tmp3;
