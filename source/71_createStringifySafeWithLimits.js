// Module ID: 71
// Function ID: 1458
// Name: createStringifySafeWithLimits
// Dependencies: []

// Module 71 (createStringifySafeWithLimits)
function createStringifySafeWithLimits(maxDepth) {
  function replacer(arg0, arr) {
    const self = this;
    if (arr.length) {
      if (self !== arr[0]) {
        arr = arr.shift();
        while (arr.length) {
          let tmp5 = arr;
          if (self === arr[0]) {
            break;
          }
        }
      }
    }
    if ("string" === typeof arr) {
      if (arr.length > POSITIVE_INFINITY2 + 17) {
        let text = `${arr.substring(0, closure_1)}...(truncated)...`;
      } else {
        text = arr;
      }
      return text;
    } else {
      if ("object" === typeof arr) {
        if (null !== arr) {
          let combined = arr;
          const _Array = Array;
          if (Array.isArray(arr)) {
            if (arr.length >= POSITIVE_INFINITY) {
              const _HermesInternal3 = HermesInternal;
              combined = "[ ... array with " + arr.length + " values ... ]";
            } else if (arr.length > POSITIVE_INFINITY3) {
              const substr = arr.slice(0, POSITIVE_INFINITY3);
              const _HermesInternal2 = HermesInternal;
              const items = ["... extra " + arr.length - POSITIVE_INFINITY3 + " values truncated ..."];
              combined = substr.concat(items);
            }
          } else {
            POSITIVE_INFINITY(POSITIVE_INFINITY2[0])("object" === typeof arr, "This was already found earlier");
            const _Object = Object;
            const keys = Object.keys(arr);
            if (arr.length >= POSITIVE_INFINITY) {
              const _HermesInternal = HermesInternal;
              combined = "{ ... object with " + keys.length + " keys ... }";
            } else if (keys.length > POSITIVE_INFINITY4) {
              combined = {};
              const substr1 = keys.slice(0, POSITIVE_INFINITY4);
              for (const item10037 of substr1) {
                let tmp13 = combined;
                let tmp14 = arg1;
                combined[item10037] = arg1[item10037];
              }
              combined....(truncated keys)... = keys.length - POSITIVE_INFINITY4;
            }
          }
          arr = arr.unshift(combined);
          return combined;
        }
      }
      return arr;
    }
  }
  let POSITIVE_INFINITY = maxDepth.maxDepth;
  if (undefined === POSITIVE_INFINITY) {
    const _Number = Number;
    POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
  }
  const arg2 = POSITIVE_INFINITY;
  let POSITIVE_INFINITY2 = maxDepth.maxStringLimit;
  if (undefined === POSITIVE_INFINITY2) {
    const _Number2 = Number;
    POSITIVE_INFINITY2 = Number.POSITIVE_INFINITY;
  }
  const arg6 = POSITIVE_INFINITY2;
  let POSITIVE_INFINITY3 = maxDepth.maxArrayLimit;
  if (undefined === POSITIVE_INFINITY3) {
    const _Number3 = Number;
    POSITIVE_INFINITY3 = Number.POSITIVE_INFINITY;
  }
  let POSITIVE_INFINITY4 = maxDepth.maxObjectKeysLimit;
  if (undefined === POSITIVE_INFINITY4) {
    const _Number4 = Number;
    POSITIVE_INFINITY4 = Number.POSITIVE_INFINITY;
  }
  let closure_4 = [];
  return function stringifySafe(arg0) {
    if (undefined === arg0) {
      return "undefined";
    } else if (null === str) {
      return "null";
    } else if ("function" === typeof str) {
      return str.toString();
    } else {
      const _Error = Error;
      if (str instanceof Error) {
        return str.name + ": " + str.message;
      } else {
        const _JSON = JSON;
        const json = JSON.stringify(str, replacer);
        let text = json;
        if (undefined === json) {
          text = `${"[\"" + typeof str}" failed to stringify]`;
        }
        return text;
      }
    }
  };
}
arg5.default = createStringifySafeWithLimits({ 13107235008: null, 0: 1, 9223372036854775807: "keyword", 9223372036854775807: "to top right" });
arg5.createStringifySafeWithLimits = createStringifySafeWithLimits;
