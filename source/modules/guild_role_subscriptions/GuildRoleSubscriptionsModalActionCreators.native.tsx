// Module ID: 16329
// Function ID: 125990
// Name: showCreateBenefitModal
// Dependencies: [0, 0, 0, 0, 0, 0]
// Exports: showCreateBenefitModal, showEditBenefitModal, showEditEmojisModal

// Module 16329 (showCreateBenefitModal)
import __exportStarResult1 from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsModalActionCreators.native.tsx");

export const showCreateBenefitModal = function showCreateBenefitModal(arg0) {
  let guildId;
  let listingId;
  let onSave;
  let type;
  ({ guildId, listingId, type, onSave } = arg0);
  __exportStarResult1.resetImperatively();
  importDefault(dependencyMap[1]).pushLazy(arg1(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), { benefitType: type, guildId, onSave, listingId }, "GuildRoleSubscriptionBenefitEditorModal");
};
export const showEditBenefitModal = function showEditBenefitModal(benefit) {
  let guildId;
  let listingId;
  let onDelete;
  let onSave;
  benefit = benefit.benefit;
  ({ guildId, listingId, onDelete, onSave } = benefit);
  const result = __exportStarResult1.initializeImperatively(benefit);
  let obj = importDefault(dependencyMap[1]);
  obj = { benefitType: benefit.ref_type, guildId, onDelete, onSave, listingId };
  obj.pushLazy(arg1(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), obj, "GuildRoleSubscriptionBenefitEditorModal");
};
export const showEditEmojisModal = function showEditEmojisModal(initialTierEmojiIds) {
  let guildId;
  let listingId;
  let onSave;
  let subscriptionRoleId;
  initialTierEmojiIds = initialTierEmojiIds.initialTierEmojiIds;
  ({ guildId, subscriptionRoleId, listingId, onSave } = initialTierEmojiIds);
  let obj = importDefault(dependencyMap[1]);
  obj = { guildId, subscriptionRoleId };
  if (null == initialTierEmojiIds) {
    const _Set = Set;
    initialTierEmojiIds = new Set();
  }
  obj.initialTierEmojiIds = initialTierEmojiIds;
  obj.listingId = listingId;
  obj.onSave = onSave;
  obj.pushLazy(arg1(dependencyMap[3])(dependencyMap[4], dependencyMap.paths), obj, "GuildRoleSubscriptionEmojiEditorModal");
};
