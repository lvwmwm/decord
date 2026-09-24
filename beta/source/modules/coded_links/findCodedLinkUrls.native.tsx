// Module ID: 4779
// Function ID: 4780
// Name: findCodedLinkUrls
// Dependencies: [4780, 8284, 5241, 14155, 14156, 2]
// Exports: default

// Module 4779 (findCodedLinkUrls)
import MarkupTypes from "MarkupTypes" /* 5241 */;
import findCodedLinkUrlsUsingRegexDefault from "findCodedLinkUrlsUsingRegex" /* 14156 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  if (obj.isFindCodedLinksRegexEnabled()) {
    let items = findCodedLinkUrlsUsingRegexDefault(content);
  } else {
    items = [];
    const _default = tmp(4780).default;
    const parseToASTResult = tmp(4780).default.parseToAST(content, true, { allowLinks: true });
    tmp(8284).walkAst(parseToASTResult, (type) => {
      let tmp = type.type === MarkupTypes.AST_KEY.LINK && typeof type.target === "string";
      if (tmp) {
        tmp = type.target.length > 0;
      }
      if (tmp) {
        items.push(type.target);
      }
    });
    const tmpResult = tmp(8284);
  }
  return items;
};
