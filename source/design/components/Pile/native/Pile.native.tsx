// Module ID: 9941
// Function ID: 76853
// Name: Pile
// Dependencies: [31, 27, 33, 4130, 1327, 22, 7961, 9942, 2]
// Exports: Pile

// Module 9941 (Pile)
import result from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ pile: { flexDirection: "row" } });
let result = require("jsxProd").fileFinishedImporting("design/components/Pile/native/Pile.native.tsx");

export const Pile = function Pile(aria_label) {
  let View;
  let children;
  let result;
  let dependencyMap;
  let require;
  let size;
  ({ shape: require, size } = aria_label);
  ({ gap: dependencyMap, depthX: result, depthY: View, children } = aria_label);
  let Children = React.Children;
  const tmp = callback();
  const length = Children.toArray(children).filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish).length;
  let obj = require(22) /* apply */;
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
    "aria-label": aria_label["aria-label"],
    children: Children.map(children, (type) => {
      if (outer1_3.isValidElement(type)) {
        let obj = outer1_0(outer1_2[5]);
        const tmp6 = obj.isArray(size) ? size[arg1] : size;
        let tmp8;
        if (arg1 < length - 1) {
          let obj1 = outer1_0(outer1_2[5]);
          if (obj1.isArray(size)) {
            let tmp13 = tmp12[arg1 + 1];
          } else {
            tmp13 = tmp12;
          }
          if (outer1_0(outer1_2[6]).CutoutShape.Circle === closure_0) {
            obj = { shape: closure_0 };
            if (null == result) {
              let result = -closure_2;
            } else {
              result = tmp6 * (1 - result);
            }
            obj.x = result;
            if (null == closure_4) {
              let result1 = -closure_2;
            } else {
              result1 = tmp6 * (1 - closure_4);
            }
            obj.y = result1;
            obj.size = tmp13 + 2 * closure_2;
          } else if (outer1_0(outer1_2[6]).CutoutShape.RoundedRect === tmp14) {
            obj = { shape: closure_0 };
            if (null == result) {
              let result2 = -closure_2;
            } else {
              result2 = tmp6 * (1 - result);
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
            let obj2 = outer1_0(outer1_2[4]);
            obj2.assertNever(closure_0);
          }
          tmp14 = closure_0;
        }
        let num9 = 0;
        let num10 = 0;
        if (arg1 > 0) {
          let obj5 = outer1_0(outer1_2[5]);
          if (obj5.isArray(size)) {
            let tmp48 = tmp47[arg1 - 1];
          } else {
            tmp48 = tmp47;
          }
          if (null == result) {
            let sum = -tmp48;
          } else {
            sum = -tmp48 * result + closure_2;
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
        if (type.type === outer1_0(outer1_2[7]).PileOverflow) {
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
          tmp62 = length(size(outer1_2[6]), obj5);
        }
        obj1.children = tmp62;
        return length(outer1_4, obj1, arg1);
      } else {
        return null;
      }
    })
  };
  Children = React.Children;
  return length(View, obj);
};
