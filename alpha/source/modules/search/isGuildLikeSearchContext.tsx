// Module ID: 13153
// Function ID: 13154
// Name: isGuildLikeSearchContext
// Dependencies: [1087, 2]
// Exports: isGuildLikeSearchContext

// Module 13153 (isGuildLikeSearchContext)
import Constants from "Constants" /* 1087 */;
import size from "module_2" /* 2 */;

const SearchTypes = Constants.SearchTypes;
const result = size.fileFinishedImporting("modules/search/isGuildLikeSearchContext.tsx");

export const isGuildLikeSearchContext = function isGuildLikeSearchContext(searchContext) {
  return searchContext.type === SearchTypes.GUILD || searchContext.type === SearchTypes.GUILD_CHANNEL || searchContext.type === SearchTypes.THREAD;
};
