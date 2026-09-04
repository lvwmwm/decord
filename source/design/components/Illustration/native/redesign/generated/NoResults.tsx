// Module ID: 8163
// Function ID: 8164
// Name: getNoResultsSource
// Dependencies: [19, 17, 21, 8164, 8165, 8166, 8167, 1362, 2]
// Exports: NoResults, getNoResultsSource, useNoResultsSource

// Module 8163 (getNoResultsSource)
import noopAll from "noop" /* 19 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1362 */;
import getIllustrationSource from "getIllustrationSource" /* 8164 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  let obj = getIllustrationSource;
  obj = {
    dark() {
      return callback(8165);
    },
    darker() {
      return callback(8166);
    },
    light() {
      return callback(8167);
    }
  };
  return obj.getIllustrationSource(theme, obj);
};
export const useNoResultsSource = function useNoResultsSource() {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(8165);
    },
    darker() {
      return callback(8166);
    },
    light() {
      return callback(8167);
    }
  };
  return getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
};
export const NoResults = function NoResults(arg0) {
  let obj = AccessibilityAnnouncer;
  obj = {
    dark() {
      return callback(8165);
    },
    darker() {
      return callback(8166);
    },
    light() {
      return callback(8167);
    }
  };
  obj = {};
  const illustrationSource = getIllustrationSource.getIllustrationSource(obj.useThemeContext().theme, obj);
  const merged = Object.assign(arg0);
  obj.source = illustrationSource;
  return <Image />;
};
