// Module ID: 9553
// Function ID: 74439
// Name: ForumComposerHeader
// Dependencies: []
// Exports: default

// Module 9553 (ForumComposerHeader)
importAll(dependencyMap[0]);
({ StyleSheet: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles((height) => {
  let obj = { headerBar: obj, headerBarContent: {} };
  obj = { height };
  obj = { marginHorizontal: importDefault(dependencyMap[4]).space.PX_16 };
  obj.headerBarText = obj;
  const obj1 = {};
  const merged = Object.assign(closure_3.absoluteFillObject);
  obj1["height"] = closure_3.hairlineWidth;
  obj1["backgroundColor"] = importDefault(dependencyMap[4]).colors.BORDER_SUBTLE;
  obj1["top"] = undefined;
  obj.headerBarSeparator = obj1;
  obj.button = { paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16 };
  return obj;
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/forums/native/composer/ForumComposerHeader.tsx");

export default function ForumComposerHeader(height) {
  let channel;
  let onGuidelinesPress;
  let submitting;
  let title;
  ({ title, channel, onClose: closure_0 } = height);
  ({ submitting, onGuidelinesPress } = height);
  const tmp = callback2(height.height);
  let obj = { style: tmp.headerBar };
  obj = { style: tmp.button, accessibilityRole: "button" };
  const intl = arg1(dependencyMap[7]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[7]).t.cpT0Cq);
  obj.disabled = submitting;
  obj.onPress = function onPress() {
    return callback(false);
  };
  obj.children = callback(arg1(dependencyMap[8]).XSmallIcon, {});
  const items = [callback(arg1(dependencyMap[6]).PressableOpacity, obj), , , ];
  obj = { style: tmp.headerBarContent };
  const items1 = [callback(arg1(dependencyMap[9]).ForumIcon, { size: "sm" }), ];
  const obj1 = { style: tmp.headerBarText };
  const obj2 = {};
  if ("" === title) {
    const intl2 = arg1(dependencyMap[7]).intl;
    title = intl2.string(arg1(dependencyMap[7]).t.7EjFCk);
  }
  obj2.children = title;
  const items2 = [callback(arg1(dependencyMap[10]).Text, obj2), callback(arg1(dependencyMap[10]).Text, { children: importDefault(dependencyMap[5])(channel) })];
  obj1.children = items2;
  items1[1] = closure_6(closure_4, obj1);
  obj.children = items1;
  items[1] = closure_6(closure_4, obj);
  let length;
  if (null != channel) {
    length = channel.topic.length;
  }
  let tmp9 = null;
  if (length > 0) {
    const obj3 = { accessibilityRole: "button" };
    const intl3 = arg1(dependencyMap[7]).intl;
    obj3.accessibilityLabel = intl3.string(arg1(dependencyMap[7]).t.yR6HwZ);
    obj3.style = tmp.button;
    obj3.onPress = onGuidelinesPress;
    obj3.children = callback(arg1(dependencyMap[11]).BookCheckIcon, {});
    tmp9 = callback(arg1(dependencyMap[6]).PressableOpacity, obj3);
  }
  items[2] = tmp9;
  items[3] = callback(closure_4, { style: tmp.headerBarSeparator });
  obj.children = items;
  return closure_6(closure_4, obj);
};
