// Module ID: 16726
// Function ID: 16727
// Name: getEmptyServerSettingsEmojiSource
// Dependencies: [19, 17, 21, 7664, 16727, 16728, 16729, 1363, 2]
// Exports: EmptyServerSettingsEmoji, getEmptyServerSettingsEmojiSource, useEmptyServerSettingsEmojiSource

// Module 16726 (getEmptyServerSettingsEmojiSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export const getEmptyServerSettingsEmojiSource = function getEmptyServerSettingsEmojiSource(theme) {
  let obj = require(7664) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16727);
    },
    darker() {
      return callback(16728);
    },
    light() {
      return callback(16729);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsEmojiSource = function useEmptyServerSettingsEmojiSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16727);
    },
    darker() {
      return callback(16728);
    },
    light() {
      return callback(16729);
    }
  };
  return require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsEmoji = function EmptyServerSettingsEmoji(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16727);
    },
    darker() {
      return callback(16728);
    },
    light() {
      return callback(16729);
    }
  };
  obj = {};
  const illustrationSource = require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
