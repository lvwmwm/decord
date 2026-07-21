// Module ID: 10862
// Function ID: 84523
// Name: ChatGDMUpsellActionSheet
// Dependencies: []
// Exports: default

// Module 10862 (ChatGDMUpsellActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { marginBottom: importDefault(dependencyMap[4]).space.PX_4, textAlign: "center" };
obj.title = obj;
const tmp2 = arg1(dependencyMap[2]);
obj.footer = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW, padding: importDefault(dependencyMap[4]).space.PX_16 };
obj.body = { textAlign: "center" };
const obj1 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW, padding: importDefault(dependencyMap[4]).space.PX_16 };
obj.noticeContainer = { borderRadius: importDefault(dependencyMap[4]).radii.sm, marginVertical: importDefault(dependencyMap[4]).space.PX_16, padding: importDefault(dependencyMap[4]).space.PX_16 };
obj.innerContainer = { alignItems: "center", flexDirection: "center", justifyContent: "100%" };
obj.secondInnerContainer = { "Null": 7, "Null": 370 };
obj.text = { flex: 1 };
obj.titleImage = {};
const obj2 = { borderRadius: importDefault(dependencyMap[4]).radii.sm, marginVertical: importDefault(dependencyMap[4]).space.PX_16, padding: importDefault(dependencyMap[4]).space.PX_16 };
obj.item = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_STRONG };
const obj3 = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_STRONG };
obj.button = { paddingTop: importDefault(dependencyMap[4]).space.PX_16 };
let closure_7 = obj.createStyles(obj);
const obj4 = { paddingTop: importDefault(dependencyMap[4]).space.PX_16 };
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/group_dm/native/ChatGDMUpsellActionSheet.tsx");

export default function ChatGDMUpsellActionSheet(onClick) {
  onClick = onClick.onClick;
  const arg1 = onClick;
  const tmp = callback3();
  const items = [onClick];
  const callback = React.useCallback(() => {
    const result = onClick(closure_2[6]).UNSAFE_markDismissibleContentAsDismissed(onClick(closure_2[7]).DismissibleContent.GDM_INVITE_REMINDER);
    const obj = onClick(closure_2[6]);
    callback(closure_2[8]).hideActionSheet();
    onClick();
  }, items);
  let obj = { "Bool(false)": "Small", "Bool(false)": "sm", "Bool(false)": "Placeholder" };
  obj = { style: tmp.titleImage };
  obj = { source: importDefault(dependencyMap[11]), resizeMode: "contain" };
  obj.children = callback(importDefault(dependencyMap[10]), obj);
  obj.header = callback(View, obj);
  const obj1 = { style: items1 };
  const items1 = [tmp.footer, ];
  const tmp3 = importDefault(dependencyMap[10]);
  items1[1] = { padding: 16, paddingBottom: importDefault(dependencyMap[5])().bottom + 16 };
  const obj3 = {};
  const intl = arg1(dependencyMap[13]).intl;
  obj3.text = intl.string(arg1(dependencyMap[13]).t.3PatSz);
  obj3.onPress = callback;
  const items2 = [callback(arg1(dependencyMap[12]).Button, obj3), ];
  const obj4 = { style: tmp.button };
  const obj5 = {};
  const intl2 = arg1(dependencyMap[13]).intl;
  obj5.text = intl2.string(arg1(dependencyMap[13]).t.ETE/oC);
  obj5.onPress = function onPress() {
    callback(closure_2[8]).hideActionSheet();
  };
  obj5.variant = "tertiary";
  obj4.children = callback(arg1(dependencyMap[12]).Button, obj5);
  items2[1] = callback(View, obj4);
  obj1.children = items2;
  obj.footer = callback2(View, obj1);
  const obj6 = {};
  const obj7 = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, style: tmp.title };
  const intl3 = arg1(dependencyMap[13]).intl;
  obj7.children = intl3.string(arg1(dependencyMap[13]).t.bkqux/);
  const items3 = [callback(arg1(dependencyMap[15]).Text, obj7), , ];
  const obj8 = { delete: 14789019781002023000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, dispatch: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000254639494975, raw: -120145600412238510000000000000000000000000000000000000000000000000000000000, style: tmp.body };
  const intl4 = arg1(dependencyMap[13]).intl;
  obj8.children = intl4.string(arg1(dependencyMap[13]).t.N6TdqN);
  items3[1] = callback(arg1(dependencyMap[15]).Text, obj8);
  const obj9 = { style: tmp.noticeContainer };
  const obj10 = { style: tmp.innerContainer };
  const obj2 = { padding: 16, paddingBottom: importDefault(dependencyMap[5])().bottom + 16 };
  const items4 = [callback(View, { style: tmp.item, children: callback(arg1(dependencyMap[16]).TimerIcon, { size: "sm" }) }), ];
  const obj12 = { style: tmp.text };
  const intl5 = arg1(dependencyMap[13]).intl;
  obj12.children = intl5.string(arg1(dependencyMap[13]).t.Fq3DJb);
  items4[1] = callback(arg1(dependencyMap[15]).Text, obj12);
  obj10.children = items4;
  const items5 = [callback2(View, obj10), ];
  const obj13 = { style: tmp.secondInnerContainer };
  const obj11 = { style: tmp.item, children: callback(arg1(dependencyMap[16]).TimerIcon, { size: "sm" }) };
  const items6 = [callback(View, { style: tmp.item, children: callback(arg1(dependencyMap[17]).LinkIcon, { size: "sm" }) }), ];
  const obj15 = { style: tmp.text };
  const intl6 = arg1(dependencyMap[13]).intl;
  obj15.children = intl6.string(arg1(dependencyMap[13]).t.XKbf2G);
  items6[1] = callback(arg1(dependencyMap[15]).Text, obj15);
  obj13.children = items6;
  items5[1] = callback2(View, obj13);
  obj9.children = items5;
  items3[2] = callback2(View, obj9);
  obj6.children = items3;
  obj.children = callback2(arg1(dependencyMap[14]).BottomSheetScrollView, obj6);
  return callback(arg1(dependencyMap[9]).BottomSheet, obj);
};
