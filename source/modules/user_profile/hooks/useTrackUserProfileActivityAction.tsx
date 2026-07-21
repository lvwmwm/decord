// Module ID: 11930
// Function ID: 92267
// Name: useTrackUserProfileActivityAction
// Dependencies: []
// Exports: default

// Module 11930 (useTrackUserProfileActivityAction)
require(dependencyMap[0]).useCallback;
let closure_4 = importDefault(dependencyMap[1]);
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/user_profile/hooks/useTrackUserProfileActivityAction.tsx");

export default function useTrackUserProfileActivityAction(activity) {
  let display;
  ({ user: closure_0, display } = activity);
  const importDefault = display;
  activity = activity.activity;
  const dependencyMap = activity;
  const entry = activity.entry;
  const stream = activity.stream;
  let closure_4 = stream;
  const voiceChannelId = activity.voiceChannelId;
  const analyticsLocations = activity.analyticsLocations;
  let analyticsLocations2;
  let stateFromStores;
  const userProfileAnalyticsContext = require(dependencyMap[2]).useUserProfileAnalyticsContext();
  const context = userProfileAnalyticsContext.context;
  const trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  analyticsLocations2 = importDefault(dependencyMap[3])().analyticsLocations;
  if (null != analyticsLocations) {
    analyticsLocations2 = analyticsLocations;
  }
  const obj = require(dependencyMap[2]);
  const useCallback = entry;
  const items = [closure_4];
  stateFromStores = require(dependencyMap[4]).useStateFromStores(items, () => stream.getUserOutbox(lib.id));
  const items1 = [trackUserProfileAction, context, display, activity, stream, entry, stateFromStores, voiceChannelId, analyticsLocations2];
  return useCallback((action) => {
    action = action.action;
    let obj = { action, analyticsLocations: analyticsLocations2 };
    trackUserProfileAction(obj);
    obj = { action, display, activity, entry, stream, outbox: stateFromStores, voiceChannelId, analyticsLocations: analyticsLocations2 };
    const merged = Object.assign(context);
    const result = lib(activity[5]).trackUserProfileActivityAction(obj);
  }, items1);
};
