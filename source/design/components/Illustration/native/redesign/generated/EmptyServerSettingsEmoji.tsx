// Module ID: 16728
// Function ID: 16729
// Name: getEmptyServerSettingsEmojiSource
// Dependencies: [19, 17, 21, 7668, 16729, 16730, 16731, 1363, 2]
// Exports: EmptyServerSettingsEmoji, getEmptyServerSettingsEmojiSource, useEmptyServerSettingsEmojiSource

// Module 16728 (getEmptyServerSettingsEmojiSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export const getEmptyServerSettingsEmojiSource = function getEmptyServerSettingsEmojiSource(theme) {
  let obj = require(7668) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16729);
    },
    darker() {
      return callback(16730);
    },
    light() {
      return callback(16731);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsEmojiSource = function useEmptyServerSettingsEmojiSource() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16729);
    },
    darker() {
      return callback(16730);
    },
    light() {
      return callback(16731);
    }
  };
  return require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsEmoji = function EmptyServerSettingsEmoji(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16729);
    },
    darker() {
      return callback(16730);
    },
    light() {
      return callback(16731);
    }
  };
  obj = {};
  const illustrationSource = require(7668) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
