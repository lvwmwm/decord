// Module ID: 15090
// Function ID: 113740
// Name: AnnouncementMessageRowWrapper
// Dependencies: [0, 0, 0, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 15090 (AnnouncementMessageRowWrapper)
import importAllResult from "__exportStarResult1";
import { View } from "__exportStarResult1";
import closure_5 from "__exportStarResult1";
import closure_6 from "__exportStarResult1";
import closure_7 from "__exportStarResult1";
import closure_9 from "__exportStarResult1";
import { ITEM_PADDING } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

let closure_8 = importDefault(dependencyMap[5]);
({ jsx: closure_11, jsxs: closure_12 } = __exportStarResult1);
let closure_13 = __exportStarResult1.createICYMIStyles((inset) => {
  let obj = { pressable: obj };
  obj = { flex: 1, paddingLeft: inset.inset };
  obj = { marginVertical: inset.margin, gap: importDefault(dependencyMap[10]).space.PX_8, paddingHorizontal: ITEM_PADDING, marginLeft: inset.inset };
  obj.footer = obj;
  return obj;
});
let closure_14 = importAllResult.memo((message) => {
  let unread;
  let visible;
  message = message.message;
  const arg1 = message;
  const guild = message.guild;
  const importDefault = guild;
  const channel = message.channel;
  const dependencyMap = channel;
  ({ unread, visible } = message);
  let obj = arg1(dependencyMap[11]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => channelMuted.isChannelMuted(channel.getGuildId(), channel.id));
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
    obj = { itemId: message.id, itemType: "announcement", actionParameters: { "Bool(false)": true, "Bool(false)": "/assets/.cache/intl/bW9kdWxlcy9ndWlsZF9zZXR0aW5ncy9zZXJ2ZXJfbW9uZXRpemF0aW9uL3RhZ3Mvd2Vi", "Bool(false)": null, "Bool(false)": "5f875040d852178b5dc02bb996f5535d" } };
    guild(channel[13]).feedItemActioned(obj);
    const obj2 = guild(channel[13]);
    const result = message(channel[14]).openChannelLongPressActionSheet(channel.id);
  }, items2);
  const items4 = [message, channel.id, guild.id];
  const callback1 = importAllResult.useCallback(() => {
    let obj = guild(channel[13]);
    obj.itemInteracted(message.id, "announcement", "long_press_message");
    obj = { itemId: message.id, itemType: "announcement", actionParameters: { "Bool(false)": 318767366, "Bool(false)": 1358954813, "Bool(false)": 1700917688, "Bool(false)": -984532383 } };
    guild(channel[13]).feedItemActioned(obj);
    const user = user.getUser(message.author.id);
    const obj2 = guild(channel[13]);
    obj = { channel, message, user };
    const result = message(channel[15]).showLongPressMessageActionSheet(obj);
  }, items3);
  const callback2 = importAllResult.useCallback(() => {
    let obj = guild(channel[13]);
    obj.itemInteracted(message.id, "announcement", "press_message");
    obj = { itemId: message.id, itemType: "announcement", actionParameters: { "Bool(false)": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009875954114321378, "Bool(false)": 353076186411522100000000000000000000, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013053759670591748, "Bool(false)": -9518929275348370000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 } };
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
  let obj1 = arg1(dependencyMap[17]);
  const gravityMessage = obj1.useGravityMessage(message);
  obj = {};
  const intl = arg1(dependencyMap[19]).intl;
  obj.actionLabel = intl.string(arg1(dependencyMap[19]).t.8P08G9);
  obj.id = message.id;
  obj.interactionType = "announcement";
  obj.channelId = channel.id;
  const tmp10 = importDefault(dependencyMap[18]);
  obj.timestamp = importDefault(dependencyMap[20]).extractTimestamp(message.id);
  obj.onHeaderPress = callback2;
  obj.onHeaderLongPress = callback;
  obj.message = gravityMessage;
  obj.shouldFeatureUser = true;
  obj = { onPress: callback2, onLongPress: callback1, accessibilityRole: "button", accessibilityLabel: importDefault(dependencyMap[22])({ channel, unread }) };
  const obj4 = importDefault(dependencyMap[20]);
  obj.accessibilityHint = arg1(dependencyMap[22]).getChannelA11yHint({ channel, muted: stateFromStores });
  obj.unstable_pressDelay = 130;
  obj.style = tmp2.pressable;
  obj.children = callback(arg1(dependencyMap[23]).MessageRowContent, { message, channel, guild, lineClamp: 5, visible });
  const items5 = [callback(arg1(dependencyMap[21]).PressableHighlight, obj), ];
  obj1 = { style: tmp2.footer, children: callback(importDefault(dependencyMap[24]), obj2) };
  items5[1] = callback(View, obj1);
  obj.children = items5;
  return callback2(tmp10, obj);
});
const result = __exportStarResult1.fileFinishedImporting("modules/icymi/native/AnnouncementMessageRow.tsx");

export default function AnnouncementMessageRowWrapper(message) {
  let unread;
  let visible;
  message = message.message;
  const arg1 = message;
  let dependencyMap;
  ({ unread, visible } = message);
  let obj = arg1(dependencyMap[11]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(message.getChannelId()));
  const importDefault = stateFromStores;
  const items1 = [closure_6];
  const stateFromStores1 = arg1(dependencyMap[11]).useStateFromStores(items1, () => {
    let guild_id;
    if (null != stateFromStores) {
      guild_id = stateFromStores.guild_id;
    }
    return guild.getGuild(guild_id);
  });
  const obj2 = arg1(dependencyMap[11]);
  const gravityMessage = arg1(dependencyMap[17]).useGravityMessage(message);
  let author;
  if (null != gravityMessage) {
    author = gravityMessage.author;
  }
  dependencyMap = author;
  arg1(dependencyMap[11]);
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
