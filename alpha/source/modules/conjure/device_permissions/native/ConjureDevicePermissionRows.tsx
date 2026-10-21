// Module ID: 11780
// Function ID: 11781
// Name: ConjureDevicePermissionRows
// Dependencies: [19, 21, 9443, 558, 576, 6882, 6890, 10756, 6966, 2]

// Module 11780 (ConjureDevicePermissionRows)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import TableRow2 from "TableRow" /* 6882 */;
import TableRowIcon2 from "TableRowIcon" /* 6890 */;
import conjureDevicePermissions from "conjureDevicePermissions" /* 10756 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const TableRowGroup2 = tmp(6966);
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureDevicePermissionRows(arg0) {
  let helperText;
  let permissions;
  let title;
  let tmp4;
  const tmp2 = dependencyMap;
  const obj = react2;
  const cResult = obj.c(7);
  ({ permissions, title, helperText } = arg0);
  if (cResult[0] !== permissions) {
    let tmp6;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function c(item) {
        const TableRow = TableRow2.TableRow;
        let ScreenIcon;
        const TableRowIcon = TableRowIcon2.TableRowIcon;
        if ("screen_capture" === item) {
          ScreenIcon = tmp2(tmp3[2]).ScreenIcon;
        }
        const tmp2Result = conjureDevicePermissions;
        return <TableRow key={arg0} icon={<TableRowIcon IconComponent={ScreenIcon} />} label={tmp2Result.getConjureDevicePermissionLabel(arg0)} />;
      };
      cResult[2] = fn;
      tmp6 = fn;
    } else {
      tmp6 = cResult[2];
    }
    const mapped = permissions.map(tmp6);
    cResult[0] = permissions;
    cResult[1] = mapped;
    tmp4 = mapped;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[3] === helperText) {
    if (cResult[4] === tmp4) {
      let tmp8;
      if (cResult[5] === title) {
        tmp8 = cResult[6];
      }
      return tmp8;
    }
  }
  const tmp9 = jsx(TableRowGroup2.TableRowGroup, { hasIcons: true, title, helperText, children: tmp4 });
  cResult[3] = helperText;
  cResult[4] = tmp4;
  cResult[5] = title;
  cResult[6] = tmp9;
  tmp8 = tmp9;
}) : (function ConjureDevicePermissionRows(permissions) {
  let helperText;
  let title;
  permissions = permissions.permissions;
  ({ title, helperText } = permissions);
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  return <TableRowGroup hasIcons title={title} helperText={helperText}>{permissions.map((item) => {
    const TableRow = TableRow2.TableRow;
    let ScreenIcon;
    const TableRowIcon = TableRowIcon2.TableRowIcon;
    if ("screen_capture" === item) {
      ScreenIcon = tmp2(tmp3[2]).ScreenIcon;
    }
    const tmp2Result = conjureDevicePermissions;
    return <TableRow key={arg0} icon={<TableRowIcon IconComponent={ScreenIcon} />} label={tmp2Result.getConjureDevicePermissionLabel(arg0)} />;
  })}</TableRowGroup>;
});
const result = size.fileFinishedImporting("modules/conjure/device_permissions/native/ConjureDevicePermissionRows.tsx");

export default tmp3;
