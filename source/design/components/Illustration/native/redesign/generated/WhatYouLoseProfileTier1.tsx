// Module ID: 7543
// Function ID: 7544
// Name: getWhatYouLoseProfileTier1Source
// Dependencies: [19, 17, 21, 7544, 7545, 7546, 7547, 4130, 2]
// Exports: WhatYouLoseProfileTier1, getWhatYouLoseProfileTier1Source, useWhatYouLoseProfileTier1Source

// Module 7543 (getWhatYouLoseProfileTier1Source)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx");

export const getWhatYouLoseProfileTier1Source = function getWhatYouLoseProfileTier1Source(theme) {
  let obj = require(7544) /* getIllustrationSource */;
  obj = {
    dark() {
      return callback(7545);
    },
    darker() {
      return callback(7546);
    },
    light() {
      return callback(7547);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWhatYouLoseProfileTier1Source = function useWhatYouLoseProfileTier1Source() {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(7545);
    },
    darker() {
      return callback(7546);
    },
    light() {
      return callback(7547);
    }
  };
  return require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WhatYouLoseProfileTier1 = function WhatYouLoseProfileTier1(arg0) {
  let obj = require(4130) /* AccessibilityAnnouncer */;
  obj = {
    dark() {
      return callback(7545);
    },
    darker() {
      return callback(7546);
    },
    light() {
      return callback(7547);
    }
  };
  obj = {};
  const illustrationSource = require(7544) /* getIllustrationSource */.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
