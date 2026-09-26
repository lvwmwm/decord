// Module ID: 13812
// Function ID: 13813
// Name: TopPattern
// Dependencies: [19, 17, 21, 8534, 13813, 13814, 13815, 4639, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 13812 (TopPattern)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_13813");
    },
    darker() {
      return require("module_13814");
    },
    light() {
      return require("module_13815");
    }
  });
};
export const useTopPatternSource = function useTopPatternSource() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13813");
    },
    darker() {
      return require("module_13814");
    },
    light() {
      return require("module_13815");
    }
  });
};
export const TopPattern = function TopPattern(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13813");
    },
    darker() {
      return require("module_13814");
    },
    light() {
      return require("module_13815");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
