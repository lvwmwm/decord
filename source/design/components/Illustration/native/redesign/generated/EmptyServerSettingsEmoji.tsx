// Module ID: 16397
// Function ID: 16398
// Name: getEmptyServerSettingsEmojiSource
// Dependencies: [19, 17, 21, 6535, 16398, 16399, 16400, 4035, 2]
// Exports: EmptyServerSettingsEmoji, getEmptyServerSettingsEmojiSource, useEmptyServerSettingsEmojiSource

// Module 16397 (getEmptyServerSettingsEmojiSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export const getEmptyServerSettingsEmojiSource = function getEmptyServerSettingsEmojiSource(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16398);
    },
    darker() {
      return callback(16399);
    },
    light() {
      return callback(16400);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsEmojiSource = function useEmptyServerSettingsEmojiSource() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16398);
    },
    darker() {
      return callback(16399);
    },
    light() {
      return callback(16400);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsEmoji = function EmptyServerSettingsEmoji(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16398);
    },
    darker() {
      return callback(16399);
    },
    light() {
      return callback(16400);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
