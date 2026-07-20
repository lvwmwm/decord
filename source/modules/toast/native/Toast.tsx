// Module ID: 15502
// Function ID: 118314
// Name: ToastIcon
// Dependencies: []
// Exports: default

// Module 15502 (ToastIcon)
function ToastIcon(recolorLegacyIcon) {
  let IconComponent;
  let icon;
  let iconColor;
  ({ icon, IconComponent, iconColor } = recolorLegacyIcon);
  let obj = arg1(dependencyMap[6]);
  let str = "mobile-text-heading-primary";
  if (null != iconColor) {
    str = iconColor;
  }
  const token = obj.useToken(str);
  obj = {};
  if (recolorLegacyIcon.recolorLegacyIcon) {
    obj.color = token;
    let tmp2 = obj;
  } else {
    obj.disableColor = true;
    tmp2 = obj;
  }
  if (null != IconComponent) {
    obj = { size: "sm", color: token };
    let tmp3 = callback2(IconComponent, obj);
  } else if ("function" === typeof icon) {
    const obj1 = { children: icon() };
    tmp3 = callback2(closure_6, obj1);
  } else {
    tmp3 = null;
    if (null != icon) {
      const obj2 = { resizeMode: "contain", source: icon };
      const merged = Object.assign(tmp2);
      tmp3 = callback2(arg1(dependencyMap[7]).Icon, obj2);
    }
  }
  return tmp3;
}
function ToastContent(content) {
  content = content.content;
  const tmp = callback3();
  if ("function" === typeof content) {
    let obj = { style: tmp.contentContainer, children: content() };
    let tmp5 = callback2(View, obj);
  } else {
    obj = { getFormattedPriceForCollectiblesProduct: null, PATTERN_POSITION_TABLE: 16, FLV: -2, GiftingTier4LargeBadge: "text-sm/medium", fetchWebAuthnPasswordlessChallenge: "text-strong", onTextLayout: content.onTextLayout, style: tmp.contentContainer, children: content };
    tmp5 = callback2(arg1(dependencyMap[8]).Text, obj);
  }
  return tmp5;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { -9223372036854775808: true, filter: true, borderRadius: importDefault(dependencyMap[5]).radii.xxl, padding: importDefault(dependencyMap[5]).space.PX_8, paddingRight: importDefault(dependencyMap[5]).space.PX_12, backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_TOAST_BACKGROUND_DEFAULT, borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, borderWidth: 1 };
const merged = Object.assign(importDefault(dependencyMap[5]).shadows.SHADOW_HIGH);
obj.container = obj;
const tmp2 = arg1(dependencyMap[3]);
obj.multilineContainer = { paddingLeft: importDefault(dependencyMap[5]).space.PX_12 };
obj.contentContainer = {};
let closure_8 = obj.createStyles(obj);
const obj1 = { paddingLeft: importDefault(dependencyMap[5]).space.PX_12 };
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/toast/native/Toast.tsx");

export default function Toast(arg0) {
  let IconComponent;
  let containerStyle;
  let content;
  let icon;
  let iconColor;
  let recolorLegacyIcon;
  let tmp3;
  ({ icon, iconColor, IconComponent, content, containerStyle, recolorLegacyIcon } = arg0);
  const tmp = callback3();
  [tmp3, closure_0] = callback(React.useState(false), 2);
  let closure_1 = React.useRef(false);
  const obj = {};
  const items = [tmp.container, , ];
  let multilineContainer = null;
  const callback = React.useCallback((nativeEvent) => {
    if (!ref.current) {
      ref.current = true;
      callback(nativeEvent.nativeEvent.lines.length > 1);
    }
  }, []);
  if (tmp3) {
    multilineContainer = tmp.multilineContainer;
  }
  items[1] = multilineContainer;
  items[2] = containerStyle;
  obj.style = items;
  obj.accessibilityElementsHidden = true;
  const items1 = [callback2(ToastIcon, { icon, iconColor, IconComponent, recolorLegacyIcon }), callback2(ToastContent, { content, onTextLayout: callback })];
  obj.children = items1;
  return closure_7(View, obj);
};
