// Module ID: 10930
// Function ID: 10931
// Name: conjureLinkEmbeds
// Dependencies: [5, 32, 19, 1383, 10931, 558, 576, 2]
// Exports: readyConjureLinkEmbeds, resetConjureLinkEmbedsForTests

// Module 10930 (conjureLinkEmbeds)
import URLUtilsDefault from "URLUtils" /* 1383 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1, c11, c12, set2;

const f110428 = (item) => {
  obj = /^https?:\/\//i;
  return obj.test(item);
};
function conjureLinkUrls(arr) {
  if (arr.includes("http")) {
    let match = arr.match(URLUtilsDefault.URL_REGEX);
    if (match == null) {
      match = [];
    }
    const _Set = Set;
    const self = this;
    const self2 = this;
    const items = [];
    set = new Set(match.filter(f110428));
    HermesBuiltin.arraySpread(items, set, 0);
    return items.slice(0, 4);
  } else {
    return [];
  }
}
function prefetchConjureLinkEmbeds(arg0) {
  return obj(...arguments);
}
let obj = function _prefetchConjureLinkEmbeds() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_0 = arg0;
    if (c12 === 2) {
      c12 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      while (true) {
        let c2;
        let joined;
        c12 = 2;
        let tmp6 = c11;
        if (0 === c11) {
          if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c12 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_8 = tmp;
            let closure_7 = tmp2;
            map = undefined;
            c2 = undefined;
            let arr3 = conjureLinkUrls(closure_0);
            joined = arr3.join(" ");
            if (0 !== arr3.length) {
              if (!set.has(joined)) {
                if (!set2.has(joined)) {
                  let addResult = set2.add(joined);
                  let c10 = 2;
                  let _Map = Map;
                  let self = this;
                  let self2 = this;
                  map = new Map();
                  let obj2 = require("MediaChannelActionCreators");
                  c11 = 3;
                  c12 = 1;
                  let obj5 = { value: obj2.unfurlEmbedUrl(arr3), done: false };
                  return obj5;
                }
              }
            }
          }
        } else if (1 === tmp6) {
          c10 = 0;
          let deleteResult = closure_136_7.delete(joined);
          throw prefetchConjureLinkEmbeds;
        } else {
          if (2 === tmp6) {
            c10 = 1;
          } else {
            let closure_2;
            if (3 === tmp6) {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c10 = 0;
                let deleteResult1 = closure_136_7.delete(joined);
                c12 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                let embeds = value.embeds;
                let closure_1 = embeds;
                if (embeds == null) {
                  closure_1 = [];
                }
                let closure_3 = closure_1;
                closure_2 = closure_1[Symbol.iterator]();
                while (closure_2 !== undefined) {
                  c10 = 3;
                  c2 = tmp14;
                  if (null != c2.url) {
                    let closure_4 = 0;
                    set = map.set;
                    let url = c2.url;
                    let value2 = map.get(c2.url);
                    let closure_5 = value2;
                    if (value2 == null) {
                      closure_5 = [];
                    }
                    let items = [];
                    let arraySpreadResult = HermesBuiltin.arraySpread(items, closure_5, closure_4);
                    closure_4 = arraySpreadResult;
                    items[arraySpreadResult] = c2;
                    closure_4 = closure_4 + 1;
                    let result = set(url, items);
                  }
                  c10 = 2;
                  continue;
                }
                if (closure_136_6.size >= 100) {
                  let _delete = closure_136_6.delete;
                  let iter = closure_136_6.keys();
                  value = iter.next().value;
                  let c6 = value;
                  if (value == null) {
                    c6 = "";
                  }
                  let _deleteResult = _delete(c6);
                }
                let items1 = [];
                set2 = closure_136_6.set;
                let arraySpreadResult2 = HermesBuiltin.arraySpread(items1, map, 0);
                let set2Result = set2(joined, items1.flatMap((item) => {
                  let tmp;
                  let tmp2;
                  function toConjureLinkEmbed(url, arr) {
                    const first = closure_1_4(arr, 1)[0];
                    let items = [];
                    function _loop(iter) {
                      closure_0 = iter;
                      let url;
                      if (iter != null) {
                        url = iter.url;
                      }
                      if (null != url) {
                        const arr = items;
                        if (!items.some((url) => url.url === url.url)) {
                          const push = arr.push;
                          if (null != iter.proxy_url) {
                            const obj3 = { url: null, proxy_url: null };
                            ({ url: obj2.url, proxy_url: obj2.proxy_url } = iter);
                            obj = obj3;
                          } else {
                            obj = { url: iter.url };
                          }
                          push(obj);
                        }
                      }
                      return 1;
                    }
                    const flatMapResult = arr.flatMap((item) => {
                      const items = [, ];
                      ({ image: arr[0], thumbnail: arr[1] } = item);
                      return items;
                    });
                    const iter = flatMapResult[Symbol.iterator]();
                    while (iter !== undefined) {
                      let _loopResult = _loop(iter.next());
                      continue;
                    }
                    obj = { url };
                    const provider = first.provider;
                    let name;
                    if (provider != null) {
                      name = provider.name;
                    }
                    if (name == null) {
                      const footer = first.footer;
                      let text;
                      if (footer != null) {
                        text = footer.text;
                      }
                      name = text;
                    }
                    if (null != first.title) {
                      obj.title = first.title;
                    }
                    if (null != first.description) {
                      obj.description = first.description;
                    }
                    if (null != name) {
                      obj.site = name;
                    }
                    const author = first.author;
                    let name1;
                    if (author != null) {
                      name1 = author.name;
                    }
                    if (null != name1) {
                      obj.author = first.author.name;
                    }
                    if (items.length > 0) {
                      obj.images = items;
                    }
                    if (arr.some((video) => null != video.video)) {
                      obj.video = true;
                    }
                    if (null == obj.title) {
                      let tmp7;
                      if (null == obj.description) {
                        tmp7 = null;
                      }
                      return tmp7;
                    }
                    tmp7 = obj;
                  }
                  [tmp, tmp2] = item;
                  let items = toConjureLinkEmbed(tmp, tmp2);
                  if (items == null) {
                    items = [];
                  }
                  return items;
                }));
                c10 = 1;
              }
            } else {
              let tmp7 = prefetchConjureLinkEmbeds;
              c10 = 2;
              closure_2.return();
              throw prefetchConjureLinkEmbeds;
            }
          }
          c10 = 0;
          let deleteResult2 = closure_136_7.delete(joined);
        }
        c12 = 3;
        return { value: "IconComponent", done: "IconComponent" };
      }
    }
  });
  return obj(...arguments);
};
let map = new Map();
let set = new Set();
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureLinkPrefetch(arg0) {
  let closure_0;
  let tmp2;
  let tmp3;
  _require = arg0;
  obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] !== arg0) {
    const fn = function l() {
      let substr;
      let timeout;
      const str = timeout;
      if (timeout.includes("http")) {
        const tmp2 = dependencyMap;
        let match = str.match(URLUtilsDefault.URL_REGEX);
        if (match == null) {
          match = [];
        }
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set(match.filter(f110428));
        const items = [];
        const tmp6 = set;
        HermesBuiltin.arraySpread(items, set, 0);
        substr = items.slice(0, 4);
      } else {
        substr = [];
      }
      if (0 !== substr.length) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(_asyncToGenerator(async (arg0, value) => {
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: "IconComponent" };
            }
          } else {
            try {
              c0 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  c1 = 1;
                  c0 = 1;
                  const obj4 = { value: prefetchConjureLinkEmbeds(c0), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c0 = 3;
                return { value: "IconComponent", done: "IconComponent" };
              }
            } catch (tmp6) {
              c0 = 3;
              throw tmp6;
            }
          }
        }), 300);
        return () => clearTimeout(closure_0);
      }
    };
    let items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : (function useConjureLinkPrefetch(arg0) {
  let closure_0 = arg0;
  let items = [arg0];
  const effect = react.useEffect(function() {
    let substr;
    let timeout;
    const str = timeout;
    if (timeout.includes("http")) {
      const tmp2 = dependencyMap;
      let match = str.match(URLUtilsDefault.URL_REGEX);
      if (match == null) {
        match = [];
      }
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(match.filter(f110428));
      const items = [];
      const tmp6 = set;
      HermesBuiltin.arraySpread(items, set, 0);
      substr = items.slice(0, 4);
    } else {
      substr = [];
    }
    if (0 !== substr.length) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(_asyncToGenerator(async (arg0, value) => {
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: "IconComponent" };
          }
        } else {
          try {
            c0 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                c1 = 1;
                c0 = 1;
                const obj4 = { value: prefetchConjureLinkEmbeds(c0), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c0 = 3;
              return { value: "IconComponent", done: "IconComponent" };
            }
          } catch (tmp6) {
            c0 = 3;
            throw tmp6;
          }
        }
      }), 300);
      return () => clearTimeout(closure_0);
    }
  }, items);
});
let result = size.fileFinishedImporting("modules/conjure/chat/conjureLinkEmbeds.tsx");

export const MAX_CONJURE_LINK_EMBEDS = 4;
export const CONJURE_LINK_PREFETCH_DELAY_MS = 300;
export { conjureLinkUrls };
export { prefetchConjureLinkEmbeds };
export function readyConjureLinkEmbeds(trimmed) {
  let substr;
  const get = map.get;
  if (trimmed.includes("http")) {
    let match = trimmed.match(URLUtilsDefault.URL_REGEX);
    if (match == null) {
      match = [];
    }
    const _Set = Set;
    const self = this;
    const self2 = this;
    const items = [];
    set = new Set(match.filter(f110428));
    HermesBuiltin.arraySpread(items, set, 0);
    substr = items.slice(0, 4);
  } else {
    substr = [];
  }
  const value = get(substr.join(" "));
  let tmp10;
  if (null != value) {
    if (value.length > 0) {
      tmp10 = value;
    }
  }
  return tmp10;
}
export const useConjureLinkPrefetch = tmp4;
export function resetConjureLinkEmbedsForTests() {
  map.clear();
  set.clear();
}
