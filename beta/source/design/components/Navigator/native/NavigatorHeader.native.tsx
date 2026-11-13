// Module ID: 7097
// Function ID: 7098
// Name: NavigatorHeader
// Dependencies: [5, 19, 17, 1072, 21, 5170, 575, 5783, 5798, 7098, 7101, 1500, 7103, 1113, 7104, 7153, 1377, 1627, 5746, 2]
// Exports: FauxHeader, HeaderSubmittingIndicator, NavigatorHeader, getHeaderBackButton, getHeaderCloseButton, getHeaderConditionalBackButton, getHeaderNoTitle, getHeaderTextButton, renderBackImage, useNavigatorHeaderSize

// Module 7097 (NavigatorHeader)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import NavigatorConstants from "NavigatorConstants" /* 5746 */;
import Text_Text from "Text/Text" /* 5783 */;
import useFontScale from "useFontScale" /* 5798 */;
import HeaderDebugOverlayDefault from "HeaderDebugOverlay" /* 7098 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 7101 */;
import _mod7104 from "module_7104" /* 7104 */;
import XSmallIcon from "XSmallIcon" /* 7153 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c2;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
let size1;
class HeaderBackImage {
  constructor() {
    const obj = { size: "md", style: styles().headerButtonIcon };
    return metroRequire(ArrowLargeLeftIcon.ArrowLargeLeftIcon, obj);
  }
}
function CloseButton(onPress) {
  let headerButtonIcon;
  onPress = onPress.onPress;
  const merged = Object.assign(onPress, Object.assign({ onPress: 0 }));
  onPress = undefined;
  _require = styles();
  let obj = require("Link");
  let closure_1 = obj.useNavigation();
  if (onPress == null) {
    onPress = () => {
      closure_1.pop();
    };
  }
  const tmp2Result = require("useNavigatorBackPressHandler");
  tmp2Result.useNavigatorBackPressHandler(() => {
    fn();
    return true;
  });
  const intl = tmp2(tmp3[13]).intl;
  const stringResult = intl.string(require("intl").t.cpT0Cq);
  const obj2 = {
    onPress,
    label: stringResult,
    displayMode: "minimal",
    backImage(tintColor) {
      let items;
      const obj = { size: "md", style: items };
      items = [headerButtonIcon.headerButtonIcon, { tintColor: tintColor.tintColor }];
      return metroRequire(XSmallIcon.XSmallIcon, obj);
    },
    accessibilityLabel: stringResult
  };
  const HeaderBackButton = tmp2(tmp3[14]).HeaderBackButton;
  const merged1 = Object.assign(merged);
  return closure_6(HeaderBackButton, obj2);
}
function CustomHeaderBackButton(onPress) {
  onPress = onPress.onPress;
  const merged = Object.assign(onPress, Object.assign({ onPress: 0 }));
  const obj = onPress(7103);
  obj.useNavigatorBackPressHandler(() => {
    if (null != onPress) {
      tmp();
    }
    return null != onPress;
  });
  const obj2 = {
    onPress,
    displayMode: "minimal",
    backImage() {
      return closure_1_6(HeaderBackImage, {});
    }
  };
  const HeaderBackButton = onPress(7104).HeaderBackButton;
  const merged1 = Object.assign(merged);
  return closure_6(HeaderBackButton, obj2);
}
function HeaderTextButton(text) {
  let tmp5;
  text = text.text;
  const labelStyle = text.labelStyle;
  const merged = Object.assign(text, Object.assign({ text: 0, labelStyle: 0 }));
  const obj = { marginHorizontal: 16 };
  const merged1 = Object.assign(styles().headerBackTitleStyle);
  const items = [obj, labelStyle];
  const obj2 = {
    label: text,
    displayMode: "default",
    labelStyle: items,
    backImage() {
      return null;
    },
    accessibilityLabel: tmp5
  };
  const HeaderBackButton = _mod7104.HeaderBackButton;
  const merged2 = Object.assign(merged);
  tmp5 = undefined;
  const obj3 = PlatformUtils;
  const tmp3 = metroRequire;
  if (obj3.isAndroid()) {
    tmp5 = text;
  }
  return tmp3(HeaderBackButton, obj2);
}
({ View: closure_4, ActivityIndicator: hasOwnProperty } = react_native);
const Fonts = Constants.Fonts;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { fauxHeaderWrapper: obj2, headerTitle: obj3, headerBackTitleStyle: obj4, navigatorHeaderTitleContainer: { flexDirection: "row", justifyContent: "center", alignItems: "center" }, navigatorHeaderContainer: { flexDirection: "column", justifyContent: "center", alignItems: "center" }, navigatorHeaderSubtitle: { marginTop: 2 }, headerButtonIcon: size, submittingIndicator: size1 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_STRONG };
let merged = Object.assign(Text_Text.TextStyleSheet["heading-md/semibold"]);
obj4 = { fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 16, letterSpacing: 0, lineHeight: 20, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
size = { width: 24, height: 24, tintColor: nativeDefault.colors.ICON_DEFAULT };
size1 = { width: 22, height: 22, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const styles = createStyles(obj);
let closure_9 = { height: 54, titleVariant: "heading-sm/semibold", subtitleVariant: "body-xs/normal" };
let closure_10 = { height: 58, titleVariant: "heading-md/semibold", subtitleVariant: "body-sm/normal" };
let closure_11 = { height: 62, titleVariant: "heading-lg/semibold", subtitleVariant: "body-md/normal" };
size = size_mod;
const result = size.fileFinishedImporting("design/components/Navigator/native/NavigatorHeader.native.tsx");

export const useStyles = styles;
export function useNavigatorHeaderSize() {
  let tmp2;
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  if (fontScale < 1) {
    tmp2 = closure_9;
  } else {
    tmp2 = fontScale > 1 ? closure_11 : closure_10;
  }
  return tmp2;
}
export function NavigatorHeader(subtitle) {
  let icon;
  let items;
  let items1;
  let subtitleVariant;
  let title;
  let titleVariant;
  let tmp6;
  subtitle = subtitle.subtitle;
  ({ title, icon } = subtitle);
  const tmp = styles();
  const tmp3 = HeaderDebugOverlayDefault("js-stack");
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  if (fontScale < 1) {
    tmp6 = closure_9;
  } else {
    tmp6 = fontScale > 1 ? closure_11 : closure_10;
  }
  const obj3 = { style: tmp.navigatorHeaderTitleContainer, children: items };
  items = [icon, ];
  const obj2 = { style: tmp.navigatorHeaderContainer, children: items1 };
  ({ titleVariant, subtitleVariant } = tmp6);
  items[1] = metroRequire(Text_Text.Text, { accessibilityRole: "header", "aria-level": "1", lineClamp: 1, allowFontScaling: false, variant: titleVariant, color: "text-strong", children: title });
  items1 = [metroImportDefault(React3, obj3), , ];
  let tmp9Result = null != subtitle;
  const tmp7 = metroImportDefault;
  const tmp8 = React3;
  const tmp9 = metroRequire;
  if (tmp9Result) {
    tmp9Result = "" !== subtitle;
  }
  if (tmp9Result) {
    const obj4 = { lineClamp: 1, allowFontScaling: false, style: tmp.navigatorHeaderSubtitle, variant: subtitleVariant, color: "text-subtle", children: subtitle };
    tmp9Result = tmp9(tmp4(5783).Text, obj4);
  }
  items1[1] = tmp9Result;
  items1[2] = tmp3;
  return tmp7(tmp8, obj2);
}
export { HeaderBackImage };
export function renderBackImage() {
  return metroRequire(HeaderBackImage, {});
}
export function getHeaderCloseButton(pop) {
  const onPress = pop;
  return function renderCloseButton(arg0) {
    const obj = { onPress };
    const merged = Object.assign(arg0);
    return metroRequire(CloseButton, obj);
  };
}
export function getHeaderConditionalBackButton(callback1) {
  let closure_0 = callback1;
  return function renderBackButton(onPress) {
    onPress = onPress.onPress;
    let obj = function _handlePress() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let closure_0;
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                c1 = 1;
                c2 = 1;
                const obj4 = { value: tmp3(), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              if (value) {
                if (closure_128_0 != null) {
                  tmp5();
                }
              }
              c2 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp9) {
            c2 = 3;
            throw tmp9;
          }
        }
      });
      return obj(...arguments);
    };
    obj = {
      onPress: function handlePress() {
        return obj(...arguments);
      }
    };
    const merged = Object.assign(Object.assign(onPress, Object.assign({ onPress: 0 })));
    return closure_1_6(CustomHeaderBackButton, obj);
  };
}
export function getHeaderBackButton(onClose, arg1) {
  let closure_0 = onClose;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  return function renderBackImage(onPress) {
    onPress = onPress.onPress;
    const obj = {
      onPress() {
        if (onClose != null) {
          tmp();
        }
        const tmp3 = !flag;
        if (tmp3) {
          if (onPress != null) {
            tmp4();
          }
        }
      }
    };
    const merged = Object.assign(Object.assign(onPress, Object.assign({ onPress: 0 })));
    return closure_1_6(CustomHeaderBackButton, obj);
  };
}
export function getHeaderTextButton(intl, callback) {
  const text = intl;
  const onPress = callback;
  return (arg0) => {
    const obj = { text, onPress };
    const merged = Object.assign(arg0);
    return metroRequire(HeaderTextButton, obj);
  };
}
export function getHeaderNoTitle() {
  return () => null;
}
export function FauxHeader(arg0) {
  let children;
  let items;
  let style;
  ({ children, style } = arg0);
  const tmp = styles();
  const top = useSafeAreaInsetsDefault().top;
  const obj = { style: items, children };
  items = [tmp.fauxHeaderWrapper, { paddingTop: top, height: top + NavigatorConstants.NAV_BAR_HEIGHT }, style];
  ({ paddingTop: top, height: top + NavigatorConstants.NAV_BAR_HEIGHT });
  return metroRequire(React3, obj);
}
export function HeaderSubmittingIndicator() {
  const tmp = styles();
  const obj = { animating: true, style: tmp.submittingIndicator, color: tmp.submittingIndicator.color };
  return metroRequire(hasOwnProperty, obj);
}
