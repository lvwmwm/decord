// Module ID: 4437
// Function ID: 4438
// Name: findCodedLinkUrls
// Dependencies: [4438, 7866, 4917, 13552, 13553, 2]
// Exports: default

// Module 4437 (findCodedLinkUrls)
import set from "set" /* 2 */;
import trimTrailingPunctuationDefault from "trimTrailingPunctuation" /* 13553 */;

const result = set.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  if (obj.isFindCodedLinksRegexEnabled()) {
    let items = trimTrailingPunctuationDefault(content);
  } else {
    items = [];
    const _default = tmp(4438).default;
    const parseToASTResult = tmp(4438).default.parseToAST(content, true, { allowLinks: true });
    tmp(7866).walkAst(parseToASTResult, (type) => {
      let tmp = type.type === items(closure_1_2[2]).AST_KEY.LINK && typeof type.target === "string";
      if (tmp) {
        tmp = type.target.length > 0;
      }
      if (tmp) {
        items.push(type.target);
      }
    });
    const tmpResult = tmp(7866);
  }
  return items;
};
