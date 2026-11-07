// Module ID: 13004
// Function ID: 13005
// Name: ConjureSharedProjectCover
// Dependencies: [19, 17, 21, 5140, 575, 5842, 13005, 5758, 8922, 1113, 4026, 2]
// Exports: default

// Module 13004 (ConjureSharedProjectCover)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import components_Button_Button from "components/Button/Button" /* 5758 */;
import FastImageDefault from "FastImage" /* 5842 */;
import ConjureAppSheetIconDefault from "ConjureAppSheetIcon" /* 13005 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { frame: obj2, cover: { position: "absolute", top: 0, right: 0, bottom: 0, left: 0 } };
obj2 = { width: "100%", aspectRatio: 1.7777777777777777, borderRadius: nativeDefault.radii.lg, overflow: "hidden", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjureSharedProjectCover.tsx");

export default function ConjureSharedProjectCover(onPress) {
  let action;
  let application;
  let items;
  let launching;
  let obj3;
  let stringResult;
  let tmp4Result;
  ({ application, action, launching } = onPress);
  if (launching === undefined) {
    launching = false;
  }
  onPress = onPress.onPress;
  const tmp = closure_6();
  const coverImageURL = application.getCoverImageURL(1024);
  if (null != coverImageURL) {
    let tmp11;
    let tmp6;
    let tmp10;
    const obj = { style: tmp.frame, children: items };
    const tmp4 = hasOwnProperty;
    const tmp5 = View;
    if (null != coverImageURL) {
      const obj2 = { source: obj3, style: tmp.cover };
      obj3 = { uri: coverImageURL };
      tmp11 = React3(FastImageDefault, obj2);
      tmp6 = React3;
      tmp10 = importDefault;
    } else {
      tmp6 = React3;
      const obj4 = { application, radius: nativeDefault.radii.sm };
      tmp10 = importDefault;
      const tmp9 = ConjureAppSheetIconDefault;
      tmp11 = React3(tmp9, obj4);
    }
    items = [tmp11, ];
    let tmp6Result2 = null;
    if (null != action) {
      let tmp6Result;
      const Button = components_Button_Button.Button;
      if ("launch" === action) {
        tmp6Result = tmp6(tmp16(8922).PlayIcon, {});
      }
      const obj5 = { variant: "primary-overlay", size: "md", icon: tmp6Result, text: stringResult, loading: launching, onPress };
      const intl = tmp16(1113).intl;
      const string = intl.string;
      if ("launch" === action) {
        stringResult = string(tmp10(4026)["1cF7L4"]);
      } else {
        stringResult = string(tmp16(1113).t["3xjX0U"]);
      }
      tmp6Result2 = tmp6(Button, obj5);
    }
    items[1] = tmp6Result2;
    tmp4Result = tmp4(tmp5, obj);
  } else {
    tmp4Result = null;
  }
  return tmp4Result;
};
