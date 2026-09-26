// Module ID: 18203
// Function ID: 18204
// Name: GuildRoleSubscriptionsActionCreatorExtras
// Dependencies: [18193, 15478, 15500, 4991, 18204, 1980, 18236, 2]
// Exports: openGroupSetupModal, openTierCreationModal

// Module 18203 (GuildRoleSubscriptionsActionCreatorExtras)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15500 */;
import RoleTierEditStore from "RoleTierEditStore" /* 18193 */;

require = fn;
const GuildRoleSubscriptionsConstants = fn(15478);
({ GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: hasOwnProperty, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: metroRequire } = GuildRoleSubscriptionsConstants);
const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreatorExtras.native.tsx");

export const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
export const openTierCreationModal = function openTierCreationModal(arg0) {
  RoleTierEditStore.resetImperatively();
  GuildRoleSubscriptionListingEditStateUtilsAll.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  const obj3 = {};
  const obj2 = ModalActionCreatorsDefault;
  const merged = Object.assign(arg0);
  obj3.editStateId = NEW_LISTING_EDIT_STATE_ID;
  obj2.pushLazy(asyncRequireImpl(18204, dependencyMap.paths), obj3, hasOwnProperty);
};
export const openGroupSetupModal = function openGroupSetupModal(guildId) {
  RoleTierEditStore.resetImperatively();
  GuildRoleSubscriptionListingEditStateUtilsAll.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(18236, dependencyMap.paths), { guildId, editStateId: NEW_LISTING_EDIT_STATE_ID }, timestampProducer);
};
