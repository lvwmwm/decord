// Module ID: 19191
// Function ID: 19192
// Name: getTrackFriendsListViewedData
// Dependencies: [14486, 7880, 7876, 6627, 5082, 1072, 4965, 1403, 19192, 14487, 2]
// Exports: default

// Module 19191 (getTrackFriendsListViewedData)
import FlagUtils from "FlagUtils" /* 1403 */;
import UserSettings from "UserSettings" /* 4965 */;
import ContactSyncPersistedStore from "ContactSyncPersistedStore" /* 14486 */;
import ContactSyncUtils from "ContactSyncUtils" /* 14487 */;
import getFriendStatusCountsDefault from "getFriendStatusCounts" /* 19192 */;
import FriendSuggestionStore from "FriendSuggestionStore" /* 7880 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7876 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6627 */;
import RelationshipStore from "RelationshipStore" /* 5082 */;
import Constants from "Constants" /* 1072 */;
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
