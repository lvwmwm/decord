// Module ID: 15187
// Function ID: 114554
// Name: result
// Dependencies: []
// Exports: usePaginatedMemberApplications

// Module 15187 (result)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const result = arg1(dependencyMap[3]).MAX_RESULTS_PER_PAGE * arg1(dependencyMap[3]).MAX_VISIBLE_PAGES;
const result1 = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_member_verification/hooks/usePaginatedMemberApplications.tsx");

export const MEMBER_APPLICATION_FETCH_LIMIT = result;
export const usePaginatedMemberApplications = function usePaginatedMemberApplications(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const guildJoinRequests = guildId.guildJoinRequests;
  const importDefault = guildJoinRequests;
  let closure_2 = React.useRef(false);
  const tmp = callback(React.useState(null), 2);
  const first = tmp[0];
  let closure_3 = first;
  const callback = tmp[1];
  const React = React.useRef(null);
  let closure_6 = React.useRef(false);
  const items = [first, guildId, guildJoinRequests];
  return {
    fetchNextPage: React.useCallback(() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = first(tmp);
      return function() {
        return callback(...arguments);
      };
    }(), items),
    error: first
  };
};
