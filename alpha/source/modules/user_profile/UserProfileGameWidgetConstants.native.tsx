// Module ID: 15183
// Function ID: 15184
// Name: UserProfileGameWidgetConstants
// Dependencies: [15184, 15185, 10006, 10008, 5870, 2]
// Exports: getWidgetGameTagMetadata

// Module 15183 (UserProfileGameWidgetConstants)
import FriendsIcon from "FriendsIcon" /* 5870 */;
import ThumbsUpIcon from "ThumbsUpIcon" /* 10006 */;
import ThumbsDownIcon from "ThumbsDownIcon" /* 10008 */;
import RibbonIcon from "RibbonIcon" /* 15185 */;
import UserProfileGameWidgetTagMetadata from "UserProfileGameWidgetTagMetadata" /* 15184 */;
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
export function getWidgetGameTagMetadata(item) {
  let tmp2 = null;
  if (null != widgetGameTagMetadata[item]) {
    tmp2 = tmp;
  }
  return tmp2;
}
