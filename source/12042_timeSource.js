// Module ID: 12042
// Function ID: 93561
// Name: timeSource
// Dependencies: [12039]

// Module 12042 (timeSource)
const self = this;
function timeSource(precision) {
  if ("number" === typeof precision.precision) {
    if (-1 === precision.precision) {
      const _HermesInternal4 = HermesInternal;
      let combined = "" + "(?:[01]\\d|2[0-3]):[0-5]\\d";
    } else if (0 === precision.precision) {
      const _HermesInternal3 = HermesInternal;
      combined = "" + "(?:[01]\\d|2[0-3]):[0-5]\\d" + ":[0-5]\\d";
    } else {
      const _HermesInternal2 = HermesInternal;
      combined = "" + "(?:[01]\\d|2[0-3]):[0-5]\\d" + ":[0-5]\\d\\.\\d{" + precision.precision + "}";
    }
  } else {
    const _HermesInternal = HermesInternal;
    return "" + "(?:[01]\\d|2[0-3]):[0-5]\\d" + "(?::[0-5]\\d(?:\\.\\d+)?)?";
  }
}
function fixedBase64(arg0, arg1) {
  const regExp = new RegExp("^[A-Za-z0-9+/]{" + arg0 + "}" + arg1 + "$");
  return regExp;
}
function fixedBase64url(arg0) {
  const regExp = new RegExp("^[A-Za-z0-9_-]{" + arg0 + "}$");
  return regExp;
}
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
            let tmp7 = key10009;
            let callResult = "default" !== key10009;
            if (callResult) {
              let _Object = Object;
              callResult = hasOwnProperty.call(arg0, key10009);
            }
            if (!callResult) {
              continue;
            } else {
              let tmp4 = self2;
              let tmp5 = self2(obj, arg0, key10009);
              continue;
            }
            continue;
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    let obj = { value: true };
    exports.cuid = undefined;
    exports.cuid2 = undefined;
    exports.ulid = undefined;
    exports.xid = undefined;
    exports.ksuid = undefined;
    exports.nanoid = undefined;
    exports.duration = undefined;
    exports.extendedDuration = undefined;
    exports.guid = undefined;
    exports.uuid = undefined;
    exports.uuid4 = undefined;
    exports.uuid6 = undefined;
    exports.uuid7 = undefined;
    exports.email = undefined;
    exports.html5Email = undefined;
    exports.rfc5322Email = undefined;
    exports.unicodeEmail = undefined;
    exports.idnEmail = undefined;
    exports.browserEmail = undefined;
    exports.ipv4 = undefined;
    exports.ipv6 = undefined;
    exports.mac = undefined;
    exports.cidrv4 = undefined;
    exports.cidrv6 = undefined;
    exports.base64 = undefined;
    exports.base64url = undefined;
    exports.hostname = undefined;
    exports.domain = undefined;
    exports.e164 = undefined;
    exports.date = undefined;
    exports.string = undefined;
    exports.bigint = undefined;
    exports.integer = undefined;
    exports.number = undefined;
    exports.boolean = undefined;
    exports.null = undefined;
    exports.undefined = undefined;
    exports.lowercase = undefined;
    exports.uppercase = undefined;
    exports.hex = undefined;
    exports.md5_hex = undefined;
    exports.md5_base64 = undefined;
    exports.md5_base64url = undefined;
    exports.sha1_hex = undefined;
    exports.sha1_base64 = undefined;
    exports.sha1_base64url = undefined;
    exports.sha256_hex = undefined;
    exports.sha256_base64 = undefined;
    exports.sha256_base64url = undefined;
    exports.sha384_hex = undefined;
    exports.sha384_base64 = undefined;
    exports.sha384_base64url = undefined;
    exports.sha512_hex = undefined;
    exports.sha512_base64 = undefined;
    exports.sha512_base64url = undefined;
    exports.emoji = function emoji() {
      const regExp = new RegExp(c3, "u");
      return regExp;
    };
    exports.time = function time(precision) {
      const regExp = new RegExp("^" + timeSource(precision) + "$");
      return regExp;
    };
    exports.datetime = function datetime(precision) {
      const items = ["Z"];
      if (precision.local) {
        items.push("");
      }
      if (precision.offset) {
        items.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
      }
      const regExp = new RegExp("^" + c4 + "T(?:" + "" + timeSource({ precision: precision.precision }) + "(?:" + items.join("|") + ")" + ")$");
      return regExp;
    };
    let closure_2 = fn(require("cached"));
    exports.cuid = /^[cC][^\s-]{8,}$/;
    exports.cuid2 = /^[0-9a-z]+$/;
    exports.ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
    exports.xid = /^[0-9a-vA-V]{20}$/;
    exports.ksuid = /^[A-Za-z0-9]{27}$/;
    exports.nanoid = /^[a-zA-Z0-9_-]{21}$/;
    exports.duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
    exports.extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
    exports.guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
    exports.uuid = function uuid(arg0) {
      if (arg0) {
        const _RegExp = RegExp;
        const _HermesInternal = HermesInternal;
        let regExp = new RegExp("^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-" + arg0 + "[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$");
      } else {
        regExp = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
      }
      return regExp;
    };
    exports.uuid4 = require("module_4");
    exports.uuid6 = require("module_6");
    exports.uuid7 = require("module_7");
    exports.email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
    exports.html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    exports.rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    exports.unicodeEmail = /^(?:[\0-\x08\x0E-\x1F!#-\?A-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){1,64}@(?:[\0-\x08\x0E-\x1F!-\?A-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){1,255}$/;
    exports.idnEmail = exports.unicodeEmail;
    exports.browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    let c3 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
    exports.ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    exports.ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
    exports.mac = function mac(includes) {
      let str = ":";
      if (null != includes) {
        str = includes;
      }
      const escapeRegexResult = closure_2.escapeRegex(str);
      const regExp = new RegExp("^(?:[0-9A-F]{2}" + escapeRegexResult + "){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}" + escapeRegexResult + "){5}[0-9a-f]{2}$");
      return regExp;
    };
    exports.cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
    exports.cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
    exports.base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
    exports.base64url = /^[A-Za-z0-9_-]*$/;
    exports.hostname = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
    exports.domain = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
    exports.e164 = /^\+[1-9]\d{6,14}$/;
    let c4 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
    let _RegExp = RegExp;
    let _HermesInternal = HermesInternal;
    let regExp = new RegExp("^" + "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))" + "$");
    exports.date = regExp;
    exports.string = function string(minimum) {
      let str = "[\\s\\S]*";
      if (minimum) {
        minimum = undefined;
        if (null != minimum) {
          minimum = minimum.minimum;
        }
        let num = 0;
        if (null != minimum) {
          num = minimum;
        }
        let maximum;
        if (null != minimum) {
          maximum = minimum.maximum;
        }
        let str2 = "";
        if (null != maximum) {
          str2 = maximum;
        }
        const _HermesInternal = HermesInternal;
        str = "[\\s\\S]{" + num + "," + str2 + "}";
      }
      const regExp = new RegExp("^" + str + "$");
      return regExp;
    };
    exports.bigint = /^-?\d+n?$/;
    exports.integer = /^-?\d+$/;
    exports.number = /^-?\d+(?:\.\d+)?$/;
    exports.boolean = /^(?:true|false)$/i;
    exports.null = /^null$/i;
    exports.undefined = /^undefined$/i;
    exports.lowercase = /^[^A-Z]*$/;
    exports.uppercase = /^[^a-z]*$/;
    exports.hex = /^[0-9a-fA-F]*$/;
    exports.md5_hex = /^[0-9a-fA-F]{32}$/;
    exports.md5_base64 = require("module_22");
    exports.md5_base64url = require("module_22");
    exports.sha1_hex = /^[0-9a-fA-F]{40}$/;
    exports.sha1_base64 = require("module_27");
    exports.sha1_base64url = require("module_27");
    exports.sha256_hex = /^[0-9a-fA-F]{64}$/;
    exports.sha256_base64 = require("module_43");
    exports.sha256_base64url = require("module_43");
    exports.sha384_hex = /^[0-9a-fA-F]{96}$/;
    exports.sha384_base64 = require("module_64");
    exports.sha384_base64url = require("module_64");
    exports.sha512_hex = /^[0-9a-fA-F]{128}$/;
    exports.sha512_base64 = require("module_86");
    exports.sha512_base64url = require("module_86");
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
