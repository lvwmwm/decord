// Module ID: 1901
// Function ID: 1902
// Dependencies: [1902, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 2]

// Module 1901
import I18NDefault from "I18N" /* 1902 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_2 = {
  bg() {
    return require("module_1951");
  },
  cs() {
    return require("module_1952");
  },
  da() {
    return require("module_1953");
  },
  de() {
    return require("module_1954");
  },
  el() {
    return require("module_1955");
  },
  "en-GB": () => require("module_1956"),
  "en-US": () => require("module_1957"),
  "es-419": () => require("module_1958"),
  "es-ES": () => require("module_1959"),
  fi() {
    return require("module_1960");
  },
  fr() {
    return require("module_1961");
  },
  hi() {
    return require("module_1962");
  },
  hr() {
    return require("module_1963");
  },
  hu() {
    return require("module_1964");
  },
  id() {
    return require("module_1965");
  },
  it() {
    return require("module_1966");
  },
  ja() {
    return require("module_1967");
  },
  ko() {
    return require("module_1968");
  },
  lt() {
    return require("module_1969");
  },
  nl() {
    return require("module_1970");
  },
  no() {
    return require("module_1971");
  },
  pl() {
    return require("module_1972");
  },
  "pt-BR": () => require("module_1973"),
  ro() {
    return require("module_1974");
  },
  ru() {
    return require("module_1975");
  },
  "sv-SE": () => require("module_1976"),
  th() {
    return require("module_1977");
  },
  tr() {
    return require("module_1978");
  },
  uk() {
    return require("module_1979");
  },
  vi() {
    return require("module_1980");
  },
  "zh-CN": () => require("module_1981"),
  "zh-TW": () => require("module_1982")
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
    return require("module_1983");
  }
};
const tmp2 = new I18NDefault(obj);
const result = size.fileFinishedImporting("../discord_common/js/shared/i18n/index.native.tsx");

export default tmp2;
