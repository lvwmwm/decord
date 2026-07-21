// Module ID: 11873
// Function ID: 91900
// Name: useGetGuildJoinRequest
// Dependencies: []
// Exports: default

// Module 11873 (useGetGuildJoinRequest)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_member_verification/hooks/useGetJoinRequestGuild.tsx");

export default function useGetGuildJoinRequest(arg0) {
  const arg1 = arg0;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => {
    let request = null;
    if (null != arg0) {
      request = request.getRequest(arg0);
    }
    return request;
  });
  const obj = arg1(dependencyMap[2]);
  const items1 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[2]).useStateFromStores(items1, () => request.hasFetchedRequestToJoinGuilds);
  const importDefault = stateFromStores1;
  const items2 = [stateFromStores1];
  const effect = React.useEffect(() => {
    if (!stateFromStores1) {
      const requestToJoinGuilds = stateFromStores1(closure_2[3]).fetchRequestToJoinGuilds();
      const obj = stateFromStores1(closure_2[3]);
    }
  }, items2);
  return stateFromStores;
};
