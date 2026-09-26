// Module ID: 17229
// Function ID: 17230
// Name: getTrackFriendsListViewedData
// Dependencies: [12961, 7930, 7926, 5530, 4437, 1074, 2019, 1385, 17230, 12962, 2]
// Exports: default

// Module 17229 (getTrackFriendsListViewedData)
import FlagUtils from "FlagUtils" /* 1385 */;
import UserSettings from "UserSettings" /* 2019 */;
import ContactSyncPersistedStore from "ContactSyncPersistedStore" /* 12961 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12962 */;
import getFriendStatusCountsDefault from "getFriendStatusCounts" /* 17230 */;
import FriendSuggestionStore from "FriendSuggestionStore" /* 7930 */;
import GameRelationshipStore from "GameRelationshipStore" /* 7926 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5530 */;
import RelationshipStore from "RelationshipStore" /* 4437 */;
import Constants from "Constants" /* 1074 */;
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
