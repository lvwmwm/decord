// Module ID: 1673
// Function ID: 18558
// Name: FadingTransition
// Dependencies: []

// Module 1673 (FadingTransition)
arg5.FadingTransition = function FadingTransition(name) {
  let scaleX;
  let scaleY;
  let translateX;
  let translateY;
  ({ translateX, translateY, scaleX, scaleY } = arg1);
  let obj = { name };
  obj = {};
  obj = { opacity: 1 };
  const items = [{ translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY }];
  obj.transform = items;
  obj[0] = obj;
  const obj2 = { opacity: 0 };
  const obj1 = { translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY };
  const items1 = [{ translateX: "" + translateX + "px", translateY: "" + translateY + "px", scale: "" + scaleX + "," + scaleY }];
  obj2.transform = items1;
  obj[20] = obj2;
  const items2 = [{ "Null": null, "Null": null, "Null": null }];
  obj[60] = { opacity: 0, transform: items2 };
  const items3 = [{ "Null": null, "Null": null, "Null": null }];
  obj[100] = { opacity: 1, transform: items3 };
  obj.style = obj;
  obj.duration = 300;
  return obj;
};
