// Module ID: 8694
// Function ID: 8695
// Name: PremiumFeatureList
// Dependencies: [19, 17, 1074, 21, 4836, 5836, 576, 8053, 2]
// Exports: default

// Module 8694 (PremiumFeatureList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import Form from "Form" /* 8053 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles from "TextStyles" /* 5836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
const Fonts = Constants.Fonts;
let Fragment = Fragment_mod;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { item: { backgroundColor: "transparent", paddingHorizontal: 0, paddingVertical: 8, flexDirection: "row", alignItems: "center" }, label: obj2, iconMargin: obj3 };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_NORMAL, nativeDefault.colors.TEXT_DEFAULT, 14));
obj3 = { marginEnd: nativeDefault.space.PX_16 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("components_native/premium/PremiumFeatureList.tsx");

export default function PremiumFeatureList(style) {
  let features;
  ({ features, separator: require, iconStyle: dependencyMap, labelStyle: react, rowStyle: View } = style);
  style = style.style;
  let closure_4 = closure_6();
  const found = features.filter((hidden) => !hidden.hidden);
  let obj = {
    style,
    children: found.map((color, index) => {
      let items;
      let items1;
      let items2;
      let items3;
      let obj3;
      const obj = { style: items, children: items2 };
      items = [closure_4.item, View];
      const obj2 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: React3(color.IconComponent, obj3) };
      obj3 = { size: "md", color: color.color, style: items1 };
      items1 = [closure_4.iconMargin, dependencyMap];
      const Fragment = react.Fragment;
      items2 = [React3(View, obj2), ];
      const obj4 = { numberOfLines: 2, style: items3, text: color.label };
      items3 = [closure_4.label, react];
      items2[1] = React3(Form.FormRow.Label, obj4);
      const children = [hasOwnProperty(View, obj, index), ];
      let tmp3 = null;
      const tmp = hasOwnProperty;
      if (null != require) {
        tmp3 = null;
        if ("" !== require) {
          tmp3 = null;
          if (color.renderSeparatorBelow) {
            tmp3 = tmp2;
          }
        }
      }
      children[1] = tmp3;
      return tmp(Fragment, { children }, index);
    })
  };
  return closure_4(View, obj);
};
