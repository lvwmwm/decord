// Module ID: 17457
// Function ID: 17458
// Name: getTrackFriendsListViewedData
// Dependencies: [12401, 7350, 7346, 5761, 4760, 1085, 2041, 1403, 17458, 12402, 2]
// Exports: default

// Module 17457 (getTrackFriendsListViewedData)
import FlagUtils from "FlagUtils" /* 1403 */;
import UserSettings from "UserSettings" /* 2041 */;
import ContactSyncPersistedStore from "ContactSyncPersistedStore" /* 12401 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12402 */;
import getFriendStatusCountsDefault from "getFriendStatusCounts" /* 17458 */;
import FriendSuggestionStore from "FriendSuggestionStore" /* 7350 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7346 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5761 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
const useContactSyncStore = ContactSyncPersistedStore.useContactSyncStore;
({ PlatformTypes: metroImportAll, FriendDiscoveryFlags: c9 } = Constants);
const result = size.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/getTrackFriendsListViewedData.native.tsx");

export default function getTrackFriendsListViewedData() {
  let obj4;
  let upsellCTADismissed;
  const localAccount = ConnectedAccountsStore.getLocalAccount(metroImportAll.CONTACTS);
  const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.getSetting();
  const obj = FlagUtils;
  const hasFlagResult = obj.hasFlag(setting, constants2.FIND_BY_PHONE);
  const obj2 = FlagUtils;
  const hasFlagResult1 = obj2.hasFlag(setting, constants2.FIND_BY_EMAIL);
  const suggestionCount = FriendSuggestionStore.getSuggestionCount();
  const obj3 = { num_friends: RelationshipStore.getFriendCount(), num_outgoing_requests: RelationshipStore.getOutgoingCount(), num_incoming_requests: RelationshipStore.getPendingCount(), num_game_friends: GameRelationshipStore.getGameFriendCount(), num_game_outgoing_requests: GameRelationshipStore.getPendingOutgoingCount(), num_game_incoming_requests: GameRelationshipStore.getPendingIncomingCount(), num_suggestions: suggestionCount, was_dismissed: upsellCTADismissed, contact_sync_is_enabled: obj4.isContactSyncEnabled(localAccount), is_discoverable_email: hasFlagResult1, is_discoverable_phone: hasFlagResult };
  upsellCTADismissed = useContactSyncStore.getState().upsellCTADismissed;
  const merged = Object.assign(getFriendStatusCountsDefault());
  obj4 = ContactSyncUtils;
  return obj3;
};
