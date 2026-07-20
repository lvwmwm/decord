// Module ID: 15883
// Function ID: 121664
// Name: trackEvent
// Dependencies: [670, 2, 6]
// Exports: trackEvent

// Module 15883 (trackEvent)
import { AnalyticEvents } from "MessageEmbedTypes";
import _classCallCheck from "_classCallCheck";

const result = _classCallCheck.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellUtils.tsx");

export const trackEvent = function trackEvent(action, guild_id) {
  let obj = importDefault(dependencyMap[1]);
  obj = { action, guild_id };
  obj.track(AnalyticEvents.DM_SETTINGS_UPSELL_ACTION, obj);
};
export const DmUpsellActionTypes = { MODAL_VIEWED: "modal_viewed", MODAL_DISMISSED: "modal_dismissed", MODAL_GUILD_SETTINGS_CLICKED: "modal_guild_settings_clicked", SUPPRESSED_BY_COOLDOWN: "suppressed_by_cooldown", MODAL_DISABLED_DMS: "modal_disabled_dms" };
