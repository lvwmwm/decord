// Module ID: 12883
// Function ID: 98373
// Name: NewTag
// Dependencies: []
// Exports: default

// Module 12883 (NewTag)
let Platform;
importAll(dependencyMap[0]);
({ View: closure_3, Platform } = arg1(dependencyMap[1]));
const HorizontalGradient = arg1(dependencyMap[2]).HorizontalGradient;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { guild: "o", limit: "a", LIGHT: "isArray", enabled: "Boolean", guildId: "pos", bm: "a", backgroundColor: importDefault(dependencyMap[5]).unsafe_rawColors.RED_400, borderRadius: importDefault(dependencyMap[5]).radii.round };
obj.tagContainer = obj;
obj.tagText = { textTransform: "uppercase" };
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("design/void/NewTag/native/NewTag.tsx");

export default function NewTag(color) {
  let containerStyle;
  let textStyle;
  let variant;
  ({ containerStyle, textStyle, variant } = color);
  if (variant === undefined) {
    variant = "heading-sm/semibold";
  }
  let str = color.color;
  if (str === undefined) {
    str = "text-overlay-light";
  }
  let flag = color.gradient;
  if (flag === undefined) {
    flag = false;
  }
  let sm = color.borderRadius;
  if (sm === undefined) {
    sm = importDefault(dependencyMap[5]).radii.sm;
  }
  let colors = color.colors;
  if (colors === undefined) {
    const items = [importDefault(dependencyMap[5]).unsafe_rawColors.PREMIUM_TIER_2_PURPLE, importDefault(dependencyMap[5]).unsafe_rawColors.PREMIUM_TIER_2_PINK];
    colors = items;
  }
  let obj = {};
  Object.setPrototypeOf(null);
  const merged = Object.assign(color, obj);
  const tmp7 = callback();
  if (flag) {
    obj = {};
    obj = { borderRadius: sm, marginLeft: importDefault(dependencyMap[5]).space.PX_4 };
    obj.style = obj;
    ({ START: obj4.start, END: obj4.end } = HorizontalGradient);
    obj.colors = colors;
    const obj1 = {};
    const items1 = [tmp7.tagContainer, containerStyle];
    obj1.style = items1;
    const obj2 = { variant, color: str };
    const merged1 = Object.assign(merged);
    const items2 = [tmp7.tagText, textStyle];
    obj2["style"] = items2;
    const intl2 = arg1(dependencyMap[8]).intl;
    obj2["children"] = intl2.string(arg1(dependencyMap[8]).t.y2b7CA);
    obj1.children = tmp8(arg1(dependencyMap[7]).Text, obj2);
    obj.children = tmp8(closure_3, obj1);
    let tmp8Result = tmp8(importDefault(dependencyMap[6]), obj);
    const tmp18 = importDefault(dependencyMap[6]);
  } else {
    const obj3 = {};
    const items3 = [tmp7.tagContainer, containerStyle];
    obj3.style = items3;
    const obj4 = { variant, color: str };
    const merged2 = Object.assign(merged);
    const items4 = [tmp7.tagText, textStyle];
    obj4["style"] = items4;
    const intl = arg1(dependencyMap[8]).intl;
    obj4["children"] = intl.string(arg1(dependencyMap[8]).t.y2b7CA);
    obj3.children = tmp8(arg1(dependencyMap[7]).Text, obj4);
    tmp8Result = tmp8(closure_3, obj3);
  }
  return tmp8Result;
};
