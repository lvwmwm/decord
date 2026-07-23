// Module ID: 15311
// Function ID: 116767
// Name: result
// Dependencies: [5, 57, 31, 3950, 21, 9160, 4029, 2]
// Exports: usePaginatedMemberApplications

// Module 15311 (result)
import _fetchGuildJoinRequests from "_fetchGuildJoinRequests";
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
const result = require("isTermsFormField").MAX_RESULTS_PER_PAGE * require("isTermsFormField").MAX_VISIBLE_PAGES;
const result1 = require("result").fileFinishedImporting("modules/guild_member_verification/hooks/usePaginatedMemberApplications.tsx");

export const MEMBER_APPLICATION_FETCH_LIMIT = result;
export const usePaginatedMemberApplications = function usePaginatedMemberApplications(guildId) {
  guildId = guildId.guildId;
  const guildJoinRequests = guildId.guildJoinRequests;
  let closure_2 = React.useRef(false);
  const tmp = callback(React.useState(null), 2);
  const first = tmp[0];
  callback = tmp[1];
  React = React.useRef(null);
  let closure_6 = React.useRef(false);
  const items = [first, guildId, guildJoinRequests];
  return {
    fetchNextPage: React.useCallback((() => {
      // CreateGeneratorClosureLongIndex (0x67)
      let closure_0 = first(tmp);
      return function() {
        return callback(...arguments);
      };
    })(), items),
    error: first
  };
};
