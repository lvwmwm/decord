// Module ID: 18267
// Function ID: 18268
// Name: GuildRoleSubscriptionsActionCreatorExtras
// Dependencies: [18259, 15300, 15322, 5940, 18268, 1999, 18300, 2]
// Exports: openGroupSetupModal, openTierCreationModal

// Module 18267 (GuildRoleSubscriptionsActionCreatorExtras)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15322 */;
import RoleTierEditStore from "RoleTierEditStore" /* 18259 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 15300 */;
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
  const tmp4 = asyncRequire(18268, dependencyMap.paths);
  const merged = Object.assign(arg0);
  pushLazy(tmp4, obj2, hasOwnProperty);
};
export const openGroupSetupModal = function openGroupSetupModal(guildId) {
  RoleTierEditStore.resetImperatively();
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { guildId, editStateId: NEW_LISTING_EDIT_STATE_ID };
  obj2.pushLazy(asyncRequire(18300, dependencyMap.paths), obj3, metroRequire);
};
