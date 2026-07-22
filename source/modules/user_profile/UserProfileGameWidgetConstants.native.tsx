// Module ID: 11976
// Function ID: 92612
// Name: widgetGameTagMetadata
// Dependencies: []
// Exports: getWidgetGameTagMetadata

// Module 11976 (widgetGameTagMetadata)
const _module = require(dependencyMap[0]);
const obj = {};
obj[require(dependencyMap[0]).WidgetGameTagIconRole.RIBBON] = require(dependencyMap[1]).RibbonIcon;
obj[require(dependencyMap[0]).WidgetGameTagIconRole.THUMBS_UP] = require(dependencyMap[2]).ThumbsUpIcon;
obj[require(dependencyMap[0]).WidgetGameTagIconRole.THUMBS_DOWN] = require(dependencyMap[3]).ThumbsDownIcon;
obj[require(dependencyMap[0]).WidgetGameTagIconRole.FRIENDS] = require(dependencyMap[4]).FriendsIcon;
const widgetGameTagMetadata = _module.buildWidgetGameTagMetadata(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_profile/UserProfileGameWidgetConstants.native.tsx");

export const WIDGET_GAME_TAG_METADATA = widgetGameTagMetadata;
export const getWidgetGameTagMetadata = function getWidgetGameTagMetadata(tag) {
  let tmp2 = null;
  if (null != widgetGameTagMetadata[tag]) {
    tmp2 = tmp;
  }
  return tmp2;
};
