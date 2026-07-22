// Module ID: 11415
// Function ID: 88772
// Name: TouchableBackground
// Dependencies: []
// Exports: default

// Module 11415 (TouchableBackground)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importAll(dependencyMap[1]);
({ View: closure_2, Pressable: closure_3 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj.default = obj;
let closure_5 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("components_native/common/TouchableBackground.tsx");

export default function TouchableBackground(onPressOut) {
  let activeBackgroundColor;
  let children;
  let onPressIn;
  let pressableStyle;
  let style;
  ({ activeBackgroundColor, onPressIn } = onPressOut);
  let callback = onPressIn;
  onPressOut = onPressOut.onPressOut;
  const React = onPressOut;
  let obj = { withMutualGuilds: "Text", withMutualFriendsCount: "resizeMode", icon: "from", label: "Array", arrow: "isArray", accessibilityRole: "braintreemasterpasslanding" };
  ({ pressableStyle, style, children } = onPressOut);
  Object.setPrototypeOf(null);
  const merged = Object.assign(onPressOut, obj);
  const tmp4 = callback(React.useState(false), 2);
  let first = tmp4[0];
  let closure_2 = tmp4[1];
  const items = [onPressIn];
  const items1 = [onPressOut];
  callback = React.useCallback((arg0) => {
    callback(true);
    if (null != onPressIn) {
      onPressIn(arg0);
    }
  }, items);
  obj = { accessibilityRole: "button", style: pressableStyle };
  const callback1 = React.useCallback((arg0) => {
    if (null != onPressOut) {
      onPressOut(arg0);
    }
    callback(false);
  }, items1);
  const merged1 = Object.assign(merged);
  obj["onPressIn"] = callback;
  obj["onPressOut"] = callback1;
  obj = {};
  const items2 = [style, ];
  if (first) {
    const obj1 = {};
    if (null == activeBackgroundColor) {
      activeBackgroundColor = tmp3.default.backgroundColor;
    }
    obj1.backgroundColor = activeBackgroundColor;
    first = obj1;
  }
  items2[1] = first;
  obj.style = items2;
  obj.children = children;
  obj["children"] = <closure_2 {...obj} />;
  return <closure_3 {...obj} />;
};
