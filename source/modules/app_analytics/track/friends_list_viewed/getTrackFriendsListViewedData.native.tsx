// Module ID: 15969
// Function ID: 15970
// Name: getTrackFriendsListViewedData
// Dependencies: [11852, 5410, 5406, 5221, 4030, 676, 4066, 1403, 15970, 11853, 2]
// Exports: default

// Module 15969 (getTrackFriendsListViewedData)
import { useContactSyncStore } from "setStoredContacts";
import initialize from "initialize";
import recountRelationshipTypes from "recountRelationshipTypes";
import set from "set";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import ME from "ME";

let c9;
let metroImportAll;
({ PlatformTypes: metroImportAll, FriendDiscoveryFlags: c9 } = ME);
const result = require("recountRelationshipTypes").fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/getTrackFriendsListViewedData.native.tsx");

export default function getTrackFriendsListViewedData() {
  localAccount = localAccount.getLocalAccount(constants.CONTACTS);
  const FriendDiscoverySettings = require(4066) /* explicitContentFromProto */.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.getSetting();
  let obj = require(1403) /* hasFlag */;
  const hasFlagResult = obj.hasFlag(setting, constants2.FIND_BY_PHONE);
  const obj2 = require(1403) /* hasFlag */;
  suggestionCount = suggestionCount.getSuggestionCount();
  obj = { num_friends: null };
  obj[0] = store2.getFriendCount();
  const merged = Object.assign(importDefault(15970)());
  obj.num_outgoing_requests = store2.getOutgoingCount();
  obj.num_incoming_requests = store2.getPendingCount();
  obj.num_game_friends = store.getGameFriendCount();
  obj.num_game_outgoing_requests = store.getPendingOutgoingCount();
  obj.num_game_incoming_requests = store.getPendingIncomingCount();
  obj.num_suggestions = suggestionCount;
  obj.was_dismissed = useContactSyncStore.getState().upsellCTADismissed;
  const hasFlagResult1 = require(1403) /* hasFlag */.hasFlag(setting, constants2.FIND_BY_EMAIL);
  obj.contact_sync_is_enabled = require(11853) /* _uploadContacts */.isContactSyncEnabled(localAccount);
  obj.is_discoverable_email = hasFlagResult1;
  obj.is_discoverable_phone = hasFlagResult;
  return obj;
};
