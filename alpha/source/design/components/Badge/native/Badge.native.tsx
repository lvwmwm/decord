// Module ID: 7269
// Function ID: 7270
// Name: Badge/Badge
// Dependencies: [17, 21, 1125, 587, 5004, 558, 576, 5288, 5294, 7270, 5071, 5270, 2]

// Module 7269 (Badge/Badge)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useBadgeTextVariant from "useBadgeTextVariant" /* 5071 */;
import Text_Text from "Text/Text" /* 5270 */;
import useToken from "useToken" /* 5288 */;
import BadgeShared from "BadgeShared" /* 7270 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5004 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp3;
const LinearGradientDefault = tmp3(5294);
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
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_7 = createStyles.createStyles((variant) => {
  let num;
  let str;
  let str2;
  const tmp = getBadgeColors(variant);
  let tmp2 = null;
  if ("premium" === variant) {
    tmp2 = React3(closure_8, { style: null });
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumGradient(style) {
  const obj = react;
  const cResult = obj.c(9);
  style = style.style;
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.BADGE_PREMIUM_BACKGROUND_GRADIENT_START);
  const obj3 = useToken;
  const token1 = obj3.useToken(nativeDefault.colors.BADGE_PREMIUM_BACKGROUND_GRADIENT_MID);
  const obj4 = useToken;
  const token2 = obj4.useToken(nativeDefault.colors.BADGE_PREMIUM_BACKGROUND_GRADIENT_END);
  if (cResult[0] === token) {
    if (cResult[1] === token1) {
      let tmp7;
      let tmp10;
      let tmp9;
      if (cResult[2] === token2) {
        tmp7 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const point = { x: 0, y: 0 };
        const point1 = { x: 1, y: 0 };
        cResult[4] = point;
        cResult[5] = point1;
        tmp10 = point1;
        tmp9 = point;
      } else {
        tmp9 = cResult[4];
        tmp10 = cResult[5];
      }
      if (cResult[6] === tmp7) {
        let tmp11;
        if (cResult[7] === style) {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
      const obj5 = { start: tmp9, end: tmp10, colors: tmp7, style };
      const tmp13 = React3(LinearGradientDefault, obj5);
      cResult[6] = tmp7;
      cResult[7] = style;
      cResult[8] = tmp13;
      tmp11 = tmp13;
    }
  }
  const items = [token, token1, token2];
  cResult[0] = token;
  cResult[1] = token1;
  cResult[2] = token2;
  cResult[3] = items;
  tmp7 = items;
}) : (function PremiumGradient(style) {
  style = style.style;
  const colors = [, , ];
  const obj = useToken;
  colors[0] = obj.useToken(nativeDefault.colors.BADGE_PREMIUM_BACKGROUND_GRADIENT_START);
  const obj2 = useToken;
  colors[1] = obj2.useToken(nativeDefault.colors.BADGE_PREMIUM_BACKGROUND_GRADIENT_MID);
  const obj3 = useToken;
  colors[2] = obj3.useToken(nativeDefault.colors.BADGE_PREMIUM_BACKGROUND_GRADIENT_END);
  return React3(LinearGradientDefault, { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors, style });
});
ReactCompilerGating = ReactCompilerGating_mod;
tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function Badge(arg0) {
  let icon;
  let items;
  let tmp6;
  let type;
  let variant;
  const obj = react;
  const cResult = obj.c(17);
  ({ type, variant, icon } = arg0);
  if (undefined === variant) {
    variant = tmp(7270).DEFAULT_BADGE_VARIANT;
  }
  const tmp4 = closure_7(variant);
  const tmpResult = useBadgeTextVariant;
  const badgeTextVariant = tmpResult.useBadgeTextVariant();
  if (cResult[0] !== type) {
    let text;
    if ("new" === type) {
      const intl4 = tmp(1125).intl;
      text = intl4.string(tmp(1125).t.y2b7CA);
    } else if ("beta" === type) {
      const intl3 = tmp(1125).intl;
      text = intl3.string(tmp(1125).t.oW0eUd);
    } else if ("early_access" === type) {
      const intl2 = tmp(1125).intl;
      text = intl2.string(tmp(1125).t.EYxi0o);
    } else if ("free_trial" === type) {
      const intl = tmp(1125).intl;
      text = intl.string(tmp(1125).t.IBYG5U);
    } else {
      text = type.text;
    }
    cResult[0] = type;
    cResult[1] = text;
    tmp6 = text;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp4.gradient) {
    let tmp8;
    if (cResult[3] === variant) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === icon) {
      let tmp13;
      if (cResult[6] === variant) {
        tmp13 = cResult[7];
      }
      if (cResult[8] === tmp4.label) {
        if (cResult[9] === tmp6) {
          let tmp17;
          if (cResult[10] === badgeTextVariant) {
            tmp17 = cResult[11];
          }
          if (cResult[12] === tmp4.badge) {
            if (cResult[13] === tmp8) {
              if (cResult[14] === tmp13) {
                let tmp20;
                if (cResult[15] === tmp17) {
                  tmp20 = cResult[16];
                }
                return tmp20;
              }
            }
          }
          const obj2 = { style: tmp7, children: items };
          items = [tmp8, tmp13, tmp17];
          const tmp23 = hasOwnProperty(View, obj2);
          cResult[12] = tmp4.badge;
          cResult[13] = tmp8;
          cResult[14] = tmp13;
          cResult[15] = tmp17;
          cResult[16] = tmp23;
          tmp20 = tmp23;
        }
      }
      const obj3 = { variant: badgeTextVariant, color: "none", lineClamp: 1, style: tmp4.label, children: tmp6 };
      const tmp19 = React3(Text_Text.Text, obj3);
      cResult[8] = tmp4.label;
      cResult[9] = tmp6;
      cResult[10] = badgeTextVariant;
      cResult[11] = tmp19;
      tmp17 = tmp19;
    }
    let tmp14 = null;
    if (null != icon) {
      const obj4 = { size: "xxs", color: getBadgeColors(variant).text, accessible: false };
      tmp14 = React3(icon, obj4);
    }
    cResult[5] = icon;
    cResult[6] = variant;
    cResult[7] = tmp14;
    tmp13 = tmp14;
  }
  let tmp10 = null;
  if ("premium" === variant) {
    const obj5 = { style: tmp9 };
    tmp10 = React3(closure_8, obj5);
  }
  cResult[2] = tmp4.gradient;
  cResult[3] = variant;
  cResult[4] = tmp10;
  tmp8 = tmp10;
}) : (function Badge(icon) {
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
  const obj = useBadgeTextVariant;
  const badgeTextVariant = obj.useBadgeTextVariant();
  if ("new" === type) {
    const intl4 = tmp4(1125).intl;
    text = intl4.string(tmp4(1125).t.y2b7CA);
  } else if ("beta" === type) {
    const intl3 = tmp4(1125).intl;
    text = intl3.string(tmp4(1125).t.oW0eUd);
  } else if ("early_access" === type) {
    const intl2 = tmp4(1125).intl;
    text = intl2.string(tmp4(1125).t.EYxi0o);
  } else if ("free_trial" === type) {
    const intl = tmp4(1125).intl;
    text = intl.string(tmp4(1125).t.IBYG5U);
  } else {
    text = type.text;
  }
  let tmp10 = null;
  const obj2 = { style: tmp3.badge, children: items };
  const tmp7 = hasOwnProperty;
  const tmp8 = View;
  if ("premium" === variant) {
    const obj3 = { style: tmp9 };
    tmp10 = React3(closure_8, obj3);
  }
  items = [tmp10, , ];
  let tmp13 = null;
  if (null != icon) {
    const obj4 = { size: "xxs", color: getBadgeColors(variant).text, accessible: false };
    tmp13 = React3(icon, obj4);
  }
  items[1] = tmp13;
  const obj5 = { variant: badgeTextVariant, color: "none", lineClamp: 1, style: tmp3.label, children: text };
  items[2] = React3(Text_Text.Text, obj5);
  return tmp7(tmp8, obj2);
});
const result = size.fileFinishedImporting("design/components/Badge/native/Badge.native.tsx");

export const Badge = tmp3;
