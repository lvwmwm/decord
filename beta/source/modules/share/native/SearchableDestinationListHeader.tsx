// Module ID: 10446
// Function ID: 10447
// Name: SearchableDestinationListHeader
// Dependencies: [19, 21, 4836, 576, 1613, 5943, 7288, 5936, 1364, 6364, 2]
// Exports: default

// Module 10446 (SearchableDestinationListHeader)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import _mod5943 from "module_5943" /* 5943 */;
import HeaderShared from "HeaderShared" /* 7288 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
let tmp5;
const useIsWindowLarge = tmp5(6364);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { headerLeftContainer: obj2, headerRightContainer: obj3, header: { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND } };
obj2 = { paddingLeft: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingRight: nativeDefault.space.PX_16 };
({ borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
let closure_4 = createStyles(obj);
const result = size.fileFinishedImporting("modules/share/native/SearchableDestinationListHeader.tsx");

export default function SearchableDestinationListHeader(arg0) {
  let headerRight;
  let num;
  let obj2;
  let onClose;
  let subtitle;
  let subtitleColor;
  let title;
  ({ subtitle: require, subtitleColor: importDefault } = arg0);
  ({ title, headerRight, onClose } = arg0);
  const tmp = closure_4();
  const top = useSafeAreaInsetsDefault().top;
  const obj = {
    headerStyle: tmp.header,
    title,
    headerTitle(children) {
      return jsx(HeaderShared.GenericHeaderTitle, { title: children.children, subtitle: require, subtitleColor: importDefault, variant: "redesign/heading-18/bold" });
    },
    headerTitleAlign: "center",
    headerLeft: obj2.getHeaderCloseButton(onClose),
    headerRight,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerStatusBarHeight: num + nativeDefault.space.PX_8
  };
  const Header = _mod5943.Header;
  ({ headerLeftContainer: obj.headerLeftContainerStyle, headerRightContainer: obj.headerRightContainerStyle } = tmp);
  obj2 = NavigatorHeader;
  const obj3 = PlatformUtils;
  const tmp4 = jsx;
  if (!obj3.isIOS()) {
    num = top;
  } else {
    num = 0;
    useIsWindowLarge;
  }
  return tmp4(Header, obj);
};
