// Module ID: 13598
// Function ID: 13599
// Name: Tier048Px
// Dependencies: [19, 17, 21, 8349, 13599, 13600, 13601, 4488, 2]
// Exports: Tier048Px, getTier048PxSource, useTier048PxSource

// Module 13598 (Tier048Px)
import shared from "shared" /* 4488 */;
import _mod8349 from "module_8349" /* 8349 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  return _mod8349.getIllustrationSource(theme, {
    dark() {
      return require("module_13599");
    },
    darker() {
      return require("module_13600");
    },
    light() {
      return require("module_13601");
    }
  });
};
export const useTier048PxSource = function useTier048PxSource() {
  const obj = shared;
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13599");
    },
    darker() {
      return require("module_13600");
    },
    light() {
      return require("module_13601");
    }
  });
};
export const Tier048Px = function Tier048Px(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13599");
    },
    darker() {
      return require("module_13600");
    },
    light() {
      return require("module_13601");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
