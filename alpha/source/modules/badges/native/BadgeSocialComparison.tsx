// Module ID: 13805
// Function ID: 13806
// Name: BadgeSocialComparison
// Dependencies: [19, 17, 1386, 6352, 21, 5012, 575, 6107, 13806, 1112, 2152, 9814, 5603, 5699, 13807, 1653, 504, 9828, 2]
// Exports: default

// Module 13805 (BadgeSocialComparison)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef1653 from "module_1653" /* 1653 */;
import StringUtils from "StringUtils" /* 2152 */;
import Text_Text from "Text/Text" /* 5603 */;
import FastImageDefault from "FastImage" /* 5699 */;
import BadgeId from "BadgeId" /* 6107 */;
import BadgeArtImageDefault from "BadgeArtImage" /* 9814 */;
import BadgeUtils from "BadgeUtils" /* 9828 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1386 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 6352 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5012 */;
import size_mod from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
function getActivityStatCount(badge) {
  const badge_id = badge.badge_id;
  const tmp3 = badge_id === BadgeId.BadgeId.GAME_VARIETY || badge_id === BadgeId.BadgeId.STREAMING || badge_id === BadgeId.BadgeId.GAME_TIME;
  if (tmp3) {
    if (badge.badge_id === BadgeId.BadgeId.GAME_VARIETY) {
      let HOURS = tmp(13806).BadgeUnit.GAMES;
    } else {
      HOURS = tmp(13806).BadgeUnit.HOURS;
    }
    const stats = badge.stats;
    let value;
    if (stats != null) {
      const iter = stats.find((unit) => unit.unit === HOURS);
      if (iter != null) {
        value = iter.value;
      }
    }
    let tmp6;
    if (null != value) {
      const _Number = Number;
      if (Number.isFinite(value)) {
        if (value >= 0) {
          tmp6 = value;
        }
      }
    }
    return tmp6;
  }
}
function EligibleBadgeSocialComparison(arg0) {
  let avatarURL;
  let avatarURL1;
  let badge;
  let contentOpacity;
  let displayedTier;
  let displayedUserId;
  let isContentShown;
  let items6;
  let items7;
  let obj4;
  let str;
  let targetUsername;
  let tmp15;
  let tmp16;
  let tmp5;
  let tmp6;
  let viewerBadge;
  let viewerTier;
  ({ badge, viewerBadge, displayedUserId } = arg0);
  ({ targetUsername, isContentShown } = arg0);
  ({ contentOpacity, viewerTier, displayedTier } = arg0);
  const tmp = closure_8();
  let tmp3 = dependencyMap;
  let obj = displayedUserId(13807);
  const badgeSocialComparisonMobileEnabled = obj.useBadgeSocialComparisonMobileEnabled({ location: "BadgeSocialComparisonMobile" });
  const items = [closure_11, contentOpacity];
  let c0;
  [tmp5, tmp6] = items;
  const obj2 = displayedUserId(1653);
  class BadgeSocialComparisonTsx1 {
    constructor() {
      const obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items1 = [tmp6];
  BadgeSocialComparisonTsx1.__closure = items1;
  BadgeSocialComparisonTsx1.__workletHash = 17178513634755;
  BadgeSocialComparisonTsx1.__initData = tmp5;
  const animatedStyle = obj2.useAnimatedStyle(BadgeSocialComparisonTsx1);
  const items2 = [UserStore];
  const tmp2Result = displayedUserId(504);
  const stateFromStores = tmp2Result.useStateFromStores(items2, () => currentUser.getCurrentUser());
  const items3 = [UserStore];
  const items4 = [displayedUserId];
  const tmp2Result3 = displayedUserId(504);
  const stateFromStores1 = tmp2Result3.useStateFromStores(items3, () => UserStore.getUser(displayedUserId), items4);
  displayedUserId(504);
  const items5 = [BadgeDirectoryStore, UserStore];
  [][0] = displayedUserId;
  let tmp13Result = null;
  if (badgeSocialComparisonMobileEnabled) {
    tmp13Result = null;
    if (tmp9) {
      const badge_id = badge.badge_id;
      const tmp11 = badge_id === displayedUserId(6107).BadgeId.GAME_VARIETY || badge_id === displayedUserId(6107).BadgeId.STREAMING || badge_id === displayedUserId(6107).BadgeId.GAME_TIME;
      if (!tmp11) {
        const obj3 = { style: items6, pointerEvents: str, "aria-hidden": !isContentShown, children: tmp15(tmp16, obj4) };
        items6 = [tmp.wrapper, animatedStyle];
        str = "none";
        View = _modDef1653.View;
        if (isContentShown) {
          str = "auto";
        }
        const obj5 = { badge: viewerBadge, tier: viewerTier, avatarUrl: avatarURL, username: null };
        avatarURL = undefined;
        obj4 = { style: tmp.comparison, children: items7 };
        tmp15 = closure_7;
        tmp16 = View;
        if (stateFromStores != null) {
          avatarURL = stateFromStores.getAvatarURL(undefined, 32, false);
        }
        const string = tmp2(1112).intl.string;
        class BadgeSocialComparisonTsx1 {
          constructor() {
            const obj = { opacity: _undefined.get() };
            return obj;
          }
        }
        items7 = [closure_6(closure_10, obj5), ];
        const obj6 = { badge, tier: displayedTier, avatarUrl: avatarURL1, username: targetUsername };
        avatarURL1 = undefined;
        if (stateFromStores1 != null) {
          avatarURL1 = stateFromStores1.getAvatarURL(undefined, 32, false);
        }
        if (targetUsername == null) {
          let username;
          if (stateFromStores1 != null) {
            username = stateFromStores1.username;
          }
          targetUsername = username;
        }
        if (targetUsername == null) {
          const intl = tmp2(1112).intl;
          targetUsername = intl.string(tmp2(1112).t.KD6OJJ);
        }
        items7[1] = closure_6(closure_10, obj6);
        tmp13Result = tmp13(View, obj3);
      } else {
        tmp13Result = null;
        if (null != getActivityStatCount(viewerBadge)) {
          tmp13Result = null;
        }
      }
    }
  }
  return tmp13Result;
}
let View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, comparison: obj3, card: obj4, label: { width: "100%", alignItems: "center" }, metric: { textAlign: "center" }, user: obj5, username: { flexShrink: 1, minWidth: 0 }, avatar: size };
obj2 = { marginBottom: -nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_8 };
obj4 = { flex: 1, minWidth: 0, alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4, maxWidth: "100%", minWidth: 0 };
size = { width: 16, height: 16, borderRadius: nativeDefault.radii.round };
let closure_8 = createStyles(obj);
let closure_10 = react.memo(function ComparisonCard(arg0) {
  let avatarUrl;
  let badge;
  let formatToPlainStringResult1;
  let items;
  let items1;
  let items2;
  let obj12;
  let tier;
  let username;
  ({ badge, tier, avatarUrl, username } = arg0);
  const tmp = closure_8();
  let complex_icon_static_url = tier.simple_icon_url;
  if (complex_icon_static_url == null) {
    complex_icon_static_url = tier.simple_icon_raster_url;
  }
  if (complex_icon_static_url == null) {
    complex_icon_static_url = tier.complex_icon_static_url;
  }
  if (complex_icon_static_url == null) {
    complex_icon_static_url = badge.simple_icon_url;
  }
  if (complex_icon_static_url == null) {
    complex_icon_static_url = badge.complex_icon_static_url;
  }
  if (badge.badge_id === BadgeId.BadgeId.PREMIUM_TENURE) {
    if (null != badge.obtained_at) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date(badge.obtained_at);
      const _Number = Number;
      const tmp6 = date;
      if (!Number.isNaN(date.getTime())) {
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        const date1 = new Date();
        const uTCFullYear = date1.getUTCFullYear();
        const result = 12 * (uTCFullYear - date.getUTCFullYear());
        const sum = result + date1.getUTCMonth();
        const diff = sum - date.getUTCMonth();
        const _Date3 = Date;
        const self5 = this;
        const self6 = this;
        const date2 = new Date(tmp6);
        date2.setUTCDate(1);
        date2.setUTCMonth(date.getUTCMonth() + diff);
        const _Date4 = Date;
        const _Date5 = Date;
        const uTCFullYear1 = date2.getUTCFullYear();
        const self7 = this;
        const self8 = this;
        const _Math = Math;
        const date3 = new Date(UTC(uTCFullYear1, date2.getUTCMonth() + 1, 0));
        const uTCDate = date3.getUTCDate();
        date2.setUTCDate(Math.min(date.getUTCDate(), uTCDate));
        let diff1 = diff;
        if (date1 < date2) {
          diff1 = diff - 1;
        }
        if (diff1 >= 0) {
          let formatToPlainStringResult;
          const _Math2 = Math;
          const rounded = Math.floor(diff1 / 12);
          const result1 = diff1 % 12;
          if (rounded > 0) {
            if (0 < result1) {
              const intl4 = tmp2(1112).intl;
              const obj = { years: rounded, months: result1 };
              formatToPlainStringResult = intl4.formatToPlainString(tmp2(1112).t.X3Qd8c, obj);
            }
            formatToPlainStringResult1 = formatToPlainStringResult;
          }
          if (rounded > 0) {
            const intl3 = tmp2(1112).intl;
            const obj2 = { years: rounded };
            formatToPlainStringResult = intl3.formatToPlainString(tmp2(1112).t.PClsrw, obj2);
          } else if (0 < result1) {
            const intl2 = tmp2(1112).intl;
            const obj3 = { months: result1 };
            formatToPlainStringResult = intl2.formatToPlainString(tmp2(1112).t.kridzK, obj3);
          } else {
            const intl = tmp2(1112).intl;
            formatToPlainStringResult = intl.string(tmp2(1112).t["0GsO43"]);
          }
        }
      }
    }
  }
  if (null == formatToPlainStringResult1) {
    const tmp33 = getActivityStatCount(badge);
    if (null == tmp33) {
      let info_label;
      const tmp2Result = StringUtils;
      if (tmp2Result.isNullOrEmpty(badge.info_label)) {
        let name = tier.milestone_text;
        if (name == null) {
          name = tier.name;
        }
        if (name == null) {
          name = badge.name;
        }
        info_label = name;
      } else {
        info_label = badge.info_label;
      }
      formatToPlainStringResult1 = info_label;
    } else {
      const badge_id = badge.badge_id;
      if (BadgeId.BadgeId.GAME_VARIETY === badge_id) {
        const intl6 = tmp2(1112).intl;
        const obj4 = { count: tmp33 };
        formatToPlainStringResult1 = intl6.formatToPlainString(tmp2(1112).t["r/EUap"], obj4);
      } else {
        const intl5 = tmp2(1112).intl;
        const obj5 = { hours: tmp33 };
        formatToPlainStringResult1 = intl5.formatToPlainString(tmp2(1112).t.xCjYxK, obj5);
      }
    }
  }
  let tmp24 = null != complex_icon_static_url;
  const obj6 = { style: tmp.card, accessible: true, accessibilityLabel: "" + username + ", " + formatToPlainStringResult1, children: items };
  if (tmp24) {
    const obj7 = { url: complex_icon_static_url, height: 40 };
    tmp24 = metroRequire(BadgeArtImageDefault, obj7);
  }
  items = [tmp24, ];
  const obj8 = { style: tmp.label, children: items1 };
  items1 = [, ];
  const obj9 = { variant: "body-sm/medium", color: "text-default", lineClamp: 2, style: tmp.metric, children: formatToPlainStringResult1 };
  items1[0] = metroRequire(Text_Text.Text, obj9);
  let tmp27Result = null != avatarUrl;
  const obj10 = { style: tmp.user, children: items2 };
  if (tmp27Result) {
    const obj11 = { source: obj12, style: tmp.avatar, accessible: false, enableAnimation: false };
    obj12 = { uri: avatarUrl };
    tmp27Result = tmp27(FastImageDefault, obj11);
  }
  items2 = [tmp27Result, ];
  const obj13 = { variant: "body-sm/medium", color: "text-subtle", lineClamp: 1, style: tmp.username, children: username };
  items2[1] = metroRequire(Text_Text.Text, obj13);
  items1[1] = metroImportDefault(View, obj10);
  items[1] = metroImportDefault(View, obj8);
  return metroImportDefault(View, obj6);
});
let closure_11 = { code: "(function BadgeSocialComparisonTsx1(){let[contentOpacity]=this.__closure;return{opacity:contentOpacity.get()};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/badges/native/BadgeSocialComparison.tsx");

export default function BadgeSocialComparison(arg0) {
  let badge;
  let viewerBadge;
  ({ badge, viewerBadge } = arg0);
  const obj = BadgeUtils;
  const findTierResult = obj.findTier(viewerBadge, viewerBadge.current_tier);
  const obj2 = BadgeUtils;
  const findTierResult1 = obj2.findTier(badge, badge.current_tier);
  let tmp3 = null;
  if (viewerBadge.owned) {
    tmp3 = null;
    if (badge.owned) {
      tmp3 = null;
      if (null != findTierResult) {
        tmp3 = null;
        if (null != findTierResult1) {
          const obj3 = { viewerTier: findTierResult, displayedTier: findTierResult1 };
          const merged = Object.assign(arg0);
          tmp3 = metroRequire(EligibleBadgeSocialComparison, obj3);
        }
      }
    }
  }
  return tmp3;
};
