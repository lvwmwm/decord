// Module ID: 12293
// Function ID: 12294
// Name: getWidgetAssetURL
// Dependencies: [676, 1435, 2]
// Exports: getWidgetAssetURL

// Module 12293 (getWidgetAssetURL)
import { DEFAULT_CDN_HOST } from "ME";

const result = require("set").fileFinishedImporting("modules/user_profile/WidgetAssetUtils.tsx");

export const getWidgetAssetURL = function getWidgetAssetURL(arg0, fileId, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.animated;
  if (flag === undefined) {
    flag = false;
  }
  if (CDN_HOST == null) {
    CDN_HOST = DEFAULT_CDN_HOST;
  }
  let str = "webp";
  if (!require(1435) /* getAvatarURL */.SUPPORTS_WEBP) {
    let str2 = "png";
    if (flag) {
      str2 = "gif";
    }
    str = str2;
  }
  return "https://" + CDN_HOST + "/widget-assets/" + arg0 + "/" + fileId + "?format=" + str + "&animated=" + flag;
};
