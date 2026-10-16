// Module ID: 17826
// Function ID: 17827
// Name: getTrackFriendsListViewedData
// Dependencies: [13270, 7569, 7565, 5979, 4819, 1087, 2044, 1405, 17827, 13271, 2]
// Exports: default

// Module 17826 (getTrackFriendsListViewedData)
import FlagUtils from "FlagUtils" /* 1405 */;
import UserSettings from "UserSettings" /* 2044 */;
import ContactSyncPersistedStore from "ContactSyncPersistedStore" /* 13270 */;
import ContactSyncUtils from "ContactSyncUtils" /* 13271 */;
import getFriendStatusCountsDefault from "getFriendStatusCounts" /* 17827 */;
import FriendSuggestionStore from "FriendSuggestionStore" /* 7569 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7565 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5979 */;
import RelationshipStore from "RelationshipStore" /* 4819 */;
import Constants from "Constants" /* 1087 */;
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
