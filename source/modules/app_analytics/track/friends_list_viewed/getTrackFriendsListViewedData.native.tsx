// Module ID: 15485
// Function ID: 119014
// Name: getTrackFriendsListViewedData
// Dependencies: [11735, 6904, 6900, 4812, 3767, 653, 3803, 1360, 15486, 11736, 2]
// Exports: default

// Module 15485 (getTrackFriendsListViewedData)
import { useContactSyncStore } from "setStoredContacts";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_8;
let closure_9;
({ PlatformTypes: closure_8, FriendDiscoveryFlags: closure_9 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/getTrackFriendsListViewedData.native.tsx");

export default function getTrackFriendsListViewedData() {
  localAccount = localAccount.getLocalAccount(constants.CONTACTS);
  const FriendDiscoverySettings = require(3803) /* explicitContentFromProto */.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.getSetting();
  let obj = require(1360) /* hasFlag */;
  const hasFlagResult = obj.hasFlag(setting, constants2.FIND_BY_PHONE);
  const obj2 = require(1360) /* hasFlag */;
  suggestionCount = suggestionCount.getSuggestionCount();
  obj = { num_friends: store2.getFriendCount() };
  const merged = Object.assign(importDefault(15486)());
  obj["num_outgoing_requests"] = store2.getOutgoingCount();
  obj["num_incoming_requests"] = store2.getPendingCount();
  obj["num_game_friends"] = store.getGameFriendCount();
  obj["num_game_outgoing_requests"] = store.getPendingOutgoingCount();
  obj["num_game_incoming_requests"] = store.getPendingIncomingCount();
  obj["num_suggestions"] = suggestionCount;
  obj["was_dismissed"] = useContactSyncStore.getState().upsellCTADismissed;
  const hasFlagResult1 = require(1360) /* hasFlag */.hasFlag(setting, constants2.FIND_BY_EMAIL);
  obj["contact_sync_is_enabled"] = require(11736) /* isContactSyncAvailable */.isContactSyncEnabled(localAccount);
  obj["is_discoverable_email"] = hasFlagResult1;
  obj["is_discoverable_phone"] = hasFlagResult;
  return obj;
};
