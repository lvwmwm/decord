// Module ID: 13214
// Function ID: 13215
// Name: isGuildLikeSearchContext
// Dependencies: [1071, 2]
// Exports: isGuildLikeSearchContext

// Module 13214 (isGuildLikeSearchContext)
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const SearchTypes = Constants.SearchTypes;
const result = size.fileFinishedImporting("modules/search/isGuildLikeSearchContext.tsx");

export function isGuildLikeSearchContext(searchContext) {
  return searchContext.type === SearchTypes.GUILD || searchContext.type === SearchTypes.GUILD_CHANNEL || searchContext.type === SearchTypes.THREAD;
}
