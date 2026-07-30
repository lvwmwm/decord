// Module ID: 6534
// Function ID: 6535
// Name: getWhatYouLoseProfileTier1Source
// Dependencies: [19, 17, 21, 6535, 6536, 6537, 6538, 4035, 2]
// Exports: WhatYouLoseProfileTier1, getWhatYouLoseProfileTier1Source, useWhatYouLoseProfileTier1Source

// Module 6534 (getWhatYouLoseProfileTier1Source)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx");

export const getWhatYouLoseProfileTier1Source = function getWhatYouLoseProfileTier1Source(theme) {
  let obj = require(6535) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(6536);
    },
    darker() {
      return callback(6537);
    },
    light() {
      return callback(6538);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWhatYouLoseProfileTier1Source = function useWhatYouLoseProfileTier1Source() {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(6536);
    },
    darker() {
      return callback(6537);
    },
    light() {
      return callback(6538);
    }
  };
  return require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WhatYouLoseProfileTier1 = function WhatYouLoseProfileTier1(arg0) {
  let obj = require(4035) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(6536);
    },
    darker() {
      return callback(6537);
    },
    light() {
      return callback(6538);
    }
  };
  obj = {};
  const illustrationSource = require(6535) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
