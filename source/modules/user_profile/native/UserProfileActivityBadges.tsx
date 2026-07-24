// Module ID: 11952
// Function ID: 92519
// Name: TimestampBadge
// Dependencies: [31, 27, 653, 33, 4130, 11953, 6981, 7472, 9109, 9114, 8979, 11955, 11956, 689, 11957, 7906, 4646, 4126, 10920, 2]
// Exports: EpisodeBadge, PartyBadge, TimestampBadge

// Module 11952 (TimestampBadge)
import "result";
import { View } from "get ActivityIndicator";
import { ActivityTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 }, bold: { fontWeight: "bold" } });
const result = require("ME").fileFinishedImporting("modules/user_profile/native/UserProfileActivityBadges.tsx");

export const TimestampBadge = function TimestampBadge(activity) {
  activity = activity.activity;
  const tmp = callback3();
  let obj = require(11955) /* dropMilliseconds */;
  const timestamps = activity.timestamps;
  let start;
  if (null != timestamps) {
    start = timestamps.start;
  }
  if (null == start) {
    start = activity.created_at;
  }
  if (null != start) {
    if (!importDefault(11956)(activity)) {
      const timestamps2 = activity.timestamps;
      let end;
      if (null != timestamps2) {
        end = timestamps2.end;
      }
      const timestamps3 = activity.timestamps;
      let isCountDown;
      if (null != timestamps3) {
        isCountDown = timestamps3.isCountDown;
      }
      let flag = tmp5;
      if (null != isCountDown && isCountDown) {
        flag = null != end;
      }
      if (flag) {
        flag = end > obj.useTimestampTickedNow().now;
      }
      if (flag === undefined) {
        flag = false;
      }
      if (flag) {
        let GameControllerIcon = require(11953) /* HourglassIcon */.HourglassIcon;
      } else if (importDefault(6981)(activity)) {
        GameControllerIcon = require(7472) /* AppsIcon */.AppsIcon;
      } else if (activity.type === ActivityTypes.WATCHING) {
        GameControllerIcon = require(9109) /* TvIcon */.TvIcon;
      } else if (activity.type === ActivityTypes.LISTENING) {
        GameControllerIcon = require(9114) /* MusicIcon */.MusicIcon;
      } else {
        GameControllerIcon = require(8979) /* GameControllerIcon */.GameControllerIcon;
      }
      obj = { style: tmp.container };
      obj = { size: "xxs", color: importDefault(689).colors.TEXT_FEEDBACK_POSITIVE };
      const items = [callback(GameControllerIcon, obj), ];
      const obj1 = {};
      const obj2 = { start, end, isCountDown: null != isCountDown && isCountDown };
      obj1.entry = obj2;
      obj1.style = tmp.bold;
      items[1] = callback(require(11957) /* ActiveTimestamp */.ActiveTimestamp, obj1);
      obj.children = items;
      return callback2(View, obj);
    }
  }
  return null;
};
export const PartyBadge = function PartyBadge(activity) {
  activity = activity.activity;
  if (!importDefault(6981)(activity)) {
    if (null != activity.party) {
      const richGameStateBadgeText = require(7906) /* calculateTimestampDurations */.getRichGameStateBadgeText(activity.state, activity.party);
      let tmp9 = null;
      if (null != richGameStateBadgeText) {
        let obj = { style: tmp.container };
        obj = { size: "xxs", color: importDefault(689).colors.TEXT_MUTED };
        const items = [callback(require(4646) /* GroupIcon */.GroupIcon, obj), ];
        obj = { variant: "text-sm/medium", color: "text-muted", children: richGameStateBadgeText };
        items[1] = callback(require(4126) /* Text */.Text, obj);
        obj.children = items;
        tmp9 = callback2(View, obj);
      }
      return tmp9;
    }
  }
  return null;
};
export const EpisodeBadge = function EpisodeBadge(activity) {
  let obj = require(7906) /* calculateTimestampDurations */;
  const assets = activity.activity.assets;
  let large_text;
  if (null != assets) {
    large_text = assets.large_text;
  }
  const episodeBadgeText = obj.getEpisodeBadgeText(large_text);
  let tmp4 = null;
  if (null != episodeBadgeText) {
    obj = { style: tmp.container };
    obj = { size: "xxs", color: importDefault(689).colors.TEXT_MUTED };
    const items = [callback(require(10920) /* TopicsIcon */.TopicsIcon, obj), ];
    const obj1 = { variant: "text-sm/medium", color: "text-muted", children: episodeBadgeText };
    items[1] = callback(require(4126) /* Text */.Text, obj1);
    obj.children = items;
    tmp4 = callback2(View, obj);
  }
  return tmp4;
};
