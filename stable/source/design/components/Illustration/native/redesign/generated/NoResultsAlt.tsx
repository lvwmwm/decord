// Module ID: 9890
// Function ID: 9891
// Name: NoResultsAlt
// Dependencies: [19, 17, 21, 8349, 9891, 9892, 7157, 4488, 2]
// Exports: NoResultsAlt, getNoResultsAltSource, useNoResultsAltSource

// Module 9890 (NoResultsAlt)
import shared from "shared" /* 4488 */;
import _mod8349 from "module_8349" /* 8349 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  return _mod8349.getIllustrationSource(theme, {
    dark() {
      return require("module_9891");
    },
    darker() {
      return require("module_9892");
    },
    light() {
      return require("module_7157");
    }
  });
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  const obj = shared;
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9891");
    },
    darker() {
      return require("module_9892");
    },
    light() {
      return require("module_7157");
    }
  });
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9891");
    },
    darker() {
      return require("module_9892");
    },
    light() {
      return require("module_7157");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
