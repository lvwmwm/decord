// Module ID: 10346
// Function ID: 10347
// Name: PresenceActivityStatus
// Dependencies: [19, 1074, 21, 7158, 8535, 5374, 9366, 10342, 10347, 10341, 10344, 2]
// Exports: default

// Module 10346 (PresenceActivityStatus)
import Constants from "Constants" /* 1074 */;
import AppsIcon2 from "AppsIcon" /* 5374 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7158 */;
import GameControllerIcon from "GameControllerIcon" /* 8535 */;
import MusicIcon from "MusicIcon" /* 9366 */;
import TvIcon from "TvIcon" /* 10342 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 10347 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
const ActivityTypes = Constants.ActivityTypes;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
const result = size.fileFinishedImporting("modules/activity_status/native/PresenceActivityStatus.tsx");

export default function PresenceActivityStatus(hideText) {
  let AppsIcon;
  let activity;
  let hideIcon;
  let iconStyle;
  let maxFontSizeMultiplier;
  let textStyle;
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
  const text = getActivityStatusTextDefault(activity, true).text;
  if (isEmbeddedActivityDefault(activity)) {
    AppsIcon = AppsIcon2.AppsIcon;
  } else if (activity.type === ActivityTypes.PLAYING) {
    AppsIcon = GameControllerIcon.GameControllerIcon;
  } else if (activity.type === ActivityTypes.LISTENING) {
    AppsIcon = MusicIcon.MusicIcon;
  } else {
    if (activity.type !== ActivityTypes.WATCHING) {
      if (activity.type !== ActivityTypes.STREAMING) {
        AppsIcon = null;
        if (activity.type === ActivityTypes.COMPETING) {
          AppsIcon = GameControllerIcon.GameControllerIcon;
        }
      }
    }
    AppsIcon = TvIcon.TvIcon;
  }
  let tmp12 = !hideIcon;
  const tmp10 = metroRequire;
  const tmp11 = hasOwnProperty;
  if (!hideIcon) {
    tmp12 = null != AppsIcon;
  }
  if (tmp12) {
    const obj = { icon: AppsIcon, style: iconStyle };
    tmp12 = React3(tmp(10341), obj);
  }
  const children = [tmp12, ];
  let tmp15 = !flag;
  if (tmp15) {
    const obj2 = { style: textStyle, maxFontSizeMultiplier, children: text };
    tmp15 = React3(tmp(10344), obj2);
  }
  children[1] = tmp15;
  return tmp10(tmp11, { children });
};
