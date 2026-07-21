// Module ID: 12144
// Function ID: 93544
// Name: GiftCodeRedeemError
// Dependencies: []
// Exports: default

// Module 12144 (GiftCodeRedeemError)
importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { markAsSpoilerTitle: 0.129, keyboardAppearance: 1, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.body = { "Null": true, "Null": true, "Null": true, "Null": true, gap: true, display: true };
obj.header = { "Null": "Array", "Null": "summaryId" };
obj.message = { "Null": null, "Null": null };
obj.footer = { paddingHorizontal: 24 };
let closure_8 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemError.tsx");

export default function GiftCodeRedeemError(children) {
  const tmp = callback2();
  let obj = arg1(dependencyMap[5]);
  const theme = obj.useTheme();
  obj = { bottom: true, style: tmp.container };
  obj = { contentContainerStyle: tmp.body, alwaysBounceVertical: false };
  const obj1 = {};
  if (theme.dark) {
    let tmp7Result = tmp7(tmp8[7]);
  } else {
    tmp7Result = tmp7(tmp8[8]);
  }
  obj1.source = tmp7Result;
  const items = [callback(closure_3, obj1), , ];
  const obj2 = { variant: "heading-xl/bold", style: tmp.header };
  const intl = arg1(dependencyMap[10]).intl;
  obj2.children = intl.formatToMarkdownString(arg1(dependencyMap[10]).t.JUvC0s, {});
  items[1] = callback(arg1(dependencyMap[9]).Text, obj2);
  items[2] = callback(arg1(dependencyMap[9]).Text, { variant: "text-lg/medium", style: tmp.message, children: children.message });
  obj.children = items;
  const items1 = [closure_7(closure_5, obj), ];
  const obj4 = { style: tmp.footer };
  const obj5 = {};
  const intl2 = arg1(dependencyMap[10]).intl;
  obj5.text = intl2.string(arg1(dependencyMap[10]).t.cpT0Cq);
  obj5.size = "md";
  obj5.onPress = function onPress() {
    return callback(closure_2[12]).pop();
  };
  obj4.children = callback(arg1(dependencyMap[11]).Button, obj5);
  items1[1] = callback(closure_4, obj4);
  obj.children = items1;
  return closure_7(arg1(dependencyMap[6]).SafeAreaPaddingView, obj);
};
