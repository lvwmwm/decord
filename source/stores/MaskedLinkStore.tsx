// Module ID: 8327
// Function ID: 65998
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8327 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _isTrustedDomain(url) {
  const hostname = arg1(dependencyMap[6]).getHostname(url);
  if (window.GLOBAL_ENV.INVITE_HOST !== hostname) {
    const _window2 = window;
    if (window.GLOBAL_ENV.GIFT_CODE_HOST !== hostname) {
      const _window = window;
      if (window.GLOBAL_ENV.GUILD_TEMPLATE_HOST !== hostname) {
        if (replaced !== hostname) {
          const _location = location;
          if (location.hostname !== hostname) {
            let hasItem = SPOTIFY_HOSTNAMES.includes(hostname);
            if (!hasItem) {
              hasItem = importDefault(dependencyMap[7]).isDiscordHostname(hostname);
              const obj2 = importDefault(dependencyMap[7]);
            }
            if (!hasItem) {
              hasItem = set.has(hostname);
            }
            return hasItem;
          }
        }
      }
    }
  }
  return true;
}
function _isTrustedProtocol(url) {
  return set1.has(arg1(dependencyMap[6]).getProtocol(url));
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const SPOTIFY_HOSTNAMES = arg1(dependencyMap[5]).SPOTIFY_HOSTNAMES;
const set = new Set();
const set1 = new Set();
let replaced;
if (null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) {
  replaced = str.replace("//", "");
}
let tmp5 = (Store) => {
  class MaskedLinkStore {
    constructor() {
      self = this;
      tmp = closure_3(this, MaskedLinkStore);
      obj = closure_6(MaskedLinkStore);
      tmp2 = closure_5;
      if (closure_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = MaskedLinkStore;
  callback2(MaskedLinkStore, Store);
  let obj = {
    key: "initialize",
    value() {
      let trustedDomains;
      let trustedProtocols;
      const Storage = MaskedLinkStore(closure_2[8]).Storage;
      let obj = Storage.get("MaskedLinkStore");
      if (null == obj) {
        obj = {};
      }
      if (Array.isArray(obj)) {
        let _Set3 = Set;
        let arr = null;
        if (null != obj) {
          const _Array3 = Array;
          arr = Array.from(obj);
        }
        const prototype3 = _Set3.prototype;
        _Set3 = new _Set3(arr);
        let _Set = _Set3;
        const _Set4 = Set;
        const set = new Set();
        let _Set2 = set;
      } else {
        ({ trustedDomains, trustedProtocols } = obj);
        _Set = Set;
        arr = null;
        if (null != trustedDomains) {
          const _Array = Array;
          arr = Array.from(trustedDomains);
        }
        const prototype = _Set.prototype;
        _Set = new _Set(arr);
        _Set2 = Set;
        let arr1 = null;
        if (null != trustedProtocols) {
          const _Array2 = Array;
          arr1 = Array.from(trustedProtocols);
        }
        const prototype2 = _Set2.prototype;
        _Set2 = new _Set2(arr1);
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "isTrustedDomain",
    value(arg0) {
      return callback4(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "isTrustedProtocol",
    value(arg0) {
      return callback5(arg0);
    }
  };
  items[2] = obj;
  return callback(MaskedLinkStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp5.displayName = "MaskedLinkStore";
tmp5 = new tmp5(importDefault(dependencyMap[10]), {
  MASKED_LINK_ADD_TRUSTED_DOMAIN: function handleAddTrustedDomain(url) {
    url = url.url;
    if (_isTrustedDomain(url)) {
      return false;
    } else {
      let obj = arg1(dependencyMap[6]);
      set.add(obj.getHostname(url));
      const Storage = arg1(dependencyMap[8]).Storage;
      obj = { trustedDomains: set, trustedProtocols: set1 };
      const result = Storage.set("MaskedLinkStore", obj);
    }
  },
  MASKED_LINK_ADD_TRUSTED_PROTOCOL: function handleAddTrustedProtocol(url) {
    url = url.url;
    if (_isTrustedProtocol(url)) {
      return false;
    } else {
      let obj = arg1(dependencyMap[6]);
      set1.add(obj.getProtocol(url));
      const Storage = arg1(dependencyMap[8]).Storage;
      obj = { trustedDomains: set, trustedProtocols: set1 };
      const result = Storage.set("MaskedLinkStore", obj);
    }
  }
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("stores/MaskedLinkStore.tsx");

export default tmp5;
