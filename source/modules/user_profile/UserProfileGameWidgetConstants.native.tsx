// Module ID: 8842
// Function ID: 8843
// Name: widgetGameTagMetadata
// Dependencies: [8843, 8844, 8846, 8848, 4195, 2]
// Exports: getWidgetGameTagMetadata

// Module 8842 (widgetGameTagMetadata)
import set from "set" /* 2 */;
import FriendsIcon from "FriendsIcon" /* 4195 */;
import RibbonIcon from "RibbonIcon" /* 8844 */;
import ThumbsUpIcon from "ThumbsUpIcon" /* 8846 */;
import ThumbsDownIcon from "ThumbsDownIcon" /* 8848 */;
import WidgetGameTagIconRole from "WidgetGameTagIconRole" /* 8843 */;

const obj = {};
obj[WidgetGameTagIconRole.WidgetGameTagIconRole.RIBBON] = RibbonIcon.RibbonIcon;
obj[WidgetGameTagIconRole.WidgetGameTagIconRole.THUMBS_UP] = ThumbsUpIcon.ThumbsUpIcon;
obj[WidgetGameTagIconRole.WidgetGameTagIconRole.THUMBS_DOWN] = ThumbsDownIcon.ThumbsDownIcon;
obj[WidgetGameTagIconRole.WidgetGameTagIconRole.FRIENDS] = FriendsIcon.FriendsIcon;
const widgetGameTagMetadata = WidgetGameTagIconRole.buildWidgetGameTagMetadata(obj);
const result = set.fileFinishedImporting("modules/user_profile/UserProfileGameWidgetConstants.native.tsx");

export const WIDGET_GAME_TAG_METADATA = widgetGameTagMetadata;
export const getWidgetGameTagMetadata = function getWidgetGameTagMetadata(arg0) {
  let tmp2 = null;
  if (null != widgetGameTagMetadata[arg0]) {
    tmp2 = tmp;
  }
  return tmp2;
};
