// Module ID: 13746
// Function ID: 13747
// Name: ConjureAppBuildRequestProjectsSheet
// Dependencies: [32, 19, 21, 5306, 575, 1630, 7951, 7913, 5570, 7746, 7733, 2]
// Exports: default

// Module 13746 (ConjureAppBuildRequestProjectsSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import BottomSheetModal from "BottomSheetModal" /* 5570 */;
import TableRowGroup2 from "TableRowGroup" /* 7746 */;
import ActionSheet2 from "ActionSheet" /* 7951 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((arg0) => {
  const obj = { scrollContent: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 } };
  ({ paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 });
  return obj;
});
const result = size.fileFinishedImporting("modules/conjure/app_build_request/native/ConjureAppBuildRequestProjectsSheet.tsx");

export default function ConjureAppBuildRequestProjectsSheet(arg0) {
  let _undefined;
  let c2;
  let c3;
  let initialIds;
  let projects;
  let title;
  ({ projects, maxSelected: require, onChange: importDefault } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  ({ title, initialIds } = arg0);
  const bottom = useSafeAreaInsetsDefault().bottom;
  let tmp = closure_6(bottom);
  [c2, c3] = _slicedToArray(react.useState(initialIds), 2);
  const tmp2 = _slicedToArray(react.useState(initialIds), 2);
  const ActionSheet = ActionSheet2.ActionSheet;
  const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  ({
    hasIcons: false,
    children: projects.map((label) => {
      let serverName;
      let tmp3;
      const obj = {
        label: label.name,
        subLabel: serverName,
        checked: _undefined.includes(label.projectId),
        disabled: tmp3,
        onPress() {
          let found;
          const projectId = label.projectId;
          if (c2.includes(projectId)) {
            found = arr.filter((item) => item !== projectId);
          } else {
            const items = [];
            items[HermesBuiltin.arraySpread(items, c2, 0)] = projectId;
            found = items.slice(0, require);
          }
          c3(found);
          importDefault(found);
        }
      };
      serverName = label.serverName;
      const TableCheckboxRow = require("TableCheckboxRow").TableCheckboxRow;
      const arr = _undefined;
      const hasItem = _undefined.includes(label.projectId);
      tmp3 = !hasItem;
      const tmp = jsx;
      if (tmp3) {
        tmp3 = arr.length >= label;
      }
      return tmp(TableCheckboxRow, obj, label.projectId);
    })
  });
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  return <ActionSheet scrollable header={null}>{null}</ActionSheet>;
};
