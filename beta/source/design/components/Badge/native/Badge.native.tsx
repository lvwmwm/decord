// Module ID: 7050
// Function ID: 7051
// Name: Badge/Badge
// Dependencies: [17, 21, 1113, 575, 5140, 5724, 5715, 7051, 5751, 2]
// Exports: Badge, getBadgeText

// Module 7050 (Badge/Badge)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import LinearGradientDefault from "LinearGradient" /* 5715 */;
import useToken from "useToken" /* 5724 */;
import Text_Text from "Text/Text" /* 5751 */;
import BadgeShared from "BadgeShared" /* 7051 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
function getBadgeColors(variant) {
  switch (variant) {
    case "secondary":
    {
      const obj2 = { background: nativeDefault.colors.BADGE_SECONDARY_BACKGROUND, border: nativeDefault.colors.BADGE_SECONDARY_BORDER, text: nativeDefault.colors.BADGE_SECONDARY_TEXT };
      return obj2;
    }
    case "primary":
    {
      const obj3 = { background: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND, border: nativeDefault.colors.BADGE_PRIMARY_BORDER, text: nativeDefault.colors.BADGE_PRIMARY_TEXT };
      return obj3;
    }
    case "expressive":
    {
      const obj4 = { background: nativeDefault.colors.BADGE_EXPRESSIVE_BACKGROUND, border: nativeDefault.colors.BADGE_EXPRESSIVE_BORDER, text: nativeDefault.colors.BADGE_EXPRESSIVE_TEXT };
      return obj4;
    }
    case "warning":
    {
      const obj5 = { background: nativeDefault.colors.BADGE_WARNING_BACKGROUND, border: nativeDefault.colors.BADGE_WARNING_BORDER, text: nativeDefault.colors.BADGE_WARNING_TEXT };
      return obj5;
    }
    case "critical":
    {
      const obj6 = { background: nativeDefault.colors.BADGE_CRITICAL_BACKGROUND, border: nativeDefault.colors.BADGE_CRITICAL_BORDER, text: nativeDefault.colors.BADGE_CRITICAL_TEXT };
      return obj6;
    }
    case "success":
    {
      const obj7 = { background: nativeDefault.colors.BADGE_SUCCESS_BACKGROUND, border: nativeDefault.colors.BADGE_SUCCESS_BORDER, text: nativeDefault.colors.BADGE_SUCCESS_TEXT };
      return obj7;
    }
    case "notification":
    {
      const obj8 = { background: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND, border: nativeDefault.colors.BADGE_NOTIFICATION_BORDER, text: nativeDefault.colors.BADGE_NOTIFICATION_TEXT };
      return obj8;
    }
    case "premium":
    {
      const obj9 = { background: nativeDefault.colors.BADGE_PREMIUM_BACKGROUND_GRADIENT_START, text: nativeDefault.colors.BADGE_PREMIUM_TEXT };
      return obj9;
    }
    case "inverted":
    {
      const obj10 = { background: nativeDefault.colors.BADGE_INVERTED_BACKGROUND, border: nativeDefault.colors.BADGE_INVERTED_BORDER, text: nativeDefault.colors.BADGE_INVERTED_TEXT };
      return obj10;
    }
    case "rarity-common":
    {
      const obj11 = { background: nativeDefault.colors.BADGE_COMMON_BACKGROUND, border: nativeDefault.colors.BADGE_COMMON_BORDER, text: nativeDefault.colors.BADGE_COMMON_TEXT };
      return obj11;
    }
    case "rarity-rare":
    {
      const obj12 = { background: nativeDefault.colors.BADGE_RARE_BACKGROUND, border: nativeDefault.colors.BADGE_RARE_BORDER_GRADIENT_START, text: nativeDefault.colors.BADGE_RARE_TEXT };
      return obj12;
    }
    case "rarity-epic":
    {
      const obj13 = { background: nativeDefault.colors.BADGE_EPIC_BACKGROUND, border: nativeDefault.colors.BADGE_EPIC_BORDER_GRADIENT_START, text: nativeDefault.colors.BADGE_EPIC_TEXT };
      return obj13;
    }
    case "rarity-mythic":
    {
      const obj = { background: nativeDefault.colors.BADGE_MYTHIC_BACKGROUND, border: nativeDefault.colors.BADGE_MYTHIC_TEXT, text: nativeDefault.colors.BADGE_MYTHIC_TEXT };
      return obj;
    }
    default:
    {
      break;
    }
  }
}
function PremiumGradient(style) {
  style = style.style;
  const colors = [, , ];
  const obj = useToken;
  colors[0] = obj.useToken(nativeDefault.colors.BADGE_PREMIUM_BACKGROUND_GRADIENT_START);
  const obj2 = useToken;
  colors[1] = obj2.useToken(nativeDefault.colors.BADGE_PREMIUM_BACKGROUND_GRADIENT_MID);
  const obj3 = useToken;
  colors[2] = obj3.useToken(nativeDefault.colors.BADGE_PREMIUM_BACKGROUND_GRADIENT_END);
  return React3(LinearGradientDefault, { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors, style });
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_7 = createStyles.createStyles((variant) => {
  let num;
  let str;
  let str2;
  const tmp = getBadgeColors(variant);
  let tmp2 = null;
  if ("premium" === variant) {
    tmp2 = React3(PremiumGradient, { style: null });
  }
  const tmp6 = null != tmp.border || null != tmp2;
  const obj = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4, minWidth: 0, maxWidth: "100%", minHeight: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: tmp.background, borderWidth: num, borderColor: str, overflow: str2 };
  num = 0;
  if (tmp6) {
    num = 1;
  }
  str = tmp.border;
  if (str == null) {
    str = "transparent";
  }
  str2 = "visible";
  if (null != tmp2) {
    str2 = "hidden";
  }
  return { badge: obj, gradient: { position: "absolute", top: -1, bottom: -1, left: -1, right: -1 }, label: { flexShrink: 1, minWidth: 0, textAlign: "center", textTransform: "uppercase", color: tmp.text } };
});
const result = size.fileFinishedImporting("design/components/Badge/native/Badge.native.tsx");

export function getBadgeText(type) {
  if ("new" === type) {
    const intl4 = intl5.intl;
    return intl4.string(intl5.t.y2b7CA);
  } else if ("beta" === type) {
    const intl3 = intl5.intl;
    return intl3.string(intl5.t.oW0eUd);
  } else if ("early_access" === type) {
    const intl2 = intl5.intl;
    return intl2.string(intl5.t.EYxi0o);
  } else if ("free_trial" === type) {
    const intl = intl5.intl;
    return intl.string(intl5.t.IBYG5U);
  } else {
    return type.text;
  }
}
export function Badge(icon) {
  let items;
  let text;
  let type;
  let variant;
  ({ type, variant } = icon);
  if (variant === undefined) {
    variant = BadgeShared.DEFAULT_BADGE_VARIANT;
  }
  icon = icon.icon;
  const tmp3 = closure_7(variant);
  if ("new" === type) {
    const intl4 = intl5.intl;
    text = intl4.string(intl5.t.y2b7CA);
  } else if ("beta" === type) {
    const intl3 = intl5.intl;
    text = intl3.string(intl5.t.oW0eUd);
  } else if ("early_access" === type) {
    const intl2 = intl5.intl;
    text = intl2.string(intl5.t.EYxi0o);
  } else if ("free_trial" === type) {
    const intl = intl5.intl;
    text = intl.string(intl5.t.IBYG5U);
  } else {
    text = type.text;
  }
  let tmp15 = null;
  const obj = { style: tmp3.badge, children: items };
  const tmp12 = hasOwnProperty;
  const tmp13 = View;
  if ("premium" === variant) {
    const obj2 = { style: tmp14 };
    tmp15 = React3(PremiumGradient, obj2);
  }
  items = [tmp15, , ];
  let tmp18 = null;
  if (null != icon) {
    const obj3 = { size: "xxs", color: getBadgeColors(variant).text, accessible: false };
    tmp18 = React3(icon, obj3);
  }
  items[1] = tmp18;
  const obj4 = { variant: "body-xs/semibold", color: "none", lineClamp: 1, style: tmp3.label, children: text };
  items[2] = React3(Text_Text.Text, obj4);
  return tmp12(tmp13, obj);
}
