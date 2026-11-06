// Module ID: 15154
// Function ID: 15155
// Name: UserProfileAddableWidgetTypes
// Dependencies: [7872, 2]

// Module 15154 (UserProfileAddableWidgetTypes)
import WidgetType from "WidgetType" /* 7872 */;
import size from "module_2" /* 2 */;

const items = [WidgetType.WidgetType.FAVORITE_GAMES, WidgetType.WidgetType.PLAYED_GAMES, WidgetType.WidgetType.CURRENT_GAMES, WidgetType.WidgetType.WANT_TO_PLAY_GAMES];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/user_profile/UserProfileAddableWidgetTypes.native.tsx");

export const ADDABLE_WIDGET_TYPES = set;
