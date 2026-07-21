// Module ID: 13128
// Function ID: 99503
// Dependencies: []

// Module 13128
let tmp2 = !tmp;
if (!!Object.getOwnPropertySymbols) {
  tmp2 = !require(dependencyMap[0])(() => {
    const SymbolResult = Symbol("symbol detection");
    let tmp2 = !require(dependencyMap[1]).String(SymbolResult);
    if (!tmp2) {
      const _Object = Object;
      const _Symbol = Symbol;
      tmp2 = !(Object(SymbolResult) instanceof Symbol);
    }
    if (!tmp2) {
      const _Symbol2 = Symbol;
      let tmp3 = !Symbol.sham;
      if (tmp3) {
        tmp3 = require(dependencyMap[2]);
      }
      if (tmp3) {
        tmp3 = require(dependencyMap[2]) < 41;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  });
}

export default tmp2;
