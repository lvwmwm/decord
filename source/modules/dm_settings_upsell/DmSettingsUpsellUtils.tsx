// Module ID: 16019
// Function ID: 123948
// Name: trackEvent
// Dependencies: [653, 675, 2]
// Exports: trackEvent

// Module 16019 (trackEvent)
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellUtils.tsx");

export const trackEvent = function trackEvent(action, guild_id) {
  let obj = importDefault(675);
  obj = { action, guild_id };
  obj.track(AnalyticEvents.DM_SETTINGS_UPSELL_ACTION, obj);
};
export const DmUpsellActionTypes = { MODAL_VIEWED: "modal_viewed", MODAL_DISMISSED: "modal_dismissed", MODAL_GUILD_SETTINGS_CLICKED: "modal_guild_settings_clicked", SUPPRESSED_BY_COOLDOWN: "suppressed_by_cooldown", MODAL_DISABLED_DMS: "modal_disabled_dms" };
