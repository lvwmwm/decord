// Module ID: 12892
// Function ID: 12893
// Name: NoMutualFriends
// Dependencies: [19, 17, 21, 8534, 12893, 12894, 12895, 4639, 2]
// Exports: NoMutualFriends, getNoMutualFriendsSource, useNoMutualFriendsSource

// Module 12892 (NoMutualFriends)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoMutualFriends.tsx");

export const getNoMutualFriendsSource = function getNoMutualFriendsSource(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_12893");
    },
    darker() {
      return require("module_12894");
    },
    light() {
      return require("module_12895");
    }
  });
};
export const useNoMutualFriendsSource = function useNoMutualFriendsSource() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12893");
    },
    darker() {
      return require("module_12894");
    },
    light() {
      return require("module_12895");
    }
  });
};
export const NoMutualFriends = function NoMutualFriends(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_12893");
    },
    darker() {
      return require("module_12894");
    },
    light() {
      return require("module_12895");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
