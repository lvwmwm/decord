// Module ID: 12914
// Function ID: 98489
// Name: RoleDot
// Dependencies: [251461632, 251527168, 251658240, 255852544, 297402368, 297664512, 270467072, 270663680, 270598144, 707198976, 270401536]
// Exports: RoleDot

// Module 12914 (RoleDot)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { flexShrink: 0 }, background: { position: "relative" } };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_NORMAL, borderRadius: importDefault(dependencyMap[4]).radii.xs };
obj.backgroundColor = obj;
const tmp3 = arg1(dependencyMap[2]);
obj.borderBase = { backgroundColor: importDefault(dependencyMap[4]).colors.TEXT_DEFAULT, borderRadius: importDefault(dependencyMap[4]).radii.md };
const obj1 = { backgroundColor: importDefault(dependencyMap[4]).colors.TEXT_DEFAULT, borderRadius: importDefault(dependencyMap[4]).radii.md };
obj.borderColor = { borderRadius: importDefault(dependencyMap[4]).radii.md, opacity: 0.4 };
obj.dot = {};
let closure_6 = obj.createStyles(obj);
const obj2 = { borderRadius: importDefault(dependencyMap[4]).radii.md, opacity: 0.4 };
const result = arg1(dependencyMap[10]).fileFinishedImporting("design/void/RoleDot/native/RoleDot.tsx");

export const RoleDot = function RoleDot(background) {
  let color;
  let colors;
  let containerStyles;
  let guildId;
  let size;
  ({ color, colors, size } = background);
  if (size === undefined) {
    size = "normal";
  }
  let flag = background.background;
  if (flag === undefined) {
    flag = true;
  }
  ({ containerStyles, guildId } = background);
  const tmp = callback2();
  let obj = arg1(dependencyMap[6]);
  const fontScale = obj.useFontScale();
  if (null == color) {
    if (null == colors) {
      return null;
    }
  }
  let num = 16;
  if ("normal" === size) {
    num = 20;
  }
  const result = num * fontScale;
  const sum = result / 2 + 2;
  const diff = sum - 2;
  obj = {};
  obj = { paddingRight: 2 * fontScale };
  let obj3 = arg1(dependencyMap[5]);
  if (obj3.isAndroid()) {
    let result1 = 3 * fontScale;
  } else {
    result1 = 2 * fontScale;
  }
  obj.paddingTop = result1;
  obj.height = result;
  obj.container = obj;
  obj.background = { height: result, width: result, padding: (result - sum) / 2 };
  obj.border = { height: sum, width: sum };
  const result2 = diff / 2;
  obj.dot = { height: diff, width: diff, top: result2, left: result2 };
  const obj1 = { style: items };
  const items = [tmp.container, obj.container, containerStyles];
  const obj2 = {};
  const items1 = [tmp.background, , ];
  let backgroundColor = null;
  if (flag) {
    backgroundColor = tmp.backgroundColor;
  }
  items1[1] = backgroundColor;
  items1[2] = obj.background;
  obj2.style = items1;
  obj3 = { style: items2 };
  const items2 = [tmp.borderBase];
  const obj4 = {};
  const items3 = [tmp.borderColor, obj.border, ];
  const obj5 = {};
  let tmp15;
  if (null != color) {
    tmp15 = color;
  }
  obj5.backgroundColor = tmp15;
  items3[2] = obj5;
  obj4.style = items3;
  obj3.children = callback(View, obj4);
  const items4 = [callback(View, obj3), ];
  if (tmp3) {
    if (null != colors) {
      if (null != colors.secondaryColor) {
        const obj6 = {};
        const items5 = [, , ];
        ({ primaryColor: arr7[0], secondaryColor: arr7[1], tertiaryColor: arr7[2] } = colors);
        obj6.colors = items5.filter(arg1(dependencyMap[9]).isNotNullish);
        obj6.start = {};
        obj6.end = {};
        const items6 = [tmp.dot, obj.dot];
        obj6.style = items6;
        let tmp16Result = callback(importDefault(dependencyMap[8]), obj6);
        const tmp23 = importDefault(dependencyMap[8]);
      }
      items4[1] = tmp16Result;
      obj2.children = items4;
      obj1.children = closure_5(tmp10, obj2);
      return callback(tmp10, obj1);
    }
  }
  const obj7 = {};
  const items7 = [tmp.dot, obj.dot, ];
  const obj8 = {};
  let tmp18;
  if (null != color) {
    tmp18 = color;
  }
  obj8.backgroundColor = tmp18;
  items7[2] = obj8;
  obj7.style = items7;
  tmp16Result = callback(View, obj7);
};
