// Module ID: 8953
// Function ID: 70660
// Name: error
// Dependencies: []
// Exports: default

// Module 8953 (error)
importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { padding: -165, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWER, paddingBottom: -45, type: 0, userId: "gr", isStranger: null };
obj.container = obj;
obj.inner = {};
obj.text = {};
const tmp4 = arg1(dependencyMap[2]);
obj.image = { tintColor: importDefault(dependencyMap[4]).colors.TEXT_FEEDBACK_WARNING };
let closure_7 = obj.createStyles(obj);
const obj1 = { tintColor: importDefault(dependencyMap[4]).colors.TEXT_FEEDBACK_WARNING };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/oauth2/native/ErrorResult.tsx");

export default function ErrorResult(error) {
  error = error.error;
  const tmp = callback2();
  let obj = { bottom: true, style: tmp.container };
  obj = { style: tmp.inner };
  obj = { source: importDefault(dependencyMap[6]), style: tmp.image };
  const items = [callback(closure_3, obj), ];
  const obj1 = { style: tmp.text, variant: "text-md/medium" };
  if (null == error) {
    const intl = arg1(dependencyMap[8]).intl;
    error = intl.string(arg1(dependencyMap[8]).t.mqn873);
  }
  obj1.children = error;
  items[1] = callback(arg1(dependencyMap[7]).Text, obj1);
  obj.children = items;
  const items1 = [closure_6(closure_4, obj), ];
  let tmp7 = null;
  if (!error.hideFooter) {
    const obj2 = { size: "lg" };
    const intl2 = arg1(dependencyMap[8]).intl;
    obj2.text = intl2.string(arg1(dependencyMap[8]).t.cpT0Cq);
    obj2.onPress = function onPress() {
      return callback(closure_2[10]).pop();
    };
    tmp7 = callback(arg1(dependencyMap[9]).Button, obj2);
  }
  items1[1] = tmp7;
  obj.children = items1;
  return closure_6(arg1(dependencyMap[5]).SafeAreaPaddingView, obj);
};
