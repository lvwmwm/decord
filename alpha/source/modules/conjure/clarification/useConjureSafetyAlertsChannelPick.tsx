// Module ID: 12719
// Function ID: 12720
// Name: useConjureSafetyAlertsChannelPick
// Dependencies: [19, 4939, 4921, 4880, 6838, 1072, 1084, 504, 10866, 6896, 7413, 4946, 12549, 2]
// Exports: default

// Module 12719 (useConjureSafetyAlertsChannelPick)
import Constants from "Constants" /* 1072 */;
import ConjureClarification from "ConjureClarification" /* 12549 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4939 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import GuildStore from "GuildStore" /* 4880 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
import BigFlagUtils from "BigFlagUtils" /* 1084 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let channels, guild, importDefault, project;

const Permissions = Constants.Permissions;
let closure_9 = BigFlagUtils.combine(Permissions.VIEW_CHANNEL, Permissions.SEND_MESSAGES);
let result = size.fileFinishedImporting("modules/conjure/clarification/useConjureSafetyAlertsChannelPick.tsx");

export default function useConjureSafetyAlertsChannelPick(disabled) {
  let guildId;
  let permission;
  let projectId;
  let question;
  let value;
  ({ projectId, guildId } = disabled);
  ({ question, value } = disabled);
  importDefault = value;
  disabled = disabled.disabled;
  const onChange = disabled.onChange;
  let stateFromStores1;
  let ref;
  let ref2;
  let tmp = null != guildId && "channel" === question.input && "safety_alerts_channel" === question.default;
  let closure_3 = tmp;
  let obj = guildId(onChange[7]);
  let items = [ConjureProjectStore];
  const items1 = [projectId, tmp];
  const stateFromStores = obj.useStateFromStores(items, () => {
    project = null;
    if (closure_3) {
      project = project.getProject(projectId);
    }
    let result = null;
    if (null != project) {
      const obj = guildId(onChange[8]);
      result = obj.conjurePreviewBotUserId(project);
    }
    return result;
  }, items1);
  const items2 = [guildId, stateFromStores];
  const effect = stateFromStores1.useEffect(() => {
    const isMemberResult = null == guildId || null == stateFromStores || ref2.isMember(tmp, stateFromStores);
    if (!isMemberResult) {
      const items = [stateFromStores];
      const obj = require("GuildActionCreators");
      const membersById = obj.requestMembersById(tmp, items);
    }
  }, items2);
  let obj2 = guildId(onChange[7]);
  const items3 = [ref, ref2, GuildStore];
  const items4 = [guildId, stateFromStores, tmp, question.channel_filter];
  stateFromStores1 = obj2.useStateFromStores(items3, () => {
    const tmp = closure_3;
    if (tmp) {
      if (null != guildId) {
        guild = guild.getGuild(tmp2);
        let prop;
        if (guild != null) {
          prop = guild.safetyAlertsChannelId;
        }
        channels = channels.getChannels(tmp2);
        if (null != prop) {
          if (null != channels) {
            const obj4 = guildId(onChange[10]);
            const result = obj4.conjureSettingChannels(channels, question.channel_filter);
            const found = result.find((id) => id.id === prop);
            if (null == found) {
              return null;
            } else {
              if (null != stateFromStores) {
                if (ref2.isMember(guildId, stateFromStores)) {
                  let tmp16 = null;
                  const obj3 = { permission, user: stateFromStores, context: found };
                  const obj2 = disabled(onChange[11]);
                  if (obj2.can(obj3)) {
                    tmp16 = found;
                  }
                  return tmp16;
                }
              }
              let deny;
              if (found.permissionOverwrites[guildId] != null) {
                deny = tmp8.deny;
              }
              if (deny == null) {
                deny = disabled(tmp20[6]).EMPTY_FLAG;
              }
              let tmp13 = null;
              const obj = disabled(onChange[6]);
              if (!obj.hasAny(deny, permission)) {
                tmp13 = found;
              }
              return tmp13;
            }
          }
        }
        return null;
      }
    }
    return null;
  }, items4);
  ref = stateFromStores1.useRef(null);
  ref2 = stateFromStores1.useRef(false);
  const items5 = [stateFromStores1, disabled, guildId, onChange, value];
  const effect1 = stateFromStores1.useEffect(() => {
    const tmp2 = ref2.current || disabled || null == guildId;
    if (!tmp2) {
      if (null != ref.current) {
        if (1 === importDefault.length) {
          if (importDefault[0].id === ref.current) {
            if (null == stateFromStores1) {
              ref2.current = true;
              onChange([], guildId);
            }
          }
        }
        ref2.current = true;
      } else if (importDefault.length > 0) {
        ref2.current = true;
      } else if (null != stateFromStores1) {
        ref.current = stateFromStores1.id;
        const obj = ConjureClarification;
        onChange(obj.clarificationChannelEntities(stateFromStores1, []), guildId);
      }
    }
  }, items5);
};
