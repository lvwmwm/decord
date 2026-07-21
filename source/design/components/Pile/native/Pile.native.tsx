// Module ID: 9901
// Function ID: 76605
// Name: Pile
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: Pile

// Module 9901 (Pile)
import closure_3 from "result";
import { View } from "result";
import { jsx } from "result";
import result from "result";
import result from "result";

let closure_6 = result.createStyles({ pile: { flexDirection: "row" } });
result = result.fileFinishedImporting("design/components/Pile/native/Pile.native.tsx");

export const Pile = function Pile(aria-label) {
  let children;
  let size;
  ({ shape: closure_0, size } = aria_label);
  const importDefault = size;
  ({ gap: closure_2, depthX: closure_3, depthY: closure_4, children } = aria_label);
  let Children = React.Children;
  const tmp = callback();
  const length = Children.toArray(children).filter(arg1(dependencyMap[4]).isNotNullish).length;
  const jsx = length;
  let obj = arg1(dependencyMap[5]);
  if (obj.isArray(size)) {
    if (size.length !== length) {
      const _Error = Error;
      const error = new Error("Pile: size array must have the same number of elements as children");
      throw error;
    }
  }
  obj = {
    style: tmp.pile,
    accessible: true,
    aria-label: aria_label.aria-label,
    children: Children.map(children, (type) => {
      if (validElement.isValidElement(type)) {
        let obj = callback(closure_2[5]);
        const tmp6 = obj.isArray(size) ? size[arg1] : size;
        let tmp8;
        if (arg1 < length - 1) {
          let obj1 = callback(closure_2[5]);
          if (obj1.isArray(size)) {
            let tmp13 = tmp12[arg1 + 1];
          } else {
            tmp13 = tmp12;
          }
          if (callback(closure_2[6]).CutoutShape.Circle === callback) {
            obj = { shape: callback };
            if (null == validElement) {
              let result = -closure_2;
            } else {
              result = tmp6 * (1 - validElement);
            }
            obj.x = result;
            if (null == closure_4) {
              let result1 = -closure_2;
            } else {
              result1 = tmp6 * (1 - closure_4);
            }
            obj.y = result1;
            obj.size = tmp13 + 2 * closure_2;
          } else if (callback(closure_2[6]).CutoutShape.RoundedRect === tmp14) {
            obj = { shape: callback };
            if (null == validElement) {
              let result2 = -closure_2;
            } else {
              result2 = tmp6 * (1 - validElement);
            }
            obj.x = result2;
            if (null == closure_4) {
              let result3 = -closure_2;
            } else {
              result3 = tmp6 * (1 - closure_4);
            }
            obj.y = result3;
            obj.width = tmp13 + 2 * closure_2;
            obj.height = tmp13 + 2 * closure_2;
            obj.cornerRadius = tmp13 / 3 + closure_2;
            tmp8 = obj;
          } else {
            let obj2 = callback(closure_2[4]);
            obj2.assertNever(callback);
          }
          const tmp14 = callback;
        }
        let num9 = 0;
        let num10 = 0;
        if (arg1 > 0) {
          let obj5 = callback(closure_2[5]);
          if (obj5.isArray(size)) {
            let tmp48 = tmp47[arg1 - 1];
          } else {
            tmp48 = tmp47;
          }
          if (null == validElement) {
            let sum = -tmp48;
          } else {
            sum = -tmp48 * validElement + closure_2;
          }
          let num11 = 0;
          if (null != closure_4) {
            num11 = arg1 * (tmp48 - tmp48 * closure_4 + closure_2);
          }
          num10 = num11;
          num9 = sum;
        }
        obj1 = {};
        obj2 = { height: tmp6, marginLeft: num9, marginTop: num10 };
        const items = [obj2, ];
        if (type.type === callback(closure_2[7]).PileOverflow) {
          const obj3 = { minWidth: tmp6 };
          let obj4 = obj3;
        } else {
          obj4 = { width: tmp6 };
        }
        items[1] = obj4;
        obj1.style = items;
        let tmp62 = type;
        if (null != tmp8) {
          obj5 = {};
          const items1 = [tmp8];
          obj5.cutouts = items1;
          obj5.children = type;
          tmp62 = length(size(closure_2[6]), obj5);
        }
        obj1.children = tmp62;
        return length(closure_4, obj1, arg1);
      } else {
        return null;
      }
    })
  };
  Children = React.Children;
  return <View {...obj} />;
};
