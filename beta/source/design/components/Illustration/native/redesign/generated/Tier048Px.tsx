// Module ID: 13801
// Function ID: 13802
// Name: Tier048Px
// Dependencies: [19, 17, 21, 8534, 13802, 13803, 13804, 4639, 2]
// Exports: Tier048Px, getTier048PxSource, useTier048PxSource

// Module 13801 (Tier048Px)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_13802");
    },
    darker() {
      return require("module_13803");
    },
    light() {
      return require("module_13804");
    }
  });
};
export const useTier048PxSource = function useTier048PxSource() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13802");
    },
    darker() {
      return require("module_13803");
    },
    light() {
      return require("module_13804");
    }
  });
};
export const Tier048Px = function Tier048Px(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13802");
    },
    darker() {
      return require("module_13803");
    },
    light() {
      return require("module_13804");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
