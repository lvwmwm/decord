// Module ID: 16758
// Function ID: 16759
// Name: ICYMIGuildEventRow
// Dependencies: [19, 17, 6059, 2063, 2086, 21, 16694, 587, 558, 576, 8502, 1126, 8496, 5417, 8499, 8624, 8447, 8489, 7043, 8492, 16742, 11, 5086, 8625, 8192, 1200, 504, 2]

// Module 16758 (ICYMIGuildEventRow)
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import transitionToGuild from "transitionToGuild" /* 7043 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8447 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 8489 */;
import ScheduleUtils from "ScheduleUtils" /* 8496 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildScheduledEventStore_mod from "GuildScheduledEventStore" /* 6059 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import GuildStore from "GuildStore" /* 2086 */;
import Fragment from "Fragment" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 16694 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, feedItemActionedResult, itemInteractedResult, obj1, transitionToGuildResult;

let closure_12;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let react = react_mod;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
let GuildScheduledEventStore = GuildScheduledEventStore_mod;
({ isGuildEventEnded: metroRequire, isGuildScheduledEventActive: metroImportDefault } = GuildScheduledEventStore);
GuildScheduledEventStore = GuildScheduledEventStore_mod;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createICYMIStyles.createICYMIStyles((marginHorizontal) => {
  const obj = { container: { marginHorizontal: marginHorizontal.margin, marginBottom: marginHorizontal.margin, marginLeft: marginHorizontal.margin + marginHorizontal.inset }, card: { marginTop: nativeDefault.space.PX_12 }, title: { marginBottom: nativeDefault.space.PX_4 }, timeAndUserPillContainer: { flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_8, justifyContent: "space-between" }, separator: size, eventsChannelIcon: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, infoContainer: { gap: nativeDefault.space.PX_4 }, locationContainer: { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 } };
  ({ marginTop: nativeDefault.space.PX_12 });
  ({ marginBottom: nativeDefault.space.PX_4 });
  ({ flexDirection: "row", alignItems: "center", marginBottom: nativeDefault.space.PX_8, justifyContent: "space-between" });
  size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: nativeDefault.space.PX_12 };
  ({ tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
  ({ gap: nativeDefault.space.PX_4 });
  ({ alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8 });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ICYMIGuildEventRow(event) {
  let channel;
  let eventTimeData;
  let guild;
  let items;
  let obj2;
  let tmp12;
  let tmp7;
  let obj = event(576);
  const cResult = obj.c(82);
  event = event.event;
  ({ channel, guild } = event);
  const tmp4 = closure_13();
  const tmp6 = guild(8502)(event, null);
  if (cResult[0] !== event) {
    const tmp9 = closure_7(event);
    cResult[0] = event;
    cResult[1] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  let startTime1;
  const tmp10 = cResult[2];
  if (tmp6 != null) {
    startTime1 = tmp6.startTime;
  }
  if (tmp10 !== startTime1) {
    let toISOStringResult;
    if (tmp6 != null) {
      const startTime = tmp6.startTime;
      toISOStringResult = startTime.toISOString();
    }
    let startTime2;
    if (tmp6 != null) {
      startTime2 = tmp6.startTime;
    }
    cResult[2] = startTime2;
    cResult[3] = toISOStringResult;
    tmp12 = toISOStringResult;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === tmp7) {
    let tmp15;
    if (cResult[5] === tmp12) {
      tmp15 = cResult[6];
    }
    const startDateTimeString = tmp15.startDateTimeString;
    guild(5417)(channel);
    const tmpResult = event(8499);
    const locationFromEvent = tmpResult.getLocationFromEvent(event);
    if (cResult[7] === channel) {
      if (cResult[10] === channel) {
        let tmp25;
        if (cResult[13] !== event) {
          const tmpResult4 = event(8496);
          const nextRecurrenceIdInEvent = tmpResult4.getNextRecurrenceIdInEvent(event);
          cResult[13] = event;
          class M {
            constructor() {
              obj = closure_1(closure_2[16]);
              itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
              obj2 = closure_1(closure_2[16]);
              obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
              feedItemActionedResult = obj2.feedItemActioned(obj1);
              obj4 = closure_0(closure_2[18]);
              transitionToGuildResult = obj4.transitionToGuild(guild.id);
              return;
            }
          }
          cResult[14] = nextRecurrenceIdInEvent;
          tmp25 = nextRecurrenceIdInEvent;
        } else {
          tmp25 = cResult[14];
        }
        if (cResult[15] !== event) {
          class F {
            constructor() {
              obj = closure_1(closure_2[16]);
              itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
              obj2 = closure_1(closure_2[16]);
              obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
              feedItemActionedResult = obj2.feedItemActioned(obj1);
              obj4 = closure_0(closure_2[17]);
              obj6 = { eventId: event.id, event };
              result = obj4.openGuildEventDetails(obj6);
              return;
            }
          }
          cResult[15] = event;
          class M {
            constructor() {
              obj = closure_1(closure_2[16]);
              itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
              obj2 = closure_1(closure_2[16]);
              obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
              feedItemActionedResult = obj2.feedItemActioned(obj1);
              obj4 = closure_0(closure_2[18]);
              transitionToGuildResult = obj4.transitionToGuild(guild.id);
              return;
            }
          }
        } else {
          class F {
            constructor() {
              obj = closure_1(closure_2[16]);
              itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
              obj2 = closure_1(closure_2[16]);
              obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
              feedItemActionedResult = obj2.feedItemActioned(obj1);
              obj4 = closure_0(closure_2[17]);
              obj6 = { eventId: event.id, event };
              result = obj4.openGuildEventDetails(obj6);
              return;
            }
          }
        }
        if (cResult[17] === event.id) {
          class F {
            constructor() {
              obj = closure_1(closure_2[16]);
              itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
              obj2 = closure_1(closure_2[16]);
              obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
              feedItemActionedResult = obj2.feedItemActioned(obj1);
              obj4 = closure_0(closure_2[17]);
              obj6 = { eventId: event.id, event };
              result = obj4.openGuildEventDetails(obj6);
              return;
            }
          }
          let tmp29 = null != event.description;
          if (tmp29) {
            class F {
              constructor() {
                obj = closure_1(closure_2[16]);
                itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                obj2 = closure_1(closure_2[16]);
                obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                feedItemActionedResult = obj2.feedItemActioned(obj1);
                obj4 = closure_0(closure_2[17]);
                obj6 = { eventId: event.id, event };
                result = obj4.openGuildEventDetails(obj6);
                return;
              }
            }
            tmp29 = event.description.length > 0;
          }
          class M {
            constructor() {
              obj = closure_1(closure_2[16]);
              itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
              obj2 = closure_1(closure_2[16]);
              obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
              feedItemActionedResult = obj2.feedItemActioned(obj1);
              obj4 = closure_0(closure_2[18]);
              transitionToGuildResult = obj4.transitionToGuild(guild.id);
              return;
            }
          }
          if (event != null) {
            class F {
              constructor() {
                obj = closure_1(closure_2[16]);
                itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                obj2 = closure_1(closure_2[16]);
                obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                feedItemActionedResult = obj2.feedItemActioned(obj1);
                obj4 = closure_0(closure_2[17]);
                obj6 = { eventId: event.id, event };
                result = obj4.openGuildEventDetails(obj6);
                return;
              }
            }
          }
          if (event != null) {
            class F {
              constructor() {
                obj = closure_1(closure_2[16]);
                itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                obj2 = closure_1(closure_2[16]);
                obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                feedItemActionedResult = obj2.feedItemActioned(obj1);
                obj4 = closure_0(closure_2[17]);
                obj6 = { eventId: event.id, event };
                result = obj4.openGuildEventDetails(obj6);
                return;
              }
            }
          }
          const tmp30Result = tmp30(undefined, undefined, tmp25);
          guild(16742);
          const _Symbol = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            class F {
              constructor() {
                obj = closure_1(closure_2[16]);
                itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                obj2 = closure_1(closure_2[16]);
                obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                feedItemActionedResult = obj2.feedItemActioned(obj1);
                obj4 = closure_0(closure_2[17]);
                obj6 = { eventId: event.id, event };
                result = obj4.openGuildEventDetails(obj6);
                return;
              }
            }
            obj6.string(event(1126).t["6pFsLQ"]);
            class M {
              constructor() {
                obj = closure_1(closure_2[16]);
                itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                obj2 = closure_1(closure_2[16]);
                obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                feedItemActionedResult = obj2.feedItemActioned(obj1);
                obj4 = closure_0(closure_2[18]);
                transitionToGuildResult = obj4.transitionToGuild(guild.id);
                return;
              }
            }
          } else {
            class F {
              constructor() {
                obj = closure_1(closure_2[16]);
                itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                obj2 = closure_1(closure_2[16]);
                obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                feedItemActionedResult = obj2.feedItemActioned(obj1);
                obj4 = closure_0(closure_2[17]);
                obj6 = { eventId: event.id, event };
                result = obj4.openGuildEventDetails(obj6);
                return;
              }
            }
          }
          const id = event.id;
          if (channel != null) {
            class F {
              constructor() {
                obj = closure_1(closure_2[16]);
                itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                obj2 = closure_1(closure_2[16]);
                obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                feedItemActionedResult = obj2.feedItemActioned(obj1);
                obj4 = closure_0(closure_2[17]);
                obj6 = { eventId: event.id, event };
                result = obj4.openGuildEventDetails(obj6);
                return;
              }
            }
          }
          const id2 = guild.id;
          if (cResult[21] !== event.id) {
            class F {
              constructor() {
                obj = closure_1(closure_2[16]);
                itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                obj2 = closure_1(closure_2[16]);
                obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                feedItemActionedResult = obj2.feedItemActioned(obj1);
                obj4 = closure_0(closure_2[17]);
                obj6 = { eventId: event.id, event };
                result = obj4.openGuildEventDetails(obj6);
                return;
              }
            }
            cResult[21] = event.id;
            const extractTimestampResult = obj7.extractTimestamp(event.id);
            class M {
              constructor() {
                obj = closure_1(closure_2[16]);
                itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                obj2 = closure_1(closure_2[16]);
                obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                feedItemActionedResult = obj2.feedItemActioned(obj1);
                obj4 = closure_0(closure_2[18]);
                transitionToGuildResult = obj4.transitionToGuild(guild.id);
                return;
              }
            }
            cResult[22] = extractTimestampResult;
          } else {
            class F {
              constructor() {
                obj = closure_1(closure_2[16]);
                itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                obj2 = closure_1(closure_2[16]);
                obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                feedItemActionedResult = obj2.feedItemActioned(obj1);
                obj4 = closure_0(closure_2[17]);
                obj6 = { eventId: event.id, event };
                result = obj4.openGuildEventDetails(obj6);
                return;
              }
            }
          }
          const container = tmp4.container;
          if (tmp7) {
            class F {
              constructor() {
                obj = closure_1(closure_2[16]);
                itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                obj2 = closure_1(closure_2[16]);
                obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                feedItemActionedResult = obj2.feedItemActioned(obj1);
                obj4 = closure_0(closure_2[17]);
                obj6 = { eventId: event.id, event };
                result = obj4.openGuildEventDetails(obj6);
                return;
              }
            }
          }
          if (cResult[23] === startDateTimeString) {
            class F {
              constructor() {
                obj = closure_1(closure_2[16]);
                itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                obj2 = closure_1(closure_2[16]);
                obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                feedItemActionedResult = obj2.feedItemActioned(obj1);
                obj4 = closure_0(closure_2[17]);
                obj6 = { eventId: event.id, event };
                result = obj4.openGuildEventDetails(obj6);
                return;
              }
            }
            if (cResult[26] === tmp4.timeAndUserPillContainer) {
              class F {
                constructor() {
                  obj = closure_1(closure_2[16]);
                  itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                  obj2 = closure_1(closure_2[16]);
                  obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                  feedItemActionedResult = obj2.feedItemActioned(obj1);
                  obj4 = closure_0(closure_2[17]);
                  obj6 = { eventId: event.id, event };
                  result = obj4.openGuildEventDetails(obj6);
                  return;
                }
              }
              if (tmp29) {
                class F {
                  constructor() {
                    obj = closure_1(closure_2[16]);
                    itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                    obj2 = closure_1(closure_2[16]);
                    obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                    feedItemActionedResult = obj2.feedItemActioned(obj1);
                    obj4 = closure_0(closure_2[17]);
                    obj6 = { eventId: event.id, event };
                    result = obj4.openGuildEventDetails(obj6);
                    return;
                  }
                }
              }
              if (cResult[29] === event.name) {
                class F {
                  constructor() {
                    obj = closure_1(closure_2[16]);
                    itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                    obj2 = closure_1(closure_2[16]);
                    obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                    feedItemActionedResult = obj2.feedItemActioned(obj1);
                    obj4 = closure_0(closure_2[17]);
                    obj6 = { eventId: event.id, event };
                    result = obj4.openGuildEventDetails(obj6);
                    return;
                  }
                }
                if (cResult[32] === event.description) {
                  class F {
                    constructor() {
                      obj = closure_1(closure_2[16]);
                      itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                      obj2 = closure_1(closure_2[16]);
                      obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                      feedItemActionedResult = obj2.feedItemActioned(obj1);
                      obj4 = closure_0(closure_2[17]);
                      obj6 = { eventId: event.id, event };
                      result = obj4.openGuildEventDetails(obj6);
                      return;
                    }
                  }
                  if (cResult[35] !== tmp4.separator) {
                    class F {
                      constructor() {
                        obj = closure_1(closure_2[16]);
                        itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                        obj2 = closure_1(closure_2[16]);
                        obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                        obj4 = closure_0(closure_2[17]);
                        obj6 = { eventId: event.id, event };
                        result = obj4.openGuildEventDetails(obj6);
                        return;
                      }
                    }
                    let obj3 = { style: tmp4.separator };
                    class M {
                      constructor() {
                        obj = closure_1(closure_2[16]);
                        itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                        obj2 = closure_1(closure_2[16]);
                        obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                        obj4 = closure_0(closure_2[18]);
                        transitionToGuildResult = obj4.transitionToGuild(guild.id);
                        return;
                      }
                    }
                    cResult[35] = tmp4.separator;
                    cResult[36] = tmp57;
                  } else {
                    class F {
                      constructor() {
                        obj = closure_1(closure_2[16]);
                        itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                        obj2 = closure_1(closure_2[16]);
                        obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                        obj4 = closure_0(closure_2[17]);
                        obj6 = { eventId: event.id, event };
                        result = obj4.openGuildEventDetails(obj6);
                        return;
                      }
                    }
                  }
                  const infoContainer = tmp4.infoContainer;
                  const tmp58 = closure_5;
                  class M {
                    constructor() {
                      obj = closure_1(closure_2[16]);
                      itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                      obj2 = closure_1(closure_2[16]);
                      obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                      feedItemActionedResult = obj2.feedItemActioned(obj1);
                      obj4 = closure_0(closure_2[18]);
                      transitionToGuildResult = obj4.transitionToGuild(guild.id);
                      return;
                    }
                  }
                  if (cResult[37] !== tmp4.eventsChannelIcon) {
                    class F {
                      constructor() {
                        obj = closure_1(closure_2[16]);
                        itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                        obj2 = closure_1(closure_2[16]);
                        obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                        obj4 = closure_0(closure_2[17]);
                        obj6 = { eventId: event.id, event };
                        result = obj4.openGuildEventDetails(obj6);
                        return;
                      }
                    }
                    let obj4 = { size: "xs", style: tmp4.eventsChannelIcon };
                    const tmp61 = closure_11(event(8192).GroupIcon, obj4);
                    class M {
                      constructor() {
                        obj = closure_1(closure_2[16]);
                        itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                        obj2 = closure_1(closure_2[16]);
                        obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                        obj4 = closure_0(closure_2[18]);
                        transitionToGuildResult = obj4.transitionToGuild(guild.id);
                        return;
                      }
                    }
                    cResult[37] = tmp4.eventsChannelIcon;
                    cResult[38] = tmp61;
                  } else {
                    class F {
                      constructor() {
                        obj = closure_1(closure_2[16]);
                        itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                        obj2 = closure_1(closure_2[16]);
                        obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                        obj4 = closure_0(closure_2[17]);
                        obj6 = { eventId: event.id, event };
                        result = obj4.openGuildEventDetails(obj6);
                        return;
                      }
                    }
                  }
                  if (cResult[39] !== tmp30Result) {
                    class F {
                      constructor() {
                        obj = closure_1(closure_2[16]);
                        itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                        obj2 = closure_1(closure_2[16]);
                        obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                        obj4 = closure_0(closure_2[17]);
                        obj6 = { eventId: event.id, event };
                        result = obj4.openGuildEventDetails(obj6);
                        return;
                      }
                    }
                    const format = tmp63.format;
                    let obj5 = { count: tmp30Result };
                    class M {
                      constructor() {
                        obj = closure_1(closure_2[16]);
                        itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                        obj2 = closure_1(closure_2[16]);
                        obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                        obj4 = closure_0(closure_2[18]);
                        transitionToGuildResult = obj4.transitionToGuild(guild.id);
                        return;
                      }
                    }
                    cResult[39] = tmp30Result;
                    cResult[40] = tmp64;
                  } else {
                    class F {
                      constructor() {
                        obj = closure_1(closure_2[16]);
                        itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                        obj2 = closure_1(closure_2[16]);
                        obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                        obj4 = closure_0(closure_2[17]);
                        obj6 = { eventId: event.id, event };
                        result = obj4.openGuildEventDetails(obj6);
                        return;
                      }
                    }
                  }
                  if (cResult[41] !== tmp62) {
                    class F {
                      constructor() {
                        obj = closure_1(closure_2[16]);
                        itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                        obj2 = closure_1(closure_2[16]);
                        obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                        obj4 = closure_0(closure_2[17]);
                        obj6 = { eventId: event.id, event };
                        result = obj4.openGuildEventDetails(obj6);
                        return;
                      }
                    }
                    const obj8 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted", children: tmp62 };
                    const tmp66 = closure_11(event(5086).Text, obj8);
                    class M {
                      constructor() {
                        obj = closure_1(closure_2[16]);
                        itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                        obj2 = closure_1(closure_2[16]);
                        obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                        obj4 = closure_0(closure_2[18]);
                        transitionToGuildResult = obj4.transitionToGuild(guild.id);
                        return;
                      }
                    }
                    cResult[41] = tmp62;
                    cResult[42] = tmp66;
                  } else {
                    class F {
                      constructor() {
                        obj = closure_1(closure_2[16]);
                        itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                        obj2 = closure_1(closure_2[16]);
                        obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                        obj4 = closure_0(closure_2[17]);
                        obj6 = { eventId: event.id, event };
                        result = obj4.openGuildEventDetails(obj6);
                        return;
                      }
                    }
                  }
                  if (cResult[43] === tmp4.locationContainer) {
                    class F {
                      constructor() {
                        obj = closure_1(closure_2[16]);
                        itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                        obj2 = closure_1(closure_2[16]);
                        obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                        feedItemActionedResult = obj2.feedItemActioned(obj1);
                        obj4 = closure_0(closure_2[17]);
                        obj6 = { eventId: event.id, event };
                        result = obj4.openGuildEventDetails(obj6);
                        return;
                      }
                    }
                  }
                  const obj9 = { style: tmp59, children: items };
                  items = [tmp60, tmp65];
                  cResult[43] = tmp4.locationContainer;
                  cResult[44] = tmp60;
                  cResult[45] = tmp65;
                  cResult[46] = closure_12(tmp58, obj9);
                  const tmp69 = closure_12(tmp58, obj9);
                }
                let tmp54 = null != event.description;
                if (tmp54) {
                  class F {
                    constructor() {
                      obj = closure_1(closure_2[16]);
                      itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                      obj2 = closure_1(closure_2[16]);
                      obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
                      feedItemActionedResult = obj2.feedItemActioned(obj1);
                      obj4 = closure_0(closure_2[17]);
                      obj6 = { eventId: event.id, event };
                      result = obj4.openGuildEventDetails(obj6);
                      return;
                    }
                  }
                  tmp54 = event.description.length > 0;
                }
                class M {
                  constructor() {
                    obj = closure_1(closure_2[16]);
                    itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                    obj2 = closure_1(closure_2[16]);
                    obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                    feedItemActionedResult = obj2.feedItemActioned(obj1);
                    obj4 = closure_0(closure_2[18]);
                    transitionToGuildResult = obj4.transitionToGuild(guild.id);
                    return;
                  }
                }
                cResult[32] = event.description;
                cResult[33] = guild.id;
                cResult[34] = tmp54;
              }
              class M {
                constructor() {
                  obj = closure_1(closure_2[16]);
                  itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                  obj2 = closure_1(closure_2[16]);
                  obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                  feedItemActionedResult = obj2.feedItemActioned(obj1);
                  obj4 = closure_0(closure_2[18]);
                  transitionToGuildResult = obj4.transitionToGuild(guild.id);
                  return;
                }
              }
              tmp51[0] = tmp29;
              tmp51[2] = event.name;
              cResult[29] = event.name;
              cResult[30] = tmp29;
              cResult[31] = closure_11(event(5086).Text, tmp51);
              const tmp52 = closure_11(event(5086).Text, tmp51);
            }
            class M {
              constructor() {
                obj = closure_1(closure_2[16]);
                itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
                obj2 = closure_1(closure_2[16]);
                obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
                feedItemActionedResult = obj2.feedItemActioned(obj1);
                obj4 = closure_0(closure_2[18]);
                transitionToGuildResult = obj4.transitionToGuild(guild.id);
                return;
              }
            }
            tmp47[0] = tmp4.timeAndUserPillContainer;
            tmp47[1] = tmp41;
            cResult[26] = tmp4.timeAndUserPillContainer;
            cResult[27] = tmp41;
            cResult[28] = closure_11(closure_5, tmp47);
            const tmp48 = closure_11(closure_5, tmp47);
          }
          const obj10 = { variant: "text-sm/semibold", color: "text-brand", children: startDateTimeString };
          cResult[23] = startDateTimeString;
          cResult[24] = "text-brand";
          cResult[25] = closure_11(event(5086).Text, obj10);
          const tmp43 = closure_11(event(5086).Text, obj10);
        }
        class M {
          constructor() {
            obj = closure_1(closure_2[16]);
            itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
            obj2 = closure_1(closure_2[16]);
            obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
            feedItemActionedResult = obj2.feedItemActioned(obj1);
            obj4 = closure_0(closure_2[18]);
            transitionToGuildResult = obj4.transitionToGuild(guild.id);
            return;
          }
        }
        cResult[17] = event.id;
        cResult[18] = guild.id;
        cResult[19] = M;
      }
      event(8624);
      cResult[10] = channel;
      cResult[11] = event;
      cResult[12] = tmp24;
    }
    const tmpResult6 = event(8624);
    const eventLocationIconSource = tmpResult6.getEventLocationIconSource(event, channel, true);
    cResult[7] = channel;
    cResult[8] = event;
    cResult[9] = eventLocationIconSource;
  }
  if (tmp7) {
    class F {
      constructor() {
        obj = closure_1(closure_2[16]);
        itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
        obj2 = closure_1(closure_2[16]);
        obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
        feedItemActionedResult = obj2.feedItemActioned(obj1);
        obj4 = closure_0(closure_2[17]);
        obj6 = { eventId: event.id, event };
        result = obj4.openGuildEventDetails(obj6);
        return;
      }
    }
    const intl = tmp(1126).intl;
    tmp17[0] = intl.string(event(1126).t.TxqPQR);
    class M {
      constructor() {
        obj = closure_1(closure_2[16]);
        itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
        obj2 = closure_1(closure_2[16]);
        obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
        feedItemActionedResult = obj2.feedItemActioned(obj1);
        obj4 = closure_0(closure_2[18]);
        transitionToGuildResult = obj4.transitionToGuild(guild.id);
        return;
      }
    }
  } else {
    class F {
      constructor() {
        obj = closure_1(closure_2[16]);
        itemInteractedResult = obj.itemInteracted(event.id, "guild_event", "press_event");
        obj2 = closure_1(closure_2[16]);
        obj1 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
        feedItemActionedResult = obj2.feedItemActioned(obj1);
        obj4 = closure_0(closure_2[17]);
        obj6 = { eventId: event.id, event };
        result = obj4.openGuildEventDetails(obj6);
        return;
      }
    }
    eventTimeData = obj2.getEventTimeData(tmp12);
  }
  cResult[4] = tmp7;
  cResult[5] = tmp12;
  cResult[6] = eventTimeData;
  tmp15 = eventTimeData;
}) : (function ICYMIGuildEventRow(event) {
  let Text;
  let c3;
  let channel;
  let closure_2;
  let guild;
  let id1;
  let intl;
  let intl2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj10;
  let obj6;
  let str;
  let tmp19Result2;
  let tmp23;
  let tmp2Result4;
  let tmp8Result;
  event = event.event;
  ({ channel, guild } = event);
  react = undefined;
  const tmp = closure_13();
  const tmp4 = guild(8502)(event, null);
  const tmp5 = closure_7(event);
  dependencyMap = tmp5;
  let toISOStringResult;
  if (tmp4 != null) {
    const startTime = tmp4.startTime;
    toISOStringResult = startTime.toISOString();
  }
  react = toISOStringResult;
  const items = [toISOStringResult, tmp5];
  const startDateTimeString = react.useMemo(() => {
    let eventTimeData;
    let intl;
    if (closure_2) {
      const obj = { startDateTimeString: intl.string(intl3.t.TxqPQR) };
      intl = tmp(1126).intl;
      eventTimeData = obj;
    } else {
      const tmpResult = ScheduleUtils;
      eventTimeData = tmpResult.getEventTimeData(c3);
    }
    return eventTimeData;
  }, items).startDateTimeString;
  const tmp7 = guild(5417)(channel);
  let obj = event(8499);
  const locationFromEvent = obj.getLocationFromEvent(event);
  let obj2 = event(8624);
  const eventLocationIconSource = obj2.getEventLocationIconSource(event, channel, true);
  let obj3 = event(8624);
  const eventLocationIconComponent = obj3.getEventLocationIconComponent(event, channel, true);
  let obj4 = event(8496);
  const items1 = [event];
  const nextRecurrenceIdInEvent = obj4.getNextRecurrenceIdInEvent(event);
  const items2 = [guild.id, event.id];
  const callback = react.useCallback(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(event.id, "guild_event", "press_event");
    const obj2 = ICYMIActionCreatorsDefault;
    const obj3 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_body", actionIntentType: "navigate", actionDestinationType: "event" } };
    obj2.feedItemActioned(obj3);
    const obj4 = GuildScheduledEventModalActionCreators;
    const obj5 = { eventId: event.id, event };
    const result = obj4.openGuildEventDetails(obj5);
  }, items1);
  const callback1 = react.useCallback(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(event.id, "guild_event", "press_event");
    const obj2 = ICYMIActionCreatorsDefault;
    const obj3 = { itemId: event.id, itemType: "guild_event", actionParameters: { actionGestureType: "press", actionTargetElement: "item_header", actionIntentType: "navigate", actionDestinationType: "guild" } };
    obj2.feedItemActioned(obj3);
    const obj4 = transitionToGuild;
    obj4.transitionToGuild(guild.id);
  }, items2);
  let title = null != event.description && event.description.length > 0;
  let guild_id;
  const tmp2Result = guild(8492);
  if (event != null) {
    guild_id = event.guild_id;
  }
  let id;
  if (event != null) {
    id = event.id;
  }
  let obj5 = { actionLabel: intl.string(event(1126).t["6pFsLQ"]), id: event.id, interactionType: "guild_event", channelId: id1, guildId: guild.id, timestamp: tmp2Result4.extractTimestamp(event.id), onHeaderPress: callback1, onHeaderLongPress: callback1, children: closure_12(tmp23, obj6) };
  const tmp2ResultResult = tmp2Result(guild_id, id, nextRecurrenceIdInEvent);
  const tmp2Result3 = guild(16742);
  intl = tmp8(1126).intl;
  id1 = undefined;
  if (channel != null) {
    id1 = channel.id;
  }
  obj6 = { onPress: callback, style: tmp.container, children: items3 };
  tmp2Result4 = guild(11);
  const obj7 = { style: tmp.timeAndUserPillContainer, children: closure_11(Text, { variant: "text-sm/semibold", color: str, children: startDateTimeString }) };
  str = "text-brand";
  Text = tmp8(5086).Text;
  tmp23 = closure_4;
  if (tmp5) {
    str = "status-positive";
  }
  items3 = [closure_11(closure_5, obj7), , , , ];
  const Text2 = tmp8(5086).Text;
  if (title) {
    title = tmp.title;
  }
  const obj8 = { style: title, variant: "text-lg/semibold", children: event.name };
  items3[1] = closure_11(Text2, obj8);
  let tmp19Result = null != event.description && event.description.length > 0;
  if (tmp19Result) {
    const obj9 = { variant: "text-md/normal", color: "text-subtle", lineClamp: 5, children: tmp8Result.guildEventDetailsParser(event.description, true, obj10) };
    const Text3 = tmp8(5086).Text;
    obj10 = { guildId: guild.id };
    tmp8Result = event(8625);
    tmp19Result = tmp19(Text3, obj9);
  }
  items3[2] = tmp19Result;
  const obj11 = { style: tmp.separator };
  items3[3] = closure_11(closure_5, obj11);
  const obj13 = { style: tmp.locationContainer, children: items4 };
  items4 = [, ];
  const obj12 = { style: tmp.infoContainer, children: items5 };
  const obj14 = { size: "xs", style: tmp.eventsChannelIcon };
  items4[0] = closure_11(event(8192).GroupIcon, obj14);
  const obj15 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted", children: intl2.format(event(1126).t["+DLsD8"], { count: tmp2ResultResult }) };
  const Text4 = tmp8(5086).Text;
  intl2 = tmp8(1126).intl;
  items4[1] = closure_11(Text4, obj15);
  items5 = [closure_12(closure_5, obj13), ];
  const obj16 = { style: tmp.locationContainer, children: items6 };
  if (null != eventLocationIconComponent) {
    const obj17 = { size: "xs", style: tmp.eventsChannelIcon };
    tmp19Result2 = tmp19(eventLocationIconComponent, obj17);
  } else {
    tmp19Result2 = null != eventLocationIconSource;
    if (tmp19Result2) {
      const obj18 = { source: eventLocationIconSource, size: event(1200).Icon.Sizes.EXTRA_SMALL, style: tmp.eventsChannelIcon, disableColor: true };
      const Icon = tmp8(1200).Icon;
      tmp19Result2 = tmp19(Icon, obj18);
    }
  }
  items6 = [tmp19Result2, ];
  let tmp27 = tmp7;
  const Text5 = tmp8(5086).Text;
  if (tmp7 == null) {
    let result = null;
    if (null != locationFromEvent) {
      const tmp8Result2 = event(8625);
      result = tmp8Result2.guildEventLocationParser(locationFromEvent, true);
    }
    tmp27 = result;
  }
  items6[1] = closure_11(Text5, { lineClamp: 2, variant: "text-xs/normal", color: "text-muted", children: tmp27 });
  items5[1] = closure_12(closure_5, obj16);
  items3[4] = closure_12(closure_5, obj12);
  return closure_11(tmp2Result3, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ICYMIGuildEventRowWrapper(eventId) {
  let first;
  let tmp12;
  let tmp15;
  let tmp19;
  let tmp6;
  let tmp8;
  const obj = eventId(576);
  const cResult = obj.c(13);
  eventId = eventId.eventId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildScheduledEventStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== eventId) {
    const fn = function l() {
      return GuildScheduledEventStore.getGuildScheduledEvent(eventId);
    };
    cResult[1] = eventId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = eventId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  let guild_id;
  const tmp10 = cResult[4];
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (tmp10 !== guild_id) {
    let guild_id1;
    if (stateFromStores != null) {
      guild_id1 = stateFromStores.guild_id;
    }
    const fn2 = function h() {
      let guild_id;
      const getGuild = GuildStore.getGuild;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      return getGuild(guild_id);
    };
    cResult[4] = guild_id1;
    cResult[5] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
  }
  const tmpResult3 = eventId(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp12);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChannelStore];
    cResult[6] = items2;
    tmp15 = items2;
  } else {
    tmp15 = cResult[6];
  }
  let channel_id;
  const tmp17 = cResult[7];
  if (stateFromStores != null) {
    channel_id = stateFromStores.channel_id;
  }
  if (tmp17 !== channel_id) {
    let channel_id1;
    if (stateFromStores != null) {
      channel_id1 = stateFromStores.channel_id;
    }
    const fn3 = function x() {
      let channel_id;
      const getChannel = ChannelStore.getChannel;
      if (stateFromStores != null) {
        channel_id = stateFromStores.channel_id;
      }
      return getChannel(channel_id);
    };
    cResult[7] = channel_id1;
    cResult[8] = fn3;
    tmp19 = fn3;
  } else {
    tmp19 = cResult[8];
  }
  const tmpResult4 = eventId(504);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp15, tmp19);
  let tmp22 = null;
  if (null != stateFromStores) {
    tmp22 = null;
    if (null != stateFromStores1) {
      tmp22 = null;
      if (!closure_6(stateFromStores)) {
        if (cResult[9] === stateFromStores2) {
          if (cResult[10] === stateFromStores) {
            let tmp24;
            if (cResult[11] === stateFromStores1) {
              tmp24 = cResult[12];
            }
            tmp22 = tmp24;
          }
        }
        const obj2 = { event: stateFromStores, channel: stateFromStores2, guild: stateFromStores1 };
        const tmp27 = closure_11(closure_14, obj2);
        cResult[9] = stateFromStores2;
        cResult[10] = stateFromStores;
        cResult[11] = stateFromStores1;
        cResult[12] = tmp27;
        tmp24 = tmp27;
      }
    }
  }
  return tmp22;
}) : (function ICYMIGuildEventRowWrapper(eventId) {
  eventId = eventId.eventId;
  const items = [GuildScheduledEventStore];
  const obj = eventId(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildScheduledEventStore.getGuildScheduledEvent(eventId));
  const items1 = [GuildStore];
  const obj2 = eventId(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return getGuild(guild_id);
  });
  eventId(504);
  [][0] = ChannelStore;
  let tmp5 = null;
  if (null != stateFromStores) {
    tmp5 = null;
    if (null != stateFromStores1) {
      tmp5 = null;
      if (!closure_6(stateFromStores)) {
        const obj3 = { event: stateFromStores, channel: tmp4, guild: stateFromStores1 };
        tmp5 = closure_11(closure_14, obj3);
      }
    }
  }
  return tmp5;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIGuildEventRow.tsx");

export default tmp5;
