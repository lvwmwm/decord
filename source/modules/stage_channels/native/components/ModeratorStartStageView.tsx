// Module ID: 10624
// Function ID: 82875
// Name: ModeratorStartStageView
// Dependencies: [57, 31, 1838, 33, 566, 8455, 10625, 8402, 8454, 10626, 8346, 10627, 1212, 10644, 10645, 2]
// Exports: default

// Module 10624 (ModeratorStartStageView)
import _slicedToArray from "_slicedToArray";
import "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageView.tsx");

export default function ModeratorStartStageView(channel) {
  channel = channel.channel;
  const guild_id = channel.guild_id;
  let obj = guild_id(566);
  const items = [_createForOfIteratorHelperLoose];
  const items1 = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getGuild(guild_id), items1);
  let obj1 = guild_id(8455);
  const first = callback(obj1.useGuildChannelScheduledEvents(channel.id), 1)[0];
  let obj2 = guild_id(8402);
  const canManageGuildEventResult = obj2.useManageResourcePermissions(channel).canManageGuildEvent(first);
  let obj3 = guild_id(10626);
  const isLive = obj3.useStageChannelStartEvent(channel.id).isLive;
  let obj4 = guild_id(8346);
  const nextRecurrenceIdInEvent = obj4.getNextRecurrenceIdInEvent(first);
  if (null != nextRecurrenceIdInEvent) {
    const tmp6 = nextRecurrenceIdInEvent;
  }
  let tmp8Result = null;
  if (null != stateFromStores) {
    obj = {};
    const intl = guild_id(1212).intl;
    obj.title = intl.string(guild_id(1212).t.QGnDLs);
    const intl2 = guild_id(1212).intl;
    obj.body = intl2.string(guild_id(1212).t["s/uXzq"]);
    obj = {};
    let tmp15 = null;
    if (canManageGuildEventResult) {
      tmp15 = null;
      if (null != first) {
        obj1 = { channel, event: first, isLive, guild: stateFromStores, recurrenceId: tmp6 };
        tmp15 = callback2(guild_id(10644).StartEventPrompt, obj1);
      }
    }
    const items2 = [tmp15, , , ];
    let tmp19 = null;
    if (importDefault(10625)(channel.id, true).moderator) {
      obj2 = { channel, isLive };
      tmp19 = callback2(guild_id(10645).StartStagePrompt, obj2);
    }
    items2[1] = tmp19;
    let tmp23 = null;
    if (tmp4) {
      obj3 = { channel, isLive, guild: stateFromStores };
      tmp23 = callback2(guild_id(10644).ScheduleEventPrompt, obj3);
    }
    items2[2] = tmp23;
    obj4 = { onContinue: channel.onSkip };
    items2[3] = callback2(guild_id(10645).ContinueToStagePrompt, obj4);
    obj.children = items2;
    obj.children = closure_7(closure_6, obj);
    tmp8Result = callback2(importDefault(10627), obj);
    const tmp11 = importDefault(10627);
    const tmp13 = closure_7;
    const tmp14 = closure_6;
    const tmp8 = callback2;
  }
  return tmp8Result;
};
