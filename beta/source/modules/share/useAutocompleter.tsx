// Module ID: 10455
// Function ID: 10456
// Name: useAutocompleter
// Dependencies: [32, 19, 5910, 9290, 2]
// Exports: default

// Module 10455 (useAutocompleter)
import _modDef9290 from "module_9290" /* 9290 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const result = size.fileFinishedImporting("modules/share/useAutocompleter.tsx");

export default function useAutocompleter(searchOptions) {
  let c1;
  let items2;
  let options;
  let tmp2;
  searchOptions = searchOptions.searchOptions;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let tmp = _slicedToArray(react.useState({ results: [], query: "" }), 2);
  [tmp2, c1] = tmp;
  const tmp3 = searchOptions(5910)(() => {
    let obj = new _modDef9290((results, query) => {
      const obj = { results, query };
      closure_1_1(obj);
    });
    obj.setLimit(20);
    obj.search("");
    return obj;
  });
  _slicedToArray = tmp3;
  const items = [tmp3];
  const effect = react.useEffect(() => () => options.destroy(), items);
  const items1 = [tmp3, searchOptions];
  const effect1 = react.useEffect(() => {
    const tmp2 = null != searchOptions && tmp !== options.options;
    if (tmp2) {
      options.setOptions(searchOptions);
    }
  }, items1);
  let obj = {
    search: react.useCallback((arg0) => {
      let query;
      let resultTypes;
      const f125070 = (item) => resultTypes2.has(item);
      ({ query, resultTypes } = arg0);
      let tmp = null != options.resultTypes;
      if (tmp) {
        const resultTypes2 = obj.resultTypes;
        tmp = resultTypes.length === resultTypes2.size && resultTypes.every(f125070);
        resultTypes.length === resultTypes2.size && resultTypes.every(f125070);
      }
      if (!tmp) {
        options.setResultTypes(resultTypes);
        let num = 20;
        const setLimit = obj.setLimit;
        if (1 === resultTypes.length) {
          num = 50;
        }
        setLimit(num);
      }
      const search = obj.search;
      let str = "";
      if ("" !== query.trim()) {
        str = query;
      }
      search(str);
    }, items2)
  };
  items2 = [tmp3];
  const merged = Object.assign(tmp2);
  return obj;
};
