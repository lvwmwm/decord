// Module ID: 15508
// Function ID: 119191
// Name: getTrackFriendsListViewedData
// Dependencies: [11706, 5895, 5891, 4813, 3768, 653, 3804, 1360, 15509, 11707, 2]
// Exports: default

// Module 15508 (getTrackFriendsListViewedData)
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
  const FriendDiscoverySettings = require(3804) /* explicitContentFromProto */.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.getSetting();
  let obj = require(1360) /* hasFlag */;
  const hasFlagResult = obj.hasFlag(setting, constants2.FIND_BY_PHONE);
  const obj2 = require(1360) /* hasFlag */;
  suggestionCount = suggestionCount.getSuggestionCount();
  obj = { num_friends: store2.getFriendCount() };
  const merged = Object.assign(importDefault(15509)());
  obj["num_outgoing_requests"] = store2.getOutgoingCount();
  obj["num_incoming_requests"] = store2.getPendingCount();
  obj["num_game_friends"] = store.getGameFriendCount();
  obj["num_game_outgoing_requests"] = store.getPendingOutgoingCount();
  obj["num_game_incoming_requests"] = store.getPendingIncomingCount();
  obj["num_suggestions"] = suggestionCount;
  obj["was_dismissed"] = useContactSyncStore.getState().upsellCTADismissed;
  const hasFlagResult1 = require(1360) /* hasFlag */.hasFlag(setting, constants2.FIND_BY_EMAIL);
  obj["contact_sync_is_enabled"] = require(11707) /* isContactSyncAvailable */.isContactSyncEnabled(localAccount);
  obj["is_discoverable_email"] = hasFlagResult1;
  obj["is_discoverable_phone"] = hasFlagResult;
  return obj;
};
