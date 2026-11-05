// Module ID: 14128
// Function ID: 14129
// Name: isGuildLikeSearchContext
// Dependencies: [1072, 2]
// Exports: isGuildLikeSearchContext

// Module 14128 (isGuildLikeSearchContext)
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const SearchTypes = Constants.SearchTypes;
const result = size.fileFinishedImporting("modules/search/isGuildLikeSearchContext.tsx");

export function isGuildLikeSearchContext(searchContext) {
  return searchContext.type === SearchTypes.GUILD || searchContext.type === SearchTypes.GUILD_CHANNEL || searchContext.type === SearchTypes.THREAD;
}
