// Module ID: 18009
// Function ID: 18010
// Name: EmptyServerSettingsEmoji
// Dependencies: [19, 17, 21, 8534, 18010, 18011, 18012, 4639, 2]
// Exports: EmptyServerSettingsEmoji, getEmptyServerSettingsEmojiSource, useEmptyServerSettingsEmojiSource

// Module 18009 (EmptyServerSettingsEmoji)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export const getEmptyServerSettingsEmojiSource = function getEmptyServerSettingsEmojiSource(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_18010");
    },
    darker() {
      return require("module_18011");
    },
    light() {
      return require("module_18012");
    }
  });
};
export const useEmptyServerSettingsEmojiSource = function useEmptyServerSettingsEmojiSource() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18010");
    },
    darker() {
      return require("module_18011");
    },
    light() {
      return require("module_18012");
    }
  });
};
export const EmptyServerSettingsEmoji = function EmptyServerSettingsEmoji(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18010");
    },
    darker() {
      return require("module_18011");
    },
    light() {
      return require("module_18012");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
