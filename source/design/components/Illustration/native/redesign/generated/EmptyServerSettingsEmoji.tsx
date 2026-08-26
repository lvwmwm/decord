// Module ID: 17000
// Function ID: 17001
// Name: getEmptyServerSettingsEmojiSource
// Dependencies: [19, 17, 21, 7834, 17001, 17002, 17003, 1363, 2]
// Exports: EmptyServerSettingsEmoji, getEmptyServerSettingsEmojiSource, useEmptyServerSettingsEmojiSource

// Module 17000 (getEmptyServerSettingsEmojiSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getIllustrationSource from "getIllustrationSource" /* 7834 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export const getEmptyServerSettingsEmojiSource = function getEmptyServerSettingsEmojiSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(17001);
    },
    darker() {
      return callback(17002);
    },
    light() {
      return callback(17003);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsEmojiSource = function useEmptyServerSettingsEmojiSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17001);
    },
    darker() {
      return callback(17002);
    },
    light() {
      return callback(17003);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsEmoji = function EmptyServerSettingsEmoji(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(17001);
    },
    darker() {
      return callback(17002);
    },
    light() {
      return callback(17003);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
