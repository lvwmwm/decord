// Module ID: 9441
// Function ID: 73487
// Name: GappedList
// Dependencies: [31, 33, 1273, 2]
// Exports: GappedList

// Module 9441 (GappedList)
import result from "result";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = jsxProd);
const result = require("Button").fileFinishedImporting("modules/guild_role_subscriptions/native/components/LayoutUtils.tsx");

export const GappedList = function GappedList(gap) {
  let num = gap.gap;
  if (num === undefined) {
    num = 4;
  }
  const renderGap = gap.renderGap;
  let found;
  let Children = found.Children;
  found = Children.toArray(gap.children).filter((arg0) => null != arg0);
  const toArrayResult = Children.toArray(gap.children);
  Children = found.Children;
  return callback(closure_4, {
    children: Children.map(found, (arg0, arg1) => {
      let obj = {};
      const items = [arg0, ];
      if (arg1 === found.length - 1) {
        items[1] = tmp3;
        obj.children = items;
        return tmp(tmp2, obj);
      } else if (null != renderGap) {
        let tmp10 = renderGap();
      } else {
        obj = { size: 2 };
        tmp10 = outer1_3(num(renderGap[2]).Spacer, obj);
      }
    })
  });
};
