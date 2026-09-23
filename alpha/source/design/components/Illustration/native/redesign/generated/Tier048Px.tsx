// Module ID: 13865
// Function ID: 13866
// Name: Tier048Px
// Dependencies: [19, 17, 21, 8577, 13866, 13867, 13868, 4678, 2]
// Exports: Tier048Px, getTier048PxSource, useTier048PxSource

// Module 13865 (Tier048Px)
import shared from "shared" /* 4678 */;
import _mod8577 from "module_8577" /* 8577 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  return _mod8577.getIllustrationSource(theme, {
    dark() {
      return require("module_13866");
    },
    darker() {
      return require("module_13867");
    },
    light() {
      return require("module_13868");
    }
  });
};
export const useTier048PxSource = function useTier048PxSource() {
  const obj = shared;
  return _mod8577.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13866");
    },
    darker() {
      return require("module_13867");
    },
    light() {
      return require("module_13868");
    }
  });
};
export const Tier048Px = function Tier048Px(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8577.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13866");
    },
    darker() {
      return require("module_13867");
    },
    light() {
      return require("module_13868");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
