// Module ID: 12162
// Function ID: 12163
// Name: TimestampBadge
// Dependencies: [19, 17, 676, 21, 4255, 12163, 7093, 7583, 9534, 9539, 8656, 12165, 12166, 712, 12167, 8020, 4768, 4251, 11002, 2]
// Exports: EpisodeBadge, PartyBadge, TimestampBadge

// Module 12162 (TimestampBadge)
import "set";
import { View } from "Text";
import { ActivityTypes } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 }, bold: { fontWeight: "bold" } });
const result = require("ME").fileFinishedImporting("modules/user_profile/native/UserProfileActivityBadges.tsx");

export const TimestampBadge = function TimestampBadge(activity) {
  activity = activity.activity;
  const tmp = callback3();
  let obj = require(12165) /* useTimestampTickedNow */;
  const timestamps = activity.timestamps;
  let start;
  if (timestamps != null) {
    start = timestamps.start;
  }
  if (start == null) {
    start = activity.created_at;
  }
  if (null != start) {
    if (!importDefault(12166)(activity)) {
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
      let flag2 = flag;
      if (flag) {
        flag2 = null != end;
      }
      if (flag2) {
        flag2 = end > obj.useTimestampTickedNow().now;
      }
      if (flag2 === undefined) {
        flag2 = false;
      }
      if (flag2) {
        let GameControllerIcon = tmp2(12163).HourglassIcon;
      } else if (tmp10(7093)(activity)) {
        GameControllerIcon = tmp2(7583).AppsIcon;
      } else if (activity.type === ActivityTypes.WATCHING) {
        GameControllerIcon = tmp2(9534).TvIcon;
      } else if (activity.type === tmp6.LISTENING) {
        GameControllerIcon = tmp2(9539).MusicIcon;
      } else {
        GameControllerIcon = tmp2(8656).GameControllerIcon;
      }
      obj = { style: null, children: null };
      obj[0] = tmp.container;
      obj = { size: "xxs", color: null };
      obj[1] = tmp10(712).colors.TEXT_FEEDBACK_POSITIVE;
      const items = [callback(GameControllerIcon, obj), ];
      const obj1 = { entry: null, style: null };
      const obj2 = { start: null, end: null, isCountDown: null };
      obj2[0] = start;
      obj2[1] = end;
      obj2[2] = flag;
      obj1[0] = obj2;
      obj1[1] = tmp.bold;
      items[1] = callback(tmp2(12167).ActiveTimestamp, obj1);
      obj[1] = items;
      return callback2(View, obj);
    }
  }
  return null;
};
export const PartyBadge = function PartyBadge(activity) {
  activity = activity.activity;
  if (!importDefault(7093)(activity)) {
    if (null != activity.party) {
      const richGameStateBadgeText = require(8020) /* calculateTimestampDurations */.getRichGameStateBadgeText(activity.state, activity.party);
      let tmp8 = null;
      if (null != richGameStateBadgeText) {
        let obj = { style: null, children: null };
        obj[0] = tmp.container;
        obj = { size: "xxs", color: null };
        obj[1] = importDefault(712).colors.TEXT_MUTED;
        const items = [callback(tmp9(4768).GroupIcon, obj), ];
        obj = { variant: "text-sm/medium", color: "text-muted", children: null };
        obj[2] = richGameStateBadgeText;
        items[1] = callback(tmp9(4251).Text, obj);
        obj[1] = items;
        tmp8 = callback2(View, obj);
      }
      return tmp8;
    }
  }
  return null;
};
export const EpisodeBadge = function EpisodeBadge(activity) {
  let obj = require(8020) /* calculateTimestampDurations */;
  const assets = activity.activity.assets;
  let large_text;
  if (assets != null) {
    large_text = assets.large_text;
  }
  const episodeBadgeText = obj.getEpisodeBadgeText(large_text);
  let tmp6 = null;
  if (null != episodeBadgeText) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { size: "xxs", color: null };
    obj[1] = importDefault(712).colors.TEXT_MUTED;
    const items = [callback(tmp2(11002).TopicsIcon, obj), ];
    const obj1 = { variant: "text-sm/medium", color: "text-muted", children: null };
    obj1[2] = episodeBadgeText;
    items[1] = callback(tmp2(4251).Text, obj1);
    obj[1] = items;
    tmp6 = callback2(View, obj);
  }
  return tmp6;
};
