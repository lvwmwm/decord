// Module ID: 4745
// Function ID: 4746
// Name: findCodedLinkUrls
// Dependencies: [4746, 8247, 5207, 14115, 14116, 2]
// Exports: default

// Module 4745 (findCodedLinkUrls)
import MarkupTypes from "MarkupTypes" /* 5207 */;
import findCodedLinkUrlsUsingRegexDefault from "findCodedLinkUrlsUsingRegex" /* 14116 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  if (obj.isFindCodedLinksRegexEnabled()) {
    let items = findCodedLinkUrlsUsingRegexDefault(content);
  } else {
    items = [];
    const _default = tmp(4746).default;
    const parseToASTResult = tmp(4746).default.parseToAST(content, true, { allowLinks: true });
    tmp(8247).walkAst(parseToASTResult, (type) => {
      let tmp = type.type === MarkupTypes.AST_KEY.LINK && typeof type.target === "string";
      if (tmp) {
        tmp = type.target.length > 0;
      }
      if (tmp) {
        items.push(type.target);
      }
    });
    const tmpResult = tmp(8247);
  }
  return items;
};
