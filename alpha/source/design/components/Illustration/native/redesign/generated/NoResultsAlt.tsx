// Module ID: 9932
// Function ID: 9933
// Name: NoResultsAlt
// Dependencies: [19, 17, 21, 8581, 9933, 9934, 7387, 4680, 2]
// Exports: NoResultsAlt, getNoResultsAltSource, useNoResultsAltSource

// Module 9932 (NoResultsAlt)
import shared from "shared" /* 4680 */;
import _mod8581 from "module_8581" /* 8581 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  return _mod8581.getIllustrationSource(theme, {
    dark() {
      return require("module_9933");
    },
    darker() {
      return require("module_9934");
    },
    light() {
      return require("module_7387");
    }
  });
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  const obj = shared;
  return _mod8581.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9933");
    },
    darker() {
      return require("module_9934");
    },
    light() {
      return require("module_7387");
    }
  });
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8581.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9933");
    },
    darker() {
      return require("module_9934");
    },
    light() {
      return require("module_7387");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
