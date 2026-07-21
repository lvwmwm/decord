// Module ID: 10252
// Function ID: 79229
// Name: items
// Dependencies: []

// Module 10252 (items)
let obj = { layout: { margin: { marginVertical: 2 }, marginPanels: { marginVertical: 2 }, marginThread: {} } };
obj = { borderRadius: importDefault(dependencyMap[2]).radii.lg, padding: { paddingVertical: 8 }, paddingPanels: { paddingVertical: 8 }, paddingThread: { 1647993565: 1913716740, 1644383569: 6 } };
obj.container = obj;
obj.category = { margin: { marginTop: 24 } };
obj.voiceUsers = { height: 40, margin: { "Null": 0.3, "Null": null } };
obj = { size: 32, avatarSize: arg1(dependencyMap[3]).AvatarSizes.REFRESH_MEDIUM_32 };
obj.voiceOrStageSummaryRow = obj;
const importDefaultResult = importDefault(dependencyMap[0]);
obj.messagePreview = { text: { variant: "redesign/message-preview/medium" }, messageTypeIconSize: arg1(dependencyMap[3]).IconSizes.REFRESH_SMALL_16, messageTypeIconSizeNew: "xs", height: 18, margin: { marginTop: 2 } };
obj.inviteRow = { text: { variant: "text-md/semibold" } };
const obj1 = { text: { variant: "redesign/message-preview/medium" }, messageTypeIconSize: arg1(dependencyMap[3]).IconSizes.REFRESH_SMALL_16, messageTypeIconSizeNew: "xs", height: 18, margin: { marginTop: 2 } };
obj.icon = { avatarSize: arg1(dependencyMap[3]).AvatarSizes.LARGE_48, guildIconSize: arg1(dependencyMap[4]).GuildIconSizes.LARGE, guildBadgeIconSize: arg1(dependencyMap[4]).GuildIconSizes.XSMALL_20, wrapper: { size: 48 }, channelIcon: { size: 24 }, margin: { marginRight: 12 }, emoji: { "Null": "r", "Null": "usersBadgeContainer" } };
obj.unreadBadge = { positionThread: { left: -68 } };
obj.mentionBadge = { position: { top: 34 }, positionThread: { top: 27 } };
const obj3 = { text: { variant: "text-sm/bold" }, layout: {} };
const obj2 = { avatarSize: arg1(dependencyMap[3]).AvatarSizes.LARGE_48, guildIconSize: arg1(dependencyMap[4]).GuildIconSizes.LARGE, guildBadgeIconSize: arg1(dependencyMap[4]).GuildIconSizes.XSMALL_20, wrapper: { size: 48 }, channelIcon: { size: 24 }, margin: { marginRight: 12 }, emoji: { "Null": "r", "Null": "usersBadgeContainer" } };
obj3.icon = { size: arg1(dependencyMap[3]).IconSizes.REFRESH_SMALL_16, gameSize: arg1(dependencyMap[5]).GameIconSizes.SMALL };
obj.joinVoiceButton = obj3;
const obj5 = { backgroundColor: 366, minWidth: null, minHeight: 1, maxHeight: 19 };
const items = [{ translateY: 0 }];
obj5.transform = items;
obj.threadSpine = obj5;
obj.happeningNow = { margin: { marginBottom: 20 } };
obj.typing = { position: { -1506583910: "version=$(node -p \"require('./package.json').version\") && sed -i '' \"s/#define NITRO_VERSION \\\".*\\\"/#define NITRO_VERSION \\\"$version\\\"/\" ./cpp/utils/NitroDefines.hpp", -1753944310: "bun run write-native-version" }, positionThread: { -1506583910: "text-sm/medium", -1753944310: "text-feedback-warning" }, typingIndicator: { position: { -1506583910: true, -1753944310: "/assets/images/native/chat_sidebar" } } };
obj.separator = { margin: { marginVertical: 20 } };
const importDefaultResultResult = importDefaultResult(arg1(dependencyMap[1]).CHANNEL_LIST_STYLES_COMPACT, obj);
const obj4 = { size: arg1(dependencyMap[3]).IconSizes.REFRESH_SMALL_16, gameSize: arg1(dependencyMap[5]).GameIconSizes.SMALL };
const tmp4 = importDefault(dependencyMap[0])(importDefaultResultResult, { layout: { marginThread: { marginLeft: 0 } }, container: { paddingThread: { paddingLeft: 20 } }, unreadBadge: { positionThread: { left: 4 } }, mentionBadge: { positionThread: { top: 34 } } });
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/Cozy.tsx");

export const CHANNEL_LIST_STYLES_COZY = importDefaultResultResult;
export const CHANNEL_LIST_STYLES_COZY_LAUNCHPAD = tmp4;
