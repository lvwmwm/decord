// Module ID: 7072
// Function ID: 7073
// Name: trackAppDirectoryProfileEmbed
// Dependencies: [1931, 4102, 676, 698, 2]
// Exports: trackAppDirectoryProfileEmbed

// Module 7072 (trackAppDirectoryProfileEmbed)
import handleConnectionOpen from "handleConnectionOpen";
import closure_3 from "handleConnectionOpen";
import { AnalyticEvents } from "ME";

const result = require("ME").fileFinishedImporting("modules/global_discovery_apps/applicationDirectoryAnalytics.tsx");

export const trackAppDirectoryProfileEmbed = function trackAppDirectoryProfileEmbed(applicationId, storefront) {
  let obj = importDefault(698);
  obj = { application_id: applicationId, device_platform: "mobile_native", guild_id: guildId.getGuildId(), channel_id: channelId.getChannelId(), section: storefront };
  obj.track(AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, obj);
};
