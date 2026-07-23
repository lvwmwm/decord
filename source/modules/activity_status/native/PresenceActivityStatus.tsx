// Module ID: 9074
// Function ID: 71196
// Name: PresenceActivityStatus
// Dependencies: [31, 653, 33, 6982, 8940, 9075, 9076, 9070, 9078, 9069, 9072, 2]
// Exports: default

// Module 9074 (PresenceActivityStatus)
import "result";
import { ActivityTypes } from "ME";
import jsxProd from "jsxProd";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = jsxProd);
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
  if (importDefault(6982)(activity)) {
    let AppsIcon = require(9075) /* AppsIcon */.AppsIcon;
  } else if (activity.type === ActivityTypes.PLAYING) {
    AppsIcon = require(8940) /* GameControllerIcon */.GameControllerIcon;
  } else if (activity.type === ActivityTypes.LISTENING) {
    AppsIcon = require(9076) /* MusicIcon */.MusicIcon;
  } else {
    if (activity.type !== ActivityTypes.WATCHING) {
      if (activity.type !== ActivityTypes.STREAMING) {
        AppsIcon = null;
        if (activity.type === ActivityTypes.COMPETING) {
          AppsIcon = require(8940) /* GameControllerIcon */.GameControllerIcon;
        }
      }
    }
    AppsIcon = require(9070) /* TvIcon */.TvIcon;
  }
  let obj = {};
  let tmp18 = !hideIcon;
  if (tmp18) {
    tmp18 = null != AppsIcon;
  }
  if (tmp18) {
    obj = { icon: AppsIcon, style: iconStyle };
    tmp18 = callback(importDefault(9069), obj);
  }
  const items = [tmp18, ];
  let tmp23 = !flag;
  if (tmp23) {
    obj = { style: textStyle, maxFontSizeMultiplier, children: importDefault(9078)(activity, true).text };
    tmp23 = callback(importDefault(9072), obj);
  }
  items[1] = tmp23;
  obj.children = items;
  return closure_6(closure_5, obj);
};
