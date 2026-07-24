// Module ID: 11969
// Function ID: 92570
// Name: useTrackUserProfileActivityAction
// Dependencies: [31, 8731, 8310, 5462, 566, 8311, 2]
// Exports: default

// Module 11969 (useTrackUserProfileActivityAction)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

require("result").useCallback;
let result = require("UserProfileAnalyticsProvider").fileFinishedImporting("modules/user_profile/hooks/useTrackUserProfileActivityAction.tsx");

export default function useTrackUserProfileActivityAction(activity) {
  let display;
  let require;
  ({ user: require, display } = activity);
  activity = activity.activity;
  const entry = activity.entry;
  const stream = activity.stream;
  const voiceChannelId = activity.voiceChannelId;
  const analyticsLocations = activity.analyticsLocations;
  let analyticsLocations2;
  let stateFromStores;
  const userProfileAnalyticsContext = require(activity[2]).useUserProfileAnalyticsContext();
  const context = userProfileAnalyticsContext.context;
  const trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  analyticsLocations2 = display(activity[3])().analyticsLocations;
  if (null != analyticsLocations) {
    analyticsLocations2 = analyticsLocations;
  }
  let obj = require(activity[2]);
  const items = [stream];
  stateFromStores = require(activity[4]).useStateFromStores(items, () => stream.getUserOutbox(id.id));
  const items1 = [trackUserProfileAction, context, display, activity, stream, entry, stateFromStores, voiceChannelId, analyticsLocations2];
  return entry((action) => {
    action = action.action;
    let obj = { action, analyticsLocations: analyticsLocations2 };
    trackUserProfileAction(obj);
    obj = { action, display, activity, entry, stream, outbox: stateFromStores, voiceChannelId, analyticsLocations: analyticsLocations2 };
    const merged = Object.assign(context);
    const result = outer1_0(activity[5]).trackUserProfileActivityAction(obj);
  }, items1);
};
