// Module ID: 16492
// Function ID: 128557
// Name: NEW_LISTING_EDIT_STATE_ID
// Dependencies: [16482, 14155, 14177, 4338, 16493, 1935, 16525, 2]
// Exports: openGroupSetupModal, openTierCreationModal

// Module 16492 (NEW_LISTING_EDIT_STATE_ID)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS";

let closure_5;
let closure_6;
const require = arg1;
({ GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: closure_5, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: closure_6 } = MAX_SUBSCRIPTION_TIERS);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreatorExtras.native.tsx");

export const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
export const openTierCreationModal = function openTierCreationModal(arg0) {
  _createForOfIteratorHelperLoose.resetImperatively();
  let obj = importAll(14177);
  obj.clearEditState("NEW_LISTING_EDIT_STATE_ID");
  obj = {};
  const obj2 = importDefault(4338);
  const merged = Object.assign(arg0);
  obj["editStateId"] = "NEW_LISTING_EDIT_STATE_ID";
  obj2.pushLazy(require(1935) /* maybeLoadBundle */(16493, dependencyMap.paths), obj, closure_5);
};
export const openGroupSetupModal = function openGroupSetupModal(guildId) {
  _createForOfIteratorHelperLoose.resetImperatively();
  let obj = importAll(14177);
  obj.clearEditState("NEW_LISTING_EDIT_STATE_ID");
  obj = { guildId, editStateId: "NEW_LISTING_EDIT_STATE_ID" };
  importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(16525, dependencyMap.paths), obj, closure_6);
};
