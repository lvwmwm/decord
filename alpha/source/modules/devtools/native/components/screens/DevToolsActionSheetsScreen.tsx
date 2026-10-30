// Module ID: 17676
// Function ID: 17677
// Name: DevToolsActionSheetsScreen
// Dependencies: [32, 19, 17, 21, 5009, 575, 14717, 11580, 6738, 17677, 1995, 5253, 5267, 7315, 7054, 6969, 8018, 6987, 6022, 6971, 5619, 2]
// Exports: default

// Module 17676 (DevToolsActionSheetsScreen)
import nativeDefault from "native" /* 575 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5267 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import TableRowGroup2 from "TableRowGroup" /* 7054 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7315 */;
import SuspiciousDownloadModalActionCreatorsDefault from "SuspiciousDownloadModalActionCreators" /* 11580 */;
import BlockedDomainModalActionCreatorsDefault from "BlockedDomainModalActionCreators" /* 14717 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function ActionSheetSelector(arg0) {
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
  obj3 = { style: { paddingHorizontal: onSelect(575).space.PX_12 }, children: closure_7(TableRowGroup, obj5) };
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
  ({ paddingHorizontal: onSelect(575).space.PX_12 });
  TableRowGroup = TableRowGroup2.TableRowGroup;
  return closure_7(BottomSheet, obj);
}
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
      return obj.pushLazy(asyncRequire(17677, dependencyMap.paths), { warningId: "test-warning-123", warningType: "inappropriate_conversation", senderId: "123456789", channelId: "987654321" }, "INAPPROPRIATE_CONVERSATION_TAKEOVER_MODAL");
    }
  }
];
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsActionSheetsScreen.tsx");

export default function DevToolsActionSheetsScreen() {
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
    const obj2 = { default: ActionSheetSelector };
    const obj3 = { selectedType, onSelect };
    obj.openLazy(Promise.resolve(obj2), "action-sheet-selector", obj3);
  }, items);
  obj2 = { spacing: 16, children: closure_8(Card, obj3) };
  Stack = selectedType(6022).Stack;
  obj3 = { children: items1 };
  Card = selectedType(6971).Card;
  items1 = [closure_7(selectedType(5619).Text, { variant: "heading-lg/medium", children: "Action Sheets" }), ];
  const obj4 = { description: "Tap an option to launch the action sheet immediately", hasIcons: false, children: closure_7(selectedType(6969).TableRow, obj5) };
  const TableRowGroup = selectedType(7054).TableRowGroup;
  obj5 = { label: found.label, subLabel: found.description, arrow: true, onPress: callback };
  items1[1] = closure_7(TableRowGroup, obj4);
  return closure_7(closure_6, obj);
};
