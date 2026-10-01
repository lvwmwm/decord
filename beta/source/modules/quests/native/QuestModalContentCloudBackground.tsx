// Module ID: 14658
// Function ID: 14659
// Name: QuestModalContentCloudBackground
// Dependencies: [19, 17, 21, 4836, 4538, 4767, 5293, 5899, 14659, 14660, 2]
// Exports: default

// Module 14658 (QuestModalContentCloudBackground)
import themes from "themes" /* 4538 */;
import useTheme from "useTheme" /* 4767 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import FastImageDefault from "FastImage" /* 5899 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ View: c3, StyleSheet: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles((arg0) => {
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  const obj = { height: 380, zIndex: 1 };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  const obj2 = { wrapper: obj, cloudsImage: obj3, cloudsImageLight: obj5, gradient: obj6, solidBackground: obj7 };
  const tmp3 = arg0 ? { top: "Path" } : { bottom: "Path" };
  const merged1 = Object.assign(tmp3);
  obj3 = { width: "100%" };
  const merged2 = Object.assign(tmp.absoluteFillObject);
  const tmp6 = arg0 ? { top: "Path" } : { bottom: "Path" };
  const merged3 = Object.assign(tmp6);
  if (arg0) {
    obj4 = {};
  } else {
    obj4 = { transform: items };
    items = [{ rotate: "180deg" }];
  }
  const merged4 = Object.assign(obj4);
  obj5 = { bottom: undefined, width: "100%" };
  const merged5 = Object.assign(tmp.absoluteFillObject);
  obj6 = { opacity: 1 };
  const merged6 = Object.assign(tmp.absoluteFillObject);
  obj7 = {};
  const merged7 = Object.assign(tmp.absoluteFillObject);
  return obj2;
});
let items = ["#292252FF", "#1E1F2200"];
const substr = items.slice();
let closure_9 = substr.reverse();
const result = size.fileFinishedImporting("modules/quests/native/QuestModalContentCloudBackground.tsx");

export default function QuestModalContentCloudBackground(align) {
  let imgStyle;
  let items1;
  let items2;
  let style;
  let tmp7Result;
  let tmp9;
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
  const isThemeDark = themes.isThemeDark;
  themes;
  const obj = useTheme;
  const isThemeDarkResult = isThemeDark(obj.useTheme());
  const obj2 = { style: items, children: items1 };
  items = [tmp.wrapper, style];
  const tmp5 = metroRequire;
  if (isThemeDarkResult) {
    const obj3 = { colors: "top" === str ? items : closure_9, style: tmp.gradient };
    tmp7Result = tmp7(LinearGradientDefault, obj3);
    tmp9 = tmp7;
  } else {
    const obj4 = { style: tmp.solidBackground };
    tmp7Result = tmp7(tmp6, obj4);
    tmp9 = tmp7;
  }
  items1 = [tmp7Result, ];
  const obj5 = { style: items2, source: importDefault(isThemeDarkResult ? 14659 : 14660), resizeMode: str2 };
  items2 = [isThemeDarkResult ? tmp.cloudsImage : tmp.cloudsImageLight, imgStyle];
  const tmp12 = FastImageDefault;
  items1[1] = tmp9(tmp12, obj5);
  return tmp5(_false, obj2);
};
