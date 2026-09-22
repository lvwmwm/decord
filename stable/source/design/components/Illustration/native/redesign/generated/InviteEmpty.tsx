// Module ID: 17764
// Function ID: 17765
// Name: InviteEmpty
// Dependencies: [19, 17, 21, 8349, 11085, 17765, 11084, 4488, 2]
// Exports: InviteEmpty, getInviteEmptySource, useInviteEmptySource

// Module 17764 (InviteEmpty)
import shared from "shared" /* 4488 */;
import _mod8349 from "module_8349" /* 8349 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  return _mod8349.getIllustrationSource(theme, {
    dark() {
      return require("module_11085");
    },
    darker() {
      return require("module_17765");
    },
    light() {
      return require("module_11084");
    }
  });
};
export const useInviteEmptySource = function useInviteEmptySource() {
  const obj = shared;
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11085");
    },
    darker() {
      return require("module_17765");
    },
    light() {
      return require("module_11084");
    }
  });
};
export const InviteEmpty = function InviteEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11085");
    },
    darker() {
      return require("module_17765");
    },
    light() {
      return require("module_11084");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
