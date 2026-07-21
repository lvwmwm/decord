// Module ID: 13053
// Function ID: 99322
// Name: isMatched
// Dependencies: []

// Module 13053 (isMatched)
function isMatched(region, str) {
  const parts = str.split("-");
  const first = parts[0];
  if (parts[2]) {
    if ("$" === arr[0]) {
      const slice = arr.slice;
      if ("!" !== arr[1]) {
        let arr2 = arg2[slice(arr, 1)];
      } else {
        arr2 = arg2[slice(arr, 2)];
      }
      const mapped = arr2.map((arg0) => {
        let tmp = callback(closure_1[2]).regions[arg0];
        if (!tmp) {
          const items = [arg0];
          tmp = items;
        }
        return tmp;
      });
      const reduced = mapped.reduce((items, items) => {
        const obj = callback(closure_1[1]);
        return obj.__spreadArray(callback(closure_1[1]).__spreadArray([], items, true), items, true);
      }, []);
      let str4 = region.region;
      if (!str4) {
        str4 = "";
      }
      let tmp4 = reduced.indexOf(str4) > -1 === tmp6;
    }
    if (tmp4) {
      let tmp7 = !region.script;
      if (!tmp7) {
        tmp7 = "*" === tmp3 || tmp3 === region.script;
        const tmp8 = "*" === tmp3 || tmp3 === region.script;
      }
      tmp4 = tmp7;
    }
    if (tmp4) {
      let tmp9 = !region.language;
      if (!tmp9) {
        tmp9 = "*" === first || first === region.language;
        const tmp10 = "*" === first || first === region.language;
      }
      tmp4 = tmp9;
    }
    return tmp4;
  }
  tmp4 = !region.region;
  if (!tmp4) {
    tmp4 = "*" === arr || arr === region.region;
    const tmp5 = "*" === arr || arr === region.region;
  }
}
function serializeLSR(arg0) {
  const items = [, , ];
  ({ language: arr[0], script: arr[1], region: arr[2] } = arg0);
  const found = items.filter(Boolean);
  return found.join("-");
}
function findMatchingDistanceForLSR(arg0, arg1, matches) {
  let tmp;
  matches = matches.matches;
  let num = 0;
  if (0 < matches.length) {
    while (true) {
      tmp = matches[num];
      let tmp2 = isMatched;
      let tmp3 = isMatched(arg0, tmp.desired, matches.matchVariables);
      if (tmp3) {
        let tmp4 = isMatched;
        tmp3 = isMatched(arg1, tmp.supported, matches.matchVariables);
      }
      let tmp5 = tmp.oneway || tmp3;
      if (!tmp5) {
        let tmp6 = isMatched;
        let tmp7 = isMatched(arg0, tmp.supported, matches.matchVariables);
        if (tmp7) {
          let tmp8 = isMatched;
          tmp7 = isMatched(arg1, tmp.desired, matches.matchVariables);
        }
        tmp3 = tmp7;
      }
      if (tmp3) {
        break;
      } else {
        num = num + 1;
      }
    }
    const result = 10 * tmp.distance;
    const paradigmLocales = matches.paradigmLocales;
    const paradigmLocales1 = matches.paradigmLocales;
    let diff = result;
    if (tmp12 !== paradigmLocales1.indexOf(serializeLSR(arg1)) > -1) {
      diff = result - 1;
    }
    return diff;
  }
  const error = new Error("No matching distance found");
  throw error;
}
function findMatchingDistance(arg0, arg1) {
  const locale = new Intl.Locale(arg0);
  const maximizeResult = locale.maximize();
  const locale1 = new Intl.Locale(arg1);
  const maximizeResult1 = locale1.maximize();
  let obj = { language: maximizeResult.language, script: tmp3, region: tmp4 };
  obj = { language: maximizeResult1.language, script: tmp5, region: tmp6 };
  const tmp7 = function processData() {
    if (!obj) {
      const first = callback(closure_1[0]).data.supplemental.languageMatching.written-new[0];
      let paradigmLocales;
      if (null !== first) {
        if (undefined !== first) {
          paradigmLocales = first.paradigmLocales;
        }
      }
      let parts;
      if (null !== paradigmLocales) {
        if (undefined !== paradigmLocales) {
          parts = paradigmLocales._locales.split(" ");
          const str = paradigmLocales._locales;
        }
      }
      const prop = callback(closure_1[0]).data.supplemental.languageMatching.written-new;
      const substr = prop.slice(1, 5);
      const prop1 = callback(closure_1[0]).data.supplemental.languageMatching.written-new;
      const substr1 = prop1.slice(5);
      const obj = {
        matches: substr1.map((arg0) => {
            const first = Object.keys(arg0)[0];
            return { supported: first, desired: arg0[first]._desired, distance: +arg0[first]._distance, oneway: "true" === arg0[first].oneway };
          }, {}),
        matchVariables: substr.reduce((arg0, arg1) => {
            const first = Object.keys(arg1)[0];
            const substr = first.slice(1);
            arg0[substr] = arg1[first]._value.split("+");
            return arg0;
          }, {})
      };
      const obj2 = callback(closure_1[1]);
      const obj3 = callback(closure_1[1]);
      obj.paradigmLocales = obj2.__spreadArray(callback(closure_1[1]).__spreadArray([], parts, true), parts.map((str) => {
        const locale = new Intl.Locale(str.replace(/_/g, "-"));
        return locale.maximize().toString();
      }), true);
      const __spreadArrayResult = callback(closure_1[1]).__spreadArray([], parts, true);
    }
    return obj;
  }();
  let num = 0;
  if (obj.language !== obj.language) {
    const obj1 = { "Null": false, "Null": false, "Null": false, language: maximizeResult.language };
    const obj2 = { "Null": false, "Null": false, "Null": false, language: maximizeResult1.language };
    num = findMatchingDistanceForLSR(obj1, obj2, tmp7);
  }
  let sum = num;
  if (obj.script !== obj.script) {
    const obj3 = { language: maximizeResult.language, script: obj.script, region: "" };
    const obj4 = { language: maximizeResult1.language, script: obj.script, region: "" };
    sum = num + findMatchingDistanceForLSR(obj3, obj4, tmp7);
  }
  let sum1 = sum;
  if (obj.region !== obj.region) {
    sum1 = sum + findMatchingDistanceForLSR(obj, obj, tmp7);
  }
  return sum1;
}
arg5.UNICODE_EXTENSION_SEQUENCE_REGEX = undefined;
arg5.invariant = function invariant(arg0, arg1, arg2) {
  let _Error = arg2;
  if (undefined === arg2) {
    _Error = Error;
  }
  if (!arg0) {
    const prototype = _Error.prototype;
    _Error = new _Error(arg1);
    throw _Error;
  }
};
arg5.findMatchingDistance = findMatchingDistance;
arg5.findBestMatch = function findBestMatch(arr) {
  let tmp = arg2;
  if (undefined === arg2) {
    tmp = closure_3;
  }
  let closure_1 = Infinity;
  const obj = { matchedDesiredLocale: "", distances: {} };
  const item = arr.forEach((arg0, arg1) => {
    arg1 = arg0;
    let closure_1 = arg1;
    if (!obj.distances[arg0]) {
      obj.distances[arg0] = {};
    }
    const item = arg1.forEach((matchedSupportedLocale) => {
      const sum = callback(matchedSupportedLocale, matchedSupportedLocale) + 40 * arg1;
      distances.distances[closure_0][matchedSupportedLocale] = sum;
      if (sum < arg1) {
        const arg1 = sum;
        distances.matchedDesiredLocale = matchedSupportedLocale;
        distances.matchedSupportedLocale = matchedSupportedLocale;
      }
    });
  });
  if (closure_1 >= tmp) {
    obj.matchedDesiredLocale = undefined;
    obj.matchedSupportedLocale = undefined;
  }
  return obj;
};
arg5.UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
let closure_3 = 838;
