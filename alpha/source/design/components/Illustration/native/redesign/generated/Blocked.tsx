// Module ID: 14337
// Function ID: 14338
// Name: Blocked
// Dependencies: [19, 17, 21, 7679, 14338, 14339, 14340, 4685, 2]
// Exports: Blocked, getBlockedSource, useBlockedSource

// Module 14337 (Blocked)
import shared from "shared" /* 4685 */;
import _mod7679 from "module_7679" /* 7679 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  return _mod7679.getIllustrationSource(theme, {
    dark() {
      return require("module_14338");
    },
    darker() {
      return require("module_14339");
    },
    light() {
      return require("module_14340");
    }
  });
};
export const useBlockedSource = function useBlockedSource() {
  const obj = shared;
  return _mod7679.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14338");
    },
    darker() {
      return require("module_14339");
    },
    light() {
      return require("module_14340");
    }
  });
};
export const Blocked = function Blocked(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7679.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_14338");
    },
    darker() {
      return require("module_14339");
    },
    light() {
      return require("module_14340");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
