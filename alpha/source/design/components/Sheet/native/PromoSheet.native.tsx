// Module ID: 10303
// Function ID: 10304
// Name: PromoSheet
// Dependencies: [109, 19, 17, 21, 5090, 587, 558, 576, 9386, 9385, 5086, 5373, 6829, 2]

// Module 10303 (PromoSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ExpressiveGradient2 from "ExpressiveGradient" /* 9386 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, obj1;

let c9;
let metroImportAll;
let obj2;
let closure_3 = ["title", "description", "illustration", "graphic", "gradientColor", "actions"];
let closure_4 = ["title", "description", "illustration", "graphic", "gradientColor", "actions"];
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { content: { paddingHorizontal: 20, position: "relative" }, title: { textAlign: "center" }, description: { textAlign: "center" }, illustration: { alignSelf: "stretch", alignItems: "center" }, graphic: obj2 };
obj2 = { alignSelf: "center", maxWidth: nativeDefault.modules.mobile.PROMO_SHEET_GRAPHIC_MAX_WIDTH };
let closure_10 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function PromoSheet(actions) {
  let _require;
  let description;
  let gradientColor;
  let graphic;
  let illustration;
  let title;
  let tmp17;
  let tmp7;
  let tmp8;
  let obj = require("react");
  const cResult = obj.c(33);
  const tmp = _require;
  if (cResult[0] !== actions) {
    ({ title, description, illustration, graphic, gradientColor } = actions);
    _require = gradientColor;
    actions = actions.actions;
    cResult[0] = actions;
    cResult[1] = actions;
    cResult[2] = description;
    cResult[3] = gradientColor;
    cResult[4] = graphic;
    cResult[5] = illustration;
    cResult[6] = _objectWithoutProperties(actions, closure_3);
    cResult[7] = title;
    tmp8 = illustration;
    tmp7 = graphic;
    const tmp13 = _objectWithoutProperties(actions, closure_3);
  } else {
    _require = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  const tmp14 = closure_10();
  if (null != tmp6) {
    if (cResult[8] !== tmp6) {
      class SheetBackground {
        constructor(arg0) {
          obj = {};
          merged = Object.assign(actions);
          obj1 = { offsetBottom: 0.25, color: closure_0, backgroundColor: null };
          ExpressiveGradient = closure_0(closure_2[8]).ExpressiveGradient;
          obj1.backgroundColor = closure_1(closure_2[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND;
          obj.children = jsx(ExpressiveGradient, obj1);
          return jsx(View, obj);
        }
      }
      cResult[8] = tmp6;
      cResult[9] = SheetBackground;
    } else {
      class SheetBackground {
        constructor(arg0) {
          obj = {};
          merged = Object.assign(actions);
          obj1 = { offsetBottom: 0.25, color: closure_0, backgroundColor: null };
          ExpressiveGradient = closure_0(closure_2[8]).ExpressiveGradient;
          obj1.backgroundColor = closure_1(closure_2[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND;
          obj.children = jsx(ExpressiveGradient, obj1);
          return jsx(View, obj);
        }
      }
    }
  }
  if (cResult[10] === tmp7) {
    class SheetBackground {
      constructor(arg0) {
        obj = {};
        merged = Object.assign(actions);
        obj1 = { offsetBottom: 0.25, color: closure_0, backgroundColor: null };
        ExpressiveGradient = closure_0(closure_2[8]).ExpressiveGradient;
        obj1.backgroundColor = closure_1(closure_2[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND;
        obj.children = jsx(ExpressiveGradient, obj1);
        return jsx(View, obj);
      }
    }
  }
  if (null != tmp7) {
    class SheetBackground {
      constructor(arg0) {
        obj = {};
        merged = Object.assign(actions);
        obj1 = { offsetBottom: 0.25, color: closure_0, backgroundColor: null };
        ExpressiveGradient = closure_0(closure_2[8]).ExpressiveGradient;
        obj1.backgroundColor = closure_1(closure_2[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND;
        obj.children = jsx(ExpressiveGradient, obj1);
        return jsx(View, obj);
      }
    }
    let obj2 = { style: tmp14.graphic };
    const Graphic = tmp(9385).Graphic;
    let merged = Object.assign(tmp7);
    tmp17 = closure_8(Graphic, obj2);
  } else {
    class SheetBackground {
      constructor(arg0) {
        obj = {};
        merged = Object.assign(actions);
        obj1 = { offsetBottom: 0.25, color: closure_0, backgroundColor: null };
        ExpressiveGradient = closure_0(closure_2[8]).ExpressiveGradient;
        obj1.backgroundColor = closure_1(closure_2[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND;
        obj.children = jsx(ExpressiveGradient, obj1);
        return jsx(View, obj);
      }
    }
    if (null != tmp8) {
      class SheetBackground {
        constructor(arg0) {
          obj = {};
          merged = Object.assign(actions);
          obj1 = { offsetBottom: 0.25, color: closure_0, backgroundColor: null };
          ExpressiveGradient = closure_0(closure_2[8]).ExpressiveGradient;
          obj1.backgroundColor = closure_1(closure_2[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND;
          obj.children = jsx(ExpressiveGradient, obj1);
          return jsx(View, obj);
        }
      }
      const obj3 = { style: tmp14.illustration, children: tmp8 };
      tmp17 = closure_8(View, obj3);
    }
  }
  cResult[10] = tmp7;
  cResult[11] = tmp8;
  cResult[12] = tmp14.graphic;
  cResult[13] = tmp14.illustration;
  cResult[14] = tmp17;
}) : (function PromoSheet(arg0) {
  let Stack;
  let actions;
  let description;
  let gradientColor;
  let graphic;
  let illustration;
  let obj6;
  let title;
  let tmp4Result;
  ({ description, illustration, graphic, gradientColor } = arg0);
  ({ title, actions } = arg0);
  const tmp = _objectWithoutProperties(arg0, closure_4);
  const tmp2 = closure_10();
  const items = [gradientColor];
  const memo = react.useMemo(() => null != gradientColor ? (function SheetBackground(arg0) {
    let ExpressiveGradient;
    let obj2;
    const obj = { children: closure_2_8(ExpressiveGradient, obj2) };
    const merged = Object.assign(arg0);
    obj2 = { offsetBottom: 0.25, color, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
    ExpressiveGradient = gradientColor(dependencyMap[8]).ExpressiveGradient;
    return closure_2_8(View, obj);
  }) : undefined, items);
  let obj = { startExpanded: true, contentStyles: tmp2.content, backgroundComponent: memo, children: closure_9(Stack, obj6) };
  BottomSheet = gradientColor(6829).BottomSheet;
  let merged = Object.assign(tmp);
  Stack = gradientColor(5373).Stack;
  if (null != graphic) {
    let obj2 = { style: tmp2.graphic };
    const Graphic = tmp5(9385).Graphic;
    const merged1 = Object.assign(graphic);
    tmp4Result = tmp4(Graphic, obj2);
  } else {
    tmp4Result = null;
    if (null != illustration) {
      const obj3 = { style: tmp2.illustration, children: illustration };
      tmp4Result = tmp4(View, obj3);
    }
  }
  const items1 = [tmp4Result, , ];
  const Stack2 = tmp5(5373).Stack;
  const items2 = [, ];
  const obj4 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp2.title, children: title };
  items2[0] = closure_8(gradientColor(5086).Text, obj4);
  let tmp4Result2 = null;
  if (null != description) {
    const obj5 = { variant: "redesign/heading-18/medium", color: "text-subtle", style: tmp2.description, children: description };
    tmp4Result2 = tmp4(tmp5(5086).Text, obj5);
  }
  obj6 = { spacing: 24, children: items1 };
  items2[1] = tmp4Result2;
  items1[1] = closure_9(Stack2, { children: items2 });
  items1[2] = actions;
  return closure_8(BottomSheet, obj);
});
const result = size.fileFinishedImporting("design/components/Sheet/native/PromoSheet.native.tsx");

export const PromoSheet = tmp3;
