// Module ID: 10613
// Function ID: 82812
// Name: ModeratorStartStageView
// Dependencies: []
// Exports: default

// Module 10613 (ModeratorStartStageView)
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageView.tsx");

export default function ModeratorStartStageView(channel) {
  channel = channel.channel;
  const guild_id = channel.guild_id;
  const arg1 = guild_id;
  let obj = arg1(dependencyMap[4]);
  const items = [closure_4];
  const items1 = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guild_id), items1);
  let obj1 = arg1(dependencyMap[5]);
  const first = callback(obj1.useGuildChannelScheduledEvents(channel.id), 1)[0];
  let obj2 = arg1(dependencyMap[7]);
  const canManageGuildEventResult = obj2.useManageResourcePermissions(channel).canManageGuildEvent(first);
  let obj3 = arg1(dependencyMap[9]);
  const isLive = obj3.useStageChannelStartEvent(channel.id).isLive;
  let obj4 = arg1(dependencyMap[10]);
  const nextRecurrenceIdInEvent = obj4.getNextRecurrenceIdInEvent(first);
  if (null != nextRecurrenceIdInEvent) {
    const tmp6 = nextRecurrenceIdInEvent;
  }
  let tmp8Result = null;
  if (null != stateFromStores) {
    obj = {};
    const intl = arg1(dependencyMap[12]).intl;
    obj.title = intl.string(arg1(dependencyMap[12]).t.QGnDLs);
    const intl2 = arg1(dependencyMap[12]).intl;
    obj.body = intl2.string(arg1(dependencyMap[12]).t.s/uXzq);
    obj = {};
    let tmp15 = null;
    if (canManageGuildEventResult) {
      tmp15 = null;
      if (null != first) {
        obj1 = { channel, event: first, isLive, guild: stateFromStores, recurrenceId: tmp6 };
        tmp15 = callback2(arg1(dependencyMap[13]).StartEventPrompt, obj1);
      }
    }
    const items2 = [tmp15, , , ];
    let tmp19 = null;
    if (importDefault(dependencyMap[6])(channel.id, true).moderator) {
      obj2 = { channel, isLive };
      tmp19 = callback2(arg1(dependencyMap[14]).StartStagePrompt, obj2);
    }
    items2[1] = tmp19;
    let tmp23 = null;
    if (tmp4) {
      obj3 = { channel, isLive, guild: stateFromStores };
      tmp23 = callback2(arg1(dependencyMap[13]).ScheduleEventPrompt, obj3);
    }
    items2[2] = tmp23;
    obj4 = { onContinue: channel.onSkip };
    items2[3] = callback2(arg1(dependencyMap[14]).ContinueToStagePrompt, obj4);
    obj.children = items2;
    obj.children = closure_7(closure_6, obj);
    tmp8Result = callback2(importDefault(dependencyMap[11]), obj);
    const tmp11 = importDefault(dependencyMap[11]);
    const tmp13 = closure_7;
    const tmp14 = closure_6;
    const tmp8 = callback2;
  }
  return tmp8Result;
};
