// Module ID: 12357
// Function ID: 12358
// Name: SearchableDestinationListHeader
// Dependencies: [19, 21, 5096, 587, 558, 576, 1631, 9307, 6205, 1382, 6631, 6214, 2]

// Module 12357 (SearchableDestinationListHeader)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import NavigatorHeader from "NavigatorHeader" /* 6205 */;
import _mod6214 from "module_6214" /* 6214 */;
import useIsWindowLarge from "useIsWindowLarge" /* 6631 */;
import HeaderShared from "HeaderShared" /* 9307 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5096 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { headerLeftContainer: obj2, headerRightContainer: { paddingRight: nativeDefault.space.PX_16 }, header: { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND } };
createStyles = createStyles.createStyles;
obj2 = { paddingLeft: nativeDefault.space.PX_16 };
({ paddingRight: nativeDefault.space.PX_16 });
({ borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
let closure_4 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function SearchableDestinationListHeader(subtitleColor) {
  let headerRight;
  let headerStatusBarHeight;
  let onClose;
  let subtitle;
  let title;
  const obj = subtitle(576);
  const cResult = obj.c(17);
  ({ title, subtitle } = subtitleColor);
  subtitleColor = subtitleColor.subtitleColor;
  ({ headerRight, headerStatusBarHeight, onClose } = subtitleColor);
  const tmp4 = closure_4();
  const top = subtitleColor(1631)().top;
  const tmp5 = subtitleColor;
  if (cResult[0] === subtitle) {
    let tmp6;
    let tmp7;
    if (cResult[1] === subtitleColor) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== onClose) {
      let headerCloseButton;
      if (null != onClose) {
        const tmpResult = subtitle(6205);
        headerCloseButton = tmpResult.getHeaderCloseButton(onClose);
      }
      cResult[3] = onClose;
      cResult[4] = headerCloseButton;
      tmp7 = headerCloseButton;
    } else {
      tmp7 = cResult[4];
    }
    if (cResult[5] === headerStatusBarHeight) {
      let tmp10;
      if (cResult[6] === top) {
        tmp10 = cResult[7];
      }
      if (cResult[8] === headerRight) {
        if (cResult[9] === tmp4.header) {
          if (cResult[10] === tmp4.headerLeftContainer) {
            if (cResult[11] === tmp4.headerRightContainer) {
              if (cResult[12] === tmp6) {
                if (cResult[13] === tmp7) {
                  if (cResult[14] === tmp10) {
                    let tmp13;
                    if (cResult[15] === title) {
                      tmp13 = cResult[16];
                    }
                    return tmp13;
                  }
                }
              }
            }
          }
        }
      }
      ({ headerLeftContainer: obj5.headerLeftContainerStyle, headerRightContainer: obj5.headerRightContainerStyle } = tmp4);
      const tmp15 = jsx(subtitle(6214).Header, { headerStyle: tmp4.header, title, headerTitle: tmp6, headerTitleAlign: "center", headerLeft: tmp7, headerRight, headerLeftContainerStyle: null, headerRightContainerStyle: null, headerStatusBarHeight: tmp10 });
      cResult[8] = headerRight;
      cResult[9] = tmp4.header;
      cResult[10] = tmp4.headerLeftContainer;
      cResult[11] = tmp4.headerRightContainer;
      cResult[12] = tmp6;
      cResult[13] = tmp7;
      cResult[14] = tmp10;
      cResult[15] = title;
      cResult[16] = tmp15;
      tmp13 = tmp15;
    }
    let sum = headerStatusBarHeight;
    if (headerStatusBarHeight == null) {
      let num3;
      const tmpResult3 = subtitle(1382);
      if (!tmpResult3.isIOS()) {
        num3 = top;
      } else {
        num3 = 0;
        subtitle(6631);
      }
      sum = num3 + tmp5(587).space.PX_8;
    }
    cResult[5] = headerStatusBarHeight;
    cResult[6] = top;
    cResult[7] = sum;
    tmp10 = sum;
  }
  const fn = function o(children) {
    return jsx(HeaderShared.GenericHeaderTitle, { title: children.children, subtitle, subtitleColor, variant: "redesign/heading-18/bold" });
  };
  cResult[0] = subtitle;
  cResult[1] = subtitleColor;
  cResult[2] = fn;
  tmp6 = fn;
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
  const tmp = closure_4();
  const top = useSafeAreaInsetsDefault().top;
  const obj = {
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
  const Header = _mod6214.Header;
  const tmp4 = jsx;
  if (null != onClose) {
    const tmp5Result = NavigatorHeader;
    headerCloseButton = tmp5Result.getHeaderCloseButton(onClose);
  }
  ({ headerLeftContainer: obj.headerLeftContainerStyle, headerRightContainer: obj.headerRightContainerStyle } = tmp);
  if (headerStatusBarHeight == null) {
    let num;
    const tmp5Result3 = PlatformUtils;
    if (!tmp5Result3.isIOS()) {
      num = top;
    } else {
      num = 0;
      useIsWindowLarge;
    }
    headerStatusBarHeight = num + nativeDefault.space.PX_8;
  }
  return tmp4(Header, obj);
});
const result = size.fileFinishedImporting("modules/share/native/SearchableDestinationListHeader.tsx");

export default tmp4;
