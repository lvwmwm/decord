// Module ID: 7110
// Function ID: 57153
// Name: dismissGiftIntent
// Dependencies: [6902, 1194, 4349, 1851, 653, 507, 686, 1184, 675, 7111, 2]
// Exports: fetchAndReconcileGiftIntentDismissals, logFriendsListGiftIntentsShown, logGiftIntentFlowPurchasedGift, logGiftIntentMessageDismissed, logMessageGiftIntentShown

// Module 7110 (dismissGiftIntent)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { GiftIntentType } from "GuildFeatures";
import ME from "ME";

let closure_7;
let closure_8;
const require = arg1;
function dismissGiftIntent(FRIEND_ANNIVERSARY, recipientUserId, explicit) {
  let obj = importDefault(675);
  obj = { gift_intent_type: FRIEND_ANNIVERSARY, dismiss_type: explicit };
  userAffinity = userAffinity.getUserAffinity(recipientUserId);
  let dmProbability;
  if (null != userAffinity) {
    dmProbability = userAffinity.dmProbability;
  }
  obj.affinity = dmProbability;
  obj.track(constants.GIFT_INTENT_DISMISSED, obj);
  let result = require(7111) /* apexExperiment */.isFriendshipAnniversaryBackendPersistenceEnabled("dismissGiftIntent");
  if (result) {
    result = FRIEND_ANNIVERSARY !== GiftIntentType.UNSPECIFIED;
  }
  if (result) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: constants2.GIFT_INTENTS_DISMISS };
    const obj1 = { intent_type: FRIEND_ANNIVERSARY, target_id: recipientUserId };
    obj.body = obj1;
    obj.oldFormErrors = true;
    obj.rejectWithError = true;
    HTTP.post(obj).catch((arg0) => {
      outer1_1(outer1_2[7]).captureException(arg0, { tags: { feature: "gift_intent" } });
    });
    const postResult = HTTP.post(obj);
  }
}
({ AnalyticEvents: closure_7, Endpoints: closure_8 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/gifting/PremiumGiftingIntentActionCreators.tsx");

export const fetchAndReconcileGiftIntentDismissals = function fetchAndReconcileGiftIntentDismissals(serverDismissalTimestampMs) {
  const _require = serverDismissalTimestampMs;
  const id2 = id.getId();
  const HTTP = _require(507).HTTP;
  let obj = { url: constants2.GIFT_INTENT_DISMISSALS, oldFormErrors: true, rejectWithError: true };
  const value = HTTP.get(obj);
  return value.then((body) => {
    if (outer1_4.getId() === callback) {
      let obj = { type: "GIFT_INTENT_DISMISSALS_FETCH_SUCCESS" };
      let dismissals = body.body.dismissals;
      if (null == dismissals) {
        dismissals = [];
      }
      obj.dismissals = dismissals.map((targetId) => ({ targetId: targetId.target_id, dismissedAtMs: Number(targetId.dismissed_at_ms) }));
      obj.settingsTimestampMs = closure_0;
      callback(outer1_2[6]).dispatch(obj);
      const obj3 = callback(outer1_2[6]);
    } else {
      obj = callback(outer1_2[6]);
      obj = { type: "GIFT_INTENT_DISMISSALS_FETCH_FAILURE" };
      obj.dispatch(obj);
    }
  }, (arg0) => {
    callback(outer1_2[7]).captureException(arg0, { tags: { feature: "gift_intent" } });
    const obj = callback(outer1_2[7]);
    callback(outer1_2[6]).dispatch({ type: "GIFT_INTENT_DISMISSALS_FETCH_FAILURE" });
  });
};
export const logFriendsListGiftIntentsShown = function logFriendsListGiftIntentsShown() {
  importDefault(686).dispatch({ type: "FRIENDS_LIST_GIFT_INTENTS_SHOWN" });
};
export const logMessageGiftIntentShown = function logMessageGiftIntentShown(recipientUserId, FRIEND_ANNIVERSARY) {
  if (FRIEND_ANNIVERSARY === undefined) {
    FRIEND_ANNIVERSARY = GiftIntentType.FRIEND_ANNIVERSARY;
  }
  let obj = importDefault(686);
  obj = { type: "MESSAGE_GIFT_INTENT_SHOWN", recipientUserId };
  obj.dispatch(obj);
  dismissGiftIntent(FRIEND_ANNIVERSARY, recipientUserId, "shown");
};
export const logGiftIntentMessageDismissed = function logGiftIntentMessageDismissed(channel_id, id) {
  message = message.getMessage(channel_id, id);
  let giftingPrompt;
  if (null != message) {
    giftingPrompt = message.giftingPrompt;
  }
  if (null != giftingPrompt) {
    dismissGiftIntent(giftingPrompt.giftIntentType, giftingPrompt.recipientUserId, "explicit");
  }
};
export const logGiftIntentFlowPurchasedGift = function logGiftIntentFlowPurchasedGift(handleGiftCodeCreate, FRIEND_ANNIVERSARY) {
  if (FRIEND_ANNIVERSARY === undefined) {
    FRIEND_ANNIVERSARY = GiftIntentType.FRIEND_ANNIVERSARY;
  }
  let obj = importDefault(686);
  obj = { type: "GIFT_INTENT_FLOW_PURCHASED_GIFT", recipientUserId: handleGiftCodeCreate };
  obj.dispatch(obj);
  dismissGiftIntent(FRIEND_ANNIVERSARY, handleGiftCodeCreate, "gift_sent");
};
