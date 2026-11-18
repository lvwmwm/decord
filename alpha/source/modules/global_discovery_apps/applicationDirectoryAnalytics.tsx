// Module ID: 8306
// Function ID: 8307
// Name: applicationDirectoryAnalytics
// Dependencies: [4726, 4856, 1072, 1256, 2]
// Exports: trackAppDirectoryProfileEmbed

// Module 8306 (applicationDirectoryAnalytics)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4726 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4856 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/global_discovery_apps/applicationDirectoryAnalytics.tsx");

export function trackAppDirectoryProfileEmbed(applicationId, storefront) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { application_id: applicationId, device_platform: "mobile_native", guild_id: SelectedGuildStore.getGuildId(), channel_id: SelectedChannelStore.getChannelId(), section: storefront };
  obj.track(AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, obj2);
}
