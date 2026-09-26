// Module ID: 15081
// Function ID: 15082
// Name: Blocked
// Dependencies: [19, 17, 21, 8534, 15082, 15083, 15084, 4639, 2]
// Exports: Blocked, getBlockedSource, useBlockedSource

// Module 15081 (Blocked)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_15082");
    },
    darker() {
      return require("module_15083");
    },
    light() {
      return require("module_15084");
    }
  });
};
export const useBlockedSource = function useBlockedSource() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15082");
    },
    darker() {
      return require("module_15083");
    },
    light() {
      return require("module_15084");
    }
  });
};
export const Blocked = function Blocked(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15082");
    },
    darker() {
      return require("module_15083");
    },
    light() {
      return require("module_15084");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
