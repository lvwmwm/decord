// Module ID: 9069
// Function ID: 9070
// Name: PresenceActivityStatus
// Dependencies: [19, 676, 21, 6022, 8931, 6610, 9070, 9065, 9072, 9064, 9067, 2]
// Exports: default

// Module 9069 (PresenceActivityStatus)
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
  if (importDefault(6022)(activity)) {
    let AppsIcon = require(6610) /* AppsIcon */.AppsIcon;
  } else if (activity.type === ActivityTypes.PLAYING) {
    AppsIcon = require(8931) /* GameControllerIcon */.GameControllerIcon;
  } else if (activity.type === tmp3.LISTENING) {
    AppsIcon = require(9070) /* MusicIcon */.MusicIcon;
  } else {
    if (activity.type !== tmp3.WATCHING) {
      if (activity.type !== tmp3.STREAMING) {
        AppsIcon = null;
        if (activity.type === tmp3.COMPETING) {
          AppsIcon = require(8931) /* GameControllerIcon */.GameControllerIcon;
        }
      }
    }
    AppsIcon = require(9065) /* TvIcon */.TvIcon;
  }
  let tmp12 = !hideIcon;
  if (!hideIcon) {
    tmp12 = null != AppsIcon;
  }
  if (tmp12) {
    let obj = { icon: null, style: null };
    obj[0] = AppsIcon;
    obj[1] = iconStyle;
    tmp12 = callback(tmp(9064), obj);
  }
  const children = [tmp12, ];
  let tmp15 = !flag;
  if (!flag) {
    obj = { style: null, maxFontSizeMultiplier: null, children: null };
    obj[0] = textStyle;
    obj[1] = maxFontSizeMultiplier;
    obj[2] = importDefault(9072)(activity, true).text;
    tmp15 = callback(tmp(9067), obj);
  }
  children[1] = tmp15;
  return closure_6(closure_5, { children });
};
