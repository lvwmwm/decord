// Module ID: 10886
// Function ID: 10887
// Name: PresenceActivityStatus
// Dependencies: [19, 21, 8007, 10887, 9859, 8802, 5882, 10888, 10882, 10889, 10881, 10884, 2]
// Exports: default

// Module 10886 (PresenceActivityStatus)
import ActivityTypes from "ActivityTypes" /* 5882 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 8007 */;
import AppsIcon from "AppsIcon" /* 8802 */;
import conjurePresenceActivity from "conjurePresenceActivity" /* 10887 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 10889 */;
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
        GameControllerIcon = tmp3(9859).GameControllerIcon;
      } else if (activity.type === ActivityTypes.ActivityTypes.LISTENING) {
        GameControllerIcon = tmp3(10888).MusicIcon;
      } else {
        if (activity.type !== ActivityTypes.ActivityTypes.WATCHING) {
          if (activity.type !== ActivityTypes.ActivityTypes.STREAMING) {
            GameControllerIcon = null;
            if (activity.type === ActivityTypes.ActivityTypes.COMPETING) {
              GameControllerIcon = tmp3(9859).GameControllerIcon;
            }
          }
        }
        GameControllerIcon = tmp3(10882).TvIcon;
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
      tmp7 = _false(tmp(10881), obj2);
    }
    const items = [tmp7, ];
    let tmp10 = !flag;
    if (tmp10) {
      const obj3 = { style: textStyle, maxFontSizeMultiplier, children: text };
      tmp10 = _false(tmp(10884), obj3);
    }
    const obj4 = { children: items };
    items[1] = tmp10;
    return tmp5(tmp6, obj4);
  }
  GameControllerIcon = AppsIcon.AppsIcon;
};
