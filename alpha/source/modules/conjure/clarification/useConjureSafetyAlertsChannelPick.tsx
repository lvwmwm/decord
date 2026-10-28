// Module ID: 12521
// Function ID: 12522
// Name: useConjureSafetyAlertsChannelPick
// Dependencies: [19, 4934, 4916, 4878, 6808, 1084, 1096, 558, 576, 10768, 504, 6866, 7382, 4941, 12512, 2]

// Module 12521 (useConjureSafetyAlertsChannelPick)
import Constants from "Constants" /* 1084 */;
import PermissionUtilsAll from "PermissionUtils" /* 4941 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6866 */;
import ConjureUtils from "ConjureUtils" /* 7382 */;
import conjureAppInServer from "conjureAppInServer" /* 10768 */;
import ConjureClarification from "ConjureClarification" /* 12512 */;
import react_mod from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4934 */;
import GuildMemberStore from "GuildMemberStore" /* 4916 */;
import GuildStore from "GuildStore" /* 4878 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;
import BigFlagUtils from "BigFlagUtils" /* 1096 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importAll, importDefault, obj1, safetyAlertsChannelId, tmp12, tmp15, tmp17, tmp20, tmp21, tmp23, tmp5;

let react = react_mod;
const Permissions = Constants.Permissions;
const permission = BigFlagUtils.combine(Permissions.VIEW_CHANNEL, Permissions.SEND_MESSAGES);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureSafetyAlertsChannel(arg0, arg1, input) {
  let closure_0;
  let closure_3;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  importAll = input;
  let tmp = _require;
  const tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(16);
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp7;
    let tmp8;
    if (cResult[2] === (null != arg1 && "channel" === input.input && "safety_alerts_channel" === input.default)) {
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
    if (cResult[5] === stateFromStores) {
      let tmp10;
      let tmp11;
      let tmp14;
      if (cResult[6] === arg1) {
        tmp10 = cResult[7];
        tmp11 = cResult[8];
      }
      const effect = stateFromStores.useEffect(tmp10, tmp11);
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildChannelStore, , ];
        let tmp16 = GuildMemberStore;
        items1[1] = GuildMemberStore;
        items1[2] = GuildStore;
        class A {
          constructor() {
            tmp = closure_3;
            if (tmp) {
              tmp2 = closure_1;
              tmp3 = null;
              if (null != closure_1) {
                tmp17 = closure_7;
                guild = closure_7.getGuild(tmp2);
                prop = undefined;
                if (guild != null) {
                  prop = guild.safetyAlertsChannelId;
                }
                safetyAlertsChannelId = prop;
                tmp5 = closure_5;
                channels = closure_5.getChannels(tmp2);
                if (null != prop) {
                  if (null != channels) {
                    tmp19 = closure_0;
                    tmp20 = closure_3;
                    obj4 = closure_0(closure_3[12]);
                    tmp21 = closure_2;
                    result = obj4.conjureSettingChannels(channels, closure_2.channel_filter);
                    found = result.find((id) => id.id === prop);
                    if (null == found) {
                      return null;
                    } else {
                      tmp23 = closure_4;
                      if (null != closure_4) {
                        tmp7 = closure_6;
                        if (closure_6.isMember(tmp2, tmp23)) {
                          tmp14 = closure_2;
                          obj2 = closure_2(tmp20[13]);
                          obj1 = { permission: null, user: null, context: null };
                          tmp15 = closure_9;
                          obj1.permission = closure_9;
                          obj1.user = tmp23;
                          obj1.context = found;
                          tmp16 = null;
                          if (obj2.can(obj1)) {
                            tmp16 = found;
                          }
                          return tmp16;
                        }
                      }
                      tmp8 = found.permissionOverwrites[tmp2];
                      deny = undefined;
                      if (tmp8 != null) {
                        deny = tmp8.deny;
                      }
                      if (deny == null) {
                        tmp10 = closure_2;
                        deny = closure_2(tmp20[6]).EMPTY_FLAG;
                      }
                      tmp11 = closure_2;
                      obj = closure_2(tmp20[6]);
                      tmp12 = closure_9;
                      tmp13 = null;
                      if (!obj.hasAny(deny, closure_9)) {
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
          }
        }
        cResult[9] = items1;
        tmp14 = items1;
      } else {
        tmp14 = cResult[9];
      }
      if (cResult[10] === stateFromStores) {
        if (cResult[11] === arg1) {
          if (cResult[12] === input.channel_filter) {
            let tmp18;
            let tmp19;
            if (cResult[13] === (null != arg1 && "channel" === input.input && "safety_alerts_channel" === input.default)) {
              tmp18 = cResult[14];
              tmp19 = cResult[15];
            }
            const tmpResult2 = tmp(504);
            return tmpResult2.useStateFromStores(tmp14, tmp18, tmp19);
          }
        }
      }
      class A {
        constructor() {
          tmp = closure_3;
          if (tmp) {
            tmp2 = closure_1;
            tmp3 = null;
            if (null != closure_1) {
              tmp17 = closure_7;
              guild = closure_7.getGuild(tmp2);
              prop = undefined;
              if (guild != null) {
                prop = guild.safetyAlertsChannelId;
              }
              safetyAlertsChannelId = prop;
              tmp5 = closure_5;
              channels = closure_5.getChannels(tmp2);
              if (null != prop) {
                if (null != channels) {
                  tmp19 = closure_0;
                  tmp20 = closure_3;
                  obj4 = closure_0(closure_3[12]);
                  tmp21 = closure_2;
                  result = obj4.conjureSettingChannels(channels, closure_2.channel_filter);
                  found = result.find((id) => id.id === prop);
                  if (null == found) {
                    return null;
                  } else {
                    tmp23 = closure_4;
                    if (null != closure_4) {
                      tmp7 = closure_6;
                      if (closure_6.isMember(tmp2, tmp23)) {
                        tmp14 = closure_2;
                        obj2 = closure_2(tmp20[13]);
                        obj1 = { permission: null, user: null, context: null };
                        tmp15 = closure_9;
                        obj1.permission = closure_9;
                        obj1.user = tmp23;
                        obj1.context = found;
                        tmp16 = null;
                        if (obj2.can(obj1)) {
                          tmp16 = found;
                        }
                        return tmp16;
                      }
                    }
                    tmp8 = found.permissionOverwrites[tmp2];
                    deny = undefined;
                    if (tmp8 != null) {
                      deny = tmp8.deny;
                    }
                    if (deny == null) {
                      tmp10 = closure_2;
                      deny = closure_2(tmp20[6]).EMPTY_FLAG;
                    }
                    tmp11 = closure_2;
                    obj = closure_2(tmp20[6]);
                    tmp12 = closure_9;
                    tmp13 = null;
                    if (!obj.hasAny(deny, closure_9)) {
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
        }
      }
      const items2 = [arg1, stateFromStores, tmp4, input.channel_filter];
      cResult[10] = stateFromStores;
      cResult[11] = arg1;
      cResult[12] = input.channel_filter;
      cResult[13] = null != arg1 && "channel" === input.input && "safety_alerts_channel" === input.default;
      cResult[14] = A;
      cResult[15] = items2;
      tmp19 = items2;
      tmp18 = A;
    }
    const fn2 = function j() {
      const isMemberResult = null == closure_1 || null == stateFromStores || GuildMemberStore.isMember(tmp, stateFromStores);
      if (!isMemberResult) {
        const items = [stateFromStores];
        const obj = GuildActionCreatorsDefault;
        const membersById = obj.requestMembersById(tmp, items);
      }
    };
    const items3 = [, stateFromStores];
    cResult[5] = stateFromStores;
    cResult[6] = arg1;
    cResult[7] = fn2;
    cResult[8] = items3;
    tmp11 = items3;
    tmp10 = fn2;
  }
  const fn = function _() {
    let project = null;
    if (closure_3) {
      project = ConjureProjectStore.getProject(closure_0);
    }
    let result = null;
    if (null != project) {
      const obj = conjureAppInServer;
      result = obj.conjurePreviewBotUserId(project);
    }
    return result;
  };
  const items4 = [arg0, tmp4];
  cResult[1] = arg0;
  cResult[2] = null != arg1 && "channel" === input.input && "safety_alerts_channel" === input.default;
  cResult[3] = fn;
  cResult[4] = items4;
  tmp8 = items4;
  tmp7 = fn;
}) : (function useConjureSafetyAlertsChannel(arg0, arg1, input) {
  let closure_0;
  let closure_3;
  _require = arg0;
  let closure_1 = arg1;
  let tmp = null != arg1 && "channel" === input.input && "safety_alerts_channel" === input.default;
  dependencyMap = tmp;
  let obj = require("get initialized");
  let items = [ConjureProjectStore];
  const items1 = [arg0, tmp];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let project = null;
    if (closure_3) {
      project = ConjureProjectStore.getProject(closure_0);
    }
    let result = null;
    if (null != project) {
      const obj = conjureAppInServer;
      result = obj.conjurePreviewBotUserId(project);
    }
    return result;
  }, items1);
  const items2 = [arg1, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    const isMemberResult = null == closure_1 || null == stateFromStores || GuildMemberStore.isMember(tmp, stateFromStores);
    if (!isMemberResult) {
      const items = [stateFromStores];
      const obj = GuildActionCreatorsDefault;
      const membersById = obj.requestMembersById(tmp, items);
    }
  }, items2);
  let obj2 = require("get initialized");
  const items3 = [GuildChannelStore, GuildMemberStore, GuildStore];
  const items4 = [arg1, stateFromStores, tmp, input.channel_filter];
  return obj2.useStateFromStores(items3, () => {
    const tmp = closure_3;
    if (tmp) {
      if (null != closure_1) {
        const guild = GuildStore.getGuild(tmp2);
        let prop;
        if (guild != null) {
          prop = guild.safetyAlertsChannelId;
        }
        const channels = GuildChannelStore.getChannels(tmp2);
        if (null != prop) {
          if (null != channels) {
            const obj4 = ConjureUtils;
            const result = obj4.conjureSettingChannels(channels, input.channel_filter);
            const found = result.find((id) => id.id === prop);
            if (null == found) {
              return null;
            } else {
              if (null != stateFromStores) {
                if (GuildMemberStore.isMember(closure_1, stateFromStores)) {
                  let tmp16 = null;
                  const obj3 = { permission, user: stateFromStores, context: found };
                  const obj2 = PermissionUtilsAll;
                  if (obj2.can(obj3)) {
                    tmp16 = found;
                  }
                  return tmp16;
                }
              }
              let deny;
              if (found.permissionOverwrites[closure_1] != null) {
                deny = tmp8.deny;
              }
              if (deny == null) {
                deny = BigFlagUtils.EMPTY_FLAG;
              }
              let tmp13 = null;
              const obj = BigFlagUtils;
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureSafetyAlertsChannelPick(guildId) {
  let id;
  let onChange;
  let obj = guildId(onChange[8]);
  const cResult = obj.c(7);
  guildId = guildId.guildId;
  const value = guildId.value;
  importDefault = value;
  const disabled = guildId.disabled;
  onChange = guildId.onChange;
  let tmp2 = closure_10(guildId.projectId, guildId, guildId.question);
  react = tmp2;
  const ref = react.useRef(null);
  const ref2 = react.useRef(false);
  const obj2 = react;
  if (cResult[0] === tmp2) {
    if (cResult[1] === disabled) {
      if (cResult[2] === guildId) {
        if (cResult[3] === onChange) {
          let tmp3;
          let tmp4;
          if (cResult[4] === value) {
            tmp3 = cResult[5];
            tmp4 = cResult[6];
          }
          const effect = obj2.useEffect(tmp3, tmp4);
        }
      }
    }
  }
  const fn = function t() {
    const tmp2 = ref2.current || disabled || null == guildId;
    if (!tmp2) {
      if (null != ref.current) {
        if (1 === importDefault.length) {
          if (importDefault[0].id === ref.current) {
            if (null == id) {
              ref2.current = true;
              onChange([], guildId);
            }
          }
        }
        ref2.current = true;
      } else if (importDefault.length > 0) {
        ref2.current = true;
      } else if (null != id) {
        ref.current = id.id;
        const obj = ConjureClarification;
        onChange(obj.clarificationChannelEntities(id, []), guildId);
      }
    }
  };
  const items = [tmp2, disabled, guildId, onChange, value];
  cResult[0] = tmp2;
  cResult[1] = disabled;
  cResult[2] = guildId;
  cResult[3] = onChange;
  cResult[4] = value;
  cResult[5] = fn;
  cResult[6] = items;
  tmp4 = items;
  tmp3 = fn;
}) : (function useConjureSafetyAlertsChannelPick(guildId) {
  let id;
  guildId = guildId.guildId;
  const value = guildId.value;
  importDefault = value;
  const disabled = guildId.disabled;
  const onChange = guildId.onChange;
  const tmp = closure_10(guildId.projectId, guildId, guildId.question);
  react = tmp;
  const ref = react.useRef(null);
  const ref2 = react.useRef(false);
  const items = [tmp, disabled, guildId, onChange, value];
  const effect = react.useEffect(() => {
    const tmp2 = ref2.current || disabled || null == guildId;
    if (!tmp2) {
      if (null != ref.current) {
        if (1 === importDefault.length) {
          if (importDefault[0].id === ref.current) {
            if (null == id) {
              ref2.current = true;
              onChange([], guildId);
            }
          }
        }
        ref2.current = true;
      } else if (importDefault.length > 0) {
        ref2.current = true;
      } else if (null != id) {
        ref.current = id.id;
        const obj = ConjureClarification;
        onChange(obj.clarificationChannelEntities(id, []), guildId);
      }
    }
  }, items);
});
let result = size.fileFinishedImporting("modules/conjure/clarification/useConjureSafetyAlertsChannelPick.tsx");

export default tmp2;
