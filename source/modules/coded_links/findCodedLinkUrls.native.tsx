// Module ID: 4549
// Function ID: 4550
// Name: findCodedLinkUrls
// Dependencies: [4550, 7989, 4996, 13846, 13847, 2]
// Exports: default

// Module 4549 (findCodedLinkUrls)
import set from "set" /* 2 */;
import trimTrailingPunctuationDefault from "trimTrailingPunctuation" /* 13847 */;

const result = set.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  if (obj.isFindCodedLinksRegexEnabled()) {
    let items = trimTrailingPunctuationDefault(content);
  } else {
    items = [];
    const _default = tmp(4550).default;
    const parseToASTResult = tmp(4550).default.parseToAST(content, true, { allowLinks: true });
    tmp(7989).walkAst(parseToASTResult, (type) => {
      let tmp = type.type === items(closure_1_2[2]).AST_KEY.LINK && typeof type.target === "string";
      if (tmp) {
        tmp = type.target.length > 0;
      }
      if (tmp) {
        items.push(type.target);
      }
    });
    const tmpResult = tmp(7989);
  }
  return items;
};
