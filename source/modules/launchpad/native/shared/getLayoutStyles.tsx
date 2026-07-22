// Module ID: 15542
// Function ID: 118637
// Name: getLayoutStyle
// Dependencies: []
// Exports: default

// Module 15542 (getLayoutStyle)
let obj = { layout: { margin: {} } };
obj = { borderRadius: importDefault(dependencyMap[0]).radii.md, padding: {} };
obj.container = obj;
obj.voiceUsers = { height: 36, margin: { marginLeft: 60 } };
obj = { size: 24, avatarSize: require(dependencyMap[1]).AvatarSizes.XSMALL };
obj.voiceOrStageSummaryRow = obj;
obj.channelName = { height: 20, text: { variant: "redesign/channel-title/semibold" } };
obj.messagePreview = { messageTypeIconSize: require(dependencyMap[1]).IconSizes.EXTRA_SMALL, text: { variant: "text-xs/medium" }, margin: { marginTop: 0 } };
obj.timestamp = { text: { variant: "text-xs/medium" } };
obj.inviteRow = { text: { variant: "text-sm/semibold" } };
const obj1 = { messageTypeIconSize: require(dependencyMap[1]).IconSizes.EXTRA_SMALL, text: { variant: "text-xs/medium" }, margin: { marginTop: 0 } };
obj.icon = { avatarSize: require(dependencyMap[1]).AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: require(dependencyMap[2]).GuildIconSizes.SMALL_32, guildBadgeIconSize: require(dependencyMap[2]).GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: {} };
obj.unreadBadge = { size: 8, position: { left: -12 } };
obj.mentionBadge = { position: { top: 28 } };
obj.category = { height: 30, margin: { marginTop: 16 }, text: { size: 14 } };
const obj2 = { avatarSize: require(dependencyMap[1]).AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: require(dependencyMap[2]).GuildIconSizes.SMALL_32, guildBadgeIconSize: require(dependencyMap[2]).GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: {} };
obj.typing = { position: {}, typingIndicator: { position: { Hover: 161, extractCaptchaPropsFromResponse: 161 } }, avatarSize: require(dependencyMap[1]).AvatarSizes.REFRESH_MEDIUM_32 };
obj.activeThreadCount = { text: { variant: "text-xs/bold" } };
const obj4 = { text: { variant: "text-xs/bold" }, layout: { "Bool(true)": null, "Bool(true)": "39cdeaab77d36adb2361dc5c033acede", "Bool(true)": "locke_2", "Bool(true)": "png" } };
const obj3 = { position: {}, typingIndicator: { position: { Hover: 161, extractCaptchaPropsFromResponse: 161 } }, avatarSize: require(dependencyMap[1]).AvatarSizes.REFRESH_MEDIUM_32 };
obj4.icon = { size: require(dependencyMap[1]).IconSizes.EXTRA_SMALL, gameSize: require(dependencyMap[3]).GameIconSizes.SIZE_24 };
obj.joinVoiceButton = obj4;
const items = [{ translateY: 10 }];
obj.threadSpine = { transform: items };
obj.happeningNow = { margin: { y: null, channelId: null } };
obj.separator = { margin: { marginVertical: 12 } };
obj.searchButton = { margin: { marginHorizontal: 12 } };
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/launchpad/native/shared/getLayoutStyles.tsx");

export default function getLayoutStyle() {
  return obj;
};
