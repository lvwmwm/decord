// Module ID: 9004
// Function ID: 70860
// Name: getOrParseBioAST
// Dependencies: []
// Exports: parseBioReactWithCachedAST

// Module 9004 (getOrParseBioAST)
function getOrParseBioAST(description) {
  let value = importDefaultResult1.get(description);
  if (null == value) {
    const tmp3 = callback(description, true);
    const result = importDefaultResult1.set(description, tmp3);
    value = tmp3;
  }
  return value;
}
const items = [importDefault(dependencyMap[1]).PROFILE_BIO_RULES, importDefault(dependencyMap[2])({ -1721651893: null, confirmText: null })];
const importDefaultResultResult = importDefault(dependencyMap[0])(items);
let importDefaultResult1 = importDefault(dependencyMap[3]);
let obj = { max: 2000 };
importDefaultResult1 = new importDefaultResult1(obj);
const importDefaultResult = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[4]);
const reactParserForResult = importAll(dependencyMap[4]).reactParserFor(importDefaultResultResult);
let closure_4 = importDefault(dependencyMap[5]).astParserFor(importDefaultResultResult);
const importDefaultResult2 = importDefault(dependencyMap[5]);
const importAllResult1 = importAll(dependencyMap[4]);
const importDefaultResult3 = importDefault(dependencyMap[0]);
const items1 = [importDefault(dependencyMap[7]).omit(importDefaultResultResult, [-1374389440, "<string:1077549793>", "<string:377957170>", "<string:1916653273>", "<string:927713088>", "<string:207634825>"]), ];
obj = {
  react() {
    return null;
  }
};
items1[1] = { emoji: obj };
const importDefaultResult4 = importDefault(dependencyMap[7]);
const reactParserForResult1 = importAllResult1.reactParserFor(importDefaultResult3(items1));
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/markup/BioMarkupUtils.tsx");

export const parseBioReact = reactParserForResult;
export { getOrParseBioAST };
export const parseBioReactWithCachedAST = function parseBioReactWithCachedAST(description) {
  if (0 === description.trim().length) {
    return null;
  } else {
    const tmp2 = getOrParseBioAST(description);
    const obj = importDefault(dependencyMap[6]);
    return obj.reactFor(importDefault(dependencyMap[6]).ruleOutput(importDefaultResultResult, "react"))(tmp2);
  }
};
export const parseBioReactWithoutScrolling = reactParserForResult1;
