// Module ID: 5936
// Function ID: 5937
// Name: NavigatorHeader
// Dependencies: [5, 19, 17, 1074, 21, 4836, 576, 4832, 5937, 5940, 1486, 5942, 1115, 5943, 5992, 1364, 1613, 5994, 2]
// Exports: FauxHeader, HeaderSubmittingIndicator, NavigatorHeader, getHeaderBackButton, getHeaderCloseButton, getHeaderConditionalBackButton, getHeaderNoTitle, getHeaderTextButton, renderBackImage

// Module 5936 (NavigatorHeader)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import Text_Text from "Text/Text" /* 4832 */;
import HeaderDebugOverlayDefault from "HeaderDebugOverlay" /* 5937 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 5940 */;
import _mod5943 from "module_5943" /* 5943 */;
import XSmallIcon from "XSmallIcon" /* 5992 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
  const intl = tmp2(tmp3[12]).intl;
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
  const HeaderBackButton = tmp2(tmp3[13]).HeaderBackButton;
  const merged1 = Object.assign(merged);
  return closure_6(HeaderBackButton, obj2);
}
function CustomHeaderBackButton(onPress) {
  onPress = onPress.onPress;
  const merged = Object.assign(onPress, Object.assign({ onPress: 0 }));
  const obj = onPress(5942);
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
  const HeaderBackButton = onPress(5943).HeaderBackButton;
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
  const HeaderBackButton = _mod5943.HeaderBackButton;
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
let obj = { fauxHeaderWrapper: obj2, headerTitle: obj3, headerBackTitleStyle: obj4, navigatorHeaderTitleContainer: { flexDirection: "row", justifyContent: "center", alignItems: "center" }, navigatorHeaderContainer: { flexDirection: "column", justifyContent: "center", alignItems: "center" }, navigatorHeaderSubtitle: { marginTop: -2 }, headerButtonIcon: size, submittingIndicator: size1 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let merged = Object.assign(Text_Text.TextStyleSheet["redesign/heading-18/bold"]);
obj4 = { fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 16, letterSpacing: 0, lineHeight: 20, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
size = { width: 24, height: 24, tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
size1 = { width: 22, height: 22, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const styles = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("design/components/Navigator/native/NavigatorHeader.native.tsx");

export const useStyles = styles;
export const NavigatorHeader = function NavigatorHeader(subtitle) {
  let icon;
  let items;
  let items1;
  let title;
  subtitle = subtitle.subtitle;
  ({ title, icon } = subtitle);
  const tmp = styles();
  const obj2 = { style: tmp.navigatorHeaderTitleContainer, children: items };
  items = [icon, ];
  const obj = { style: tmp.navigatorHeaderContainer, children: items1 };
  const tmp3 = HeaderDebugOverlayDefault("js-stack");
  items[1] = metroRequire(Text_Text.Text, { accessibilityRole: "header", "aria-level": "1", lineClamp: 1, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: title });
  items1 = [metroImportDefault(React3, obj2), , ];
  let tmp6Result = null != subtitle;
  const tmp4 = metroImportDefault;
  const tmp5 = React3;
  const tmp6 = metroRequire;
  if (tmp6Result) {
    tmp6Result = "" !== subtitle;
  }
  if (tmp6Result) {
    const obj3 = { lineClamp: 1, style: tmp.navigatorHeaderSubtitle, variant: "text-xs/medium", color: "text-muted", children: subtitle };
    tmp6Result = tmp6(Text_Text.Text, obj3);
  }
  items1[1] = tmp6Result;
  items1[2] = tmp3;
  return tmp4(tmp5, obj);
};
export { HeaderBackImage };
export const renderBackImage = function renderBackImage() {
  return metroRequire(HeaderBackImage, {});
};
export function getHeaderCloseButton(pop) {
  const onPress = pop;
  return (arg0) => {
    const obj = { onPress };
    const merged = Object.assign(arg0);
    return metroRequire(CloseButton, obj);
  };
}
export function getHeaderConditionalBackButton(callback1) {
  let closure_0 = callback1;
  return (onPress) => {
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
            return { value: "HermesInternal", done: null };
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
              return { value: "HermesInternal", done: null };
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
export const FauxHeader = function FauxHeader(arg0) {
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
};
export const HeaderSubmittingIndicator = function HeaderSubmittingIndicator() {
  const tmp = styles();
  const obj = { animating: true, style: tmp.submittingIndicator, color: tmp.submittingIndicator.color };
  return metroRequire(hasOwnProperty, obj);
};
