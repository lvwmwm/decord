// Module ID: 1896
// Function ID: 1897
// Dependencies: [1897, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 2]

// Module 1896
import I18NDefault from "I18N" /* 1897 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_2 = {
  bg() {
    return require("module_1946");
  },
  cs() {
    return require("module_1947");
  },
  da() {
    return require("module_1948");
  },
  de() {
    return require("module_1949");
  },
  el() {
    return require("module_1950");
  },
  "en-GB": () => require("module_1951"),
  "en-US": () => require("module_1952"),
  "es-419": () => require("module_1953"),
  "es-ES": () => require("module_1954"),
  fi() {
    return require("module_1955");
  },
  fr() {
    return require("module_1956");
  },
  hi() {
    return require("module_1957");
  },
  hr() {
    return require("module_1958");
  },
  hu() {
    return require("module_1959");
  },
  id() {
    return require("module_1960");
  },
  it() {
    return require("module_1961");
  },
  ja() {
    return require("module_1962");
  },
  ko() {
    return require("module_1963");
  },
  lt() {
    return require("module_1964");
  },
  nl() {
    return require("module_1965");
  },
  no() {
    return require("module_1966");
  },
  pl() {
    return require("module_1967");
  },
  "pt-BR": () => require("module_1968"),
  ro() {
    return require("module_1969");
  },
  ru() {
    return require("module_1970");
  },
  "sv-SE": () => require("module_1971"),
  th() {
    return require("module_1972");
  },
  tr() {
    return require("module_1973");
  },
  uk() {
    return require("module_1974");
  },
  vi() {
    return require("module_1975");
  },
  "zh-CN": () => require("module_1976"),
  "zh-TW": () => require("module_1977")
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
    return require("module_1978");
  }
};
const tmp2 = new I18NDefault(obj);
const result = size.fileFinishedImporting("../discord_common/js/shared/i18n/index.native.tsx");

export default tmp2;
