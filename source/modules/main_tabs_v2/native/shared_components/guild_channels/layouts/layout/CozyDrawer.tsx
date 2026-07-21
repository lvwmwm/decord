// Module ID: 10249
// Function ID: 79231
// Name: importDefaultResult1
// Dependencies: []

// Module 10249 (importDefaultResult1)
let obj = {};
obj = { borderRadius: importDefault(dependencyMap[2]).radii.md, padding: {}, paddingPanels: { "Bool(false)": "a", "Bool(false)": "SelectableBackground", "Bool(false)": "useAlertStore" }, paddingThread: { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false } };
obj.container = obj;
obj.channelName = { height: 20, text: { variant: "text-md/semibold" } };
obj = { text: { variant: "text-xs/medium" }, messageTypeIconSize: arg1(dependencyMap[3]).IconSizes.EXTRA_SMALL, messageTypeIconSizeNew: "xs", height: 18, margin: { marginTop: 0 } };
obj.messagePreview = obj;
obj.inviteRow = { text: { variant: "text-md/semibold" } };
const importDefaultResult = importDefault(dependencyMap[0]);
obj.icon = { avatarSize: arg1(dependencyMap[3]).AvatarSizes.NORMAL, guildIconSize: arg1(dependencyMap[4]).GuildIconSizes.NORMAL, guildBadgeIconSize: arg1(dependencyMap[4]).GuildIconSizes.XXSMALL, wrapper: { size: 40 }, channelIcon: { size: 40 }, margin: { marginRight: 8 }, emoji: { 9223372036854775807: "r", -9223372036854775808: "isDrawer" } };
obj.unreadBadge = { positionThread: { left: -68 } };
obj.mentionBadge = { position: { top: 34 }, positionThread: { top: 27 } };
const obj2 = { text: { variant: "text-sm/bold" }, layout: { "Bool(true)": null, "Bool(true)": "4d46cb9270219102b4f9e899fd51586c", "Bool(true)": "FileIcon", "Bool(true)": "png" } };
const obj1 = { avatarSize: arg1(dependencyMap[3]).AvatarSizes.NORMAL, guildIconSize: arg1(dependencyMap[4]).GuildIconSizes.NORMAL, guildBadgeIconSize: arg1(dependencyMap[4]).GuildIconSizes.XXSMALL, wrapper: { size: 40 }, channelIcon: { size: 40 }, margin: { marginRight: 8 }, emoji: { 9223372036854775807: "r", -9223372036854775808: "isDrawer" } };
obj2.icon = { size: arg1(dependencyMap[3]).IconSizes.REFRESH_SMALL_16, gameSize: arg1(dependencyMap[5]).GameIconSizes.SMALL };
obj.joinVoiceButton = obj2;
const items = [{ translateY: 0 }];
obj.threadSpine = { transform: items };
obj.happeningNow = { margin: { marginBottom: 20 } };
obj.typing = { position: { extraChildStyle: "<string:2552889346>", extraUnderlayStyle: "<string:2938503170>" }, positionThread: { extraChildStyle: -968814336, extraUnderlayStyle: 1912603178 }, typingIndicator: { position: { extraChildStyle: 24, extraUnderlayStyle: 24 } } };
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
