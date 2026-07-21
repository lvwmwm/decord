// Module ID: 5266
// Function ID: 44783
// Name: isPurchasableRoleSubscriptionEmoji
// Dependencies: []
// Exports: isRoleSubscriptionEmoji, isUnusableRoleSubscriptionEmoji

// Module 5266 (isPurchasableRoleSubscriptionEmoji)
function isPurchasableRoleSubscriptionEmoji(customEmojiFromJoinedGuild) {
  let roles;
  if (null != customEmojiFromJoinedGuild) {
    roles = customEmojiFromJoinedGuild.roles;
  }
  if (null != roles) {
    if (0 !== customEmojiFromJoinedGuild.roles.length) {
      if (null != customEmojiFromJoinedGuild.guildId) {
        const authStore = authStore.getPurchasableSubscriptionRoles(customEmojiFromJoinedGuild.guildId);
        roles = customEmojiFromJoinedGuild.roles;
        return roles.some((arg0) => set.has(arg0));
      }
    }
  }
  return false;
}
let closure_0 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/guild_role_subscriptions/RoleSubscriptionEmojiUtils.tsx");

export const isRoleSubscriptionEmoji = function isRoleSubscriptionEmoji(roles, id) {
  roles = undefined;
  if (null != roles) {
    roles = roles.roles;
  }
  if (null != roles) {
    if (0 !== roles.roles.length) {
      if (null != id) {
        const authStore = authStore.getSubscriptionRoles(id);
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
          const authStore = authStore.getUserSubscriptionRoles(emoji.guildId);
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
          const someResult = roles.some((arg0) => set.has(arg0));
        }
        return false;
      }
    }
  }
  return false;
};
