// Module ID: 6929
// Function ID: 55275
// Name: trackAppDirectoryProfileEmbed
// Dependencies: []
// Exports: trackAppDirectoryProfileEmbed

// Module 6929 (trackAppDirectoryProfileEmbed)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/global_discovery_apps/applicationDirectoryAnalytics.tsx");

export const trackAppDirectoryProfileEmbed = function trackAppDirectoryProfileEmbed(applicationId, storefront) {
  let obj = importDefault(dependencyMap[3]);
  obj = { application_id: applicationId, device_platform: "mobile_native", guild_id: guildId.getGuildId(), channel_id: channelId.getChannelId(), section: storefront };
  obj.track(AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, obj);
};
