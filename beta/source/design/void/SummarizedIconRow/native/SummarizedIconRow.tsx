// Module ID: 13639
// Function ID: 13640
// Name: SummarizedIconRow
// Dependencies: [19, 17, 21, 4836, 576, 4832, 2]
// Exports: OverflowCircle, OverflowText, OverflowTextSmall, default

// Module 13639 (SummarizedIconRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
let obj4;
let obj5;
function OverflowSquircle(arg0) {
  let overflow;
  let style;
  ({ overflow, style } = arg0);
  const tmp = closure_4();
  const items = [tmp.overflowSquircleWrap, style];
  ({ variant: "text-xs/medium", children: "+" + overflow });
  const Text = Text_Text.Text;
  return <View style={items}>{null}</View>;
}
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "row", alignItems: "center" }, iconWrapper: { alignItems: "center", justifyContent: "center" }, overflowSquircleWrap: obj2, overflowSquircle: obj3, overflowTextOnly: obj4, overflowCircleWrap: obj5, overflowCircle: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, margin: 2, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 15 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.md };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, margin: 3, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 10 };
obj4 = { margin: 2, paddingHorizontal: 8, height: 32, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: 17 };
({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, margin: 2, paddingHorizontal: 8, height: 30, alignItems: "center", justifyContent: "center", borderRadius: 15 });
let closure_4 = createStyles(obj);
const result = size.fileFinishedImporting("design/void/SummarizedIconRow/native/SummarizedIconRow.tsx");

export default function SummarizedIconRow(max) {
  let marginLeft;
  let overflowComponent;
  let style;
  let items = max.items;
  let num = max.max;
  if (num === undefined) {
    num = 8;
  }
  ({ renderItem: View, offsetAmount: jsx, iconWrapperStyle: closure_4, overflowStyle: OverflowSquircle, overflowComponent, style } = max);
  if (overflowComponent === undefined) {
    overflowComponent = OverflowSquircle;
  }
  let tmp = closure_4();
  const iconWrapper = tmp;
  let closure_8 = Math.max(items.length - num, 0);
  let items1 = [tmp.container, style];
  return <View style={items1}>{items.map((item, index) => {
    const tmp = num;
    if (index < num) {
      let tmp8Result;
      if (index === tmp - 1) {
        if (closure_8 > 0) {
          items = [{ marginLeft: jsx }, OverflowSquircle];
          tmp8Result = <overflowComponent key={arg1} style={items} overflow={tmp2 + 1} />;
          const obj3 = { marginLeft: jsx };
        }
        return tmp8Result;
      }
      const _Math = Math;
      tmp8Result = null;
      if (item) {
        let obj;
        const items1 = [iconWrapper.iconWrapper, closure_4, ];
        const tmp8 = jsx;
        const tmp9 = View;
        if (0 !== index) {
          obj = { marginLeft: jsx };
          const obj4 = { marginLeft: jsx };
        } else {
          obj = {};
        }
        items1[2] = obj;
        const obj5 = { style: items1, children: View(item, index === tmp6) };
        tmp8Result = tmp8(tmp9, obj5, index);
      }
    }
  })}</View>;
};
export const OverflowText = function OverflowText(arg0) {
  let overflow;
  let style;
  ({ overflow, style } = arg0);
  const items = [closure_4().overflowTextOnly, style];
  ({ variant: "text-xs/medium", children: "+" + overflow });
  const Text = Text_Text.Text;
  return <View style={items}>{null}</View>;
};
export const OverflowTextSmall = function OverflowTextSmall(arg0) {
  let overflow;
  let style;
  ({ overflow, style } = arg0);
  const items = [closure_4().overflowTextOnly, style];
  ({ variant: "text-xxs/medium", children: "+" + overflow });
  const Text = Text_Text.Text;
  return <View style={items}>{null}</View>;
};
export const OverflowCircle = function OverflowCircle(arg0) {
  let overflow;
  let style;
  ({ overflow, style } = arg0);
  const tmp = closure_4();
  const items = [tmp.overflowCircleWrap, style];
  ({ variant: "text-xs/medium", children: "+" + overflow });
  const Text = Text_Text.Text;
  return <View style={items}>{null}</View>;
};
