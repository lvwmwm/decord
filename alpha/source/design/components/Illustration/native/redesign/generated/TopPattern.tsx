// Module ID: 13876
// Function ID: 13877
// Name: TopPattern
// Dependencies: [19, 17, 21, 8577, 13877, 13878, 13879, 4678, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 13876 (TopPattern)
import shared from "shared" /* 4678 */;
import _mod8577 from "module_8577" /* 8577 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  return _mod8577.getIllustrationSource(theme, {
    dark() {
      return require("module_13877");
    },
    darker() {
      return require("module_13878");
    },
    light() {
      return require("module_13879");
    }
  });
};
export const useTopPatternSource = function useTopPatternSource() {
  const obj = shared;
  return _mod8577.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13877");
    },
    darker() {
      return require("module_13878");
    },
    light() {
      return require("module_13879");
    }
  });
};
export const TopPattern = function TopPattern(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8577.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13877");
    },
    darker() {
      return require("module_13878");
    },
    light() {
      return require("module_13879");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
