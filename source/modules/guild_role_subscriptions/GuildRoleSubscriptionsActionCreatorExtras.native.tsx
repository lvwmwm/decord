// Module ID: 16434
// Function ID: 128065
// Name: NEW_LISTING_EDIT_STATE_ID
// Dependencies: [16424, 14094, 14116, 4337, 16435, 1934, 16467, 2]
// Exports: openGroupSetupModal, openTierCreationModal

// Module 16434 (NEW_LISTING_EDIT_STATE_ID)
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
  let obj = importAll(14116);
  obj.clearEditState("NEW_LISTING_EDIT_STATE_ID");
  obj = {};
  const obj2 = importDefault(4337);
  const merged = Object.assign(arg0);
  obj["editStateId"] = "NEW_LISTING_EDIT_STATE_ID";
  obj2.pushLazy(require(1934) /* maybeLoadBundle */(16435, dependencyMap.paths), obj, closure_5);
};
export const openGroupSetupModal = function openGroupSetupModal(guildId) {
  _createForOfIteratorHelperLoose.resetImperatively();
  let obj = importAll(14116);
  obj.clearEditState("NEW_LISTING_EDIT_STATE_ID");
  obj = { guildId, editStateId: "NEW_LISTING_EDIT_STATE_ID" };
  importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(16467, dependencyMap.paths), obj, closure_6);
};
