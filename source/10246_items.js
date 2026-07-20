// Module ID: 10246
// Function ID: 79210
// Name: items
// Dependencies: []

// Module 10246 (items)
let obj = { layout: { margin: { marginVertical: 2 }, marginPanels: { marginVertical: 2 }, marginThread: {} } };
obj = { borderRadius: importDefault(dependencyMap[2]).radii.lg, padding: { paddingVertical: 8 }, paddingPanels: { paddingVertical: 8 }, paddingThread: { <string:1426261418>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013677476443, <string:3948087452>: -103843524791655450000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 } };
obj.container = obj;
obj.category = { margin: { marginTop: 24 } };
obj.voiceUsers = { height: 40, margin: { "Bool(true)": 0.3, "Bool(true)": null } };
obj = { size: 32, avatarSize: arg1(dependencyMap[3]).AvatarSizes.REFRESH_MEDIUM_32 };
obj.voiceOrStageSummaryRow = obj;
const importDefaultResult = importDefault(dependencyMap[0]);
obj.messagePreview = { text: { variant: "redesign/message-preview/medium" }, messageTypeIconSize: arg1(dependencyMap[3]).IconSizes.REFRESH_SMALL_16, messageTypeIconSizeNew: "xs", height: 18, margin: { marginTop: 2 } };
obj.inviteRow = { text: { variant: "text-md/semibold" } };
const obj1 = { text: { variant: "redesign/message-preview/medium" }, messageTypeIconSize: arg1(dependencyMap[3]).IconSizes.REFRESH_SMALL_16, messageTypeIconSizeNew: "xs", height: 18, margin: { marginTop: 2 } };
obj.icon = { avatarSize: arg1(dependencyMap[3]).AvatarSizes.LARGE_48, guildIconSize: arg1(dependencyMap[4]).GuildIconSizes.LARGE, guildBadgeIconSize: arg1(dependencyMap[4]).GuildIconSizes.XSMALL_20, wrapper: { size: 48 }, channelIcon: { size: 24 }, margin: { marginRight: 12 }, emoji: { audioinput: "r", audiooutput: "featureList" } };
obj.unreadBadge = { positionThread: { left: -68 } };
obj.mentionBadge = { position: { top: 34 }, positionThread: { top: 27 } };
const obj3 = { text: { variant: "text-sm/bold" }, layout: { "Bool(false)": null, "Bool(false)": "4d46cb9270219102b4f9e899fd51586c", "Bool(false)": "FileIcon", "Bool(false)": "png" } };
const obj2 = { avatarSize: arg1(dependencyMap[3]).AvatarSizes.LARGE_48, guildIconSize: arg1(dependencyMap[4]).GuildIconSizes.LARGE, guildBadgeIconSize: arg1(dependencyMap[4]).GuildIconSizes.XSMALL_20, wrapper: { size: 48 }, channelIcon: { size: 24 }, margin: { marginRight: 12 }, emoji: { audioinput: "r", audiooutput: "featureList" } };
obj3.icon = { size: arg1(dependencyMap[3]).IconSizes.REFRESH_SMALL_16, gameSize: arg1(dependencyMap[5]).GameIconSizes.SMALL };
obj.joinVoiceButton = obj3;
const obj5 = { flex: 366, borderRadius: null, border: 1, icon: 19 };
const items = [{ translateY: 0 }];
obj5.transform = items;
obj.threadSpine = obj5;
obj.happeningNow = { margin: { marginBottom: 20 } };
obj.typing = { position: { "Null": "version=$(node -p \"require('./package.json').version\") && sed -i '' \"s/#define NITRO_VERSION \\\".*\\\"/#define NITRO_VERSION \\\"$version\\\"/\" ./cpp/utils/NitroDefines.hpp", "Null": "bun run write-native-version" }, positionThread: { "Null": 1262555392, "Null": 1912603178 }, typingIndicator: { position: { "Null": 24, "Null": 24 } } };
obj.separator = { margin: { marginVertical: 20 } };
const importDefaultResultResult = importDefaultResult(arg1(dependencyMap[1]).CHANNEL_LIST_STYLES_COMPACT, obj);
const obj4 = { size: arg1(dependencyMap[3]).IconSizes.REFRESH_SMALL_16, gameSize: arg1(dependencyMap[5]).GameIconSizes.SMALL };
const tmp4 = importDefault(dependencyMap[0])(importDefaultResultResult, { layout: { marginThread: { marginLeft: 0 } }, container: { paddingThread: { paddingLeft: 20 } }, unreadBadge: { positionThread: { left: 4 } }, mentionBadge: { positionThread: { top: 34 } } });
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/Cozy.tsx");

export const CHANNEL_LIST_STYLES_COZY = importDefaultResultResult;
export const CHANNEL_LIST_STYLES_COZY_LAUNCHPAD = tmp4;
