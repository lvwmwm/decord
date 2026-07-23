// Module ID: 15637
// Function ID: 120593
// Name: ToastIcon
// Dependencies: [57, 31, 27, 33, 4130, 689, 3834, 1273, 4126, 2]
// Exports: default

// Module 15637 (ToastIcon)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function ToastIcon(recolorLegacyIcon) {
  let IconComponent;
  let icon;
  let iconColor;
  ({ icon, IconComponent, iconColor } = recolorLegacyIcon);
  let obj = require(3834) /* map */;
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
      tmp3 = callback2(require(1273) /* Button */.Icon, obj2);
    }
  }
  return tmp3;
}
function ToastContent(content) {
  content = content.content;
  const tmp = _createForOfIteratorHelperLoose();
  if ("function" === typeof content) {
    let obj = { style: tmp.contentContainer, children: content() };
    let tmp5 = callback2(View, obj);
  } else {
    obj = { onTextLayout: content.onTextLayout, style: tmp.contentContainer, lineClamp: 3, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: content };
    tmp5 = callback2(require(4126) /* Text */.Text, obj);
  }
  return tmp5;
}
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.xxl, padding: require("_createForOfIteratorHelperLoose").space.PX_8, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_TOAST_BACKGROUND_DEFAULT, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderWidth: 1 };
let merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_HIGH);
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.multilineContainer = { paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.contentContainer = { marginLeft: 8, flexShrink: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_12 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/toast/native/Toast.tsx");

export default function Toast(arg0) {
  let IconComponent;
  let containerStyle;
  let content;
  let icon;
  let iconColor;
  let recolorLegacyIcon;
  let require;
  let tmp3;
  ({ icon, iconColor, IconComponent, content, containerStyle, recolorLegacyIcon } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  [tmp3, require] = callback(React.useState(false), 2);
  let closure_1 = React.useRef(false);
  const obj = {};
  const items = [tmp.container, , ];
  let multilineContainer = null;
  callback = React.useCallback((nativeEvent) => {
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
