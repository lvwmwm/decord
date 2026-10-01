// Module ID: 12655
// Function ID: 12656
// Name: UserProfileRecentActivityCard
// Dependencies: [19, 17, 21, 12582, 7592, 12587, 4836, 576, 7789, 4540, 8021, 4685, 5899, 1397, 2011, 4832, 12573, 6583, 6603, 12594, 12595, 8128, 8139, 5435, 1115, 2]
// Exports: default

// Module 12655 (UserProfileRecentActivityCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import StringUtils from "StringUtils" /* 2011 */;
import native from "native" /* 4540 */;
import shared from "shared" /* 4685 */;
import FastImageDefault from "FastImage" /* 5899 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import utils from "utils" /* 7592 */;
import ContentInventoryTypes from "ContentInventoryTypes" /* 7789 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8139 */;
import ContentInventoryActivityImageUtils from "ContentInventoryActivityImageUtils" /* 12573 */;
import BadgesAll from "Badges" /* 12582 */;
import TrendingType from "TrendingType" /* 12587 */;
import useTrackUserProfileActivityActionDefault from "useTrackUserProfileActivityAction" /* 12594 */;
import useTrackUserProfileActivityViewDefault from "useTrackUserProfileActivityView" /* 12595 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let poster;

let metroImportDefault;
let metroRequire;
let obj10;
let obj8;
let obj9;
let rect;
let size;
let tmp4;
const useOpenGameProfileModalDefault = tmp4(8128);
function GamingEntryBadges(entry) {
  let mapped;
  let obj4;
  entry = entry.entry;
  const tmp = closure_9();
  const badgeCell = tmp;
  const found = items.filter((predicate) => predicate.predicate(entry));
  let obj = { location: "user-profile", style: tmp.badges, children: mapped };
  const BadgesContainer = BadgesAll.BadgesContainer;
  let obj2 = entry(7789);
  if (obj2.isTopGameEntry(entry)) {
    const obj3 = { style: tmp.badgeCell, children: closure_6(BadgesAll.TopGameBadge, obj4) };
    obj4 = { entry };
    mapped = tmp2(View, obj3);
  } else {
    mapped = found.map((Badge, index) => {
      let obj2;
      const obj = { style: badgeCell.badgeCell, children: metroRequire(Badge.Badge, obj2) };
      obj2 = { entry };
      return metroRequire(View, obj, index);
    });
  }
  return closure_6(BadgesContainer, obj);
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = {
  Badge: BadgesAll.GameTimestampBadge,
  predicate() {
    return true;
  }
};
let items = [obj, , , , , ];
let obj2 = { Badge: BadgesAll.NewGameBadge, predicate: utils.isEntryNew };
items[1] = obj2;
let obj3 = {
  Badge: BadgesAll.StreakBadge,
  predicate(entry) {
    const obj = utils;
    let num = obj.getStreakCount(entry);
    if (num == null) {
      num = 0;
    }
    return num >= 2;
  }
};
items[2] = obj3;
let obj4 = {
  Badge: BadgesAll.TrendingBadge,
  predicate(entry) {
    const obj = utils;
    const trendingType = obj.getTrendingType(entry);
    const tmp4 = null != trendingType && trendingType !== TrendingType.TrendingType.TRENDING_TYPE_UNSPECIFIED;
    return tmp4;
  }
};
items[3] = obj4;
let obj5 = {
  Badge: BadgesAll.ResurrectedBadge,
  predicate(entry) {
    const obj = utils;
    return null != obj.getResurrectedEntryLastPlayTime(entry);
  }
};
items[4] = obj5;
let obj6 = {
  Badge: BadgesAll.MarathonBadge,
  predicate(entry) {
    const obj = utils;
    let tmp3 = true === obj.isEntryMarathon(entry);
    if (tmp3) {
      const tmpResult = utils;
      tmp3 = null != tmpResult.getMarathonDescription(entry).text;
    }
    return tmp3;
  }
};
items[5] = obj6;
let createStyles = createStyles_mod;
let obj7 = { body: obj8, content: { flex: 1 }, imageContainer: { position: "relative" }, imageAspectRatio: { width: 60, maxHeight: 60, aspectRatio: "1 / 1" }, posterImageAspectRatio: { width: 60, maxHeight: 100, aspectRatio: "2 / 3" }, largeImage: size, smallImageBackground: rect, smallImage: { width: 24, height: 24, borderRadius: 12 }, badges: obj9, badgeCell: obj10 };
obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
size = { borderRadius: nativeDefault.radii.xs, width: "100%", height: "100%" };
rect = { borderRadius: 16, position: "absolute", right: -4, bottom: -4, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj9 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", rowGap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_8 };
obj10 = { width: "50%", paddingRight: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj7);
let closure_11 = react.memo((poster) => {
  let UnknownGameIcon;
  let colors;
  let isThemeDarkResult;
  let items2;
  let largeImage;
  let obj3;
  let obj7;
  let smallImage;
  let tmp16Result;
  let tmp2Result3;
  let tmp2Result4;
  let tmp6Result;
  ({ largeImage, smallImage } = poster);
  poster = poster.poster;
  const tmp = closure_9();
  let src;
  const obj = native;
  const theme = obj.useThemeContext().theme;
  if (largeImage != null) {
    src = largeImage.src;
  }
  if (null == src) {
    const obj2 = { style: items, children: metroRequire(UnknownGameIcon, obj3) };
    items = [, ];
    ({ imageContainer: arr2[0], imageAspectRatio: arr2[1] } = tmp);
    obj3 = { size: "custom", style: tmp.largeImage, color: isThemeDarkResult ? colors.WHITE : colors.BLACK };
    UnknownGameIcon = tmp2(8021).UnknownGameIcon;
    const tmp2Result = shared;
    isThemeDarkResult = tmp2Result.isThemeDark(theme);
    colors = nativeDefault.colors;
    tmp16Result = tmp12(View, obj2);
  } else {
    const items1 = [tmp.imageContainer, ];
    const obj4 = { style: items1, children: items2 };
    items1[1] = poster ? tmp.posterImageAspectRatio : tmp.imageAspectRatio;
    const obj5 = { source: tmp2Result3.makeSource(largeImage.src), alt: largeImage.alt, style: tmp.largeImage };
    const tmp7 = FastImageDefault;
    tmp2Result3 = AvatarUtils;
    items2 = [metroRequire(tmp7, obj5), ];
    let src1;
    const tmp16 = metroImportDefault;
    const tmp6 = importDefault;
    if (smallImage != null) {
      src1 = smallImage.src;
    }
    let tmp5Result = null != src1;
    if (tmp5Result) {
      const obj6 = { style: tmp.smallImageBackground, children: metroRequire(tmp6Result, obj7) };
      obj7 = { source: tmp2Result4.makeSource(smallImage.src), alt: smallImage.alt, style: tmp.smallImage };
      tmp6Result = tmp6(5899);
      tmp2Result4 = AvatarUtils;
      tmp5Result = tmp5(tmp17, obj6);
    }
    items2[1] = tmp5Result;
    tmp16Result = tmp16(tmp17, obj4);
  }
  return tmp16Result;
});
let closure_12 = react.memo((arg0) => {
  let entry;
  let items1;
  let largeImage;
  let obj2;
  let obj4;
  let smallImage;
  let style;
  let subtitle;
  let title;
  ({ entry, title, subtitle } = arg0);
  ({ largeImage, smallImage, style } = arg0);
  const tmp = closure_9();
  const obj = { style, children: metroImportDefault(View, obj2) };
  obj2 = { style: tmp.body, children: items };
  const obj3 = { largeImage, smallImage, poster: obj4.isWatchedMediaEntry(entry) };
  obj4 = ContentInventoryTypes;
  items = [metroRequire(closure_11, obj3), ];
  const obj5 = { style: tmp.content, children: items1 };
  const obj6 = StringUtils;
  let tmp2Result = !obj6.isNullOrEmpty(title);
  obj6.isNullOrEmpty(title);
  if (tmp2Result) {
    const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: title };
    tmp2Result = tmp2(tmp5(4832).Text, obj7);
  }
  items1 = [tmp2Result, , ];
  const tmp5Result = StringUtils;
  let tmp2Result2 = !tmp5Result.isNullOrEmpty(subtitle);
  tmp5Result.isNullOrEmpty(subtitle);
  if (tmp2Result2) {
    const obj8 = { variant: "text-xs/medium", lineClamp: 1, children: subtitle };
    tmp2Result2 = tmp2(tmp5(4832).Text, obj8);
  }
  items1[1] = tmp2Result2;
  const tmp5Result2 = ContentInventoryTypes;
  let isGamingLikeEntryResult = tmp5Result2.isGamingLikeEntry(entry);
  if (isGamingLikeEntryResult) {
    const obj9 = { entry };
    isGamingLikeEntryResult = tmp2(GamingEntryBadges, obj9);
  }
  items1[2] = isGamingLikeEntryResult;
  items[1] = metroImportDefault(View, obj5);
  return metroRequire(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileRecentActivityCard.tsx");

export default function UserProfileRecentActivityCard(style) {
  let entry;
  let formatToPlainString;
  let largeImage;
  let name;
  let obj11;
  let obj8;
  let smallImage;
  let subtitle;
  let title;
  let tmp19Result;
  let user;
  let v9sZWVp;
  ({ user, entry } = style);
  let closure_1;
  style = style.style;
  const obj = ContentInventoryActivityImageUtils;
  const imageForContentEntry = obj.useImageForContentEntry({ entry, showCoverImage: false, trackingSource: "user_profile_recent_activity_native" });
  ({ largeImage, smallImage } = imageForContentEntry);
  const tmp5 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp5(AnalyticsLocationDefault.USER_PROFILE_RECENT_ACTIVITY_CARD).analyticsLocations;
  const tmp6 = useTrackUserProfileActivityActionDefault({ display: "recent", user, entry, analyticsLocations });
  let closure_0 = tmp6;
  const obj2 = { userId: user.id, onAction: tmp6 };
  useTrackUserProfileActivityViewDefault(obj2);
  let application_id;
  if ("application_id" in entry.extra) {
    application_id = entry.extra.application_id;
  }
  const obj3 = { location: "UserProfileRecentActivityCard", applicationId: application_id, source: GameProfileAnalyticUtils.GameProfileSources.UserProfile, trackEntryPointImpression: true, sourceUserId: user.id };
  const tmp4Result = useOpenGameProfileModalDefault;
  const tmp4ResultResult = tmp4Result(obj3);
  closure_1 = tmp4ResultResult;
  items = [tmp6, tmp4ResultResult];
  const callback = react.useCallback(() => {
    closure_0({ action: "PRESS_TEXT" });
    if (closure_1 != null) {
      closure_1();
    }
  }, items);
  const tmpResult = ContentInventoryTypes;
  if (tmpResult.isGamingLikeEntry(entry)) {
    obj8 = { title: entry.extra.game_name };
    const obj4 = { title: entry.extra.game_name };
  } else {
    const tmpResult4 = ContentInventoryTypes;
    if (tmpResult4.isWatchedMediaEntry(entry)) {
      obj8 = { title: entry.extra.media_title, subtitle: entry.extra.media_subtitle };
      const obj5 = { title: entry.extra.media_title, subtitle: entry.extra.media_subtitle };
    } else {
      const tmpResult5 = ContentInventoryTypes;
      if (tmpResult5.isListenedSessionEntry(entry)) {
        const first = entry.extra.entries[0];
        let media;
        if (first != null) {
          media = first.media;
        }
        let title1;
        if (media != null) {
          title1 = media.title;
        }
        const obj6 = { title: title1, subtitle: name };
        name = undefined;
        if (media != null) {
          const first1 = media.artists[0];
          if (first1 != null) {
            name = first1.name;
          }
        }
        obj8 = obj6;
      } else {
        const tmpResult6 = ContentInventoryTypes;
        if (tmpResult6.isLaunchedActivityEntry(entry)) {
          obj8 = { title: entry.extra.activity_name };
          const obj7 = { title: entry.extra.activity_name };
        } else {
          obj8 = { title: "Path" };
        }
      }
    }
  }
  ({ title, subtitle } = obj8);
  let str;
  if (title != null) {
    str = title.trim();
  }
  let trimmed;
  if (subtitle != null) {
    trimmed = subtitle.trim();
  }
  const tmp20 = metroRequire(closure_12, { entry, largeImage, smallImage, title: str, subtitle: trimmed, style });
  const obj9 = { value: analyticsLocations, children: tmp19Result };
  tmp19Result = tmp20;
  const AnalyticsLocationProvider = tmp(6583).AnalyticsLocationProvider;
  if (null != tmp4ResultResult) {
    const obj10 = { onPress: callback, accessibilityRole: "button", accessibilityLabel: formatToPlainString(v9sZWVp, obj11), children: tmp20 };
    const PressableOpacity = tmp(5435).PressableOpacity;
    const intl = tmp(1115).intl;
    formatToPlainString = intl.formatToPlainString;
    v9sZWVp = tmp(1115).t["9sZWVp"];
    if (str == null) {
      str = "";
    }
    obj11 = { gameName: str };
    tmp19Result = tmp19(PressableOpacity, obj10);
  }
  return metroRequire(AnalyticsLocationProvider, obj9);
};
