// Module ID: 9979
// Function ID: 9980
// Name: SearchEmpty
// Dependencies: [19, 17, 21, 7874, 9980, 9981, 9982, 4715, 2]
// Exports: SearchEmpty, getSearchEmptySource, useSearchEmptySource

// Module 9979 (SearchEmpty)
import shared from "shared" /* 4715 */;
import _mod7874 from "module_7874" /* 7874 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  return _mod7874.getIllustrationSource(theme, {
    dark() {
      return require("module_9980");
    },
    darker() {
      return require("module_9981");
    },
    light() {
      return require("module_9982");
    }
  });
};
export const useSearchEmptySource = function useSearchEmptySource() {
  const obj = shared;
  return _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9980");
    },
    darker() {
      return require("module_9981");
    },
    light() {
      return require("module_9982");
    }
  });
};
export const SearchEmpty = function SearchEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9980");
    },
    darker() {
      return require("module_9981");
    },
    light() {
      return require("module_9982");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
