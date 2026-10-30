// Module ID: 13344
// Function ID: 13345
// Name: SearchableDestinationListHeader
// Dependencies: [19, 21, 5009, 575, 1626, 1499, 1376, 6999, 9791, 6992, 2]
// Exports: default

// Module 13344 (SearchableDestinationListHeader)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import Link from "Link" /* 1499 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import NavigatorHeader from "NavigatorHeader" /* 6992 */;
import HeaderShared from "HeaderShared" /* 9791 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { headerLeftContainer: obj2, headerRightContainer: obj3, header: { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND } };
obj2 = { paddingLeft: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingRight: nativeDefault.space.PX_16 };
({ borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("modules/share/native/SearchableDestinationListHeader.tsx");

export default function SearchableDestinationListHeader(arg0) {
  let headerCloseButton;
  let headerRight;
  let headerStatusBarHeight;
  let onClose;
  let subtitle;
  let subtitleColor;
  let title;
  ({ subtitle: require, subtitleColor: importDefault, headerStatusBarHeight, onClose } = arg0);
  ({ title, headerRight } = arg0);
  const tmp = closure_5();
  const top = useSafeAreaInsetsDefault().top;
  const context = react.useContext(Link.NavigationRouteContext);
  const obj = PlatformUtils;
  let isIOSResult = obj.isIOS();
  if (isIOSResult) {
    let presentation;
    if (context != null) {
      const params = context.params;
      if (params != null) {
        presentation = params.presentation;
      }
    }
    isIOSResult = "modal" === presentation;
  }
  const obj3 = {
    headerStyle: tmp.header,
    title,
    headerTitle(children) {
      return jsx(HeaderShared.GenericHeaderTitle, { title: children.children, subtitle: require, subtitleColor: importDefault, variant: "redesign/heading-18/bold" });
    },
    headerTitleAlign: "center",
    headerLeft: headerCloseButton,
    headerRight,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerStatusBarHeight
  };
  headerCloseButton = undefined;
  const Header = tmp4(6999).Header;
  const tmp9 = jsx;
  if (null != onClose) {
    const tmp4Result = NavigatorHeader;
    headerCloseButton = tmp4Result.getHeaderCloseButton(onClose);
  }
  ({ headerLeftContainer: obj2.headerLeftContainerStyle, headerRightContainer: obj2.headerRightContainerStyle } = tmp);
  if (headerStatusBarHeight == null) {
    let num = 0;
    if (!isIOSResult) {
      num = top;
    }
    headerStatusBarHeight = num + nativeDefault.space.PX_8;
  }
  return tmp9(Header, obj3);
};
