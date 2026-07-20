// Module ID: 7640
// Function ID: 61164
// Name: formatUsernameOnClick
// Dependencies: []
// Exports: default

// Module 7640 (formatUsernameOnClick)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/system_messages/formatUsernameOnClick.tsx");

export default function formatUsernameOnClick(arg0) {
  let author;
  let colorStrings;
  let guildId;
  let message;
  let messageChannelId;
  let roleStyle;
  let userId;
  ({ userId, message, author, roleStyle, messageChannelId } = arg0);
  const colorString = author.colorString;
  ({ colorStrings, guildId } = author);
  if (null == userId) {
    userId = message.author.id;
  }
  const obj = { action: "bindUserMenu", userId };
  let tmp = null;
  if ("username" === roleStyle) {
    tmp = colorString;
  }
  obj.linkColor = tmp;
  obj.roleColor = colorString;
  let tmp2 = null;
  if (obj2.isNativeMessageEligibleForEnhancedRoleColors(guildId, userId)) {
    tmp2 = colorStrings;
  }
  obj.roleColors = tmp2;
  obj.shouldShowRoleDot = "dot" === roleStyle && null != colorString;
  if (null == messageChannelId) {
    messageChannelId = message.channel_id;
  }
  obj.messageChannelId = messageChannelId;
  obj.medium = true;
  return obj;
};
