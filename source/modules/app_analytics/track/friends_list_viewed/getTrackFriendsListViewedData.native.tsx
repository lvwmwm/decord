// Module ID: 15310
// Function ID: 116441
// Name: getTrackFriendsListViewedData
// Dependencies: []
// Exports: default

// Module 15310 (getTrackFriendsListViewedData)
const useContactSyncStore = require(dependencyMap[0]).useContactSyncStore;
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const _module = require(dependencyMap[5]);
({ PlatformTypes: closure_8, FriendDiscoveryFlags: closure_9 } = _module);
const _module1 = require(dependencyMap[10]);
const result = _module1.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/getTrackFriendsListViewedData.native.tsx");

export default function getTrackFriendsListViewedData() {
  const localAccount = localAccount.getLocalAccount(constants.CONTACTS);
  const FriendDiscoverySettings = require(dependencyMap[6]).FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.getSetting();
  let obj = require(dependencyMap[7]);
  const hasFlagResult = obj.hasFlag(setting, constants2.FIND_BY_PHONE);
  const obj2 = require(dependencyMap[7]);
  const suggestionCount = suggestionCount.getSuggestionCount();
  obj = { num_friends: store2.getFriendCount() };
  const merged = Object.assign(importDefault(dependencyMap[8])());
  obj["num_outgoing_requests"] = store2.getOutgoingCount();
  obj["num_incoming_requests"] = store2.getPendingCount();
  obj["num_game_friends"] = store.getGameFriendCount();
  obj["num_game_outgoing_requests"] = store.getPendingOutgoingCount();
  obj["num_game_incoming_requests"] = store.getPendingIncomingCount();
  obj["num_suggestions"] = suggestionCount;
  obj["was_dismissed"] = useContactSyncStore.getState().upsellCTADismissed;
  const hasFlagResult1 = require(dependencyMap[7]).hasFlag(setting, constants2.FIND_BY_EMAIL);
  obj["contact_sync_is_enabled"] = require(dependencyMap[9]).isContactSyncEnabled(localAccount);
  obj["is_discoverable_email"] = hasFlagResult1;
  obj["is_discoverable_phone"] = hasFlagResult;
  return obj;
};
