// Module ID: 12409
// Function ID: 12410
// Name: widgetGameTagMetadata
// Dependencies: [12410, 12411, 8639, 8641, 4063, 2]
// Exports: getWidgetGameTagMetadata

// Module 12409 (widgetGameTagMetadata)
import WidgetGameTagIconRole from "WidgetGameTagIconRole";

const obj = {};
obj[require("WidgetGameTagIconRole").WidgetGameTagIconRole.RIBBON] = require("RibbonIcon").RibbonIcon;
obj[require("WidgetGameTagIconRole").WidgetGameTagIconRole.THUMBS_UP] = require("ThumbsUpIcon").ThumbsUpIcon;
obj[require("WidgetGameTagIconRole").WidgetGameTagIconRole.THUMBS_DOWN] = require("ThumbsDownIcon").ThumbsDownIcon;
obj[require("WidgetGameTagIconRole").WidgetGameTagIconRole.FRIENDS] = require("FriendsIcon").FriendsIcon;
const widgetGameTagMetadata = WidgetGameTagIconRole.buildWidgetGameTagMetadata(obj);
const result = require("ThumbsUpIcon").fileFinishedImporting("modules/user_profile/UserProfileGameWidgetConstants.native.tsx");

export const WIDGET_GAME_TAG_METADATA = widgetGameTagMetadata;
export const getWidgetGameTagMetadata = function getWidgetGameTagMetadata(arg0) {
  let tmp2 = null;
  if (null != widgetGameTagMetadata[arg0]) {
    tmp2 = tmp;
  }
  return tmp2;
};
