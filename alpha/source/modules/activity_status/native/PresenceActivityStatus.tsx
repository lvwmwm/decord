// Module ID: 10940
// Function ID: 10941
// Name: PresenceActivityStatus
// Dependencies: [19, 21, 8028, 10941, 9883, 8824, 5899, 10942, 10936, 10943, 10935, 10938, 2]
// Exports: default

// Module 10940 (PresenceActivityStatus)
import ActivityTypes from "ActivityTypes" /* 5899 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 8028 */;
import AppsIcon from "AppsIcon" /* 8824 */;
import conjurePresenceActivity from "conjurePresenceActivity" /* 10941 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 10943 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/activity_status/native/PresenceActivityStatus.tsx");

export default function PresenceActivityStatus(hideText) {
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
  if (!isEmbeddedActivityDefault(activity)) {
    let GameControllerIcon;
    const obj = conjurePresenceActivity;
    if (!obj.isConjurePresenceActivity(activity)) {
      if (activity.type === ActivityTypes.ActivityTypes.PLAYING) {
        GameControllerIcon = tmp3(9883).GameControllerIcon;
      } else if (activity.type === ActivityTypes.ActivityTypes.LISTENING) {
        GameControllerIcon = tmp3(10942).MusicIcon;
      } else {
        if (activity.type !== ActivityTypes.ActivityTypes.WATCHING) {
          if (activity.type !== ActivityTypes.ActivityTypes.STREAMING) {
            GameControllerIcon = null;
            if (activity.type === ActivityTypes.ActivityTypes.COMPETING) {
              GameControllerIcon = tmp3(9883).GameControllerIcon;
            }
          }
        }
        GameControllerIcon = tmp3(10936).TvIcon;
      }
    }
    let tmp7 = !hideIcon;
    const tmp5 = hasOwnProperty;
    const tmp6 = React3;
    if (!hideIcon) {
      tmp7 = null != GameControllerIcon;
    }
    if (tmp7) {
      const obj2 = { icon: GameControllerIcon, style: iconStyle };
      tmp7 = _false(tmp(10935), obj2);
    }
    const items = [tmp7, ];
    let tmp10 = !flag;
    if (tmp10) {
      const obj3 = { style: textStyle, maxFontSizeMultiplier, children: text };
      tmp10 = _false(tmp(10938), obj3);
    }
    const obj4 = { children: items };
    items[1] = tmp10;
    return tmp5(tmp6, obj4);
  }
  GameControllerIcon = AppsIcon.AppsIcon;
};
