// Module ID: 15216
// Function ID: 115986
// Name: AnnouncementMessageRowWrapper
// Dependencies: [31, 27, 1348, 1838, 3767, 4325, 1849, 15217, 33, 15179, 689, 566, 5048, 8321, 9099, 9529, 15218, 8320, 15220, 1212, 21, 4660, 8450, 15222, 15226, 2]
// Exports: default

// Module 15216 (AnnouncementMessageRowWrapper)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { ITEM_PADDING } from "ITEM_PADDING";
import jsxProd from "jsxProd";
import createICYMIStyles from "createICYMIStyles";

let closure_11;
let closure_12;
const require = arg1;
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = createICYMIStyles.createICYMIStyles((inset) => {
  obj = { pressable: obj };
  obj = { flex: 1, paddingLeft: inset.inset };
  obj = { marginVertical: inset.margin, gap: importDefault(689).space.PX_8, paddingHorizontal: ITEM_PADDING, marginLeft: inset.inset };
  obj.footer = obj;
  return obj;
});
let closure_14 = importAllResult.memo((message) => {
  let unread;
  let visible;
  message = message.message;
  const guild = message.guild;
  const channel = message.channel;
  ({ unread, visible } = message);
  let obj = message(channel[11]);
  let items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.isChannelMuted(channel.getGuildId(), channel.id));
  const tmp2 = callback3();
  let id;
  if (null != guild) {
    id = guild.id;
  }
  const items1 = [id, message.author.id];
  const effect = importAllResult.useEffect(() => {
    let id;
    if (null != guild) {
      id = guild.id;
    }
    if (null != id) {
      let id1;
      if (null != guild) {
        id1 = guild.id;
      }
      const membersById = guild(channel[12]).requestMembersById(id1, message.author.id);
      const obj = guild(channel[12]);
    }
  }, items1);
  const items2 = [channel.id, message.id];
  const items3 = [channel, message];
  const callback = importAllResult.useCallback(() => {
    let obj = guild(channel[13]);
    obj.itemInteracted(message.id, "announcement", "long_press_channel");
    obj = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_header", actionIntentType: "open", actionDestinationType: "channel" } };
    guild(channel[13]).feedItemActioned(obj);
    const obj2 = guild(channel[13]);
    const result = message(channel[14]).openChannelLongPressActionSheet(channel.id);
  }, items2);
  const items4 = [message, channel.id, guild.id];
  const callback1 = importAllResult.useCallback(() => {
    let obj = guild(channel[13]);
    obj.itemInteracted(message.id, "announcement", "long_press_message");
    obj = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: "channel" } };
    guild(channel[13]).feedItemActioned(obj);
    const user = outer1_9.getUser(message.author.id);
    const obj2 = guild(channel[13]);
    obj = { channel, message, user };
    const result = message(channel[15]).showLongPressMessageActionSheet(obj);
  }, items3);
  const callback2 = importAllResult.useCallback(() => {
    let obj = guild(channel[13]);
    obj.itemInteracted(message.id, "announcement", "press_message");
    obj = { itemId: message.id, itemType: "announcement", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
    guild(channel[13]).feedItemActioned(obj);
    if (null != message) {
      obj = { id: message.id };
      const _Date = Date;
      obj.timestamp = Date.now();
      const items = [obj];
      guild(channel[13]).ackGravityItems(items);
      const obj4 = guild(channel[13]);
      message(channel[16]).navigateToPost(channel.id, guild.id, message.id);
      const obj6 = message(channel[16]);
    }
  }, items4);
  let obj1 = message(channel[17]);
  const gravityMessage = obj1.useGravityMessage(message);
  obj = {};
  const intl = message(channel[19]).intl;
  obj.actionLabel = intl.string(message(channel[19]).t["8P08G9"]);
  obj.id = message.id;
  obj.interactionType = "announcement";
  obj.channelId = channel.id;
  const tmp10 = guild(channel[18]);
  obj.timestamp = guild(channel[20]).extractTimestamp(message.id);
  obj.onHeaderPress = callback2;
  obj.onHeaderLongPress = callback;
  obj.message = gravityMessage;
  obj.shouldFeatureUser = true;
  obj = { onPress: callback2, onLongPress: callback1, accessibilityRole: "button", accessibilityLabel: guild(channel[22])({ channel, unread }) };
  let obj4 = guild(channel[20]);
  obj.accessibilityHint = message(channel[22]).getChannelA11yHint({ channel, muted: stateFromStores });
  obj.unstable_pressDelay = 130;
  obj.style = tmp2.pressable;
  obj.children = callback(message(channel[23]).MessageRowContent, { message, channel, guild, lineClamp: 5, visible });
  const items5 = [callback(message(channel[21]).PressableHighlight, obj), ];
  obj1 = { style: tmp2.footer, children: callback(guild(channel[24]), obj2) };
  items5[1] = callback(View, obj1);
  obj.children = items5;
  return callback2(tmp10, obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/icymi/native/AnnouncementMessageRow.tsx");

export default function AnnouncementMessageRowWrapper(message) {
  let unread;
  let visible;
  message = message.message;
  let author;
  ({ unread, visible } = message);
  let obj = message(author[11]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getChannel(message.getChannelId()));
  const items1 = [_createForOfIteratorHelperLoose];
  const stateFromStores1 = message(author[11]).useStateFromStores(items1, () => {
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return outer1_6.getGuild(guild_id);
  });
  const obj2 = message(author[11]);
  const gravityMessage = message(author[17]).useGravityMessage(message);
  author = undefined;
  if (null != gravityMessage) {
    author = gravityMessage.author;
  }
  message(author[11]);
  [][0] = closure_7;
  let tmp7 = null;
  if (null != stateFromStores) {
    tmp7 = null;
    if (null != stateFromStores1) {
      tmp7 = null;
      if (null != gravityMessage) {
        tmp7 = null;
        if (null != author) {
          tmp7 = null;
          if (!tmp6) {
            obj = { unread, message: gravityMessage, channel: stateFromStores, guild: stateFromStores1, visible };
            tmp7 = callback(closure_14, obj);
          }
        }
      }
    }
  }
  return tmp7;
};
