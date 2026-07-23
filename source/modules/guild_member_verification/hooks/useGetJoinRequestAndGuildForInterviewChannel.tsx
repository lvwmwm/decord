// Module ID: 11665
// Function ID: 90460
// Name: useGetJoinRequestAndGuildForInterviewChannel
// Dependencies: [57, 31, 1838, 3758, 6692, 3948, 653, 21, 566, 9160, 2]
// Exports: default

// Module 11665 (useGetJoinRequestAndGuildForInterviewChannel)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx");

export default function useGetJoinRequestAndGuildForInterviewChannel(id) {
  let require;
  let tmp2;
  [tmp2, require] = castResult(joinRequest.useState(false), 2);
  const tmp3 = castResult(joinRequest.useState(false), 2);
  const first = tmp3[0];
  const dependencyMap = tmp3[1];
  const tmp = castResult(joinRequest.useState(false), 2);
  castResult = first(21).cast(id);
  let obj = first(21);
  const items = [closure_7, closure_8, joinRequestGuild, _isNativeReflectConstruct];
  const stateFromStoresObject = require(566) /* initialize */.useStateFromStoresObject(items, () => {
    const request = outer1_7.getRequest(_slicedToArray);
    if (null == request) {
      return { joinRequest: null, isModmin: false, guild: null };
    } else {
      let guild = joinRequestGuild.getGuild(request.guildId);
      if (null == guild) {
        guild = outer1_8.getJoinRequestGuild(request.guildId);
      }
      const obj = { joinRequest: request };
      let canResult = null != guild;
      if (canResult) {
        canResult = outer1_6.can(outer1_9.KICK_MEMBERS, guild);
      }
      obj.isModmin = canResult;
      obj.guild = guild;
      return obj;
    }
  });
  joinRequest = stateFromStoresObject.joinRequest;
  joinRequestGuild = stateFromStoresObject.guild;
  const items1 = [joinRequestGuild, first];
  const effect = joinRequest.useEffect(() => {
    if (!tmp) {
      dependencyMap(true);
      const requestToJoinGuilds = first(9160).fetchRequestToJoinGuilds();
      const obj = first(9160);
    }
  }, items1);
  const items2 = [joinRequest, castResult];
  const effect1 = joinRequest.useEffect(() => {
    if (null == joinRequest) {
      callback(true);
      const joinRequestForInterview = first(9160).fetchJoinRequestForInterview(_slicedToArray);
      joinRequestForInterview.finally(() => {
        outer1_0(false);
      });
      const obj = first(9160);
    }
  }, items2);
  return { loading, joinRequest, joinRequestGuild };
};
