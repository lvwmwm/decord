// Module ID: 13048
// Function ID: 13049
// Name: Tier048Px
// Dependencies: [19, 17, 21, 7679, 13049, 13050, 13051, 4685, 2]
// Exports: Tier048Px, getTier048PxSource, useTier048PxSource

// Module 13048 (Tier048Px)
import shared from "shared" /* 4685 */;
import _mod7679 from "module_7679" /* 7679 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  return _mod7679.getIllustrationSource(theme, {
    dark() {
      return require("module_13049");
    },
    darker() {
      return require("module_13050");
    },
    light() {
      return require("module_13051");
    }
  });
};
export const useTier048PxSource = function useTier048PxSource() {
  const obj = shared;
  return _mod7679.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13049");
    },
    darker() {
      return require("module_13050");
    },
    light() {
      return require("module_13051");
    }
  });
};
export const Tier048Px = function Tier048Px(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7679.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13049");
    },
    darker() {
      return require("module_13050");
    },
    light() {
      return require("module_13051");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
