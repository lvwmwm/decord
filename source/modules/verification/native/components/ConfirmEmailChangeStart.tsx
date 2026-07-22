// Module ID: 9183
// Function ID: 71931
// Name: ConfirmEmailChangeStart
// Dependencies: []
// Exports: default

// Module 9183 (ConfirmEmailChangeStart)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, Image: closure_7, ScrollView: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
let closure_12 = arg1(dependencyMap[6]).createStyles({ container: {}, image: { GifAutoPlay: "construct", lavender: "r", useShouldShowWishlistInDMGifting: "isArray" }, title: {}, body: {}, button: { name: "column", opacity: "flex-end" } });
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/verification/native/components/ConfirmEmailChangeStart.tsx");

export default function ConfirmEmailChangeStart() {
  const tmp = callback4();
  const arg1 = tmp;
  let obj = arg1(closure_2[7]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  let obj1 = arg1(closure_2[8]);
  const items = [closure_9];
  const stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp4 = callback(React.useState(false), 2);
  closure_2 = tmp4[1];
  // CreateGeneratorClosureLongIndex (0x67)
  [][0] = navigation;
  if (null == stateFromStores) {
    return null;
  } else {
    const intl = arg1(closure_2[13]).intl;
    obj = { oldEmail: stateFromStores.email };
    obj = { "Bool(true)": true, "Bool(true)": true };
    obj1 = { style: tmp.container };
    const obj2 = { style: tmp.image, source: importDefault(closure_2[14]) };
    const items1 = [callback2(closure_7, obj2), , , ];
    const obj3 = { alignSelf: 24, justifyContent: 24, alignItems: null, backgroundColor: "f15a8eea867ca31909b0a1cf49c6c7d8", style: tmp.title };
    const intl2 = arg1(closure_2[13]).intl;
    obj3.children = intl2.string(arg1(closure_2[13]).t.dQ71Wa);
    items1[1] = callback2(arg1(closure_2[15]).Text, obj3);
    items1[2] = intl.format(arg1(closure_2[13]).t.oMFSgi, obj).map((children) => callback(tmp(closure_2[15]).Text, { style: tmp.body, children }, arg1));
    const obj4 = { style: tmp.button };
    const obj5 = {};
    const intl3 = arg1(closure_2[13]).intl;
    obj5.text = intl3.string(arg1(closure_2[13]).t.rXV81H);
    obj5.onPress = tmp5;
    obj5.loading = tmp4[0];
    obj5.grow = true;
    obj4.children = callback2(arg1(closure_2[16]).Button, obj5);
    items1[3] = callback2(closure_6, obj4);
    obj1.children = items1;
    obj.children = callback3(closure_6, obj1);
    return callback2(closure_8, obj);
  }
};
