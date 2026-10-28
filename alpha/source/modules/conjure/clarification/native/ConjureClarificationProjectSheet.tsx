// Module ID: 12520
// Function ID: 12521
// Name: ConjureClarificationProjectSheet
// Dependencies: [19, 21, 5004, 587, 558, 576, 1630, 7284, 7330, 5246, 5305, 7334, 2]

// Module 12520 (ConjureClarificationProjectSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import BottomSheetModal from "BottomSheetModal" /* 5305 */;
import ActionSheetRow2 from "ActionSheetRow" /* 7330 */;
import ActionSheet2 from "ActionSheet" /* 7334 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles((arg0) => {
  const obj = { scrollContent: { paddingBottom: nativeDefault.space.PX_16 + arg0 } };
  ({ paddingBottom: nativeDefault.space.PX_16 + arg0 });
  return obj;
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureClarificationProjectSheet(sheetKey) {
  let onPick;
  let projects;
  let title;
  let tmp5;
  let tmp8;
  let tmp9;
  const tmp = sheetKey;
  let obj = sheetKey(576);
  const cResult = obj.c(20);
  sheetKey = sheetKey.sheetKey;
  ({ title, projects, onPick } = sheetKey);
  const bottom = onPick(1630)().bottom;
  const tmp4 = closure_4(bottom);
  if (cResult[0] !== title) {
    const tmp7 = jsx(tmp(7284).BottomSheetTitleHeader, { title });
    cResult[0] = title;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  const scrollContent = tmp4.scrollContent;
  if (cResult[2] !== bottom) {
    const obj3 = { bottom };
    cResult[2] = bottom;
    cResult[3] = obj3;
    tmp8 = obj3;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === onPick) {
    if (cResult[5] === projects) {
      let tmp12;
      if (cResult[6] === sheetKey) {
        tmp9 = cResult[7];
      }
      if (cResult[11] !== tmp9) {
        const tmp14 = jsx(tmp(7330).ActionSheetRow.Group, { hasIcons: false, children: tmp9 });
        cResult[11] = tmp9;
        cResult[12] = tmp14;
        tmp12 = tmp14;
      } else {
        tmp12 = cResult[12];
      }
      if (cResult[13] === tmp4.scrollContent) {
        if (cResult[14] === tmp8) {
          let tmp15;
          if (cResult[15] === tmp12) {
            tmp15 = cResult[16];
          }
          if (cResult[17] === tmp5) {
            let tmp18;
            if (cResult[18] === tmp15) {
              tmp18 = cResult[19];
            }
            return tmp18;
          }
          const tmp20 = jsx(tmp(7334).ActionSheet, { scrollable: true, header: tmp5, children: tmp15 });
          cResult[17] = tmp5;
          cResult[18] = tmp15;
          cResult[19] = tmp20;
          tmp18 = tmp20;
        }
      }
      const tmp17 = jsx(tmp(5305).BottomSheetScrollView, { contentContainerStyle: scrollContent, scrollIndicatorInsets: tmp8, children: tmp12 });
      cResult[13] = tmp4.scrollContent;
      cResult[14] = tmp8;
      cResult[15] = tmp12;
      cResult[16] = tmp17;
      tmp15 = tmp17;
    }
  }
  if (cResult[8] === onPick) {
    let tmp10;
    if (cResult[9] === sheetKey) {
      tmp10 = cResult[10];
    }
    const mapped = projects.map(tmp10);
    cResult[4] = onPick;
    cResult[5] = projects;
    cResult[6] = sheetKey;
    cResult[7] = mapped;
    tmp9 = mapped;
  }
  const fn = function f(label) {
    let serverName;
    let closure_0 = label;
    let obj = {
      label: label.name,
      subLabel: serverName,
      onPress() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(sheetKey);
        onPick(label);
      }
    };
    serverName = label.serverName;
    const ActionSheetRow = sheetKey(dependencyMap[8]).ActionSheetRow;
    return jsx(ActionSheetRow, obj, label.projectId);
  };
  cResult[8] = onPick;
  cResult[9] = sheetKey;
  cResult[10] = fn;
  tmp10 = fn;
}) : (function ConjureClarificationProjectSheet(title) {
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
});
const result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationProjectSheet.tsx");

export default tmp3;
