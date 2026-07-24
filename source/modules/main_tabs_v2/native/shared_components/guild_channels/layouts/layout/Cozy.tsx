// Module ID: 10294
// Function ID: 79512
// Name: items
// Dependencies: [10292, 10293, 689, 1273, 5513, 5472, 2]

// Module 10294 (items)
import importDefaultResult from "isObject";

let obj = { layout: { margin: { marginVertical: 2 }, marginPanels: { marginVertical: 2 }, marginThread: { marginVertical: 2, marginLeft: 76 } } };
obj = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, padding: { paddingVertical: 8 }, paddingPanels: { paddingVertical: 8 }, paddingThread: { paddingVertical: 6, paddingLeft: 8 } };
obj.container = obj;
obj.category = { margin: { marginTop: 24 } };
obj.voiceUsers = { height: 40, margin: { marginTop: -4, marginLeft: 80 } };
obj = { size: 32, avatarSize: require("Button").AvatarSizes.REFRESH_MEDIUM_32 };
obj.voiceOrStageSummaryRow = obj;
obj.messagePreview = { text: { variant: "redesign/message-preview/medium" }, messageTypeIconSize: require("Button").IconSizes.REFRESH_SMALL_16, messageTypeIconSizeNew: "xs", height: 18, margin: { marginTop: 2 } };
obj.inviteRow = { text: { variant: "text-md/semibold" } };
const obj1 = { text: { variant: "redesign/message-preview/medium" }, messageTypeIconSize: require("Button").IconSizes.REFRESH_SMALL_16, messageTypeIconSizeNew: "xs", height: 18, margin: { marginTop: 2 } };
obj.icon = { avatarSize: require("Button").AvatarSizes.LARGE_48, guildIconSize: require("makeSizeStyle").GuildIconSizes.LARGE, guildBadgeIconSize: require("makeSizeStyle").GuildIconSizes.XSMALL_20, wrapper: { size: 48 }, channelIcon: { size: 24 }, margin: { marginRight: 12 }, emoji: { size: 24, lineHeight: 32 } };
obj.unreadBadge = { positionThread: { left: -68 } };
obj.mentionBadge = { position: { top: 34 }, positionThread: { top: 27 } };
const obj3 = { text: { variant: "text-sm/bold" }, layout: { paddingVertical: 6, paddingRight: 12, paddingLeft: 12, height: 32 } };
const obj2 = { avatarSize: require("Button").AvatarSizes.LARGE_48, guildIconSize: require("makeSizeStyle").GuildIconSizes.LARGE, guildBadgeIconSize: require("makeSizeStyle").GuildIconSizes.XSMALL_20, wrapper: { size: 48 }, channelIcon: { size: 24 }, margin: { marginRight: 12 }, emoji: { size: 24, lineHeight: 32 } };
obj3.icon = { size: require("Button").IconSizes.REFRESH_SMALL_16, gameSize: require("GameIcon").GameIconSizes.SMALL };
obj.joinVoiceButton = obj3;
const obj5 = { left: 48, startAndEndHeight: 16, transform: null, topOffset: -6 };
const items = [{ translateY: 0 }];
obj5.transform = items;
obj.threadSpine = obj5;
obj.happeningNow = { margin: { marginBottom: 20 } };
obj.typing = { position: { top: 12, left: 12 }, positionThread: { top: 3, left: -17 }, typingIndicator: { position: { top: 25, left: 11 } } };
obj.separator = { margin: { marginVertical: 20 } };
const importDefaultResultResult = importDefaultResult(require("items").CHANNEL_LIST_STYLES_COMPACT, obj);
const obj4 = { size: require("Button").IconSizes.REFRESH_SMALL_16, gameSize: require("GameIcon").GameIconSizes.SMALL };
const tmp4 = require("isObject")(importDefaultResultResult, { layout: { marginThread: { marginLeft: 0 } }, container: { paddingThread: { paddingLeft: 20 } }, unreadBadge: { positionThread: { left: 4 } }, mentionBadge: { positionThread: { top: 34 } } });
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/Cozy.tsx");

export const CHANNEL_LIST_STYLES_COZY = importDefaultResultResult;
export const CHANNEL_LIST_STYLES_COZY_LAUNCHPAD = tmp4;
