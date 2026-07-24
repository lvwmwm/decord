// Module ID: 8382
// Function ID: 66298
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 8355, 8383, 1443, 587, 566, 686, 2]

// Module 8382 (_isNativeReflectConstruct)
import getHostname from "getHostname";
import isOriginalContentTypeDifferent from "isOriginalContentTypeDifferent";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { SPOTIFY_HOSTNAMES } from "spotifyUtmParams";
import set from "_possibleConstructorReturn";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _isTrustedDomain(url) {
  const hostname = require(8383) /* getHostname */.getHostname(url);
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
              hasItem = importDefault(1443).isDiscordHostname(hostname);
              const obj2 = importDefault(1443);
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
  return set1.has(require(8383) /* getHostname */.getProtocol(url));
}
let set = new Set();
const set1 = new Set();
let replaced;
if (null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) {
  replaced = str.replace("//", "");
}
let tmp5 = ((Store) => {
  class MaskedLinkStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, MaskedLinkStore);
      obj = outer1_6(MaskedLinkStore);
      tmp2 = outer1_5;
      if (outer1_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(MaskedLinkStore, Store);
  let obj = {
    key: "initialize",
    value() {
      let trustedDomains;
      let trustedProtocols;
      const Storage = MaskedLinkStore(outer1_2[8]).Storage;
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
        let outer1_9 = _Set3;
        const _Set4 = Set;
        const set = new Set();
        let outer1_10 = set;
      } else {
        ({ trustedDomains, trustedProtocols } = obj);
        let _Set = Set;
        arr = null;
        if (null != trustedDomains) {
          const _Array = Array;
          arr = Array.from(trustedDomains);
        }
        const prototype = _Set.prototype;
        _Set = new _Set(arr);
        outer1_9 = _Set;
        let _Set2 = Set;
        let arr1 = null;
        if (null != trustedProtocols) {
          const _Array2 = Array;
          arr1 = Array.from(trustedProtocols);
        }
        const prototype2 = _Set2.prototype;
        _Set2 = new _Set2(arr1);
        outer1_10 = _Set2;
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "isTrustedDomain",
    value(arg0) {
      return outer1_13(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "isTrustedProtocol",
    value(arg0) {
      return outer1_14(arg0);
    }
  };
  items[2] = obj;
  return callback(MaskedLinkStore, items);
})(require("initialize").Store);
tmp5.displayName = "MaskedLinkStore";
tmp5 = new tmp5(require("dispatcher"), {
  MASKED_LINK_ADD_TRUSTED_DOMAIN: function handleAddTrustedDomain(url) {
    url = url.url;
    if (_isTrustedDomain(url)) {
      return false;
    } else {
      let obj = require(8383) /* getHostname */;
      set.add(obj.getHostname(url));
      const Storage = require(587) /* Storage */.Storage;
      obj = { trustedDomains: set, trustedProtocols: set1 };
      const result = Storage.set("MaskedLinkStore", obj);
    }
  },
  MASKED_LINK_ADD_TRUSTED_PROTOCOL: function handleAddTrustedProtocol(url) {
    url = url.url;
    if (_isTrustedProtocol(url)) {
      return false;
    } else {
      let obj = require(8383) /* getHostname */;
      set1.add(obj.getProtocol(url));
      const Storage = require(587) /* Storage */.Storage;
      obj = { trustedDomains: set, trustedProtocols: set1 };
      const result = Storage.set("MaskedLinkStore", obj);
    }
  }
});
let result = set.fileFinishedImporting("stores/MaskedLinkStore.tsx");

export default tmp5;
