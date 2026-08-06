// Module ID: 16545
// Function ID: 16546
// Name: getEmptyServerSettingsEmojiSource
// Dependencies: [19, 17, 21, 7544, 16546, 16547, 16548, 4130, 2]
// Exports: EmptyServerSettingsEmoji, getEmptyServerSettingsEmojiSource, useEmptyServerSettingsEmojiSource

// Module 16545 (getEmptyServerSettingsEmojiSource)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx");

export const getEmptyServerSettingsEmojiSource = function getEmptyServerSettingsEmojiSource(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(16546);
    },
    darker() {
      return callback(16547);
    },
    light() {
      return callback(16548);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useEmptyServerSettingsEmojiSource = function useEmptyServerSettingsEmojiSource() {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16546);
    },
    darker() {
      return callback(16547);
    },
    light() {
      return callback(16548);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const EmptyServerSettingsEmoji = function EmptyServerSettingsEmoji(arg0) {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(16546);
    },
    darker() {
      return callback(16547);
    },
    light() {
      return callback(16548);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
