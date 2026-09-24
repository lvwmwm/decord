// Module ID: 13874
// Function ID: 13875
// Name: Tier048Px
// Dependencies: [19, 17, 21, 8581, 13875, 13876, 13877, 4680, 2]
// Exports: Tier048Px, getTier048PxSource, useTier048PxSource

// Module 13874 (Tier048Px)
import shared from "shared" /* 4680 */;
import _mod8581 from "module_8581" /* 8581 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Tier048Px.tsx");

export const getTier048PxSource = function getTier048PxSource(theme) {
  return _mod8581.getIllustrationSource(theme, {
    dark() {
      return require("module_13875");
    },
    darker() {
      return require("module_13876");
    },
    light() {
      return require("module_13877");
    }
  });
};
export const useTier048PxSource = function useTier048PxSource() {
  const obj = shared;
  return _mod8581.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13875");
    },
    darker() {
      return require("module_13876");
    },
    light() {
      return require("module_13877");
    }
  });
};
export const Tier048Px = function Tier048Px(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8581.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13875");
    },
    darker() {
      return require("module_13876");
    },
    light() {
      return require("module_13877");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
