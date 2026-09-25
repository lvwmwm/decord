// Module ID: 13042
// Function ID: 13043
// Name: TopPattern
// Dependencies: [19, 17, 21, 7671, 13043, 13044, 13045, 4682, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 13042 (TopPattern)
import shared from "shared" /* 4682 */;
import _mod7671 from "module_7671" /* 7671 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  return _mod7671.getIllustrationSource(theme, {
    dark() {
      return require("module_13043");
    },
    darker() {
      return require("module_13044");
    },
    light() {
      return require("module_13045");
    }
  });
};
export const useTopPatternSource = function useTopPatternSource() {
  const obj = shared;
  return _mod7671.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13043");
    },
    darker() {
      return require("module_13044");
    },
    light() {
      return require("module_13045");
    }
  });
};
export const TopPattern = function TopPattern(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7671.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13043");
    },
    darker() {
      return require("module_13044");
    },
    light() {
      return require("module_13045");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
