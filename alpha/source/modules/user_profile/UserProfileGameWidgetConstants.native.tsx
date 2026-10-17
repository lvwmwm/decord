// Module ID: 14145
// Function ID: 14146
// Name: UserProfileGameWidgetConstants
// Dependencies: [14146, 14147, 9658, 9660, 4910, 2]
// Exports: getWidgetGameTagMetadata

// Module 14145 (UserProfileGameWidgetConstants)
import FriendsIcon from "FriendsIcon" /* 4910 */;
import ThumbsUpIcon from "ThumbsUpIcon" /* 9658 */;
import ThumbsDownIcon from "ThumbsDownIcon" /* 9660 */;
import RibbonIcon from "RibbonIcon" /* 14147 */;
import UserProfileGameWidgetTagMetadata from "UserProfileGameWidgetTagMetadata" /* 14146 */;
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
