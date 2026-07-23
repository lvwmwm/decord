// Module ID: 15246
// Function ID: 116339
// Name: ICYMIForumThreadRow
// Dependencies: [31, 27, 1348, 1838, 33, 15179, 689, 566, 5048, 8321, 15218, 9099, 8320, 4320, 15220, 1212, 21, 4660, 4126, 4120, 15224, 15226, 2]
// Exports: default

// Module 15246 (ICYMIForumThreadRow)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";
import createICYMIStyles from "createICYMIStyles";

let closure_7;
let closure_8;
const require = arg1;
class ICYMIForumThreadRow {
  constructor(arg0) {
    channel = global.channel;
    message = global.message;
    tmp = f116346();
    obj = require("initialize");
    items = [];
    items[0] = defineProperty;
    stateFromStores = obj.useStateFromStores(items, () => {
      let guildId;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      return outer1_6.getGuild(guildId);
    });
    closure_2 = stateFromStores;
    author = message.author;
    obj2 = require("initialize");
    items1 = [];
    items1[0] = c5;
    items2 = [, ];
    items2[0] = author.id;
    id = undefined;
    stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_5.getChannel(channel.parent_id));
    tmp4 = author;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    items2[1] = id;
    effect = author.useEffect(() => {
      let id;
      if (null != stateFromStores) {
        id = stateFromStores.id;
      }
      if (null != id) {
        let id1;
        if (null != stateFromStores) {
          id1 = stateFromStores.id;
        }
        const items = [author.id];
        const membersById = message(stateFromStores[8]).requestMembersById(id1, items);
        const obj = message(stateFromStores[8]);
      }
    }, items2);
    items3 = [, , ];
    items3[0] = channel;
    items3[1] = stateFromStores;
    items3[2] = message.id;
    callback = author.useCallback(() => {
      let obj = message(stateFromStores[9]);
      obj.itemInteracted(message.id, "forum_thread", "press_forum_thread");
      obj = { itemId: message.id, itemType: "forum_thread", actionParameters: { actionGestureType: "press", actionTargetElement: "item_container", actionIntentType: "navigate", actionDestinationType: "channel" } };
      message(stateFromStores[9]).feedItemActioned(obj);
      let tmp3 = null != channel;
      if (tmp3) {
        tmp3 = null != stateFromStores;
      }
      if (tmp3) {
        channel(stateFromStores[10]).navigateToPost(channel.id, stateFromStores.id, message.id);
        const obj4 = channel(stateFromStores[10]);
      }
    }, items3);
    items4 = [, ];
    items4[0] = channel.parent_id;
    items4[1] = message.id;
    callback1 = author.useCallback(() => {
      if (null != channel.parent_id) {
        let obj = message(stateFromStores[9]);
        obj.itemInteracted(message.id, "forum_thread", "long_press_forum_thread");
        obj = { itemId: message.id, itemType: "forum_thread", actionParameters: { actionGestureType: "long_press", actionTargetElement: "item_container", actionIntentType: "open", actionDestinationType: null } };
        message(stateFromStores[9]).feedItemActioned(obj);
        const obj2 = message(stateFromStores[9]);
        const result = channel(stateFromStores[11]).openChannelLongPressActionSheet(channel.parent_id);
        const obj4 = channel(stateFromStores[11]);
      }
    }, items4);
    obj3 = require("generateHydrationId");
    gravityMessage = obj3.useGravityMessage(message);
    tmp11 = null;
    if (null != channel) {
      tmp11 = null;
      if (null != channel.guild_id) {
        tmp11 = null;
        if (null != stateFromStores) {
          tmp11 = null;
          if (null != author) {
            tmp11 = null;
            if (null != stateFromStores1) {
              tmp12 = jsxs;
              tmp13 = message;
              tmp14 = closure_2;
              num = 14;
              obj = {};
              tmp16 = channel;
              num2 = 15;
              tmp15 = require("truncateUsername");
              intl = require("getSystemLocale").intl;
              obj.actionLabel = intl.string(require("getSystemLocale").t.bYNuVx);
              obj.id = gravityMessage.id;
              str = "forum_thread";
              obj.interactionType = "forum_thread";
              obj.channelId = channel.parent_id;
              num3 = 16;
              obj5 = require("DISCORD_EPOCH");
              obj.timestamp = obj5.extractTimestamp(gravityMessage.id);
              obj.onHeaderPress = callback;
              obj.onHeaderLongPress = callback1;
              obj.message = gravityMessage;
              flag = true;
              obj.shouldFeatureUser = true;
              tmp17 = jsx;
              num4 = 17;
              obj1 = {};
              obj1.onPress = callback;
              obj1.onLongPress = callback1;
              str2 = "button";
              obj1.accessibilityRole = "button";
              num5 = 130;
              obj1.unstable_pressDelay = 130;
              obj1.style = tmp.pressable;
              tmp18 = jsxs;
              tmp19 = View;
              obj2 = {};
              obj2.style = tmp.container;
              tmp20 = jsx;
              num6 = 18;
              obj3 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary" };
              obj3.children = tmp10;
              items5 = [, , ];
              items5[0] = jsx(require("Text").Text, obj3);
              tmp21 = jsx;
              obj4 = { variant: "text-md/normal", color: "text-subtle", style: null, lineClamp: 5 };
              obj4.style = tmp.subtitle;
              num7 = 19;
              obj10 = require("combineAndInjectMentionRule");
              obj4.children = obj10.parseInlineReply(message.content, true);
              items5[1] = jsx(require("Text").Text, obj4);
              tmp22 = jsx;
              num8 = 20;
              obj5 = {};
              obj5.message = message;
              obj5.visible = global.visible;
              obj5.itemType = "forum_thread";
              items5[2] = jsx(require("isMediaSourceGif"), obj5);
              obj2.children = items5;
              obj1.children = jsxs(View, obj2);
              items6 = [, ];
              items6[0] = jsx(require("PressableBase").PressableHighlight, obj1);
              tmp23 = jsx;
              tmp24 = View;
              obj6 = {};
              obj6.style = tmp.footer;
              tmp25 = jsx;
              tmp26 = View;
              obj7 = {};
              obj7.style = tmp.ICYMICardInteractionRow;
              tmp27 = jsx;
              num9 = 21;
              obj8 = {};
              obj8.message = gravityMessage;
              obj8.channel = channel;
              obj8.guild = stateFromStores;
              str3 = "base";
              obj8.backgroundVariant = "base";
              obj8.id = gravityMessage.id;
              obj8.itemType = "forum_thread";
              obj7.children = jsx(require("onAddReaction"), obj8);
              obj6.children = jsx(View, obj7);
              items6[1] = jsx(View, obj6);
              obj.children = items6;
              tmp11 = jsxs(tmp15, obj);
            }
          }
        }
      }
    }
    return tmp11;
  }
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = createICYMIStyles.createICYMIStyles((marginHorizontal) => {
  obj = { pressable: obj, container: obj };
  obj = { flex: 1, paddingLeft: marginHorizontal.inset };
  obj = { marginHorizontal: marginHorizontal.margin, subtitle: { marginTop: importDefault(689).space.PX_8, marginBottom: marginHorizontal.margin }, footer: { justifyContent: "flex-end", paddingLeft: marginHorizontal.inset, marginTop: marginHorizontal.margin, gap: marginHorizontal.margin }, threadAsComments: { marginHorizontal: marginHorizontal.margin }, ICYMICardInteractionRow: { marginHorizontal: marginHorizontal.margin, marginBottom: marginHorizontal.margin } };
  return obj;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/icymi/native/ICYMIForumThreadRow.tsx");

export default function ForumThreadRowWrapper(message) {
  return callback(ICYMIForumThreadRow, { message: message.message, channel: message.threadChannel, visible: message.visible });
};
export const MAX_AVATARS_IN_PILE = 3;
export { ICYMIForumThreadRow };
