// Module ID: 16579
// Function ID: 16580
// Name: getTrackFriendsListViewedData
// Dependencies: [12069, 7079, 7075, 5594, 4482, 1086, 2027, 1391, 16580, 12070, 2]
// Exports: default

// Module 16579 (getTrackFriendsListViewedData)
import FlagUtils from "FlagUtils" /* 1391 */;
import UserSettings from "UserSettings" /* 2027 */;
import ContactSyncPersistedStore from "ContactSyncPersistedStore" /* 12069 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12070 */;
import getFriendStatusCountsDefault from "getFriendStatusCounts" /* 16580 */;
import FriendSuggestionStore from "FriendSuggestionStore" /* 7079 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7075 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5594 */;
import RelationshipStore from "RelationshipStore" /* 4482 */;
import Constants from "Constants" /* 1086 */;
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
