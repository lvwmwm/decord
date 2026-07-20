// Module ID: 7100
// Function ID: 57085
// Name: dismissGiftIntent
// Dependencies: []
// Exports: fetchAndReconcileGiftIntentDismissals, logFriendsListGiftIntentsShown, logGiftIntentFlowPurchasedGift, logGiftIntentMessageDismissed, logMessageGiftIntentShown

// Module 7100 (dismissGiftIntent)
function dismissGiftIntent(FRIEND_ANNIVERSARY, recipientUserId, explicit) {
  let obj = importDefault(dependencyMap[8]);
  obj = { gift_intent_type: FRIEND_ANNIVERSARY, dismiss_type: explicit };
  const userAffinity = userAffinity.getUserAffinity(recipientUserId);
  let dmProbability;
  if (null != userAffinity) {
    dmProbability = userAffinity.dmProbability;
  }
  obj.affinity = dmProbability;
  obj.track(constants.GIFT_INTENT_DISMISSED, obj);
  let result = recipientUserId(dependencyMap[9]).isFriendshipAnniversaryBackendPersistenceEnabled("dismissGiftIntent");
  if (result) {
    result = FRIEND_ANNIVERSARY !== GiftIntentType.UNSPECIFIED;
  }
  if (result) {
    const HTTP = recipientUserId(dependencyMap[5]).HTTP;
    obj = { url: constants2.GIFT_INTENTS_DISMISS };
    const obj1 = { intent_type: FRIEND_ANNIVERSARY, target_id: recipientUserId };
    obj.body = obj1;
    obj.oldFormErrors = true;
    obj.rejectWithError = true;
    HTTP.post(obj).catch((arg0) => {
      callback(closure_2[7]).captureException(arg0, { tags: { feature: "gift_intent" } });
    });
    const postResult = HTTP.post(obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const GiftIntentType = arg1(dependencyMap[3]).GiftIntentType;
({ AnalyticEvents: closure_7, Endpoints: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/premium/gifting/PremiumGiftingIntentActionCreators.tsx");

export const fetchAndReconcileGiftIntentDismissals = function fetchAndReconcileGiftIntentDismissals(serverDismissalTimestampMs) {
  const arg1 = serverDismissalTimestampMs;
  const id2 = id.getId();
  const HTTP = arg1(dependencyMap[5]).HTTP;
  const obj = { CONVERSATIONS: null, replace: null, push: null, url: constants2.GIFT_INTENT_DISMISSALS };
  const value = HTTP.get(obj);
  return value.then((body) => {
    if (id.getId() === callback) {
      let obj = { type: "GIFT_INTENT_DISMISSALS_FETCH_SUCCESS" };
      let dismissals = body.body.dismissals;
      if (null == dismissals) {
        dismissals = [];
      }
      obj.dismissals = dismissals.map((targetId) => ({ targetId: targetId.target_id, dismissedAtMs: Number(targetId.dismissed_at_ms) }));
      obj.settingsTimestampMs = body;
      callback(closure_2[6]).dispatch(obj);
      const obj3 = callback(closure_2[6]);
    } else {
      obj = callback(closure_2[6]);
      obj = { type: "GIFT_INTENT_DISMISSALS_FETCH_FAILURE" };
      obj.dispatch(obj);
    }
  }, (arg0) => {
    callback(closure_2[7]).captureException(arg0, { tags: { feature: "gift_intent" } });
    const obj = callback(closure_2[7]);
    callback(closure_2[6]).dispatch({ type: "GIFT_INTENT_DISMISSALS_FETCH_FAILURE" });
  });
};
export const logFriendsListGiftIntentsShown = function logFriendsListGiftIntentsShown() {
  importDefault(dependencyMap[6]).dispatch({ type: "FRIENDS_LIST_GIFT_INTENTS_SHOWN" });
};
export const logMessageGiftIntentShown = function logMessageGiftIntentShown(recipientUserId, FRIEND_ANNIVERSARY) {
  if (FRIEND_ANNIVERSARY === undefined) {
    FRIEND_ANNIVERSARY = GiftIntentType.FRIEND_ANNIVERSARY;
  }
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "MESSAGE_GIFT_INTENT_SHOWN", recipientUserId };
  obj.dispatch(obj);
  dismissGiftIntent(FRIEND_ANNIVERSARY, recipientUserId, "shown");
};
export const logGiftIntentMessageDismissed = function logGiftIntentMessageDismissed(channel_id, id) {
  const message = message.getMessage(channel_id, id);
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
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "GIFT_INTENT_FLOW_PURCHASED_GIFT", recipientUserId: handleGiftCodeCreate };
  obj.dispatch(obj);
  dismissGiftIntent(FRIEND_ANNIVERSARY, handleGiftCodeCreate, "gift_sent");
};
