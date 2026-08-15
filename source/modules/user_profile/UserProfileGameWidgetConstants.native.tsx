// Module ID: 12175
// Function ID: 12176
// Name: widgetGameTagMetadata
// Dependencies: [12176, 12177, 12179, 12181, 4095, 2]
// Exports: getWidgetGameTagMetadata

// Module 12175 (widgetGameTagMetadata)
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
