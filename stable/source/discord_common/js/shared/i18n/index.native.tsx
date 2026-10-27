// Module ID: 1904
// Function ID: 1905
// Dependencies: [1905, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 2]

// Module 1904
import I18NDefault from "I18N" /* 1905 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_2 = {
  bg() {
    return require("module_1954");
  },
  cs() {
    return require("module_1955");
  },
  da() {
    return require("module_1956");
  },
  de() {
    return require("module_1957");
  },
  el() {
    return require("module_1958");
  },
  "en-GB": () => require("module_1959"),
  "en-US": () => require("module_1960"),
  "es-419": () => require("module_1961"),
  "es-ES": () => require("module_1962"),
  fi() {
    return require("module_1963");
  },
  fr() {
    return require("module_1964");
  },
  hi() {
    return require("module_1965");
  },
  hr() {
    return require("module_1966");
  },
  hu() {
    return require("module_1967");
  },
  id() {
    return require("module_1968");
  },
  it() {
    return require("module_1969");
  },
  ja() {
    return require("module_1970");
  },
  ko() {
    return require("module_1971");
  },
  lt() {
    return require("module_1972");
  },
  nl() {
    return require("module_1973");
  },
  no() {
    return require("module_1974");
  },
  pl() {
    return require("module_1975");
  },
  "pt-BR": () => require("module_1976"),
  ro() {
    return require("module_1977");
  },
  ru() {
    return require("module_1978");
  },
  "sv-SE": () => require("module_1979"),
  th() {
    return require("module_1980");
  },
  tr() {
    return require("module_1981");
  },
  uk() {
    return require("module_1982");
  },
  vi() {
    return require("module_1983");
  },
  "zh-CN": () => require("module_1984"),
  "zh-TW": () => require("module_1985")
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
    return require("module_1986");
  }
};
const tmp2 = new I18NDefault(obj);
const result = size.fileFinishedImporting("../discord_common/js/shared/i18n/index.native.tsx");

export default tmp2;
