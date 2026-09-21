// Module ID: 16309
// Function ID: 16310
// Name: WumpTrash
// Dependencies: [19, 17, 21, 8502, 16310, 16311, 4607, 2]
// Exports: WumpTrash, getWumpTrashSource, useWumpTrashSource

// Module 16309 (WumpTrash)
import shared from "shared" /* 4607 */;
import _mod8502 from "module_8502" /* 8502 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WumpTrash.tsx");

export const getWumpTrashSource = function getWumpTrashSource(theme) {
  return _mod8502.getIllustrationSource(theme, {
    dark() {
      return require("module_16310");
    },
    darker() {
      return require("module_16311");
    }
  });
};
export const useWumpTrashSource = function useWumpTrashSource() {
  const obj = shared;
  return _mod8502.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16310");
    },
    darker() {
      return require("module_16311");
    }
  });
};
export const WumpTrash = function WumpTrash(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8502.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16310");
    },
    darker() {
      return require("module_16311");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
