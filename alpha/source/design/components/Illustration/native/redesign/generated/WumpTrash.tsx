// Module ID: 16395
// Function ID: 16396
// Name: WumpTrash
// Dependencies: [19, 17, 21, 8581, 16396, 16397, 4680, 2]
// Exports: WumpTrash, getWumpTrashSource, useWumpTrashSource

// Module 16395 (WumpTrash)
import shared from "shared" /* 4680 */;
import _mod8581 from "module_8581" /* 8581 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export const getWumpTrashSource = function getWumpTrashSource(theme) {
  return _mod8581.getIllustrationSource(theme, {
    dark() {
      return require("module_16396");
    },
    darker() {
      return require("module_16397");
    }
  });
};
export const useWumpTrashSource = function useWumpTrashSource() {
  const obj = shared;
  return _mod8581.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16396");
    },
    darker() {
      return require("module_16397");
    }
  });
};
export const WumpTrash = function WumpTrash(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8581.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16396");
    },
    darker() {
      return require("module_16397");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
