// Module ID: 7374
// Function ID: 7375
// Name: applicationDirectoryAnalytics
// Dependencies: [2115, 4900, 1085, 1265, 2]
// Exports: trackAppDirectoryProfileEmbed

// Module 7374 (applicationDirectoryAnalytics)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4900 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/global_discovery_apps/applicationDirectoryAnalytics.tsx");

export const trackAppDirectoryProfileEmbed = function trackAppDirectoryProfileEmbed(applicationId, storefront) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { application_id: applicationId, device_platform: "mobile_native", guild_id: SelectedGuildStore.getGuildId(), channel_id: SelectedChannelStore.getChannelId(), section: storefront };
  obj.track(AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, obj2);
};
