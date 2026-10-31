// Module ID: 12753
// Function ID: 12754
// Name: ConjureClarificationProjectSheet
// Dependencies: [19, 21, 5014, 575, 1625, 7366, 7321, 5275, 7368, 5258, 2]
// Exports: default

// Module 12753 (ConjureClarificationProjectSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import BottomSheetModal from "BottomSheetModal" /* 5275 */;
import ActionSheet2 from "ActionSheet" /* 7366 */;
import ActionSheetRow2 from "ActionSheetRow" /* 7368 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles((arg0) => {
  const obj = { scrollContent: { paddingBottom: nativeDefault.space.PX_16 + arg0 } };
  ({ paddingBottom: nativeDefault.space.PX_16 + arg0 });
  return obj;
});
const result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationProjectSheet.tsx");

export default function ConjureClarificationProjectSheet(title) {
  let projects;
  ({ sheetKey: require, projects, onPick: importDefault } = title);
  title = title.title;
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp = closure_4(bottom);
  const ActionSheet = ActionSheet2.ActionSheet;
  const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  ({
    hasIcons: false,
    children: projects.map((label) => {
      let serverName;
      require = label;
      let obj = {
        label: label.name,
        subLabel: serverName,
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet(require);
          importDefault(label);
        }
      };
      serverName = label.serverName;
      const ActionSheetRow = ActionSheetRow2.ActionSheetRow;
      return jsx(ActionSheetRow, obj, label.projectId);
    })
  });
  const Group = ActionSheetRow2.ActionSheetRow.Group;
  return <ActionSheet scrollable header={null}>{null}</ActionSheet>;
};
