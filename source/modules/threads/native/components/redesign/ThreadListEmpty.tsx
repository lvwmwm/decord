// Module ID: 15274
// Function ID: 115325
// Dependencies: []

// Module 15274
const View = arg1(dependencyMap[1]).View;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let obj = { container: {} };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE, borderRadius: importDefault(dependencyMap[4]).radii.round, padding: 12 };
obj.iconWrapper = obj;
obj.title = { "Bool(false)": "<string:2255552513>", "Bool(false)": "<string:16777216>", "Bool(false)": "%MapPrototype%" };
obj.subtext = {};
let closure_6 = arg1(dependencyMap[3]).createStyles(obj);
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo((onCreateThreadPress) => {
  onCreateThreadPress = onCreateThreadPress.onCreateThreadPress;
  const tmp = callback2();
  let obj = { style: tmp.container };
  obj = { style: tmp.iconWrapper };
  obj = { source: importDefault(dependencyMap[6]), size: arg1(dependencyMap[5]).Icon.Sizes.MEDIUM };
  obj.children = callback(arg1(dependencyMap[5]).Icon, obj);
  const items = [callback(View, obj), , , ];
  const obj1 = { style: tmp.title };
  const intl = arg1(dependencyMap[8]).intl;
  obj1.children = intl.string(arg1(dependencyMap[8]).t.HgTQ8p);
  items[1] = callback(arg1(dependencyMap[7]).Text, obj1);
  const obj2 = { listener: "png", listenerType: true, passive: "/assets/design/components/Illustration/native/redesign/generated/images", once: 254, style: tmp.subtext };
  const intl2 = arg1(dependencyMap[8]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[8]).t.jmq9GC);
  items[2] = callback(arg1(dependencyMap[7]).Text, obj2);
  let tmp4 = null != onCreateThreadPress;
  if (tmp4) {
    const obj3 = { onPress: onCreateThreadPress };
    const intl3 = arg1(dependencyMap[8]).intl;
    obj3.text = intl3.string(arg1(dependencyMap[8]).t.rBIGBL);
    tmp4 = callback(arg1(dependencyMap[9]).Button, obj3);
  }
  items[3] = tmp4;
  obj.children = items;
  return closure_5(View, obj);
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/threads/native/components/redesign/ThreadListEmpty.tsx");

export default memoResult;
