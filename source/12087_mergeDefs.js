// Module ID: 12087
// Function ID: 12088
// Name: mergeDefs
// Dependencies: [12077]

// Module 12087 (mergeDefs)
const self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp8 = key10009;
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp5 = self2;
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
              let tmp4 = hasOwnPropertyResult;
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    exports.default = function default_1() {
      if (typeof error !== "find") {
        HermesBuiltin.throwTypeError();
      }
      let closure_0 = { string: { unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" }, file: { unit: "\u0431\u0430\u0439\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" }, array: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" }, set: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" } };
      let closure_1 = { regex: "\u0432\u0445\u043E\u0434", email: "\u0438\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441", url: "URL", emoji: "\u0435\u043C\u043E\u0434\u0436\u0438", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO \u0432\u0440\u0435\u043C\u0435", date: "ISO \u0434\u0430\u0442\u0430", time: "ISO \u0432\u0440\u0435\u043C\u0435", duration: "ISO \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442", ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441", ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441", cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D", cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D", base64: "base64-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437", base64url: "base64url-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437", json_string: "JSON \u043D\u0438\u0437", e164: "E.164 \u043D\u043E\u043C\u0435\u0440", jwt: "JWT", template_literal: "\u0432\u0445\u043E\u0434" };
      let closure_2 = { nan: "NaN", number: "\u0447\u0438\u0441\u043B\u043E", array: "\u043C\u0430\u0441\u0438\u0432" };
      return {
        localeError: (arg0) => {
          let code;
          let origin;
          ({ code, origin } = arg0);
        }
      };
    };
    let closure_2 = fn(require("mergeDefs"));
    function error() {

    }
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
