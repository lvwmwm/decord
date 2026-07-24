// Module ID: 15706
// Function ID: 121132
// Name: items
// Dependencies: [689, 1273, 5513, 5472, 2]
// Exports: default

// Module 15706 (items)
let obj = { layout: { margin: { marginLeft: 8, marginRight: 8, marginVertical: 0 } } };
obj = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, padding: { paddingVertical: 4, paddingLeft: 8, paddingRight: 8 } };
obj.container = obj;
obj.voiceUsers = { height: 36, margin: { marginLeft: 60 } };
obj = { size: 24, avatarSize: require("Button").AvatarSizes.XSMALL };
obj.voiceOrStageSummaryRow = obj;
obj.channelName = { height: 20, text: { variant: "redesign/channel-title/semibold" } };
const obj1 = { messageTypeIconSize: require("Button").IconSizes.EXTRA_SMALL, messageTypeIconSizeNew: "xxs", height: 16, text: { variant: "text-xs/medium" }, margin: { marginTop: 0 } };
obj.messagePreview = obj1;
obj.timestamp = { text: { variant: "text-xs/medium" } };
obj.inviteRow = { text: { variant: "text-sm/semibold" } };
obj.icon = { avatarSize: require("Button").AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: require("makeSizeStyle").GuildIconSizes.SMALL_32, guildBadgeIconSize: require("makeSizeStyle").GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: { size: 16, lineHeight: 24 } };
obj.unreadBadge = { size: 8, position: { left: -12 } };
obj.mentionBadge = { position: { top: 28 } };
obj.category = { height: 30, margin: { marginTop: 16 }, text: { size: 14 } };
const obj2 = { avatarSize: require("Button").AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: require("makeSizeStyle").GuildIconSizes.SMALL_32, guildBadgeIconSize: require("makeSizeStyle").GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: { size: 16, lineHeight: 24 } };
obj.typing = { position: { top: 3, left: 3 }, typingIndicator: { position: { top: 20, left: 10 } }, avatarSize: require("Button").AvatarSizes.REFRESH_MEDIUM_32 };
obj.activeThreadCount = { text: { variant: "text-xs/bold" } };
const obj4 = { text: { variant: "text-xs/bold" }, layout: { paddingVertical: 4, paddingRight: 8, paddingLeft: 8, height: 24 } };
const obj3 = { position: { top: 3, left: 3 }, typingIndicator: { position: { top: 20, left: 10 } }, avatarSize: require("Button").AvatarSizes.REFRESH_MEDIUM_32 };
obj4.icon = { size: require("Button").IconSizes.EXTRA_SMALL, gameSize: require("GameIcon").GameIconSizes.SIZE_24 };
obj.joinVoiceButton = obj4;
const obj6 = { left: 38, startAndEndHeight: 15, transform: null, topOffset: -2 };
const items = [{ translateY: 10 }];
obj6.transform = items;
obj.threadSpine = obj6;
obj.happeningNow = { margin: { marginTop: 16, marginBottom: 16 } };
obj.separator = { margin: { marginVertical: 12 } };
obj.searchButton = { margin: { marginHorizontal: 12 } };
const obj5 = { size: require("Button").IconSizes.EXTRA_SMALL, gameSize: require("GameIcon").GameIconSizes.SIZE_24 };
const result = require("makeSizeStyle").fileFinishedImporting("modules/launchpad/native/shared/getLayoutStyles.tsx");

export default function getLayoutStyle() {
  return obj;
};
