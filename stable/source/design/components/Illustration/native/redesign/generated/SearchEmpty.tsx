// Module ID: 10612
// Function ID: 10613
// Name: SearchEmpty
// Dependencies: [19, 17, 21, 8534, 10613, 10614, 10615, 4639, 2]
// Exports: SearchEmpty, getSearchEmptySource, useSearchEmptySource

// Module 10612 (SearchEmpty)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_10613");
    },
    darker() {
      return require("module_10614");
    },
    light() {
      return require("module_10615");
    }
  });
};
export const useSearchEmptySource = function useSearchEmptySource() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10613");
    },
    darker() {
      return require("module_10614");
    },
    light() {
      return require("module_10615");
    }
  });
};
export const SearchEmpty = function SearchEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10613");
    },
    darker() {
      return require("module_10614");
    },
    light() {
      return require("module_10615");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
