// Module ID: 14795
// Function ID: 112622
// Name: ActionSheetSelector
// Dependencies: [57, 31, 27, 33, 4165, 689, 12266, 12264, 4372, 14796, 1935, 4133, 5221, 5220, 5536, 5198, 7606, 4117, 4576, 5200, 4161, 2]
// Exports: default

// Module 14795 (ActionSheetSelector)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function ActionSheetSelector(arg0) {
  let onSelect;
  let require;
  ({ selectedType: require, onSelect } = arg0);
  const items = [onSelect];
  const dependencyMap = React.useCallback((type) => {
    onSelect(4133).hideActionSheet("action-sheet-selector");
    onSelect(type.type);
    type.show();
  }, items);
  let obj = {};
  obj = { title: "Select Action Sheet", subtitle: "" + items.length + " options" };
  obj.header = callback2(require(5220) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { style: { paddingHorizontal: onSelect(689).space.PX_12 } };
  const obj2 = {
    hasIcons: true,
    children: items.map((type) => {
      let closure_0 = type;
      const obj = { icon: outer1_7(outer1_0(7606).WarningIcon, { size: "md" }) };
      ({ label: obj.label, description: obj.subLabel } = type);
      obj.onPress = function onPress() {
        return outer1_2(closure_0);
      };
      let tmp2;
      if (closure_0 === type.type) {
        tmp2 = outer1_7(outer1_0(4117).CheckmarkLargeIcon, { size: "md", color: "text-feedback-positive" });
      }
      obj.trailing = tmp2;
      obj.start = 0 === arg1;
      obj.end = arg1 === outer1_10.length - 1;
      return outer1_7(outer1_0(5198).TableRow, obj, type.type);
    })
  };
  obj.children = callback2(require(5536) /* TableRowGroupTitle */.TableRowGroup, obj2);
  obj.children = callback2(closure_5, obj);
  return callback2(require(5221) /* Background */.BottomSheet, obj);
}
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.wrap = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.contentContainer = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = {
  type: "blocked-domain",
  label: "Blocked Domain",
  description: "Shows a warning for potentially malicious domains",
  show() {
    return importDefault(12266).show("https://example-phishing-site.com/malicious-page");
  }
};
let items = [obj2, , ];
const obj3 = {
  type: "suspicious-download",
  label: "Suspicious Download",
  description: "Warns users about potentially dangerous file downloads",
  show() {
    return importDefault(12264).show("https://suspicious-file.com/dangerous-file.exe");
  }
};
items[1] = obj3;
const obj4 = {
  type: "inappropriate-conversation",
  label: "Inappropriate Conversation",
  description: "Shows safety warning for inappropriate conversations",
  show() {
    return importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(14796, dependencyMap.paths), { warningId: "test-warning-123", warningType: "inappropriate_conversation", senderId: "123456789", channelId: "987654321" }, "INAPPROPRIATE_CONVERSATION_TAKEOVER_MODAL");
  }
};
items[2] = obj4;
let obj1 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsActionSheetsScreen.tsx");

export default function DevToolsActionSheetsScreen() {
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState("blocked-domain"), 2);
  const first = tmp2[0];
  let closure_1 = tmp2[1];
  const found = items.find((type) => type.type === first);
  items = [first];
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer };
  callback = React.useCallback(() => {
    let obj = callback(outer1_2[11]);
    obj = { default: outer1_11 };
    obj = { selectedType: first, onSelect: callback };
    obj.openLazy(Promise.resolve(obj), "action-sheet-selector", obj);
  }, items);
  obj = { spacing: 16 };
  obj = {};
  const items1 = [callback2(first(4161).Text, { variant: "heading-lg/medium", children: "Action Sheets" }), ];
  const obj1 = { description: "Tap an option to launch the action sheet immediately", hasIcons: false, children: callback2(first(5198).TableRow, { label: found.label, subLabel: found.description, arrow: true, onPress: callback }) };
  items1[1] = callback2(first(5536).TableRowGroup, obj1);
  obj.children = items1;
  obj.children = callback3(first(5200).Card, obj);
  obj.children = callback2(first(4576).Stack, obj);
  return callback2(closure_6, obj);
};
