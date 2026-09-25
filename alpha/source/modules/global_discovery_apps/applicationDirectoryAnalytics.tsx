// Module ID: 7101
// Function ID: 7102
// Name: applicationDirectoryAnalytics
// Dependencies: [2098, 4652, 1074, 1241, 2]
// Exports: trackAppDirectoryProfileEmbed

// Module 7101 (applicationDirectoryAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2098 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4652 */;

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/global_discovery_apps/applicationDirectoryAnalytics.tsx");

export const trackAppDirectoryProfileEmbed = function trackAppDirectoryProfileEmbed(applicationId, storefront) {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, { application_id: applicationId, device_platform: "mobile_native", guild_id: SelectedGuildStore.getGuildId(), channel_id: SelectedChannelStore.getChannelId(), section: storefront });
};
