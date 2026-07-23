// Module ID: 8907
// Function ID: 70294
// Name: getGuildId
// Dependencies: [1348, 653, 4324, 8267, 675, 2]
// Exports: trackE2EECallVerificationCopied, trackE2EECallVerificationShareClicked, trackE2EEPublicKeyMismatch, trackE2EESettingsDeviceDelete, trackE2EESettingsUserDelete, trackE2EEStreamVerificationCopied, trackE2EEStreamVerificationShareClicked, trackE2EEUserVerificationCopied, trackE2EEUserVerificationFailed, trackE2EEUserVerificationShareClicked, trackE2EEUserVerificationViewed, trackE2EEUserVerified, trackRTCPanelViewed

// Module 8907 (getGuildId)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const require = arg1;
function getGuildId(channelId) {
  channel = channel.getChannel(channelId);
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  return guild_id;
}
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/rtc/SecureFramesTracking.tsx");

export const trackRTCPanelViewed = function trackRTCPanelViewed(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(4324);
  obj = { channel_id: channelId, guild_id: getGuildId(channelId), selected_tab: channelId.selectedTab };
  obj.trackWithMetadata(AnalyticEvents.RTC_PANEL_VIEWED, obj);
};
export const trackE2EEUserVerificationViewed = function trackE2EEUserVerificationViewed(userId) {
  const channelId = userId.channelId;
  let obj = importDefault(4324);
  obj = { channel_id: channelId, guild_id: getGuildId(channelId) };
  const merged = Object.assign(require(8267) /* getProfileProperties */.getTrackUserRelationshipProperties({ userId: userId.userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFICATION_VIEWED, obj);
};
export const trackE2EEUserVerified = function trackE2EEUserVerified(channelId) {
  let analyticsLocation;
  let userId;
  channelId = channelId.channelId;
  ({ userId, analyticsLocation } = channelId);
  let obj = importDefault(4324);
  obj = { channel_id: channelId, guild_id: getGuildId(channelId), location: analyticsLocation };
  const merged = Object.assign(require(8267) /* getProfileProperties */.getTrackUserRelationshipProperties({ userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFIED, obj);
};
export const trackE2EEUserVerificationFailed = function trackE2EEUserVerificationFailed(channelId) {
  let keyVersion;
  let reason;
  let userId;
  channelId = channelId.channelId;
  ({ userId, keyVersion, reason } = channelId);
  let obj = importDefault(4324);
  obj = { channel_id: channelId, guild_id: getGuildId(channelId), failure_reason: reason, key_version: "" + keyVersion };
  const merged = Object.assign(require(8267) /* getProfileProperties */.getTrackUserRelationshipProperties({ userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFICATION_FAILED, obj);
};
export const trackE2EEUserVerificationShareClicked = function trackE2EEUserVerificationShareClicked(userId) {
  const channelId = userId.channelId;
  let obj = importDefault(4324);
  obj = { channel_id: channelId, guild_id: getGuildId(channelId) };
  const merged = Object.assign(require(8267) /* getProfileProperties */.getTrackUserRelationshipProperties({ userId: userId.userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFICATION_SHARE_CLICKED, obj);
};
export const trackE2EEUserVerificationCopied = function trackE2EEUserVerificationCopied(userId) {
  const channelId = userId.channelId;
  let obj = importDefault(4324);
  obj = { channel_id: channelId, guild_id: getGuildId(channelId) };
  const merged = Object.assign(require(8267) /* getProfileProperties */.getTrackUserRelationshipProperties({ userId: userId.userId }));
  obj.trackWithMetadata(AnalyticEvents.E2EE_USER_VERIFICATION_CODE_COPIED, obj);
};
export const trackE2EECallVerificationShareClicked = function trackE2EECallVerificationShareClicked(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(4324);
  obj = { channel_id: channelId, guild_id: getGuildId(channelId) };
  obj.trackWithMetadata(AnalyticEvents.E2EE_CALL_VERIFICATION_SHARE_CLICKED, obj);
};
export const trackE2EECallVerificationCopied = function trackE2EECallVerificationCopied(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(4324);
  obj = { channel_id: channelId, guild_id: getGuildId(channelId) };
  obj.trackWithMetadata(AnalyticEvents.E2EE_CALL_VERIFICATION_CODE_COPIED, obj);
};
export const trackE2EEStreamVerificationShareClicked = function trackE2EEStreamVerificationShareClicked(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(4324);
  obj = { channel_id: channelId, guild_id: getGuildId(channelId) };
  obj.trackWithMetadata(AnalyticEvents.E2EE_STREAM_VERIFICATION_SHARE_CLICKED, obj);
};
export const trackE2EEStreamVerificationCopied = function trackE2EEStreamVerificationCopied(channelId) {
  channelId = channelId.channelId;
  let obj = importDefault(4324);
  obj = { channel_id: channelId, guild_id: getGuildId(channelId) };
  obj.trackWithMetadata(AnalyticEvents.E2EE_STREAM_VERIFICATION_CODE_COPIED, obj);
};
export const trackE2EESettingsUserDelete = function trackE2EESettingsUserDelete() {
  importDefault(675).track(AnalyticEvents.E2EE_SETTINGS_USER_DELETE);
};
export const trackE2EESettingsDeviceDelete = function trackE2EESettingsDeviceDelete() {
  importDefault(675).track(AnalyticEvents.E2EE_SETTINGS_DEVICE_DELETE);
};
export const trackE2EEPublicKeyMismatch = function trackE2EEPublicKeyMismatch(arg0) {
  let obj = importDefault(675);
  obj = { key_version: "" + arg0 };
  obj.track(AnalyticEvents.E2EE_PUBLIC_KEY_MISMATCH, obj);
};
