// Module ID: 8365
// Function ID: 66660
// Name: openCreateOrEditGuildEventModal
// Dependencies: [5, 31, 1348, 1907, 1838, 3758, 6758, 1354, 8354, 653, 33, 4337, 44, 8366, 1934, 4098, 8399, 8453, 8469, 8478, 4472, 8344, 3831, 1212, 8479, 8460, 8350, 8480, 8362, 5492, 3830, 8481, 7460, 8353, 8351, 8346, 12198, 7600, 3803, 5491, 1450, 12199, 5497, 2]
// Exports: closeGuildEventListActionSheet, openGuildEventListActionSheet, openShareEvent, showGuildEventModeratorActionSheet, transitionToEventDetailsFromInvite

// Module 8365 (openCreateOrEditGuildEventModal)
import closure_3 from "_isNativeReflectConstruct";
import showInstantInviteActionSheet from "showInstantInviteActionSheet";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { GuildScheduledEventUserResponses as closure_12 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import CREATE_GUILD_EVENT_MODAL_KEY from "CREATE_GUILD_EVENT_MODAL_KEY";
import ME from "ME";
import { jsx } from "openGuildEventDetails";

let closure_10;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_9;
const require = arg1;
function openCreateOrEditGuildEventModal(guild, arg1) {
  let guildEvent;
  let recurrenceId;
  let require;
  ({ guildEvent, onClose: require, recurrenceId } = arg1);
  function handleClose() {
    outer1_1(outer1_2[11]).popWithKey(outer1_13);
    if (null != callback) {
      callback();
    }
  }
  if (null != recurrenceId) {
    importDefault(44)(null != guildEvent, "recurrence editing requires a guild event");
    let obj = importDefault(4337);
    obj = { guildEvent, recurrenceId, onCloseModal: handleClose };
    obj.pushLazy(require(1934) /* maybeLoadBundle */(8366, dependencyMap.paths), obj, closure_13);
  } else {
    importDefault(4098).hideAllActionSheets();
    const obj3 = importDefault(4098);
    obj = { guild, targetChannel: tmp, initialGuildEvent: guildEvent, onCloseModal: handleClose };
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(8399, dependencyMap.paths), obj, closure_13);
    const obj4 = importDefault(4337);
  }
}
function openStartGuildEventModal(event, recurrenceId, onCloseActionSheet) {
  let obj = importDefault(4098);
  obj.hideAllActionSheets();
  obj = { event, recurrenceId, onCloseActionSheet };
  importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(8469, dependencyMap.paths), obj, closure_15);
}
function openDeleteGuildEventActionSheet(eventId, guildId, recurrenceId) {
  let obj = require(4472) /* useAlertStore */;
  obj = { eventId, guildId, recurrenceId };
  obj.openAlert("DeleteEventAlert", jsx(React.lazy(() => outer1_0(outer1_2[14])(outer1_2[19], outer1_2.paths)), { eventId, guildId, recurrenceId }));
}
function updateRsvp(arg0, arg1, arg2, arg3) {
  let closure_0 = arg3;
  importDefault(8344).updateRsvp(arg0, arg1, arg2, arg3, (arg0) => {
    let tmp2 = tmp;
    if (null == arg0) {
      tmp2 = callback === outer1_12.INTERESTED;
    }
    if (tmp2) {
      let openResult = outer1_1(outer1_2[22]);
      openResult = {};
      let str = "GUILD_EVENT_INTERESTED_NOTIFICATION";
      if (tmp) {
        str = "ERROR_OCCURRED_TRY_AGAIN";
      }
      openResult.key = str;
      const intl = callback(outer1_2[23]).intl;
      const string = intl.string;
      const t = callback(outer1_2[23]).t;
      if (tmp) {
        let stringResult = string(t.fEptJP);
      } else {
        stringResult = string(t.osvXlf);
      }
      openResult.content = stringResult;
      if (tmp) {
        let tmp12 = tmp11[24];
      } else {
        tmp12 = tmp11[25];
      }
      openResult.icon = outer1_1(tmp12);
      openResult = openResult.open(openResult);
      const tmp10 = outer1_1;
    }
  });
}
function handleGuildScheduledEventRsvp(id, closure_1, guild_id) {
  const _require = id;
  closure_1 = guild_id;
  const dependencyMap = arg3;
  let obj = _require(8350);
  obj = {
    eventId: id,
    recurrenceId: closure_1,
    guildId: guild_id,
    updateRsvp(arg0, arg1, arg2, arg3) {
      outer1_23(closure_0, arg1, closure_1, arg3);
    },
    openRsvpPicker(guildScheduledEvent, recurrenceId) {
      let obj = guild_id(paths[15]);
      obj = { event: guildScheduledEvent, recurrenceId, guildId: guild_id, onRsvp: paths };
      obj.openLazy(id(paths[14])(paths[27], paths.paths), "GuildEventRsvpPickerActionSheet", obj, "stack");
    },
    onRsvp: arg3
  };
  obj.handleRsvp(obj);
}
function _transitionToEventDetailsFromInvite() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ isGuildEventEnded: closure_9, isGuildScheduledEventActive: closure_10 } = _isNativeReflectConstruct);
({ CREATE_GUILD_EVENT_MODAL_KEY: closure_13, GUILD_EVENTS_LIST_ACTION_SHEET_KEY: closure_14, START_EVENT_MODAL_KEY: closure_15 } = CREATE_GUILD_EVENT_MODAL_KEY);
({ InstantInviteSources: closure_16, Permissions: closure_17, Routes: closure_18 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_scheduled_events/native/GuildScheduledEventModalActionCreators.tsx");

export { openCreateOrEditGuildEventModal };
export const openGuildEventListActionSheet = function openGuildEventListActionSheet(outer1_0) {
  let obj = importDefault(4098);
  obj = { guild: outer1_0 };
  obj.openLazy(require(1934) /* maybeLoadBundle */(8453, dependencyMap.paths), closure_14, obj);
};
export const closeGuildEventListActionSheet = function closeGuildEventListActionSheet() {
  importDefault(4098).hideActionSheet(closure_14);
};
export { openStartGuildEventModal };
export { openDeleteGuildEventActionSheet };
export { updateRsvp };
export { handleGuildScheduledEventRsvp };
export const openShareEvent = function openShareEvent(event, arg1) {
  channel = channel.getChannel(event.channel_id);
  if (null == channel) {
    channel = defaultChannel.getDefaultChannel(event.guild_id);
  }
  if (null != channel) {
    let obj = require(8362) /* canEveryoneRoleViewEvent */;
    const result = obj.isGuildEventInvitable(event);
    if (result) {
      const guild = store.getGuild(event.guild_id);
      let vanityURLCode;
      if (null != guild) {
        vanityURLCode = guild.vanityURLCode;
      }
      if (null != vanityURLCode) {
        if ("" !== guild.vanityURLCode) {
          if (!closure_8.can(constants2.CREATE_INSTANT_INVITE, channel)) {
            const obj4 = require(8481) /* showInstantInviteActionSheet */;
            obj = { guildScheduledEventId: event.id, stackingBehavior: "stack" };
            const result1 = obj4.showVanityUrlInviteActionSheet(guild, channel, constants.GUILD_SCHEDULED_EVENT, obj);
          }
        }
      }
      obj = { createInvite: result, guildScheduledEventId: event.id, stackingBehavior: "stack", source: constants.GUILD_SCHEDULED_EVENT };
      const result2 = require(8481) /* showInstantInviteActionSheet */.showInstantInviteActionSheet(channel, obj);
      const obj6 = require(8481) /* showInstantInviteActionSheet */;
    } else {
      let tmp6 = null != arg1;
      if (tmp6) {
        tmp6 = "" !== arg1;
      }
      if (tmp6) {
        let obj1 = require(5492) /* _copy */;
        obj1.copy(arg1);
        require(3830) /* presentAddedFriendToast */.presentLinkCopied();
        const obj3 = require(3830) /* presentAddedFriendToast */;
      }
    }
  } else {
    obj1 = { key: "ERROR_OCCURRED_TRY_AGAIN" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj1.content = intl.string(require(1212) /* getSystemLocale */.t.fEptJP);
    obj1.icon = importDefault(8479);
    importDefault(3831).open(obj1);
    const obj8 = importDefault(3831);
  }
};
export const transitionToEventDetailsFromInvite = function transitionToEventDetailsFromInvite() {
  return _transitionToEventDetailsFromInvite(...arguments);
};
export const showGuildEventModeratorActionSheet = function showGuildEventModeratorActionSheet(event, closure_3, recurrenceId) {
  const _require = event;
  const importDefault = recurrenceId;
  const guild_id = event.guild_id;
  const guild = store.getGuild(guild_id);
  let result = interestedInEventRecurrence.isInterestedInEventRecurrence(event.id, recurrenceId);
  let obj = _require(guild_id[34]);
  const eventException = obj.getEventException(recurrenceId, event.id);
  let is_canceled;
  if (null != eventException) {
    is_canceled = eventException.is_canceled;
  }
  const tmp6 = callback3(event);
  let obj1 = _require(guild_id[35]);
  const withinStartWindow = obj1.getEventTimeData(event.scheduled_start_time).withinStartWindow;
  const items = [];
  let tmp7 = null;
  if (!tmp6) {
    tmp7 = null;
    if (!tmp5) {
      obj = {};
      const intl = _require(guild_id[23]).intl;
      const string = intl.string;
      if (result) {
        let stringResult = string(_7M5gaN);
      } else {
        stringResult = string(_7M5gaN.FXixvH);
      }
      obj.label = stringResult;
      obj.onPress = function onPress() {
        outer1_24(event.id, closure_1, guild_id);
      };
    }
  }
  if (null != guild) {
    if (closure_3) {
      if (!callback2(event)) {
        if (!tmp6) {
          if (withinStartWindow) {
            if (!result) {
              if (null != tmp7) {
                items.push(tmp7);
              }
            }
          }
          if (!tmp5) {
            obj = {};
            const intl2 = _require(guild_id[23]).intl;
            obj.label = intl2.string(_require(guild_id[23]).t.cK1GGY);
            obj.onPress = function onPress() {
              outer1_21(closure_0, closure_1);
            };
            items.push(obj);
          }
        }
        if (!tmp17) {
          items.push(tmp7);
        }
        if (!tmp19) {
          obj1 = {};
          const intl3 = _require(guild_id[23]).intl;
          obj1.label = intl3.string(_require(guild_id[23]).t.wmVmXN);
          obj1.onPress = function onPress() {
            outer1_20(guild, { guildEvent: closure_0, recurrenceId: closure_1 });
          };
          items.push(obj1);
        }
        if (tmp5) {
          if (tmp6) {
            const obj2 = {};
            const intl10 = _require(guild_id[23]).intl;
            obj2.label = intl10.string(_require(guild_id[23]).t.qaYzPA);
            obj2.isDestructive = true;
            obj2.onPress = function onPress() {
              callback(guild_id[21]).endEvent(event.id, event.guild_id);
            };
            items.push(obj2);
          } else {
            if (null != recurrenceId) {
              if (null != eventException) {
                if (eventException.is_canceled) {
                  const obj3 = {};
                  const intl7 = _require(guild_id[23]).intl;
                  obj3.label = intl7.string(_require(guild_id[23]).t.b8606G);
                  obj3.onPress = function onPress() {
                    callback(guild_id[36])(eventException, guild.id, event.id, callback);
                  };
                  items.push(obj3);
                }
              }
              const obj4 = {};
              const intl6 = _require(guild_id[23]).intl;
              obj4.label = intl6.string(_require(guild_id[23]).t.tqClly);
              obj4.isDestructive = true;
              obj4.onPress = function onPress() {
                outer1_22(event.id, event.guild_id, closure_1);
              };
              items.push(obj4);
            }
            const obj5 = {};
            if (null != event.recurrence_rule) {
              const intl9 = _require(guild_id[23]).intl;
              let stringResult1 = intl9.string(_require(guild_id[23]).t.wr33rW);
            } else {
              const intl8 = _require(guild_id[23]).intl;
              stringResult1 = intl8.string(_require(guild_id[23]).t.B9sJLX);
            }
            obj5.label = stringResult1;
            obj5.isDestructive = true;
            obj5.onPress = function onPress() {
              outer1_22(event.id, event.guild_id, undefined);
            };
            items.push(obj5);
          }
        } else {
          let obj6 = {};
          if (null != recurrenceId) {
            const intl5 = _require(guild_id[23]).intl;
            let stringResult2 = intl5.string(_require(guild_id[23]).t.BW1Qoh);
          } else {
            const intl4 = _require(guild_id[23]).intl;
            stringResult2 = intl4.string(_require(guild_id[23]).t.Rgy2dU);
          }
          obj6.label = stringResult2;
          obj6.onPress = function onPress() {
            outer1_20(guild, { guildEvent: closure_0 });
          };
          obj6 = items.push(obj6);
        }
        tmp17 = !tmp6 && withinStartWindow && !result || null == tmp7;
        tmp19 = null == recurrenceId || tmp5;
      }
      const obj7 = {};
      const intl11 = _require(guild_id[23]).intl;
      obj7.label = intl11.string(_require(guild_id[23]).t.IBA5wX);
      obj7.isDestructive = true;
      obj7.onPress = function onPress() {
        callback(guild_id[15]).hideAllActionSheets();
        const obj = callback(guild_id[15]);
        const result = event(guild_id[37]).showReportModalForGuildScheduledEvent(event);
      };
      items.push(obj7);
      const obj8 = {};
      if (null != event.recurrence_rule) {
        const intl13 = _require(guild_id[23]).intl;
        let stringResult3 = intl13.string(_require(guild_id[23]).t.AYnhB7);
      } else {
        const intl12 = _require(guild_id[23]).intl;
        stringResult3 = intl12.string(_require(guild_id[23]).t["9o+VKx"]);
      }
      obj8.label = stringResult3;
      obj8.onPress = function onPress() {
        event(guild_id[29]).copy("" + location.protocol + "//" + location.host + outer1_18.GUILD_EVENT_DETAILS(guild_id, event.id, null));
      };
      items.push(obj8);
      if (null != recurrenceId) {
        const obj9 = {};
        const intl14 = _require(guild_id[23]).intl;
        obj9.label = intl14.string(_require(guild_id[23]).t.QLtDqP);
        obj9.onPress = function onPress() {
          event(guild_id[29]).copy("" + location.protocol + "//" + location.host + outer1_18.GUILD_EVENT_DETAILS(guild_id, event.id, closure_1));
        };
        items.push(obj9);
      }
      const DeveloperMode = _require(guild_id[38]).DeveloperMode;
      if (DeveloperMode.getSetting()) {
        const obj10 = {};
        const intl15 = _require(guild_id[23]).intl;
        obj10.label = intl15.string(_require(guild_id[23]).t.WZwPO4);
        obj10.onPress = function onPress() {
          event(guild_id[29]).copy(event.id);
        };
        items.push(obj10);
        if (null != recurrenceId) {
          const obj11 = {};
          const intl16 = _require(guild_id[23]).intl;
          obj11.label = intl16.string(_require(guild_id[23]).t.NZRGQo);
          obj11.onPress = function onPress() {
            event(guild_id[29]).copy(closure_1);
          };
          items.push(obj11);
        }
        const obj12 = { location: "showGuildEventModeratorActionSheet" };
        let tidaWebformEnabled = importDefault(guild_id[39]).getCurrentConfig(obj12).tidaWebformEnabled;
        const obj16 = importDefault(guild_id[39]);
        const tmp67 = importDefault(guild_id[41])(event, _require(guild_id[40]).getWindowDimensions().width);
        let closure_5 = tmp67;
        if (tidaWebformEnabled) {
          tidaWebformEnabled = null != tmp67;
        }
        if (tidaWebformEnabled) {
          const obj13 = {};
          const intl17 = _require(guild_id[23]).intl;
          obj13.label = intl17.string(_require(guild_id[23]).t["8xHmxo"]);
          obj13.onPress = function onPress() {
            event(guild_id[29]).copy(closure_5);
            const obj = event(guild_id[29]);
            const result = event(guild_id[30]).presentCopiedToClipboard();
          };
          items.push(obj13);
        }
        const obj18 = _require(guild_id[40]);
      }
      const obj14 = { key: "GuildEvent", stackingBehavior: "stack", options: items, hasIcons: false };
      const result1 = _require(guild_id[42]).showSimpleActionSheet(obj14);
    }
  }
  if (null != tmp7) {
    items.push(tmp7);
  }
};
