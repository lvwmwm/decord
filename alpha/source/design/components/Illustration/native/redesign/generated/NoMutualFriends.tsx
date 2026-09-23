// Module ID: 12949
// Function ID: 12950
// Name: NoMutualFriends
// Dependencies: [19, 17, 21, 8577, 12950, 12951, 12952, 4678, 2]
// Exports: NoMutualFriends, getNoMutualFriendsSource, useNoMutualFriendsSource

// Module 12949 (NoMutualFriends)
import shared from "shared" /* 4678 */;
import _mod8577 from "module_8577" /* 8577 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export const getNoMutualFriendsSource = function getNoMutualFriendsSource(theme) {
  return _mod8577.getIllustrationSource(theme, {
    dark() {
      return require("module_12950");
    },
    darker() {
      return require("module_12951");
    },
    light() {
      return require("module_12952");
    }
  });
};
export const useNoMutualFriendsSource = function useNoMutualFriendsSource() {
  const obj = shared;
  return _mod8577.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12950");
    },
    darker() {
      return require("module_12951");
    },
    light() {
      return require("module_12952");
    }
  });
};
export const NoMutualFriends = function NoMutualFriends(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8577.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12950");
    },
    darker() {
      return require("module_12951");
    },
    light() {
      return require("module_12952");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
