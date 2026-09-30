// Module ID: 13255
// Function ID: 13256
// Name: TopPattern
// Dependencies: [19, 17, 21, 7874, 13256, 13257, 13258, 4715, 2]
// Exports: TopPattern, getTopPatternSource, useTopPatternSource

// Module 13255 (TopPattern)
import shared from "shared" /* 4715 */;
import _mod7874 from "module_7874" /* 7874 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/TopPattern.tsx");

export const getTopPatternSource = function getTopPatternSource(theme) {
  return _mod7874.getIllustrationSource(theme, {
    dark() {
      return require("module_13256");
    },
    darker() {
      return require("module_13257");
    },
    light() {
      return require("module_13258");
    }
  });
};
export const useTopPatternSource = function useTopPatternSource() {
  const obj = shared;
  return _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13256");
    },
    darker() {
      return require("module_13257");
    },
    light() {
      return require("module_13258");
    }
  });
};
export const TopPattern = function TopPattern(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13256");
    },
    darker() {
      return require("module_13257");
    },
    light() {
      return require("module_13258");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
