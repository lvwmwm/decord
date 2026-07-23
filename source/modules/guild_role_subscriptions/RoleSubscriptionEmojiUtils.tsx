// Module ID: 4996
// Function ID: 43211
// Name: isPurchasableRoleSubscriptionEmoji
// Dependencies: [4992, 2]
// Exports: isRoleSubscriptionEmoji, isUnusableRoleSubscriptionEmoji

// Module 4996 (isPurchasableRoleSubscriptionEmoji)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function isPurchasableRoleSubscriptionEmoji(customEmojiFromJoinedGuild) {
  let roles;
  if (null != customEmojiFromJoinedGuild) {
    roles = customEmojiFromJoinedGuild.roles;
  }
  if (null != roles) {
    if (0 !== customEmojiFromJoinedGuild.roles.length) {
      if (null != customEmojiFromJoinedGuild.guildId) {
        authStore = authStore.getPurchasableSubscriptionRoles(customEmojiFromJoinedGuild.guildId);
        roles = customEmojiFromJoinedGuild.roles;
        return roles.some((arg0) => set.has(arg0));
      }
    }
  }
  return false;
}
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/RoleSubscriptionEmojiUtils.tsx");

export const isRoleSubscriptionEmoji = function isRoleSubscriptionEmoji(roles, id) {
  roles = undefined;
  if (null != roles) {
    roles = roles.roles;
  }
  if (null != roles) {
    if (0 !== roles.roles.length) {
      if (null != id) {
        authStore = authStore.getSubscriptionRoles(id);
        roles = roles.roles;
        return roles.some((arg0) => set.has(arg0));
      }
    }
  }
  return false;
};
export { isPurchasableRoleSubscriptionEmoji };
export const isUnusableRoleSubscriptionEmoji = function isUnusableRoleSubscriptionEmoji(emoji, arg1) {
  let roles;
  if (null != emoji) {
    roles = emoji.roles;
  }
  if (null != roles) {
    if (0 !== emoji.roles.length) {
      if (null != emoji.guildId) {
        if (isPurchasableRoleSubscriptionEmoji(emoji)) {
          authStore = authStore.getUserSubscriptionRoles(emoji.guildId);
          roles = emoji.roles;
          let userIsAdmin = arg1 === emoji.guildId;
          if (userIsAdmin) {
            userIsAdmin = authStore.getUserIsAdmin(emoji.guildId);
          }
          if (!someResult) {
            if (!userIsAdmin) {
              return true;
            }
          }
          someResult = roles.some((arg0) => set.has(arg0));
        }
        return false;
      }
    }
  }
  return false;
};
