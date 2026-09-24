// Module ID: 15146
// Function ID: 15147
// Name: Blocked
// Dependencies: [19, 17, 21, 8581, 15147, 15148, 15149, 4680, 2]
// Exports: Blocked, getBlockedSource, useBlockedSource

// Module 15146 (Blocked)
import shared from "shared" /* 4680 */;
import _mod8581 from "module_8581" /* 8581 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/Blocked.tsx");

export const getBlockedSource = function getBlockedSource(theme) {
  return _mod8581.getIllustrationSource(theme, {
    dark() {
      return require("module_15147");
    },
    darker() {
      return require("module_15148");
    },
    light() {
      return require("module_15149");
    }
  });
};
export const useBlockedSource = function useBlockedSource() {
  const obj = shared;
  return _mod8581.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15147");
    },
    darker() {
      return require("module_15148");
    },
    light() {
      return require("module_15149");
    }
  });
};
export const Blocked = function Blocked(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8581.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_15147");
    },
    darker() {
      return require("module_15148");
    },
    light() {
      return require("module_15149");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
