// Module ID: 9880
// Function ID: 9881
// Name: NoResultsAlt
// Dependencies: [19, 17, 21, 8534, 9881, 9882, 7331, 4639, 2]
// Exports: NoResultsAlt, getNoResultsAltSource, useNoResultsAltSource

// Module 9880 (NoResultsAlt)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_9881");
    },
    darker() {
      return require("module_9882");
    },
    light() {
      return require("module_7331");
    }
  });
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9881");
    },
    darker() {
      return require("module_9882");
    },
    light() {
      return require("module_7331");
    }
  });
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9881");
    },
    darker() {
      return require("module_9882");
    },
    light() {
      return require("module_7331");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
