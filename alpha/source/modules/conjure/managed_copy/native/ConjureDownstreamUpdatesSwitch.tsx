// Module ID: 13111
// Function ID: 13112
// Name: ConjureDownstreamUpdatesSwitch
// Dependencies: [32, 19, 17, 21, 5243, 575, 13099, 7327, 7680, 7888, 1113, 4079, 5866, 2]
// Exports: default

// Module 13111 (ConjureDownstreamUpdatesSwitch)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef4079 from "module_4079" /* 4079 */;
import conjureManagedCopyConnection from "conjureManagedCopyConnection" /* 7327 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: obj2 };
obj2 = { gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/managed_copy/native/ConjureDownstreamUpdatesSwitch.tsx");

export default function ConjureDownstreamUpdatesSwitch(projectId) {
  let TableSwitchRow;
  let Text;
  let closure_1;
  let first;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj11;
  let obj5;
  projectId = projectId.projectId;
  importDefault = undefined;
  const tmp = closure_8();
  let obj = projectId(13099);
  const conjureDownstreamUpdates = obj.useConjureDownstreamUpdates(projectId);
  [first, importDefault] = react.useState(false);
  [][0] = projectId;
  let tmp9Result = null;
  if (null != conjureDownstreamUpdates) {
    let tmp11Result;
    const obj2 = { style: tmp.container, children: items };
    const obj3 = { hasIcons: false, children: closure_6(TableSwitchRow, obj5) };
    const TableRowGroup = tmp2(7680).TableRowGroup;
    obj5 = { label: intl.string(_modDef4079["Nf+zrD"]), subLabel: intl2.string(_modDef4079.heoCNf), value: null, disabled: null, onValueChange: tmp7 };
    TableSwitchRow = tmp2(7888).TableSwitchRow;
    intl = tmp2(1113).intl;
    intl2 = tmp2(1113).intl;
    ({ enabled: obj4.value, pending: obj4.disabled } = conjureDownstreamUpdates);
    items = [closure_6(TableRowGroup, obj3), ];
    const tmp12 = importDefault;
    const tmp9 = closure_7;
    if (first) {
      const obj6 = { accessibilityRole: "alert", children: closure_6(Text, obj11) };
      obj11 = { variant: "body-sm/normal", color: "text-feedback-critical", children: intl3.string(tmp12(4079)["UU+oef"]) };
      Text = tmp2(5866).Text;
      intl3 = tmp2(1113).intl;
      tmp11Result = tmp11(tmp10, obj6);
    } else {
      tmp11Result = null;
    }
    items[1] = tmp11Result;
    tmp9Result = tmp9(tmp10, obj2);
  }
  return tmp9Result;
};
