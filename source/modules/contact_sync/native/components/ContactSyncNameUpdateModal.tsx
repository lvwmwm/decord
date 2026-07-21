// Module ID: 13625
// Function ID: 103228
// Name: onClose
// Dependencies: []
// Exports: default

// Module 13625 (onClose)
function onClose() {
  let arr = importDefault(dependencyMap[6]);
  arr = arr.pop();
}
function ContactSyncNameInputScreen() {
  function onNext(arg0) {
    return _onNext(...arguments);
  }
  const importDefault = onNext;
  function _onNext() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _onNext = obj;
    return obj(...arguments);
  }
  let obj = callback(_onNext[10]);
  const contactSyncAccount = obj.useContactSyncAccount();
  const tmp3 = callback2(React.useState(false), 2);
  const callback = tmp3[1];
  obj = { style: callback3().container };
  obj = {
    onNext,
    onRemoveName() {
      return onNext(null);
    },
    loading: tmp3[0]
  };
  let name;
  const tmp = callback3();
  const tmp4 = jsx;
  const tmp5 = View;
  const tmp6 = jsx;
  if (null != contactSyncAccount) {
    name = contactSyncAccount.name;
  }
  let str = "";
  if (null != name) {
    str = name;
  }
  obj.initialName = str;
  obj.children = tmp6(importDefault(_onNext[15]), obj);
  return tmp4(tmp5, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
const ContactSyncScenes = arg1(dependencyMap[4]).ContactSyncScenes;
const jsx = arg1(dependencyMap[5]).jsx;
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { "Bool(false)": "isArray", "Bool(false)": "accessibilityRole", "Bool(false)": "value", backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, paddingTop: arg1(dependencyMap[9]).NAV_BAR_HEIGHT + 32 };
obj.container = obj;
let closure_9 = obj.createStyles(obj);
const obj1 = {};
const obj2 = {
  "Bool(true)": -5486129289432938000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
  "Bool(true)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009127799431495717,
  "Bool(true)": -0.0000000000000000000000000000000000000009788013765565274,
  "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006312416750574173,
  "Bool(true)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007291122671433504,
  render() {
    return <ContactSyncNameInputScreen />;
  },
  headerLeft: arg1(dependencyMap[16]).getHeaderCloseButton(onClose)
};
obj1[ContactSyncScenes.NAME_INPUT] = obj2;
const obj6 = arg1(dependencyMap[16]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/contact_sync/native/components/ContactSyncNameUpdateModal.tsx");

export default function ContactSyncNameUpdateModal() {
  return jsx(arg1(dependencyMap[17]).Navigator, { initialRouteName: ContactSyncScenes.NAME_INPUT, screens: obj1 });
};
