// Module ID: 8942
// Function ID: 8943
// Name: ModeratorStartStageView
// Dependencies: [32, 19, 2067, 21, 504, 8943, 8951, 8952, 8954, 8955, 8946, 8956, 1115, 8975, 9353, 2]
// Exports: default

// Module 8942 (ModeratorStartStageView)
import useCurrentUserStageRolesDefault from "useCurrentUserStageRoles" /* 8951 */;
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 8954 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp5;
const StageViewWithPromptsDefault = tmp5(8956);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageView.tsx");

export default function ModeratorStartStageView(channel) {
  let intl;
  let intl2;
  let obj10;
  let tmp12;
  let tmp13;
  channel = channel.channel;
  const guild_id = channel.guild_id;
  const onSkip = channel.onSkip;
  const items = [GuildStore];
  const items1 = [guild_id];
  const obj = guild_id(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guild_id), items1);
  const obj2 = guild_id(8943);
  const first = _slicedToArray(obj2.useGuildChannelScheduledEvents(channel.id), 1)[0];
  const moderator = useCurrentUserStageRolesDefault(channel.id, true).moderator;
  const obj3 = guild_id(8952);
  const canManageGuildEventResult = obj3.useManageResourcePermissions(channel).canManageGuildEvent(first);
  const tmp7 = useCanCreateAnEventDefault(guild_id);
  const obj4 = guild_id(8955);
  const isLive = obj4.useStageChannelStartEvent(channel.id).isLive;
  const obj5 = guild_id(8946);
  const nextRecurrenceIdInEvent = obj5.getNextRecurrenceIdInEvent(first);
  let tmp10Result6 = null;
  if (null != stateFromStores) {
    const obj6 = { title: intl.string(guild_id(1115).t.QGnDLs), body: intl2.string(guild_id(1115).t["s/uXzq"]), children: tmp12(tmp13, obj10) };
    const tmp5Result = StageViewWithPromptsDefault;
    intl = tmp(1115).intl;
    intl2 = tmp(1115).intl;
    let tmp10Result = null;
    tmp12 = closure_7;
    tmp13 = closure_6;
    if (canManageGuildEventResult) {
      tmp10Result = null;
      if (null != first) {
        const obj7 = { channel, event: first, isLive, guild: stateFromStores, recurrenceId: nextRecurrenceIdInEvent };
        tmp10Result = tmp10(tmp(8975).StartEventPrompt, obj7);
      }
    }
    const items2 = [tmp10Result, , , ];
    let tmp10Result4 = null;
    if (moderator) {
      const obj8 = { channel, isLive };
      tmp10Result4 = tmp10(tmp(9353).StartStagePrompt, obj8);
    }
    items2[1] = tmp10Result4;
    let tmp10Result5 = null;
    if (tmp7) {
      const obj9 = { channel, isLive, guild: stateFromStores };
      tmp10Result5 = tmp10(tmp(8975).ScheduleEventPrompt, obj9);
    }
    obj10 = { children: items2 };
    items2[2] = tmp10Result5;
    const obj11 = { onContinue: onSkip };
    items2[3] = closure_5(guild_id(9353).ContinueToStagePrompt, obj11);
    tmp10Result6 = tmp10(tmp5Result, obj6);
  }
  return tmp10Result6;
};
