// Module ID: 8900
// Function ID: 70253
// Name: getGuildId
// Dependencies: []
// Exports: trackE2EECallVerificationCopied, trackE2EECallVerificationShareClicked, trackE2EEPublicKeyMismatch, trackE2EESettingsDeviceDelete, trackE2EESettingsUserDelete, trackE2EEStreamVerificationCopied, trackE2EEStreamVerificationShareClicked, trackE2EEUserVerificationCopied, trackE2EEUserVerificationFailed, trackE2EEUserVerificationShareClicked, trackE2EEUserVerificationViewed, trackE2EEUserVerified, trackRTCPanelViewed

// Module 8900 (getGuildId)
function getGuildId(channelId) {
  const channel = channel.getChannel(channelId);
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  return guild_id;
}
let closure_3 = importDefault(dependencyMap[0]);
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/rtc/SecureFramesTracking.tsx");

export const trackRTCPanelViewed = function trackRTCPanelViewed(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(dependencyMap[2]);
  obj = { channel_id: channelId, guild_id: getGuildId(channelId), selected_tab: channelId.selectedTab };
  obj.trackWithMetadata(AnalyticEvents.RTC_PANEL_VIEWED, obj);
};
export const trackE2EEUserVerificationViewed = function trackE2EEUserVerificationViewed(userId) {
  const channelId = userId.channelId;
  let obj = importDefault(dependencyMap[2]);
  obj = { channel_id: channelId, guild_id: getGuildId(channelId) };
  const merged = Object.assign(arg1(dependencyMap[3]).getTrackUserRelationshipProperties({ userId: userId.userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFICATION_VIEWED, obj);
};
export const trackE2EEUserVerified = function trackE2EEUserVerified(channelId) {
  let analyticsLocation;
  let userId;
  channelId = channelId.channelId;
  ({ userId, analyticsLocation } = channelId);
  let obj = importDefault(dependencyMap[2]);
  obj = { channel_id: channelId, guild_id: getGuildId(channelId), location: analyticsLocation };
  const merged = Object.assign(arg1(dependencyMap[3]).getTrackUserRelationshipProperties({ userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFIED, obj);
};
export const trackE2EEUserVerificationFailed = function trackE2EEUserVerificationFailed(channelId) {
  let keyVersion;
  let reason;
  let userId;
  channelId = channelId.channelId;
  ({ userId, keyVersion, reason } = channelId);
  let obj = importDefault(dependencyMap[2]);
  obj = { channel_id: channelId, guild_id: getGuildId(channelId), failure_reason: reason, key_version: "" + keyVersion };
  const merged = Object.assign(arg1(dependencyMap[3]).getTrackUserRelationshipProperties({ userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFICATION_FAILED, obj);
};
export const trackE2EEUserVerificationShareClicked = function trackE2EEUserVerificationShareClicked(userId) {
  const channelId = userId.channelId;
  let obj = importDefault(dependencyMap[2]);
  obj = { channel_id: channelId, guild_id: getGuildId(channelId) };
  const merged = Object.assign(arg1(dependencyMap[3]).getTrackUserRelationshipProperties({ userId: userId.userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFICATION_SHARE_CLICKED, obj);
};
export const trackE2EEUserVerificationCopied = function trackE2EEUserVerificationCopied(userId) {
  const channelId = userId.channelId;
  let obj = importDefault(dependencyMap[2]);
  obj = { channel_id: channelId, guild_id: getGuildId(channelId) };
  const merged = Object.assign(arg1(dependencyMap[3]).getTrackUserRelationshipProperties({ userId: userId.userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFICATION_CODE_COPIED, obj);
};
export const trackE2EECallVerificationShareClicked = function trackE2EECallVerificationShareClicked(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(dependencyMap[2]);
  obj = { channel_id: channelId, guild_id: getGuildId(channelId) };
  obj.trackWithMetadata(AnalyticEvents.E2EE_CALL_VERIFICATION_SHARE_CLICKED, obj);
};
export const trackE2EECallVerificationCopied = function trackE2EECallVerificationCopied(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(dependencyMap[2]);
  obj = { channel_id: channelId, guild_id: getGuildId(channelId) };
  obj.trackWithMetadata(AnalyticEvents.E2EE_CALL_VERIFICATION_CODE_COPIED, obj);
};
export const trackE2EEStreamVerificationShareClicked = function trackE2EEStreamVerificationShareClicked(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(dependencyMap[2]);
  obj = { channel_id: channelId, guild_id: getGuildId(channelId) };
  obj.trackWithMetadata(AnalyticEvents.E2EE_STREAM_VERIFICATION_SHARE_CLICKED, obj);
};
export const trackE2EEStreamVerificationCopied = function trackE2EEStreamVerificationCopied(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(dependencyMap[2]);
  obj = { channel_id: channelId, guild_id: getGuildId(channelId) };
  obj.trackWithMetadata(AnalyticEvents.E2EE_STREAM_VERIFICATION_CODE_COPIED, obj);
};
export const trackE2EESettingsUserDelete = function trackE2EESettingsUserDelete() {
  importDefault(dependencyMap[4]).track(AnalyticEvents.E2EE_SETTINGS_USER_DELETE);
};
export const trackE2EESettingsDeviceDelete = function trackE2EESettingsDeviceDelete() {
  importDefault(dependencyMap[4]).track(AnalyticEvents.E2EE_SETTINGS_DEVICE_DELETE);
};
export const trackE2EEPublicKeyMismatch = function trackE2EEPublicKeyMismatch(arg0) {
  let obj = importDefault(dependencyMap[4]);
  obj = { key_version: "" + arg0 };
  obj.track(AnalyticEvents.E2EE_PUBLIC_KEY_MISMATCH, obj);
};
