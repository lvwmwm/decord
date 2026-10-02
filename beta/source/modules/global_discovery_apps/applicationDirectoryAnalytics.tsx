// Module ID: 7110
// Function ID: 7111
// Name: applicationDirectoryAnalytics
// Dependencies: [2102, 4657, 1086, 1253, 2]
// Exports: trackAppDirectoryProfileEmbed

// Module 7110 (applicationDirectoryAnalytics)
import Constants from "Constants" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2102 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4657 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/global_discovery_apps/applicationDirectoryAnalytics.tsx");

export const trackAppDirectoryProfileEmbed = function trackAppDirectoryProfileEmbed(applicationId, storefront) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { application_id: applicationId, device_platform: "mobile_native", guild_id: SelectedGuildStore.getGuildId(), channel_id: SelectedChannelStore.getChannelId(), section: storefront };
  obj.track(AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, obj2);
};
