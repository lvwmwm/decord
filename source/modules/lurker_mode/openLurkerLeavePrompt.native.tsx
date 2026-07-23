// Module ID: 5699
// Function ID: 49074
// Name: LurkerLeavePromptModal
// Dependencies: [31, 27, 1348, 1838, 3759, 653, 33, 4472, 5515, 4130, 5700, 4475, 1212, 5701, 1273, 5713, 1282, 5715, 5048, 2]
// Exports: openLurkerLeavePrompt

// Module 5699 (LurkerLeavePromptModal)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import { JoinGuildSources } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "_isNativeReflectConstruct";

let closure_10;
let closure_11;
let closure_12;
let closure_4;
let closure_5;
const require = arg1;
function LurkerLeavePromptModal(guild) {
  guild = guild.guild;
  const tmp = callback3();
  const items = [guild.id];
  const callback = React.useCallback(() => {
    const result = guild(outer1_2[10]).trackLeavePromptLeaveClicked(guild.id);
  }, items);
  let obj = { title: guild.name };
  const intl = guild(1212).intl;
  obj.content = intl.string(guild(1212).t.I1yHxc);
  obj = { style: tmp.headerRoot };
  obj = { style: tmp.iconWrapper };
  const obj1 = { guild, size: guild(5515).GuildIconSizes.XLARGE, value: guild.name };
  const items1 = [callback(importDefault(5515), obj1), ];
  const obj2 = { guild };
  const tmp3 = importDefault(5515);
  obj2.size = guild(1273).Icon.Sizes.LARGE;
  obj2.style = closure_4.flatten(tmp.badgeOverlay);
  items1[1] = callback(importDefault(5701), obj2);
  obj.children = items1;
  obj.children = callback2(closure_5, obj);
  obj.header = callback(closure_5, obj);
  const obj3 = {};
  const obj4 = { variant: "primary" };
  const intl2 = guild(1212).intl;
  obj4.text = intl2.string(guild(1212).t.VJlc0S);
  obj4.onPress = guild.onJoin;
  const items2 = [callback(guild(4475).AlertActionButton, obj4), ];
  const obj5 = { variant: "secondary" };
  const intl3 = guild(1212).intl;
  obj5.text = intl3.string(guild(1212).t["2vl7qn"]);
  obj5.onPress = callback;
  items2[1] = callback(guild(4475).AlertActionButton, obj5);
  obj3.children = items2;
  obj.actions = callback2(closure_12, obj3);
  return callback(guild(4475).AlertModal, obj);
}
({ StyleSheet: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let set = new Set();
const tmp5 = require("makeSizeStyle").ImageSizes[require("makeSizeStyle").GuildIconSizes.XLARGE];
let closure_14 = _createForOfIteratorHelperLoose.createStyles({ headerRoot: { alignItems: "center" }, iconWrapper: { width: tmp5, height: tmp5, position: "relative" }, badgeOverlay: { position: "absolute", right: -4, bottom: -4, marginRight: 0 } });
let result = set.fileFinishedImporting("modules/lurker_mode/openLurkerLeavePrompt.native.tsx");

export const openLurkerLeavePrompt = function openLurkerLeavePrompt(guildId, onLeave) {
  const _require = guildId;
  onLeave = onLeave.onLeave;
  let dependencyMap;
  if (!set.has(guildId)) {
    guild = guild.getGuild(guildId);
    if (null != guild) {
      set.add(guildId);
      dependencyMap = false;
      let obj = _require(4472);
      const _HermesInternal = HermesInternal;
      obj = {
        guild,
        onJoin() {
              const dependencyMap = true;
              const lurkingSourceForGuild = outer1_8.getLurkingSourceForGuild(guildId);
              let type;
              if (null != lurkingSourceForGuild) {
                type = lurkingSourceForGuild.type;
              }
              if (type === outer1_9.DIRECTORY_ENTRY) {
                const channel = outer1_6.getChannel(lurkingSourceForGuild.directoryChannelId);
                if (null != channel) {
                  guildId = channel.getGuildId();
                  const result = guildId(5713).setHubProgressActionComplete(guildId, guildId(1282).HubProgressStep.JOIN_GUILD);
                  const obj2 = guildId(5713);
                }
              }
              const obj3 = guildId(5700);
              obj3.trackJoinClicked(guildId, outer1_9.LEAVE_PROMPT_LURKER, onLeave(5715).hasNavigatedAway(guildId));
              const obj4 = onLeave(5715);
              onLeave(5048).joinGuild(guildId, { source: outer1_9.LEAVE_PROMPT_LURKER });
            }
      };
      const combined = "lurker-leave-prompt:" + guildId;
      obj.openAlert(combined, callback(LurkerLeavePromptModal, obj), () => {
        outer1_13.delete(closure_0);
        if (!c2) {
          onLeave();
        }
      });
    } else {
      onLeave();
    }
  }
};
