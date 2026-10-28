// Module ID: 13467
// Function ID: 13468
// Name: isGuildLikeSearchContext
// Dependencies: [1084, 2]
// Exports: isGuildLikeSearchContext

// Module 13467 (isGuildLikeSearchContext)
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

const SearchTypes = Constants.SearchTypes;
const result = size.fileFinishedImporting("modules/search/isGuildLikeSearchContext.tsx");

export const isGuildLikeSearchContext = function isGuildLikeSearchContext(searchContext) {
  return searchContext.type === SearchTypes.GUILD || searchContext.type === SearchTypes.GUILD_CHANNEL || searchContext.type === SearchTypes.THREAD;
};
