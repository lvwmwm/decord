// Module ID: 12579
// Function ID: 12580
// Name: UserProfileActivityBadges
// Dependencies: [19, 17, 1074, 21, 4836, 12456, 7158, 5374, 10342, 9366, 8535, 12580, 12581, 576, 12582, 7592, 5403, 4832, 11148, 2]
// Exports: EpisodeBadge, PartyBadge, TimestampBadge

// Module 12579 (UserProfileActivityBadges)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import Text_Text from "Text/Text" /* 4832 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7158 */;
import utils from "utils" /* 7592 */;
import useTimestampTickedNow from "useTimestampTickedNow" /* 12580 */;
import shouldShowActivityTimeBarDefault from "shouldShowActivityTimeBar" /* 12581 */;
import Badges from "Badges" /* 12582 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
const ActivityTypes = Constants.ActivityTypes;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 }, bold: { fontWeight: "bold" } });
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityBadges.tsx");

export const TimestampBadge = function TimestampBadge(activity) {
  let items;
  let obj5;
  activity = activity.activity;
  const tmp = closure_7();
  const timestamps = activity.timestamps;
  let start;
  const obj = useTimestampTickedNow;
  const now = obj.useTimestampTickedNow().now;
  if (timestamps != null) {
    start = timestamps.start;
  }
  if (start == null) {
    start = activity.created_at;
  }
  if (null != start) {
    if (!shouldShowActivityTimeBarDefault(activity)) {
      let GameControllerIcon;
      const timestamps2 = activity.timestamps;
      let end;
      if (timestamps2 != null) {
        end = timestamps2.end;
      }
      const timestamps3 = activity.timestamps;
      let flag;
      if (timestamps3 != null) {
        flag = timestamps3.isCountDown;
      }
      if (flag == null) {
        flag = false;
      }
      let flag2 = flag && null != end && end > now;
      if (flag2 === undefined) {
        flag2 = false;
      }
      if (flag2) {
        GameControllerIcon = tmp2(12456).HourglassIcon;
      } else if (isEmbeddedActivityDefault(activity)) {
        GameControllerIcon = tmp2(5374).AppsIcon;
      } else if (activity.type === ActivityTypes.WATCHING) {
        GameControllerIcon = tmp2(10342).TvIcon;
      } else if (activity.type === tmp6.LISTENING) {
        GameControllerIcon = tmp2(9366).MusicIcon;
      } else {
        GameControllerIcon = tmp2(8535).GameControllerIcon;
      }
      const obj2 = { style: tmp.container, children: items };
      const obj3 = { size: "xxs", color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
      items = [hasOwnProperty(GameControllerIcon, obj3), ];
      const obj4 = { entry: obj5, style: tmp.bold };
      obj5 = { start, end, isCountDown: flag };
      items[1] = hasOwnProperty(Badges.ActiveTimestamp, obj4);
      return metroRequire(View, obj2);
    }
  }
  return null;
};
export const PartyBadge = function PartyBadge(activity) {
  let items;
  activity = activity.activity;
  const tmp = closure_7();
  if (!isEmbeddedActivityDefault(activity)) {
    if (null != activity.party) {
      const obj4 = utils;
      const richGameStateBadgeText = obj4.getRichGameStateBadgeText(activity.state, activity.party);
      let tmp8 = null;
      if (null != richGameStateBadgeText) {
        const obj = { style: tmp.container, children: items };
        const obj2 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
        const GroupIcon = tmp9(5403).GroupIcon;
        items = [hasOwnProperty(GroupIcon, obj2), ];
        const obj3 = { variant: "text-sm/medium", color: "text-muted", children: richGameStateBadgeText };
        items[1] = hasOwnProperty(Text_Text.Text, obj3);
        tmp8 = metroRequire(View, obj);
      }
      return tmp8;
    }
  }
  return null;
};
export const EpisodeBadge = function EpisodeBadge(activity) {
  let items;
  activity = activity.activity;
  const assets = activity.assets;
  let large_text;
  const tmp = closure_7();
  const getEpisodeBadgeText = utils.getEpisodeBadgeText;
  utils;
  if (assets != null) {
    large_text = assets.large_text;
  }
  const episodeBadgeText = getEpisodeBadgeText(large_text);
  let tmp7 = null;
  if (null != episodeBadgeText) {
    const obj = { style: tmp.container, children: items };
    const obj2 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
    const TopicsIcon = tmp2(11148).TopicsIcon;
    items = [hasOwnProperty(TopicsIcon, obj2), ];
    const obj3 = { variant: "text-sm/medium", color: "text-muted", children: episodeBadgeText };
    items[1] = hasOwnProperty(Text_Text.Text, obj3);
    tmp7 = metroRequire(View, obj);
  }
  return tmp7;
};
