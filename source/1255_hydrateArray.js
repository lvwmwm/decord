// Module ID: 1255
// Function ID: 14121
// Name: hydrateArray
// Dependencies: []
// Exports: hydrateFormatJsAst, isCompressedAst

// Module 1255 (hydrateArray)
function hydrateArray(value) {
  let length;
  let num = 0;
  if (0 < value.length) {
    do {
      let tmp = closure_4;
      value[num] = closure_4(value[num]);
      num = num + 1;
      length = value.length;
    } while (num < length);
  }
  return true;
}
function hydrateSingle(value) {
  let tmp20;
  let tmp21;
  let tmp8;
  let tmp9;
  if ("string" === typeof value) {
    let obj = { type: 0, value };
    return obj;
  } else {
    const first = callback(value, 1)[0];
    if (obj.Argument === first) {
      obj = { type: first, value: value[1] };
      return obj;
    } else {
      if (obj.Number !== first) {
        if (obj.Date !== first) {
          if (obj.Time !== first) {
            if (obj.Select !== first) {
              if (obj.Plural !== first) {
                if (obj.Pound === first) {
                  return exports.FORMAT_JS_POUND;
                } else if (obj.Tag === first) {
                  const tmp7 = callback(value, 4);
                  [tmp8, tmp9] = tmp7;
                  hydrateArray(tmp7[2]);
                  if (null != tmp7[3]) {
                    hydrateArray(tmp11);
                  }
                  obj = { type: tmp8, value: tmp9, children: tmp7[2], control: tmp7[3] };
                  return obj;
                } else {
                  const _Error = Error;
                  const _HermesInternal = HermesInternal;
                  const error = new Error("FormatJS keyless JSON encountered an unknown type: " + first);
                  throw error;
                }
              }
            }
            const tmp19 = callback(value, 5);
            [tmp20, tmp21] = tmp19;
            for (const key10044 in tmp22) {
              let tmp36 = key10044;
              let tmp37 = closure_3;
              let tmp38 = closure_3(tmp22[key10044]);
              let obj1 = { value: tmp22[key10044] };
              tmp22[key10044] = obj1;
            }
            if (tmp20 === obj.Plural) {
              const obj2 = { type: tmp20, value: tmp21, options: tmp22, offset: tmp23, pluralType: tmp19[4] };
              let obj3 = obj2;
            } else {
              obj3 = { type: tmp20, value: tmp21, options: tmp22, offset: tmp23 };
            }
            return obj3;
          }
        }
      }
      const obj4 = { type: first, value: value[1], style: value[2] };
      return obj4;
    }
  }
}
let closure_2 = require(dependencyMap[0]);
function compressFormatJsToAst(value) {
  if (Array.isArray(value)) {
    return value.map((arg0) => callback(arg0));
  } else {
    const type = value.type;
    if (obj.Literal === type) {
      return value.value;
    } else if (obj.Argument === type) {
      const items = [, ];
      ({ type: arr6[0], value: arr6[1] } = value);
      return items;
    } else {
      if (obj.Number !== type) {
        if (obj.Date !== type) {
          if (obj.Time !== type) {
            if (obj.Select === type) {
              let obj = {};
              const _Object2 = Object;
              const entries = Object.entries(value.options);
              const tmp16 = entries[Symbol.iterator]();
              while (tmp16 !== undefined) {
                let tmp19 = callback;
                let tmp20 = callback(tmp17, 2);
                let tmp21 = obj;
                let tmp22 = compressFormatJsToAst;
                obj[tmp20[0]] = compressFormatJsToAst(tmp20[1].value);
                // continue
              }
              const items1 = [, , ];
              ({ type: arr4[0], value: arr4[1] } = value);
              items1[2] = obj;
              return items1;
            } else if (obj.Plural === type) {
              obj = {};
              const _Object = Object;
              const entries1 = Object.entries(value.options);
              const tmp7 = entries1[Symbol.iterator]();
              while (tmp7 !== undefined) {
                let tmp10 = callback;
                let tmp11 = callback(tmp8, 2);
                let tmp12 = obj;
                let tmp13 = compressFormatJsToAst;
                obj[tmp11[0]] = compressFormatJsToAst(tmp11[1].value);
                // continue
              }
              const items2 = [, , , , ];
              ({ type: arr3[0], value: arr3[1] } = value);
              items2[2] = obj;
              ({ offset: arr3[3], pluralType: arr3[4] } = value);
              return items2;
            } else if (obj.Pound === type) {
              const items3 = [value.type];
              return items3;
            } else if (obj.Tag === type) {
              const items4 = [, , , ];
              ({ type: arr[0], value: arr[1] } = value);
              items4[2] = compressFormatJsToAst(value.children);
              items4[3] = compressFormatJsToAst(value.control);
              return items4;
            }
          }
        }
      }
      const items5 = [, , ];
      ({ type: arr5[0], value: arr5[1], style: arr5[2] } = value);
      return items5;
    }
  }
}
const obj = {};
obj.Literal = 0;
obj[0] = "Literal";
obj.Argument = 1;
obj[1] = "Argument";
obj.Number = 2;
obj[2] = "Number";
obj.Date = 3;
obj[3] = "Date";
obj.Time = 4;
obj[4] = "Time";
obj.Select = 5;
obj[5] = "Select";
obj.Plural = 6;
obj[6] = "Plural";
obj.Pound = 7;
obj[7] = "Pound";
obj.Tag = 8;
obj[8] = "Tag";

export const hydrateFormatJsAst = function hydrateFormatJsAst(value) {
  if ("string" === typeof value) {
    return hydrateSingle(value);
  } else if ("string" === typeof value[0]) {
    hydrateArray(value);
    return value;
  } else if (0 === value.length) {
    return value;
  } else {
    const _Array = Array;
    if (Array.isArray(value[0])) {
      hydrateArray(value);
      return value;
    } else {
      return hydrateSingle(value);
    }
  }
};
export { compressFormatJsToAst };
export const isCompressedAst = function isCompressedAst(value) {
  let tmp = "string" === typeof value;
  if (!tmp) {
    const _Array = Array;
    const tmp3 = !Array.isArray(value);
    let tmp4 = !tmp3;
    if (!tmp3) {
      const _Array2 = Array;
      tmp4 = Array.isArray(value[0]) || "string" === typeof value[0];
      const tmp5 = Array.isArray(value[0]) || "string" === typeof value[0];
    }
    tmp = tmp4;
  }
  return tmp;
};
export const FormatJsNodeType = obj;
export const FORMAT_JS_POUND = Object.freeze({ type: 7 });
