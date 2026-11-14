// Module ID: 13250
// Function ID: 13251
// Name: ConjureLinkedAppBuildSheet
// Dependencies: [19, 17, 21, 5306, 575, 1630, 7951, 7913, 7745, 5552, 7747, 2]
// Exports: default

// Module 13250 (ConjureLinkedAppBuildSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7745 */;
import TableRadioRow from "TableRadioRow" /* 7747 */;
import ActionSheet2 from "ActionSheet" /* 7951 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = { content: { paddingBottom: nativeDefault.space.PX_16 + arg0 } };
  ({ paddingBottom: nativeDefault.space.PX_16 + arg0 });
  return obj;
});
const result = size.fileFinishedImporting("modules/conjure/linked_apps/native/ConjureLinkedAppBuildSheet.tsx");

export default function ConjureLinkedAppBuildSheet(title) {
  let options;
  let setting;
  ({ sheetKey: require, setting, onPick: importDefault } = title);
  title = title.title;
  const tmp = closure_5(useSafeAreaInsetsDefault().bottom);
  const ActionSheet = ActionSheet2.ActionSheet;
  ({
    hasIcons: false,
    title: setting.label,
    accessibilityLabel: setting.label,
    value: setting.value,
    onChange(arg0) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(require);
      importDefault(arg0);
    },
    children: options.map((data) => jsx(TableRadioRow.TableRadioRow, { value: data.data, label: data.label, subLabel: data.description, disabled: data.disabled }, data.data))
  });
  options = setting.options;
  const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  return <ActionSheet header={null}>{null}</ActionSheet>;
};
