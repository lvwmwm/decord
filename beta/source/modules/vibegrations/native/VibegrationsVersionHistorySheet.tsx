// Module ID: 16306
// Function ID: 16307
// Name: VibegrationsVersionHistorySheet
// Dependencies: [32, 19, 17, 12642, 21, 4836, 576, 7055, 1613, 5209, 1115, 3715, 4800, 4832, 5999, 5917, 6618, 6570, 6045, 2]
// Exports: default

// Module 16306 (VibegrationsVersionHistorySheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12642 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let hasOwnProperty;
let metroRequire;
let obj2;
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
const fetchSourceHistory = VibegrationsConnectionStore.fetchSourceHistory;
const jsx = Fragment.jsx;
const VibegrationsVersionHistorySheet_str = "VibegrationsVersionHistorySheet";
let obj = { state: obj2 };
obj2 = { alignItems: "center", padding: nativeDefault.space.PX_24 };
let closure_10 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsVersionHistorySheet.tsx");

export default function VibegrationsVersionHistorySheet(projectId) {
  let BottomSheetTitleHeader;
  let _undefined;
  let c2;
  let closure_3;
  let intl;
  let intl2;
  let intl3;
  let obj8;
  let obj9;
  let tmp5;
  let tmp7;
  let tmp9;
  projectId = projectId.projectId;
  const onRestore = projectId.onRestore;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let tmp = closure_10();
  let tmp2 = onRestore;
  let tmp3 = dependencyMap;
  const bottom = onRestore(1613)().bottom;
  [tmp5, c2] = _slicedToArray(react.useState({ status: "loading" }), 2);
  const items = [projectId];
  const tmp4 = _slicedToArray(react.useState({ status: "loading" }), 2);
  const effect = react.useEffect(() => {
    let c0 = false;
    const promise = fetchSourceHistory(c0);
    const nextPromise = promise.then((entries) => {
      const tmp = c0;
      if (!tmp) {
        const obj = { status: "loaded", entries };
        c2(obj);
      }
    });
    nextPromise.catch(() => {
      const tmp = c0;
      if (!tmp) {
        c2({ status: "failed" });
      }
    });
    return () => {
      c0 = true;
    };
  }, items);
  const items1 = [onRestore];
  _slicedToArray = react.useCallback((arg0) => {
    let intl;
    let intl2;
    let intl3;
    let closure_0 = arg0;
    let obj = {
      key: "VibegrationsVersionHistoryRestore",
      title: intl.string(onRestore(c2[11]).qOUOPE),
      content: intl2.string(onRestore(c2[11]).k2JBj5),
      confirmText: intl3.string(onRestore(c2[11])["+sRK16"]),
      onConfirm() {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(VibegrationsVersionHistorySheet_str);
        onRestore(closure_0);
      }
    };
    const showConfirmModal = projectId(c2[9]).showConfirmModal;
    projectId(c2[9]);
    intl = projectId(c2[10]).intl;
    intl2 = projectId(c2[10]).intl;
    intl3 = projectId(c2[10]).intl;
    showConfirmModal(obj);
  }, items1);
  if ("loading" === tmp5.status) {
    tmp9 = <closure_6 style={tmp.state}><closure_5 /></closure_6>;
    tmp7 = jsx;
  } else {
    let str = "failed";
    if ("failed" === tmp5.status) {
      ({ variant: "text-md/normal", color: "text-muted", children: intl2.string(tmp2(3715)["mSJn+K"]) });
      const Text2 = projectId(4832).Text;
      intl2 = projectId(1115).intl;
      tmp9 = <closure_6 style={tmp.state} accessibilityRole="alert">{null}</closure_6>;
      tmp7 = jsx;
    } else if (0 === tmp5.entries.length) {
      ({ variant: "text-md/normal", color: "text-muted", children: intl.string(tmp2(3715).TOmYPT) });
      const Text = projectId(4832).Text;
      intl = projectId(1115).intl;
      tmp9 = <closure_6 style={tmp.state}>{null}</closure_6>;
      tmp7 = jsx;
    } else {
      tmp7 = jsx;
      const entries = tmp5.entries;
      const TableRowGroup = projectId(5999).TableRowGroup;
      tmp9 = <TableRowGroup hasIcons={false}>{entries.map((subject) => {
        let relativeTimestamp;
        let str;
        let closure_0 = subject;
        const obj = {
          label: str.replace(/^Build: /, ""),
          subLabel: relativeTimestamp,
          arrow: true,
          onPress() {
            return closure_3(subject);
          }
        };
        str = subject.subject;
        const TableRow = projectId(c2[15]).TableRow;
        const parsed = Date.parse(subject.authoredAt);
        relativeTimestamp = undefined;
        const tmp = jsx;
        const tmp2 = projectId;
        const tmp3 = c2;
        if (!Number.isNaN(parsed)) {
          const tmp2Result = tmp2(tmp3[7]);
          relativeTimestamp = tmp2Result.getRelativeTimestamp(parsed, false);
        }
        return tmp(TableRow, obj, subject.sha);
      })}</TableRowGroup>;
    }
  }
  const obj7 = { scrollable: true, header: tmp7(BottomSheetTitleHeader, obj8), children: tmp7(projectId(6045).BottomSheetScrollView, obj9) };
  const ActionSheet = projectId(6618).ActionSheet;
  obj8 = { title: intl3.string(tmp2(3715).jAWwzi) };
  BottomSheetTitleHeader = projectId(6570).BottomSheetTitleHeader;
  intl3 = projectId(1115).intl;
  obj9 = { contentContainerStyle: { paddingBottom: bottom }, children: tmp9 };
  return tmp7(ActionSheet, obj7);
};
export const VIBEGRATIONS_VERSION_HISTORY_SHEET_KEY = "VibegrationsVersionHistorySheet";
