// Module ID: 14481
// Function ID: 14482
// Name: UserProfileAddableWidgetTypes
// Dependencies: [6868, 2]

// Module 14481 (UserProfileAddableWidgetTypes)
import WidgetType from "WidgetType" /* 6868 */;
import size from "module_2" /* 2 */;

const items = [WidgetType.WidgetType.APPLICATION, WidgetType.WidgetType.FAVORITE_GAMES, WidgetType.WidgetType.PLAYED_GAMES, WidgetType.WidgetType.CURRENT_GAMES, WidgetType.WidgetType.WANT_TO_PLAY_GAMES];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/user_profile/UserProfileAddableWidgetTypes.native.tsx");

export const ADDABLE_WIDGET_TYPES = set;
