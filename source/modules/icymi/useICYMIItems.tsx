// Module ID: 15213
// Function ID: 115968
// Name: createItem
// Dependencies: [31, 8306, 7087, 566, 8321, 2]
// Exports: default

// Module 15213 (createItem)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function createItem(id, type, unread) {
  type = type.type;
  if (require(7087) /* MessageEmbedTypes */.ICYMIItemTypes.MESSAGE === type) {
    if (type.message.id === type.message.channel_id) {
      if (null != type.threadChannel) {
        let obj = { id: id.id };
        const _Date5 = Date;
        obj.timestamp = Date.now();
        obj.channelType = id.data.channel_type;
        obj = { kind: "forumThread" };
        ({ message: obj10.message, threadChannel: obj10.threadChannel } = type);
        obj.data = obj;
        obj.score = id.score;
        const _JSON5 = JSON;
        obj.debugScore = JSON.stringify(id.score_components);
        obj.unread = unread;
        let obj1 = obj;
      }
      return obj1;
    }
    obj1 = { id: id.id };
    const _Date4 = Date;
    obj1.timestamp = Date.now();
    obj1.channelType = id.data.channel_type;
    const obj2 = { kind: "message", message: type.message, mentioned: id.data.has_mention, messageContext: id.data.message_context };
    obj1.data = obj2;
    obj1.score = id.score;
    const _JSON4 = JSON;
    obj1.debugScore = JSON.stringify(id.score_components);
    obj1.unread = unread;
  } else {
    if (require(7087) /* MessageEmbedTypes */.ICYMIItemTypes.ACTIVITY !== type) {
      if (require(7087) /* MessageEmbedTypes */.ICYMIItemTypes.CUSTOM_STATUS !== type) {
        if (require(7087) /* MessageEmbedTypes */.ICYMIItemTypes.GUILD_EVENT === type) {
          const obj3 = { id: id.id };
          const _Date2 = Date;
          obj3.timestamp = Date.now();
          const obj4 = { kind: "guildEvent", eventId: type.event_id };
          obj3.data = obj4;
          obj3.score = id.score;
          const _JSON2 = JSON;
          obj3.debugScore = JSON.stringify(id.score_components);
          obj3.unread = unread;
          return obj3;
        } else if (require(7087) /* MessageEmbedTypes */.ICYMIItemTypes.RECOMMENDED_GUILDS === type) {
          obj = { id: id.id };
          const _Date = Date;
          obj.timestamp = Date.now();
          const obj5 = { kind: "recommendedGuilds" };
          obj.data = obj5;
          obj.score = id.score;
          const _JSON = JSON;
          obj.debugScore = JSON.stringify(id.score_components);
          obj.unread = unread;
          return obj;
        } else {
          return null;
        }
      }
    }
    const obj6 = { id: id.id };
    const _Date3 = Date;
    obj6.timestamp = Date.now();
    const obj7 = { kind: "contentInventory", content: type.activity };
    obj6.data = obj7;
    obj6.score = id.score;
    const _JSON3 = JSON;
    obj6.debugScore = JSON.stringify(id.score_components);
    obj6.unread = unread;
    return obj6;
  }
}
const result = require("MessageEmbedTypes").fileFinishedImporting("modules/icymi/useICYMIItems.tsx");

