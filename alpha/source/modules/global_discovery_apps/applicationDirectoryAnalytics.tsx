// Module ID: 7976
// Function ID: 7977
// Name: applicationDirectoryAnalytics
// Dependencies: [5044, 5172, 1072, 1252, 2]
// Exports: trackAppDirectoryProfileEmbed

// Module 7976 (applicationDirectoryAnalytics)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5044 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5172 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/global_discovery_apps/applicationDirectoryAnalytics.tsx");

export function trackAppDirectoryProfileEmbed(applicationId, storefront) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { application_id: applicationId, device_platform: "mobile_native", guild_id: SelectedGuildStore.getGuildId(), channel_id: SelectedChannelStore.getChannelId(), section: storefront };
  obj.track(AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, obj2);
}
