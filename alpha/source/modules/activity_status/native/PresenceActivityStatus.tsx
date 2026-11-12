// Module ID: 10786
// Function ID: 10787
// Name: PresenceActivityStatus
// Dependencies: [19, 21, 8403, 7264, 7374, 8036, 6006, 10787, 10782, 10788, 10781, 10784, 2]
// Exports: default

// Module 10786 (PresenceActivityStatus)
import ActivityTypes from "ActivityTypes" /* 6006 */;
import conjurePresenceActivity from "conjurePresenceActivity" /* 7264 */;
import AppsIcon from "AppsIcon" /* 8036 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 8403 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 10788 */;
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
        GameControllerIcon = tmp3(7374).GameControllerIcon;
      } else if (activity.type === ActivityTypes.ActivityTypes.LISTENING) {
        GameControllerIcon = tmp3(10787).MusicIcon;
      } else {
        if (activity.type !== ActivityTypes.ActivityTypes.WATCHING) {
          if (activity.type !== ActivityTypes.ActivityTypes.STREAMING) {
            GameControllerIcon = null;
            if (activity.type === ActivityTypes.ActivityTypes.COMPETING) {
              GameControllerIcon = tmp3(7374).GameControllerIcon;
            }
          }
        }
        GameControllerIcon = tmp3(10782).TvIcon;
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
      tmp7 = _false(tmp(10781), obj2);
    }
    const items = [tmp7, ];
    let tmp10 = !flag;
    if (tmp10) {
      const obj3 = { style: textStyle, maxFontSizeMultiplier, children: text };
      tmp10 = _false(tmp(10784), obj3);
    }
    const obj4 = { children: items };
    items[1] = tmp10;
    return tmp5(tmp6, obj4);
  }
  GameControllerIcon = AppsIcon.AppsIcon;
};
