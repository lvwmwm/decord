// Module ID: 16312
// Function ID: 16313
// Name: WumpTrash
// Dependencies: [19, 17, 21, 8534, 16313, 16314, 4639, 2]
// Exports: WumpTrash, getWumpTrashSource, useWumpTrashSource

// Module 16312 (WumpTrash)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export const getWumpTrashSource = function getWumpTrashSource(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_16313");
    },
    darker() {
      return require("module_16314");
    }
  });
};
export const useWumpTrashSource = function useWumpTrashSource() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16313");
    },
    darker() {
      return require("module_16314");
    }
  });
};
export const WumpTrash = function WumpTrash(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16313");
    },
    darker() {
      return require("module_16314");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
