// Module ID: 15531
// Function ID: 118555
// Name: items
// Dependencies: []
// Exports: default

// Module 15531 (items)
let obj = { layout: { margin: { "Null": null, "Null": null, "Null": null } } };
obj = { borderRadius: importDefault(dependencyMap[0]).radii.md, padding: { EU_COUNTRIES: null, borderWidth: null, borderColor: null } };
obj.container = obj;
obj.voiceUsers = { height: 36, margin: { marginLeft: 60 } };
obj = { size: 24, avatarSize: require(dependencyMap[1]).AvatarSizes.XSMALL };
obj.voiceOrStageSummaryRow = obj;
obj.channelName = { height: 20, text: { variant: "redesign/channel-title/semibold" } };
const obj1 = { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, messageTypeIconSize: require(dependencyMap[1]).IconSizes.EXTRA_SMALL, text: { variant: "text-xs/medium" }, margin: { marginTop: 0 } };
obj.messagePreview = obj1;
obj.timestamp = { text: { variant: "text-xs/medium" } };
obj.inviteRow = { text: { variant: "text-sm/semibold" } };
obj.icon = { avatarSize: require(dependencyMap[1]).AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: require(dependencyMap[2]).GuildIconSizes.SMALL_32, guildBadgeIconSize: require(dependencyMap[2]).GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: {} };
obj.unreadBadge = { size: 8, position: { left: -12 } };
obj.mentionBadge = { position: { top: 28 } };
obj.category = { height: 30, margin: { marginTop: 16 }, text: { size: 14 } };
const obj2 = { avatarSize: require(dependencyMap[1]).AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: require(dependencyMap[2]).GuildIconSizes.SMALL_32, guildBadgeIconSize: require(dependencyMap[2]).GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: {} };
obj.typing = { position: {}, typingIndicator: { position: {} }, avatarSize: require(dependencyMap[1]).AvatarSizes.REFRESH_MEDIUM_32 };
obj.activeThreadCount = { text: { variant: "text-xs/bold" } };
const obj4 = { text: { variant: "text-xs/bold" }, layout: {} };
const obj3 = { position: {}, typingIndicator: { position: {} }, avatarSize: require(dependencyMap[1]).AvatarSizes.REFRESH_MEDIUM_32 };
obj4.icon = { size: require(dependencyMap[1]).IconSizes.EXTRA_SMALL, gameSize: require(dependencyMap[3]).GameIconSizes.SIZE_24 };
obj.joinVoiceButton = obj4;
const obj6 = { backgroundColor: null, minWidth: "custom", minHeight: "white", maxHeight: null };
const items = [{ translateY: 10 }];
obj6.transform = items;
obj.threadSpine = obj6;
obj.happeningNow = { margin: {} };
obj.separator = { margin: { marginVertical: 12 } };
obj.searchButton = { margin: { marginHorizontal: 12 } };
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/launchpad/native/shared/getLayoutStyles.tsx");

export default function getLayoutStyle() {
  return obj;
};
