// Module ID: 5887
// Function ID: 5888
// Name: findCodedLinkUrls
// Dependencies: [5888, 8587, 6167, 15913, 15914, 2]
// Exports: default

// Module 5887 (findCodedLinkUrls)
import MarkupTypes from "MarkupTypes" /* 6167 */;
import findCodedLinkUrlsUsingRegexDefault from "findCodedLinkUrlsUsingRegex" /* 15914 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  let items;
  let tmp = items;
  const obj = items(15913);
  if (obj.isFindCodedLinksRegexEnabled()) {
    items = findCodedLinkUrlsUsingRegexDefault(content);
  } else {
    items = [];
    const _default = tmp(5888).default;
    const parseToASTResult = _default.parseToAST(content, true, { allowLinks: true });
    const tmpResult = tmp(8587);
    tmpResult.walkAst(parseToASTResult, (type) => {
      const tmp = type.type === MarkupTypes.AST_KEY.LINK && typeof type.target === "string" && type.target.length > 0;
      if (tmp) {
        items.push(type.target);
      }
    });
  }
  return items;
};
