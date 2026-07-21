// Module ID: 9154
// Function ID: 71767
// Name: useCurrentUserGuildJoinRequest
// Dependencies: [131072, 368050176, 5]
// Exports: useCurrentUserGuildJoinRequest

// Module 9154 (useCurrentUserGuildJoinRequest)
import asyncGeneratorStep from "asyncGeneratorStep";

let closure_2 = importDefault(dependencyMap[0]);
const result = asyncGeneratorStep.fileFinishedImporting("modules/guild_member_verification/hooks/useCurrentUserGuildJoinRequest.tsx");

export const useCurrentUserGuildJoinRequest = function useCurrentUserGuildJoinRequest(guildId) {
  const arg1 = guildId;
  const items = [closure_2];
  const items1 = [guildId];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => {
    let request = null;
    if (null != arg0) {
      request = request.getRequest(arg0);
    }
    return request;
  }, items1);
};
