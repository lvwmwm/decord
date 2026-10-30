// Module ID: 14813
// Function ID: 14814
// Name: UserProfileActivityBadges
// Dependencies: [19, 17, 21, 5009, 12181, 7876, 10737, 8670, 5757, 10732, 10738, 9707, 14814, 14815, 575, 14816, 8710, 8653, 5619, 11630, 2]
// Exports: EpisodeBadge, PartyBadge, TimestampBadge

// Module 14813 (UserProfileActivityBadges)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5619 */;
import ActivityTypes from "ActivityTypes" /* 5757 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7876 */;
import utils from "utils" /* 8710 */;
import conjurePresenceActivity from "conjurePresenceActivity" /* 10737 */;
import useTimestampTickedNow from "useTimestampTickedNow" /* 14814 */;
import shouldShowActivityTimeBarDefault from "shouldShowActivityTimeBar" /* 14815 */;
import Badges from "Badges" /* 14816 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 }, bold: { fontWeight: "bold" } });
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityBadges.tsx");

export function TimestampBadge(activity) {
  let items;
  let obj5;
  activity = activity.activity;
  const tmp = closure_6();
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
      let AppsIcon;
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
        AppsIcon = tmp2(12181).HourglassIcon;
      } else {
        if (!isEmbeddedActivityDefault(activity)) {
          const tmp2Result = conjurePresenceActivity;
          if (!tmp2Result.isConjurePresenceActivity(activity)) {
            if (activity.type === ActivityTypes.ActivityTypes.WATCHING) {
              AppsIcon = tmp2(10732).TvIcon;
            } else if (activity.type === ActivityTypes.ActivityTypes.LISTENING) {
              AppsIcon = tmp2(10738).MusicIcon;
            } else {
              AppsIcon = tmp2(9707).GameControllerIcon;
            }
          }
        }
        AppsIcon = tmp2(8670).AppsIcon;
      }
      const obj2 = { style: tmp.container, children: items };
      const obj3 = { size: "xxs", color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
      items = [React3(AppsIcon, obj3), ];
      const obj4 = { entry: obj5, style: tmp.bold };
      obj5 = { start, end, isCountDown: flag };
      items[1] = React3(Badges.ActiveTimestamp, obj4);
      return hasOwnProperty(View, obj2);
    }
  }
  return null;
}
export function PartyBadge(activity) {
  let items;
  activity = activity.activity;
  const tmp = closure_6();
  if (!isEmbeddedActivityDefault(activity)) {
    if (null != activity.party) {
      const obj4 = utils;
      const richGameStateBadgeText = obj4.getRichGameStateBadgeText(activity.state, activity.party);
      let tmp8 = null;
      if (null != richGameStateBadgeText) {
        const obj = { style: tmp.container, children: items };
        const obj2 = { size: "xxs", color: nativeDefault.colors.TEXT_MUTED };
        const GroupIcon = tmp9(8653).GroupIcon;
        items = [React3(GroupIcon, obj2), ];
        const obj3 = { variant: "text-sm/medium", color: "text-muted", children: richGameStateBadgeText };
        items[1] = React3(Text_Text.Text, obj3);
        tmp8 = hasOwnProperty(View, obj);
      }
      return tmp8;
    }
  }
  return null;
}
export function EpisodeBadge(activity) {
  let items;
  activity = activity.activity;
  const assets = activity.assets;
  let large_text;
  const tmp = closure_6();
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
    const TopicsIcon = tmp2(11630).TopicsIcon;
    items = [React3(TopicsIcon, obj2), ];
    const obj3 = { variant: "text-sm/medium", color: "text-muted", children: episodeBadgeText };
    items[1] = React3(Text_Text.Text, obj3);
    tmp7 = hasOwnProperty(View, obj);
  }
  return tmp7;
}
