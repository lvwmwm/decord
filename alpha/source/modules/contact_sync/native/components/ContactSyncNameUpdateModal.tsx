// Module ID: 14357
// Function ID: 14358
// Name: ContactSyncNameUpdateModal
// Dependencies: [5, 32, 19, 17, 12157, 21, 5032, 4829, 576, 5989, 12159, 12163, 4525, 1115, 5904, 12176, 5931, 6416, 2]
// Exports: default

// Module 14357 (ContactSyncNameUpdateModal)
import nativeDefault from "native" /* 576 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import Navigator from "Navigator" /* 6416 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function onClose() {
  ModalActionCreatorsDefault.pop();
}
function ContactSyncNameInputScreen() {
  function onNext() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  dependencyMap = async function _onNext(arg0, arg1) {
    _require(true);
    await tmp3(12163).updateName(closure_0);
    if (1 === tmp7) {
      c3 = 0;
      const obj7 = { key: "ERROR_GENERIC_TITLE", content: null, icon: null };
      const intl = closure_0(1115).intl;
      obj7.content = intl.string(closure_0(1115).t.R0RpRX);
      obj7.icon = tmp3(5904);
      tmp3(4525).open(obj7);
      closure_129_0(false);
      c4 = 3;
      tmp3(4525);
    } else if (arg0 === 1) {
      c4 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      closure_129_0(false);
      onClose();
      c3 = 0;
    }
    return arg1;
  };
  const tmp = closure_10();
  const contactSyncAccount = require("ContactSyncUtils").useContactSyncAccount();
  const tmp3 = _slicedToArray(noop.useState(false), 2);
  _require = tmp3[1];
  const obj2 = { style: tmp.container, children: null };
  const obj3 = {
    onNext,
    onRemoveName() {
      return onNext(null);
    },
    loading: tmp3[0],
    initialName: null
  };
  let str;
  const obj = require("ContactSyncUtils");
  if (contactSyncAccount != null) {
    str = contactSyncAccount.name;
  }
  if (str == null) {
    str = "";
  }
  obj3.initialName = str;
  obj2.children = jsx(onNext(12176), {
    onNext,
    onRemoveName() {
      return onNext(null);
    },
    loading: tmp3[0],
    initialName: null
  });
  return <tmp5 style={tmp.container}>{null}</tmp5>;
}
const View = fn(17).View;
const ContactSyncScenes = fn(12157).ContactSyncScenes;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingTop: fn(5989).NAV_BAR_HEIGHT + 32 } };
let closure_10 = createStyles.createStyles(obj2);
const obj4 = {};
const obj5 = {
  render() {
    return <ContactSyncNameInputScreen />;
  },
  ignoreKeyboard: true,
  fullscreen: true,
  headerLeft: null,
  title: ""
};
const NavigatorHeader = fn(5931);
obj5.headerLeft = NavigatorHeader.getHeaderCloseButton(onClose);
obj4[ContactSyncScenes.NAME_INPUT] = obj5;
const size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncNameUpdateModal.tsx");

export default function ContactSyncNameUpdateModal() {
  return jsx(Navigator.Navigator, { initialRouteName: ContactSyncScenes.NAME_INPUT, screens: obj4 });
};
