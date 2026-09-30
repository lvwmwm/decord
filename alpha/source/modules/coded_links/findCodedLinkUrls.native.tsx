// Module ID: 4852
// Function ID: 4853
// Name: findCodedLinkUrls
// Dependencies: [4853, 7626, 5498, 13587, 13588, 2]
// Exports: default

// Module 4852 (findCodedLinkUrls)
import MarkupTypes from "MarkupTypes" /* 5498 */;
import findCodedLinkUrlsUsingRegexDefault from "findCodedLinkUrlsUsingRegex" /* 13588 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  if (obj.isFindCodedLinksRegexEnabled()) {
    let items = findCodedLinkUrlsUsingRegexDefault(content);
  } else {
    items = [];
    const _default = tmp(4853).default;
    const parseToASTResult = tmp(4853).default.parseToAST(content, true, { allowLinks: true });
    tmp(7626).walkAst(parseToASTResult, (type) => {
      let tmp = type.type === MarkupTypes.AST_KEY.LINK && typeof type.target === "string";
      if (tmp) {
        tmp = type.target.length > 0;
      }
      if (tmp) {
        items.push(type.target);
      }
    });
    const tmpResult = tmp(7626);
  }
  return items;
};
