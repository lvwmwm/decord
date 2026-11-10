// Module ID: 14157
// Function ID: 14158
// Name: isGuildLikeSearchContext
// Dependencies: [1072, 2]
// Exports: isGuildLikeSearchContext

// Module 14157 (isGuildLikeSearchContext)
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const SearchTypes = Constants.SearchTypes;
const result = size.fileFinishedImporting("modules/search/isGuildLikeSearchContext.tsx");

export function isGuildLikeSearchContext(searchContext) {
  return searchContext.type === SearchTypes.GUILD || searchContext.type === SearchTypes.GUILD_CHANNEL || searchContext.type === SearchTypes.THREAD;
}
