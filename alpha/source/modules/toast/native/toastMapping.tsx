// Module ID: 4774
// Function ID: 4775
// Name: toastMapping
// Dependencies: [4775, 2]
// Exports: toManaToast

// Module 4774 (toastMapping)
import toastIconSubstitutions from "toastIconSubstitutions" /* 4775 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/toast/native/toastMapping.tsx");

export const toManaToast = function toManaToast(position) {
  let IconComponent;
  let content;
  let icon;
  let iconColor;
  ({ content, icon, IconComponent, iconColor } = position);
  const obj = { surface: "app", position: position.position, duration: position.toastDurationMs };
  if (null != IconComponent) {
    let obj3;
    const TOAST_STATUS_ICONS = toastIconSubstitutions.TOAST_STATUS_ICONS;
    const value = TOAST_STATUS_ICONS.get(IconComponent);
    if (null != value) {
      const obj2 = { text: content, variant: value };
      const merged = Object.assign(obj);
      obj3 = obj2;
    } else {
      obj3 = { text: content, variant: "default", icon: IconComponent, iconColor };
      const merged1 = Object.assign(obj);
    }
    return obj3;
  } else {
    let tmp8;
    let value2;
    if (null != icon) {
      const TOAST_PNG_SUBSTITUTIONS = toastIconSubstitutions.TOAST_PNG_SUBSTITUTIONS;
      value2 = TOAST_PNG_SUBSTITUTIONS.get(icon);
    }
    if (null == value2) {
      const obj4 = { text: content, variant: "default" };
      const merged2 = Object.assign(obj);
      tmp8 = obj4;
    } else {
      const obj5 = { text: content };
      const tmp4 = "variant" in value2;
      const merged3 = Object.assign(obj);
      if (tmp4) {
        obj5.variant = value2.variant;
        tmp8 = obj5;
      } else {
        obj5.variant = "default";
        obj5.icon = value2.icon;
        obj5.iconColor = iconColor;
        tmp8 = obj5;
      }
    }
    return tmp8;
  }
};
