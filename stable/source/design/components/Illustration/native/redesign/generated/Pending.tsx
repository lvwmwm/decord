// Module ID: 17360
// Function ID: 17361
// Name: Pending
// Dependencies: [19, 17, 21, 8534, 17361, 17362, 17363, 4639, 2]
// Exports: Pending, getPendingSource, usePendingSource

// Module 17360 (Pending)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_17361");
    },
    darker() {
      return require("module_17362");
    },
    light() {
      return require("module_17363");
    }
  });
};
export const usePendingSource = function usePendingSource() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17361");
    },
    darker() {
      return require("module_17362");
    },
    light() {
      return require("module_17363");
    }
  });
};
export const Pending = function Pending(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17361");
    },
    darker() {
      return require("module_17362");
    },
    light() {
      return require("module_17363");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
