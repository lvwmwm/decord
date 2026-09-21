// Module ID: 1886
// Function ID: 1887
// Dependencies: [1887, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 2]

// Module 1886
import i18nDefault from "i18n" /* 1887 */;

const require = globalThis.__r;

const require = fn;
let closure_2 = {
  bg() {
    return require("module_1936");
  },
  cs() {
    return require("module_1937");
  },
  da() {
    return require("module_1938");
  },
  de() {
    return require("module_1939");
  },
  el() {
    return require("module_1940");
  },
  () => require("module_1941"),
  () => require("module_1942"),
  () => require("module_1943"),
  () => require("module_1944"),
  fi() {
    return require("module_1945");
  },
  fr() {
    return require("module_1946");
  },
  hi() {
    return require("module_1947");
  },
  hr() {
    return require("module_1948");
  },
  hu() {
    return require("module_1949");
  },
  id() {
    return require("module_1950");
  },
  it() {
    return require("module_1951");
  },
  ja() {
    return require("module_1952");
  },
  ko() {
    return require("module_1953");
  },
  lt() {
    return require("module_1954");
  },
  nl() {
    return require("module_1955");
  },
  no() {
    return require("module_1956");
  },
  pl() {
    return require("module_1957");
  },
  () => require("module_1958"),
  ro() {
    return require("module_1959");
  },
  ru() {
    return require("module_1960");
  },
  () => require("module_1961"),
  th() {
    return require("module_1962");
  },
  tr() {
    return require("module_1963");
  },
  uk() {
    return require("module_1964");
  },
  vi() {
    return require("module_1965");
  },
  () => require("module_1966"),
  () => require("module_1967")
};
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/shared/i18n/index.native.tsx");

export default new i18nDefault({
  getMessages(arg0) {
    if (null == closure_2[arg0]) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("Unsupported locale: " + arg0);
      throw error;
    } else {
      return tmp();
    }
  },
  getLanguages() {
    return require("module_1968");
  }
});