export default function useICYMIItems() {
  let obj = stateFromStores1(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getUnreadDisplayItems());
  const items1 = [_isNativeReflectConstruct];
  stateFromStores1 = stateFromStores1(566).useStateFromStores(items1, () => outer1_4.getReadDisplayItems());
  const obj2 = stateFromStores1(566);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores2 = stateFromStores1(566).useStateFromStores(items2, () => outer1_4.getNextIndexToHydrate());
  const obj3 = stateFromStores1(566);
  const items3 = [_isNativeReflectConstruct];
  const stateFromStoresObject = stateFromStores1(566).useStateFromStoresObject(items3, () => outer1_4.getHydratedItems());
  const obj4 = stateFromStores1(566);
  const items4 = [_isNativeReflectConstruct];
  const stateFromStores3 = stateFromStores1(566).useStateFromStores(items4, () => outer1_4.getMissingItems());
  const items5 = [stateFromStores1];
  const effect = React.useEffect(() => {
    stateFromStores1 = Date.now() + stateFromStores1.length;
    outer1_1(outer1_2[4]).ackGravityItems(stateFromStores1.map((id) => {
      let closure_0 = tmp - 1;
      return { id: id.id, timestamp: +closure_0 };
    }, true));
  }, items5);
  const items6 = [];
  const items7 = [];
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < stateFromStores.length) {
    num3 = num;
    while (num < stateFromStores2) {
      let tmp35 = stateFromStores[num2];
      let sum = num + 1;
      let tmp12 = tmp5;
      let tmp13 = tmp6;
      if (!stateFromStores3[tmp35.id]) {
        let tmp7 = stateFromStoresObject[tmp35.id];
        let tmp8 = null == tmp7;
        if (tmp8) {
          let tmp9 = stateFromStores1;
          let tmp10 = dependencyMap;
          tmp8 = tmp35.type === stateFromStores1(7087).ICYMIItemTypes.MESSAGE;
        }
        if (tmp8) {
          let message_context = tmp35.data.message_context;
          let reference_message_id;
          if (null != message_context) {
            reference_message_id = message_context.reference_message_id;
          }
          tmp8 = null != reference_message_id;
          tmp5 = message_context;
        }
        if (tmp8) {
          tmp7 = stateFromStoresObject[tmp35.data.message_id];
        }
        tmp12 = tmp5;
        tmp13 = tmp6;
        let tmp14 = tmp7;
        if (null != tmp7) {
          let tmp15 = createItem;
          let tmp16 = createItem(tmp35, tmp7, true);
          tmp12 = tmp5;
          let tmp17 = tmp7;
          tmp13 = tmp16;
          if (null != tmp16) {
            let arr = items6.push(tmp16);
            tmp12 = tmp5;
            let tmp19 = tmp7;
            tmp13 = tmp16;
          }
        }
      }
      num2 = num2 + 1;
      tmp5 = tmp12;
      tmp6 = tmp13;
      num = sum;
      num3 = sum;
      if (num2 >= stateFromStores.length) {
        break;
      }
    }
  }
  let num4 = 0;
  if (0 < stateFromStores1.length) {
    while (num3 < stateFromStores2) {
      let tmp37 = stateFromStores1[num4];
      num3 = num3 + 1;
      let tmp27 = tmp20;
      let tmp28 = tmp21;
      if (!stateFromStores3[tmp37.id]) {
        let tmp22 = stateFromStoresObject[tmp37.id];
        let tmp23 = null == tmp22;
        if (tmp23) {
          let tmp24 = stateFromStores1;
          let tmp25 = dependencyMap;
          tmp23 = tmp37.type === stateFromStores1(7087).ICYMIItemTypes.MESSAGE;
        }
        if (tmp23) {
          let message_context2 = tmp37.data.message_context;
          let reference_message_id1;
          if (null != message_context2) {
            reference_message_id1 = message_context2.reference_message_id;
          }
          tmp23 = null != reference_message_id1;
          tmp20 = message_context2;
        }
        if (tmp23) {
          tmp22 = stateFromStoresObject[tmp37.data.message_id];
        }
        tmp27 = tmp20;
        tmp28 = tmp21;
        let tmp29 = tmp22;
        if (null != tmp22) {
          let tmp30 = createItem;
          let tmp31 = createItem(tmp37, tmp22, false);
          tmp27 = tmp20;
          let tmp32 = tmp22;
          tmp28 = tmp31;
          if (null != tmp31) {
            arr = items7.push(tmp31);
            tmp27 = tmp20;
            let tmp34 = tmp22;
            tmp28 = tmp31;
          }
        }
      }
      num4 = num4 + 1;
      tmp20 = tmp27;
      tmp21 = tmp28;
      if (num4 >= stateFromStores1.length) {
        break;
      }
    }
  }
  obj = { unreadItems: items6, readItems: items7, allUnreadItemsHydrated: stateFromStores2 >= stateFromStores.length };
  return obj;
};
