// Module ID: 11548
// Function ID: 89906
// Name: PromoSheet
// Dependencies: [29, 31, 27, 33, 4130, 689, 1324, 8574, 5187, 4541, 8573, 4126, 2]
// Exports: PromoSheet

// Module 11548 (PromoSheet)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
let closure_3 = ["title", "description", "illustration", "graphic", "gradientColor", "actions"];
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { content: { paddingHorizontal: 20, position: "relative" }, title: { textAlign: "center" }, description: { textAlign: "center" }, illustration: { alignSelf: "stretch", alignItems: "center" } };
_createForOfIteratorHelperLoose = { alignSelf: "center", maxWidth: require("_createForOfIteratorHelperLoose").modules.mobile.PROMO_SHEET_GRAPHIC_MAX_WIDTH };
_createForOfIteratorHelperLoose.graphic = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/Sheet/native/PromoSheet.native.tsx");

export const PromoSheet = function PromoSheet(arg0) {
  let actions;
  let description;
  let gradientColor;
  let graphic;
  let illustration;
  let title;
  ({ description, illustration, graphic, gradientColor } = arg0);
  ({ title, actions } = arg0);
  const tmp2 = importDefault(1324)("PromoSheet");
  importDefault = tmp2;
  const tmp3 = _createForOfIteratorHelperLoose();
  const items = [tmp2, gradientColor];
  const memo = React.useMemo(() => {
    if (closure_1) {
      if (null != gradientColor) {
        return (arg0) => {
          let obj = {};
          const merged = Object.assign(arg0);
          obj = { offsetBottom: 0.25, color: outer1_0, backgroundColor: callback(outer2_2[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
          obj["children"] = outer2_7(gradientColor(outer2_2[7]).ExpressiveGradient, obj);
          return outer2_7(outer2_6, obj);
        };
      }
    }
  }, items);
  let obj = {};
  let merged = Object.assign(callback(arg0, closure_3));
  obj["startExpanded"] = true;
  obj["contentStyles"] = tmp3.content;
  obj["backgroundComponent"] = memo;
  obj = { spacing: 24 };
  if (tmp2) {
    if (null != graphic) {
      obj = {};
      const merged1 = Object.assign(graphic);
      obj["style"] = tmp3.graphic;
      let tmp10 = callback2(gradientColor(8573).Graphic, obj);
    }
    const items1 = [tmp10, , ];
    const obj1 = {};
    const obj2 = {};
    let str2 = "heading-xl/bold";
    if (tmp2) {
      str2 = "heading-xl/semibold";
    }
    obj2.variant = str2;
    obj2.color = "mobile-text-heading-primary";
    obj2.style = tmp3.title;
    obj2.children = title;
    const items2 = [callback2(gradientColor(4126).Text, obj2), ];
    let tmp24Result = null;
    if (null != description) {
      const obj3 = {};
      let str4 = "text-md/medium";
      if (tmp2) {
        str4 = "redesign/heading-18/medium";
      }
      obj3.variant = str4;
      let str5 = "text-default";
      if (tmp2) {
        str5 = "text-subtle";
      }
      obj3.color = str5;
      obj3.style = tmp3.description;
      obj3.children = description;
      tmp24Result = callback2(gradientColor(4126).Text, obj3);
      const tmp24 = callback2;
    }
    items2[1] = tmp24Result;
    obj1.children = items2;
    items1[1] = closure_8(gradientColor(4541).Stack, obj1);
    items1[2] = actions;
    obj.children = items1;
    obj["children"] = closure_8(tmp8, obj);
    return callback2(gradientColor(5187).BottomSheet, obj);
  }
  tmp10 = null;
  if (null != illustration) {
    const obj4 = { style: tmp3.illustration, children: illustration };
    tmp10 = callback2(View, obj4);
  }
};
