// Module ID: 13263
// Function ID: 13264
// Name: getWhatYouLoseProfileTier1Source
// Dependencies: [19, 17, 21, 8164, 13264, 13265, 13266, 1362, 2]
// Exports: WhatYouLoseProfileTier1, getWhatYouLoseProfileTier1Source, useWhatYouLoseProfileTier1Source

// Module 13263 (getWhatYouLoseProfileTier1Source)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8164 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx");

export const getWhatYouLoseProfileTier1Source = function getWhatYouLoseProfileTier1Source(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(13264);
    },
    darker() {
      return callback(13265);
    },
    light() {
      return callback(13266);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useWhatYouLoseProfileTier1Source = function useWhatYouLoseProfileTier1Source() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13264);
    },
    darker() {
      return callback(13265);
    },
    light() {
      return callback(13266);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const WhatYouLoseProfileTier1 = function WhatYouLoseProfileTier1(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(13264);
    },
    darker() {
      return callback(13265);
    },
    light() {
      return callback(13266);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
