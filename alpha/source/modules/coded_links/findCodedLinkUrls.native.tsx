// Module ID: 4818
// Function ID: 4819
// Name: findCodedLinkUrls
// Dependencies: [4819, 8337, 5294, 14213, 14214, 2]
// Exports: default

// Module 4818 (findCodedLinkUrls)
import MarkupTypes from "MarkupTypes" /* 5294 */;
import findCodedLinkUrlsUsingRegexDefault from "findCodedLinkUrlsUsingRegex" /* 14214 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/coded_links/findCodedLinkUrls.native.tsx");

export default function findCodedLinkUrls(content) {
  if (obj.isFindCodedLinksRegexEnabled()) {
    let items = findCodedLinkUrlsUsingRegexDefault(content);
  } else {
    items = [];
    const _default = tmp(4819).default;
    const parseToASTResult = tmp(4819).default.parseToAST(content, true, { allowLinks: true });
    tmp(8337).walkAst(parseToASTResult, (type) => {
      let tmp = type.type === MarkupTypes.AST_KEY.LINK && typeof type.target === "string";
      if (tmp) {
        tmp = type.target.length > 0;
      }
      if (tmp) {
        items.push(type.target);
      }
    });
    const tmpResult = tmp(8337);
  }
  return items;
};
