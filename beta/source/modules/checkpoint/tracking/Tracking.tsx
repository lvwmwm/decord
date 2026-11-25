// Module ID: 12493
// Function ID: 12494
// Name: Tracking
// Dependencies: [1071, 1255, 5650, 12494, 2]
// Exports: trackCheckpoint2026CardClicked, trackCheckpoint2026CardSaveClicked, trackCheckpoint2026CardShareClicked, trackCheckpoint2026CardShared, trackCheckpoint2026CharacterChoiceSelected, trackCheckpoint2026CharacterSaveClicked, trackCheckpoint2026CharacterShareClicked, trackCheckpoint2026Closed, trackCheckpoint2026Completed, trackCheckpoint2026GiftCTAClicked, trackCheckpoint2026MuteToggled, trackCheckpoint2026SidekickMessageSent, trackCheckpoint2026Started, trackCheckpoint2026StepViewed

// Module 12493 (Tracking)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5650 */;
import CheckpointSessionAnalyticsManagerDefault from "CheckpointSessionAnalyticsManager" /* 12494 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/checkpoint/tracking/Tracking.tsx");

export function trackCheckpoint2026CardClicked(c1, channel) {
  const track = AnalyticsUtilsDefault.track;
  const CHECKPOINT_2026_CARD_CLICKED = AnalyticEvents.CHECKPOINT_2026_CARD_CLICKED;
  const obj = { other_user_id: c1 };
  AnalyticsUtilsDefault;
  const obj2 = AppAnalyticsUtils;
  const merged = Object.assign(obj2.collectChannelAnalyticsMetadata(channel));
  let guild_id;
  const collectGuildAnalyticsMetadata = AppAnalyticsUtils.collectGuildAnalyticsMetadata;
  AppAnalyticsUtils;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const merged1 = Object.assign(collectGuildAnalyticsMetadata(guild_id));
  track(CHECKPOINT_2026_CARD_CLICKED, obj);
}
export function trackCheckpoint2026Started(source) {
  const track = AnalyticsUtilsDefault.track;
  const CHECKPOINT_2026_STARTED = AnalyticEvents.CHECKPOINT_2026_STARTED;
  const obj = { source };
  AnalyticsUtilsDefault;
  const obj2 = CheckpointSessionAnalyticsManagerDefault;
  const merged = Object.assign(obj2.getAnalyticsProperties());
  track(CHECKPOINT_2026_STARTED, obj);
}
export function trackCheckpoint2026StepViewed(step_name) {
  const track = AnalyticsUtilsDefault.track;
  const CHECKPOINT_2026_STEP_VIEWED = AnalyticEvents.CHECKPOINT_2026_STEP_VIEWED;
  const obj = { step_name };
  AnalyticsUtilsDefault;
  const obj2 = CheckpointSessionAnalyticsManagerDefault;
  const merged = Object.assign(obj2.getAnalyticsProperties());
  track(CHECKPOINT_2026_STEP_VIEWED, obj);
}
export function trackCheckpoint2026Closed(stepName) {
  const track = AnalyticsUtilsDefault.track;
  const CHECKPOINT_2026_CLOSED = AnalyticEvents.CHECKPOINT_2026_CLOSED;
  const obj = { step_name: stepName };
  AnalyticsUtilsDefault;
  const obj2 = CheckpointSessionAnalyticsManagerDefault;
  const merged = Object.assign(obj2.getAnalyticsProperties());
  track(CHECKPOINT_2026_CLOSED, obj);
}
export function trackCheckpoint2026Completed() {
  let obj2;
  const obj = { step_name: obj2.getStepName() };
  const track = AnalyticsUtilsDefault.track;
  const CHECKPOINT_2026_COMPLETED = AnalyticEvents.CHECKPOINT_2026_COMPLETED;
  AnalyticsUtilsDefault;
  obj2 = CheckpointSessionAnalyticsManagerDefault;
  const obj3 = CheckpointSessionAnalyticsManagerDefault;
  const merged = Object.assign(obj3.getAnalyticsProperties());
  track(CHECKPOINT_2026_COMPLETED, obj);
}
export function trackCheckpoint2026CharacterChoiceSelected(trait_type, option_id, traitOptionStatus, traitOptionRarity) {
  let obj2;
  const obj = { trait_type, option_id, option_lock_status: traitOptionStatus, option_rarity: traitOptionRarity, step_name: obj2.getStepName() };
  const track = AnalyticsUtilsDefault.track;
  const CHECKPOINT_2026_CHARACTER_CHOICE_SELECTED = AnalyticEvents.CHECKPOINT_2026_CHARACTER_CHOICE_SELECTED;
  AnalyticsUtilsDefault;
  obj2 = CheckpointSessionAnalyticsManagerDefault;
  const obj3 = CheckpointSessionAnalyticsManagerDefault;
  const merged = Object.assign(obj3.getAnalyticsProperties());
  track(CHECKPOINT_2026_CHARACTER_CHOICE_SELECTED, obj);
}
export function trackCheckpoint2026GiftCTAClicked(id) {
  let obj2;
  const obj = { other_user_id: id, step_name: obj2.getStepName() };
  const track = AnalyticsUtilsDefault.track;
  const CHECKPOINT_2026_GIFT_CTA_CLICKED = AnalyticEvents.CHECKPOINT_2026_GIFT_CTA_CLICKED;
  AnalyticsUtilsDefault;
  obj2 = CheckpointSessionAnalyticsManagerDefault;
  const obj3 = CheckpointSessionAnalyticsManagerDefault;
  const merged = Object.assign(obj3.getAnalyticsProperties());
  track(CHECKPOINT_2026_GIFT_CTA_CLICKED, obj);
}
export function trackCheckpoint2026SidekickMessageSent(other_user_id) {
  const track = AnalyticsUtilsDefault.track;
  const CHECKPOINT_2026_SIDEKICK_MESSAGE_SENT = AnalyticEvents.CHECKPOINT_2026_SIDEKICK_MESSAGE_SENT;
  const obj = { other_user_id };
  AnalyticsUtilsDefault;
  const obj2 = CheckpointSessionAnalyticsManagerDefault;
  const merged = Object.assign(obj2.getAnalyticsProperties());
  track(CHECKPOINT_2026_SIDEKICK_MESSAGE_SENT, obj);
}
export function trackCheckpoint2026CardShared(checkpoint_card_type) {
  let obj2;
  const obj = { checkpoint_card_type, step_name: obj2.getStepName() };
  const track = AnalyticsUtilsDefault.track;
  const CHECKPOINT_2026_CARD_SHARED = AnalyticEvents.CHECKPOINT_2026_CARD_SHARED;
  AnalyticsUtilsDefault;
  obj2 = CheckpointSessionAnalyticsManagerDefault;
  const obj3 = CheckpointSessionAnalyticsManagerDefault;
  const merged = Object.assign(obj3.getAnalyticsProperties());
  track(CHECKPOINT_2026_CARD_SHARED, obj);
}
export function trackCheckpoint2026MuteToggled(isMuted) {
  let obj2;
  const obj = { step_name: obj2.getStepName(), is_muted: isMuted };
  const track = AnalyticsUtilsDefault.track;
  const CHECKPOINT_2026_MUTE_TOGGLED = AnalyticEvents.CHECKPOINT_2026_MUTE_TOGGLED;
  AnalyticsUtilsDefault;
  obj2 = CheckpointSessionAnalyticsManagerDefault;
  const obj3 = CheckpointSessionAnalyticsManagerDefault;
  const merged = Object.assign(obj3.getAnalyticsProperties());
  track(CHECKPOINT_2026_MUTE_TOGGLED, obj);
}
export function trackCheckpoint2026CharacterSaveClicked() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.CHECKPOINT_2026_CHARACTER_SAVE_CLICKED);
}
export function trackCheckpoint2026CharacterShareClicked() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.CHECKPOINT_2026_CHARACTER_SHARE_CLICKED);
}
export function trackCheckpoint2026CardSaveClicked(checkpoint_card_type) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { checkpoint_card_type };
  obj.track(AnalyticEvents.CHECKPOINT_2026_CARD_SAVE_CLICKED, obj2);
}
export function trackCheckpoint2026CardShareClicked(checkpoint_card_type) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { checkpoint_card_type };
  obj.track(AnalyticEvents.CHECKPOINT_2026_CARD_SHARE_CLICKED, obj2);
}
