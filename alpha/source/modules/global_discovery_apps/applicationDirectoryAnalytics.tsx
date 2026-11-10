// Module ID: 7916
// Function ID: 7917
// Name: applicationDirectoryAnalytics
// Dependencies: [5045, 5173, 1072, 1252, 2]
// Exports: trackAppDirectoryProfileEmbed

// Module 7916 (applicationDirectoryAnalytics)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5045 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5173 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/global_discovery_apps/applicationDirectoryAnalytics.tsx");

export function trackAppDirectoryProfileEmbed(applicationId, storefront) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { application_id: applicationId, device_platform: "mobile_native", guild_id: SelectedGuildStore.getGuildId(), channel_id: SelectedChannelStore.getChannelId(), section: storefront };
  obj.track(AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, obj2);
}
