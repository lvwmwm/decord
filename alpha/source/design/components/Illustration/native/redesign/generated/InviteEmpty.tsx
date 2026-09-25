// Module ID: 17415
// Function ID: 17416
// Name: InviteEmpty
// Dependencies: [19, 17, 21, 7671, 10401, 17416, 10400, 4682, 2]
// Exports: InviteEmpty, getInviteEmptySource, useInviteEmptySource

// Module 17415 (InviteEmpty)
import shared from "shared" /* 4682 */;
import _mod7671 from "module_7671" /* 7671 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InviteEmpty.tsx");

export const getInviteEmptySource = function getInviteEmptySource(theme) {
  return _mod7671.getIllustrationSource(theme, {
    dark() {
      return require("module_10401");
    },
    darker() {
      return require("module_17416");
    },
    light() {
      return require("module_10400");
    }
  });
};
export const useInviteEmptySource = function useInviteEmptySource() {
  const obj = shared;
  return _mod7671.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10401");
    },
    darker() {
      return require("module_17416");
    },
    light() {
      return require("module_10400");
    }
  });
};
export const InviteEmpty = function InviteEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7671.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_10401");
    },
    darker() {
      return require("module_17416");
    },
    light() {
      return require("module_10400");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
