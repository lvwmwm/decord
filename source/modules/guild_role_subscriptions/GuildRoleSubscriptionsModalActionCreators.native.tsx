// Module ID: 16446
// Function ID: 128164
// Name: showCreateBenefitModal
// Dependencies: [16447, 4337, 16448, 1934, 16454, 2]
// Exports: showCreateBenefitModal, showEditBenefitModal, showEditEmojisModal

// Module 16446 (showCreateBenefitModal)
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
  importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(16448, dependencyMap.paths), { benefitType: type, guildId, onSave, listingId }, "GuildRoleSubscriptionBenefitEditorModal");
};
export const showEditBenefitModal = function showEditBenefitModal(benefit) {
  let guildId;
  let listingId;
  let onDelete;
  let onSave;
  benefit = benefit.benefit;
  ({ guildId, listingId, onDelete, onSave } = benefit);
  const result = resetImperatively.initializeImperatively(benefit);
  let obj = importDefault(4337);
  obj = { benefitType: benefit.ref_type, guildId, onDelete, onSave, listingId };
  obj.pushLazy(require(1934) /* maybeLoadBundle */(16448, dependencyMap.paths), obj, "GuildRoleSubscriptionBenefitEditorModal");
};
export const showEditEmojisModal = function showEditEmojisModal(initialTierEmojiIds) {
  let guildId;
  let listingId;
  let onSave;
  let subscriptionRoleId;
  initialTierEmojiIds = initialTierEmojiIds.initialTierEmojiIds;
  ({ guildId, subscriptionRoleId, listingId, onSave } = initialTierEmojiIds);
  let obj = importDefault(4337);
  obj = { guildId, subscriptionRoleId };
  if (null == initialTierEmojiIds) {
    const _Set = Set;
    initialTierEmojiIds = new Set();
  }
  obj.initialTierEmojiIds = initialTierEmojiIds;
  obj.listingId = listingId;
  obj.onSave = onSave;
  obj.pushLazy(require(1934) /* maybeLoadBundle */(16454, dependencyMap.paths), obj, "GuildRoleSubscriptionEmojiEditorModal");
};
