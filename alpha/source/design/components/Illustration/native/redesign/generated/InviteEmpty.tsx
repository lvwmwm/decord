// Module ID: 18095
// Function ID: 18096
// Name: InviteEmpty
// Dependencies: [19, 17, 21, 8506, 11221, 18096, 11220, 4608, 2]
// Exports: InviteEmpty, getInviteEmptySource, useInviteEmptySource

// Module 18095 (InviteEmpty)
import shared from "shared" /* 4608 */;
import _mod8506 from "module_8506" /* 8506 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  return _mod8506.getIllustrationSource(theme, {
    dark() {
      return require("module_11221");
    },
    darker() {
      return require("module_18096");
    },
    light() {
      return require("module_11220");
    }
  });
};
export const useInviteEmptySource = function useInviteEmptySource() {
  const obj = shared;
  return _mod8506.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11221");
    },
    darker() {
      return require("module_18096");
    },
    light() {
      return require("module_11220");
    }
  });
};
export const InviteEmpty = function InviteEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8506.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11221");
    },
    darker() {
      return require("module_18096");
    },
    light() {
      return require("module_11220");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
