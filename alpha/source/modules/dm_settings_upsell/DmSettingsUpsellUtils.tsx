// Module ID: 19376
// Function ID: 19377
// Name: DmSettingsUpsellUtils
// Dependencies: [1072, 1253, 2]
// Exports: trackEvent

// Module 19376 (DmSettingsUpsellUtils)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellUtils.tsx");

export function trackEvent(MODAL_DISABLED_DMS, guildId) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { action: MODAL_DISABLED_DMS, guild_id: guildId };
  obj.track(AnalyticEvents.DM_SETTINGS_UPSELL_ACTION, obj2);
}
export const DmUpsellActionTypes = { MODAL_VIEWED: "modal_viewed", MODAL_DISMISSED: "modal_dismissed", MODAL_GUILD_SETTINGS_CLICKED: "modal_guild_settings_clicked", SUPPRESSED_BY_COOLDOWN: "suppressed_by_cooldown", MODAL_DISABLED_DMS: "modal_disabled_dms" };
