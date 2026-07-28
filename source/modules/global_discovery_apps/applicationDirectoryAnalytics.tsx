// Module ID: 5958
// Function ID: 52744
// Name: trackAppDirectoryProfileEmbed
// Dependencies: [1907, 3982, 653, 675, 2]
// Exports: trackAppDirectoryProfileEmbed

// Module 5958 (trackAppDirectoryProfileEmbed)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const result = require("ME").fileFinishedImporting("modules/global_discovery_apps/applicationDirectoryAnalytics.tsx");

export const trackAppDirectoryProfileEmbed = function trackAppDirectoryProfileEmbed(applicationId, storefront) {
  let obj = importDefault(675);
  obj = { application_id: applicationId, device_platform: "mobile_native", guild_id: guildId.getGuildId(), channel_id: channelId.getChannelId(), section: storefront };
  obj.track(AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, obj);
};
