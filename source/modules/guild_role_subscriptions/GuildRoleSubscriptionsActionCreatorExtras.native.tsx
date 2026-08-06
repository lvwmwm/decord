// Module ID: 16720
// Function ID: 16721
// Name: NEW_LISTING_EDIT_STATE_ID
// Dependencies: [16710, 14353, 14375, 4490, 16721, 1988, 16753, 2]
// Exports: openGroupSetupModal, openTierCreationModal

// Module 16720 (NEW_LISTING_EDIT_STATE_ID)
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
  let obj = importAll(14375);
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  obj = {};
  const obj2 = importDefault(4490);
  const merged = Object.assign(arg0);
  obj.editStateId = NEW_LISTING_EDIT_STATE_ID;
  obj2.pushLazy(require(1988) /* asyncRequireImpl */(16721, dependencyMap.paths), obj, closure_5);
};
export const openGroupSetupModal = function openGroupSetupModal(guildId) {
  usePriceTiers.resetImperatively();
  let obj = importAll(14375);
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  obj = { guildId, editStateId: NEW_LISTING_EDIT_STATE_ID };
  importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(16753, dependencyMap.paths), obj, closure_6);
};
