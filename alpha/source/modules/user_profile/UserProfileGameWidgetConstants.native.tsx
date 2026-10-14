// Module ID: 13739
// Function ID: 13740
// Name: UserProfileGameWidgetConstants
// Dependencies: [13740, 13741, 9368, 9370, 4817, 2]
// Exports: getWidgetGameTagMetadata

// Module 13739 (UserProfileGameWidgetConstants)
import FriendsIcon from "FriendsIcon" /* 4817 */;
import ThumbsUpIcon from "ThumbsUpIcon" /* 9368 */;
import ThumbsDownIcon from "ThumbsDownIcon" /* 9370 */;
import RibbonIcon from "RibbonIcon" /* 13741 */;
import UserProfileGameWidgetTagMetadata from "UserProfileGameWidgetTagMetadata" /* 13740 */;
import size from "module_2" /* 2 */;

const obj = {};
const buildWidgetGameTagMetadata = UserProfileGameWidgetTagMetadata.buildWidgetGameTagMetadata;
obj[UserProfileGameWidgetTagMetadata.WidgetGameTagIconRole.RIBBON] = RibbonIcon.RibbonIcon;
obj[UserProfileGameWidgetTagMetadata.WidgetGameTagIconRole.THUMBS_UP] = ThumbsUpIcon.ThumbsUpIcon;
obj[UserProfileGameWidgetTagMetadata.WidgetGameTagIconRole.THUMBS_DOWN] = ThumbsDownIcon.ThumbsDownIcon;
obj[UserProfileGameWidgetTagMetadata.WidgetGameTagIconRole.FRIENDS] = FriendsIcon.FriendsIcon;
const widgetGameTagMetadata = buildWidgetGameTagMetadata(obj);
const result = size.fileFinishedImporting("modules/user_profile/UserProfileGameWidgetConstants.native.tsx");

export const WIDGET_GAME_TAG_METADATA = widgetGameTagMetadata;
export const getWidgetGameTagMetadata = function getWidgetGameTagMetadata(tag) {
  let tmp2 = null;
  if (null != widgetGameTagMetadata[tag]) {
    tmp2 = tmp;
  }
  return tmp2;
};
