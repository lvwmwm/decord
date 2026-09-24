// Module ID: 8401
// Function ID: 8402
// Dependencies: [8402, 8403]
// Exports: parse, unparse

// Module 8401
import reviveBigInts from "reviveBigInts" /* 8402 */;
import DiscordMarkdownDefault from "DiscordMarkdown" /* 8403 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export const parse = function parse(arg0, arg1, arg2) {
  const obj = reviveBigInts;
  let json;
  if (null != arg1) {
    const _JSON = JSON;
    json = JSON.stringify(arg1);
  }
  return obj.decodeAstJson(DiscordMarkdownDefault.parseToAstString(arg0, json, arg2));
};
export const unparse = function unparse(arg0) {
  const obj = DiscordMarkdownDefault;
  return obj.unparseFromAstString(reviveBigInts.encodeAstJson(arg0));
};
