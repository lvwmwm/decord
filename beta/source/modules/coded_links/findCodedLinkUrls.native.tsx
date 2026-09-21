// Module ID: 4747
// Function ID: 4748
// Name: findCodedLinkUrls
// Dependencies: [4748, 8252, 5209, 14118, 14119, 2]
// Exports: default

// Module 4747 (findCodedLinkUrls)
import MarkupTypes from "MarkupTypes" /* 5209 */;
import findCodedLinkUrlsUsingRegexDefault from "findCodedLinkUrlsUsingRegex" /* 14119 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  if (obj.isFindCodedLinksRegexEnabled()) {
    let items = findCodedLinkUrlsUsingRegexDefault(content);
  } else {
    items = [];
    const _default = tmp(4748).default;
    const parseToASTResult = tmp(4748).default.parseToAST(content, true, { allowLinks: true });
    tmp(8252).walkAst(parseToASTResult, (type) => {
      let tmp = type.type === MarkupTypes.AST_KEY.LINK && typeof type.target === "string";
      if (tmp) {
        tmp = type.target.length > 0;
      }
      if (tmp) {
        items.push(type.target);
      }
    });
    const tmpResult = tmp(8252);
  }
  return items;
};
