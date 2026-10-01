// Module ID: 12594
// Function ID: 12595
// Name: useTrackUserProfileActivityAction
// Dependencies: [19, 8254, 7635, 6583, 504, 7636, 2]
// Exports: default

// Module 12594 (useTrackUserProfileActivityAction)
import react from "react" /* 19 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 7636 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8254 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let action;

react.useCallback;
let result = size.fileFinishedImporting("modules/user_profile/hooks/useTrackUserProfileActivityAction.tsx");

export default function useTrackUserProfileActivityAction(activity) {
  let display;
  let id;
  ({ user: require, display } = activity);
  activity = activity.activity;
  const entry = activity.entry;
  const stream = activity.stream;
  const voiceChannelId = activity.voiceChannelId;
  let analyticsLocations;
  let stateFromStores;
  const tmp2 = activity;
  let obj = require("UserProfileAnalyticsContext");
  const userProfileAnalyticsContext = obj.useUserProfileAnalyticsContext();
  const context = userProfileAnalyticsContext.context;
  const trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  const tmp = require;
  if (analyticsLocations == null) {
    analyticsLocations = display(activity[3])().analyticsLocations;
  }
  const items = [stream];
  const tmpResult = tmp(tmp2[4]);
  stateFromStores = tmpResult.useStateFromStores(items, () => ContentInventoryOutboxStore.getUserOutbox(require.id));
  const items1 = [trackUserProfileAction, context, display, activity, stream, entry, stateFromStores, voiceChannelId, analyticsLocations];
  return entry((action) => {
    action = action.action;
    const obj = { action, analyticsLocations };
    trackUserProfileAction(obj);
    const trackUserProfileActivityAction = UserProfileAnalyticsUtils.trackUserProfileActivityAction;
    const obj2 = { action, display, activity, entry, stream, outbox: stateFromStores, voiceChannelId, analyticsLocations };
    UserProfileAnalyticsUtils;
    const merged = Object.assign(context);
    const result = trackUserProfileActivityAction(obj2);
  }, items1);
};
