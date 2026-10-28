// Module ID: 7801
// Function ID: 7802
// Name: applicationDirectoryAnalytics
// Dependencies: [4907, 5035, 1084, 1264, 2]
// Exports: trackAppDirectoryProfileEmbed

// Module 7801 (applicationDirectoryAnalytics)
import Constants from "Constants" /* 1084 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4907 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5035 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/global_discovery_apps/applicationDirectoryAnalytics.tsx");

export const trackAppDirectoryProfileEmbed = function trackAppDirectoryProfileEmbed(applicationId, storefront) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { application_id: applicationId, device_platform: "mobile_native", guild_id: SelectedGuildStore.getGuildId(), channel_id: SelectedChannelStore.getChannelId(), section: storefront };
  obj.track(AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, obj2);
};
