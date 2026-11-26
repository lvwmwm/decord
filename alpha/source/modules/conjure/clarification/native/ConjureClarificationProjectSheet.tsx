// Module ID: 18810
// Function ID: 18811
// Name: ConjureClarificationProjectSheet
// Dependencies: [19, 21, 5043, 575, 1629, 7546, 7507, 5275, 7548, 5257, 2]
// Exports: default

// Module 18810 (ConjureClarificationProjectSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import BottomSheetModal from "BottomSheetModal" /* 5275 */;
import ActionSheet2 from "ActionSheet" /* 7546 */;
import ActionSheetRow2 from "ActionSheetRow" /* 7548 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5043 */;
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
