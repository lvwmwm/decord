// Module ID: 19008
// Function ID: 19009
// Name: GuildRoleSubscriptionsModalActionCreators
// Dependencies: [19009, 6620, 19010, 2002, 19016, 2]
// Exports: showCreateBenefitModal, showEditBenefitModal, showEditEmojisModal

// Module 19008 (GuildRoleSubscriptionsModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6620 */;
import GuildRoleSubscriptionBenefitEditorModalStateStore from "GuildRoleSubscriptionBenefitEditorModalStateStore" /* 19009 */;
import size from "module_2" /* 2 */;

const GuildRoleSubscriptionBenefitEditorModal = "GuildRoleSubscriptionBenefitEditorModal";
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsModalActionCreators.native.tsx");

export const showCreateBenefitModal = function showCreateBenefitModal(arg0) {
  let guildId;
  let listingId;
  let onSave;
  let type;
  ({ guildId, listingId, type, onSave } = arg0);
  GuildRoleSubscriptionBenefitEditorModalStateStore.resetImperatively();
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(19010, dependencyMap.paths), { benefitType: type, guildId, onSave, listingId }, GuildRoleSubscriptionBenefitEditorModal);
};
export const showEditBenefitModal = function showEditBenefitModal(benefit) {
  let guildId;
  let listingId;
  let onDelete;
  let onSave;
  benefit = benefit.benefit;
  ({ guildId, listingId, onDelete, onSave } = benefit);
  const result = GuildRoleSubscriptionBenefitEditorModalStateStore.initializeImperatively(benefit);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { benefitType: benefit.ref_type, guildId, onDelete, onSave, listingId };
  obj.pushLazy(asyncRequire(19010, dependencyMap.paths), obj2, GuildRoleSubscriptionBenefitEditorModal);
};
export const showEditEmojisModal = function showEditEmojisModal(initialTierEmojiIds) {
  let guildId;
  let listingId;
  let onSave;
  let subscriptionRoleId;
  initialTierEmojiIds = initialTierEmojiIds.initialTierEmojiIds;
  ({ guildId, subscriptionRoleId, listingId, onSave } = initialTierEmojiIds);
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj = { guildId, subscriptionRoleId, initialTierEmojiIds, listingId, onSave };
  ModalActionCreatorsDefault;
  const tmp2 = asyncRequire(19016, dependencyMap.paths);
  if (initialTierEmojiIds == null) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    initialTierEmojiIds = new Set();
  }
  pushLazy(tmp2, obj, "GuildRoleSubscriptionEmojiEditorModal");
};
