// Module ID: 5418
// Function ID: 46443
// Name: ScrollAnchor
// Dependencies: [5359, 31, 33, 5413]
// Exports: ScrollAnchor

// Module 5418 (ScrollAnchor)
import _slicedToArray from "_slicedToArray";
import result from "result";
import "result";
import { jsx } from "jsxProd";

let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ useImperativeHandle: closure_3, useMemo: closure_4, useState: closure_5 } = result);

export const ScrollAnchor = function ScrollAnchor(horizontal) {
  horizontal = horizontal.horizontal;
  const tmp = callback(callback4(1000000), 2);
  const first = tmp[0];
  callback = tmp[1];
  callback2(horizontal.scrollAnchorRef, () => ({
    scrollBy(diff) {
      let closure_0 = diff;
      outer1_2((arg0) => arg0 + closure_0);
    }
  }), []);
  const items = [first, horizontal];
  return callback3(() => {
    let obj = {};
    obj = { position: "absolute", height: 0 };
    let num = 0;
    if (!horizontal) {
      num = first;
    }
    obj.top = num;
    let num2 = 0;
    if (horizontal) {
      num2 = first;
    }
    obj.left = num2;
    obj.style = obj;
    return outer1_6(horizontal(first[3]).CompatView, obj);
  }, items);
};
