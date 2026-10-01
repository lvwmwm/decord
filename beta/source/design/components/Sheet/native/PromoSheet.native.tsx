// Module ID: 9691
// Function ID: 9692
// Name: PromoSheet
// Dependencies: [109, 19, 17, 21, 4836, 576, 9692, 6571, 5279, 9693, 4832, 2]
// Exports: PromoSheet

// Module 9691 (PromoSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let metroImportAll;
let metroImportDefault;
let obj2;
let closure_3 = ["title", "description", "illustration", "graphic", "gradientColor", "actions"];
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { content: { paddingHorizontal: 20, position: "relative" }, title: { textAlign: "center" }, description: { textAlign: "center" }, illustration: { alignSelf: "stretch", alignItems: "center" }, graphic: obj2 };
obj2 = { alignSelf: "center", maxWidth: nativeDefault.modules.mobile.PROMO_SHEET_GRAPHIC_MAX_WIDTH };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("design/components/Sheet/native/PromoSheet.native.tsx");

export const PromoSheet = function PromoSheet(arg0) {
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
  const tmp = _objectWithoutProperties(arg0, closure_3);
  const tmp2 = closure_9();
  const items = [gradientColor];
  const memo = react.useMemo(() => {
    let color;
    return null != gradientColor ? ((arg0) => {
      let ExpressiveGradient;
      let obj2;
      const obj = { children: closure_2_7(ExpressiveGradient, obj2) };
      const merged = Object.assign(arg0);
      obj2 = { offsetBottom: 0.25, color, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
      ExpressiveGradient = gradientColor(dependencyMap[6]).ExpressiveGradient;
      return closure_2_7(View, obj);
    }) : undefined;
  }, items);
  let obj = { startExpanded: true, contentStyles: tmp2.content, backgroundComponent: memo, children: closure_8(Stack, obj6) };
  BottomSheet = gradientColor(6571).BottomSheet;
  let merged = Object.assign(tmp);
  Stack = gradientColor(5279).Stack;
  if (null != graphic) {
    let obj2 = { style: tmp2.graphic };
    const Graphic = tmp5(9693).Graphic;
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
  const Stack2 = tmp5(5279).Stack;
  const items2 = [, ];
  const obj4 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp2.title, children: title };
  items2[0] = closure_7(gradientColor(4832).Text, obj4);
  let tmp4Result2 = null;
  if (null != description) {
    const obj5 = { variant: "redesign/heading-18/medium", color: "text-subtle", style: tmp2.description, children: description };
    tmp4Result2 = tmp4(tmp5(4832).Text, obj5);
  }
  obj6 = { spacing: 24, children: items1 };
  items2[1] = tmp4Result2;
  items1[1] = closure_8(Stack2, { children: items2 });
  items1[2] = actions;
  return closure_7(BottomSheet, obj);
};
