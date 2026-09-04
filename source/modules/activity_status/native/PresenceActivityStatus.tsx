// Module ID: 10818
// Function ID: 10819
// Name: PresenceActivityStatus
// Dependencies: [19, 673, 21, 7672, 9152, 5067, 9840, 10814, 10819, 10813, 10816, 2]
// Exports: default

// Module 10818 (PresenceActivityStatus)
import noopAll from "noop" /* 19 */;
import AppsIcon2 from "AppsIcon" /* 5067 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7672 */;
import GameControllerIcon from "GameControllerIcon" /* 9152 */;
import MusicIcon from "MusicIcon" /* 9840 */;
import TvIcon from "TvIcon" /* 10814 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 10819 */;
import { ActivityTypes } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/activity_status/native/PresenceActivityStatus.tsx");

export default function PresenceActivityStatus(hideText) {
  ({ activity, hideIcon } = hideText);
  ({ iconStyle, textStyle, maxFontSizeMultiplier } = hideText);
  if (hideIcon === undefined) {
    hideIcon = false;
  }
  let flag = hideText.hideText;
  if (flag === undefined) {
    flag = false;
  }
  if (hideIcon) {
    if (flag) {
      return null;
    }
  }
  if (isEmbeddedActivityDefault(activity)) {
    let AppsIcon = AppsIcon2.AppsIcon;
  } else if (activity.type === ActivityTypes.PLAYING) {
    AppsIcon = GameControllerIcon.GameControllerIcon;
  } else if (activity.type === tmp3.LISTENING) {
    AppsIcon = MusicIcon.MusicIcon;
  } else {
    if (activity.type !== tmp3.WATCHING) {
      if (activity.type !== tmp3.STREAMING) {
        AppsIcon = null;
        if (activity.type === tmp3.COMPETING) {
          AppsIcon = GameControllerIcon.GameControllerIcon;
        }
      }
    }
    AppsIcon = TvIcon.TvIcon;
  }
  let tmp12 = !hideIcon;
  if (!hideIcon) {
    tmp12 = null != AppsIcon;
  }
  if (tmp12) {
    let obj = { icon: null, style: null };
    obj[0] = AppsIcon;
    obj[1] = iconStyle;
    tmp12 = callback(tmp(10813), obj);
  }
  const children = [tmp12, ];
  let tmp15 = !flag;
  if (!flag) {
    obj = { style: null, maxFontSizeMultiplier: null, children: null };
    obj[0] = textStyle;
    obj[1] = maxFontSizeMultiplier;
    obj[2] = getActivityStatusTextDefault(activity, true).text;
    tmp15 = callback(tmp(10816), obj);
  }
  children[1] = tmp15;
  return closure_6(closure_5, { children });
};
