// Module ID: 10080
// Function ID: 10081
// Name: UserProfileGameWidgetConstants
// Dependencies: [575, 10081, 10083, 8532, 8534, 5479, 2]
// Exports: getWidgetGameTagMetadata

// Module 10080 (UserProfileGameWidgetConstants)
import nativeDefault from "native" /* 575 */;
import FriendsIcon from "FriendsIcon" /* 5479 */;
import ThumbsUpIcon from "ThumbsUpIcon" /* 8532 */;
import ThumbsDownIcon from "ThumbsDownIcon" /* 8534 */;
import RibbonIcon from "RibbonIcon" /* 10083 */;
import UserProfileGameWidgetTagMetadata from "UserProfileGameWidgetTagMetadata" /* 10081 */;
import size from "module_2" /* 2 */;

const sm = nativeDefault.radii.sm;
const PX_16 = nativeDefault.space.PX_16;
const PX_12 = nativeDefault.space.PX_12;
const obj = {};
const buildWidgetGameTagMetadata = UserProfileGameWidgetTagMetadata.buildWidgetGameTagMetadata;
obj[UserProfileGameWidgetTagMetadata.WidgetGameTagIconRole.RIBBON] = RibbonIcon.RibbonIcon;
obj[UserProfileGameWidgetTagMetadata.WidgetGameTagIconRole.THUMBS_UP] = ThumbsUpIcon.ThumbsUpIcon;
obj[UserProfileGameWidgetTagMetadata.WidgetGameTagIconRole.THUMBS_DOWN] = ThumbsDownIcon.ThumbsDownIcon;
obj[UserProfileGameWidgetTagMetadata.WidgetGameTagIconRole.FRIENDS] = FriendsIcon.FriendsIcon;
const widgetGameTagMetadata = buildWidgetGameTagMetadata(obj);
const result = size.fileFinishedImporting("modules/user_profile/UserProfileGameWidgetConstants.native.tsx");

export const GAME_COVER_ASPECT_RATIO = 0.75;
export const GAME_COVER_BORDER_RADIUS = sm;
export const GAME_COVER_GRID_GAP = PX_16;
export const GAME_COVER_DETAILS_GAP = PX_12;
export const WIDGET_FOCUS_DELAY_MS = 100;
export const WIDGET_GAME_TAG_METADATA = widgetGameTagMetadata;
export function getWidgetGameTagMetadata(item) {
  let tmp2 = null;
  if (null != widgetGameTagMetadata[item]) {
    tmp2 = tmp;
  }
  return tmp2;
}
