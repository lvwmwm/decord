// Module ID: 1250
// Function ID: 14061
// Dependencies: [1251, 1253, 1254, 1261, 1266, 1268, 1269, 1270, 1271]

// Module 1250
const self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let fn = self;
  if (self) {
    fn = self.__exportStar;
  }
  if (!fn) {
    fn = (obj, exports) => {
      for (const key10007 in arg0) {
        let tmp4 = key10007;
        let callResult = "default" === key10007;
        if (!callResult) {
          let _Object = Object;
          callResult = hasOwnProperty.call(arg1, key10007);
        }
        if (callResult) {
          continue;
        } else {
          let tmp2 = self2;
          let tmp3 = self2(arg1, arg0, key10007);
          continue;
        }
        continue;
      }
    };
  }
  const _Object2 = Object;
  let obj = { value: true };
  exports.makeDataFormatters = undefined;
  exports.dataFormatterCache = undefined;
  exports.FormatBuilder = undefined;
  exports.bindFormatValues = undefined;
  exports.runtimeHashMessageKey = undefined;
  exports.IntlManager = undefined;
  exports.DEFAULT_LOCALE = undefined;
  exports.InternalIntlMessage = undefined;
  exports.createLoader = undefined;
  exports.loadAllMessagesInLocale = undefined;
  exports.waitForAllDefaultIntlMessagesLoaded = undefined;
  exports.MessageLoader = undefined;
  exports.chainMessagesObjects = undefined;
  exports.makeMessagesProxy = undefined;
  const _Object3 = Object;
  obj = {
    enumerable: true,
    get() {
        return require(1251) /* makeDataFormatters */.makeDataFormatters;
      }
  };
  Object.defineProperty(exports, "makeDataFormatters", obj);
  const _Object4 = Object;
  obj = {
    enumerable: true,
    get() {
        return require(1253) /* dataFormatterCache */.dataFormatterCache;
      }
  };
  Object.defineProperty(exports, "dataFormatterCache", obj);
  const _Object5 = Object;
  const obj1 = {
    enumerable: true,
    get() {
        return require(1254) /* _isNativeReflectConstruct */.FormatBuilder;
      }
  };
  Object.defineProperty(exports, "FormatBuilder", obj1);
  const _Object6 = Object;
  const obj2 = {
    enumerable: true,
    get() {
        return require(1254) /* _isNativeReflectConstruct */.bindFormatValues;
      }
  };
  Object.defineProperty(exports, "bindFormatValues", obj2);
  fn(require("module_1261"), exports);
  const _Object7 = Object;
  const obj3 = {
    enumerable: true,
    get() {
        return require(1266) /* runtimeHashMessageKey */.runtimeHashMessageKey;
      }
  };
  Object.defineProperty(exports, "runtimeHashMessageKey", obj3);
  const _Object8 = Object;
  const obj4 = {
    enumerable: true,
    get() {
        return require(1268) /* DEFAULT_LOCALE */.IntlManager;
      }
  };
  Object.defineProperty(exports, "IntlManager", obj4);
  const _Object9 = Object;
  const obj5 = {
    enumerable: true,
    get() {
        return require(1268) /* DEFAULT_LOCALE */.DEFAULT_LOCALE;
      }
  };
  Object.defineProperty(exports, "DEFAULT_LOCALE", obj5);
  const _Object10 = Object;
  const obj6 = {
    enumerable: true,
    get() {
        return require(1269) /* serializeAst */.InternalIntlMessage;
      }
  };
  Object.defineProperty(exports, "InternalIntlMessage", obj6);
  const _Object11 = Object;
  const obj7 = {
    enumerable: true,
    get() {
        return require(1270) /* MessageLoader */.createLoader;
      }
  };
  Object.defineProperty(exports, "createLoader", obj7);
  const _Object12 = Object;
  const obj8 = {
    enumerable: true,
    get() {
        return require(1270) /* MessageLoader */.loadAllMessagesInLocale;
      }
  };
  Object.defineProperty(exports, "loadAllMessagesInLocale", obj8);
  const _Object13 = Object;
  const obj9 = {
    enumerable: true,
    get() {
        return require(1270) /* MessageLoader */.waitForAllDefaultIntlMessagesLoaded;
      }
  };
  Object.defineProperty(exports, "waitForAllDefaultIntlMessagesLoaded", obj9);
  const _Object14 = Object;
  const obj10 = {
    enumerable: true,
    get() {
        return require(1270) /* MessageLoader */.MessageLoader;
      }
  };
  Object.defineProperty(exports, "MessageLoader", obj10);
  const _Object15 = Object;
  const obj11 = {
    enumerable: true,
    get() {
        return require(1271) /* isMessagesProxy */.chainMessagesObjects;
      }
  };
  Object.defineProperty(exports, "chainMessagesObjects", obj11);
  const _Object16 = Object;
  const obj12 = {
    enumerable: true,
    get() {
        return require(1271) /* isMessagesProxy */.makeMessagesProxy;
      }
  };
  Object.defineProperty(exports, "makeMessagesProxy", obj12);
} else {
  let _Object = Object;
}
