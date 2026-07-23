// Module ID: 10262
// Function ID: 79312
// Name: items
// Dependencies: [10263, 10264, 689, 1273, 5515, 5474, 2]

// Module 10262 (items)
import importDefaultResult from "isObject";
import importDefaultResult1 from "isObject";

let obj = {};
obj = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md, padding: { paddingVertical: 4, paddingLeft: 20, paddingRight: 12 }, paddingPanels: { paddingVertical: 6, paddingLeft: 8, paddingRight: 8 }, paddingThread: { paddingVertical: 4, paddingLeft: 8, paddingRight: 12 } };
obj.container = obj;
obj.channelName = { height: 20, text: { variant: "text-md/semibold" } };
obj = { text: { variant: "text-xs/medium" }, messageTypeIconSize: require("Button").IconSizes.EXTRA_SMALL, messageTypeIconSizeNew: "xs", height: 18, margin: { marginTop: 0 } };
obj.messagePreview = obj;
obj.inviteRow = { text: { variant: "text-md/semibold" } };
obj.icon = { avatarSize: require("Button").AvatarSizes.NORMAL, guildIconSize: require("makeSizeStyle").GuildIconSizes.NORMAL, guildBadgeIconSize: require("makeSizeStyle").GuildIconSizes.XXSMALL, wrapper: { size: 40 }, channelIcon: { size: 40 }, margin: { marginRight: 8 }, emoji: { size: 24, lineHeight: 32 } };
obj.unreadBadge = { positionThread: { left: -68 } };
obj.mentionBadge = { position: { top: 34 }, positionThread: { top: 27 } };
const obj2 = { text: { variant: "text-sm/bold" }, layout: { paddingVertical: 6, paddingRight: 12, paddingLeft: 12, height: 32 } };
const obj1 = { avatarSize: require("Button").AvatarSizes.NORMAL, guildIconSize: require("makeSizeStyle").GuildIconSizes.NORMAL, guildBadgeIconSize: require("makeSizeStyle").GuildIconSizes.XXSMALL, wrapper: { size: 40 }, channelIcon: { size: 40 }, margin: { marginRight: 8 }, emoji: { size: 24, lineHeight: 32 } };
obj2.icon = { size: require("Button").IconSizes.REFRESH_SMALL_16, gameSize: require("GameIcon").GameIconSizes.SMALL };
obj.joinVoiceButton = obj2;
const obj4 = { left: 48, startAndEndHeight: 16, transform: null, topOffset: -6 };
const items = [{ translateY: 0 }];
obj4.transform = items;
obj.threadSpine = obj4;
obj.happeningNow = { margin: { marginBottom: 20 } };
obj.typing = { position: { top: 12, left: 12 }, positionThread: { top: 3, left: -17 }, typingIndicator: { position: { top: 25, left: 11 } } };
obj.separator = { margin: { marginVertical: 20 } };
const obj3 = { size: require("Button").IconSizes.REFRESH_SMALL_16, gameSize: require("GameIcon").GameIconSizes.SMALL };
const importDefaultResultResult = importDefaultResult(require("items").CHANNEL_LIST_STYLES_COMPACT, obj);
const obj5 = { container: { paddingPanels: { paddingVertical: 8 } } };
const obj6 = { avatarSize: require("Button").AvatarSizes.REFRESH_MEDIUM_32 };
obj5.icon = obj6;
const importDefaultResult1Result = require("isObject")(require("items").CHANNEL_LIST_STYLES_COMPACT, obj5);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/CozyDrawer.tsx");

export const CHANNEL_LIST_STYLES_COZY_DRAWER = importDefaultResultResult;
export const CHANNEL_LIST_STYLES_COZY_DRAWER_SMOL = importDefaultResult1Result;
