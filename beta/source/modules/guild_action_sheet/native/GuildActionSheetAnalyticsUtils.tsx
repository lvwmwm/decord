// Module ID: 16422
// Function ID: 16423
// Name: GuildActionSheetAnalyticsUtils
// Dependencies: [1072, 1256, 2]
// Exports: trackGuildActionSheetOptionPressed

// Module 16422 (GuildActionSheetAnalyticsUtils)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/GuildActionSheetAnalyticsUtils.tsx");

export function trackGuildActionSheetOptionPressed(arg0) {
  let canAccessSettings;
  let gameId;
  let guildId;
  let option;
  ({ guildId, option, canAccessSettings, gameId } = arg0);
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.GUILD_ACTION_SHEET_OPTION_PRESSED, { guild_id: guildId, action_sheet_option: option, can_access_settings: canAccessSettings, game_id: gameId });
}
