// Module ID: 11176
// Function ID: 11177
// Name: ForLaterCardHeader
// Dependencies: [17, 4885, 21, 5014, 575, 7378, 504, 6957, 10799, 1187, 8643, 5652, 8603, 1113, 5624, 2]
// Exports: ForLaterCardHeader

// Module 11176 (ForLaterCardHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useChannelNameDefault from "useChannelName" /* 5652 */;
import GuildIconDefault from "GuildIcon" /* 6957 */;
import ChevronSmallRightIcon from "ChevronSmallRightIcon" /* 7378 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10799 */;
import GuildStore from "GuildStore" /* 4885 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
function HeaderIcon(channel) {
  let tmp6Result;
  channel = channel.channel;
  const items = [GuildStore];
  const tmp = closure_7();
  const obj = channel(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  if (null != stateFromStores) {
    const obj2 = { guild: stateFromStores, size: channel(6957).GuildIconSizes.XSMALL };
    const tmp13 = GuildIconDefault;
    tmp6Result = closure_5(tmp13, obj2);
  } else {
    let isGroupDMResult;
    if (channel != null) {
      isGroupDMResult = channel.isGroupDM();
    }
    if (isGroupDMResult) {
      const obj3 = { channel, size: channel(1187).AvatarSizes.XSMALL };
      const tmp10 = GroupDMAvatarDefault;
      tmp6Result = tmp6(tmp10, obj3);
    } else {
      const obj4 = { style: tmp.dmIcon, children: closure_5(channel(8643).ChatIcon, { size: "xxs" }) };
      tmp6Result = tmp6(View, obj4);
    }
  }
  return tmp6Result;
}
function ChannelName(channel) {
  let items1;
  channel = channel.channel;
  const tmp = closure_7();
  const items = [GuildStore];
  const obj = channel(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  const tmp5 = useChannelNameDefault(channel, false);
  const obj2 = channel(8603);
  const channelIconComponentWithGuild = obj2.getChannelIconComponentWithGuild(channel, stateFromStores);
  let formatToPlainStringResult = tmp5;
  const isPrivateResult = channel.isPrivate() || null == channelIconComponentWithGuild;
  if (channel.isDM()) {
    const intl = tmp2(1113).intl;
    const obj3 = { username: tmp5 };
    formatToPlainStringResult = intl.formatToPlainString(tmp2(1113).t.smD7XV, obj3);
  }
  let tmp12 = null;
  const obj4 = { style: tmp.channelNameContainer, children: items1 };
  const tmp10 = closure_6;
  const tmp11 = View;
  if (!isPrivateResult) {
    const obj5 = { style: tmp.channelTypeIcon, size: "xxs" };
    tmp12 = closure_5(channelIconComponentWithGuild, obj5);
  }
  items1 = [tmp12, ];
  const obj6 = { style: tmp.channelName, variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: formatToPlainStringResult };
  items1[1] = closure_5(channel(5624).Text, obj6);
  return tmp10(tmp11, obj4);
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { cardHeader: { flexDirection: "row", alignItems: "center", gap: 8 }, dmIcon: obj2, channelNameContainer: { flexDirection: "row", alignItems: "center", flexShrink: 1 }, channelName: { flexShrink: 1 }, channelTypeIcon: { marginRight: 4 }, actionsContainer: { marginVertical: -4, marginLeft: "auto" } };
obj2 = { padding: 6, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterCardHeader.tsx");

export function ForLaterCardHeader(channel) {
  let items;
  channel = channel.channel;
  const actions = channel.actions;
  const tmp = closure_7();
  const obj = { style: tmp.cardHeader, children: items };
  items = [hasOwnProperty(HeaderIcon, { channel }), , , ];
  let tmp4Result = null;
  const tmp2 = metroRequire;
  if (!channel.isPrivate()) {
    tmp4Result = tmp4(ChevronSmallRightIcon.ChevronSmallRightIcon, { size: "xxs" });
  }
  items[1] = tmp4Result;
  items[2] = hasOwnProperty(ChannelName, { channel });
  const obj2 = { style: tmp.actionsContainer, children: actions };
  items[3] = hasOwnProperty(View, obj2);
  return tmp2(View, obj);
}
