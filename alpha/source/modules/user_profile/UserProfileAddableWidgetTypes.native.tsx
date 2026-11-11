// Module ID: 15698
// Function ID: 15699
// Name: UserProfileAddableWidgetTypes
// Dependencies: [7289, 2]

// Module 15698 (UserProfileAddableWidgetTypes)
import WidgetType from "WidgetType" /* 7289 */;
import size from "module_2" /* 2 */;

const items = [WidgetType.WidgetType.FAVORITE_GAMES, WidgetType.WidgetType.PLAYED_GAMES, WidgetType.WidgetType.CURRENT_GAMES, WidgetType.WidgetType.WANT_TO_PLAY_GAMES];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/user_profile/UserProfileAddableWidgetTypes.native.tsx");

export const ADDABLE_WIDGET_TYPES = set;
