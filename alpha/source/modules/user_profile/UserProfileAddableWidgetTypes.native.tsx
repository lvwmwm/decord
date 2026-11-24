// Module ID: 14826
// Function ID: 14827
// Name: UserProfileAddableWidgetTypes
// Dependencies: [6044, 2]

// Module 14826 (UserProfileAddableWidgetTypes)
import WidgetType from "WidgetType" /* 6044 */;
import size from "module_2" /* 2 */;

const items = [WidgetType.WidgetType.APPLICATION, WidgetType.WidgetType.FAVORITE_GAMES, WidgetType.WidgetType.PLAYED_GAMES, WidgetType.WidgetType.CURRENT_GAMES, WidgetType.WidgetType.WANT_TO_PLAY_GAMES];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/user_profile/UserProfileAddableWidgetTypes.native.tsx");

export const ADDABLE_WIDGET_TYPES = set;
