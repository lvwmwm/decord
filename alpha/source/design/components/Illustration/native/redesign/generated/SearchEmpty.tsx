// Module ID: 9971
// Function ID: 9972
// Name: SearchEmpty
// Dependencies: [19, 17, 21, 7861, 9972, 9973, 9974, 4714, 2]
// Exports: SearchEmpty, getSearchEmptySource, useSearchEmptySource

// Module 9971 (SearchEmpty)
import shared from "shared" /* 4714 */;
import _mod7861 from "module_7861" /* 7861 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SearchEmpty.tsx");

export const getSearchEmptySource = function getSearchEmptySource(theme) {
  return _mod7861.getIllustrationSource(theme, {
    dark() {
      return require("module_9972");
    },
    darker() {
      return require("module_9973");
    },
    light() {
      return require("module_9974");
    }
  });
};
export const useSearchEmptySource = function useSearchEmptySource() {
  const obj = shared;
  return _mod7861.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9972");
    },
    darker() {
      return require("module_9973");
    },
    light() {
      return require("module_9974");
    }
  });
};
export const SearchEmpty = function SearchEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7861.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9972");
    },
    darker() {
      return require("module_9973");
    },
    light() {
      return require("module_9974");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
