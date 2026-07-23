// Module ID: 15413
// Function ID: 118473
// Name: useAutoSearchMembersTab
// Dependencies: [31, 10077, 11399, 653, 22, 10078, 11406, 11398, 2]
// Exports: useAutoSearchMembersTab

// Module 15413 (useAutoSearchMembersTab)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SEARCH_TEXT_INPUT_DEBOUNCE_TIME as closure_5 } from "SEARCH_TEXT_INPUT_DEBOUNCE_TIME";
import { SearchTypes } from "ME";

const require = arg1;
let result = require("SEARCH_TEXT_INPUT_DEBOUNCE_TIME").fileFinishedImporting("modules/search/native/hooks/useAutoSearchMembersTab.tsx");

export const useAutoSearchMembersTab = function useAutoSearchMembersTab(searchContext, arg1) {
  let closure_0 = searchContext;
  let closure_1 = arg1;
  const items = [arg1, searchContext];
  const effect = React.useEffect(() => {
    if (!callback) {
      let obj = searchContext(outer1_2[4]);
      const debounceResult = searchContext(outer1_2[4]).debounce((searchQueryString) => {
        if (!outer2_4.isAutocompleteVisible(outer1_0)) {
          let obj = callback(outer2_2[5]);
          const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(outer1_0);
          if (null != guildIdFromSearchContext) {
            const channelIds = outer2_4.getChannelIds(outer1_0);
            let tmp8 = null;
            if (0 !== channelIds.size) {
              let first = null;
              if (1 === channelIds.size) {
                const _Array = Array;
                first = Array.from(channelIds)[0];
              }
              tmp8 = first;
            }
            obj = { searchContext: outer1_0, searchQueryString, guildId: guildIdFromSearchContext, channelId: tmp8 };
            let tmp13 = null;
            if (outer1_0.type === outer2_6.THREAD) {
              tmp13 = tmp8;
            }
            obj.threadId = tmp13;
            callback2(outer2_2[6]).searchGuildMemberTab(obj);
            const obj2 = callback2(outer2_2[6]);
          }
        }
      }, outer1_5);
      return callback(outer1_2[7]).subscribeTextInputValue(searchContext, debounceResult);
    }
  }, items);
  const items1 = [searchContext];
  const effect1 = React.useEffect(() => () => {
    const result = callback(outer2_2[6]).cleanupGuildMemberTab(outer1_0);
  }, items1);
};
