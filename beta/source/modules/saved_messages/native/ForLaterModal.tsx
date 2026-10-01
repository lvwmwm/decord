// Module ID: 7287
// Function ID: 7288
// Name: ForLaterModal
// Dependencies: [19, 17, 21, 4836, 576, 1613, 1115, 7285, 5943, 7288, 1364, 5936, 5039, 12859, 2]
// Exports: default

// Module 7287 (ForLaterModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import HeaderShared from "HeaderShared" /* 7288 */;
import ForLaterScreenDefault from "ForLaterScreen" /* 12859 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { modal: obj2, headerLeftContainer: obj3, headerRightContainer: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderBottomWidth: 0, shadowColor: "transparent", height: "100%" };
createStyles = createStyles.createStyles;
obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj4 = { paddingRight: nativeDefault.space.PX_16 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterModal.tsx");

export default function ForLaterModal(type) {
  let aUXxzT;
  let items;
  let num;
  let title;
  let tmp4Result2;
  type = type.type;
  _require = undefined;
  const tmp = closure_6();
  const top = useSafeAreaInsetsDefault().top;
  const intl = require("intl").intl;
  const string = intl.string;
  if (type === require("SavedMessagesTypes").SavedMessageSortTypes.REMINDER) {
    aUXxzT = tmp4(1115).t.aUXxzT;
  } else {
    aUXxzT = tmp4(1115).t["2pAkDA"];
  }
  const stringResult = string(aUXxzT);
  _require = stringResult;
  let obj = { style: tmp.modal, children: items };
  const obj3 = {
    title: stringResult,
    headerTitle() {
      const obj = { title };
      return React3(HeaderShared.GenericHeaderTitle, obj);
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: num + nativeDefault.space.PX_8,
    headerLeft: tmp4Result2.getHeaderCloseButton(ModalActionCreatorsDefault.pop),
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null
  };
  const Header = tmp4(5943).Header;
  num = 0;
  const tmp4Result = require("PlatformUtils");
  const tmp7 = closure_5;
  const tmp8 = View;
  if (!tmp4Result.isIOS()) {
    num = top;
  }
  ({ headerLeftContainer: obj2.headerLeftContainerStyle, headerRightContainer: obj2.headerRightContainerStyle } = tmp);
  tmp4Result2 = require("NavigatorHeader");
  items = [closure_4(Header, obj3), ];
  const obj4 = { type, onClose: ModalActionCreatorsDefault.pop };
  const tmp2Result = ForLaterScreenDefault;
  items[1] = closure_4(tmp2Result, obj4, type);
  return tmp7(tmp8, obj);
};
