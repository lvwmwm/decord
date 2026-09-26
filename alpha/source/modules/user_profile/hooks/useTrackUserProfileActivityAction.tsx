// Module ID: 12576
// Function ID: 12577
// Name: useTrackUserProfileActivityAction
// Dependencies: [19, 8254, 7635, 6583, 504, 7636, 2]
// Exports: default

// Module 12576 (useTrackUserProfileActivityAction)
import _mod19 from "module_19" /* 19 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 7636 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8254 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

_mod19.useCallback;
let result = size.fileFinishedImporting("modules/user_profile/hooks/useTrackUserProfileActivityAction.tsx");

export default function useTrackUserProfileActivityAction(activity) {
  ({ user: require, display } = activity);
  activity = activity.activity;
  const entry = activity.entry;
  const stream = activity.stream;
  const voiceChannelId = activity.voiceChannelId;
  let analyticsLocations;
  let stateFromStores;
  const userProfileAnalyticsContext = require("UserProfileAnalyticsContext").useUserProfileAnalyticsContext();
  const context = userProfileAnalyticsContext.context;
  const trackUserProfileAction = userProfileAnalyticsContext.trackUserProfileAction;
  if (analyticsLocations == null) {
    analyticsLocations = display(activity[3])().analyticsLocations;
  }
  const obj = require("UserProfileAnalyticsContext");
  const items = [stream];
  stateFromStores = require("initialize").useStateFromStores(items, () => ContentInventoryOutboxStore.getUserOutbox(id.id));
  const items1 = [trackUserProfileAction, context, display, activity, stream, entry, stateFromStores, voiceChannelId, analyticsLocations];
  return entry((action) => {
    action = action.action;
    trackUserProfileAction({ action, analyticsLocations });
    const merged = Object.assign(context);
    const result = UserProfileAnalyticsUtils.trackUserProfileActivityAction({ action, display, activity, entry, stream, outbox: stateFromStores, voiceChannelId, analyticsLocations });
  }, items1);
};
