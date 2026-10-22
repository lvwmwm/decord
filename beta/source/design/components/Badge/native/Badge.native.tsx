// Module ID: 13093
// Function ID: 13094
// Name: Badge/Badge
// Dependencies: [17, 21, 1128, 587, 5191, 558, 576, 13094, 4925, 5187, 2]

// Module 13093 (Badge/Badge)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useBadgeTextVariant from "useBadgeTextVariant" /* 4925 */;
import Text_Text from "Text/Text" /* 5187 */;
import BadgeShared from "BadgeShared" /* 13094 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5191 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
function getBadgeColors(variant) {
  if ("secondary" === variant) {
    const obj2 = { background: nativeDefault.colors.BADGE_SECONDARY_BACKGROUND, text: nativeDefault.colors.BADGE_SECONDARY_TEXT };
    return obj2;
  } else if ("primary" === variant) {
    const obj3 = { background: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND, text: nativeDefault.colors.BADGE_PRIMARY_TEXT };
    return obj3;
  } else if ("expressive" === variant) {
    const obj4 = { background: nativeDefault.colors.BADGE_EXPRESSIVE_BACKGROUND, text: nativeDefault.colors.BADGE_EXPRESSIVE_TEXT };
    return obj4;
  } else if ("rarity-common" === variant) {
    const obj5 = { background: nativeDefault.colors.BADGE_COMMON_BACKGROUND, border: nativeDefault.colors.BADGE_COMMON_BORDER, text: nativeDefault.colors.BADGE_COMMON_TEXT };
    return obj5;
  } else if ("rarity-rare" === variant) {
    const obj6 = { background: nativeDefault.colors.BADGE_RARE_BACKGROUND, border: nativeDefault.colors.BADGE_RARE_BORDER_GRADIENT_START, text: nativeDefault.colors.BADGE_RARE_TEXT };
    return obj6;
  } else if ("rarity-epic" === variant) {
    const obj7 = { background: nativeDefault.colors.BADGE_EPIC_BACKGROUND, border: nativeDefault.colors.BADGE_EPIC_BORDER_GRADIENT_START, text: nativeDefault.colors.BADGE_EPIC_TEXT };
    return obj7;
  } else if ("rarity-mythic" === variant) {
    const obj = { background: nativeDefault.colors.BADGE_MYTHIC_BACKGROUND, border: nativeDefault.colors.BADGE_MYTHIC_TEXT, text: nativeDefault.colors.BADGE_MYTHIC_TEXT };
    return obj;
  }
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_7 = createStyles.createStyles((variant) => {
  let str;
  let num = 0;
  const tmp = getBadgeColors(variant);
  const obj = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4, minWidth: 0, maxWidth: "100%", minHeight: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: tmp.background, borderWidth: num, borderColor: str };
  const tmp2 = null != tmp.border;
  if (tmp2) {
    num = 1;
  }
  str = tmp.border;
  if (str == null) {
    str = "transparent";
  }
  return { badge: obj, label: { flexShrink: 1, minWidth: 0, textAlign: "center", textTransform: "uppercase", color: tmp.text } };
});
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function Badge(arg0) {
  let icon;
  let items;
  let tmp6;
  let type;
  let variant;
  const obj = react;
  const cResult = obj.c(13);
  ({ type, variant, icon } = arg0);
  if (undefined === variant) {
    variant = tmp(13094).DEFAULT_BADGE_VARIANT;
  }
  const tmp4 = closure_7(variant);
  const tmpResult = useBadgeTextVariant;
  const badgeTextVariant = tmpResult.useBadgeTextVariant();
  if (cResult[0] !== type) {
    let text;
    if ("new" === type) {
      const intl4 = tmp(1128).intl;
      text = intl4.string(tmp(1128).t.y2b7CA);
    } else if ("beta" === type) {
      const intl3 = tmp(1128).intl;
      text = intl3.string(tmp(1128).t.oW0eUd);
    } else if ("early_access" === type) {
      const intl2 = tmp(1128).intl;
      text = intl2.string(tmp(1128).t.EYxi0o);
    } else if ("free_trial" === type) {
      const intl = tmp(1128).intl;
      text = intl.string(tmp(1128).t.IBYG5U);
    } else {
      text = type.text;
    }
    cResult[0] = type;
    cResult[1] = text;
    tmp6 = text;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === icon) {
    let tmp7;
    if (cResult[3] === variant) {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp4.label) {
      if (cResult[6] === tmp6) {
        let tmp11;
        if (cResult[7] === badgeTextVariant) {
          tmp11 = cResult[8];
        }
        if (cResult[9] === tmp4.badge) {
          if (cResult[10] === tmp7) {
            let tmp14;
            if (cResult[11] === tmp11) {
              tmp14 = cResult[12];
            }
            return tmp14;
          }
        }
        const obj2 = { style: tmp4.badge, children: items };
        items = [tmp7, tmp11];
        const tmp17 = hasOwnProperty(View, obj2);
        cResult[9] = tmp4.badge;
        cResult[10] = tmp7;
        cResult[11] = tmp11;
        cResult[12] = tmp17;
        tmp14 = tmp17;
      }
    }
    const obj3 = { variant: badgeTextVariant, color: "none", lineClamp: 1, style: tmp4.label, children: tmp6 };
    const tmp13 = React3(Text_Text.Text, obj3);
    cResult[5] = tmp4.label;
    cResult[6] = tmp6;
    cResult[7] = badgeTextVariant;
    cResult[8] = tmp13;
    tmp11 = tmp13;
  }
  let tmp8 = null;
  if (null != icon) {
    const obj4 = { size: "xxs", color: getBadgeColors(variant).text, accessible: false };
    tmp8 = React3(icon, obj4);
  }
  cResult[2] = icon;
  cResult[3] = variant;
  cResult[4] = tmp8;
  tmp7 = tmp8;
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
    const intl4 = tmp4(1128).intl;
    text = intl4.string(tmp4(1128).t.y2b7CA);
  } else if ("beta" === type) {
    const intl3 = tmp4(1128).intl;
    text = intl3.string(tmp4(1128).t.oW0eUd);
  } else if ("early_access" === type) {
    const intl2 = tmp4(1128).intl;
    text = intl2.string(tmp4(1128).t.EYxi0o);
  } else if ("free_trial" === type) {
    const intl = tmp4(1128).intl;
    text = intl.string(tmp4(1128).t.IBYG5U);
  } else {
    text = type.text;
  }
  let tmp9 = null;
  const obj2 = { style: tmp3.badge, children: items };
  const tmp7 = hasOwnProperty;
  const tmp8 = View;
  if (null != icon) {
    const obj3 = { size: "xxs", color: getBadgeColors(variant).text, accessible: false };
    tmp9 = React3(icon, obj3);
  }
  items = [tmp9, ];
  const obj4 = { variant: badgeTextVariant, color: "none", lineClamp: 1, style: tmp3.label, children: text };
  items[1] = React3(Text_Text.Text, obj4);
  return tmp7(tmp8, obj2);
});
const result = size.fileFinishedImporting("design/components/Badge/native/Badge.native.tsx");

export const Badge = tmp3;
