// Module ID: 18719
// Function ID: 18720
// Name: renderChannelItem
// Dependencies: [19, 17, 4885, 4956, 1383, 6776, 21, 9085, 1113, 5014, 575, 18720, 504, 6957, 12386, 6860, 18721, 10799, 18723, 5652, 2]
// Exports: default, getChannelAccessibilityProps

// Module 18719 (renderChannelItem)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import useChannelName from "useChannelName" /* 5652 */;
import ReadStateConstants from "ReadStateConstants" /* 6776 */;
import NotificationCenterUtils from "NotificationCenterUtils" /* 6860 */;
import GuildIconDefault from "GuildIcon" /* 6957 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 9085 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 18720 */;
import renderChannelWrapperDefault from "renderChannelWrapper" /* 18721 */;
import renderChannelContentDefault from "renderChannelContent" /* 18723 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4885 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
function LaunchpadChannelIcon(channel) {
  let items1;
  let obj4;
  channel = channel.channel;
  const tmp = closure_11();
  const items = [GuildStore];
  const obj2 = { children: items1 };
  const tmp2 = getLayoutStylesDefault();
  const obj3 = { style: tmp.guildBadgeIcon, children: closure_8(GuildIconDefault, obj4) };
  const obj = channel(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  obj4 = { guild: stateFromStores, size: tmp2.icon.guildBadgeIconSize };
  items1 = [closure_8(View, obj3), closure_8(channel(12386).ChannelIcon, { channel, size: "sm", wrapperSize: 32 })];
  return closure_10(closure_9, obj2);
}
const View = react_native.View;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles(() => {
  let rect;
  const obj = { guildBadgeIcon: rect };
  rect = { position: "absolute", zIndex: 1, bottom: -4, right: -4, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 2, borderRadius: 6 };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/launchpad/native/shared/renderChannelItem.tsx");

export default function renderChannelItem(unread) {
  let channel;
  let channelCategoryName;
  let channelName;
  let connected;
  let end;
  let fontScale;
  let isSubscriptionGated;
  let latestMessageTimestamp;
  let locked;
  let mentionBadge;
  let mentionCount;
  let subtitle;
  let tmp11Result;
  let unreadBadge;
  ({ channel, locked } = unread);
  ({ channelCategoryName, subtitle, unreadBadge, mentionBadge } = unread);
  if (locked === undefined) {
    locked = false;
  }
  let flag = unread.unread;
  if (flag === undefined) {
    flag = false;
  }
  let ONLY_MENTIONS = unread.resolvedUnreadSetting;
  if (ONLY_MENTIONS === undefined) {
    ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
  }
  let flag2 = unread.live;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = unread.muted;
  if (flag3 === undefined) {
    flag3 = false;
  }
  ({ latestMessageTimestamp, end, channelName, isSubscriptionGated, connected, mentionCount, fontScale } = unread);
  if (isSubscriptionGated === undefined) {
    isSubscriptionGated = false;
  }
  let flag4 = unread.needSubscriptionToAccess;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let relativeTimestamp = null;
  if (null != latestMessageTimestamp) {
    relativeTimestamp = null;
    if (!flag3) {
      const obj = NotificationCenterUtils;
      relativeTimestamp = obj.getRelativeTimestamp(latestMessageTimestamp);
    }
  }
  const tmp7 = getLayoutStylesDefault();
  const children = [unreadBadge, , , ];
  const obj2 = { style: size, children: tmp11Result };
  size = { position: "relative", borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", flexShrink: 0, flexGrow: 0, width: tmp7.icon.wrapper.size, height: tmp7.icon.wrapper.size };
  const tmp8 = renderChannelWrapperDefault;
  const merged = Object.assign(tmp7.icon.margin);
  const tmp10 = React4;
  const tmp9 = authStore;
  if (channel.isGroupDM()) {
    const obj3 = { channel, size: tmp7.icon.avatarSize };
    tmp11Result = tmp11(tmp5(10799), obj3);
  } else {
    const obj4 = { channel };
    tmp11Result = tmp11(LaunchpadChannelIcon, obj4);
  }
  children[1] = metroImportAll(View, obj2);
  const tmp5Result = renderChannelContentDefault;
  if (channelName == null) {
    const obj6 = useChannelName;
    channelName = obj6.computeChannelName(channel, UserStore, RelationshipStore);
  }
  children[2] = tmp5Result({ name: channelName, subtitle, unread: flag, resolvedUnreadSetting: ONLY_MENTIONS, muted: flag3, lastMessageTimestampString: relativeTimestamp, channel, channelCategoryName, locked, connected, live: flag2, mentionCount, mentionBadge, isSubscriptionGated, needSubscriptionToAccess: flag4 });
  let tmp11Result2 = null;
  if (null != end) {
    const obj5 = { style: { paddingLeft: 8 }, children: end };
    tmp11Result2 = tmp11(tmp12, obj5);
  }
  children[3] = tmp11Result2;
  return tmp8(tmp9(tmp10, { children }), { fontScale });
};
export function getChannelAccessibilityProps(channel) {
  let embeddedActivitiesCount;
  let mentionCount;
  let stringResult;
  let unread;
  let voiceStates;
  channel = channel.channel;
  const obj = { accessible: true, accessibilityRole: "button", accessibilityLabel: getChannelA11yLabelDefault({ channel, unread, mentionCount, voiceStates, embeddedActivitiesCount }), accessibilityHint: stringResult };
  ({ unread, mentionCount, voiceStates, embeddedActivitiesCount } = channel);
  if (channel.isGuildVoice()) {
    const intl = intl2.intl;
    stringResult = intl.string(intl2.t["9C444m"]);
  }
  return obj;
}
