// Module ID: 18840
// Function ID: 18841
// Name: GuildRoleSubscriptionsActionCreatorExtras
// Dependencies: [18832, 16146, 16168, 6150, 18841, 2000, 18873, 2]
// Exports: openGroupSetupModal, openTierCreationModal

// Module 18840 (GuildRoleSubscriptionsActionCreatorExtras)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 16168 */;
import RoleTierEditStore from "RoleTierEditStore" /* 18832 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 16146 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: hasOwnProperty, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: metroRequire } = GuildRoleSubscriptionsConstants);
const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreatorExtras.native.tsx");
const NEW_LISTING_EDIT_STATE_ID_export = "NEW_LISTING_EDIT_STATE_ID";

export { NEW_LISTING_EDIT_STATE_ID_export as NEW_LISTING_EDIT_STATE_ID };
export const openTierCreationModal = function openTierCreationModal(arg0) {
  RoleTierEditStore.resetImperatively();
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj2 = { editStateId: NEW_LISTING_EDIT_STATE_ID };
  ModalActionCreatorsDefault;
  const tmp4 = asyncRequire(18841, dependencyMap.paths);
  const merged = Object.assign(arg0);
  pushLazy(tmp4, obj2, hasOwnProperty);
};
export const openGroupSetupModal = function openGroupSetupModal(guildId) {
  RoleTierEditStore.resetImperatively();
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { guildId, editStateId: NEW_LISTING_EDIT_STATE_ID };
  obj2.pushLazy(asyncRequire(18873, dependencyMap.paths), obj3, metroRequire);
};
