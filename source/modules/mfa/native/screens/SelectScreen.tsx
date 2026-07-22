// Module ID: 14526
// Function ID: 109388
// Name: SelectScreen
// Dependencies: []
// Exports: default

// Module 14526 (SelectScreen)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const SELECT_NAMES = arg1(dependencyMap[2]).SELECT_NAMES;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[4]).createStyles((arg0) => {
  let obj = { container: { <string:4224476331>: null, <string:1415819756>: null } };
  obj = { 1314564412: -352059390, 1011982433: 141754370, 1375429033: 671088640, -1419704179: 67108864, 1385855313: 1358954496 };
  const NAV_BAR_HEIGHT = arg1(dependencyMap[5]).NAV_BAR_HEIGHT;
  if (arg0) {
    let diff = NAV_BAR_HEIGHT;
  } else {
    diff = NAV_BAR_HEIGHT - arg1(dependencyMap[5]).STATUS_BAR_HEIGHT;
  }
  obj.marginTop = diff;
  obj.selectContainer = obj;
  return obj;
});
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/mfa/native/screens/SelectScreen.tsx");

export default function SelectScreen(mfaChallenge) {
  const arg1 = mfaChallenge;
  const tmp = importDefault(dependencyMap[7])();
  const tmp2 = callback3(tmp);
  let obj = arg1(dependencyMap[8]);
  const importDefault = obj.useNavigation();
  obj = { top: !tmp, style: tmp2.container };
  obj = { style: tmp2.selectContainer };
  const obj1 = { variant: "heading-xl/extrabold" };
  const intl = arg1(dependencyMap[11]).intl;
  obj1.children = intl.string(arg1(dependencyMap[11]).t.S9b9bX);
  const items = [callback(arg1(dependencyMap[10]).Text, obj1), ];
  const obj2 = { variant: "text-sm/medium" };
  const intl2 = arg1(dependencyMap[11]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[11]).t.Jz1lXO);
  items[1] = callback(arg1(dependencyMap[10]).Text, obj2);
  obj.children = items;
  const items1 = [callback2(View, obj), ];
  const methods = mfaChallenge.mfaChallenge.methods;
  items1[1] = callback(View, {
    style: {},
    children: methods.map((type) => function getOptionButton(arg0, type, closure_1) {
      return callback(arg0(closure_1[6]).RowButton, {
        label: closure_4[type.type],
        onPress() {
          arg2.push(arg1.type, arg0);
        }
      }, type.type);
    }(type, type, closure_1))
  });
  obj.children = items1;
  return callback2(arg1(dependencyMap[9]).SafeAreaPaddingView, obj);
};
