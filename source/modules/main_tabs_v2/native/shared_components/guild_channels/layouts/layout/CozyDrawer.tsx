// Module ID: 10249
// Function ID: 79220
// Name: items
// Dependencies: []

// Module 10249 (items)
let obj = {};
obj = { borderRadius: importDefault(dependencyMap[2]).radii.md, padding: { EU_COUNTRIES: false, borderWidth: false, borderColor: false }, paddingPanels: { EU_COUNTRIES: "<string:1107296770>", borderWidth: "1 Stunde", borderColor: "{{count}} Stunden" }, paddingThread: {} };
obj.container = obj;
obj.channelName = { height: 20, text: { variant: "text-md/semibold" } };
obj = { text: { variant: "text-xs/medium" }, messageTypeIconSize: arg1(dependencyMap[3]).IconSizes.EXTRA_SMALL, messageTypeIconSizeNew: "xs", height: 18, margin: { marginTop: 0 } };
obj.messagePreview = obj;
obj.inviteRow = { text: { variant: "text-md/semibold" } };
const importDefaultResult = importDefault(dependencyMap[0]);
obj.icon = { avatarSize: arg1(dependencyMap[3]).AvatarSizes.NORMAL, guildIconSize: arg1(dependencyMap[4]).GuildIconSizes.NORMAL, guildBadgeIconSize: arg1(dependencyMap[4]).GuildIconSizes.XXSMALL, wrapper: { size: 40 }, channelIcon: { size: 40 }, margin: { marginRight: 8 }, emoji: { "Null": "r", "Null": "usersBadgeContainer" } };
obj.unreadBadge = { positionThread: { left: -68 } };
obj.mentionBadge = { position: { top: 34 }, positionThread: { top: 27 } };
const obj2 = { text: { variant: "text-sm/bold" }, layout: {} };
const obj1 = { avatarSize: arg1(dependencyMap[3]).AvatarSizes.NORMAL, guildIconSize: arg1(dependencyMap[4]).GuildIconSizes.NORMAL, guildBadgeIconSize: arg1(dependencyMap[4]).GuildIconSizes.XXSMALL, wrapper: { size: 40 }, channelIcon: { size: 40 }, margin: { marginRight: 8 }, emoji: { "Null": "r", "Null": "usersBadgeContainer" } };
obj2.icon = { size: arg1(dependencyMap[3]).IconSizes.REFRESH_SMALL_16, gameSize: arg1(dependencyMap[5]).GameIconSizes.SMALL };
obj.joinVoiceButton = obj2;
const obj4 = { backgroundColor: 366, minWidth: null, minHeight: 1, maxHeight: 19 };
const items = [{ translateY: 0 }];
obj4.transform = items;
obj.threadSpine = obj4;
obj.happeningNow = { margin: { marginBottom: 20 } };
obj.typing = { position: { -1506583910: "version=$(node -p \"require('./package.json').version\") && sed -i '' \"s/#define NITRO_VERSION \\\".*\\\"/#define NITRO_VERSION \\\"$version\\\"/\" ./cpp/utils/NitroDefines.hpp", -1753944310: "bun run write-native-version" }, positionThread: { -1506583910: "text-sm/medium", -1753944310: "text-feedback-warning" }, typingIndicator: { position: { -1506583910: true, -1753944310: "/assets/images/native/chat_sidebar" } } };
obj.separator = { margin: { marginVertical: 20 } };
const obj3 = { size: arg1(dependencyMap[3]).IconSizes.REFRESH_SMALL_16, gameSize: arg1(dependencyMap[5]).GameIconSizes.SMALL };
const importDefaultResultResult = importDefaultResult(arg1(dependencyMap[1]).CHANNEL_LIST_STYLES_COMPACT, obj);
const obj5 = { container: { paddingPanels: { paddingVertical: 8 } } };
const obj6 = { avatarSize: arg1(dependencyMap[3]).AvatarSizes.REFRESH_MEDIUM_32 };
obj5.icon = obj6;
const importDefaultResult1 = importDefault(dependencyMap[0]);
const importDefaultResult1Result = importDefault(dependencyMap[0])(arg1(dependencyMap[1]).CHANNEL_LIST_STYLES_COMPACT, obj5);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/CozyDrawer.tsx");

export const CHANNEL_LIST_STYLES_COZY_DRAWER = importDefaultResultResult;
export const CHANNEL_LIST_STYLES_COZY_DRAWER_SMOL = importDefaultResult1Result;
