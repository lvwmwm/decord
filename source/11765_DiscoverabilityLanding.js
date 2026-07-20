// Module ID: 11765
// Function ID: 91356
// Name: DiscoverabilityLanding
// Dependencies: []
// Exports: default

// Module 11765 (DiscoverabilityLanding)
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[1]));
const useContactSyncModalStore = arg1(dependencyMap[2]).useContactSyncModalStore;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.headerContainer = { <string:2771800403>: null, <string:2857660001>: null, <string:2949132294>: null };
obj.header = { "Null": "center", "Null": "center" };
obj.image = { aa: 0.3, af: "SlideOutLeft" };
obj.button = { color: true, lineHeight: true, flexGrow: true };
obj.title = { concat: 52881784.83212474, now: 0.0000000000000000000000000000000000000000000000000000000000000000000000011319598867188059 };
obj.subtitle = { concat: -0.0014069081515246523, now: -0.0001058445630777106 };
const tmp3 = arg1(dependencyMap[4]);
obj.formRow = { paddingVertical: 16, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
const obj1 = { paddingVertical: 16, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
const obj2 = {};
const merged = Object.assign(importDefault(dependencyMap[7])(arg1(dependencyMap[3]).Fonts.PRIMARY_SEMIBOLD, importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_ACTIVE, 16));
obj.formText = obj2;
obj.footerContainer = {};
obj.info = { 1693456300: "Array", 995048930: "isArray", -1991099551: "body" };
let closure_9 = obj.createStyles(obj);
const importDefaultResult = importDefault(dependencyMap[7]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/nuf/native/components/DiscoverabilityLanding.tsx");

export default function DiscoverabilityLanding(onNext) {
  const tmp = callback3();
  const arg1 = onNext.onNext;
  const tmp2 = useContactSyncModalStore();
  let allowEmail = tmp2.allowEmail;
  const importDefault = allowEmail;
  const allowPhone = tmp2.allowPhone;
  const dependencyMap = allowPhone;
  const items = [allowPhone, allowEmail];
  const React = React.useCallback(() => {
    let obj = allowEmail(allowPhone[9]);
    obj = { allowPhone, allowEmail };
    obj.openLazy(onNext(allowPhone[11])(allowPhone[10], allowPhone.paths), "Discoverability Landing", obj);
  }, items);
  let obj = { style: tmp.container };
  obj = { paddingTop: arg1(dependencyMap[12]).NAV_BAR_HEIGHT + 32, paddingBottom: importDefault(dependencyMap[8])().bottom + 16 };
  obj.contentContainerStyle = obj;
  obj = { style: tmp.headerContainer };
  const obj1 = { style: tmp.header };
  const obj2 = { resizeMode: "contain", style: tmp.image, source: importDefault(dependencyMap[14]) };
  const items1 = [callback(importDefault(dependencyMap[13]), obj2), , ];
  const obj3 = { 0: 24, 9223372036854775807: 24, 0: null, -9223372036854775808: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.title };
  const intl = arg1(dependencyMap[16]).intl;
  obj3.children = intl.string(arg1(dependencyMap[16]).t.n8nw6j);
  items1[1] = callback(arg1(dependencyMap[15]).Text, obj3);
  const obj4 = { Promise: true, marginTop: true, flags: true, style: tmp.subtitle };
  const intl2 = arg1(dependencyMap[16]).intl;
  obj4.children = intl2.string(arg1(dependencyMap[16]).t.KMW0kP);
  items1[2] = callback(arg1(dependencyMap[15]).Text, obj4);
  obj1.children = items1;
  obj.children = callback2(closure_4, obj1);
  const items2 = [callback(closure_4, obj), ];
  const obj5 = { style: tmp.footerContainer };
  const obj6 = { DEPRECATED_style: tmp.formRow };
  const obj7 = { style: tmp.formText };
  const intl3 = arg1(dependencyMap[16]).intl;
  obj7.text = intl3.string(arg1(dependencyMap[16]).t.gMUgpv);
  obj6.label = callback(arg1(dependencyMap[17]).FormRow.Label, obj7);
  obj6.onPress = arg1(dependencyMap[18]).toggleDiscoverabilityForUser;
  if (!allowEmail) {
    allowEmail = allowPhone;
  }
  obj6.selected = allowEmail;
  const items3 = [callback(arg1(dependencyMap[17]).FormCheckboxRow, obj6), , ];
  const obj8 = { Promise: 1203128676, marginTop: 1919418369, flags: 994836481, style: tmp.info };
  const intl4 = arg1(dependencyMap[16]).intl;
  const items4 = [intl4.string(arg1(dependencyMap[16]).t.DGZg+k), " ", ];
  const intl5 = arg1(dependencyMap[16]).intl;
  items4[2] = intl5.format(arg1(dependencyMap[16]).t.QmF5z4, {
    learnMoreHook(children) {
      return callback(onNext(allowPhone[15]).Text, { onPress: closure_3, children }, arg1);
    }
  });
  obj8.children = items4;
  items3[1] = callback2(arg1(dependencyMap[15]).Text, obj8);
  const obj10 = { style: tmp.button };
  const obj11 = {};
  const intl6 = arg1(dependencyMap[16]).intl;
  obj11.text = intl6.string(arg1(dependencyMap[16]).t.PDTjLN);
  obj11.onPress = function onPress() {
    return onNext();
  };
  obj11.grow = true;
  obj10.children = callback(arg1(dependencyMap[19]).Button, obj11);
  items3[2] = callback(closure_4, obj10);
  obj5.children = items3;
  items2[1] = callback2(closure_4, obj5);
  obj.children = items2;
  return callback2(closure_5, obj);
};
