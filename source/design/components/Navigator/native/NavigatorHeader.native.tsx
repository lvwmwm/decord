// Module ID: 5087
// Function ID: 44288
// Name: HeaderBackImage
// Dependencies: [5, 31, 27, 653, 33, 4130, 689, 4126, 5088, 5091, 1457, 5093, 1212, 5094, 5119, 477, 1557, 5084, 2]
// Exports: FauxHeader, HeaderSubmittingIndicator, NavigatorHeader, getHeaderBackButton, getHeaderCloseButton, getHeaderConditionalBackButton, getHeaderNoTitle, getHeaderTextButton, renderBackImage

// Module 5087 (HeaderBackImage)
import closure_3 from "_createForOfIteratorHelperLoose";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
class HeaderBackImage {
  constructor() {
    tmp = c8();
    obj = { size: "md", style: tmp.headerButtonIcon };
    return jsx(require("ArrowLargeLeftIcon").ArrowLargeLeftIcon, obj);
  }
}
function CloseButton(onPress) {
  let fn = onPress.onPress;
  let obj = Object.create(null);
  obj.onPress = 0;
  const merged = Object.assign(onPress, obj);
  fn = undefined;
  const _require = _createForOfIteratorHelperLoose();
  obj = _require(fn[10]);
  let closure_1 = obj.useNavigation();
  if (null == fn) {
    fn = () => {

    };
  }
  _require(fn[11]).useNavigatorBackPressHandler(() => {
    fn();
    return true;
  });
  const intl = _require(fn[12]).intl;
  const stringResult = intl.string(_require(fn[12]).t.cpT0Cq);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["onPress"] = fn;
  obj["label"] = stringResult;
  obj["labelVisible"] = false;
  obj["backImage"] = function backImage(tintColor) {
    const style = [lib.headerButtonIcon, { tintColor: tintColor.tintColor }];
    return outer1_6(lib(fn[14]).XSmallIcon, { size: "md", style });
  };
  obj["accessibilityLabel"] = stringResult;
  return callback(_require(fn[13]).HeaderBackButton, obj);
}
function CustomHeaderBackButton(onPress) {
  onPress = onPress.onPress;
  let obj = Object.create(null);
  obj.onPress = 0;
  const merged = Object.assign(onPress, obj);
  obj = onPress(5093);
  obj.useNavigatorBackPressHandler(() => {
    if (null != onPress) {
      onPress();
    }
    return null != onPress;
  });
  obj = {};
  const merged1 = Object.assign(merged);
  obj["onPress"] = onPress;
  obj["labelVisible"] = false;
  obj["backImage"] = function backImage() {
    return outer1_6(outer1_9, {});
  };
  return callback(onPress(5094).HeaderBackButton, obj);
}
function HeaderTextButton(text) {
  text = text.text;
  let obj = Object.create(null);
  obj.text = 0;
  obj.labelStyle = 0;
  const merged = Object.assign(text, obj);
  obj = {};
  const merged1 = Object.assign(_createForOfIteratorHelperLoose().headerBackTitleStyle);
  obj["marginHorizontal"] = 16;
  const items = [obj, text.labelStyle];
  obj = {};
  const merged2 = Object.assign(merged);
  obj["label"] = text;
  obj["labelVisible"] = true;
  obj["labelStyle"] = items;
  obj["backImage"] = function backImage() {
    return null;
  };
  let tmp6;
  if (obj3.isAndroid()) {
    tmp6 = text;
  }
  obj["accessibilityLabel"] = tmp6;
  return closure_6(require(5094) /* Background */.HeaderBackButton, obj);
}
({ View: closure_4, ActivityIndicator: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
_createForOfIteratorHelperLoose.fauxHeaderWrapper = _createForOfIteratorHelperLoose;
let obj1 = {};
let merged = Object.assign(require("Text").TextStyleSheet["redesign/heading-18/bold"]);
obj1["color"] = require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY;
_createForOfIteratorHelperLoose.headerTitle = obj1;
const obj2 = { fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, fontSize: 16, letterSpacing: 0, lineHeight: 20, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.headerBackTitleStyle = obj2;
_createForOfIteratorHelperLoose.navigatorHeaderTitleContainer = { flexDirection: "row", justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.navigatorHeaderContainer = { flexDirection: "column", justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.navigatorHeaderSubtitle = { marginTop: -2 };
const obj3 = { width: 24, height: 24, tintColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.headerButtonIcon = obj3;
const obj4 = { width: 22, height: 22, color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.submittingIndicator = obj4;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/Navigator/native/NavigatorHeader.native.tsx");

export const useStyles = _createForOfIteratorHelperLoose;
export const NavigatorHeader = function NavigatorHeader(subtitle) {
  let icon;
  let title;
  subtitle = subtitle.subtitle;
  ({ title, icon } = subtitle);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.navigatorHeaderContainer };
  obj = { style: tmp.navigatorHeaderTitleContainer };
  const items = [icon, ];
  obj = { accessibilityRole: "header", "aria-level": "1", lineClamp: 1, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", children: title };
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  const items1 = [callback2(closure_4, obj), , ];
  let tmp5 = null != subtitle;
  if (tmp5) {
    tmp5 = "" !== subtitle;
  }
  if (tmp5) {
    const obj1 = { lineClamp: 1, style: tmp.navigatorHeaderSubtitle, variant: "text-xs/medium", color: "text-muted", children: subtitle };
    tmp5 = callback(require(4126) /* Text */.Text, obj1);
  }
  items1[1] = tmp5;
  items1[2] = importDefault(5088)("js-stack");
  obj.children = items1;
  return callback2(closure_4, obj);
};
export { HeaderBackImage };
export const renderBackImage = function renderBackImage() {
  return callback(HeaderBackImage, {});
};
export function getHeaderCloseButton(pop) {
  let closure_0 = pop;
  return (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["onPress"] = closure_0;
    return outer1_6(outer1_10, obj);
  };
}
export function getHeaderConditionalBackButton(handleBack) {
  let closure_0 = handleBack;
  return (onPress) => {
    onPress = onPress.onPress;
    let obj = Object.create(null);
    obj.onPress = 0;
    async function _handlePress() {
      if (yield onPress()) {
        if (null != outer2_0) {
          outer2_0();
        }
      }
    }
    obj = {};
    const merged = Object.assign(Object.assign(onPress, obj));
    obj["onPress"] = function handlePress() {
      return _handlePress(...arguments);
    };
    return outer1_6(outer1_11, obj);
  };
}
export function getHeaderBackButton(onClose, arg1) {
  let flag = arg1;
  let closure_0 = onClose;
  if (arg1 === undefined) {
    flag = false;
  }
  return function renderBackImage(onPress) {
    onPress = onPress.onPress;
    let obj = Object.create(null);
    obj.onPress = 0;
    obj = {};
    const merged = Object.assign(Object.assign(onPress, obj));
    obj["onPress"] = function onPress() {
      if (null != onPress) {
        onPress();
      }
      if (!outer1_1) {
        if (null != onPress) {
          onPress();
        }
      }
    };
    return outer1_6(outer1_11, obj);
  };
}
export function getHeaderTextButton(intl, callback) {
  let closure_0 = intl;
  let closure_1 = callback;
  return (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["text"] = closure_0;
    obj["onPress"] = closure_1;
    return outer1_6(outer1_12, obj);
  };
}
export function getHeaderNoTitle() {
  return () => null;
}
export const FauxHeader = function FauxHeader(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const top = importDefault(1557)().top;
  let obj = {};
  const items = [_createForOfIteratorHelperLoose().fauxHeaderWrapper, , ];
  obj = { paddingTop: top, height: top + require(5084) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT };
  items[1] = obj;
  items[2] = style;
  obj.style = items;
  obj.children = children;
  return callback(closure_4, obj);
};
export const HeaderSubmittingIndicator = function HeaderSubmittingIndicator() {
  const tmp = _createForOfIteratorHelperLoose();
  return callback(closure_5, { animating: true, style: tmp.submittingIndicator, color: tmp.submittingIndicator.color });
};
