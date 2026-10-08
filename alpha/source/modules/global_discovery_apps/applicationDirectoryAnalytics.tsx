// Module ID: 7369
// Function ID: 7370
// Name: applicationDirectoryAnalytics
// Dependencies: [2115, 4899, 1085, 1264, 2]
// Exports: trackAppDirectoryProfileEmbed

// Module 7369 (applicationDirectoryAnalytics)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4899 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/global_discovery_apps/applicationDirectoryAnalytics.tsx");

export const trackAppDirectoryProfileEmbed = function trackAppDirectoryProfileEmbed(applicationId, storefront) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { application_id: applicationId, device_platform: "mobile_native", guild_id: SelectedGuildStore.getGuildId(), channel_id: SelectedChannelStore.getChannelId(), section: storefront };
  obj.track(AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, obj2);
};
