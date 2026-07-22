// Module ID: 11655
// Function ID: 90411
// Name: useGetJoinRequestAndGuildForInterviewChannel
// Dependencies: []
// Exports: default

// Module 11655 (useGetJoinRequestAndGuildForInterviewChannel)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const Permissions = arg1(dependencyMap[6]).Permissions;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx");

export default function useGetJoinRequestAndGuildForInterviewChannel(id) {
  let tmp2;
  [tmp2, closure_0] = callback(React.useState(false), 2);
  const tmp3 = callback(React.useState(false), 2);
  const first = tmp3[0];
  const importDefault = first;
  let closure_2 = tmp3[1];
  const tmp = callback(React.useState(false), 2);
  const castResult = importDefault(closure_2[7]).cast(id);
  const callback = castResult;
  const obj = importDefault(closure_2[7]);
  const items = [closure_7, closure_8, closure_5, closure_6];
  const stateFromStoresObject = arg1(closure_2[8]).useStateFromStoresObject(items, () => {
    const request = request.getRequest(castResult);
    if (null == request) {
      return {};
    } else {
      let guild = joinRequestGuild.getGuild(request.guildId);
      if (null == guild) {
        guild = joinRequestGuild.getJoinRequestGuild(request.guildId);
      }
      const obj = { joinRequest: request };
      let canResult = null != guild;
      if (canResult) {
        canResult = closure_6.can(constants.KICK_MEMBERS, guild);
      }
      obj.isModmin = canResult;
      obj.guild = guild;
      return obj;
    }
  });
  const joinRequest = stateFromStoresObject.joinRequest;
  const React = joinRequest;
  const joinRequestGuild = stateFromStoresObject.guild;
  closure_5 = joinRequestGuild;
  const items1 = [joinRequestGuild, first];
  const effect = React.useEffect(() => {
    if (!tmp) {
      callback2(true);
      const requestToJoinGuilds = first(callback2[9]).fetchRequestToJoinGuilds();
      const obj = first(callback2[9]);
    }
  }, items1);
  const items2 = [joinRequest, castResult];
  const effect1 = React.useEffect(() => {
    if (null == joinRequest) {
      callback(true);
      const joinRequestForInterview = first(closure_2[9]).fetchJoinRequestForInterview(castResult);
      joinRequestForInterview.finally(() => {
        callback(false);
      });
      const obj = first(closure_2[9]);
    }
  }, items2);
  return { loading, joinRequest, joinRequestGuild };
};
