// Module ID: 14948
// Function ID: 14949
// Name: UserProfileAddableWidgetTypes
// Dependencies: [6139, 2]

// Module 14948 (UserProfileAddableWidgetTypes)
import WidgetType from "WidgetType" /* 6139 */;
import size from "module_2" /* 2 */;

const items = [WidgetType.WidgetType.APPLICATION, WidgetType.WidgetType.FAVORITE_GAMES, WidgetType.WidgetType.PLAYED_GAMES, WidgetType.WidgetType.CURRENT_GAMES, WidgetType.WidgetType.WANT_TO_PLAY_GAMES];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/user_profile/UserProfileAddableWidgetTypes.native.tsx");

export const ADDABLE_WIDGET_TYPES = set;
