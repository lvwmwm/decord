// Module ID: 13909
// Function ID: 105192
// Name: items
// Dependencies: []
// Exports: default

// Module 13909 (items)
importAll(dependencyMap[0]);
({ View: closure_3, StyleSheet: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles((arg0) => {
  let obj = {};
  obj = {};
  const merged = Object.assign(closure_4.absoluteFillObject);
  obj = {};
  if (arg0) {
    obj.top = undefined;
    let tmp2 = obj;
  } else {
    obj.bottom = undefined;
    tmp2 = obj;
  }
  const merged1 = Object.assign(tmp2);
  obj["height"] = 380;
  obj["zIndex"] = 1;
  obj.wrapper = obj;
  const obj1 = {};
  const merged2 = Object.assign(closure_4.absoluteFillObject);
  const obj2 = {};
  if (arg0) {
    obj2.top = undefined;
    let tmp5 = obj2;
  } else {
    obj2.bottom = undefined;
    tmp5 = obj2;
  }
  const merged3 = Object.assign(tmp5);
  if (arg0) {
    let obj3 = {};
  } else {
    obj3 = {};
    const obj4 = { rotate: "180deg" };
    const items = [obj4];
    obj3.transform = items;
  }
  const merged4 = Object.assign(obj3);
  obj1["width"] = "100%";
  obj.cloudsImage = obj1;
  const obj5 = {};
  const merged5 = Object.assign(closure_4.absoluteFillObject);
  obj5["bottom"] = undefined;
  obj5["width"] = "100%";
  obj.cloudsImageLight = obj5;
  const obj6 = {};
  const merged6 = Object.assign(closure_4.absoluteFillObject);
  obj6["opacity"] = 1;
  obj.gradient = obj6;
  const merged7 = Object.assign(closure_4.absoluteFillObject);
  obj.solidBackground = {};
  return obj;
});
const items = [null, null];
const substr = items.slice();
let closure_9 = substr.reverse();
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/quests/native/QuestModalContentCloudBackground.tsx");

export default function QuestModalContentCloudBackground(align) {
  let imgStyle;
  let style;
  align = align.align;
  let str = "bottom";
  if (undefined !== align) {
    str = align;
  }
  const resizeMode = align.resizeMode;
  let str2 = "cover";
  ({ style, imgStyle } = align);
  if (undefined !== resizeMode) {
    str2 = resizeMode;
  }
  const tmp = callback("bottom" === str);
  let obj = arg1(dependencyMap[4]);
  let obj1 = arg1(dependencyMap[5]);
  const isThemeDarkResult = obj.isThemeDark(obj1.useTheme());
  obj = { style: items };
  const items = [tmp.wrapper, style];
  if (isThemeDarkResult) {
    obj = { colors: "top" === str ? items : closure_9, style: tmp.gradient };
    tmp5(importDefault(dependencyMap[6]), obj);
  } else {
    obj1 = { style: tmp.solidBackground };
    const items1 = [tmp5(closure_3, obj1), ];
    const obj2 = {};
    const items2 = [isThemeDarkResult ? tmp.cloudsImage : tmp.cloudsImageLight, imgStyle];
    obj2.style = items2;
    if (isThemeDarkResult) {
      let tmp16 = tmp15[8];
    } else {
      tmp16 = tmp15[9];
    }
    obj2.source = importDefault(tmp16);
    obj2.resizeMode = str2;
    items1[1] = closure_5(importDefault(dependencyMap[7]), obj2);
    obj.children = items1;
    return tmp3(tmp4, obj);
  }
};
