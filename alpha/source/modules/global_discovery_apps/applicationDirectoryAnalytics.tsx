// Module ID: 7932
// Function ID: 7933
// Name: applicationDirectoryAnalytics
// Dependencies: [2096, 4578, 1074, 1241, 2]
// Exports: trackAppDirectoryProfileEmbed

// Module 7932 (applicationDirectoryAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2096 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4578 */;

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/global_discovery_apps/applicationDirectoryAnalytics.tsx");

export const trackAppDirectoryProfileEmbed = function trackAppDirectoryProfileEmbed(applicationId, storefront) {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, { application_id: applicationId, device_platform: "mobile_native", guild_id: SelectedGuildStore.getGuildId(), channel_id: SelectedChannelStore.getChannelId(), section: storefront });
};
