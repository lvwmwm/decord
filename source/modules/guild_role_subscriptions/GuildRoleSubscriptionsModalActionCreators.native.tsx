// Module ID: 16850
// Function ID: 16851
// Name: showCreateBenefitModal
// Dependencies: [16851, 4509, 16852, 2007, 16858, 2]
// Exports: showCreateBenefitModal, showEditBenefitModal, showEditEmojisModal

// Module 16850 (showCreateBenefitModal)
import resetImperatively from "resetImperatively";

const require = arg1;
const GuildRoleSubscriptionBenefitEditorModal = "GuildRoleSubscriptionBenefitEditorModal";
let result = require("DeleteButton").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsModalActionCreators.native.tsx");

export const showCreateBenefitModal = function showCreateBenefitModal(arg0) {
  let guildId;
  let listingId;
  let onSave;
  let type;
  ({ guildId, listingId, type, onSave } = arg0);
  resetImperatively.resetImperatively();
  importDefault(4509).pushLazy(require(2007) /* asyncRequireImpl */(16852, dependencyMap.paths), { benefitType: type, guildId, onSave, listingId }, GuildRoleSubscriptionBenefitEditorModal);
};
export const showEditBenefitModal = function showEditBenefitModal(benefit) {
  let guildId;
  let listingId;
  let onDelete;
  let onSave;
  benefit = benefit.benefit;
  ({ guildId, listingId, onDelete, onSave } = benefit);
  const result = resetImperatively.initializeImperatively(benefit);
  let obj = importDefault(4509);
  obj = { benefitType: benefit.ref_type, guildId, onDelete, onSave, listingId };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(16852, dependencyMap.paths), obj, GuildRoleSubscriptionBenefitEditorModal);
};
export const showEditEmojisModal = function showEditEmojisModal(initialTierEmojiIds) {
  let guildId;
  let listingId;
  let onSave;
  let subscriptionRoleId;
  initialTierEmojiIds = initialTierEmojiIds.initialTierEmojiIds;
  ({ guildId, subscriptionRoleId, listingId, onSave } = initialTierEmojiIds);
  let obj = importDefault(4509);
  obj = { guildId, subscriptionRoleId, initialTierEmojiIds: null, listingId: null, onSave: null };
  if (initialTierEmojiIds == null) {
    const _Set = Set;
    initialTierEmojiIds = new Set();
  }
  obj[2] = initialTierEmojiIds;
  obj[3] = listingId;
  obj[4] = onSave;
  obj.pushLazy(require(2007) /* asyncRequireImpl */(16858, dependencyMap.paths), obj, "GuildRoleSubscriptionEmojiEditorModal");
};
