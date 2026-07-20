// Module ID: 1674
// Function ID: 18560
// Name: JumpingTransition
// Dependencies: []

// Module 1674 (JumpingTransition)
arg5.JumpingTransition = function JumpingTransition(name) {
  let scaleX;
  let scaleY;
  let translateX;
  let translateY;
  ({ translateX, translateY, scaleX, scaleY } = arg1);
  const absolute = Math.abs(translateX);
  const result = Math.max(absolute, Math.abs(translateY)) / 2;
  if (translateY <= 0) {
    let diff = translateY - result;
  } else {
    diff = -translateY + result;
  }
  let obj = { name };
  obj = {};
  obj = {};
  const items = [{ translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY }];
  obj.transform = items;
  obj.easing = arg1(arg6[0]).Easing.exp;
  obj[0] = obj;
  const obj2 = {};
  const obj3 = { translateX: `${translateX / 2}px`, translateY: "" + diff + "px", scale: "" + scaleX + "," + scaleY };
  const items1 = [obj3];
  obj2.transform = items1;
  obj[50] = obj2;
  const items2 = [{ "Bool(false)": "construct", "Bool(false)": "isArray", "Bool(false)": "isArray" }];
  obj[100] = { transform: items2 };
  obj.style = obj;
  obj.duration = 300;
  return obj;
};
