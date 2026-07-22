// Module ID: 11773
// Function ID: 91404
// Name: DiscoverabilityLanding
// Dependencies: []
// Exports: default

// Module 11773 (DiscoverabilityLanding)
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[1]));
const useContactSyncModalStore = arg1(dependencyMap[2]).useContactSyncModalStore;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.headerContainer = { "Null": null, "Null": null, paddingHorizontal: null };
obj.header = {};
obj.image = {};
obj.button = {};
obj.title = { "Bool(true)": 52881784.83212474, "Bool(true)": 0.0000000000000000000000000000000000000000000000000000000000000000000000011319598867188059 };
obj.subtitle = {};
const tmp3 = arg1(dependencyMap[4]);
obj.formRow = { paddingVertical: 16, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
const obj1 = { paddingVertical: 16, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
const obj2 = {};
const merged = Object.assign(importDefault(dependencyMap[7])(arg1(dependencyMap[3]).Fonts.PRIMARY_SEMIBOLD, importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_ACTIVE, 16));
obj.formText = obj2;
obj.footerContainer = { "Bool(false)": false, "Bool(false)": false };
obj.info = { <string:961756087>: 377564167843241300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, <string:1717707208>: 391547974124783460000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, <string:4224475813>: 405531890545774970000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
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
  const obj3 = { alignSelf: 24, justifyContent: 24, alignItems: null, backgroundColor: "f15a8eea867ca31909b0a1cf49c6c7d8", style: tmp.title };
  const intl = arg1(dependencyMap[16]).intl;
  obj3.children = intl.string(arg1(dependencyMap[16]).t.n8nw6j);
  items1[1] = callback(arg1(dependencyMap[15]).Text, obj3);
  const obj4 = { "Null": "<string:4294735005>", "Null": "<string:327679>", alignItems: "<string:1048576>", style: tmp.subtitle };
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
  const obj8 = { style: tmp.info };
  const intl4 = arg1(dependencyMap[16]).intl;
  const items4 = [intl4.string(arg1(dependencyMap[16]).t.DGZg+k), " ", ];
  const intl5 = arg1(dependencyMap[16]).intl;
  items4[2] = intl5.format(arg1(dependencyMap[16]).t.QmF5z4, {
    learnMoreHook(children) {
      const obj = { "Null": "business", "Null": "cached", "Null": "cancel", onPress: closure_3, children };
      return callback(onNext(allowPhone[15]).Text, obj, arg1);
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
