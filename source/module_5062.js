// Module ID: 5062
// Function ID: 43231
// Dependencies: []

// Module 5062
let closure_2 = [null, null];
let closure_3 = importDefault(dependencyMap[0]);
const jsx = arg1(dependencyMap[2]).jsx;

export default importAll(dependencyMap[1]).forwardRef((delayLongPress, ref) => {
  delayLongPress = delayLongPress.delayLongPress;
  let num = 600;
  if (undefined !== delayLongPress) {
    num = delayLongPress;
  }
  let extraButtonProps = delayLongPress.extraButtonProps;
  if (undefined === extraButtonProps) {
    extraButtonProps = {};
  }
  const obj = { ref, delayLongPress: num, extraButtonProps };
  const tmp = callback(delayLongPress, closure_2);
  return jsx(importDefault(dependencyMap[3]), Object.assign(obj, tmp));
});
