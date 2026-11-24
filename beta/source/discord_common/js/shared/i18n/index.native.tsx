// Module ID: 2026
// Function ID: 2027
// Dependencies: [2027, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2]

// Module 2026
import I18NDefault from "I18N" /* 2027 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_2 = {
  bg() {
    return require("module_2071");
  },
  cs() {
    return require("module_2072");
  },
  da() {
    return require("module_2073");
  },
  de() {
    return require("module_2074");
  },
  el() {
    return require("module_2075");
  },
  "en-GB": () => require("module_2076"),
  "en-US": () => require("module_2077"),
  "es-419": () => require("module_2078"),
  "es-ES": () => require("module_2079"),
  fi() {
    return require("module_2080");
  },
  fr() {
    return require("module_2081");
  },
  hi() {
    return require("module_2082");
  },
  hr() {
    return require("module_2083");
  },
  hu() {
    return require("module_2084");
  },
  id() {
    return require("module_2085");
  },
  it() {
    return require("module_2086");
  },
  ja() {
    return require("module_2087");
  },
  ko() {
    return require("module_2088");
  },
  lt() {
    return require("module_2089");
  },
  nl() {
    return require("module_2090");
  },
  no() {
    return require("module_2091");
  },
  pl() {
    return require("module_2092");
  },
  "pt-BR": () => require("module_2093"),
  ro() {
    return require("module_2094");
  },
  ru() {
    return require("module_2095");
  },
  "sv-SE": () => require("module_2096"),
  th() {
    return require("module_2097");
  },
  tr() {
    return require("module_2098");
  },
  uk() {
    return require("module_2099");
  },
  vi() {
    return require("module_2100");
  },
  "zh-CN": () => require("module_2101"),
  "zh-TW": () => require("module_2102")
};
const obj = {
  getMessages(arg0) {
    if (null == closure_2[arg0]) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("Unsupported locale: " + arg0);
      throw error;
    } else {
      return closure_2[arg0]();
    }
  },
  getLanguages() {
    return require("module_2103");
  }
};
const tmp2 = new I18NDefault(obj);
const result = size.fileFinishedImporting("../discord_common/js/shared/i18n/index.native.tsx");

export default tmp2;
