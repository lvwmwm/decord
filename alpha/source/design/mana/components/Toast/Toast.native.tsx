// Module ID: 15858
// Function ID: 15859
// Name: Toast
// Dependencies: [19, 17, 21, 575, 7340, 7086, 5014, 5596, 15859, 15860, 15861, 5624, 2]
// Exports: Toast

// Module 15858 (Toast)
import nativeDefault from "native" /* 575 */;
import CircleErrorIcon from "CircleErrorIcon" /* 7086 */;
import CircleCheckIcon from "CircleCheckIcon" /* 7340 */;
import _mod15859 from "module_15859" /* 15859 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let wrapper = { success: obj2, critical: obj3 };
obj2 = { color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE, icon: CircleCheckIcon.CircleCheckIcon };
obj3 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, icon: CircleErrorIcon.CircleErrorIcon };
let closure_9 = createStyles.createStyles((arg0) => {
  let BACKGROUND_BASE_LOW;
  let obj3;
  wrapper = { flexDirection: "row", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, justifyContent: "center", alignItems: "center", maxWidth: nativeDefault.modules.toast.MAX_WIDTH, backgroundColor: BACKGROUND_BASE_LOW };
  if ("default" === arg0) {
    BACKGROUND_BASE_LOW = tmp(575).colors.BACKGROUND_SURFACE_HIGHEST;
  } else {
    BACKGROUND_BASE_LOW = tmp(575).colors.BACKGROUND_BASE_LOW;
  }
  const obj2 = { wrapper, baselayer: obj3, default: { borderColor: nativeDefault.colors.BORDER_NORMAL }, success: { borderColor: nativeDefault.colors.TOAST_SUCCESS_BORDER, backgroundColor: nativeDefault.colors.TOAST_SUCCESS_BACKGROUND }, critical: { borderColor: nativeDefault.colors.TOAST_CRITICAL_BORDER, backgroundColor: nativeDefault.colors.TOAST_CRITICAL_BACKGROUND }, icon: { flexShrink: 0 }, text: { flexShrink: 1 } };
  const merged = Object.assign(tmp(575).shadows.SHADOW_HIGH);
  obj3 = { borderRadius: nativeDefault.radii.md, borderWidth: 1 };
  const merged1 = Object.assign(absoluteFill.absoluteFill);
  ({ borderColor: nativeDefault.colors.BORDER_NORMAL });
  ({ borderColor: nativeDefault.colors.TOAST_SUCCESS_BORDER, backgroundColor: nativeDefault.colors.TOAST_SUCCESS_BACKGROUND });
  ({ borderColor: nativeDefault.colors.TOAST_CRITICAL_BORDER, backgroundColor: nativeDefault.colors.TOAST_CRITICAL_BACKGROUND });
  return obj2;
});
const result = size.fileFinishedImporting("design/mana/components/Toast/Toast.native.tsx");

export function Toast(variant) {
  let icon;
  let items1;
  let items2;
  let text;
  let str = variant.variant;
  if (str === undefined) {
    str = "default";
  }
  ({ text, icon } = variant);
  const iconColor = variant.iconColor;
  const secondaryIconColor = variant.secondaryIconColor;
  const tmp = closure_9(str);
  icon = tmp;
  let tmp2 = str;
  let obj = str(iconColor[7]);
  const items = [icon, iconColor, secondaryIconColor, tmp.icon, str];
  const token = obj.useToken(icon(iconColor[3]).modules.toast.TEXT_LINE_COUNT);
  let obj2 = { style: tmp.wrapper, children: items2 };
  let obj3 = { style: items1 };
  items1 = [tmp.baselayer, tmp[str]];
  const memo = secondaryIconColor.useMemo(() => {
    let obj;
    if (null == obj[str]) {
      obj = _mod15859;
      const tmp2 = require;
      const tmp4 = icon;
      if (obj.isToastEntity(icon)) {
        const obj3 = { entity: tmp4 };
        return metroRequire(tmp2(15860).ToastEntity, obj3);
      }
    }
    icon = undefined;
    if (obj[str] != null) {
      icon = tmp.icon;
    }
    if (icon == null) {
      let tmp9;
      const obj2 = _mod15859;
      const tmp8 = icon;
      if (!obj2.isToastEntity(icon)) {
        tmp9 = tmp8;
      }
      icon = tmp9;
    }
    if (null == icon) {
      return null;
    } else {
      let color;
      if (obj[str] != null) {
        color = tmp.color;
      }
      if (color == null) {
        color = iconColor;
      }
      if (color == null) {
        color = nativeDefault.colors.ICON_DEFAULT;
      }
      const obj4 = { color };
      if (null != secondaryIconColor) {
        obj4.secondaryColor = secondaryIconColor;
      }
      const obj5 = { style: icon.icon, size: "sm" };
      const merged = Object.assign(obj4);
      return metroRequire(icon, obj5);
    }
  }, items);
  let tmp8 = closure_6;
  items2 = [closure_6(closure_5, obj3), memo, ];
  let tmp9 = icon(iconColor[10])(text);
  let tmp8Result = !tmp9;
  const tmp3 = iconColor;
  const tmp6 = closure_7;
  const tmp7 = closure_5;
  if (tmp8Result) {
    let obj4 = { variant: "text-md/normal", color: "text-strong", lineClamp: token, style: tmp.text, children: text };
    tmp8Result = tmp8(tmp2(tmp3[11]).Text, obj4);
  }
  items2[2] = tmp8Result;
  return tmp6(tmp7, obj2);
}
