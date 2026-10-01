// Module ID: 9807
// Function ID: 9808
// Name: LayoutUtils
// Dependencies: [19, 21, 1177, 2]
// Exports: GappedList

// Module 9807 (LayoutUtils)
import native from "native" /* 1177 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/LayoutUtils.tsx");

export const GappedList = function GappedList(gap) {
  let Children1;
  let num = gap.gap;
  let children = gap.children;
  if (num === undefined) {
    num = 4;
  }
  const renderGap = gap.renderGap;
  let found;
  const Children = found.Children;
  const toArrayResult = Children.toArray(children);
  found = toArrayResult.filter((item) => null != item);
  let obj = {
    children: Children1.map(found, (arg0, arg1) => {
      const children = [arg0, ];
      let tmp3 = arg1 !== found.length - 1;
      const tmp = hasOwnProperty;
      const tmp2 = React3;
      if (tmp3) {
        let tmp4Result;
        if (null != renderGap) {
          tmp4Result = tmp4();
        } else {
          const obj = { size: num };
          tmp4Result = _false(native.Spacer, obj);
        }
        tmp3 = tmp4Result;
      }
      children[1] = tmp3;
      return tmp(tmp2, { children });
    })
  };
  Children1 = found.Children;
  return closure_3(closure_4, obj);
};
