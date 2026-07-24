// Module ID: 12061
// Function ID: 93806
// Name: cached
// Dependencies: [12039]

// Module 12061 (cached)
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
    exports.default = function default_1() {
      return { localeError: error() };
    };
    let closure_2 = fn(require("cached"));
    function error() {
      let closure_0 = { string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA", gender: "f" }, number: { label: "\u05DE\u05E1\u05E4\u05E8", gender: "m" }, boolean: { label: "\u05E2\u05E8\u05DA \u05D1\u05D5\u05DC\u05D9\u05D0\u05E0\u05D9", gender: "m" }, bigint: { label: "BigInt", gender: "m" }, date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", gender: "m" }, array: { label: "\u05DE\u05E2\u05E8\u05DA", gender: "m" }, object: { label: "\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8", gender: "m" }, null: { label: "\u05E2\u05E8\u05DA \u05E8\u05D9\u05E7 (null)", gender: "m" }, undefined: { label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05DE\u05D5\u05D2\u05D3\u05E8 (undefined)", gender: "m" }, symbol: { label: "\u05E1\u05D9\u05DE\u05D1\u05D5\u05DC (Symbol)", gender: "m" }, function: { label: "\u05E4\u05D5\u05E0\u05E7\u05E6\u05D9\u05D4", gender: "f" }, map: { label: "\u05DE\u05E4\u05D4 (Map)", gender: "f" }, set: { label: "\u05E7\u05D1\u05D5\u05E6\u05D4 (Set)", gender: "f" }, file: { label: "\u05E7\u05D5\u05D1\u05E5", gender: "m" }, promise: { label: "Promise", gender: "m" }, NaN: { label: "NaN", gender: "m" }, unknown: { label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2", gender: "m" }, value: { label: "\u05E2\u05E8\u05DA", gender: "m" } };
      let closure_1 = { string: { unit: "\u05EA\u05D5\u05D5\u05D9\u05DD", shortLabel: "\u05E7\u05E6\u05E8", longLabel: "\u05D0\u05E8\u05D5\u05DA" }, file: { unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" }, array: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" }, set: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" }, number: { unit: "", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" } };
      function typeEntry(expected) {
        let tmp;
        if (expected) {
          tmp = unknown[expected];
        }
        return tmp;
      }
      function typeLabel(expected) {
        let label = expected;
        const tmp = typeEntry(expected);
        if (tmp) {
          label = tmp.label;
        } else if (null == label) {
          label = unknown.unknown.label;
        }
        return label;
      }
      function withDefinite(expected) {
        return "\u05D4" + typeLabel(expected);
      }
      function verbFor(expected) {
        let gender;
        const tmp2 = typeEntry(expected);
        if (null != tmp2) {
          gender = tmp2.gender;
        }
        let str = "m";
        if (null != gender) {
          str = gender;
        }
        let str2 = "\u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA";
        if ("f" === str) {
          str2 = "\u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA";
        }
        return str2;
      }
      function getSizing(arg0) {
        let tmp = null;
        if (arg0) {
          tmp = null;
          if (null != table[arg0]) {
            tmp = tmp3;
          }
        }
        return tmp;
      }
      let closure_7 = { regex: { label: "\u05E7\u05DC\u05D8", gender: "m" }, email: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC", gender: "f" }, url: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA", gender: "f" }, emoji: { label: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9", gender: "m" }, uuid: { label: "UUID", gender: "m" }, nanoid: { label: "nanoid", gender: "m" }, guid: { label: "GUID", gender: "m" }, cuid: { label: "cuid", gender: "m" }, cuid2: { label: "cuid2", gender: "m" }, ulid: { label: "ULID", gender: "m" }, xid: { label: "XID", gender: "m" }, ksuid: { label: "KSUID", gender: "m" }, datetime: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO", gender: "m" }, date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO", gender: "m" }, time: { label: "\u05D6\u05DE\u05DF ISO", gender: "m" }, duration: { label: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO", gender: "m" }, ipv4: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4", gender: "f" }, ipv6: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6", gender: "f" }, cidrv4: { label: "\u05D8\u05D5\u05D5\u05D7 IPv4", gender: "m" }, cidrv6: { label: "\u05D8\u05D5\u05D5\u05D7 IPv6", gender: "m" }, base64: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64", gender: "f" }, base64url: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA", gender: "f" }, json_string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON", gender: "f" }, e164: { label: "\u05DE\u05E1\u05E4\u05E8 E.164", gender: "m" }, jwt: { label: "JWT", gender: "m" }, ends_with: { label: "\u05E7\u05DC\u05D8", gender: "m" }, includes: { label: "\u05E7\u05DC\u05D8", gender: "m" }, lowercase: { label: "\u05E7\u05DC\u05D8", gender: "m" }, starts_with: { label: "\u05E7\u05DC\u05D8", gender: "m" }, uppercase: { label: "\u05E7\u05DC\u05D8", gender: "m" } };
      let closure_8 = { nan: "NaN" };
      return (code) => {
        code = code.code;
        if ("invalid_type" === code) {
          const expected = code.expected;
          let parsedTypeResult = null;
          let str = "";
          parsedTypeResult = table3;
          if (null != expected) {
            str = expected;
          }
          parsedTypeResult = parsedTypeResult[str];
          if (null == parsedTypeResult) {
            parsedTypeResult = typeLabel;
            parsedTypeResult = typeLabel(expected);
          }
          parsedTypeResult = typeEntry;
          parsedTypeResult = typeEntry.parsedType(code.input);
          parsedTypeResult = table3;
          parsedTypeResult = table3[parsedTypeResult];
          if (null == parsedTypeResult) {
            parsedTypeResult = unknown;
            parsedTypeResult = unknown[parsedTypeResult];
            parsedTypeResult = undefined;
            if (null != parsedTypeResult) {
              parsedTypeResult = parsedTypeResult.label;
            }
          }
          parsedTypeResult = globalThis;
          if (obj2.test(code.expected)) {
            const _HermesInternal30 = HermesInternal;
            str = "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA instanceof ";
            str = ", \u05D4\u05EA\u05E7\u05D1\u05DC ";
            parsedTypeResult = "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA instanceof " + code.expected + ", \u05D4\u05EA\u05E7\u05D1\u05DC " + parsedTypeResult;
          } else {
            const _HermesInternal29 = HermesInternal;
            str = "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ";
            str = ", \u05D4\u05EA\u05E7\u05D1\u05DC ";
            parsedTypeResult = "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA " + parsedTypeResult + ", \u05D4\u05EA\u05E7\u05D1\u05DC " + parsedTypeResult;
          }
          return parsedTypeResult;
        } else {
          str = "invalid_value";
          if ("invalid_value" === code) {
            if (1 === code.values.length) {
              parsedTypeResult = typeEntry;
              parsedTypeResult = globalThis;
              const _HermesInternal28 = HermesInternal;
              str = "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05E2\u05E8\u05DA \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA ";
              return "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05E2\u05E8\u05DA \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA " + typeEntry.stringifyPrimitive(code.values[0]);
            } else {
              const values = code.values;
              const mapped = values.map((arg0) => typeEntry.stringifyPrimitive(arg0));
              if (2 === code.values.length) {
                parsedTypeResult = globalThis;
                const _HermesInternal27 = HermesInternal;
                str = "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ";
                str = " \u05D0\u05D5 ";
                return "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF " + mapped[0] + " \u05D0\u05D5 " + mapped[1];
              } else {
                const substr = mapped.slice(0, -1);
                str = ", ";
                parsedTypeResult = globalThis;
                const _HermesInternal26 = HermesInternal;
                str = "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ";
                str = " \u05D0\u05D5 ";
                return "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF " + substr.join(", ") + " \u05D0\u05D5 " + mapped[mapped.length - 1];
              }
            }
          } else {
            str = "too_big";
            if ("too_big" === code) {
              const tmp62 = getSizing(code.origin);
              const origin5 = code.origin;
              let str80 = "value";
              let str81 = "value";
              if (null != origin5) {
                str81 = origin5;
              }
              const tmp63Result = withDefinite(str81);
              if ("string" === code.origin) {
                let longLabel;
                if (null != tmp62) {
                  longLabel = tmp62.longLabel;
                }
                str = "\u05D0\u05E8\u05D5\u05DA";
                if (null != longLabel) {
                  str = longLabel;
                }
                str = code.maximum;
                str = str.toString();
                let unit;
                if (null != tmp62) {
                  unit = tmp62.unit;
                }
                str = "";
                str = "";
                if (null != unit) {
                  str = unit;
                }
                str = "\u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8";
                if (code.inclusive) {
                  str = "\u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA";
                }
                const _HermesInternal25 = HermesInternal;
                str = " \u05DE\u05D3\u05D9: ";
                str = " \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ";
                str = " ";
                str = "";
                str = " ";
                parsedTypeResult = str;
                str = " ";
                parsedTypeResult = str;
                str = "" + str + " \u05DE\u05D3\u05D9: " + tmp63Result + " \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC " + str + " " + str + " " + str;
                return str.trim();
              } else {
                str = "number";
                if ("number" === code.origin) {
                  const maximum2 = code.maximum;
                  const _HermesInternal23 = HermesInternal;
                  if (code.inclusive) {
                    str = "\u05E7\u05D8\u05DF \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-";
                    let concat2Result = concat2(maximum2);
                  } else {
                    str = "\u05E7\u05D8\u05DF \u05DE-";
                    concat2Result = concat2(maximum2);
                  }
                  const _HermesInternal24 = HermesInternal;
                  str = "\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ";
                  str = " \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ";
                  return "\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: " + tmp63Result + " \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA " + concat2Result;
                } else {
                  str = "array";
                  if ("array" !== code.origin) {
                    str = "set";
                    if ("set" !== code.origin) {
                      let str83 = "<";
                      if (code.inclusive) {
                        str83 = "<=";
                      }
                      const origin6 = code.origin;
                      if (null != origin6) {
                        str80 = origin6;
                      }
                      const tmp66Result = verbFor(str80);
                      if (null != tmp62) {
                        if (tmp62.unit) {
                          const _HermesInternal19 = HermesInternal;
                          let combined = "" + tmp62.longLabel + " \u05DE\u05D3\u05D9: " + tmp63Result + " " + tmp66Result + " " + str83 + code.maximum.toString() + " " + tmp62.unit;
                          const str91 = code.maximum;
                        }
                        return combined;
                      }
                      let longLabel1;
                      if (null != tmp62) {
                        longLabel1 = tmp62.longLabel;
                      }
                      let str84 = "\u05D2\u05D3\u05D5\u05DC";
                      if (null != longLabel1) {
                        str84 = longLabel1;
                      }
                      const _HermesInternal18 = HermesInternal;
                      combined = "" + str84 + " \u05DE\u05D3\u05D9: " + tmp63Result + " " + tmp66Result + " " + str83 + code.maximum.toString();
                      const str85 = code.maximum;
                      const tmp66 = verbFor;
                    }
                  }
                  let str98 = "\u05E6\u05E8\u05D9\u05DA";
                  if ("set" === code.origin) {
                    str98 = "\u05E6\u05E8\u05D9\u05DB\u05D4";
                  }
                  const maximum = code.maximum;
                  if (code.inclusive) {
                    let unit1;
                    if (!tmp79) {
                      unit1 = tmp62.unit;
                    }
                    str = "";
                    str = "";
                    if (null != unit1) {
                      str = unit1;
                    }
                    const _HermesInternal21 = HermesInternal;
                    str = " ";
                    str = " \u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA";
                    str = "";
                    let combined1 = "" + maximum + " " + str + " \u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA";
                  } else {
                    let unit2;
                    if (!tmp79) {
                      unit2 = tmp62.unit;
                    }
                    str = "";
                    if (null != unit2) {
                      str = unit2;
                    }
                    const _HermesInternal20 = HermesInternal;
                    str = "\u05E4\u05D7\u05D5\u05EA \u05DE-";
                    str = " ";
                    combined1 = "\u05E4\u05D7\u05D5\u05EA \u05DE-" + maximum + " " + str;
                  }
                  const _HermesInternal22 = HermesInternal;
                  str = "\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ";
                  str = " ";
                  str = " \u05DC\u05D4\u05DB\u05D9\u05DC ";
                  str = "\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: " + tmp63Result + " " + str98 + " \u05DC\u05D4\u05DB\u05D9\u05DC " + combined1;
                  return str.trim();
                }
              }
              const tmp63 = withDefinite;
            } else {
              str = "too_small";
              if ("too_small" === code) {
                const tmp17 = getSizing(code.origin);
                const origin2 = code.origin;
                let str28 = "value";
                let str29 = "value";
                if (null != origin2) {
                  str29 = origin2;
                }
                const tmp18Result = withDefinite(str29);
                if ("string" === code.origin) {
                  let shortLabel;
                  if (null != tmp17) {
                    shortLabel = tmp17.shortLabel;
                  }
                  let str68 = "\u05E7\u05E6\u05E8";
                  if (null != shortLabel) {
                    str68 = shortLabel;
                  }
                  const str1 = code.minimum.toString();
                  let unit3;
                  if (null != tmp17) {
                    unit3 = tmp17.unit;
                  }
                  let str71 = "";
                  if (null != unit3) {
                    str71 = unit3;
                  }
                  let str72 = "\u05DC\u05E4\u05D7\u05D5\u05EA";
                  if (code.inclusive) {
                    str72 = "\u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8";
                  }
                  const _HermesInternal17 = HermesInternal;
                  return "" + str68 + " \u05DE\u05D3\u05D9: " + tmp18Result + " \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC " + str1 + " " + str71 + " " + str72.trim();
                } else {
                  str = "number";
                  if ("number" === code.origin) {
                    const minimum2 = code.minimum;
                    const _HermesInternal15 = HermesInternal;
                    if (code.inclusive) {
                      let combined2 = concat(minimum2);
                    } else {
                      combined2 = concat(minimum2);
                    }
                    const _HermesInternal16 = HermesInternal;
                    return "\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: " + tmp18Result + " \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA " + combined2;
                  } else {
                    str = "array";
                    if ("array" !== code.origin) {
                      str = "set";
                      if ("set" !== code.origin) {
                        let str31 = ">";
                        if (code.inclusive) {
                          str31 = ">=";
                        }
                        const origin3 = code.origin;
                        if (null != origin3) {
                          str28 = origin3;
                        }
                        const tmp21Result = verbFor(str28);
                        if (null != tmp17) {
                          if (tmp17.unit) {
                            const _HermesInternal10 = HermesInternal;
                            let combined3 = "" + tmp17.shortLabel + " \u05DE\u05D3\u05D9: " + tmp18Result + " " + tmp21Result + " " + str31 + code.minimum.toString() + " " + tmp17.unit;
                            const str39 = code.minimum;
                          }
                          return combined3;
                        }
                        let shortLabel1;
                        if (null != tmp17) {
                          shortLabel1 = tmp17.shortLabel;
                        }
                        let str32 = "\u05E7\u05D8\u05DF";
                        if (null != shortLabel1) {
                          str32 = shortLabel1;
                        }
                        const _HermesInternal9 = HermesInternal;
                        combined3 = "" + str32 + " \u05DE\u05D3\u05D9: " + tmp18Result + " " + tmp21Result + " " + str31 + code.minimum.toString();
                        const str33 = code.minimum;
                        const tmp21 = verbFor;
                      }
                    }
                    let str46 = "\u05E6\u05E8\u05D9\u05DA";
                    if ("set" === code.origin) {
                      str46 = "\u05E6\u05E8\u05D9\u05DB\u05D4";
                    }
                    if (1 === code.minimum) {
                      if (code.inclusive) {
                        const origin4 = code.origin;
                        const _HermesInternal14 = HermesInternal;
                        let combined4 = "\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: " + tmp18Result + " " + str46 + " \u05DC\u05D4\u05DB\u05D9\u05DC " + "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3";
                      }
                      return combined4;
                    }
                    const minimum = code.minimum;
                    if (code.inclusive) {
                      let unit4;
                      if (!tmp34) {
                        unit4 = tmp17.unit;
                      }
                      let str52 = "";
                      if (null != unit4) {
                        str52 = unit4;
                      }
                      const _HermesInternal12 = HermesInternal;
                      let combined5 = "" + minimum + " " + str52 + " \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8";
                    } else {
                      let unit5;
                      if (!tmp34) {
                        unit5 = tmp17.unit;
                      }
                      let str48 = "";
                      if (null != unit5) {
                        str48 = unit5;
                      }
                      const _HermesInternal11 = HermesInternal;
                      combined5 = "\u05D9\u05D5\u05EA\u05E8 \u05DE-" + minimum + " " + str48;
                    }
                    const _HermesInternal13 = HermesInternal;
                    combined4 = "\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: " + tmp18Result + " " + str46 + " \u05DC\u05D4\u05DB\u05D9\u05DC " + combined5.trim();
                    const str59 = "\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: " + tmp18Result + " " + str46 + " \u05DC\u05D4\u05DB\u05D9\u05DC " + combined5;
                  }
                }
                const tmp18 = withDefinite;
              } else {
                str = "invalid_format";
                if ("invalid_format" === code) {
                  if ("starts_with" === code.format) {
                    const _HermesInternal8 = HermesInternal;
                    return "\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1 \"" + code.prefix + "\"";
                  } else {
                    str = "ends_with";
                    if ("ends_with" === code.format) {
                      const _HermesInternal7 = HermesInternal;
                      return "\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 \"" + code.suffix + "\"";
                    } else {
                      str = "includes";
                      if ("includes" === code.format) {
                        const _HermesInternal6 = HermesInternal;
                        return "\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC \"" + code.includes + "\"";
                      } else {
                        str = "regex";
                        if ("regex" === code.format) {
                          const _HermesInternal5 = HermesInternal;
                          return "\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA " + code.pattern;
                        } else {
                          parsedTypeResult = table2;
                          parsedTypeResult = table2[code.format];
                          parsedTypeResult = null;
                          let label;
                          if (null != parsedTypeResult) {
                            label = parsedTypeResult.label;
                          }
                          if (null == label) {
                            label = code.format;
                          }
                          let gender;
                          if (null != parsedTypeResult) {
                            gender = parsedTypeResult.gender;
                          }
                          let str16 = "m";
                          if (null != gender) {
                            str16 = gender;
                          }
                          let str17 = "\u05EA\u05E7\u05D9\u05DF";
                          if ("f" === str16) {
                            str17 = "\u05EA\u05E7\u05D9\u05E0\u05D4";
                          }
                          const _HermesInternal4 = HermesInternal;
                          return "" + label + " \u05DC\u05D0 " + str17;
                        }
                      }
                    }
                  }
                } else {
                  str = "not_multiple_of";
                  if ("not_multiple_of" === code) {
                    const _HermesInternal3 = HermesInternal;
                    return "\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC " + code.divisor;
                  } else {
                    str = "unrecognized_keys";
                    if ("unrecognized_keys" === code) {
                      let str8 = "";
                      if (code.keys.length > 1) {
                        str8 = "\u05D5\u05EA";
                      }
                      let str9 = "\u05D4";
                      if (code.keys.length > 1) {
                        str9 = "\u05D9\u05DD";
                      }
                      const _HermesInternal2 = HermesInternal;
                      return "\u05DE\u05E4\u05EA\u05D7" + str8 + " \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4" + str9 + ": " + typeEntry.joinValues(code.keys, ", ");
                    } else {
                      str = "invalid_key";
                      if ("invalid_key" === code) {
                        return "\u05E9\u05D3\u05D4 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8";
                      } else {
                        if ("invalid_union" !== code) {
                          if ("invalid_element" === code) {
                            const origin = code.origin;
                            let str4 = "array";
                            parsedTypeResult = withDefinite;
                            if (null != origin) {
                              str4 = origin;
                            }
                            const _HermesInternal = HermesInternal;
                            return "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1" + parsedTypeResult(str4);
                          }
                        }
                        return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };
    }
    module.exports = exports.default;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
