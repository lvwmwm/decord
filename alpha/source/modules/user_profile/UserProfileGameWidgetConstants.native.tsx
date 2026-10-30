// Module ID: 14909
// Function ID: 14910
// Name: UserProfileGameWidgetConstants
// Dependencies: [14910, 14912, 9849, 9851, 5710, 2]
// Exports: getWidgetGameTagMetadata

// Module 14909 (UserProfileGameWidgetConstants)
import FriendsIcon from "FriendsIcon" /* 5710 */;
import ThumbsUpIcon from "ThumbsUpIcon" /* 9849 */;
import ThumbsDownIcon from "ThumbsDownIcon" /* 9851 */;
import RibbonIcon from "RibbonIcon" /* 14912 */;
import UserProfileGameWidgetTagMetadata from "UserProfileGameWidgetTagMetadata" /* 14910 */;
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
export function getWidgetGameTagMetadata(tag) {
  let tmp2 = null;
  if (null != widgetGameTagMetadata[tag]) {
    tmp2 = tmp;
  }
  return tmp2;
}
