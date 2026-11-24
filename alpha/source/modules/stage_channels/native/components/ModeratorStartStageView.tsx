// Module ID: 10119
// Function ID: 10120
// Name: ModeratorStartStageView
// Dependencies: [32, 19, 4788, 21, 504, 8322, 10120, 8330, 8471, 10121, 8325, 10122, 1112, 10152, 10153, 2]
// Exports: default

// Module 10119 (ModeratorStartStageView)
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 8471 */;
import useCurrentUserStageRolesDefault from "useCurrentUserStageRoles" /* 10120 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4788 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp5;
const StageViewWithPromptsDefault = tmp5(10122);
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
  const obj2 = guild_id(8322);
  const first = _slicedToArray(obj2.useGuildChannelScheduledEvents(channel.id), 1)[0];
  const moderator = useCurrentUserStageRolesDefault(channel.id, true).moderator;
  const obj3 = guild_id(8330);
  const canManageGuildEventResult = obj3.useManageResourcePermissions(channel).canManageGuildEvent(first);
  const tmp7 = useCanCreateAnEventDefault(guild_id);
  const obj4 = guild_id(10121);
  const isLive = obj4.useStageChannelStartEvent(channel.id).isLive;
  const obj5 = guild_id(8325);
  const nextRecurrenceIdInEvent = obj5.getNextRecurrenceIdInEvent(first);
  let tmp10Result6 = null;
  if (null != stateFromStores) {
    const obj6 = { title: intl.string(guild_id(1112).t.QGnDLs), body: intl2.string(guild_id(1112).t["s/uXzq"]), children: tmp12(tmp13, obj10) };
    const tmp5Result = StageViewWithPromptsDefault;
    intl = tmp(1112).intl;
    intl2 = tmp(1112).intl;
    let tmp10Result = null;
    tmp12 = closure_7;
    tmp13 = closure_6;
    if (canManageGuildEventResult) {
      tmp10Result = null;
      if (null != first) {
        const obj7 = { channel, event: first, isLive, guild: stateFromStores, recurrenceId: nextRecurrenceIdInEvent };
        tmp10Result = tmp10(tmp(10152).StartEventPrompt, obj7);
      }
    }
    const items2 = [tmp10Result, , , ];
    let tmp10Result4 = null;
    if (moderator) {
      const obj8 = { channel, isLive };
      tmp10Result4 = tmp10(tmp(10153).StartStagePrompt, obj8);
    }
    items2[1] = tmp10Result4;
    let tmp10Result5 = null;
    if (tmp7) {
      const obj9 = { channel, isLive, guild: stateFromStores };
      tmp10Result5 = tmp10(tmp(10152).ScheduleEventPrompt, obj9);
    }
    obj10 = { children: items2 };
    items2[2] = tmp10Result5;
    const obj11 = { onContinue: onSkip };
    items2[3] = closure_5(guild_id(10153).ContinueToStagePrompt, obj11);
    tmp10Result6 = tmp10(tmp5Result, obj6);
  }
  return tmp10Result6;
};
