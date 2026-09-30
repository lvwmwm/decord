// Module ID: 13244
// Function ID: 13245
// Name: Tier048Px
// Dependencies: [19, 17, 21, 7874, 13245, 13246, 13247, 4715, 2]
// Exports: Tier048Px, getTier048PxSource, useTier048PxSource

// Module 13244 (Tier048Px)
import shared from "shared" /* 4715 */;
import _mod7874 from "module_7874" /* 7874 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  return _mod7874.getIllustrationSource(theme, {
    dark() {
      return require("module_13245");
    },
    darker() {
      return require("module_13246");
    },
    light() {
      return require("module_13247");
    }
  });
};
export const useTier048PxSource = function useTier048PxSource() {
  const obj = shared;
  return _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13245");
    },
    darker() {
      return require("module_13246");
    },
    light() {
      return require("module_13247");
    }
  });
};
export const Tier048Px = function Tier048Px(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7874.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13245");
    },
    darker() {
      return require("module_13246");
    },
    light() {
      return require("module_13247");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
