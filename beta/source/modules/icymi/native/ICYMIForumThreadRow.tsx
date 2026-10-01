// Module ID: 16158
// Function ID: 16159
// Name: ICYMIForumThreadRow
// Dependencies: [19, 17, 2045, 2067, 21, 16091, 576, 504, 5832, 7799, 16130, 10374, 7798, 4989, 16132, 1115, 11, 5435, 4832, 4823, 16136, 16138, 2]
// Exports: default

// Module 16158 (ICYMIForumThreadRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5832 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 7799 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10374 */;
import ICYMIShared from "ICYMIShared" /* 16130 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import Fragment from "Fragment" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 16091 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
class ICYMIForumThreadRow {
  constructor(channel) {
    let intl;
    let items5;
    let items6;
    let obj11;
    let obj12;
    let obj6;
    let tmp11Result3;
    let tmp11Result4;
    channel = channel.channel;
    const message = channel.message;
    let stateFromStores;
    const visible = channel.visible;
    const tmp = closure_9();
    let tmp2 = channel;
    let obj = channel(stateFromStores[7]);
    let items = [GuildStore];
    stateFromStores = obj.useStateFromStores(items, () => {
      let guildId;
      const getGuild = GuildStore.getGuild;
      const obj = channel;
      if (channel != null) {
        guildId = obj.getGuildId();
      }
      return getGuild(guildId);
    });
    const author = message.author;
    let obj2 = channel(stateFromStores[7]);
    const items1 = [ChannelStore];
    let obj3 = author;
    const items2 = [author.id, ];
    let id;
    const stateFromStores1 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(channel.parent_id));
    const useEffect = author.useEffect;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    items2[1] = id;
    const effect = useEffect(() => {
      let id;
      if (stateFromStores != null) {
        id = tmp.id;
      }
      if (null != id) {
        let id1;
        const requestMembersById = GuildActionCreatorsDefault.requestMembersById;
        GuildActionCreatorsDefault;
        if (stateFromStores != null) {
          id1 = tmp.id;
        }
        const items = [author.id];
        const membersById = requestMembersById(id1, items);
      }
    }, items2);
    const items3 = [channel, stateFromStores, message.id];
    const callback = obj3.useCallback(() => {
      const obj = ICYMIActionCreatorsDefault;
      obj.itemInteracted(message.id, "forum_thread", "press_forum_thread");
      const obj2 = ICYMIActionCreatorsDefault;
      const obj3 = { itemId: message.id, itemType: "forum_thread", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
      obj2.feedItemActioned(obj3);
      let tmp6 = null != channel;
      const tmp2 = message;
      const tmp5 = channel;
      if (tmp6) {
        tmp6 = null != stateFromStores;
      }
      if (tmp6) {
        const obj4 = ICYMIShared;
        obj4.navigateToPost(tmp5.id, stateFromStores.id, tmp2.id);
      }
    }, items3);
    const items4 = [channel.parent_id, message.id];
    const callback1 = obj3.useCallback(() => {
      if (null != channel.parent_id) {
        const obj = ICYMIActionCreatorsDefault;
        obj.itemInteracted(message.id, "forum_thread", "long_press_forum_thread");
        const obj3 = { itemId: message.id, itemType: "forum_thread", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: null } };
        const obj2 = ICYMIActionCreatorsDefault;
        obj2.feedItemActioned(obj3);
        const obj4 = openChannelLongPressActionSheet;
        const result = obj4.openChannelLongPressActionSheet(tmp.parent_id);
      }
    }, items4);
    const tmp2Result = tmp2(stateFromStores[12]);
    const gravityMessage = tmp2Result.useGravityMessage(message);
    let tmp13 = null;
    if (null != channel) {
      tmp13 = null;
      if (null != channel.guild_id) {
        tmp13 = null;
        if (null != stateFromStores) {
          tmp13 = null;
          if (null != author) {
            tmp13 = null;
            if (null != stateFromStores1) {
              let obj4 = { actionLabel: intl.string(tmp2(tmp3[15]).t.bYNuVx), id: gravityMessage.id, interactionType: "forum_thread", channelId: channel.parent_id, timestamp: tmp11Result3.extractTimestamp(gravityMessage.id), onHeaderPress: callback, onHeaderLongPress: callback1, message: gravityMessage, shouldFeatureUser: true, children: items6 };
              const tmp11Result = message(stateFromStores[14]);
              intl = tmp2(tmp3[15]).intl;
              tmp11Result3 = message(stateFromStores[16]);
              const obj5 = { onPress: callback, onLongPress: callback1, accessibilityRole: "button", unstable_pressDelay: 130, style: tmp.pressable, children: closure_8(View, obj6) };
              obj6 = { style: tmp.container, children: items5 };
              const PressableHighlight = tmp2(tmp3[17]).PressableHighlight;
              const obj7 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: tmp12 };
              items5 = [closure_7(tmp2(tmp3[18]).Text, obj7), , ];
              const obj8 = { variant: "text-md/normal", color: "text-subtle", style: tmp.subtitle, lineClamp: 5, children: tmp11Result4.parseInlineReply(message.content, true) };
              const Text = tmp2(tmp3[18]).Text;
              tmp11Result4 = message(stateFromStores[19]);
              items5[1] = closure_7(Text, obj8);
              const obj9 = { message, visible, itemType: "forum_thread" };
              items5[2] = closure_7(message(stateFromStores[20]), obj9);
              items6 = [closure_7(PressableHighlight, obj5), ];
              const obj10 = { style: tmp.footer, children: closure_7(View, obj11) };
              obj11 = { style: tmp.ICYMICardInteractionRow, children: closure_7(message(stateFromStores[21]), obj12) };
              obj12 = { message: gravityMessage, channel, guild: stateFromStores, backgroundVariant: "base", id: gravityMessage.id, itemType: "forum_thread" };
              items6[1] = closure_7(View, obj10);
              tmp13 = closure_8(tmp11Result, obj4);
            }
          }
        }
      }
    }
    return tmp13;
  }
}
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const React4 = createICYMIStyles.createICYMIStyles((marginHorizontal) => {
  const obj = { pressable: { flex: 1, paddingLeft: marginHorizontal.inset }, container: { marginHorizontal: marginHorizontal.margin }, subtitle: { marginTop: nativeDefault.space.PX_8, marginBottom: marginHorizontal.margin }, footer: { justifyContent: "flex-end", paddingLeft: marginHorizontal.inset, marginTop: marginHorizontal.margin, gap: marginHorizontal.margin }, threadAsComments: { marginHorizontal: marginHorizontal.margin }, ICYMICardInteractionRow: { marginHorizontal: marginHorizontal.margin, marginBottom: marginHorizontal.margin } };
  ({ marginTop: nativeDefault.space.PX_8, marginBottom: marginHorizontal.margin });
  return obj;
});
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIForumThreadRow.tsx");

export default function ForumThreadRowWrapper(message) {
  const obj = { message: message.message, channel: message.threadChannel, visible: message.visible };
  return metroImportDefault(ICYMIForumThreadRow, obj);
};
export const MAX_AVATARS_IN_PILE = 3;
export { ICYMIForumThreadRow };
