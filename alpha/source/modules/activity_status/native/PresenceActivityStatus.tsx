// Module ID: 10549
// Function ID: 10550
// Name: PresenceActivityStatus
// Dependencies: [19, 1074, 21, 7353, 8734, 5570, 9567, 10545, 10550, 10544, 10547, 2]
// Exports: default

// Module 10549 (PresenceActivityStatus)
import AppsIcon2 from "AppsIcon" /* 5570 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7353 */;
import GameControllerIcon from "GameControllerIcon" /* 8734 */;
import MusicIcon from "MusicIcon" /* 9567 */;
import TvIcon from "TvIcon" /* 10545 */;
import getActivityStatusTextDefault from "getActivityStatusText" /* 10550 */;
import noop from "module_19" /* 19 */;

require = fn;
const ActivityTypes = fn(1074).ActivityTypes;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activity_status/native/PresenceActivityStatus.tsx");

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
    const obj = { icon: AppsIcon, style: iconStyle };
    tmp12 = React4(tmp(10544), obj);
  }
  const children = [tmp12, ];
  let tmp15 = !flag;
  if (!flag) {
    const obj2 = { style: textStyle, maxFontSizeMultiplier, children: getActivityStatusTextDefault(activity, true).text };
    tmp15 = React4(tmp(10547), obj2);
  }
  children[1] = tmp15;
  return timestampProducer(hasOwnProperty, { children });
};
