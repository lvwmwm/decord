// Module ID: 12892
// Function ID: 12893
// Name: isGuildLikeSearchContext
// Dependencies: [1085, 2]
// Exports: isGuildLikeSearchContext

// Module 12892 (isGuildLikeSearchContext)
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const SearchTypes = Constants.SearchTypes;
const result = size.fileFinishedImporting("modules/search/isGuildLikeSearchContext.tsx");

export const isGuildLikeSearchContext = function isGuildLikeSearchContext(searchContext) {
  return searchContext.type === SearchTypes.GUILD || searchContext.type === SearchTypes.GUILD_CHANNEL || searchContext.type === SearchTypes.THREAD;
};
