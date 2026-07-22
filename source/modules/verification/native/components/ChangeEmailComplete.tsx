// Module ID: 9228
// Function ID: 72173
// Name: handlePress
// Dependencies: []
// Exports: default

// Module 9228 (handlePress)
function handlePress() {
  resetChangeEmailStore();
  importDefault(dependencyMap[6]).close();
}
importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[1]));
const resetChangeEmailStore = arg1(dependencyMap[2]).resetChangeEmailStore;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { burst: "<string:1515323394>", normal: "<string:1642985044>", emoji: "<string:4005446040>", me: "<string:1685848065>", me_burst: "<string:167772160>", paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, paddingBottom: importDefault(dependencyMap[5]).space.PX_16 };
obj.contentContainer = obj;
obj.image = { GifAutoPlay: "construct", lavender: "r", useShouldShowWishlistInDMGifting: "isArray" };
obj.title = { textAlign: "center" };
obj.body = { textAlign: "center" };
obj.bodyInner = { gap: 2 };
const tmp4 = arg1(dependencyMap[3]);
const merged = Object.assign(importDefault(dependencyMap[5]).shadows.SHADOW_LOW);
obj.tooltip = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[5]).radii.sm, borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
let closure_9 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[5]).radii.sm, borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/verification/native/components/ChangeEmailComplete.tsx");

export default function ChangeEmailComplete(email) {
  const tmp = callback3();
  let obj = { "Bool(true)": true, "Bool(true)": true, contentContainerStyle: tmp.contentContainer };
  obj = { style: tmp.image, source: importDefault(dependencyMap[7]) };
  const items = [callback(closure_4, obj), , , ];
  obj = { style: tmp.bodyInner };
  const obj1 = { alignSelf: 24, justifyContent: 24, alignItems: null, backgroundColor: "f15a8eea867ca31909b0a1cf49c6c7d8", style: tmp.title };
  const intl = arg1(dependencyMap[9]).intl;
  obj1.children = intl.string(arg1(dependencyMap[9]).t.8O+nF7);
  const items1 = [callback(arg1(dependencyMap[8]).Text, obj1), ];
  const obj2 = { style: tmp.body };
  const intl2 = arg1(dependencyMap[9]).intl;
  obj2.children = intl2.format(arg1(dependencyMap[9]).t.Zvx0O3, { email: email.email });
  items1[1] = callback(arg1(dependencyMap[8]).Text, obj2);
  obj.children = items1;
  items[1] = callback2(closure_3, obj);
  const obj3 = { style: tmp.tooltip, variant: "text-sm/normal" };
  const intl3 = arg1(dependencyMap[9]).intl;
  obj3.children = intl3.string(arg1(dependencyMap[9]).t.yb7itQ);
  items[2] = callback(arg1(dependencyMap[8]).Text, obj3);
  const obj4 = {};
  const intl4 = arg1(dependencyMap[9]).intl;
  obj4.text = intl4.string(arg1(dependencyMap[9]).t.BddRzS);
  obj4.onPress = handlePress;
  obj4.grow = true;
  items[3] = callback(arg1(dependencyMap[10]).Button, obj4);
  obj.children = items;
  return callback2(closure_5, obj);
};
