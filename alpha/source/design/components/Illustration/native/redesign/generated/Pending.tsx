// Module ID: 16677
// Function ID: 16678
// Name: Pending
// Dependencies: [19, 17, 21, 7671, 16678, 16679, 16680, 4682, 2]
// Exports: Pending, getPendingSource, usePendingSource

// Module 16677 (Pending)
import shared from "shared" /* 4682 */;
import _mod7671 from "module_7671" /* 7671 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Pending.tsx");

export const getPendingSource = function getPendingSource(theme) {
  return _mod7671.getIllustrationSource(theme, {
    dark() {
      return require("module_16678");
    },
    darker() {
      return require("module_16679");
    },
    light() {
      return require("module_16680");
    }
  });
};
export const usePendingSource = function usePendingSource() {
  const obj = shared;
  return _mod7671.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16678");
    },
    darker() {
      return require("module_16679");
    },
    light() {
      return require("module_16680");
    }
  });
};
export const Pending = function Pending(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7671.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16678");
    },
    darker() {
      return require("module_16679");
    },
    light() {
      return require("module_16680");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
