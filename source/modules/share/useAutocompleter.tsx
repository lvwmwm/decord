// Module ID: 9888
// Function ID: 76572
// Name: useAutocompleter
// Dependencies: [57, 31, 5450, 7094, 2]
// Exports: default

// Module 9888 (useAutocompleter)
import _slicedToArray from "_slicedToArray";
import result from "result";

const result = require("useInitialValue").fileFinishedImporting("modules/share/useAutocompleter.tsx");

export default function useAutocompleter(searchOptions) {
  searchOptions = searchOptions.searchOptions;
  let tmp = callback(React.useState({ results: [], query: "" }), 2);
  const dependencyMap = tmp[1];
  const tmp2 = searchOptions(5450)(() => {
    let tmp = searchOptions(table[3]);
    tmp = new tmp((results, query) => {
      outer1_1({ results, query });
    });
    tmp.setLimit(20);
    tmp.search("");
    return tmp;
  });
  callback = tmp2;
  const items = [tmp2];
  const effect = React.useEffect(() => () => outer1_2.destroy(), items);
  const items1 = [tmp2, searchOptions];
  const effect1 = React.useEffect(() => {
    let tmp = null != searchOptions;
    if (tmp) {
      tmp = searchOptions !== tmp2.options;
    }
    if (tmp) {
      tmp2.setOptions(searchOptions);
    }
  }, items1);
  const items2 = [tmp2];
  const merged = Object.assign(tmp[0]);
  return {
    search: React.useCallback((arg0) => {
      let query;
      let resultTypes;
      ({ query, resultTypes } = arg0);
      let tmp = null != tmp2.resultTypes;
      if (tmp) {
        tmp = (function isArrayEqualSet(resultTypes, resultTypes2) {
          let closure_0 = resultTypes2;
          return resultTypes.length === resultTypes2.size && resultTypes.every((arg0) => set.has(arg0));
        })(resultTypes, tmp2.resultTypes);
      }
      if (!tmp) {
        tmp2.setResultTypes(resultTypes);
        let num = 20;
        if (1 === resultTypes.length) {
          num = 50;
        }
        tmp2.setLimit(num);
      }
      let str = "";
      if ("" !== query.trim()) {
        str = query;
      }
      tmp2.search(str);
    }, items2)
  };
};
