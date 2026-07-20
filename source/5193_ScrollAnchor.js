// Module ID: 5193
// Function ID: 44006
// Name: ScrollAnchor
// Dependencies: []
// Exports: ScrollAnchor

// Module 5193 (ScrollAnchor)
let closure_2 = importDefault(dependencyMap[0]);
({ useImperativeHandle: closure_3, useMemo: closure_4, useState: closure_5 } = arg1(dependencyMap[1]));
importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;

export const ScrollAnchor = function ScrollAnchor(horizontal) {
  horizontal = horizontal.horizontal;
  const arg1 = horizontal;
  const tmp = callback(callback4(1000000), 2);
  const first = tmp[0];
  const dependencyMap = first;
  const callback = tmp[1];
  callback2(horizontal.scrollAnchorRef, () => ({
    scrollBy(diff) {
      callback((arg0) => arg0 + arg0);
    }
  }), []);
  const items = [first, horizontal];
  return callback3(() => {
    let obj = {};
    obj = { 1661939810: null, 1370398947: null };
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
    return closure_6(horizontal(first[3]).CompatView, obj);
  }, items);
};
