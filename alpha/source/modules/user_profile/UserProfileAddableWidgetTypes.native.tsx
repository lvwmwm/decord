// Module ID: 16830
// Function ID: 16831
// Name: UserProfileAddableWidgetTypes
// Dependencies: [7918, 2]

// Module 16830 (UserProfileAddableWidgetTypes)
import WidgetType from "WidgetType" /* 7918 */;
import size from "module_2" /* 2 */;

const items = [WidgetType.WidgetType.FAVORITE_GAMES, WidgetType.WidgetType.PLAYED_GAMES, WidgetType.WidgetType.CURRENT_GAMES, WidgetType.WidgetType.WANT_TO_PLAY_GAMES];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/user_profile/UserProfileAddableWidgetTypes.native.tsx");

export const ADDABLE_WIDGET_TYPES = set;
