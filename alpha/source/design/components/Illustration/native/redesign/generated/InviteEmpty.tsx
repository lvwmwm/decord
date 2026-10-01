// Module ID: 17708
// Function ID: 17709
// Name: InviteEmpty
// Dependencies: [19, 17, 21, 7861, 10607, 17709, 10606, 4714, 2]
// Exports: InviteEmpty, getInviteEmptySource, useInviteEmptySource

// Module 17708 (InviteEmpty)
import shared from "shared" /* 4714 */;
import _mod7861 from "module_7861" /* 7861 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  return _mod7861.getIllustrationSource(theme, {
    dark() {
      return require("module_10607");
    },
    darker() {
      return require("module_17709");
    },
    light() {
      return require("module_10606");
    }
  });
};
export const useInviteEmptySource = function useInviteEmptySource() {
  const obj = shared;
  return _mod7861.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10607");
    },
    darker() {
      return require("module_17709");
    },
    light() {
      return require("module_10606");
    }
  });
};
export const InviteEmpty = function InviteEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7861.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10607");
    },
    darker() {
      return require("module_17709");
    },
    light() {
      return require("module_10606");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
