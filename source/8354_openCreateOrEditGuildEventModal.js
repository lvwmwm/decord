// Module ID: 8354
// Function ID: 66588
// Name: openCreateOrEditGuildEventModal
// Dependencies: []
// Exports: closeGuildEventListActionSheet, openGuildEventListActionSheet, openShareEvent, showGuildEventModeratorActionSheet, transitionToEventDetailsFromInvite

// Module 8354 (openCreateOrEditGuildEventModal)
function openCreateOrEditGuildEventModal(guild, arg1) {
  let guildEvent;
  let recurrenceId;
  ({ guildEvent, onClose: closure_0, recurrenceId } = arg1);
  function handleClose() {
    callback2(closure_2[11]).popWithKey(closure_13);
    if (null != callback) {
      callback();
    }
  }
  if (null != recurrenceId) {
    importDefault(dependencyMap[12])(null != guildEvent, "recurrence editing requires a guild event");
    let obj = importDefault(dependencyMap[11]);
    obj = { guildEvent, recurrenceId, onCloseModal: handleClose };
    obj.pushLazy(arg1(dependencyMap[14])(dependencyMap[13], dependencyMap.paths), obj, closure_13);
  } else {
    importDefault(dependencyMap[15]).hideAllActionSheets();
    const obj3 = importDefault(dependencyMap[15]);
    obj = { guild, targetChannel: tmp, initialGuildEvent: guildEvent, onCloseModal: handleClose };
    importDefault(dependencyMap[11]).pushLazy(arg1(dependencyMap[14])(dependencyMap[16], dependencyMap.paths), obj, closure_13);
    const obj4 = importDefault(dependencyMap[11]);
  }
}
function openStartGuildEventModal(event, recurrenceId, onCloseActionSheet) {
  let obj = importDefault(dependencyMap[15]);
  obj.hideAllActionSheets();
  obj = { event, recurrenceId, onCloseActionSheet };
  importDefault(dependencyMap[11]).pushLazy(recurrenceId(dependencyMap[14])(dependencyMap[18], dependencyMap.paths), obj, closure_15);
}
function openDeleteGuildEventActionSheet(eventId, guildId, recurrenceId) {
  let obj = guildId(dependencyMap[20]);
  obj = { eventId, guildId, recurrenceId };
  obj.openAlert("DeleteEventAlert", jsx(React.lazy(() => callback(paths[14])(paths[19], paths.paths)), obj));
}
function updateRsvp(arg0, arg1, arg2, arg3) {
  arg1 = arg3;
  importDefault(dependencyMap[21]).updateRsvp(arg0, arg1, arg2, arg3, (arg0) => {
    let tmp2 = tmp;
    if (null == arg0) {
      tmp2 = arg3 === constants.INTERESTED;
    }
    if (tmp2) {
      let openResult = callback(closure_2[22]);
      openResult = {};
      let str = "GUILD_EVENT_INTERESTED_NOTIFICATION";
      if (tmp) {
        str = "ERROR_OCCURRED_TRY_AGAIN";
      }
      openResult.key = str;
      const intl = arg3(closure_2[23]).intl;
      const string = intl.string;
      const t = arg3(closure_2[23]).t;
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
      openResult.icon = callback(tmp12);
      openResult = openResult.open(openResult);
      const tmp10 = callback;
    }
  });
}
function handleGuildScheduledEventRsvp(id, recurrenceId, guild_id) {
  recurrenceId = id;
  const importDefault = guild_id;
  const dependencyMap = arg3;
  let obj = recurrenceId(dependencyMap[26]);
  obj = {
    eventId: id,
    recurrenceId,
    guildId: guild_id,
    updateRsvp(arg0, arg1, arg2, arg3) {
      callback(arg0, arg1, arg2, arg3);
    },
    openRsvpPicker(guildScheduledEvent, recurrenceId) {
      let obj = arg2(arg3[15]);
      obj = { event: guildScheduledEvent, recurrenceId, guildId: arg2, onRsvp: arg3 };
      obj.openLazy(guildScheduledEvent(arg3[14])(arg3[27], arg3.paths), "GuildEventRsvpPickerActionSheet", obj, "stack");
    },
    onRsvp: arg3
  };
  obj.handleRsvp(obj);
}
function _transitionToEventDetailsFromInvite() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _transitionToEventDetailsFromInvite = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ isGuildEventEnded: closure_9, isGuildScheduledEventActive: closure_10 } = arg1(dependencyMap[6]));
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = arg1(dependencyMap[7]).GuildScheduledEventUserResponses;
const tmp2 = arg1(dependencyMap[6]);
({ CREATE_GUILD_EVENT_MODAL_KEY: closure_13, GUILD_EVENTS_LIST_ACTION_SHEET_KEY: closure_14, START_EVENT_MODAL_KEY: closure_15 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
({ InstantInviteSources: closure_16, Permissions: closure_17, Routes: closure_18 } = arg1(dependencyMap[9]));
const jsx = arg1(dependencyMap[10]).jsx;
const tmp4 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[43]).fileFinishedImporting("modules/guild_scheduled_events/native/GuildScheduledEventModalActionCreators.tsx");

export { openCreateOrEditGuildEventModal };
export const openGuildEventListActionSheet = function openGuildEventListActionSheet(closure_0) {
  let obj = importDefault(dependencyMap[15]);
  obj = { guild: closure_0 };
  obj.openLazy(arg1(dependencyMap[14])(dependencyMap[17], dependencyMap.paths), closure_14, obj);
};
export const closeGuildEventListActionSheet = function closeGuildEventListActionSheet() {
  importDefault(dependencyMap[15]).hideActionSheet(closure_14);
};
export { openStartGuildEventModal };
export { openDeleteGuildEventActionSheet };
export { updateRsvp };
export { handleGuildScheduledEventRsvp };
export const openShareEvent = function openShareEvent(event, arg1) {
  let channel = channel.getChannel(event.channel_id);
  if (null == channel) {
    channel = defaultChannel.getDefaultChannel(event.guild_id);
  }
  if (null != channel) {
    let obj = arg1(dependencyMap[28]);
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
            const obj4 = arg1(dependencyMap[31]);
            obj = { guildScheduledEventId: event.id, stackingBehavior: "stack" };
            const result1 = obj4.showVanityUrlInviteActionSheet(guild, channel, constants.GUILD_SCHEDULED_EVENT, obj);
          }
        }
      }
      obj = { createInvite: result, guildScheduledEventId: event.id, stackingBehavior: "stack", source: constants.GUILD_SCHEDULED_EVENT };
      const result2 = arg1(dependencyMap[31]).showInstantInviteActionSheet(channel, obj);
      const obj6 = arg1(dependencyMap[31]);
    } else {
      let tmp6 = null != arg1;
      if (tmp6) {
        tmp6 = "" !== arg1;
      }
      if (tmp6) {
        let obj1 = arg1(dependencyMap[29]);
        obj1.copy(arg1);
        arg1(dependencyMap[30]).presentLinkCopied();
        const obj3 = arg1(dependencyMap[30]);
      }
    }
  } else {
    obj1 = { key: "ERROR_OCCURRED_TRY_AGAIN" };
    const intl = arg1(dependencyMap[23]).intl;
    obj1.content = intl.string(arg1(dependencyMap[23]).t.fEptJP);
    obj1.icon = importDefault(dependencyMap[24]);
    importDefault(dependencyMap[22]).open(obj1);
    const obj8 = importDefault(dependencyMap[22]);
  }
};
export const transitionToEventDetailsFromInvite = function transitionToEventDetailsFromInvite() {
  return _transitionToEventDetailsFromInvite(...arguments);
};
export const showGuildEventModeratorActionSheet = function showGuildEventModeratorActionSheet(event, closure_3, recurrenceId) {
  closure_3 = event;
  const importDefault = recurrenceId;
  const guild_id = event.guild_id;
  const dependencyMap = guild_id;
  const guild = store.getGuild(guild_id);
  closure_3 = guild;
  const result = interestedInEventRecurrence.isInterestedInEventRecurrence(event.id, recurrenceId);
  let obj = closure_3(dependencyMap[34]);
  const eventException = obj.getEventException(recurrenceId, event.id);
  let closure_4 = eventException;
  let is_canceled;
  if (null != eventException) {
    is_canceled = eventException.is_canceled;
  }
  const tmp6 = callback3(event);
  let obj1 = closure_3(dependencyMap[35]);
  const withinStartWindow = obj1.getEventTimeData(event.scheduled_start_time).withinStartWindow;
  const items = [];
  let tmp7 = null;
  if (!tmp6) {
    tmp7 = null;
    if (!tmp5) {
      obj = {};
      const intl = closure_3(dependencyMap[23]).intl;
      const string = intl.string;
      if (result) {
        let stringResult = string(_7M5gaN);
      } else {
        stringResult = string(_7M5gaN.FXixvH);
      }
      obj.label = stringResult;
      obj.onPress = function onPress() {
        callback4(arg0.id, arg2, guild_id);
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
            const intl2 = closure_3(dependencyMap[23]).intl;
            obj.label = intl2.string(closure_3(dependencyMap[23]).t.cK1GGY);
            obj.onPress = function onPress() {
              callback2(arg0, arg2);
            };
            items.push(obj);
          }
        }
        if (!tmp17) {
          items.push(tmp7);
        }
        if (!tmp19) {
          obj1 = {};
          const intl3 = closure_3(dependencyMap[23]).intl;
          obj1.label = intl3.string(closure_3(dependencyMap[23]).t.wmVmXN);
          obj1.onPress = function onPress() {
            callback(guild, { guildEvent: arg0, recurrenceId: arg2 });
          };
          items.push(obj1);
        }
        if (tmp5) {
          if (tmp6) {
            const obj2 = {};
            const intl10 = closure_3(dependencyMap[23]).intl;
            obj2.label = intl10.string(closure_3(dependencyMap[23]).t.qaYzPA);
            obj2.isDestructive = true;
            obj2.onPress = function onPress(self) {
              arg2(guild_id[21]).endEvent(self.id, self.guild_id);
            };
            items.push(obj2);
          } else {
            if (null != recurrenceId) {
              if (null != eventException) {
                if (eventException.is_canceled) {
                  const obj3 = {};
                  const intl7 = closure_3(dependencyMap[23]).intl;
                  obj3.label = intl7.string(closure_3(dependencyMap[23]).t.b8606G);
                  obj3.onPress = function onPress() {
                    arg2(guild_id[36])(eventException, guild.id, arg0.id, arg2);
                  };
                  items.push(obj3);
                }
              }
              const obj4 = {};
              const intl6 = closure_3(dependencyMap[23]).intl;
              obj4.label = intl6.string(closure_3(dependencyMap[23]).t.tqClly);
              obj4.isDestructive = true;
              obj4.onPress = function onPress(self) {
                callback3(self.id, self.guild_id, arg2);
              };
              items.push(obj4);
            }
            const obj5 = {};
            if (null != event.recurrence_rule) {
              const intl9 = closure_3(dependencyMap[23]).intl;
              let stringResult1 = intl9.string(closure_3(dependencyMap[23]).t.wr33rW);
            } else {
              const intl8 = closure_3(dependencyMap[23]).intl;
              stringResult1 = intl8.string(closure_3(dependencyMap[23]).t.B9sJLX);
            }
            obj5.label = stringResult1;
            obj5.isDestructive = true;
            obj5.onPress = function onPress(self) {
              callback3(self.id, self.guild_id, undefined);
            };
            items.push(obj5);
          }
        } else {
          let obj6 = {};
          if (null != recurrenceId) {
            const intl5 = closure_3(dependencyMap[23]).intl;
            let stringResult2 = intl5.string(closure_3(dependencyMap[23]).t.BW1Qoh);
          } else {
            const intl4 = closure_3(dependencyMap[23]).intl;
            stringResult2 = intl4.string(closure_3(dependencyMap[23]).t.Rgy2dU);
          }
          obj6.label = stringResult2;
          obj6.onPress = function onPress() {
            callback(guild, { guildEvent: arg0 });
          };
          obj6 = items.push(obj6);
        }
        const tmp17 = !tmp6 && withinStartWindow && !result || null == tmp7;
        const tmp19 = null == recurrenceId || tmp5;
      }
      const obj7 = {};
      const intl11 = closure_3(dependencyMap[23]).intl;
      obj7.label = intl11.string(closure_3(dependencyMap[23]).t.IBA5wX);
      obj7.isDestructive = true;
      obj7.onPress = function onPress() {
        arg2(guild_id[15]).hideAllActionSheets();
        const obj = arg2(guild_id[15]);
        const result = arg0(guild_id[37]).showReportModalForGuildScheduledEvent(arg0);
      };
      items.push(obj7);
      const obj8 = {};
      if (null != event.recurrence_rule) {
        const intl13 = closure_3(dependencyMap[23]).intl;
        let stringResult3 = intl13.string(closure_3(dependencyMap[23]).t.AYnhB7);
      } else {
        const intl12 = closure_3(dependencyMap[23]).intl;
        stringResult3 = intl12.string(closure_3(dependencyMap[23]).t.9o+VKx);
      }
      obj8.label = stringResult3;
      obj8.onPress = function onPress() {
        arg0(guild_id[29]).copy("" + location.protocol + "//" + location.host + closure_18.GUILD_EVENT_DETAILS(guild_id, arg0.id, null));
      };
      items.push(obj8);
      if (null != recurrenceId) {
        const obj9 = {};
        const intl14 = closure_3(dependencyMap[23]).intl;
        obj9.label = intl14.string(closure_3(dependencyMap[23]).t.QLtDqP);
        obj9.onPress = function onPress() {
          arg0(guild_id[29]).copy("" + location.protocol + "//" + location.host + closure_18.GUILD_EVENT_DETAILS(guild_id, arg0.id, arg2));
        };
        items.push(obj9);
      }
      const DeveloperMode = closure_3(dependencyMap[38]).DeveloperMode;
      if (DeveloperMode.getSetting()) {
        const obj10 = {};
        const intl15 = closure_3(dependencyMap[23]).intl;
        obj10.label = intl15.string(closure_3(dependencyMap[23]).t.WZwPO4);
        obj10.onPress = function onPress() {
          arg0(guild_id[29]).copy(arg0.id);
        };
        items.push(obj10);
        if (null != recurrenceId) {
          const obj11 = {};
          const intl16 = closure_3(dependencyMap[23]).intl;
          obj11.label = intl16.string(closure_3(dependencyMap[23]).t.NZRGQo);
          obj11.onPress = function onPress() {
            arg0(guild_id[29]).copy(arg2);
          };
          items.push(obj11);
        }
        const obj12 = { location: "showGuildEventModeratorActionSheet" };
        let tidaWebformEnabled = importDefault(dependencyMap[39]).getCurrentConfig(obj12).tidaWebformEnabled;
        const obj16 = importDefault(dependencyMap[39]);
        const tmp67 = importDefault(dependencyMap[41])(event, closure_3(dependencyMap[40]).getWindowDimensions().width);
        let closure_5 = tmp67;
        if (tidaWebformEnabled) {
          tidaWebformEnabled = null != tmp67;
        }
        if (tidaWebformEnabled) {
          const obj13 = {};
          const intl17 = closure_3(dependencyMap[23]).intl;
          obj13.label = intl17.string(closure_3(dependencyMap[23]).t.8xHmxo);
          obj13.onPress = function onPress() {
            arg0(guild_id[29]).copy(tmp67);
            const obj = arg0(guild_id[29]);
            const result = arg0(guild_id[30]).presentCopiedToClipboard();
          };
          items.push(obj13);
        }
        const obj18 = closure_3(dependencyMap[40]);
      }
      const obj14 = { status: true, construct: true, replace: true, colors: true, options: items };
      const result1 = closure_3(dependencyMap[42]).showSimpleActionSheet(obj14);
    }
  }
  if (null != tmp7) {
    items.push(tmp7);
  }
};
