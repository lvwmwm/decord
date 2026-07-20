// Module ID: 14633
// Function ID: 110371
// Name: ExternalLink
// Dependencies: []
// Exports: default

// Module 14633 (ExternalLink)
let closure_3 = importAll(dependencyMap[0]);
({ Linking: closure_4, ScrollView: closure_5, View: closure_6 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_9 = arg1(dependencyMap[3]).createStyles((arg0) => {
  let obj = {};
  obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
  let str = "center";
  if (arg0) {
    str = "space-between";
  }
  obj.justifyContent = str;
  const space = importDefault(dependencyMap[4]).space;
  obj.paddingLeft = arg0 ? space.PX_24 : space.PX_16;
  const space2 = importDefault(dependencyMap[4]).space;
  obj.paddingRight = arg0 ? space2.PX_24 : space2.PX_16;
  obj.container = obj;
  obj.description = { concat: -0.0014069081515246523, now: -0.0001058445630777106 };
  return obj;
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/auth/native/components/ExternalLink.tsx");

export default function ExternalLink(externalURL) {
  externalURL = externalURL.externalURL;
  const arg1 = externalURL;
  const tmp = callback3(importDefault(dependencyMap[5])());
  let obj = arg1(dependencyMap[6]);
  const importDefault = obj.useNavigation();
  const items = [externalURL];
  const callback = React.useCallback(() => {
    closure_4.openURL(externalURL);
  }, items);
  const dependencyMap = callback;
  const items1 = [callback];
  const effect = React.useEffect(() => {
    callback();
  }, items1);
  obj = { "Bool(true)": "uppercase", "Bool(true)": 0.5, contentContainerStyle: tmp.container };
  obj = {};
  const obj1 = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj1.children = intl.string(arg1(dependencyMap[8]).t.0Niu/F);
  const items2 = [callback(importDefault(dependencyMap[7]), obj1), ];
  const obj2 = { style: tmp.description };
  const intl2 = arg1(dependencyMap[8]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[8]).t.nToOEg);
  items2[1] = callback(arg1(dependencyMap[9]).Text, obj2);
  obj.children = items2;
  const items3 = [callback2(closure_6, obj), ];
  const obj3 = {};
  const obj4 = { 312886: "fa1758b003badba48305d2353659aabf", 1673594449: "ko.messages.fa1758b003badba48305d2353659aabf.compiled.messages" };
  const intl3 = arg1(dependencyMap[8]).intl;
  obj4.text = intl3.string(arg1(dependencyMap[8]).t.2ixEBi);
  obj4.onPress = callback;
  const items4 = [callback(arg1(dependencyMap[11]).Button, obj4), ];
  const obj5 = {};
  const intl4 = arg1(dependencyMap[8]).intl;
  obj5.text = intl4.string(arg1(dependencyMap[8]).t.j3cG2p);
  obj5.onPress = function onPress() {
    return arr.pop();
  };
  items4[1] = callback(arg1(dependencyMap[11]).Button, obj5);
  obj3.children = items4;
  items3[1] = callback2(arg1(dependencyMap[10]).ButtonGroup, obj3);
  obj.children = items3;
  return callback2(closure_5, obj);
};
