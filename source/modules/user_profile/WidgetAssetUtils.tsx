// Module ID: 12457
// Function ID: 12458
// Name: getWidgetAssetURL
// Dependencies: [676, 2]
// Exports: getWidgetAssetURL

// Module 12457 (getWidgetAssetURL)
import { DEFAULT_CDN_HOST } from "ME";

const result = require("set").fileFinishedImporting("modules/user_profile/WidgetAssetUtils.tsx");

export const getWidgetAssetURL = function getWidgetAssetURL(userId, fileId) {
  if (CDN_HOST == null) {
    CDN_HOST = DEFAULT_CDN_HOST;
  }
  return "https://" + CDN_HOST + "/widget-assets/" + userId + "/" + fileId;
};
