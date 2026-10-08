// Module ID: 15895
// Function ID: 15896
// Name: DevToolsActionSheetsScreen
// Dependencies: [32, 19, 17, 21, 5090, 587, 12912, 11334, 5940, 15896, 1999, 558, 576, 5054, 6828, 6184, 5003, 4775, 6829, 6267, 5086, 5373, 6186, 2]

// Module 15895 (DevToolsActionSheetsScreen)
import nativeDefault from "native" /* 587 */;
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import TableRowGroup2 from "TableRowGroup" /* 6267 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6828 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6829 */;
import SuspiciousDownloadModalActionCreatorsDefault from "SuspiciousDownloadModalActionCreators" /* 11334 */;
import BlockedDomainModalActionCreatorsDefault from "BlockedDomainModalActionCreators" /* 12912 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrap: obj2, contentContainer: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1, paddingHorizontal: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
let obj4 = {
  type: "blocked-domain",
  label: "Blocked Domain",
  description: "Shows a warning for potentially malicious domains",
  show() {
    const obj = BlockedDomainModalActionCreatorsDefault;
    return obj.show("https://example-phishing-site.com/malicious-page");
  }
};
let items = [
  obj4,
  {
    type: "suspicious-download",
    label: "Suspicious Download",
    description: "Warns users about potentially dangerous file downloads",
    show() {
      const obj = SuspiciousDownloadModalActionCreatorsDefault;
      return obj.show("https://suspicious-file.com/dangerous-file.exe");
    }
  },
  {
    type: "inappropriate-conversation",
    label: "Inappropriate Conversation",
    description: "Shows safety warning for inappropriate conversations",
    show() {
      const obj = ModalActionCreatorsDefault;
      return obj.pushLazy(asyncRequire(15896, dependencyMap.paths), { warningId: "test-warning-123", warningType: "inappropriate_conversation", senderId: "123456789", channelId: "987654321" }, "INAPPROPRIATE_CONVERSATION_TAKEOVER_MODAL");
    }
  }
];
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActionSheetSelector(selectedType) {
  let closure_2;
  let length;
  let obj5;
  let obj6;
  let tmp4;
  let tmp5;
  let tmp9;
  const tmp = selectedType;
  let tmp2 = dependencyMap;
  let obj = selectedType(576);
  const cResult = obj.c(9);
  selectedType = selectedType.selectedType;
  const onSelect = selectedType.onSelect;
  if (cResult[0] !== onSelect) {
    const fn = function o(type) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet("action-sheet-selector");
      onSelect(type.type);
      type.show();
    };
    cResult[0] = onSelect;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  dependencyMap = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const _HermesInternal = HermesInternal;
    const obj2 = { title: "Select Action Sheet", subtitle: "" + items.length + " options" };
    const BottomSheetTitleHeader = tmp(6828).BottomSheetTitleHeader;
    const tmp8 = closure_7(BottomSheetTitleHeader, obj2);
    cResult[2] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { paddingHorizontal: onSelect(587).space.PX_12 };
    cResult[3] = obj3;
    tmp9 = obj3;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4) {
    let tmp11;
    let tmp13;
    if (cResult[5] === selectedType) {
      tmp11 = cResult[6];
    }
    if (cResult[7] !== tmp11) {
      const obj4 = { header: tmp5, children: closure_7(closure_5, obj5) };
      obj5 = { style: tmp9, children: closure_7(tmp(6267).TableRowGroup, obj6) };
      BottomSheet = tmp(6829).BottomSheet;
      obj6 = { hasIcons: true, children: tmp11 };
      const tmp16 = closure_7(BottomSheet, obj4);
      cResult[7] = tmp11;
      cResult[8] = tmp16;
      tmp13 = tmp16;
    } else {
      tmp13 = cResult[8];
    }
    return tmp13;
  }
  const mapped = items.map((type, index) => {
    let tmpResult;
    let closure_0 = type;
    const obj = {
      icon: closure_1_7(selectedType(closure_2[16]).WarningIcon, { size: "md" }),
      label: null,
      subLabel: null,
      onPress() {
        return closure_2(type);
      },
      trailing: tmpResult,
      start: 0 === index,
      end: index === length.length - 1
    };
    const TableRow = selectedType(closure_2[15]).TableRow;
    ({ label: obj.label, description: obj.subLabel } = type);
    tmpResult = undefined;
    const tmp2 = selectedType;
    const tmp3 = closure_2;
    if (closure_0 === type.type) {
      tmpResult = tmp(tmp2(tmp3[17]).CheckmarkLargeIcon, { size: "md", color: "text-feedback-positive" });
    }
    return closure_1_7(TableRow, obj, type.type);
  });
  cResult[4] = tmp4;
  cResult[5] = selectedType;
  cResult[6] = mapped;
  tmp11 = mapped;
}) : (function ActionSheetSelector(arg0) {
  let BottomSheetTitleHeader;
  let TableRowGroup;
  let closure_2;
  let length;
  let obj2;
  let obj3;
  let obj5;
  let onSelect;
  ({ selectedType: require, onSelect } = arg0);
  items = [onSelect];
  dependencyMap = react.useCallback((type) => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet("action-sheet-selector");
    onSelect(type.type);
    type.show();
  }, items);
  let obj = { header: closure_7(BottomSheetTitleHeader, obj2), children: closure_7(closure_5, obj3) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj2 = { title: "Select Action Sheet", subtitle: "" + items.length + " options" };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  obj3 = { style: { paddingHorizontal: onSelect(587).space.PX_12 }, children: closure_7(TableRowGroup, obj5) };
  obj5 = {
    hasIcons: true,
    children: items.map((type, index) => {
      let tmpResult;
      require = type;
      const obj = {
        icon: closure_1_7(require("WarningIcon").WarningIcon, { size: "md" }),
        label: null,
        subLabel: null,
        onPress() {
          return closure_2(type);
        },
        trailing: tmpResult,
        start: 0 === index,
        end: index === items.length - 1
      };
      const TableRow = require("TableRow").TableRow;
      ({ label: obj.label, description: obj.subLabel } = type);
      tmpResult = undefined;
      const tmp2 = require;
      const tmp3 = closure_2;
      if (require === type.type) {
        tmpResult = tmp(tmp2(tmp3[17]).CheckmarkLargeIcon, { size: "md", color: "text-feedback-positive" });
      }
      return closure_1_7(TableRow, obj, type.type);
    })
  };
  ({ paddingHorizontal: onSelect(587).space.PX_12 });
  TableRowGroup = TableRowGroup2.TableRowGroup;
  return closure_7(BottomSheet, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function DevToolsActionSheetsScreen() {
  let Card;
  let obj11;
  let obj4;
  let onSelect;
  let selectedType;
  let tmp10;
  let tmp11;
  let tmp7;
  let obj = selectedType(576);
  const cResult = obj.c(13);
  const tmp4 = closure_9();
  [selectedType, onSelect] = react.useState("blocked-domain");
  if (cResult[0] !== selectedType) {
    const found = items.find((type) => type.type === first);
    cResult[0] = selectedType;
    cResult[1] = found;
    tmp7 = found;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== selectedType) {
    const fn = function f() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { default: closure_11 };
      const obj3 = { selectedType, onSelect };
      obj.openLazy(Promise.resolve(obj2), "action-sheet-selector", obj3);
    };
    cResult[2] = selectedType;
    cResult[3] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = closure_7(selectedType(5086).Text, { variant: "heading-lg/medium", children: "Action Sheets" });
    cResult[4] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === tmp10) {
    if (cResult[6] === tmp7.description) {
      let tmp14;
      if (cResult[7] === tmp7.label) {
        tmp14 = cResult[8];
      }
      if (cResult[9] === tmp4.contentContainer) {
        if (cResult[10] === tmp4.wrap) {
          let tmp16;
          if (cResult[11] === tmp14) {
            tmp16 = cResult[12];
          }
          return tmp16;
        }
      }
      let obj2 = { style: null, contentContainerStyle: null, children: tmp14 };
      ({ wrap: obj6.style, contentContainer: obj6.contentContainerStyle } = tmp4);
      const tmp19 = closure_7(closure_6, obj2);
      cResult[9] = tmp4.contentContainer;
      cResult[10] = tmp4.wrap;
      cResult[11] = tmp14;
      cResult[12] = tmp19;
      tmp16 = tmp19;
    }
  }
  let obj3 = { spacing: 16, children: closure_8(Card, obj4) };
  const Stack = tmp(5373).Stack;
  obj4 = { children: items };
  items = [tmp11, ];
  Card = tmp(6186).Card;
  const obj5 = { description: "Tap an option to launch the action sheet immediately", hasIcons: false, children: closure_7(selectedType(6184).TableRow, obj11) };
  const TableRowGroup = tmp(6267).TableRowGroup;
  obj11 = { label: tmp7.label, subLabel: tmp7.description, arrow: true, onPress: tmp10 };
  items[1] = closure_7(TableRowGroup, obj5);
  const tmp15 = closure_7(Stack, obj3);
  cResult[5] = tmp10;
  cResult[6] = tmp7.description;
  cResult[7] = tmp7.label;
  cResult[8] = tmp15;
  tmp14 = tmp15;
}) : (function DevToolsActionSheetsScreen() {
  let Card;
  let Stack;
  let items1;
  let obj2;
  let obj3;
  let obj5;
  let onSelect;
  let selectedType;
  const tmp = closure_9();
  [selectedType, onSelect] = react.useState("blocked-domain");
  const found = items.find((type) => type.type === first);
  items = [selectedType];
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: closure_7(Stack, obj2) };
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { default: closure_11 };
    const obj3 = { selectedType, onSelect };
    obj.openLazy(Promise.resolve(obj2), "action-sheet-selector", obj3);
  }, items);
  obj2 = { spacing: 16, children: closure_8(Card, obj3) };
  Stack = selectedType(5373).Stack;
  obj3 = { children: items1 };
  Card = selectedType(6186).Card;
  items1 = [closure_7(selectedType(5086).Text, { variant: "heading-lg/medium", children: "Action Sheets" }), ];
  const obj4 = { description: "Tap an option to launch the action sheet immediately", hasIcons: false, children: closure_7(selectedType(6184).TableRow, obj5) };
  const TableRowGroup = selectedType(6267).TableRowGroup;
  obj5 = { label: found.label, subLabel: found.description, arrow: true, onPress: callback };
  items1[1] = closure_7(TableRowGroup, obj4);
  return closure_7(closure_6, obj);
});
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsActionSheetsScreen.tsx");

export default tmp5;
