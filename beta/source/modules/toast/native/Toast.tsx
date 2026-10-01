// Module ID: 16786
// Function ID: 16787
// Name: Toast
// Dependencies: [32, 19, 17, 21, 4836, 576, 4531, 1177, 4832, 2]
// Exports: default

// Module 16786 (Toast)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useToken2 from "useToken" /* 4531 */;
import Text_Text from "Text/Text" /* 4832 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp;
const native = tmp(1177);
function ToastIcon(recolorLegacyIcon) {
  let IconComponent;
  let icon;
  let iconColor;
  let obj;
  let tmp9;
  ({ icon, IconComponent, iconColor } = recolorLegacyIcon);
  recolorLegacyIcon = recolorLegacyIcon.recolorLegacyIcon;
  const useToken = useToken2.useToken;
  useToken2;
  if (iconColor == null) {
    iconColor = "mobile-text-heading-primary";
  }
  const token = useToken(iconColor);
  if (recolorLegacyIcon) {
    obj = { color: token };
    const obj2 = { color: token };
  } else {
    obj = { disableColor: true };
  }
  if (null != IconComponent) {
    const obj3 = { size: "sm", color: token };
    tmp9 = hasOwnProperty(IconComponent, obj3);
  } else if (typeof icon === "function") {
    const obj4 = { children: icon() };
    tmp9 = hasOwnProperty(metroRequire, obj4);
  } else {
    tmp9 = null;
    if (null != icon) {
      const obj5 = { resizeMode: "contain", source: icon };
      const Icon = native.Icon;
      const merged = Object.assign(obj);
      tmp9 = hasOwnProperty(Icon, obj5);
    }
  }
  return tmp9;
}
function ToastContent(content) {
  let tmp4;
  content = content.content;
  const onTextLayout = content.onTextLayout;
  const tmp = closure_8();
  if (typeof content === "function") {
    const obj = { style: tmp.contentContainer, children: content() };
    tmp4 = hasOwnProperty(View, obj);
  } else {
    const obj2 = { onTextLayout, style: tmp.contentContainer, lineClamp: 3, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: content };
    tmp4 = hasOwnProperty(Text_Text.Text, obj2);
  }
  return tmp4;
}
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, multilineContainer: obj3, contentContainer: { marginLeft: 8, flexShrink: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.xxl, padding: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.MOBILE_TOAST_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1 };
createStyles = createStyles.createStyles;
let merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj3 = { paddingLeft: nativeDefault.space.PX_12 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/toast/native/Toast.tsx");

export default function Toast(arg0) {
  let IconComponent;
  let c0;
  let containerStyle;
  let content;
  let icon;
  let iconColor;
  let items1;
  let recolorLegacyIcon;
  let tmp3;
  c0 = undefined;
  ({ icon, iconColor, IconComponent, content, containerStyle, recolorLegacyIcon } = arg0);
  const tmp = closure_8();
  [tmp3, c0] = _slicedToArray(react.useState(false), 2);
  const tmp2 = _slicedToArray(react.useState(false), 2);
  let closure_1 = react.useRef(false);
  const items = [tmp.container, , ];
  let multilineContainer = null;
  const callback = react.useCallback((nativeEvent) => {
    if (!ref.current) {
      tmp.current = true;
      _undefined(nativeEvent.nativeEvent.lines.length > 1);
    }
  }, []);
  const tmp5 = metroImportDefault;
  const tmp6 = View;
  if (tmp3) {
    multilineContainer = tmp.multilineContainer;
  }
  const obj = { style: items, accessibilityElementsHidden: true, children: items1 };
  items[1] = multilineContainer;
  items[2] = containerStyle;
  items1 = [hasOwnProperty(ToastIcon, { icon, iconColor, IconComponent, recolorLegacyIcon }), hasOwnProperty(ToastContent, { content, onTextLayout: callback })];
  return tmp5(tmp6, obj);
};
