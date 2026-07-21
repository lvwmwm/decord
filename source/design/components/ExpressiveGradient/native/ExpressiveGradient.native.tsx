// Module ID: 8566
// Function ID: 68065
// Name: ExpressiveGradient
// Dependencies: []
// Exports: ExpressiveGradient

// Module 8566 (ExpressiveGradient)
importAll(dependencyMap[0]);
({ View: closure_3, StyleSheet: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = {};
obj = { start: importDefault(dependencyMap[3]).colors.EXPRESSIVE_GRADIENT_PURPLE_START, end: importDefault(dependencyMap[3]).colors.EXPRESSIVE_GRADIENT_PURPLE_END };
obj.purple = obj;
obj = { start: importDefault(dependencyMap[3]).colors.EXPRESSIVE_GRADIENT_BLUE_START, end: importDefault(dependencyMap[3]).colors.EXPRESSIVE_GRADIENT_BLUE_END };
obj.blue = obj;
const tmp4 = arg1(dependencyMap[2]);
obj.green = { start: importDefault(dependencyMap[3]).colors.EXPRESSIVE_GRADIENT_GREEN_START, end: importDefault(dependencyMap[3]).colors.EXPRESSIVE_GRADIENT_GREEN_END };
const obj1 = { start: importDefault(dependencyMap[3]).colors.EXPRESSIVE_GRADIENT_GREEN_START, end: importDefault(dependencyMap[3]).colors.EXPRESSIVE_GRADIENT_GREEN_END };
obj.pink = { start: importDefault(dependencyMap[3]).colors.EXPRESSIVE_GRADIENT_PINK_START, end: importDefault(dependencyMap[3]).colors.EXPRESSIVE_GRADIENT_PINK_END };
const obj2 = { start: importDefault(dependencyMap[3]).colors.EXPRESSIVE_GRADIENT_PINK_START, end: importDefault(dependencyMap[3]).colors.EXPRESSIVE_GRADIENT_PINK_END };
obj.nitro-pink = { start: importDefault(dependencyMap[3]).colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, end: importDefault(dependencyMap[3]).colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END };
const obj3 = { start: importDefault(dependencyMap[3]).colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, end: importDefault(dependencyMap[3]).colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END };
obj.nitro-green = { start: importDefault(dependencyMap[3]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START, end: importDefault(dependencyMap[3]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END };
let closure_8 = { max: false, guildId: false };
let closure_9 = { max: 3211264, guildId: 2042617856 };
let closure_10 = { max: "message", guildId: "PRIMARY_530" };
let closure_11 = { max: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011125378664662503, guildId: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002834178582291256 };
const obj4 = { start: importDefault(dependencyMap[3]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_START, end: importDefault(dependencyMap[3]).colors.EXPRESSIVE_GRADIENT_NITRO_GREEN_END };
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/ExpressiveGradient/native/ExpressiveGradient.native.tsx");

export const ExpressiveGradient = function ExpressiveGradient(color) {
  let backgroundColor;
  let children;
  let style;
  let str = color.color;
  if (str === undefined) {
    str = "purple";
  }
  let num = color.offsetBottom;
  if (num === undefined) {
    num = 0;
  }
  ({ backgroundColor, children, style } = color);
  if ("object" !== typeof str) {
    let str2 = "purple";
    if (null != str) {
      str2 = str;
    }
    let tmp2 = obj[str2];
    const tmp3 = obj;
  } else {
    tmp2 = str;
  }
  let obj = arg1(dependencyMap[4]);
  const token = obj.useToken(tmp2.start);
  let obj1 = arg1(dependencyMap[4]);
  const token1 = obj1.useToken(tmp2.end);
  let obj2 = arg1(dependencyMap[4]);
  const token2 = obj2.useToken(backgroundColor);
  let obj3 = importDefault(dependencyMap[5])(token2);
  obj = { style: items };
  const items = [closure_4.absoluteFill, style];
  obj = {};
  const items1 = [closure_4.absoluteFill, ];
  let tmp11;
  const alphaResult = obj3.alpha(0);
  if (num > 0) {
    obj1 = { bottom: `${100 * num}%` };
    tmp11 = obj1;
  }
  items1[1] = tmp11;
  obj.style = items1;
  obj2 = { style: closure_4.absoluteFillObject, colors: items2, start: closure_8, end: closure_9, pointerEvents: "none" };
  const items2 = [token, token1];
  const items3 = [callback(importDefault(dependencyMap[6]), obj2), ];
  obj3 = { style: closure_4.absoluteFillObject, colors: items4, start: closure_10, end: closure_11, pointerEvents: "none" };
  const items4 = [obj3.alpha(0).css(), token2];
  items3[1] = callback(importDefault(dependencyMap[6]), obj3);
  obj.children = items3;
  const items5 = [closure_6(closure_3, obj), children];
  obj.children = items5;
  return closure_6(closure_3, obj);
};
