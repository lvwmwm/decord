// Module ID: 17229
// Function ID: 17230
// Name: getTrackFriendsListViewedData
// Dependencies: [12826, 7903, 7899, 5500, 4409, 1078, 2023, 1389, 17230, 12827, 2]
// Exports: default

// Module 17229 (getTrackFriendsListViewedData)
import FlagUtils from "FlagUtils" /* 1389 */;
import UserSettings from "UserSettings" /* 2023 */;
import ContactSyncPersistedStore from "ContactSyncPersistedStore" /* 12826 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12827 */;
import getFriendStatusCountsDefault from "getFriendStatusCounts" /* 17230 */;
import FriendSuggestionStore from "FriendSuggestionStore" /* 7903 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7899 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5500 */;
import RelationshipStore from "RelationshipStore" /* 4409 */;
import Constants from "Constants" /* 1078 */;
import size from "module_2" /* 2 */;

const useContactSyncStore = ContactSyncPersistedStore.useContactSyncStore;
({ PlatformTypes: closure_8, FriendDiscoveryFlags: closure_9 } = Constants);
const result = size.fileFinishedImporting("modules/app_analytics/track/friends_list_viewed/getTrackFriendsListViewedData.native.tsx");

export default function getTrackFriendsListViewedData() {
  const localAccount = ConnectedAccountsStore.getLocalAccount(constants.CONTACTS);
  const FriendDiscoverySettings = UserSettings.FriendDiscoverySettings;
  const setting = FriendDiscoverySettings.getSetting();
  const hasFlagResult = FlagUtils.hasFlag(setting, constants2.FIND_BY_PHONE);
  const suggestionCount = FriendSuggestionStore.getSuggestionCount();
  const obj3 = { num_friends: RelationshipStore.getFriendCount() };
  const merged = Object.assign(getFriendStatusCountsDefault());
  obj3.num_outgoing_requests = RelationshipStore.getOutgoingCount();
  obj3.num_incoming_requests = RelationshipStore.getPendingCount();
  obj3.num_game_friends = GameRelationshipStore.getGameFriendCount();
  obj3.num_game_outgoing_requests = GameRelationshipStore.getPendingOutgoingCount();
  obj3.num_game_incoming_requests = GameRelationshipStore.getPendingIncomingCount();
  obj3.num_suggestions = suggestionCount;
  obj3.was_dismissed = useContactSyncStore.getState().upsellCTADismissed;
  const hasFlagResult1 = FlagUtils.hasFlag(setting, constants2.FIND_BY_EMAIL);
  obj3.contact_sync_is_enabled = ContactSyncUtils.isContactSyncEnabled(localAccount);
  obj3.is_discoverable_email = hasFlagResult1;
  obj3.is_discoverable_phone = hasFlagResult;
  return obj3;
};
