// Module ID: 13189
// Function ID: 99765
// Name: replaceByteInByteSequence
// Dependencies: []

// Module 13189 (replaceByteInByteSequence)
function replaceByteInByteSequence(arr) {
  let index = arr.indexOf(arg1);
  if (index >= 0) {
    do {
      arr[index] = arg2;
      index = arr.indexOf(arg1, index + 1);
    } while (index >= 0);
  }
  return arr;
}
function percentEncode(arg0) {
  const formatted = arg0.toString(16).toUpperCase();
  let text = formatted;
  if (1 === formatted.length) {
    text = `0${arr}`;
  }
  return "%" + text;
}
function percentDecode(_Buffer) {
  _Buffer = require(dependencyMap[1]).Buffer;
  const allocResult = _Buffer.alloc(_Buffer.byteLength);
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < _Buffer.length) {
    while (true) {
      if (37 === _Buffer[num2]) {
        let tmp = require;
        let tmp2 = dependencyMap;
        let obj = require(dependencyMap[2]);
        if (obj.isASCIIHex(_Buffer[num2 + 1])) {
          let tmp3 = require;
          let tmp4 = dependencyMap;
          let obj2 = require(dependencyMap[2]);
          if (obj2.isASCIIHex(_Buffer[num2 + 2])) {
            let tmp8 = +num;
            let sum = tmp8 + 1;
            let _parseInt = parseInt;
            let str = _Buffer.slice(num2 + 1, num2 + 3);
            allocResult[tmp8] = parseInt(str.toString(), 16);
            let sum1 = num2 + 2;
            num2 = sum1 + 1;
            num = sum;
            num3 = sum;
            if (num2 >= _Buffer.length) {
              break;
            }
          }
        }
      }
      let tmp5 = +num;
      sum = tmp5 + 1;
      allocResult[tmp5] = _Buffer[num2];
      sum1 = num2;
    }
  }
  return allocResult.slice(0, num3);
}
function serializeUrlencodedByte(_Buffer) {
  let str = "";
  const iter = _Buffer[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp17 = nextResult;
    let tmp18 = str;
    let str2 = "+";
    if (32 === nextResult) {
      str = `+`;
      // continue
    } else {
      let tmp2 = nextResult;
      if (42 !== tmp17) {
        let tmp3 = nextResult;
        if (45 !== tmp17) {
          let tmp4 = nextResult;
          if (46 !== tmp17) {
            let tmp5 = nextResult;
            if (tmp17 < 48) {
              let tmp7 = nextResult;
              if (tmp17 < 65) {
                let tmp9 = nextResult;
                if (95 !== tmp17) {
                  let tmp10 = nextResult;
                  if (tmp17 < 97) {
                    let tmp12 = percentEncode;
                    let tmp13 = nextResult;
                    let fromCodePointResult = percentEncode(tmp17);
                  } else {
                    let tmp11 = nextResult;
                  }
                }
                let tmp16 = fromCodePointResult;
              } else {
                let tmp8 = nextResult;
              }
            } else {
              let tmp6 = nextResult;
            }
          }
        }
      }
      let _String = String;
      let tmp15 = nextResult;
      fromCodePointResult = String.fromCodePoint(tmp17);
    }
  }
  return str;
}
let closure_2 = require(dependencyMap[0]);

export default {
  percentEncode,
  percentDecode,
  parseUrlencoded(first) {
    const _Buffer = require(dependencyMap[1]).Buffer;
    return function _parseUrlencoded(_Buffer) {
      const items = [];
      let index = _Buffer.indexOf(38);
      let num = 0;
      let num2 = 0;
      while (index >= 0) {
        let arr = items.push(_Buffer.slice(num, index));
        let sum = index + 1;
        index = _Buffer.indexOf(38, sum);
        num = sum;
        num2 = sum;
      }
      if (num2 !== _Buffer.length) {
        items.push(_Buffer.slice(num2));
      }
      const items1 = [];
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let arr5 = nextResult;
        if (0 === nextResult.length) {
          // continue
        } else {
          let tmp25 = nextResult;
          let index1 = arr5.indexOf(61);
          let tmp27 = index1;
          if (index1 >= 0) {
            let tmp9 = nextResult;
            let tmp10 = index1;
            let substr = arr5.slice(0, tmp27);
            let substr1 = arr5.slice(tmp27 + 1);
          } else {
            substr = nextResult;
            let tmp6 = callback;
            let tmp7 = closure_1;
            _Buffer = callback(closure_1[1]).Buffer;
            substr1 = _Buffer.alloc(0);
          }
          let tmp11 = callback2;
          let tmp12 = callback;
          let tmp13 = closure_1;
          let _Buffer2 = callback(closure_1[1]).Buffer;
          let tmp14 = substr;
          let fromResult = _Buffer2.from(substr);
          let tmp16 = callback2(fromResult, 43, 32);
          let tmp17 = fromResult;
          let _Buffer3 = callback(closure_1[1]).Buffer;
          let tmp18 = substr1;
          let fromResult1 = _Buffer3.from(substr1);
          let tmp20 = callback2(fromResult1, 43, 32);
          let tmp21 = fromResult1;
          let tmp22 = items1;
          let tmp23 = callback3;
          let str = callback3(fromResult);
          let items2 = [str.toString(), ];
          let str2 = callback3(fromResult1);
          items2[1] = str2.toString();
          let arr1 = items1.push(items2);
        }
      }
      return items1;
    }(_Buffer.from(first));
  },
  serializeUrlencoded(_list) {
    let arr;
    let tmp23;
    let tmp;
    if (arguments.length > 1) {
      if (undefined !== arguments[1]) {
        tmp = arguments[1];
      }
    }
    let str = "utf-8";
    if (undefined !== tmp) {
      str = tmp;
    }
    let str2 = "";
    const entries = _list.entries();
    while (tmp3 !== undefined) {
      let tmp21 = callback;
      let tmp22 = callback(tmp4, 2);
      [tmp23, arr] = tmp22;
      let tmp24 = arr;
      let tmp25 = serializeUrlencodedByte;
      let tmp26 = require;
      let tmp27 = dependencyMap;
      let _Buffer2 = require(dependencyMap[1]).Buffer;
      let tmp28 = serializeUrlencodedByte(_Buffer2.from(arr[0]));
      let name = arr[1];
      let tmp29 = arr.length > 2;
      let tmp6 = tmp29;
      if (tmp29) {
        let tmp5 = arr;
        tmp6 = undefined !== tmp24[2];
      }
      if (tmp6) {
        let tmp7 = arr;
        if ("hidden" === tmp24[2]) {
          let tmp8 = tmp28;
          if ("_charset_" === tmp28) {
            name = str;
          }
        }
        let tmp9 = arr;
        if ("file" === tmp24[2]) {
          let tmp10 = name;
          name = name.name;
        }
      }
      let tmp11 = tmp23;
      if (0 !== tmp23) {
        let tmp12 = str2;
        str2 = `${str2}&`;
      }
      let tmp13 = str2;
      let tmp14 = tmp28;
      let tmp15 = serializeUrlencodedByte;
      let tmp16 = require;
      let tmp17 = dependencyMap;
      let _Buffer = require(dependencyMap[1]).Buffer;
      let tmp18 = name;
      let tmp19 = serializeUrlencodedByte(_Buffer.from(name));
      let tmp20 = tmp19;
      let _HermesInternal = HermesInternal;
      str2 = str2 + "" + tmp28 + "=" + tmp19;
      // continue
    }
    return str2;
  }
};
