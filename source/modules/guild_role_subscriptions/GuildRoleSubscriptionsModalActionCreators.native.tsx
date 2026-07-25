// Module ID: 16504
// Function ID: 128656
// Name: showCreateBenefitModal
// Dependencies: [16505, 4338, 16506, 1935, 16512, 2]
// Exports: showCreateBenefitModal, showEditBenefitModal, showEditEmojisModal

// Module 16504 (showCreateBenefitModal)
import resetImperatively from "resetImperatively";

const require = arg1;
let result = require("DeleteButton").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsModalActionCreators.native.tsx");

export const showCreateBenefitModal = function showCreateBenefitModal(arg0) {
  let guildId;
  let listingId;
  let onSave;
  let type;
  ({ guildId, listingId, type, onSave } = arg0);
  resetImperatively.resetImperatively();
  importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(16506, dependencyMap.paths), { benefitType: type, guildId, onSave, listingId }, "GuildRoleSubscriptionBenefitEditorModal");
};
export const showEditBenefitModal = function showEditBenefitModal(benefit) {
  let guildId;
  let listingId;
  let onDelete;
  let onSave;
  benefit = benefit.benefit;
  ({ guildId, listingId, onDelete, onSave } = benefit);
  const result = resetImperatively.initializeImperatively(benefit);
  let obj = importDefault(4338);
  obj = { benefitType: benefit.ref_type, guildId, onDelete, onSave, listingId };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(16506, dependencyMap.paths), obj, "GuildRoleSubscriptionBenefitEditorModal");
};
export const showEditEmojisModal = function showEditEmojisModal(initialTierEmojiIds) {
  let guildId;
  let listingId;
  let onSave;
  let subscriptionRoleId;
  initialTierEmojiIds = initialTierEmojiIds.initialTierEmojiIds;
  ({ guildId, subscriptionRoleId, listingId, onSave } = initialTierEmojiIds);
  let obj = importDefault(4338);
  obj = { guildId, subscriptionRoleId };
  if (null == initialTierEmojiIds) {
    const _Set = Set;
    initialTierEmojiIds = new Set();
  }
  obj.initialTierEmojiIds = initialTierEmojiIds;
  obj.listingId = listingId;
  obj.onSave = onSave;
  obj.pushLazy(require(1935) /* maybeLoadBundle */(16512, dependencyMap.paths), obj, "GuildRoleSubscriptionEmojiEditorModal");
};
