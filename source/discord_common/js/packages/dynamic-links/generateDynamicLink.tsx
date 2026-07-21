// Module ID: 12239
// Function ID: 93878
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default, generateAttemptId, parseDynamicLink

// Module 12239 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
let closure_3 = [839936529, 1175555635, -1122638574];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("../discord_common/js/packages/dynamic-links/generateDynamicLink.tsx");

export default function generateDynamicLink(arg0, arg1) {
  let androidFallbackLink;
  let iosFallbackLink;
  let utmSource;
  ({ utmSource, androidFallbackLink, iosFallbackLink } = arg1);
  const tmp = callback(arg1, closure_3);
  const str = new URL(arg0);
  for (const key10019 in tmp) {
    let tmp24 = key10019;
    let tmp25 = tmp[key10019];
    if (null == tmp25) {
      continue;
    } else {
      let searchParams = str.searchParams;
      let result = searchParams.set(key10019, tmp25);
      // continue
    }
    continue;
  }
  const encodeURIComponentResult = encodeURIComponent(str.toString());
  const encodeURIComponentResult1 = encodeURIComponent("discord://app/open#" + str.toString());
  const items = [1069815955, 962072626];
  const regExp = new RegExp("(" + items.join("|") + ")", "ig");
  let match;
  if (null != importDefault(dependencyMap[2])) {
    const str2 = importDefault(dependencyMap[2]).ua;
    if (null != str2) {
      match = str2.match(regExp);
    }
  }
  let name;
  if (null != importDefault(dependencyMap[2])) {
    name = importDefault(dependencyMap[2]).name;
  }
  let family;
  if (null != importDefault(dependencyMap[2])) {
    const os = importDefault(dependencyMap[2]).os;
    if (null != os) {
      family = os.family;
    }
  }
  let str3 = "false";
  if (tmp18) {
    str3 = "true";
  }
  let encodeURIComponentResult3 = null;
  if (null != androidFallbackLink) {
    const _encodeURIComponent = encodeURIComponent;
    encodeURIComponentResult3 = encodeURIComponent(androidFallbackLink);
  }
  let encodeURIComponentResult4 = null;
  if (null != iosFallbackLink) {
    const _encodeURIComponent2 = encodeURIComponent;
    encodeURIComponentResult4 = encodeURIComponent(iosFallbackLink);
  }
  const combined = "" + "https://discordapp.onelink.me" + "/Hs5r/?deep_link_value=" + encodeURIComponentResult + "&pid=" + utmSource + "&af_force_deeplink=" + str3 + "&af_og_description=" + encodeURIComponent(importDefault(dependencyMap[4])()) + "&af_dp=" + encodeURIComponentResult1;
  let sum = combined;
  if (null != encodeURIComponentResult3) {
    const _HermesInternal = HermesInternal;
    sum = combined + "&af_android_url=" + encodeURIComponentResult3;
  }
  let sum1 = sum;
  if (null != encodeURIComponentResult4) {
    const _HermesInternal2 = HermesInternal;
    sum1 = sum + "&af_ios_url=" + encodeURIComponentResult4;
  }
  return sum1;
};
export const generateAttemptId = function generateAttemptId() {
  return arg1(dependencyMap[3]).v4();
};
export const parseDynamicLink = function parseDynamicLink(str) {
  let done;
  if (str.startsWith("https://discordapp.onelink.me")) {
    const _URL = URL;
    const uRL = new URL(tmp);
    const searchParams = uRL.searchParams;
    let obj = searchParams;
    let value = searchParams.get("deep_link_value");
    if (null == value) {
      return null;
    } else {
      const _decodeURIComponent = decodeURIComponent;
      const _URL2 = URL;
      const uRL1 = new URL(decodeURIComponent(value));
      const searchParams2 = uRL1.searchParams;
      value = obj.get("pid");
      obj = {};
      let tmp12;
      if (null != value) {
        tmp12 = value;
      }
      obj.utmSource = tmp12;
      const tmp16 = _createForOfIteratorHelperLoose(searchParams2.entries());
      const iter = tmp16();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let tmp18 = iter2;
          let tmp19 = closure_5;
          let tmp20 = closure_5(iter2.value, 2);
          let tmp21 = obj;
          tmp13[tmp20[0]] = tmp20[1];
          let tmp22 = tmp16;
          let iter3 = tmp17();
          iter2 = iter3;
          done = iter3.done;
        } while (!done);
      }
      return obj;
    }
  } else {
    return null;
  }
  const tmp = str;
};
