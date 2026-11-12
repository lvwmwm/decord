// Module ID: 15239
// Function ID: 15240
// Name: UserProfileGameWidgetConstants
// Dependencies: [575, 15240, 15241, 10023, 10025, 5872, 2]
// Exports: getWidgetGameTagMetadata

// Module 15239 (UserProfileGameWidgetConstants)
import nativeDefault from "native" /* 575 */;
import FriendsIcon from "FriendsIcon" /* 5872 */;
import ThumbsUpIcon from "ThumbsUpIcon" /* 10023 */;
import ThumbsDownIcon from "ThumbsDownIcon" /* 10025 */;
import RibbonIcon from "RibbonIcon" /* 15241 */;
import UserProfileGameWidgetTagMetadata from "UserProfileGameWidgetTagMetadata" /* 15240 */;
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
export const WIDGET_GAME_TAG_METADATA = widgetGameTagMetadata;
export function getWidgetGameTagMetadata(item) {
  let tmp2 = null;
  if (null != widgetGameTagMetadata[item]) {
    tmp2 = tmp;
  }
  return tmp2;
}
