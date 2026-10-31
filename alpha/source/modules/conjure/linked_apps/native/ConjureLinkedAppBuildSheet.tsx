// Module ID: 12504
// Function ID: 12505
// Name: ConjureLinkedAppBuildSheet
// Dependencies: [19, 21, 5014, 575, 1625, 1113, 3868, 7366, 7321, 6027, 7058, 5258, 12499, 7061, 7368, 2]
// Exports: default

// Module 12504 (ConjureLinkedAppBuildSheet)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = { content: { paddingBottom: nativeDefault.space.PX_16 + arg0 } };
  ({ paddingBottom: nativeDefault.space.PX_16 + arg0 });
  return obj;
});
const result = size.fileFinishedImporting("modules/conjure/linked_apps/native/ConjureLinkedAppBuildSheet.tsx");

export default function ConjureLinkedAppBuildSheet(arg0) {
  let ActionSheetRow;
  let Stack;
  let intl2;
  let items;
  let obj2;
  let obj5;
  let onRemove;
  let prop;
  let title;
  let tmp7;
  let value;
  ({ sheetKey: require, onPick: importDefault, onRemove } = arg0);
  ({ title, value } = arg0);
  const tmp3 = closure_5(require("useSafeAreaInsets")().bottom);
  const intl = require("intl").intl;
  const stringResult = intl.string(require("module_3868").Odrcmq);
  let obj = { header: closure_3(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title }), children: tmp7(Stack, obj2) };
  const ActionSheet = require("ActionSheet").ActionSheet;
  obj2 = { spacing: require("native").space.PX_16, style: tmp3.content, children: items };
  Stack = require("Stack/Stack").Stack;
  let obj3 = {
    hasIcons: false,
    title: stringResult,
    accessibilityLabel: stringResult,
    value,
    onChange(arg0) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(require);
      importDefault(arg0);
    },
    children: prop.map((value) => {
      let obj2;
      let obj3;
      const obj = { value, label: obj2.linkedAppBuildLabel(value), subLabel: obj3.linkedAppBuildDescription(value) };
      const TableRadioRow = require("TableRadioRow").TableRadioRow;
      obj2 = require("conjureLinkedApps");
      obj3 = require("conjureLinkedApps");
      return closure_1_3(TableRadioRow, obj, value);
    })
  };
  const TableRadioGroup = require("TableRadioGroup").TableRadioGroup;
  prop = require("conjureLinkedApps").CONJURE_LINKED_APP_BUILDS;
  items = [closure_3(TableRadioGroup, obj3), ];
  let tmp6Result = null;
  const tmp = importDefault;
  tmp7 = closure_4;
  if (null != onRemove) {
    const obj4 = { hasIcons: false, children: closure_3(ActionSheetRow, obj5) };
    const Group = tmp4(tmp2[14]).ActionSheetRow.Group;
    obj5 = {
      variant: "danger",
      label: intl2.string(tmp(onRemove[6]).bN1S9T),
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(require);
          onRemove();
        }
    };
    ActionSheetRow = tmp4(tmp2[14]).ActionSheetRow;
    intl2 = tmp4(tmp2[5]).intl;
    tmp6Result = tmp6(Group, obj4);
  }
  items[1] = tmp6Result;
  return closure_3(ActionSheet, obj);
};
