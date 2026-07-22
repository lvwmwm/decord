// Module ID: 5182
// Function ID: 45001
// Name: FormIcon
// Dependencies: []
// Exports: default

// Module 5182 (FormIcon)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_3 = arg1(dependencyMap[2]).createStyles({ icon: { opacity: 0.6 } });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/void/Form/native/FormIcon.tsx");

export default function FormIcon(color) {
  let style;
  let themedColor;
  ({ style, themedColor } = color);
  let obj = { "Null": "spring", "Null": 0.4, "Null": 1 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(color, obj);
  const tmp3 = callback();
  if (null != themedColor) {
    obj = {};
    const items = [tmp3.icon, style];
    obj.style = items;
    obj.themedColor = themedColor;
    const merged1 = Object.assign(merged);
    let tmp10 = jsx(arg1(dependencyMap[3]).ThemedIcon, obj);
  } else {
    obj = {};
    const items1 = [tmp3.icon, style];
    obj.style = items1;
    obj.color = color.color;
    const merged2 = Object.assign(merged);
    tmp10 = jsx(arg1(dependencyMap[3]).Icon, obj);
  }
  return tmp10;
};
