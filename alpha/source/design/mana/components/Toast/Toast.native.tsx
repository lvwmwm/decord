// Module ID: 14103
// Function ID: 14104
// Name: Toast/Toast
// Dependencies: [19, 17, 21, 587, 4992, 5000, 5090, 558, 576, 4778, 14104, 14105, 14106, 5086, 2]

// Module 14103 (Toast/Toast)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4778 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4992 */;
import CircleErrorIcon from "CircleErrorIcon" /* 5000 */;
import _mod14104 from "module_14104" /* 14104 */;
import ToastEntity from "ToastEntity" /* 14105 */;
import isEmptyDefault from "isEmpty" /* 14106 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
    BACKGROUND_BASE_LOW = tmp(587).colors.BACKGROUND_SURFACE_HIGHEST;
  } else {
    BACKGROUND_BASE_LOW = tmp(587).colors.BACKGROUND_BASE_LOW;
  }
  const obj2 = { wrapper, baselayer: obj3, default: { borderColor: nativeDefault.colors.BORDER_NORMAL }, success: { borderColor: nativeDefault.colors.TOAST_SUCCESS_BORDER, backgroundColor: nativeDefault.colors.TOAST_SUCCESS_BACKGROUND }, critical: { borderColor: nativeDefault.colors.TOAST_CRITICAL_BORDER, backgroundColor: nativeDefault.colors.TOAST_CRITICAL_BACKGROUND }, icon: { flexShrink: 0 }, text: { flexShrink: 1 } };
  const merged = Object.assign(tmp(587).shadows.SHADOW_HIGH);
  obj3 = { borderRadius: nativeDefault.radii.md, borderWidth: 1 };
  const merged1 = Object.assign(absoluteFill.absoluteFill);
  ({ borderColor: nativeDefault.colors.BORDER_NORMAL });
  ({ borderColor: nativeDefault.colors.TOAST_SUCCESS_BORDER, backgroundColor: nativeDefault.colors.TOAST_SUCCESS_BACKGROUND });
  ({ borderColor: nativeDefault.colors.TOAST_CRITICAL_BORDER, backgroundColor: nativeDefault.colors.TOAST_CRITICAL_BACKGROUND });
  return obj2;
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function Toast(iconColor) {
  let icon;
  let items;
  let items1;
  let secondaryIconColor;
  let text;
  let tmp10;
  let variant;
  const obj = react2;
  const cResult = obj.c(21);
  ({ variant, text, icon, secondaryIconColor } = iconColor);
  let str = "default";
  iconColor = iconColor.iconColor;
  if (undefined !== variant) {
    str = variant;
  }
  const tmp4 = closure_9(str);
  const tmpResult = useToken;
  const token = tmpResult.useToken(nativeDefault.modules.toast.TEXT_LINE_COUNT);
  if (null == obj[str]) {
    const tmpResult3 = _mod14104;
    if (tmpResult3.isToastEntity(icon)) {
      let tmp19;
      if (cResult[0] !== icon) {
        const obj2 = { entity: icon };
        const tmp21 = metroRequire(ToastEntity.ToastEntity, obj2);
        cResult[0] = icon;
        cResult[1] = tmp21;
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[1];
      }
      tmp10 = tmp19;
    }
    if (cResult[9] === tmp4.baselayer) {
      let tmp23;
      if (cResult[10] === tmp4[str]) {
        tmp23 = cResult[11];
      }
      if (cResult[12] === tmp4.text) {
        if (cResult[13] === text) {
          let tmp27;
          if (cResult[14] === token) {
            tmp27 = cResult[15];
          }
          if (cResult[16] === tmp10) {
            if (cResult[17] === tmp4.wrapper) {
              if (cResult[18] === tmp23) {
                let tmp31;
                if (cResult[19] === tmp27) {
                  tmp31 = cResult[20];
                }
                return tmp31;
              }
            }
          }
          const obj3 = { style: tmp4.wrapper, children: items };
          items = [tmp23, tmp10, tmp27];
          const tmp34 = metroImportDefault(hasOwnProperty, obj3);
          cResult[16] = tmp10;
          cResult[17] = tmp4.wrapper;
          cResult[18] = tmp23;
          cResult[19] = tmp27;
          cResult[20] = tmp34;
          tmp31 = tmp34;
        }
      }
      let tmp29 = !isEmptyDefault(text);
      isEmptyDefault(text);
      if (tmp29) {
        const obj4 = { variant: "text-md/normal", color: "text-strong", lineClamp: token, style: tmp4.text, children: text };
        tmp29 = metroRequire(tmp(5086).Text, obj4);
      }
      cResult[12] = tmp4.text;
      cResult[13] = text;
      cResult[14] = token;
      cResult[15] = tmp29;
      tmp27 = tmp29;
    }
    const obj5 = { style: items1 };
    items1 = [tmp4.baselayer, tmp4[str]];
    const tmp26 = metroRequire(hasOwnProperty, obj5);
    cResult[9] = tmp4.baselayer;
    cResult[10] = tmp4[str];
    cResult[11] = tmp26;
    tmp23 = tmp26;
  }
  let icon1;
  if (obj[str] != null) {
    icon1 = tmp7.icon;
  }
  if (icon1 == null) {
    let tmp9;
    const tmpResult4 = _mod14104;
    if (!tmpResult4.isToastEntity(icon)) {
      tmp9 = icon;
    }
    icon1 = tmp9;
  }
  tmp10 = null;
  if (null != icon1) {
    let color;
    if (obj[str] != null) {
      color = tmp7.color;
    }
    if (color == null) {
      color = iconColor;
    }
    if (color == null) {
      color = tmp5(587).colors.ICON_DEFAULT;
    }
    if (cResult[2] === secondaryIconColor) {
      let tmp12;
      if (cResult[3] === color) {
        tmp12 = cResult[4];
      }
      if (cResult[5] === icon1) {
        if (cResult[6] === tmp12) {
          let tmp13;
          if (cResult[7] === tmp4.icon) {
            tmp13 = cResult[8];
          }
          tmp10 = tmp13;
        }
      }
      const obj6 = { style: tmp4.icon, size: "sm" };
      const merged = Object.assign(tmp12);
      const tmp18 = metroRequire(icon1, obj6);
      cResult[5] = icon1;
      cResult[6] = tmp12;
      cResult[7] = tmp4.icon;
      cResult[8] = tmp18;
      tmp13 = tmp18;
    }
    const obj7 = { color };
    if (null != secondaryIconColor) {
      obj7.secondaryColor = secondaryIconColor;
    }
    cResult[2] = secondaryIconColor;
    cResult[3] = color;
    cResult[4] = obj7;
    tmp12 = obj7;
  }
}) : (function Toast(variant) {
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
  let obj = str(iconColor[9]);
  const items = [icon, iconColor, secondaryIconColor, tmp.icon, str];
  const token = obj.useToken(icon(iconColor[3]).modules.toast.TEXT_LINE_COUNT);
  let obj2 = { style: tmp.wrapper, children: items2 };
  let obj3 = { style: items1 };
  items1 = [tmp.baselayer, tmp[str]];
  const memo = secondaryIconColor.useMemo(() => {
    let obj;
    if (null == obj[str]) {
      obj = _mod14104;
      const tmp2 = require;
      const tmp4 = icon;
      if (obj.isToastEntity(icon)) {
        const obj3 = { entity: tmp4 };
        return metroRequire(tmp2(14105).ToastEntity, obj3);
      }
    }
    icon = undefined;
    if (obj[str] != null) {
      icon = tmp.icon;
    }
    if (icon == null) {
      let tmp9;
      const obj2 = _mod14104;
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
  let tmp9 = icon(iconColor[12])(text);
  let tmp8Result = !tmp9;
  const tmp3 = iconColor;
  const tmp6 = closure_7;
  const tmp7 = closure_5;
  if (tmp8Result) {
    let obj4 = { variant: "text-md/normal", color: "text-strong", lineClamp: token, style: tmp.text, children: text };
    tmp8Result = tmp8(tmp2(tmp3[13]).Text, obj4);
  }
  items2[2] = tmp8Result;
  return tmp6(tmp7, obj2);
});
const result = size.fileFinishedImporting("design/mana/components/Toast/Toast.native.tsx");

export const Toast = tmp4;
