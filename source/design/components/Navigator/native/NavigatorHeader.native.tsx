// Module ID: 5353
// Function ID: 45795
// Name: HeaderBackImage
// Dependencies: []
// Exports: FauxHeader, HeaderSubmittingIndicator, NavigatorHeader, getHeaderBackButton, getHeaderCloseButton, getHeaderConditionalBackButton, getHeaderNoTitle, getHeaderTextButton, renderBackImage

// Module 5353 (HeaderBackImage)
class HeaderBackImage {
  constructor() {
    tmp = closure_8();
    obj = { size: "md", style: tmp.headerButtonIcon };
    return jsx(arg1(dependencyMap[9]).ArrowLargeLeftIcon, obj);
  }
}
function CloseButton(onPress) {
  let fn = onPress.onPress;
  let obj = Object.create(null);
  obj.onPress = 0;
  const merged = Object.assign(onPress, obj);
  let dependencyMap;
  const callback = styles();
  obj = callback(dependencyMap[10]);
  let closure_1 = obj.useNavigation();
  if (null == fn) {
    fn = () => {

    };
  }
  dependencyMap = fn;
  callback(dependencyMap[11]).useNavigatorBackPressHandler(() => {
    fn();
    return true;
  });
  const intl = callback(dependencyMap[12]).intl;
  const stringResult = intl.string(callback(dependencyMap[12]).t.cpT0Cq);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["onPress"] = fn;
  obj["label"] = stringResult;
  obj["labelVisible"] = false;
  obj["backImage"] = function backImage(tintColor) {
    const style = [lib.headerButtonIcon, { tintColor: tintColor.tintColor }];
    return callback(lib(fn[14]).XSmallIcon, { size: "md", style });
  };
  obj["accessibilityLabel"] = stringResult;
  return callback2(callback(dependencyMap[13]).HeaderBackButton, obj);
}
function CustomHeaderBackButton(onPress) {
  onPress = onPress.onPress;
  const arg1 = onPress;
  let obj = Object.create(null);
  obj.onPress = 0;
  const merged = Object.assign(onPress, obj);
  obj = arg1(dependencyMap[11]);
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
    return callback(closure_9, {});
  };
  return callback2(arg1(dependencyMap[13]).HeaderBackButton, obj);
}
function HeaderTextButton(text) {
  text = text.text;
  let obj = Object.create(null);
  obj.text = 0;
  obj.labelStyle = 0;
  const merged = Object.assign(text, obj);
  obj = {};
  const merged1 = Object.assign(styles().headerBackTitleStyle);
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
  return closure_6(arg1(dependencyMap[13]).HeaderBackButton, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
({ View: closure_4, ActivityIndicator: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj.fauxHeaderWrapper = obj;
const obj1 = {};
const merged = Object.assign(arg1(dependencyMap[7]).TextStyleSheet.redesign/heading-18/bold);
obj1["color"] = importDefault(dependencyMap[6]).colors.MOBILE_TEXT_HEADING_PRIMARY;
obj.headerTitle = obj1;
const obj2 = { "Null": "<string:1685934336>", "Null": "<string:3457827089>", "Null": "<string:846331905>", "Null": "<string:1426063360>", fontFamily: arg1(dependencyMap[3]).Fonts.PRIMARY_MEDIUM, color: importDefault(dependencyMap[6]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.headerBackTitleStyle = obj2;
obj.navigatorHeaderTitleContainer = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null };
obj.navigatorHeaderContainer = {};
obj.navigatorHeaderSubtitle = { marginTop: -2 };
const obj3 = { aze: false, azj: false, tintColor: importDefault(dependencyMap[6]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.headerButtonIcon = obj3;
const tmp4 = arg1(dependencyMap[4]);
obj.submittingIndicator = { color: importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_DEFAULT };
const styles = obj.createStyles(obj);
const obj4 = { color: importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_DEFAULT };
const result = arg1(dependencyMap[18]).fileFinishedImporting("design/components/Navigator/native/NavigatorHeader.native.tsx");

export const useStyles = styles;
export const NavigatorHeader = function NavigatorHeader(subtitle) {
  let icon;
  let title;
  subtitle = subtitle.subtitle;
  ({ title, icon } = subtitle);
  const tmp = styles();
  let obj = { style: tmp.navigatorHeaderContainer };
  obj = { style: tmp.navigatorHeaderTitleContainer };
  const items = [icon, callback2(arg1(dependencyMap[7]).Text, { children: title })];
  obj.children = items;
  const items1 = [callback3(closure_4, obj), , ];
  let tmp5 = null != subtitle;
  if (tmp5) {
    tmp5 = "" !== subtitle;
  }
  if (tmp5) {
    obj = { borderRadius: null, flex: null, Promise: null, marginTop: null, style: tmp.navigatorHeaderSubtitle, children: subtitle };
    tmp5 = callback2(arg1(dependencyMap[7]).Text, obj);
  }
  items1[1] = tmp5;
  items1[2] = importDefault(dependencyMap[8])("js-stack");
  obj.children = items1;
  return callback3(closure_4, obj);
};
export { HeaderBackImage };
export const renderBackImage = function renderBackImage() {
  return callback2(HeaderBackImage, {});
};
export function getHeaderCloseButton(pop) {
  const arg1 = pop;
  return (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["onPress"] = arg0;
    return callback(closure_10, obj);
  };
}
export function getHeaderConditionalBackButton(handleBack) {
  const arg1 = handleBack;
  return (onPress) => {
    onPress = onPress.onPress;
    let obj = Object.create(null);
    obj.onPress = 0;
    async function _handlePress() {
      if (yield closure_0()) {
        if (null != callback) {
          callback();
        }
      }
    }
    obj = {};
    const merged = Object.assign(Object.assign(onPress, obj));
    obj["onPress"] = function handlePress() {
      return _handlePress(...arguments);
    };
    return callback(closure_11, obj);
  };
}
export function getHeaderBackButton(onClose, arg1) {
  let flag = arg1;
  arg1 = onClose;
  if (arg1 === undefined) {
    flag = false;
  }
  const importDefault = flag;
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
      if (!closure_1) {
        if (null != onPress) {
          onPress();
        }
      }
    };
    return callback(closure_11, obj);
  };
}
export function getHeaderTextButton(intl, callback) {
  callback = intl;
  const importDefault = callback;
  return (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["text"] = arg0;
    obj["onPress"] = arg1;
    return callback(closure_12, obj);
  };
}
export function getHeaderNoTitle() {
  return () => null;
}
export const FauxHeader = function FauxHeader(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const top = importDefault(dependencyMap[16])().top;
  let obj = {};
  const items = [styles().fauxHeaderWrapper, , ];
  obj = { paddingTop: top, height: top + arg1(dependencyMap[17]).NAV_BAR_HEIGHT };
  items[1] = obj;
  items[2] = style;
  obj.style = items;
  obj.children = children;
  return callback2(closure_4, obj);
};
export const HeaderSubmittingIndicator = function HeaderSubmittingIndicator() {
  const tmp = styles();
  return callback2(closure_5, { animating: true, style: tmp.submittingIndicator, color: tmp.submittingIndicator.color });
};
