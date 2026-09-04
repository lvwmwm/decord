// Module ID: 4470
// Function ID: 4471
// Name: findCodedLinkUrls
// Dependencies: [4471, 7920, 4957, 13856, 13857, 2]
// Exports: default

// Module 4470 (findCodedLinkUrls)
import set from "set" /* 2 */;
import trimTrailingPunctuationDefault from "trimTrailingPunctuation" /* 13857 */;

const result = set.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  if (obj.isFindCodedLinksRegexEnabled()) {
    let items = trimTrailingPunctuationDefault(content);
  } else {
    items = [];
    const _default = tmp(4471).default;
    const parseToASTResult = tmp(4471).default.parseToAST(content, true, { allowLinks: true });
    tmp(7920).walkAst(parseToASTResult, (type) => {
      let tmp = type.type === items(closure_1_2[2]).AST_KEY.LINK && typeof type.target === "string";
      if (tmp) {
        tmp = type.target.length > 0;
      }
      if (tmp) {
        items.push(type.target);
      }
    });
    const tmpResult = tmp(7920);
  }
  return items;
};
