// Module ID: 13799
// Function ID: 105763
// Name: onClose
// Dependencies: [5, 57, 31, 27, 11734, 33, 4337, 4130, 689, 5084, 11736, 11740, 3831, 1212, 9212, 11753, 5087, 5517, 2]
// Exports: default

// Module 13799 (onClose)
import jsxProd from "jsxProd";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { ContactSyncScenes } from "ContactSyncLandingPage";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import HeaderBackImage from "HeaderBackImage";

const require = arg1;
function onClose() {
  let arr = importDefault(4337);
  arr = arr.pop();
}
function ContactSyncNameInputScreen() {
  function onNext(arg0) {
    return _onNext(...arguments);
  }
  function _onNext() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = outer1_3(tmp);
    return obj(...arguments);
  }
  let obj = _require(_onNext[10]);
  const contactSyncAccount = obj.useContactSyncAccount();
  const tmp3 = callback(React.useState(false), 2);
  _require = tmp3[1];
  obj = { style: _createForOfIteratorHelperLoose().container };
  obj = {
    onNext,
    onRemoveName(arg0) {
      return onNext(null);
    },
    loading: tmp3[0]
  };
  let name;
  const tmp = _createForOfIteratorHelperLoose();
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
  obj.children = tmp6(onNext(_onNext[15]), obj);
  return tmp4(tmp5, obj);
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, justifyContent: "center", paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = {};
const obj2 = {
  render() {
    return <ContactSyncNameInputScreen />;
  },
  ignoreKeyboard: true,
  fullscreen: true,
  headerLeft: null,
  title: ""
};
obj2.headerLeft = HeaderBackImage.getHeaderCloseButton(onClose);
obj1[ContactSyncScenes.NAME_INPUT] = obj2;
const result = require("result").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncNameUpdateModal.tsx");

export default function ContactSyncNameUpdateModal() {
  return jsx(require(5517) /* NavigationStack */.Navigator, { initialRouteName: ContactSyncScenes.NAME_INPUT, screens: obj1 });
};
