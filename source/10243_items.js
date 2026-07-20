// Module ID: 10243
// Function ID: 79201
// Name: items
// Dependencies: []

// Module 10243 (items)
let obj = {};
obj = { borderRadius: importDefault(dependencyMap[2]).radii.md, padding: { direction: false, radius: false, inset: false }, paddingPanels: { direction: null, radius: null, inset: null }, paddingThread: {} };
obj.container = obj;
obj.channelName = { height: 20, text: { variant: "text-md/semibold" } };
obj = { text: { variant: "text-xs/medium" }, messageTypeIconSize: arg1(dependencyMap[3]).IconSizes.EXTRA_SMALL, messageTypeIconSizeNew: "xs", height: 18, margin: { marginTop: 0 } };
obj.messagePreview = obj;
obj.inviteRow = { text: { variant: "text-md/semibold" } };
const importDefaultResult = importDefault(dependencyMap[0]);
obj.icon = { avatarSize: arg1(dependencyMap[3]).AvatarSizes.NORMAL, guildIconSize: arg1(dependencyMap[4]).GuildIconSizes.NORMAL, guildBadgeIconSize: arg1(dependencyMap[4]).GuildIconSizes.XXSMALL, wrapper: { size: 40 }, channelIcon: { size: 40 }, margin: { marginRight: 8 }, emoji: { audioinput: "r", audiooutput: "featureList" } };
obj.unreadBadge = { positionThread: { left: -68 } };
obj.mentionBadge = { position: { top: 34 }, positionThread: { top: 27 } };
const obj2 = { text: { variant: "text-sm/bold" }, layout: { "Bool(false)": null, "Bool(false)": "4d46cb9270219102b4f9e899fd51586c", "Bool(false)": "FileIcon", "Bool(false)": "png" } };
const obj1 = { avatarSize: arg1(dependencyMap[3]).AvatarSizes.NORMAL, guildIconSize: arg1(dependencyMap[4]).GuildIconSizes.NORMAL, guildBadgeIconSize: arg1(dependencyMap[4]).GuildIconSizes.XXSMALL, wrapper: { size: 40 }, channelIcon: { size: 40 }, margin: { marginRight: 8 }, emoji: { audioinput: "r", audiooutput: "featureList" } };
obj2.icon = { size: arg1(dependencyMap[3]).IconSizes.REFRESH_SMALL_16, gameSize: arg1(dependencyMap[5]).GameIconSizes.SMALL };
obj.joinVoiceButton = obj2;
const obj4 = { flex: 366, borderRadius: null, border: 1, icon: 19 };
const items = [{ translateY: 0 }];
obj4.transform = items;
obj.threadSpine = obj4;
obj.happeningNow = { margin: { marginBottom: 20 } };
obj.typing = { position: { "Null": "version=$(node -p \"require('./package.json').version\") && sed -i '' \"s/#define NITRO_VERSION \\\".*\\\"/#define NITRO_VERSION \\\"$version\\\"/\" ./cpp/utils/NitroDefines.hpp", "Null": "bun run write-native-version" }, positionThread: { "Null": 1262555392, "Null": 1912603178 }, typingIndicator: { position: { "Null": 24, "Null": 24 } } };
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
