// Module ID: 13208
// Function ID: 13209
// Name: isGuildLikeSearchContext
// Dependencies: [1071, 2]
// Exports: isGuildLikeSearchContext

// Module 13208 (isGuildLikeSearchContext)
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const SearchTypes = Constants.SearchTypes;
const result = size.fileFinishedImporting("modules/search/isGuildLikeSearchContext.tsx");

export function isGuildLikeSearchContext(searchContext) {
  return searchContext.type === SearchTypes.GUILD || searchContext.type === SearchTypes.GUILD_CHANNEL || searchContext.type === SearchTypes.THREAD;
}
