// Module ID: 10251
// Function ID: 79227
// Name: items
// Dependencies: []
// Exports: getCompactStyles

// Module 10251 (items)
let obj = { layout: { margin: {}, marginPanels: { "Null": null, "Null": null, "Null": null }, marginThread: {} } };
obj = { borderRadius: importDefault(dependencyMap[0]).radii.md, padding: { EU_COUNTRIES: false, borderWidth: false, borderColor: false }, paddingPanels: { EU_COUNTRIES: null, borderWidth: null, borderColor: null }, paddingThread: {} };
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
obj.unreadBadge = { size: 8, position: { left: 4 }, positionThread: { left: -48 } };
obj.mentionBadge = { position: { top: 28 }, positionThread: { top: 20 } };
obj.category = { height: 30, margin: { marginTop: 16 }, text: { size: 14 } };
const obj2 = { avatarSize: require(dependencyMap[1]).AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: require(dependencyMap[2]).GuildIconSizes.SMALL_32, guildBadgeIconSize: require(dependencyMap[2]).GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: {} };
obj.typing = { position: {}, positionThread: {}, typingIndicator: { position: {} }, avatarSize: require(dependencyMap[1]).AvatarSizes.REFRESH_MEDIUM_32 };
obj.activeThreadCount = { text: { variant: "text-xs/bold" } };
const obj4 = { text: { variant: "text-xs/bold" }, layout: {} };
const obj3 = { position: {}, positionThread: {}, typingIndicator: { position: {} }, avatarSize: require(dependencyMap[1]).AvatarSizes.REFRESH_MEDIUM_32 };
obj4.icon = { size: require(dependencyMap[1]).IconSizes.EXTRA_SMALL, gameSize: require(dependencyMap[3]).GameIconSizes.SIZE_24 };
obj.joinVoiceButton = obj4;
const obj6 = { backgroundColor: null, minWidth: "custom", minHeight: "white", maxHeight: null };
const items = [{ translateY: 10 }];
obj6.transform = items;
obj.threadSpine = obj6;
obj.happeningNow = { margin: {} };
obj.separator = { margin: { marginVertical: 12 } };
obj.searchButton = { margin: { marginHorizontal: 16 }, marginPanels: { marginHorizontal: 12 } };
const obj5 = { size: require(dependencyMap[1]).IconSizes.EXTRA_SMALL, gameSize: require(dependencyMap[3]).GameIconSizes.SIZE_24 };
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/Compact.tsx");

export const CHANNEL_LIST_STYLES_COMPACT = obj;
export const getCompactStyles = function getCompactStyles(arg0) {
  if (arg0) {
    let obj = {};
    obj = { text: {} };
    obj.messagePreview = obj;
    obj = {};
    const obj1 = { variant: "text-xs/semibold" };
    obj.text = obj1;
    obj.timestamp = obj;
    let tmp = importDefault(dependencyMap[4])(obj, obj);
  } else {
    tmp = obj;
  }
  return tmp;
};
export const CHANNEL_LIST_STYLES_COMPACT_LAUNCHPAD = importDefault(dependencyMap[4])(obj, { layout: { marginThread: { marginLeft: 4 } }, container: { paddingThread: { paddingLeft: 8 } }, unreadBadge: { positionThread: { left: 4 } } });
