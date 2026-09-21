// Module ID: 9848
// Function ID: 9849
// Name: NoResultsAlt
// Dependencies: [19, 17, 21, 8502, 9849, 9850, 7299, 4607, 2]
// Exports: NoResultsAlt, getNoResultsAltSource, useNoResultsAltSource

// Module 9848 (NoResultsAlt)
import shared from "shared" /* 4607 */;
import _mod8502 from "module_8502" /* 8502 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx");

export const getNoResultsAltSource = function getNoResultsAltSource(theme) {
  return _mod8502.getIllustrationSource(theme, {
    dark() {
      return require("module_9849");
    },
    darker() {
      return require("module_9850");
    },
    light() {
      return require("module_7299");
    }
  });
};
export const useNoResultsAltSource = function useNoResultsAltSource() {
  const obj = shared;
  return _mod8502.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9849");
    },
    darker() {
      return require("module_9850");
    },
    light() {
      return require("module_7299");
    }
  });
};
export const NoResultsAlt = function NoResultsAlt(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8502.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9849");
    },
    darker() {
      return require("module_9850");
    },
    light() {
      return require("module_7299");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
