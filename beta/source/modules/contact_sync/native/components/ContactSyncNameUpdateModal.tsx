// Module ID: 14381
// Function ID: 14382
// Name: ContactSyncNameUpdateModal
// Dependencies: [5, 32, 19, 17, 12175, 21, 5039, 4836, 576, 5994, 12177, 12181, 4528, 1115, 5909, 12194, 5936, 6421, 2]
// Exports: default

// Module 14381 (ContactSyncNameUpdateModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import Navigator from "Navigator" /* 6421 */;
import ContactSyncConstants from "ContactSyncConstants" /* 12175 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import NavigatorHeader_mod from "NavigatorHeader" /* 5936 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c4, closure_0;

let NavigatorHeader;
let obj2;
function onClose() {
  const arr = ModalActionCreatorsDefault;
  arr.pop();
}
function ContactSyncNameInputScreen() {
  let str;
  let tmp6;
  function onNext() {
    return obj(...arguments);
  }
  let obj = function _onNext() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_1;
      let intl;
      closure_0 = arg0;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2_0(true);
              c3 = 1;
              obj3 = tmp(c2[11]);
              c2 = 2;
              c4 = 1;
              const obj5 = { value: obj3.updateName(closure_0), done: false };
              return obj5;
            }
          } else {
            if (1 === tmp4) {
              c3 = 0;
              const obj6 = { key: "ERROR_GENERIC_TITLE", content: intl.string(closure_0(c2[13]).t.R0RpRX), icon: tmp(c2[14]) };
              const open = tmp(c2[12]).open;
              const tmp13 = tmp(c2[12]);
              intl = closure_0(c2[13]).intl;
              open(obj6);
              closure_129_0(false);
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_129_0(false);
              closure_1_9();
              c3 = 0;
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp27) {
          if (0 === c3) {
            c4 = 3;
            throw tmp27;
          } else {
            c2 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_10();
  obj = require("ContactSyncUtils");
  const contactSyncAccount = obj.useContactSyncAccount();
  const tmp3 = _slicedToArray(react.useState(false), 2);
  _require = tmp3[1];
  const tmp4 = jsx;
  let obj2 = { style: tmp.container, children: tmp4(tmp6, obj3) };
  obj3 = {
    onNext,
    onRemoveName() {
      return onNext(null);
    },
    loading: tmp3[0],
    initialName: str
  };
  str = undefined;
  const tmp5 = View;
  tmp6 = onNext(obj[15]);
  if (contactSyncAccount != null) {
    str = contactSyncAccount.name;
  }
  if (str == null) {
    str = "";
  }
  return tmp4(tmp5, obj2);
}
const View = react_native.View;
const ContactSyncScenes = ContactSyncConstants.ContactSyncScenes;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32 };
let closure_10 = createStyles.createStyles(obj);
let obj3 = {};
let obj4 = {
  render() {
    return <ContactSyncNameInputScreen />;
  },
  ignoreKeyboard: true,
  fullscreen: true,
  headerLeft: NavigatorHeader.getHeaderCloseButton(onClose),
  title: ""
};
const NAME_INPUT = ContactSyncScenes.NAME_INPUT;
NavigatorHeader = NavigatorHeader_mod;
obj3[NAME_INPUT] = obj4;
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncNameUpdateModal.tsx");

export default function ContactSyncNameUpdateModal() {
  return jsx(Navigator.Navigator, { initialRouteName: ContactSyncScenes.NAME_INPUT, screens: obj3 });
};
