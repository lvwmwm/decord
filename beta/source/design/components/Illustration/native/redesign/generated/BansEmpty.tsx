// Module ID: 18092
// Function ID: 18093
// Name: BansEmpty
// Dependencies: [19, 17, 21, 8534, 18093, 18094, 18095, 4639, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 18092 (BansEmpty)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_18093");
    },
    darker() {
      return require("module_18094");
    },
    light() {
      return require("module_18095");
    }
  });
};
export const useBansEmptySource = function useBansEmptySource() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18093");
    },
    darker() {
      return require("module_18094");
    },
    light() {
      return require("module_18095");
    }
  });
};
export const BansEmpty = function BansEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18093");
    },
    darker() {
      return require("module_18094");
    },
    light() {
      return require("module_18095");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
