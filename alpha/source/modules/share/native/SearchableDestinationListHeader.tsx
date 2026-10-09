// Module ID: 11520
// Function ID: 11521
// Name: SearchableDestinationListHeader
// Dependencies: [19, 21, 5091, 587, 558, 576, 1631, 9270, 6205, 1382, 6625, 6214, 2]

// Module 11520 (SearchableDestinationListHeader)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import NavigatorHeader from "NavigatorHeader" /* 6205 */;
import _mod6214 from "module_6214" /* 6214 */;
import HeaderShared from "HeaderShared" /* 9270 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
let tmp5;
const useIsWindowLarge = tmp5(6625);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { headerLeftContainer: obj2, headerRightContainer: obj3, header: { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND } };
obj2 = { paddingLeft: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingRight: nativeDefault.space.PX_16 };
({ borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND });
let closure_4 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function SearchableDestinationListHeader(subtitleColor) {
  let headerRight;
  let onClose;
  let subtitle;
  let title;
  const obj = subtitle(576);
  const cResult = obj.c(16);
  ({ title, subtitle } = subtitleColor);
  subtitleColor = subtitleColor.subtitleColor;
  ({ headerRight, onClose } = subtitleColor);
  const tmp4 = closure_4();
  const top = subtitleColor(1631)().top;
  const tmp5 = subtitleColor;
  if (cResult[0] === subtitle) {
    let tmp7;
    let tmp8;
    let tmp10;
    if (cResult[1] === subtitleColor) {
      tmp7 = cResult[2];
    }
    if (cResult[3] !== onClose) {
      const tmpResult = subtitle(6205);
      const headerCloseButton = tmpResult.getHeaderCloseButton(onClose);
      cResult[3] = onClose;
      cResult[4] = headerCloseButton;
      tmp8 = headerCloseButton;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== top) {
      let num3;
      const tmpResult3 = subtitle(1382);
      if (!tmpResult3.isIOS()) {
        num3 = top;
      } else {
        num3 = 0;
        subtitle(6625);
      }
      cResult[5] = top;
      cResult[6] = num3;
      tmp10 = num3;
    } else {
      tmp10 = cResult[6];
    }
    const sum = tmp10 + tmp5(587).space.PX_8;
    if (cResult[7] === headerRight) {
      if (cResult[8] === tmp4.header) {
        if (cResult[9] === tmp4.headerLeftContainer) {
          if (cResult[10] === tmp4.headerRightContainer) {
            if (cResult[11] === tmp7) {
              if (cResult[12] === tmp8) {
                if (cResult[13] === sum) {
                  let tmp12;
                  if (cResult[14] === title) {
                    tmp12 = cResult[15];
                  }
                  return tmp12;
                }
              }
            }
          }
        }
      }
    }
    ({ headerLeftContainer: obj5.headerLeftContainerStyle, headerRightContainer: obj5.headerRightContainerStyle } = tmp4);
    const tmp14 = jsx(subtitle(6214).Header, { headerStyle: tmp6, title, headerTitle: tmp7, headerTitleAlign: "center", headerLeft: tmp8, headerRight, headerLeftContainerStyle: null, headerRightContainerStyle: null, headerStatusBarHeight: sum });
    cResult[7] = headerRight;
    cResult[8] = tmp4.header;
    cResult[9] = tmp4.headerLeftContainer;
    cResult[10] = tmp4.headerRightContainer;
    cResult[11] = tmp7;
    cResult[12] = tmp8;
    cResult[13] = sum;
    cResult[14] = title;
    cResult[15] = tmp14;
    tmp12 = tmp14;
  }
  const fn = function o(children) {
    return jsx(HeaderShared.GenericHeaderTitle, { title: children.children, subtitle, subtitleColor, variant: "redesign/heading-18/bold" });
  };
  cResult[0] = subtitle;
  cResult[1] = subtitleColor;
  cResult[2] = fn;
  tmp7 = fn;
}) : (function SearchableDestinationListHeader(arg0) {
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
  const Header = _mod6214.Header;
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
});
const result = size.fileFinishedImporting("modules/share/native/SearchableDestinationListHeader.tsx");

export default tmp4;
