// Module ID: 18088
// Function ID: 18089
// Name: InviteEmpty
// Dependencies: [19, 17, 21, 8534, 11244, 18089, 11243, 4639, 2]
// Exports: InviteEmpty, getInviteEmptySource, useInviteEmptySource

// Module 18088 (InviteEmpty)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_11244");
    },
    darker() {
      return require("module_18089");
    },
    light() {
      return require("module_11243");
    }
  });
};
export const useInviteEmptySource = function useInviteEmptySource() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11244");
    },
    darker() {
      return require("module_18089");
    },
    light() {
      return require("module_11243");
    }
  });
};
export const InviteEmpty = function InviteEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11244");
    },
    darker() {
      return require("module_18089");
    },
    light() {
      return require("module_11243");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
