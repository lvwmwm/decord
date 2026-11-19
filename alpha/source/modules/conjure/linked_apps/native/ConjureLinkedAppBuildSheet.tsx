// Module ID: 18371
// Function ID: 18372
// Name: ConjureLinkedAppBuildSheet
// Dependencies: [19, 17, 21, 4792, 575, 1630, 7434, 7396, 7228, 5006, 7230, 2]
// Exports: default

// Module 18371 (ConjureLinkedAppBuildSheet)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import TableRadioGroup2 from "TableRadioGroup" /* 7228 */;
import TableRadioRow from "TableRadioRow" /* 7230 */;
import ActionSheet2 from "ActionSheet" /* 7434 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4792 */;
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
