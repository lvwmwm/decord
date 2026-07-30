// Module ID: 16573
// Function ID: 16574
// Name: NEW_LISTING_EDIT_STATE_ID
// Dependencies: [16563, 14218, 14240, 4395, 16574, 1959, 16606, 2]
// Exports: openGroupSetupModal, openTierCreationModal

// Module 16573 (NEW_LISTING_EDIT_STATE_ID)
import usePriceTiers from "usePriceTiers";
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS";

let c5;
let closure_6;
const require = arg1;
({ GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: c5, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: closure_6 } = MAX_SUBSCRIPTION_TIERS);
const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
const result = require("getRoleEmojis").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreatorExtras.native.tsx");

export const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
export const openTierCreationModal = function openTierCreationModal(arg0) {
  usePriceTiers.resetImperatively();
  let obj = importAll(14240);
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  obj = {};
  const obj2 = importDefault(4395);
  const merged = Object.assign(arg0);
  obj.editStateId = NEW_LISTING_EDIT_STATE_ID;
  obj2.pushLazy(require(1959) /* asyncRequireImpl */(16574, dependencyMap.paths), obj, closure_5);
};
export const openGroupSetupModal = function openGroupSetupModal(guildId) {
  usePriceTiers.resetImperatively();
  let obj = importAll(14240);
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  obj = { guildId, editStateId: NEW_LISTING_EDIT_STATE_ID };
  importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(16606, dependencyMap.paths), obj, closure_6);
};
