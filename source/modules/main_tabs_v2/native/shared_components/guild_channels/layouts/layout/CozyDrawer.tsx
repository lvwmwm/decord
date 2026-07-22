// Module ID: 10250
// Function ID: 79244
// Name: importDefaultResult1
// Dependencies: []

// Module 10250 (importDefaultResult1)
let obj = {};
obj = { borderRadius: importDefault(dependencyMap[2]).radii.md, padding: { 0: "<string:2853519801>", 0: "<string:1361117186>", 9223372036854775807: "<string:1480695183>" }, paddingPanels: { 0: "weniger als 1 Minute", 0: "weniger als {{count}} Minuten", 9223372036854775807: "1 Minute" }, paddingThread: { 0: "Array", 0: "isArray", 9223372036854775807: "accessibilityRole" } };
obj.container = obj;
obj.channelName = { height: 20, text: { variant: "text-md/semibold" } };
obj = { text: { variant: "text-xs/medium" }, messageTypeIconSize: arg1(dependencyMap[3]).IconSizes.EXTRA_SMALL, messageTypeIconSizeNew: "xs", height: 18, margin: { marginTop: 0 } };
obj.messagePreview = obj;
obj.inviteRow = { text: { variant: "text-md/semibold" } };
const importDefaultResult = importDefault(dependencyMap[0]);
obj.icon = { avatarSize: arg1(dependencyMap[3]).AvatarSizes.NORMAL, guildIconSize: arg1(dependencyMap[4]).GuildIconSizes.NORMAL, guildBadgeIconSize: arg1(dependencyMap[4]).GuildIconSizes.XXSMALL, wrapper: { size: 40 }, channelIcon: { size: 40 }, margin: { marginRight: 8 }, emoji: { variant: "r", color: "expressionPickerContainer" } };
obj.unreadBadge = { positionThread: { left: -68 } };
obj.mentionBadge = { position: { top: 34 }, positionThread: { top: 27 } };
const obj2 = { text: { variant: "text-sm/bold" }, layout: {} };
const obj1 = { avatarSize: arg1(dependencyMap[3]).AvatarSizes.NORMAL, guildIconSize: arg1(dependencyMap[4]).GuildIconSizes.NORMAL, guildBadgeIconSize: arg1(dependencyMap[4]).GuildIconSizes.XXSMALL, wrapper: { size: 40 }, channelIcon: { size: 40 }, margin: { marginRight: 8 }, emoji: { variant: "r", color: "expressionPickerContainer" } };
obj2.icon = { size: arg1(dependencyMap[3]).IconSizes.REFRESH_SMALL_16, gameSize: arg1(dependencyMap[5]).GameIconSizes.SMALL };
obj.joinVoiceButton = obj2;
const items = [{ translateY: 0 }];
obj.threadSpine = { transform: items };
obj.happeningNow = { margin: { marginBottom: 20 } };
obj.typing = { position: { Hover: null, extractCaptchaPropsFromResponse: null }, positionThread: { Hover: 278528.48601532006, extractCaptchaPropsFromResponse: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000132794497300704 }, typingIndicator: { position: { Hover: "/assets/images/native/chat_sidebar", extractCaptchaPropsFromResponse: 24 } } };
obj.separator = { margin: { marginVertical: 20 } };
const obj3 = { size: arg1(dependencyMap[3]).IconSizes.REFRESH_SMALL_16, gameSize: arg1(dependencyMap[5]).GameIconSizes.SMALL };
const importDefaultResultResult = importDefaultResult(arg1(dependencyMap[1]).CHANNEL_LIST_STYLES_COMPACT, obj);
const obj4 = { container: { paddingPanels: { paddingVertical: 8 } } };
const obj5 = { avatarSize: arg1(dependencyMap[3]).AvatarSizes.REFRESH_MEDIUM_32 };
obj4.icon = obj5;
const importDefaultResult1 = importDefault(dependencyMap[0]);
const importDefaultResult1Result = importDefault(dependencyMap[0])(arg1(dependencyMap[1]).CHANNEL_LIST_STYLES_COMPACT, obj4);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/CozyDrawer.tsx");

export const CHANNEL_LIST_STYLES_COZY_DRAWER = importDefaultResultResult;
export const CHANNEL_LIST_STYLES_COZY_DRAWER_SMOL = importDefaultResult1Result;
