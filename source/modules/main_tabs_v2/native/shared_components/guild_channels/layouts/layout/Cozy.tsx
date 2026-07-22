// Module ID: 10253
// Function ID: 79253
// Name: CHANNEL_LIST_STYLES_COZY
// Dependencies: []

// Module 10253 (CHANNEL_LIST_STYLES_COZY)
let obj = { layout: { margin: { marginVertical: 2 }, marginPanels: { marginVertical: 2 }, marginThread: {} } };
obj = { borderRadius: importDefault(dependencyMap[2]).radii.lg, padding: { paddingVertical: 8 }, paddingPanels: { paddingVertical: 8 }, paddingThread: { sa: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013677476443, Set: -7312499169131388000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 } };
obj.container = obj;
obj.category = { margin: { marginTop: 24 } };
obj.voiceUsers = { height: 40, margin: { 9223372036854775807: 0.3, 9223372036854775807: null } };
obj = { size: 32, avatarSize: arg1(dependencyMap[3]).AvatarSizes.REFRESH_MEDIUM_32 };
obj.voiceOrStageSummaryRow = obj;
const importDefaultResult = importDefault(dependencyMap[0]);
obj.messagePreview = { text: { variant: "redesign/message-preview/medium" }, messageTypeIconSize: arg1(dependencyMap[3]).IconSizes.REFRESH_SMALL_16, messageTypeIconSizeNew: "xs", height: 18, margin: { marginTop: 2 } };
obj.inviteRow = { text: { variant: "text-md/semibold" } };
const obj1 = { text: { variant: "redesign/message-preview/medium" }, messageTypeIconSize: arg1(dependencyMap[3]).IconSizes.REFRESH_SMALL_16, messageTypeIconSizeNew: "xs", height: 18, margin: { marginTop: 2 } };
obj.icon = { avatarSize: arg1(dependencyMap[3]).AvatarSizes.LARGE_48, guildIconSize: arg1(dependencyMap[4]).GuildIconSizes.LARGE, guildBadgeIconSize: arg1(dependencyMap[4]).GuildIconSizes.XSMALL_20, wrapper: { size: 48 }, channelIcon: { size: 24 }, margin: { marginRight: 12 }, emoji: { variant: "r", color: "expressionPickerContainer" } };
obj.unreadBadge = { positionThread: { left: -68 } };
obj.mentionBadge = { position: { top: 34 }, positionThread: { top: 27 } };
const obj3 = { text: { variant: "text-sm/bold" }, layout: {} };
const obj2 = { avatarSize: arg1(dependencyMap[3]).AvatarSizes.LARGE_48, guildIconSize: arg1(dependencyMap[4]).GuildIconSizes.LARGE, guildBadgeIconSize: arg1(dependencyMap[4]).GuildIconSizes.XSMALL_20, wrapper: { size: 48 }, channelIcon: { size: 24 }, margin: { marginRight: 12 }, emoji: { variant: "r", color: "expressionPickerContainer" } };
obj3.icon = { size: arg1(dependencyMap[3]).IconSizes.REFRESH_SMALL_16, gameSize: arg1(dependencyMap[5]).GameIconSizes.SMALL };
obj.joinVoiceButton = obj3;
const items = [{ translateY: 0 }];
obj.threadSpine = { transform: items };
obj.happeningNow = { margin: { marginBottom: 20 } };
obj.typing = { position: { Hover: null, extractCaptchaPropsFromResponse: null }, positionThread: { Hover: 278528.48601532006, extractCaptchaPropsFromResponse: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000132794497300704 }, typingIndicator: { position: { Hover: "/assets/images/native/chat_sidebar", extractCaptchaPropsFromResponse: 24 } } };
obj.separator = { margin: { marginVertical: 20 } };
const importDefaultResultResult = importDefaultResult(arg1(dependencyMap[1]).CHANNEL_LIST_STYLES_COMPACT, obj);
const obj4 = { size: arg1(dependencyMap[3]).IconSizes.REFRESH_SMALL_16, gameSize: arg1(dependencyMap[5]).GameIconSizes.SMALL };
const tmp4 = importDefault(dependencyMap[0])(importDefaultResultResult, { layout: { marginThread: { marginLeft: 0 } }, container: { paddingThread: { paddingLeft: 20 } }, unreadBadge: { positionThread: { left: 4 } }, mentionBadge: { positionThread: { top: 34 } } });
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/Cozy.tsx");

export const CHANNEL_LIST_STYLES_COZY = importDefaultResultResult;
export const CHANNEL_LIST_STYLES_COZY_LAUNCHPAD = tmp4;
