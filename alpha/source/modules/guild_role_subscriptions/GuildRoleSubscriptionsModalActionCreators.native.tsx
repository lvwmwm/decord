// Module ID: 20361
// Function ID: 20362
// Name: GuildRoleSubscriptionsModalActionCreators
// Dependencies: [20362, 6799, 20363, 2118, 20368, 2]
// Exports: showCreateBenefitModal, showEditBenefitModal, showEditEmojisModal

// Module 20361 (GuildRoleSubscriptionsModalActionCreators)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import GuildRoleSubscriptionBenefitEditorModalStateStore from "GuildRoleSubscriptionBenefitEditorModalStateStore" /* 20362 */;
import size from "module_2" /* 2 */;

const GuildRoleSubscriptionBenefitEditorModal = "GuildRoleSubscriptionBenefitEditorModal";
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsModalActionCreators.native.tsx");

export function showCreateBenefitModal(arg0) {
  let guildId;
  let listingId;
  let onSave;
  let type;
  ({ guildId, listingId, type, onSave } = arg0);
  GuildRoleSubscriptionBenefitEditorModalStateStore.resetImperatively();
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(20363, dependencyMap.paths), { benefitType: type, guildId, onSave, listingId }, GuildRoleSubscriptionBenefitEditorModal);
}
export function showEditBenefitModal(benefit) {
  let guildId;
  let listingId;
  let onDelete;
  let onSave;
  benefit = benefit.benefit;
  ({ guildId, listingId, onDelete, onSave } = benefit);
  const result = GuildRoleSubscriptionBenefitEditorModalStateStore.initializeImperatively(benefit);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { benefitType: benefit.ref_type, guildId, onDelete, onSave, listingId };
  obj.pushLazy(asyncRequire(20363, dependencyMap.paths), obj2, GuildRoleSubscriptionBenefitEditorModal);
}
export function showEditEmojisModal(initialTierEmojiIds) {
  let guildId;
  let listingId;
  let onSave;
  let subscriptionRoleId;
  initialTierEmojiIds = initialTierEmojiIds.initialTierEmojiIds;
  ({ guildId, subscriptionRoleId, listingId, onSave } = initialTierEmojiIds);
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj = { guildId, subscriptionRoleId, initialTierEmojiIds, listingId, onSave };
  ModalActionCreatorsDefault;
  const tmp2 = asyncRequire(20368, dependencyMap.paths);
  if (initialTierEmojiIds == null) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    initialTierEmojiIds = new Set();
  }
  pushLazy(tmp2, obj, "GuildRoleSubscriptionEmojiEditorModal");
}
