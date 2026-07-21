// Module ID: 13654
// Function ID: 103428
// Name: FamilyCenterInlineWarningNotice
// Dependencies: []
// Exports: default

// Module 13654 (FamilyCenterInlineWarningNotice)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { gap: importDefault(dependencyMap[4]).space.PX_8, padding: importDefault(dependencyMap[4]).space.PX_12, borderColor: importDefault(dependencyMap[4]).colors.BORDER_FEEDBACK_WARNING, borderRadius: importDefault(dependencyMap[4]).radii.lg, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_FEEDBACK_WARNING };
obj.container = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.text = { flex: 1, paddingRight: importDefault(dependencyMap[4]).space.PX_8 };
let closure_6 = obj.createStyles(obj);
const obj1 = { flex: 1, paddingRight: importDefault(dependencyMap[4]).space.PX_8 };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterInlineWarningNotice.tsx");

export default function FamilyCenterInlineWarningNotice(arg0) {
  let style;
  let text;
  ({ text, style } = arg0);
  const tmp = callback3();
  let obj = { style: items };
  const items = [tmp.container, style];
  obj = { size: "sm", color: importDefault(dependencyMap[4]).colors.ICON_FEEDBACK_WARNING };
  const items1 = [callback(arg1(dependencyMap[5]).WarningIcon, obj), ];
  obj = { style: tmp.text, children: text };
  items1[1] = callback(arg1(dependencyMap[6]).TextWithIOSLinkWorkaround, obj);
  obj.children = items1;
  return callback2(View, obj);
};
