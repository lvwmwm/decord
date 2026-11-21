// Module ID: 20017
// Function ID: 20018
// Name: GuildRoleSubscriptionsActionCreatorExtras
// Dependencies: [20008, 16610, 16630, 6429, 20018, 2119, 20049, 2]
// Exports: openGroupSetupModal, openTierCreationModal

// Module 20017 (GuildRoleSubscriptionsActionCreatorExtras)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 16630 */;
import RoleTierEditStore from "RoleTierEditStore" /* 20008 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 16610 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: hasOwnProperty, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: metroRequire } = GuildRoleSubscriptionsConstants);
const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreatorExtras.native.tsx");
const NEW_LISTING_EDIT_STATE_ID_export = "NEW_LISTING_EDIT_STATE_ID";

export { NEW_LISTING_EDIT_STATE_ID_export as NEW_LISTING_EDIT_STATE_ID };
export function openTierCreationModal(arg0) {
  RoleTierEditStore.resetImperatively();
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj2 = { editStateId: NEW_LISTING_EDIT_STATE_ID };
  ModalActionCreatorsDefault;
  const tmp4 = asyncRequire(20018, dependencyMap.paths);
  const merged = Object.assign(arg0);
  pushLazy(tmp4, obj2, hasOwnProperty);
}
export function openGroupSetupModal(guildId) {
  RoleTierEditStore.resetImperatively();
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { guildId, editStateId: NEW_LISTING_EDIT_STATE_ID };
  obj2.pushLazy(asyncRequire(20049, dependencyMap.paths), obj3, metroRequire);
}
