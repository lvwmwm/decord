// Module ID: 16294
// Function ID: 125757
// Name: NEW_LISTING_EDIT_STATE_ID
// Dependencies: []
// Exports: openGroupSetupModal, openTierCreationModal

// Module 16294 (NEW_LISTING_EDIT_STATE_ID)
let closure_4 = importAll(dependencyMap[0]);
({ GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: closure_5, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: closure_6 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreatorExtras.native.tsx");

export const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
export const openTierCreationModal = function openTierCreationModal(arg0) {
  closure_4.resetImperatively();
  let obj = importAll(dependencyMap[2]);
  obj.clearEditState("NEW_LISTING_EDIT_STATE_ID");
  obj = {};
  const obj2 = importDefault(dependencyMap[3]);
  const merged = Object.assign(arg0);
  obj["editStateId"] = "NEW_LISTING_EDIT_STATE_ID";
  obj2.pushLazy(arg1(dependencyMap[5])(dependencyMap[4], dependencyMap.paths), obj, closure_5);
};
export const openGroupSetupModal = function openGroupSetupModal(guildId) {
  closure_4.resetImperatively();
  let obj = importAll(dependencyMap[2]);
  obj.clearEditState("NEW_LISTING_EDIT_STATE_ID");
  obj = { guildId, editStateId: "NEW_LISTING_EDIT_STATE_ID" };
  importDefault(dependencyMap[3]).pushLazy(arg1(dependencyMap[5])(dependencyMap[6], dependencyMap.paths), obj, closure_6);
};
