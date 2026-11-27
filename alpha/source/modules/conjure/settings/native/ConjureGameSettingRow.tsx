// Module ID: 18545
// Function ID: 18546
// Name: ConjureGameSettingRow
// Dependencies: [19, 17, 21, 5043, 575, 18546, 18547, 1112, 4245, 5634, 6140, 6144, 5257, 18548, 7181, 2]
// Exports: default

// Module 18545 (ConjureGameSettingRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef4245 from "module_4245" /* 4245 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5257 */;
import ConjureGamePickerSheetDefault from "ConjureGamePickerSheet" /* 18548 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2 };
obj2 = { gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureGameSettingRow.tsx");

export default function ConjureGameSettingRow(def) {
  let disabled;
  let hint;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let pickingEmpty;
  let value;
  def = def.def;
  ({ hint, value, pickingEmpty, disabled, onChange: importDefault, onPickingEmptyChange: dependencyMap } = def);
  let tmp = closure_6();
  let obj = def(18546);
  let closure_3 = obj.useConjureGameNameLookup();
  let items = value;
  if (!Array.isArray(value)) {
    items = [];
  }
  const isArray = Array.isArray(value) && 0 === value.length && !pickingEmpty;
  if (def.key === def(18547).CONJURE_OVERLAY_GAMES_SETTING_KEY) {
    const intl = tmp2(1112).intl;
    hint = intl.string(_modDef4245.cqWCNY);
  } else if (hint == null) {
    hint = def.label;
  }
  const mapped = items.map((item) => {
    let tmp = closure_3(item);
    if (tmp == null) {
      tmp = item;
    }
    return tmp;
  });
  let joined = mapped.join(", ");
  let obj2 = { style: tmp.container, children: items1 };
  items1 = [items(tmp2(5634).Text, { variant: "body-sm/normal", color: "text-default", children: hint }), , ];
  const TableRowGroup = tmp2(6140).TableRowGroup;
  const obj3 = {
    label: def.label,
    subLabel: joined,
    arrow: true,
    disabled,
    onPress() {
      let length;
      let obj2;
      let tmp = ActionSheetActionCreators;
      const showActionSheet = tmp.showActionSheet;
      const obj = { content: React3(ConjureGamePickerSheetDefault, obj2), key: "ConjureGamePickerSheet", stackingBehavior: "stack" };
      obj2 = {
        title: def.label,
        selected: items,
        onSubmit(arg0) {
          const tmp = 0 === arg0.length && 0 === length.length;
          if (!tmp) {
            closure_1_2(0 === arg0.length);
            closure_1_1(arg0);
          }
        }
      };
      showActionSheet(obj);
    }
  };
  const TableRow = tmp2(6144).TableRow;
  const tmp9 = closure_3;
  if ("" === joined) {
    const intl2 = tmp2(1112).intl;
    joined = intl2.string(_modDef4245["74Afoq"]);
  }
  const obj4 = { hasIcons: false, children: items2 };
  items2 = [items(TableRow, obj3), ];
  const obj5 = {
    label: intl3.string(_modDef4245.dbuk9m),
    checked: isArray,
    disabled,
    onPress(arg0) {
      dependencyMap(!arg0);
      importDefault([]);
    }
  };
  const TableCheckboxRow = tmp2(7181).TableCheckboxRow;
  intl3 = tmp2(1112).intl;
  items2[1] = items(TableCheckboxRow, obj5);
  items1[1] = closure_5(TableRowGroup, obj4);
  let tmp10Result = null;
  if (pickingEmpty) {
    const obj6 = { variant: "body-xs/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: intl4.string(_modDef4245["/++Pf+"]) };
    const Text = tmp2(5634).Text;
    intl4 = tmp2(1112).intl;
    tmp10Result = tmp10(Text, obj6);
  }
  items1[2] = tmp10Result;
  return closure_5(tmp9, obj2);
};
