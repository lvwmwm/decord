// Module ID: 5693
// Function ID: 48988
// Name: LurkerLeavePromptModal
// Dependencies: []
// Exports: openLurkerLeavePrompt

// Module 5693 (LurkerLeavePromptModal)
function LurkerLeavePromptModal(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const tmp = callback3();
  const items = [guild.id];
  const callback = React.useCallback(() => {
    const result = guild(closure_2[10]).trackLeavePromptLeaveClicked(guild.id);
  }, items);
  let obj = { title: guild.name };
  const intl = arg1(dependencyMap[12]).intl;
  obj.content = intl.string(arg1(dependencyMap[12]).t.I1yHxc);
  obj = { style: tmp.headerRoot };
  obj = { style: tmp.iconWrapper };
  const obj1 = { guild, size: arg1(dependencyMap[8]).GuildIconSizes.XLARGE, value: guild.name };
  const items1 = [callback(importDefault(dependencyMap[8]), obj1), ];
  const obj2 = { guild };
  const tmp3 = importDefault(dependencyMap[8]);
  obj2.size = arg1(dependencyMap[14]).Icon.Sizes.LARGE;
  obj2.style = closure_4.flatten(tmp.badgeOverlay);
  items1[1] = callback(importDefault(dependencyMap[13]), obj2);
  obj.children = items1;
  obj.children = callback2(closure_5, obj);
  obj.header = callback(closure_5, obj);
  const obj3 = {};
  const obj4 = { variant: "primary" };
  const intl2 = arg1(dependencyMap[12]).intl;
  obj4.text = intl2.string(arg1(dependencyMap[12]).t.VJlc0S);
  obj4.onPress = guild.onJoin;
  const items2 = [callback(arg1(dependencyMap[11]).AlertActionButton, obj4), ];
  const obj5 = { variant: "secondary" };
  const intl3 = arg1(dependencyMap[12]).intl;
  obj5.text = intl3.string(arg1(dependencyMap[12]).t.2vl7qn);
  obj5.onPress = callback;
  items2[1] = callback(arg1(dependencyMap[11]).AlertActionButton, obj5);
  obj3.children = items2;
  obj.actions = callback2(closure_12, obj3);
  return callback(arg1(dependencyMap[11]).AlertModal, obj);
}
let closure_3 = importAll(dependencyMap[0]);
({ StyleSheet: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const JoinGuildSources = arg1(dependencyMap[5]).JoinGuildSources;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[6]));
const set = new Set();
const tmp5 = arg1(dependencyMap[8]).ImageSizes[arg1(undefined, dependencyMap[8]).GuildIconSizes.XLARGE];
const tmp3 = arg1(dependencyMap[6]);
let closure_14 = arg1(dependencyMap[9]).createStyles({ headerRoot: { alignItems: "center" }, iconWrapper: { width: tmp5, height: tmp5, position: "relative" }, badgeOverlay: {} });
const obj = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/lurker_mode/openLurkerLeavePrompt.native.tsx");

export const openLurkerLeavePrompt = function openLurkerLeavePrompt(guildId, onLeave) {
  onLeave = guildId;
  onLeave = onLeave.onLeave;
  const importDefault = onLeave;
  let closure_2;
  if (!set.has(guildId)) {
    const guild = guild.getGuild(guildId);
    if (null != guild) {
      set.add(guildId);
      closure_2 = false;
      let obj = onLeave(closure_2[7]);
      const _HermesInternal = HermesInternal;
      obj = {
        guild,
        onJoin() {
              let closure_2 = true;
              const lurkingSourceForGuild = lurkingSourceForGuild.getLurkingSourceForGuild(arg0);
              let type;
              if (null != lurkingSourceForGuild) {
                type = lurkingSourceForGuild.type;
              }
              if (type === constants.DIRECTORY_ENTRY) {
                const channel = channel.getChannel(lurkingSourceForGuild.directoryChannelId);
                if (null != channel) {
                  const guildId = channel.getGuildId();
                  const result = arg0(closure_2[15]).setHubProgressActionComplete(guildId, arg0(closure_2[16]).HubProgressStep.JOIN_GUILD);
                  const obj2 = arg0(closure_2[15]);
                }
              }
              const obj3 = arg0(closure_2[10]);
              obj3.trackJoinClicked(arg0, constants.LEAVE_PROMPT_LURKER, onLeave(closure_2[17]).hasNavigatedAway(arg0));
              const obj4 = onLeave(closure_2[17]);
              onLeave(closure_2[18]).joinGuild(arg0, { source: constants.LEAVE_PROMPT_LURKER });
            }
      };
      const combined = "lurker-leave-prompt:" + guildId;
      obj.openAlert(combined, callback(LurkerLeavePromptModal, obj), () => {
        set.delete(arg0);
        if (!closure_2) {
          onLeave();
        }
      });
    } else {
      onLeave();
    }
  }
};
