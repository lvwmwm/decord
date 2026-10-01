// Module ID: 10466
// Function ID: 10467
// Name: Pile
// Dependencies: [19, 17, 21, 4836, 1370, 12, 8276, 10467, 2]
// Exports: Pile

// Module 10466 (Pile)
import _mod12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import ClipView from "ClipView" /* 8276 */;
import PileOverflow from "PileOverflow" /* 10467 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const ClipViewDefault = ClipView;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ pile: { flexDirection: "row" } });
let size = size_mod;
let result = size.fileFinishedImporting("design/components/Pile/native/Pile.native.tsx");

export const Pile = function Pile(aria_label) {
  let Children1;
  let children;
  ({ shape: require, size } = aria_label);
  ({ gap: dependencyMap, depthX: react, depthY: View, children } = aria_label);
  const prop = aria_label["aria-label"];
  const Children = react.Children;
  const tmp2 = closure_6();
  const toArrayResult = Children.toArray(children);
  const length = toArrayResult.filter(GlobalUtils.isNotNullish).length;
  let obj = _mod12;
  const tmp3 = react;
  if (obj.isArray(size)) {
    if (size.length !== length) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Pile: size array must have the same number of elements as children");
      let tmp6 = error;
      throw error;
    }
  }
  let obj2 = {
    style: tmp2.pile,
    accessible: true,
    "aria-label": prop,
    children: Children1.map(children, (type, arg1) => {
      let items1;
      let result;
      let result1;
      let result2;
      let result3;
      if (react.isValidElement(type)) {
        let obj4;
        let tmp6 = size;
        const obj = _mod12;
        if (obj.isArray(size)) {
          tmp6 = tmp5[arg1];
        }
        let tmp8;
        if (arg1 < length - 1) {
          let tmp9 = tmp5;
          const tmp3Result = _mod12;
          if (tmp3Result.isArray(size)) {
            tmp9 = tmp5[arg1 + 1];
          }
          if (ClipView.CutoutShape.Circle === require) {
            const point = { shape: require, x: result, y: result1, size: tmp9 + 2 * dependencyMap };
            if (null == react) {
              result = -dependencyMap;
            } else {
              result = tmp6 * (1 - tmp20);
            }
            if (null == View) {
              result1 = -dependencyMap;
            } else {
              result1 = tmp6 * (1 - tmp24);
            }
            tmp8 = point;
          } else if (ClipView.CutoutShape.RoundedRect === require) {
            size = { shape: require, x: result2, y: result3, width: tmp9 + 2 * dependencyMap, height: tmp9 + 2 * dependencyMap, cornerRadius: tmp9 / 3 + dependencyMap };
            if (null == react) {
              result2 = -dependencyMap;
            } else {
              result2 = tmp6 * (1 - tmp12);
            }
            if (null == View) {
              result3 = -dependencyMap;
            } else {
              result3 = tmp6 * (1 - tmp16);
            }
            tmp8 = size;
          } else {
            const tmp3Result3 = GlobalUtils;
            tmp3Result3.assertNever(require);
          }
        }
        let num6 = 0;
        let num7 = 0;
        if (arg1 > 0) {
          let sum;
          let tmp28 = tmp5;
          const tmp3Result4 = _mod12;
          if (tmp3Result4.isArray(size)) {
            tmp28 = tmp5[arg1 - 1];
          }
          if (null == react) {
            sum = -tmp28;
          } else {
            sum = -tmp28 * tmp29 + dependencyMap;
          }
          let num8 = 0;
          if (null != View) {
            num8 = arg1 * (tmp28 - tmp28 * View + dependencyMap);
          }
          num6 = num8;
          num7 = sum;
        }
        const items = [{ height: tmp6, marginLeft: num7, marginTop: num6 }, ];
        const obj2 = { height: tmp6, marginLeft: num7, marginTop: num6 };
        if (type.type === PileOverflow.PileOverflow) {
          obj4 = { minWidth: tmp6 };
          const obj3 = { minWidth: tmp6 };
        } else {
          obj4 = { width: tmp6 };
        }
        items[1] = obj4;
        let tmp34Result = type;
        if (null != tmp8) {
          const obj6 = { cutouts: items1, children: type };
          items1 = [tmp8];
          tmp34Result = tmp34(ClipViewDefault, obj6);
        }
        return <tmp35 key={arg1} style={items}>{tmp34Result}</tmp35>;
      } else {
        return null;
      }
    })
  };
  Children1 = tmp3.Children;
  return length(View, obj2);
};
