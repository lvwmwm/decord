// Module ID: 5060
// Function ID: 43190
// Dependencies: []

// Module 5060
let closure_2 = ["string", "unicodeVersion"];
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
    extraButtonProps = { "Null": "<string:1618083841>", "Null": "<string:1610612736>" };
  }
  const obj = { ref, delayLongPress: num, extraButtonProps };
  const tmp = callback(delayLongPress, closure_2);
  return jsx(importDefault(dependencyMap[3]), Object.assign(obj, tmp));
});
