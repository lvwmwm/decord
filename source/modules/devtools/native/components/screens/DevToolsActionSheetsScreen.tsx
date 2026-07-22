// Module ID: 14577
// Function ID: 109831
// Name: ActionSheetSelector
// Dependencies: []
// Exports: default

// Module 14577 (ActionSheetSelector)
function ActionSheetSelector(arg0) {
  let onSelect;
  ({ selectedType: closure_0, onSelect } = arg0);
  const importDefault = onSelect;
  const items = [onSelect];
  let closure_2 = React.useCallback((type) => {
    onSelect(closure_2[11]).hideActionSheet("action-sheet-selector");
    onSelect(type.type);
    type.show();
  }, items);
  let obj = {};
  obj = { title: "Select Action Sheet", subtitle: "" + items.length + " options" };
  obj.header = callback2(arg1(closure_2[13]).BottomSheetTitleHeader, obj);
  obj = { style: { paddingHorizontal: importDefault(closure_2[5]).space.PX_12 } };
  const obj2 = {
    hasIcons: true,
    children: items.map((type) => {
      const obj = { icon: callback(type(closure_2[16]).WarningIcon, { size: "md" }) };
      ({ label: obj.label, description: obj.subLabel } = type);
      obj.onPress = function onPress() {
        return callback(arg0);
      };
      let tmp2;
      if (type === type.type) {
        tmp2 = callback(type(closure_2[17]).CheckmarkLargeIcon, { "Bool(false)": "<string:300807801>", "Bool(false)": "<string:36311617>" });
      }
      obj.trailing = tmp2;
      obj.start = 0 === arg1;
      obj.end = arg1 === length.length - 1;
      return callback(type(closure_2[15]).TableRow, obj, type.type);
    })
  };
  obj.children = callback2(arg1(closure_2[14]).TableRowGroup, obj2);
  obj.children = callback2(closure_5, obj);
  return callback2(arg1(closure_2[12]).BottomSheet, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW, flex: 1, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_12 };
obj.wrap = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.contentContainer = { paddingVertical: importDefault(dependencyMap[5]).space.PX_16 };
let closure_9 = obj.createStyles(obj);
const obj2 = {
  isoDate: null,
  heroRanking: null,
  GameDepthTier9LargeBadge: null,
  show() {
    return importDefault(dependencyMap[6]).show("https://example-phishing-site.com/malicious-page");
  }
};
const items = [obj2, , ];
const obj3 = {
  isoDate: "/assets/design/components/Icon/native/redesign/generated/images",
  heroRanking: 24,
  GameDepthTier9LargeBadge: 24,
  show() {
    return importDefault(dependencyMap[7]).show("https://suspicious-file.com/dangerous-file.exe");
  }
};
items[1] = obj3;
items[2] = {
  show() {
    return importDefault(dependencyMap[8]).pushLazy(arg1(dependencyMap[10])(dependencyMap[9], dependencyMap.paths), { "Null": true, "Null": true, "Null": true, "Null": true }, "INAPPROPRIATE_CONVERSATION_TAKEOVER_MODAL");
  }
};
const obj1 = { paddingVertical: importDefault(dependencyMap[5]).space.PX_16 };
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/devtools/native/components/screens/DevToolsActionSheetsScreen.tsx");

export default function DevToolsActionSheetsScreen() {
  const tmp = callback4();
  const tmp2 = callback(React.useState("blocked-domain"), 2);
  const first = tmp2[0];
  const arg1 = first;
  let closure_1 = tmp2[1];
  const found = items.find((type) => type.type === first);
  const items = [first];
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer };
  const callback = React.useCallback(() => {
    let obj = callback(closure_2[11]);
    obj = { default: closure_11 };
    obj = { selectedType: first, onSelect: callback };
    obj.openLazy(Promise.resolve(obj), "action-sheet-selector", obj);
  }, items);
  obj = { spacing: 16 };
  obj = {};
  const items1 = [callback2(arg1(dependencyMap[20]).Text, { <string:2807142664>: null, <string:1446667417>: null }), ];
  const obj1 = { accessibilityRole: false, mn: false, children: callback2(arg1(dependencyMap[15]).TableRow, { label: found.label, subLabel: found.description, arrow: true, onPress: callback }) };
  items1[1] = callback2(arg1(dependencyMap[14]).TableRowGroup, obj1);
  obj.children = items1;
  obj.children = callback3(arg1(dependencyMap[19]).Card, obj);
  obj.children = callback2(arg1(dependencyMap[18]).Stack, obj);
  return callback2(closure_6, obj);
};
