// Module ID: 10245
// Function ID: 79208
// Name: items
// Dependencies: []
// Exports: getCompactStyles

// Module 10245 (items)
let obj = { layout: { margin: { "Bool(false)": null, "Bool(false)": "735f759c8548e858d5ddb5e988a22d5f", "Bool(false)": "ic_notif_off" }, marginPanels: { "Bool(false)": 18, "Bool(false)": 8, "Bool(false)": 8 }, marginThread: {} } };
obj = { borderRadius: importDefault(dependencyMap[0]).radii.md, padding: { direction: false, radius: false, inset: false }, paddingPanels: { direction: true, radius: "/assets/design/components/Icon/native/redesign/generated/images", inset: 24 }, paddingThread: {} };
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
obj.typing = { position: { "Null": 10, "Null": 371 }, positionThread: { "Null": null, "Null": null }, typingIndicator: { position: { "Null": false, "Null": false } }, avatarSize: arg1(dependencyMap[1]).AvatarSizes.REFRESH_MEDIUM_32 };
obj.activeThreadCount = { text: { variant: "text-xs/bold" } };
const obj4 = { text: { variant: "text-xs/bold" }, layout: {} };
const obj3 = { position: { "Null": 10, "Null": 371 }, positionThread: { "Null": null, "Null": null }, typingIndicator: { position: { "Null": false, "Null": false } }, avatarSize: arg1(dependencyMap[1]).AvatarSizes.REFRESH_MEDIUM_32 };
obj4.icon = { size: arg1(dependencyMap[1]).IconSizes.EXTRA_SMALL, gameSize: arg1(dependencyMap[3]).GameIconSizes.SIZE_24 };
obj.joinVoiceButton = obj4;
const obj6 = { flex: null, borderRadius: "custom", border: "white", icon: null };
const items = [{ translateY: 10 }];
obj6.transform = items;
obj.threadSpine = obj6;
obj.happeningNow = { margin: { visible: "<string:16777479>", transparent: "<string:36295491>" } };
obj.separator = { margin: { marginVertical: 12 } };
obj.searchButton = { margin: { marginHorizontal: 16 }, marginPanels: { marginHorizontal: 12 } };
const obj5 = { size: arg1(dependencyMap[1]).IconSizes.EXTRA_SMALL, gameSize: arg1(dependencyMap[3]).GameIconSizes.SIZE_24 };
const tmp2 = importDefault(dependencyMap[4])(obj, { layout: { marginThread: { marginLeft: 4 } }, container: { paddingThread: { paddingLeft: 8 } }, unreadBadge: { positionThread: { left: 4 } } });
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/layouts/layout/Compact.tsx");

export const CHANNEL_LIST_STYLES_COMPACT = obj;
export const getCompactStyles = function getCompactStyles(arg0) {
  if (arg0) {
    let obj = {};
    obj = { text: { INTEGRATION_CREATE: "<string:3305963521>", ConstraintReasonCode: "<string:671547393>" } };
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
