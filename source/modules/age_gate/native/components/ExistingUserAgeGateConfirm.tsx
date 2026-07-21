// Module ID: 15860
// Function ID: 121384
// Name: ExistingUserAgeGateConfirm
// Dependencies: []
// Exports: default

// Module 15860 (ExistingUserAgeGateConfirm)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
const HelpdeskArticles = arg1(dependencyMap[4]).HelpdeskArticles;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
let closure_10 = arg1(dependencyMap[6]).createStyles({ container: {}, header: {}, body: {}, buttonWrapper: { width: "100%" } });
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGateConfirm.tsx");

export default function ExistingUserAgeGateConfirm(age) {
  const arg1 = age.onConfirm;
  let importDefault;
  let closure_2;
  function _handleConfirm() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = _handleConfirm(tmp);
    const _handleConfirm = obj;
    return obj(...arguments);
  }
  const tmp = callback4();
  let obj = arg1(closure_2[7]);
  importDefault = obj.useNavigation();
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  closure_2 = tmp2[1];
  obj = { top: true, style: tmp.container };
  obj = { style: tmp.header };
  const intl = arg1(closure_2[10]).intl;
  obj.children = intl.format(arg1(closure_2[10]).t.wumolR, { age: age.age });
  const items = [callback2(arg1(closure_2[9]).Text, obj), , ];
  const obj1 = { delete: 1, dispatch: 1, raw: null, style: tmp.body };
  const intl2 = arg1(closure_2[10]).intl;
  const obj2 = { helpURL: importDefault(closure_2[12]).getArticleURL(HelpdeskArticles.AGE_GATE) };
  obj1.children = intl2.format(arg1(closure_2[10]).t.n3QjDE, obj2);
  items[1] = callback2(arg1(closure_2[11]).TextWithIOSLinkWorkaround, obj1);
  const obj3 = { style: tmp.buttonWrapper };
  const obj4 = { loading: first, disabled: first };
  const intl3 = arg1(closure_2[10]).intl;
  obj4.text = intl3.string(arg1(closure_2[10]).t.6tahin);
  obj4.onPress = function handleConfirm() {
    return _handleConfirm(...arguments);
  };
  obj4.grow = true;
  obj3.children = callback2(arg1(closure_2[13]).Button, obj4);
  items[2] = callback2(View, obj3);
  obj.children = items;
  return callback3(arg1(closure_2[8]).SafeAreaPaddingView, obj);
};
