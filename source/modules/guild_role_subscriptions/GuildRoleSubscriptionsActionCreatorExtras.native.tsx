// Module ID: 16898
// Function ID: 16899
// Name: NEW_LISTING_EDIT_STATE_ID
// Dependencies: [16888, 14506, 14528, 4550, 16899, 2007, 16931, 2]
// Exports: openGroupSetupModal, openTierCreationModal

// Module 16898 (NEW_LISTING_EDIT_STATE_ID)
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
  let obj = importAll(14528);
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  obj = {};
  const obj2 = importDefault(4550);
  const merged = Object.assign(arg0);
  obj.editStateId = NEW_LISTING_EDIT_STATE_ID;
  obj2.pushLazy(require(2007) /* asyncRequireImpl */(16899, dependencyMap.paths), obj, closure_5);
};
export const openGroupSetupModal = function openGroupSetupModal(guildId) {
  usePriceTiers.resetImperatively();
  let obj = importAll(14528);
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  obj = { guildId, editStateId: NEW_LISTING_EDIT_STATE_ID };
  importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(16931, dependencyMap.paths), obj, closure_6);
};
