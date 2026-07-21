// Module ID: 10251
// Function ID: 79238
// Name: items
// Dependencies: []
// Exports: getCompactStyles

// Module 10251 (items)
let obj = { layout: { margin: { "Bool(false)": null, "Bool(false)": "735f759c8548e858d5ddb5e988a22d5f", "Bool(false)": "ic_notif_off" }, marginPanels: { "Bool(false)": 18, "Bool(false)": 8, "Bool(false)": 8 }, marginThread: {} } };
obj = { borderRadius: importDefault(dependencyMap[0]).radii.md, padding: {}, paddingPanels: { "Bool(false)": true, "Bool(false)": "/assets/design/components/Icon/native/redesign/generated/images", "Bool(false)": 24 }, paddingThread: { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false } };
obj.container = obj;
obj.voiceUsers = { height: 36, margin: { marginLeft: 60 } };
obj = { size: 24, avatarSize: arg1(dependencyMap[1]).AvatarSizes.XSMALL };
obj.voiceOrStageSummaryRow = obj;
obj.channelName = { height: 20, text: { variant: "redesign/channel-title/semibold" } };
obj.messagePreview = { messageTypeIconSize: arg1(dependencyMap[1]).IconSizes.EXTRA_SMALL, text: { variant: "text-xs/medium" }, margin: { marginTop: 0 } };
obj.timestamp = { text: { variant: "text-xs/medium" } };
obj.inviteRow = { text: { variant: "text-sm/semibold" } };
const obj1 = { messageTypeIconSize: arg1(dependencyMap[1]).IconSizes.EXTRA_SMALL, text: { variant: "text-xs/medium" }, margin: { marginTop: 0 } };
obj.icon = { avatarSize: arg1(dependencyMap[1]).AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: arg1(dependencyMap[2]).GuildIconSizes.SMALL_32, guildBadgeIconSize: arg1(dependencyMap[2]).GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: {} };
obj.unreadBadge = { size: 8, position: { left: 4 }, positionThread: { left: -48 } };
obj.mentionBadge = { position: { top: 28 }, positionThread: { top: 20 } };
obj.category = { height: 30, margin: { marginTop: 16 }, text: { size: 14 } };
const obj2 = { avatarSize: arg1(dependencyMap[1]).AvatarSizes.REFRESH_MEDIUM_32, guildIconSize: arg1(dependencyMap[2]).GuildIconSizes.SMALL_32, guildBadgeIconSize: arg1(dependencyMap[2]).GuildIconSizes.XXSMALL_12, wrapper: { size: 32 }, channelIcon: { size: 16 }, margin: { marginRight: 8 }, emoji: {} };
obj.typing = { position: { extraChildStyle: "\u{1F994}", extraUnderlayStyle: 10 }, positionThread: { extraChildStyle: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000342586273805, extraUnderlayStyle: 3273248263372880.5 }, typingIndicator: { position: { extraChildStyle: false, extraUnderlayStyle: false } }, avatarSize: arg1(dependencyMap[1]).AvatarSizes.REFRESH_MEDIUM_32 };
obj.activeThreadCount = { text: { variant: "text-xs/bold" } };
const obj4 = { text: { variant: "text-xs/bold" }, layout: {} };
const obj3 = { position: { extraChildStyle: "\u{1F994}", extraUnderlayStyle: 10 }, positionThread: { extraChildStyle: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000342586273805, extraUnderlayStyle: 3273248263372880.5 }, typingIndicator: { position: { extraChildStyle: false, extraUnderlayStyle: false } }, avatarSize: arg1(dependencyMap[1]).AvatarSizes.REFRESH_MEDIUM_32 };
obj4.icon = { size: arg1(dependencyMap[1]).IconSizes.EXTRA_SMALL, gameSize: arg1(dependencyMap[3]).GameIconSizes.SIZE_24 };
obj.joinVoiceButton = obj4;
const obj6 = { "Null": null, "Null": "custom", "Null": "white", "Null": null };
const items = [{ translateY: 10 }];
obj6.transform = items;
obj.threadSpine = obj6;
obj.happeningNow = { margin: {} };
obj.separator = { margin: { marginVertical: 12 } };
obj.searchButton = { margin: { marginHorizontal: 16 }, marginPanels: { marginHorizontal: 12 } };
const obj5 = { size: arg1(dependencyMap[1]).IconSizes.EXTRA_SMALL, gameSize: arg1(dependencyMap[3]).GameIconSizes.SIZE_24 };
const tmp2 = importDefault(dependencyMap[4])(obj, { layout: { marginThread: { marginLeft: 4 } }, container: { paddingThread: { paddingLeft: 8 } }, unreadBadge: { positionThread: { left: 4 } } });
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/Compact.tsx");

export const CHANNEL_LIST_STYLES_COMPACT = obj;
export const getCompactStyles = function getCompactStyles(arg0) {
  if (arg0) {
    let obj = {};
    obj = { text: { hasMaxConnections: "<string:3086024708>", isBoostOnlySubscription: "<string:625475588>" } };
    obj.messagePreview = obj;
    obj = {};
    const obj1 = { variant: "text-xs/semibold" };
    obj.text = obj1;
    obj.timestamp = obj;
    let tmp = importDefault(dependencyMap[4])(obj, obj);
  } else {
    tmp = obj;
  }
  return tmp;
};
export const CHANNEL_LIST_STYLES_COMPACT_LAUNCHPAD = tmp2;
