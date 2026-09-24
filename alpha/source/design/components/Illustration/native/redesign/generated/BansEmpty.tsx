// Module ID: 18191
// Function ID: 18192
// Name: BansEmpty
// Dependencies: [19, 17, 21, 8581, 18192, 18193, 18194, 4680, 2]
// Exports: BansEmpty, getBansEmptySource, useBansEmptySource

// Module 18191 (BansEmpty)
import shared from "shared" /* 4680 */;
import _mod8581 from "module_8581" /* 8581 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/BansEmpty.tsx");

export const getBansEmptySource = function getBansEmptySource(theme) {
  return _mod8581.getIllustrationSource(theme, {
    dark() {
      return require("module_18192");
    },
    darker() {
      return require("module_18193");
    },
    light() {
      return require("module_18194");
    }
  });
};
export const useBansEmptySource = function useBansEmptySource() {
  const obj = shared;
  return _mod8581.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18192");
    },
    darker() {
      return require("module_18193");
    },
    light() {
      return require("module_18194");
    }
  });
};
export const BansEmpty = function BansEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8581.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18192");
    },
    darker() {
      return require("module_18193");
    },
    light() {
      return require("module_18194");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
