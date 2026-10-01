// Module ID: 16128
// Function ID: 16129
// Name: AnnouncementMessageRow
// Dependencies: [19, 17, 2045, 2067, 4479, 5017, 1372, 16129, 21, 16091, 576, 504, 5832, 7799, 10374, 11152, 16130, 7798, 16132, 1115, 11, 5435, 9060, 16134, 16138, 2]
// Exports: default

// Module 16128 (AnnouncementMessageRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5832 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 7799 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10374 */;
import showLongPressMessageActionSheet from "showLongPressMessageActionSheet" /* 11152 */;
import DesignConstants from "DesignConstants" /* 16129 */;
import ICYMIShared from "ICYMIShared" /* 16130 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 16091 */;
import size from "module_2" /* 2 */;

let closure_12;
let unpackModuleId;
const View = react_native.View;
const ITEM_PADDING = DesignConstants.ITEM_PADDING;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createICYMIStyles.createICYMIStyles((paddingLeft) => {
  const obj = { pressable: { flex: 1, paddingLeft: paddingLeft.inset }, footer: { marginVertical: paddingLeft.margin, gap: nativeDefault.space.PX_8, paddingHorizontal: ITEM_PADDING, marginLeft: paddingLeft.inset } };
  ({ marginVertical: paddingLeft.margin, gap: nativeDefault.space.PX_8, paddingHorizontal: ITEM_PADDING, marginLeft: paddingLeft.inset });
  return obj;
});
let closure_14 = react.memo((message) => {
  let intl;
  let items5;
  let obj5;
  let obj7;
  let tmpResult2;
  let unread;
  let visible;
  message = message.message;
  const guild = message.guild;
  const channel = message.channel;
  const tmp = message;
  ({ unread, visible } = message);
  let obj = message(channel[11]);
  let items = [UserGuildSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id));
  const tmp4 = closure_13();
  let obj2 = react;
  let id;
  const useEffect = react.useEffect;
  if (guild != null) {
    id = guild.id;
  }
  const items1 = [id, message.author.id];
  const effect = useEffect(() => {
    let id;
    if (guild != null) {
      id = tmp.id;
    }
    if (null != id) {
      let id1;
      const requestMembersById = GuildActionCreatorsDefault.requestMembersById;
      GuildActionCreatorsDefault;
      if (guild != null) {
        id1 = tmp.id;
      }
      const membersById = requestMembersById(id1, message.author.id);
    }
  }, items1);
  const items2 = [channel.id, message.id];
  const items3 = [channel, message];
  const callback = obj2.useCallback(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(message.id, "announcement", "long_press_channel");
    const obj2 = ICYMIActionCreatorsDefault;
    const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "channel" } };
    obj2.feedItemActioned(obj3);
    const obj4 = openChannelLongPressActionSheet;
    const result = obj4.openChannelLongPressActionSheet(channel.id);
  }, items2);
  const items4 = [message, channel.id, guild.id];
  const callback1 = obj2.useCallback(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(message.id, "announcement", "long_press_message");
    const obj2 = ICYMIActionCreatorsDefault;
    const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: "channel" } };
    obj2.feedItemActioned(obj3);
    const user = UserStore.getUser(message.author.id);
    const obj4 = showLongPressMessageActionSheet;
    const obj5 = { channel, message, user };
    const result = obj4.showLongPressMessageActionSheet(obj5);
  }, items3);
  const callback2 = obj2.useCallback(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(message.id, "announcement", "press_message");
    const obj2 = ICYMIActionCreatorsDefault;
    const obj3 = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
    obj2.feedItemActioned(obj3);
    if (null != message) {
      const _Date = Date;
      const obj4 = { id: message.id, timestamp: Date.now() };
      const ackGravityItems = tmp(7799).ackGravityItems;
      ICYMIActionCreatorsDefault;
      const items = [obj4];
      ackGravityItems(items);
      const obj5 = ICYMIShared;
      obj5.navigateToPost(channel.id, guild.id, message.id);
    }
  }, items4);
  const tmpResult = tmp(tmp2[17]);
  const gravityMessage = tmpResult.useGravityMessage(message);
  let obj3 = { actionLabel: intl.string(tmp(tmp2[19]).t["8P08G9"]), id: message.id, interactionType: "announcement", channelId: channel.id, timestamp: obj5.extractTimestamp(message.id), onHeaderPress: callback2, onHeaderLongPress: callback, message: gravityMessage, shouldFeatureUser: true, children: items5 };
  const tmp11 = guild(channel[18]);
  intl = tmp(tmp2[19]).intl;
  obj5 = guild(tmp2[20]);
  let obj4 = { onPress: callback2, onLongPress: callback1, accessibilityRole: "button", accessibilityLabel: guild(tmp2[22])({ channel, unread }), accessibilityHint: tmpResult2.getChannelA11yHint({ channel, muted: stateFromStores }), unstable_pressDelay: 130, style: tmp4.pressable, children: closure_11(tmp(tmp2[23]).MessageRowContent, { message, channel, guild, lineClamp: 5, visible }) };
  const PressableHighlight = tmp(tmp2[21]).PressableHighlight;
  tmpResult2 = tmp(channel[22]);
  items5 = [closure_11(PressableHighlight, obj4), ];
  const obj6 = { style: tmp4.footer, children: closure_11(guild(channel[24]), obj7) };
  obj7 = { message, channel, guild, backgroundVariant: "base", id: message.id, itemType: "announcement" };
  items5[1] = closure_11(View, obj6);
  return closure_12(tmp11, obj3);
});
let result = size.fileFinishedImporting("modules/icymi/native/AnnouncementMessageRow.tsx");

export default function AnnouncementMessageRowWrapper(message) {
  let unread;
  let visible;
  message = message.message;
  let author;
  ({ unread, visible } = message);
  const items = [ChannelStore];
  const obj = message(author[11]);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(message.getChannelId()));
  const items1 = [GuildStore];
  const obj2 = message(author[11]);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return getGuild(guild_id);
  });
  const obj3 = message(author[17]);
  const gravityMessage = obj3.useGravityMessage(message);
  const tmp2 = author;
  author = undefined;
  const tmp = message;
  if (gravityMessage != null) {
    author = gravityMessage.author;
  }
  tmp(tmp2[11]);
  [][0] = RelationshipStore;
  let tmp9 = null;
  if (null != stateFromStores) {
    tmp9 = null;
    if (null != stateFromStores1) {
      tmp9 = null;
      if (null != gravityMessage) {
        tmp9 = null;
        if (null != author) {
          tmp9 = null;
          if (!tmp8) {
            const obj4 = { unread, message: gravityMessage, channel: stateFromStores, guild: stateFromStores1, visible };
            tmp9 = closure_11(closure_14, obj4);
          }
        }
      }
    }
  }
  return tmp9;
};
