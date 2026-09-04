// Module ID: 15645
// Function ID: 15646
// Name: ActionSheetSelector
// Dependencies: [32, 19, 17, 21, 4481, 709, 12880, 12878, 4731, 15646, 2008, 4448, 7090, 7089, 5642, 5560, 8518, 4432, 4934, 5562, 4477, 2]
// Exports: default

// Module 15645 (ActionSheetSelector)
import ThemesDefault from "Themes" /* 709 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 5642 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 7089 */;
import Background from "Background" /* 7090 */;
import _modDef12878 from "module_12878" /* 12878 */;
import _modDef12880 from "module_12880" /* 12880 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

require = arg1;
function ActionSheetSelector(arg0) {
  ({ selectedType: require, onSelect } = arg0);
  dependencyMap = undefined;
  items = [onSelect];
  dependencyMap = React.useCallback((type) => {
    onSelect(4448).hideActionSheet("action-sheet-selector");
    onSelect(type.type);
    type.show();
  }, items);
  let obj = { header: null, children: null };
  obj = { title: "Select Action Sheet", subtitle: "" + items.length + " options" };
  obj[0] = callback2(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
  obj = { style: { paddingHorizontal: onSelect(709).space.PX_12 }, children: null };
  obj1 = { paddingHorizontal: onSelect(709).space.PX_12 };
  obj[1] = callback2(TableRowGroupTitle.TableRowGroup, {
    hasIcons: true,
    children: items.map((type) => {
      closure_0 = type;
      const obj = {
        icon: closure_1_7(closure_1_0(8518).WarningIcon, { size: "md" }),
        label: null,
        subLabel: null,
        onPress() {
          return closure_1_2(closure_0);
        },
        trailing: null,
        start: null,
        end: null
      };
      ({ label: obj[1], description: obj[2] } = type);
      let tmpResult;
      if (closure_0 === type.type) {
        tmpResult = tmp(closure_1_0(4432).CheckmarkLargeIcon, { size: "md", color: "text-feedback-positive" });
      }
      obj[4] = tmpResult;
      obj[5] = 0 === arg1;
      obj[6] = arg1 === closure_1_10.length - 1;
      return closure_1_7(closure_1_0(5560).TableRow, obj, type.type);
    })
  });
  obj[1] = callback2(closure_5, obj);
  return callback2(Background.BottomSheet, obj);
}
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { wrap: null, contentContainer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1, paddingHorizontal: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingVertical: ThemesDefault.space.PX_16 };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let items = [
  {
    type: "blocked-domain",
    label: "Blocked Domain",
    description: "Shows a warning for potentially malicious domains",
    show() {
      return _modDef12880.show("https://example-phishing-site.com/malicious-page");
    }
  },
  {
    type: "suspicious-download",
    label: "Suspicious Download",
    description: "Warns users about potentially dangerous file downloads",
    show() {
      return _modDef12878.show("https://suspicious-file.com/dangerous-file.exe");
    }
  },
  {
    type: "inappropriate-conversation",
    label: "Inappropriate Conversation",
    description: "Shows safety warning for inappropriate conversations",
    show() {
      return _modDef4731.pushLazy(asyncRequireImpl(15646, dependencyMap.paths), { warningId: "test-warning-123", warningType: "inappropriate_conversation", senderId: "123456789", channelId: "987654321" }, "INAPPROPRIATE_CONVERSATION_TAKEOVER_MODAL");
    }
  }
];
let obj1 = { paddingVertical: ThemesDefault.space.PX_16 };
const obj2 = {
  type: "blocked-domain",
  label: "Blocked Domain",
  description: "Shows a warning for potentially malicious domains",
  show() {
    return _modDef12880.show("https://example-phishing-site.com/malicious-page");
  }
};
const result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsActionSheetsScreen.tsx");

export default function DevToolsActionSheetsScreen() {
  const tmp = callback4();
  const tmp2 = callback(React.useState("blocked-domain"), 2);
  const first = tmp2[0];
  closure_1 = tmp2[1];
  const found = items.find((type) => type.type === first);
  items = [first];
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: null };
  callback = React.useCallback(() => {
    let obj = callback(closure_1_2[11]);
    obj = { default: closure_1_11 };
    obj = { selectedType: first, onSelect: callback };
    obj.openLazy(Promise.resolve(obj), "action-sheet-selector", obj);
  }, items);
  obj = { spacing: 16, children: null };
  obj = { children: null };
  const items1 = [callback2(first(4477).Text, { variant: "heading-lg/medium", children: "Action Sheets" }), callback2(first(5642).TableRowGroup, { description: "Tap an option to launch the action sheet immediately", hasIcons: false, children: callback2(first(5560).TableRow, obj2) })];
  obj[0] = items1;
  obj[1] = callback3(first(5562).Card, obj);
  obj[2] = callback2(first(4934).Stack, obj);
  return callback2(closure_6, obj);
};
