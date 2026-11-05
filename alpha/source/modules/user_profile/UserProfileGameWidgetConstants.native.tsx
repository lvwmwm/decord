// Module ID: 15174
// Function ID: 15175
// Name: UserProfileGameWidgetConstants
// Dependencies: [15175, 15176, 10055, 10057, 5852, 2]
// Exports: getWidgetGameTagMetadata

// Module 15174 (UserProfileGameWidgetConstants)
import FriendsIcon from "FriendsIcon" /* 5852 */;
import ThumbsUpIcon from "ThumbsUpIcon" /* 10055 */;
import ThumbsDownIcon from "ThumbsDownIcon" /* 10057 */;
import RibbonIcon from "RibbonIcon" /* 15176 */;
import UserProfileGameWidgetTagMetadata from "UserProfileGameWidgetTagMetadata" /* 15175 */;
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
