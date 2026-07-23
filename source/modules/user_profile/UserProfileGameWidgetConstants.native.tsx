// Module ID: 11988
// Function ID: 92666
// Name: widgetGameTagMetadata
// Dependencies: [11989, 11990, 9298, 9300, 3832, 2]
// Exports: getWidgetGameTagMetadata

// Module 11988 (widgetGameTagMetadata)
import WidgetGameTagIconRole from "WidgetGameTagIconRole";

const obj = {};
obj[require("WidgetGameTagIconRole").WidgetGameTagIconRole.RIBBON] = require("RibbonIcon").RibbonIcon;
obj[require("WidgetGameTagIconRole").WidgetGameTagIconRole.THUMBS_UP] = require("ThumbsUpIcon").ThumbsUpIcon;
obj[require("WidgetGameTagIconRole").WidgetGameTagIconRole.THUMBS_DOWN] = require("ThumbsDownIcon").ThumbsDownIcon;
obj[require("WidgetGameTagIconRole").WidgetGameTagIconRole.FRIENDS] = require("FriendsIcon").FriendsIcon;
const widgetGameTagMetadata = WidgetGameTagIconRole.buildWidgetGameTagMetadata(obj);
const result = require("ThumbsUpIcon").fileFinishedImporting("modules/user_profile/UserProfileGameWidgetConstants.native.tsx");

export const WIDGET_GAME_TAG_METADATA = widgetGameTagMetadata;
export const getWidgetGameTagMetadata = function getWidgetGameTagMetadata(tag) {
  let tmp2 = null;
  if (null != widgetGameTagMetadata[tag]) {
    tmp2 = tmp;
  }
  return tmp2;
};
