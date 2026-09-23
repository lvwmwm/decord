// Module ID: 15454
// Function ID: 15455
// Name: QuestModalContentCloudBackground
// Dependencies: [19, 17, 21, 4827, 4531, 4761, 5283, 5890, 15455, 15456, 2]
// Exports: default

// Module 15454 (QuestModalContentCloudBackground)
import themes from "themes" /* 4531 */;
import useTheme from "useTheme" /* 4761 */;
import LinearGradientDefault from "LinearGradient" /* 5283 */;
import FastImageDefault from "FastImage" /* 5890 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4827);
let closure_7 = createStyles.createStyles((arg0) => {
  const obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  const obj2 = { wrapper: null, cloudsImage: null, cloudsImageLight: null, gradient: null, solidBackground: null };
  const merged1 = Object.assign(arg0 ? { top: "r" } : { bottom: "r" });
  obj.height = 380;
  obj.zIndex = 1;
  obj2.wrapper = obj;
  const obj3 = {};
  const merged2 = Object.assign(tmp.absoluteFillObject);
  const merged3 = Object.assign(arg0 ? { top: "r" } : { bottom: "r" });
  if (arg0) {
    let obj4 = {};
  } else {
    obj4 = { transform: null };
    items = [{ rotate: "180deg" }];
    obj4.transform = items;
  }
  const merged4 = Object.assign(obj4);
  obj3.width = "100%";
  obj2.cloudsImage = obj3;
  const obj5 = {};
  const merged5 = Object.assign(tmp.absoluteFillObject);
  obj5.bottom = undefined;
  obj5.width = "100%";
  obj2.cloudsImageLight = obj5;
  const obj6 = {};
  const merged6 = Object.assign(tmp.absoluteFillObject);
  obj6.opacity = 1;
  obj2.gradient = obj6;
  const merged7 = Object.assign(tmp.absoluteFillObject);
  obj2.solidBackground = {};
  return obj2;
});
let items = ["#292252FF", "#1E1F2200"];
const substr = items.slice();
let closure_9 = substr.reverse();
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestModalContentCloudBackground.tsx");

export default function QuestModalContentCloudBackground(align) {
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
  const tmp = closure_7("bottom" === str);
  const obj = themes;
  const isThemeDarkResult = obj.isThemeDark(useTheme.useTheme());
  const obj3 = { style: null, children: null };
  items = [tmp.wrapper, style];
  obj3.style = items;
  if (isThemeDarkResult) {
    const obj4 = { colors: "top" === str ? items : closure_9, style: tmp.gradient };
    tmp6(LinearGradientDefault, obj4);
  } else {
    const obj5 = { style: tmp.solidBackground };
    const items1 = [tmp6(tmp5, obj5), ];
    const obj6 = { style: null, source: null, resizeMode: null };
    const items2 = [isThemeDarkResult ? tmp.cloudsImage : tmp.cloudsImageLight, imgStyle];
    obj6.style = items2;
    obj6.source = importDefault(isThemeDarkResult ? 15455 : 15456);
    obj6.resizeMode = str2;
    items1[1] = tmp6(FastImageDefault, obj6);
    obj3.children = items1;
    return tmp4(tmp5, obj3);
  }
};
