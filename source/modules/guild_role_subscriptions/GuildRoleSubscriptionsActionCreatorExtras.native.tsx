// Module ID: 17559
// Function ID: 17560
// Name: NEW_LISTING_EDIT_STATE_ID
// Dependencies: [17549, 15030, 15052, 4723, 17560, 2008, 17592, 2]
// Exports: openGroupSetupModal, openTierCreationModal

// Module 17559 (NEW_LISTING_EDIT_STATE_ID)
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4723 from "module_4723" /* 4723 */;
import getRoleEmojisAll from "getRoleEmojis" /* 15052 */;
import closure_4 from "usePriceTiers" /* 17549 */;
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS" /* 15030 */;

require = arg1;
({ GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: c5, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: closure_6 } = MAX_SUBSCRIPTION_TIERS);
const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreatorExtras.native.tsx");

export const NEW_LISTING_EDIT_STATE_ID = "NEW_LISTING_EDIT_STATE_ID";
export const openTierCreationModal = function openTierCreationModal(arg0) {
  closure_4.resetImperatively();
  let obj = getRoleEmojisAll;
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  obj = {};
  const obj2 = _modDef4723;
  const merged = Object.assign(arg0);
  obj.editStateId = NEW_LISTING_EDIT_STATE_ID;
  obj2.pushLazy(asyncRequireImpl(17560, dependencyMap.paths), obj, closure_5);
};
export const openGroupSetupModal = function openGroupSetupModal(guildId) {
  closure_4.resetImperatively();
  let obj = getRoleEmojisAll;
  obj.clearEditState(NEW_LISTING_EDIT_STATE_ID);
  obj = { guildId, editStateId: NEW_LISTING_EDIT_STATE_ID };
  _modDef4723.pushLazy(asyncRequireImpl(17592, dependencyMap.paths), obj, closure_6);
};
