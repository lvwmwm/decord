// Module ID: 14193
// Function ID: 14194
// Name: useGetJoinRequestAndGuildForInterviewChannel
// Dependencies: [32, 19, 4885, 4946, 6917, 5046, 1072, 11, 504, 6916, 2]
// Exports: default

// Module 14193 (useGetJoinRequestAndGuildForInterviewChannel)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 6916 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4885 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 6917 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 5046 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let _slicedToArray = _slicedToArray_mod;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx");

export default function useGetJoinRequestAndGuildForInterviewChannel(id) {
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
};
