// Module ID: 7663
// Function ID: 7664
// Name: getWhatYouLoseProfileTier1Source
// Dependencies: [19, 17, 21, 7664, 7665, 7666, 7667, 1363, 2]
// Exports: WhatYouLoseProfileTier1, getWhatYouLoseProfileTier1Source, useWhatYouLoseProfileTier1Source

// Module 7663 (getWhatYouLoseProfileTier1Source)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx");

export const getWhatYouLoseProfileTier1Source = function getWhatYouLoseProfileTier1Source(theme) {
  let obj = require(7664) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(7665);
    },
    darker() {
      return callback(7666);
    },
    light() {
      return callback(7667);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWhatYouLoseProfileTier1Source = function useWhatYouLoseProfileTier1Source() {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(7665);
    },
    darker() {
      return callback(7666);
    },
    light() {
      return callback(7667);
    }
  };
  return require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WhatYouLoseProfileTier1 = function WhatYouLoseProfileTier1(arg0) {
  let obj = require(1363) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(7665);
    },
    darker() {
      return callback(7666);
    },
    light() {
      return callback(7667);
    }
  };
  obj = {};
  const illustrationSource = require(7664) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
