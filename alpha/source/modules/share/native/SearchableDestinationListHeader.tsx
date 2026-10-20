// Module ID: 12723
// Function ID: 12724
// Name: SearchableDestinationListHeader
// Dependencies: [19, 21, 4945, 587, 558, 576, 1633, 1506, 1384, 9614, 6872, 6881, 2]

// Module 12723 (SearchableDestinationListHeader)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import Link from "Link" /* 1506 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import NavigatorHeader from "NavigatorHeader" /* 6872 */;
import HeaderShared from "HeaderShared" /* 9614 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4945 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
let obj4;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { headerLeftContainer: obj2, headerRightContainer: obj3, header: obj4 };
obj2 = { paddingLeft: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingRight: nativeDefault.space.PX_16 };
obj4 = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_5 = createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function SearchableDestinationListHeader(subtitleColor) {
  let headerRight;
  let headerStatusBarHeight;
  let onClose;
  let subtitle;
  let title;
  const obj = subtitle(576);
  const cResult = obj.c(14);
  ({ title, subtitle } = subtitleColor);
  subtitleColor = subtitleColor.subtitleColor;
  ({ headerRight, headerStatusBarHeight, onClose } = subtitleColor);
  const tmp4 = closure_5();
  const top = subtitleColor(1633)().top;
  const context = react.useContext(subtitle(1506).NavigationRouteContext);
  const obj2 = subtitle(1384);
  let isIOSResult = obj2.isIOS();
  const tmp5 = subtitleColor;
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
  if (cResult[0] === subtitle) {
    let tmp10;
    let tmp11;
    if (cResult[1] === subtitleColor) {
      tmp10 = cResult[2];
    }
    if (cResult[3] !== onClose) {
      let headerCloseButton;
      if (null != onClose) {
        const tmpResult = subtitle(6872);
        headerCloseButton = tmpResult.getHeaderCloseButton(onClose);
      }
      cResult[3] = onClose;
      cResult[4] = headerCloseButton;
      tmp11 = headerCloseButton;
    } else {
      tmp11 = cResult[4];
    }
    if (headerStatusBarHeight == null) {
      let num3 = 0;
      if (!isIOSResult) {
        num3 = top;
      }
      headerStatusBarHeight = num3 + tmp5(587).space.PX_8;
    }
    if (cResult[5] === headerRight) {
      if (cResult[6] === tmp4.header) {
        if (cResult[7] === tmp4.headerLeftContainer) {
          if (cResult[8] === tmp4.headerRightContainer) {
            if (cResult[9] === tmp10) {
              if (cResult[10] === tmp11) {
                if (cResult[11] === headerStatusBarHeight) {
                  let tmp15;
                  if (cResult[12] === title) {
                    tmp15 = cResult[13];
                  }
                  return tmp15;
                }
              }
            }
          }
        }
      }
    }
    ({ headerLeftContainer: obj4.headerLeftContainerStyle, headerRightContainer: obj4.headerRightContainerStyle } = tmp4);
    const tmp17 = jsx(subtitle(6881).Header, { headerStyle: tmp4.header, title, headerTitle: tmp10, headerTitleAlign: "center", headerLeft: tmp11, headerRight, headerLeftContainerStyle: null, headerRightContainerStyle: null, headerStatusBarHeight });
    cResult[5] = headerRight;
    cResult[6] = tmp4.header;
    cResult[7] = tmp4.headerLeftContainer;
    cResult[8] = tmp4.headerRightContainer;
    cResult[9] = tmp10;
    cResult[10] = tmp11;
    cResult[11] = headerStatusBarHeight;
    cResult[12] = title;
    cResult[13] = tmp17;
    tmp15 = tmp17;
  }
  const fn = function l(children) {
    return jsx(HeaderShared.GenericHeaderTitle, { title: children.children, subtitle, subtitleColor, variant: "redesign/heading-18/bold" });
  };
  cResult[0] = subtitle;
  cResult[1] = subtitleColor;
  cResult[2] = fn;
  tmp10 = fn;
}) : (function SearchableDestinationListHeader(arg0) {
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
  const Header = tmp4(6881).Header;
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
});
const result = size.fileFinishedImporting("modules/share/native/SearchableDestinationListHeader.tsx");

export default tmp3;
