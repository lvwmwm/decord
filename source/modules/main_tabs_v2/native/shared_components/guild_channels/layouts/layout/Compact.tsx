// Module ID: 10252
// Function ID: 79251
// Name: CHANNEL_LIST_STYLES_COMPACT
// Dependencies: []
// Exports: getCompactStyles

// Module 10252 (CHANNEL_LIST_STYLES_COMPACT)
let obj = { layout: { margin: {}, marginPanels: {}, marginThread: {} } };
obj = { borderRadius: importDefault(dependencyMap[0]).radii.md, padding: { 0: "<string:2853519801>", 0: "<string:1361117186>", 9223372036854775807: "<string:1480695183>" }, paddingPanels: {}, paddingThread: { 0: "Array", 0: "isArray", 9223372036854775807: "accessibilityRole" } };
obj.container = obj;
obj.voiceUsers = { height: 36, margin: { marginLeft: 60 } };
obj = { size: 24, avatarSize: arg1(dependencyMap[1]).AvatarSizes.XSMALL };
obj.voiceOrStageSummaryRow = obj;
obj.channelName = { height: 20, text: { variant: "redesign/channel-title/semibold" } };
obj.messagePreview = { messageTypeIconSize: arg1(dependencyMap[1]).IconSizes.EXTRA_SMALL, text: { variant: "text-xs/medium" }, margin: { marginTop: 0 } };
obj.timestamp = { text: { variant: "text-xs/medium" } };
obj.inviteRow = { text: { variant: "text-sm/semibold" } };
const obj1 = { messageTypeIconSize: arg1(dependencyMap[1]).IconSizes.EXTRA_SMALL, text: { variant: "text-xs/medium" }, margin: { marginTop: 0 } };
obj.icon = { avatarSize: arg1(dependencyMap[1]).AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: arg1(dependencyMap[2]).GuildIconSizes.SMALL_32, guildBadgeIconSize: arg1(dependencyMap[2]).GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: {} };
obj.unreadBadge = { size: 8, position: { left: 4 }, positionThread: { left: -48 } };
obj.mentionBadge = { position: { top: 28 }, positionThread: { top: 20 } };
obj.category = { height: 30, margin: { marginTop: 16 }, text: { size: 14 } };
const obj2 = { avatarSize: arg1(dependencyMap[1]).AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: arg1(dependencyMap[2]).GuildIconSizes.SMALL_32, guildBadgeIconSize: arg1(dependencyMap[2]).GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: {} };
obj.typing = { position: {}, positionThread: {}, typingIndicator: { position: { Hover: 161, extractCaptchaPropsFromResponse: 161 } }, avatarSize: arg1(dependencyMap[1]).AvatarSizes.REFRESH_MEDIUM_32 };
obj.activeThreadCount = { text: { variant: "text-xs/bold" } };
const obj4 = { text: { variant: "text-xs/bold" }, layout: { "Bool(true)": null, "Bool(true)": "39cdeaab77d36adb2361dc5c033acede", "Bool(true)": "locke_2", "Bool(true)": "png" } };
const obj3 = { position: {}, positionThread: {}, typingIndicator: { position: { Hover: 161, extractCaptchaPropsFromResponse: 161 } }, avatarSize: arg1(dependencyMap[1]).AvatarSizes.REFRESH_MEDIUM_32 };
obj4.icon = { size: arg1(dependencyMap[1]).IconSizes.EXTRA_SMALL, gameSize: arg1(dependencyMap[3]).GameIconSizes.SIZE_24 };
obj.joinVoiceButton = obj4;
const items = [{ translateY: 10 }];
obj.threadSpine = { transform: items };
obj.happeningNow = { margin: { y: null, channelId: null } };
obj.separator = { margin: { marginVertical: 12 } };
obj.searchButton = { margin: { marginHorizontal: 16 }, marginPanels: { marginHorizontal: 12 } };
const obj5 = { size: arg1(dependencyMap[1]).IconSizes.EXTRA_SMALL, gameSize: arg1(dependencyMap[3]).GameIconSizes.SIZE_24 };
const tmp2 = importDefault(dependencyMap[4])(obj, { layout: { marginThread: { marginLeft: 4 } }, container: { paddingThread: { paddingLeft: 8 } }, unreadBadge: { positionThread: { left: 4 } } });
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/Compact.tsx");

export const CHANNEL_LIST_STYLES_COMPACT = obj;
export const getCompactStyles = function getCompactStyles(arg0) {
  if (arg0) {
    let obj = {};
    obj = { text: { cachedAt: "y", edpbxy: "isArray" } };
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
export const CHANNEL_LIST_STYLES_COMPACT_LAUNCHPAD = tmp2;
