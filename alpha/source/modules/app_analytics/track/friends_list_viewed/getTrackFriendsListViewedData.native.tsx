// Module ID: 17235
// Function ID: 17236
// Name: getTrackFriendsListViewedData
// Dependencies: [12439, 7339, 7335, 5757, 4717, 1085, 2040, 1402, 17236, 12440, 2]
// Exports: default

// Module 17235 (getTrackFriendsListViewedData)
import FlagUtils from "FlagUtils" /* 1402 */;
import UserSettings from "UserSettings" /* 2040 */;
import ContactSyncPersistedStore from "ContactSyncPersistedStore" /* 12439 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12440 */;
import getFriendStatusCountsDefault from "getFriendStatusCounts" /* 17236 */;
import FriendSuggestionStore from "FriendSuggestionStore" /* 7339 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7335 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5757 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
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
