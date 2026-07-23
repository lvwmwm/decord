// Module ID: 10264
// Function ID: 79319
// Name: items
// Dependencies: [689, 1273, 5515, 5474, 10263, 2]
// Exports: getCompactStyles

// Module 10264 (items)
let obj = { layout: { margin: { marginLeft: 4, marginRight: 4, marginVertical: 0 }, marginPanels: { marginLeft: 8, marginRight: 8, marginVertical: 0 }, marginThread: { marginLeft: 56, marginRight: 4, marginVertical: 0 } } };
obj = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, padding: { paddingVertical: 4, paddingLeft: 20, paddingRight: 12 }, paddingPanels: { paddingVertical: 4, paddingLeft: 8, paddingRight: 8 }, paddingThread: { paddingVertical: 4, paddingLeft: 8, paddingRight: 12 } };
obj.container = obj;
obj.voiceUsers = { height: 36, margin: { marginLeft: 60 } };
obj = { size: 24, avatarSize: require("Button").AvatarSizes.XSMALL };
obj.voiceOrStageSummaryRow = obj;
obj.channelName = { height: 20, text: { variant: "redesign/channel-title/semibold" } };
let obj1 = { messageTypeIconSize: require("Button").IconSizes.EXTRA_SMALL, messageTypeIconSizeNew: "xxs", height: 16, text: { variant: "text-xs/medium" }, margin: { marginTop: 0 } };
obj.messagePreview = obj1;
obj.timestamp = { text: { variant: "text-xs/medium" } };
obj.inviteRow = { text: { variant: "text-sm/semibold" } };
obj.icon = { avatarSize: require("Button").AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: require("makeSizeStyle").GuildIconSizes.SMALL_32, guildBadgeIconSize: require("makeSizeStyle").GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: { size: 16, lineHeight: 24 } };
obj.unreadBadge = { size: 8, position: { left: 4 }, positionThread: { left: -48 } };
obj.mentionBadge = { position: { top: 28 }, positionThread: { top: 20 } };
obj.category = { height: 30, margin: { marginTop: 16 }, text: { size: 14 } };
const obj2 = { avatarSize: require("Button").AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: require("makeSizeStyle").GuildIconSizes.SMALL_32, guildBadgeIconSize: require("makeSizeStyle").GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: { size: 16, lineHeight: 24 } };
obj.typing = { position: { top: 3, left: 3 }, positionThread: { top: -5, left: -16 }, typingIndicator: { position: { top: 20, left: 10 } }, avatarSize: require("Button").AvatarSizes.REFRESH_MEDIUM_32 };
obj.activeThreadCount = { text: { variant: "text-xs/bold" } };
const obj4 = { text: { variant: "text-xs/bold" }, layout: { paddingVertical: 4, paddingRight: 8, paddingLeft: 8, height: 24 } };
const obj3 = { position: { top: 3, left: 3 }, positionThread: { top: -5, left: -16 }, typingIndicator: { position: { top: 20, left: 10 } }, avatarSize: require("Button").AvatarSizes.REFRESH_MEDIUM_32 };
obj4.icon = { size: require("Button").IconSizes.EXTRA_SMALL, gameSize: require("GameIcon").GameIconSizes.SIZE_24 };
obj.joinVoiceButton = obj4;
const obj6 = { left: 38, startAndEndHeight: 15, transform: null, topOffset: -2 };
const items = [{ translateY: 10 }];
obj6.transform = items;
obj.threadSpine = obj6;
obj.happeningNow = { margin: { marginTop: 16, marginBottom: 16 } };
obj.separator = { margin: { marginVertical: 12 } };
obj.searchButton = { margin: { marginHorizontal: 16 }, marginPanels: { marginHorizontal: 12 } };
const obj5 = { size: require("Button").IconSizes.EXTRA_SMALL, gameSize: require("GameIcon").GameIconSizes.SIZE_24 };
const tmp2 = require("isObject")(obj, { layout: { marginThread: { marginLeft: 4 } }, container: { paddingThread: { paddingLeft: 8 } }, unreadBadge: { positionThread: { left: 4 } } });
const result = require("makeSizeStyle").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/Compact.tsx");

export const CHANNEL_LIST_STYLES_COMPACT = obj;
export const getCompactStyles = function getCompactStyles(arg0) {
  if (arg0) {
    let obj = {};
    obj = { text: { variant: "text-sm/medium", color: "text-muted" } };
    obj.messagePreview = obj;
    obj = {};
    const obj1 = { variant: "text-xs/semibold" };
    obj.text = obj1;
    obj.timestamp = obj;
    let tmp = importDefault(10263)(obj, obj);
  } else {
    tmp = obj;
  }
  return tmp;
};
export const CHANNEL_LIST_STYLES_COMPACT_LAUNCHPAD = tmp2;
