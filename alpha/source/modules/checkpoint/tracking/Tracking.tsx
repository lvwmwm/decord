// Module ID: 13655
// Function ID: 13656
// Name: Tracking
// Dependencies: [1072, 1252, 5894, 13656, 2]
// Exports: trackCheckpoint2026CardClicked, trackCheckpoint2026CardShared, trackCheckpoint2026CharacterChoiceSelected, trackCheckpoint2026Closed, trackCheckpoint2026Completed, trackCheckpoint2026GiftCtaClicked, trackCheckpoint2026MuteToggled, trackCheckpoint2026SidekickMessageSent, trackCheckpoint2026Started, trackCheckpoint2026StepViewed

// Module 13655 (Tracking)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5894 */;
import CheckpointSessionAnalyticsManagerDefault from "CheckpointSessionAnalyticsManager" /* 13656 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/checkpoint/tracking/Tracking.tsx");

export function trackCheckpoint2026CardClicked(authorId, channel) {
  const track = AnalyticsUtilsDefault.track;
  const CHECKPOINT_2026_CARD_CLICKED = AnalyticEvents.CHECKPOINT_2026_CARD_CLICKED;
  const obj = { other_user_id: authorId };
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
export function trackCheckpoint2026CharacterChoiceSelected(trait_type, option_id) {
  let obj2;
  const obj = { trait_type, option_id, step_name: obj2.getStepName() };
  const track = AnalyticsUtilsDefault.track;
  const CHECKPOINT_2026_CHARACTER_CHOICE_SELECTED = AnalyticEvents.CHECKPOINT_2026_CHARACTER_CHOICE_SELECTED;
  AnalyticsUtilsDefault;
  obj2 = CheckpointSessionAnalyticsManagerDefault;
  const obj3 = CheckpointSessionAnalyticsManagerDefault;
  const merged = Object.assign(obj3.getAnalyticsProperties());
  track(CHECKPOINT_2026_CHARACTER_CHOICE_SELECTED, obj);
}
export function trackCheckpoint2026GiftCtaClicked(id) {
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
