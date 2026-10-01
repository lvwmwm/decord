// Module ID: 7106
// Function ID: 7107
// Name: applicationDirectoryAnalytics
// Dependencies: [2099, 4655, 1074, 1241, 2]
// Exports: trackAppDirectoryProfileEmbed

// Module 7106 (applicationDirectoryAnalytics)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/global_discovery_apps/applicationDirectoryAnalytics.tsx");

export const trackAppDirectoryProfileEmbed = function trackAppDirectoryProfileEmbed(applicationId, storefront) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { application_id: applicationId, device_platform: "mobile_native", guild_id: SelectedGuildStore.getGuildId(), channel_id: SelectedChannelStore.getChannelId(), section: storefront };
  obj.track(AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, obj2);
};
