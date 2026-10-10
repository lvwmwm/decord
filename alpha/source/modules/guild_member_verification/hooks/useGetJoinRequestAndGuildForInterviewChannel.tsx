// Module ID: 12373
// Function ID: 12374
// Name: useGetJoinRequestAndGuildForInterviewChannel
// Dependencies: [32, 19, 2087, 4750, 6117, 4940, 1085, 558, 576, 11, 504, 6116, 2]

// Module 12373 (useGetJoinRequestAndGuildForInterviewChannel)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 6116 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 6117 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4940 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const get_initialized = tmp(504);
let _slicedToArray = _slicedToArray_mod;
const Permissions = Constants.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGetJoinRequestAndGuildForInterviewChannel(id) {
  let closure_2;
  let closure_3;
  let first;
  let fn;
  let guild;
  let items2;
  let joinRequest;
  let tmp11;
  let tmp16;
  let tmp19;
  let tmp20;
  let tmp5;
  let tmp8;
  let tmp = require;
  let obj = react2;
  const cResult = obj.c(17);
  [tmp5, require] = _slicedToArray(joinRequest.useState(false), 2);
  const tmp4 = _slicedToArray(joinRequest.useState(false), 2);
  [first, dependencyMap] = joinRequest.useState(false);
  if (cResult[0] !== id) {
    const obj3 = first(11);
    const castResult = obj3.cast(id);
    cResult[0] = id;
    cResult[1] = castResult;
    tmp8 = castResult;
  } else {
    tmp8 = cResult[1];
  }
  _slicedToArray = tmp8;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildJoinRequestStore, UserGuildJoinRequestStore, guild, PermissionStore];
    cResult[2] = items;
    tmp11 = items;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] !== tmp8) {
    class M {
      constructor() {
        let canResult;
        const request = GuildJoinRequestStore.getRequest(closure_3);
        if (null == request) {
          return { joinRequest: null, isModmin: false, guild: null };
        } else {
          guild = GuildStore.getGuild(request.guildId);
          if (guild == null) {
            guild = UserGuildJoinRequestStore.getJoinRequestGuild(request.guildId);
          }
          const obj = { joinRequest: request, isModmin: canResult, guild };
          canResult = null != guild && PermissionStore.can(Permissions.KICK_MEMBERS, guild);
          return obj;
        }
      }
    }
    cResult[3] = tmp8;
    cResult[4] = M;
    tmp16 = M;
  } else {
    class M {
      constructor() {
        let canResult;
        const request = GuildJoinRequestStore.getRequest(closure_3);
        if (null == request) {
          return { joinRequest: null, isModmin: false, guild: null };
        } else {
          guild = GuildStore.getGuild(request.guildId);
          if (guild == null) {
            guild = UserGuildJoinRequestStore.getJoinRequestGuild(request.guildId);
          }
          const obj = { joinRequest: request, isModmin: canResult, guild };
          canResult = null != guild && PermissionStore.can(Permissions.KICK_MEMBERS, guild);
          return obj;
        }
      }
    }
  }
  const tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp11, tmp16);
  joinRequest = stateFromStoresObject.joinRequest;
  guild = stateFromStoresObject.guild;
  if (cResult[5] === first) {
    class M {
      constructor() {
        let canResult;
        const request = GuildJoinRequestStore.getRequest(closure_3);
        if (null == request) {
          return { joinRequest: null, isModmin: false, guild: null };
        } else {
          guild = GuildStore.getGuild(request.guildId);
          if (guild == null) {
            guild = UserGuildJoinRequestStore.getJoinRequestGuild(request.guildId);
          }
          const obj = { joinRequest: request, isModmin: canResult, guild };
          canResult = null != guild && PermissionStore.can(Permissions.KICK_MEMBERS, guild);
          return obj;
        }
      }
    }
    const effect = obj2.useEffect(fn, items2);
    if (cResult[9] === tmp8) {
      class M {
        constructor() {
          let canResult;
          const request = GuildJoinRequestStore.getRequest(closure_3);
          if (null == request) {
            return { joinRequest: null, isModmin: false, guild: null };
          } else {
            guild = GuildStore.getGuild(request.guildId);
            if (guild == null) {
              guild = UserGuildJoinRequestStore.getJoinRequestGuild(request.guildId);
            }
            const obj = { joinRequest: request, isModmin: canResult, guild };
            canResult = null != guild && PermissionStore.can(Permissions.KICK_MEMBERS, guild);
            return obj;
          }
        }
      }
      const effect1 = obj2.useEffect(tmp19, tmp20);
      if (cResult[13] === guild) {
        class M {
          constructor() {
            let canResult;
            const request = GuildJoinRequestStore.getRequest(closure_3);
            if (null == request) {
              return { joinRequest: null, isModmin: false, guild: null };
            } else {
              guild = GuildStore.getGuild(request.guildId);
              if (guild == null) {
                guild = UserGuildJoinRequestStore.getJoinRequestGuild(request.guildId);
              }
              const obj = { joinRequest: request, isModmin: canResult, guild };
              canResult = null != guild && PermissionStore.can(Permissions.KICK_MEMBERS, guild);
              return obj;
            }
          }
        }
      }
      const obj4 = { loading: tmp5, joinRequest, joinRequestGuild: guild };
      cResult[13] = guild;
      cResult[14] = joinRequest;
      cResult[15] = tmp5;
      cResult[16] = obj4;
    }
    const fn2 = function w() {
      if (null == joinRequest) {
        require(true);
        const obj = GuildJoinRequestActionCreatorsDefault;
        const joinRequestForInterview = obj.fetchJoinRequestForInterview(closure_3);
        joinRequestForInterview.finally(() => {
          closure_1_0(false);
        });
      }
    };
    const items1 = [joinRequest, tmp8];
    cResult[9] = tmp8;
    cResult[10] = joinRequest;
    cResult[11] = fn2;
    cResult[12] = items1;
    tmp19 = fn2;
    tmp20 = items1;
  }
  fn = function b() {
    const tmp = null != guild || first;
    if (!tmp) {
      closure_2(true);
      const obj = GuildJoinRequestActionCreatorsDefault;
      const requestToJoinGuilds = obj.fetchRequestToJoinGuilds();
    }
  };
  items2 = [guild, first];
  cResult[5] = first;
  cResult[6] = guild;
  cResult[7] = fn;
  cResult[8] = items2;
}) : (function useGetJoinRequestAndGuildForInterviewChannel(id) {
  let closure_2;
  let first;
  let joinRequest;
  let joinRequestGuild;
  let tmp2;
  let tmp = _slicedToArray(joinRequest.useState(false), 2);
  [tmp2, require] = tmp;
  [first, dependencyMap] = joinRequest.useState(false);
  let obj = first(11);
  const castResult = obj.cast(id);
  _slicedToArray = castResult;
  const items = [GuildJoinRequestStore, UserGuildJoinRequestStore, joinRequestGuild, PermissionStore];
  const obj2 = get_initialized;
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let canResult;
    const request = GuildJoinRequestStore.getRequest(_slicedToArray);
    if (null == request) {
      return { joinRequest: null, isModmin: false, guild: null };
    } else {
      let guild = GuildStore.getGuild(request.guildId);
      if (guild == null) {
        guild = UserGuildJoinRequestStore.getJoinRequestGuild(request.guildId);
      }
      const obj = { joinRequest: request, isModmin: canResult, guild };
      canResult = null != guild && PermissionStore.can(Permissions.KICK_MEMBERS, guild);
      return obj;
    }
  });
  joinRequest = stateFromStoresObject.joinRequest;
  joinRequestGuild = stateFromStoresObject.guild;
  const items1 = [joinRequestGuild, first];
  const effect = joinRequest.useEffect(() => {
    const tmp = null != joinRequestGuild || first;
    if (!tmp) {
      closure_2(true);
      const obj = GuildJoinRequestActionCreatorsDefault;
      const requestToJoinGuilds = obj.fetchRequestToJoinGuilds();
    }
  }, items1);
  const items2 = [joinRequest, castResult];
  const effect1 = joinRequest.useEffect(() => {
    if (null == joinRequest) {
      require(true);
      const obj = GuildJoinRequestActionCreatorsDefault;
      const joinRequestForInterview = obj.fetchJoinRequestForInterview(_slicedToArray);
      joinRequestForInterview.finally(() => {
        closure_1_0(false);
      });
    }
  }, items2);
  return { loading, joinRequest, joinRequestGuild };
});
const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx");

export default tmp2;
