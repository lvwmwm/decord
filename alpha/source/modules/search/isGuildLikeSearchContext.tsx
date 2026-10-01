// Module ID: 12036
// Function ID: 12037
// Name: isGuildLikeSearchContext
// Dependencies: [1074, 2]
// Exports: isGuildLikeSearchContext

// Module 12036 (isGuildLikeSearchContext)
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const SearchTypes = Constants.SearchTypes;
const result = size.fileFinishedImporting("modules/search/isGuildLikeSearchContext.tsx");

export const isGuildLikeSearchContext = function isGuildLikeSearchContext(searchContext) {
  return searchContext.type === SearchTypes.GUILD || searchContext.type === SearchTypes.GUILD_CHANNEL || searchContext.type === SearchTypes.THREAD;
};
