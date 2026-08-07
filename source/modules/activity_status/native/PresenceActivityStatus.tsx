// Module ID: 9583
// Function ID: 9584
// Name: PresenceActivityStatus
// Dependencies: [19, 676, 21, 7139, 8702, 7630, 9584, 9579, 9586, 9578, 9581, 2]
// Exports: default

// Module 9583 (PresenceActivityStatus)
import "noop";
import { ActivityTypes } from "ME";
import jsxProd from "jsxProd";

let c4;
let c5;
let closure_6;
const require = arg1;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/activity_status/native/PresenceActivityStatus.tsx");

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
  if (importDefault(7139)(activity)) {
    let AppsIcon = require(7630) /* AppsIcon */.AppsIcon;
  } else if (activity.type === ActivityTypes.PLAYING) {
    AppsIcon = require(8702) /* GameControllerIcon */.GameControllerIcon;
  } else if (activity.type === tmp3.LISTENING) {
    AppsIcon = require(9584) /* MusicIcon */.MusicIcon;
  } else {
    if (activity.type !== tmp3.WATCHING) {
      if (activity.type !== tmp3.STREAMING) {
        AppsIcon = null;
        if (activity.type === tmp3.COMPETING) {
          AppsIcon = require(8702) /* GameControllerIcon */.GameControllerIcon;
        }
      }
    }
    AppsIcon = require(9579) /* TvIcon */.TvIcon;
  }
  let tmp12 = !hideIcon;
  if (!hideIcon) {
    tmp12 = null != AppsIcon;
  }
  if (tmp12) {
    let obj = { icon: null, style: null };
    obj[0] = AppsIcon;
    obj[1] = iconStyle;
    tmp12 = callback(tmp(9578), obj);
  }
  const children = [tmp12, ];
  let tmp15 = !flag;
  if (!flag) {
    obj = { style: null, maxFontSizeMultiplier: null, children: null };
    obj[0] = textStyle;
    obj[1] = maxFontSizeMultiplier;
    obj[2] = importDefault(9586)(activity, true).text;
    tmp15 = callback(tmp(9581), obj);
  }
  children[1] = tmp15;
  return closure_6(closure_5, { children });
};
