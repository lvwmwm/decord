// Module ID: 16914
// Function ID: 16915
// Name: NEW_LISTING_EDIT_STATE_ID
// Dependencies: [16904, 14519, 14541, 4572, 16915, 2007, 16947, 2]
// Exports: openGroupSetupModal, openTierCreationModal

// Module 16914 (NEW_LISTING_EDIT_STATE_ID)
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
  let obj = importAll(14541);
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  obj = {};
  const obj2 = importDefault(4572);
  const merged = Object.assign(arg0);
  obj.editStateId = NEW_LISTING_EDIT_STATE_ID;
  obj2.pushLazy(require(2007) /* asyncRequireImpl */(16915, dependencyMap.paths), obj, closure_5);
};
export const openGroupSetupModal = function openGroupSetupModal(guildId) {
  usePriceTiers.resetImperatively();
  let obj = importAll(14541);
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  obj = { guildId, editStateId: NEW_LISTING_EDIT_STATE_ID };
  importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(16947, dependencyMap.paths), obj, closure_6);
};
