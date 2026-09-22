// Module ID: 11770
// Function ID: 11771
// Name: FeedbackModalNeutralDesaturated
// Dependencies: [19, 17, 21, 8349, 11771, 11772, 11773, 4488, 2]
// Exports: FeedbackModalNeutralDesaturated, getFeedbackModalNeutralDesaturatedSource, useFeedbackModalNeutralDesaturatedSource

// Module 11770 (FeedbackModalNeutralDesaturated)
import shared from "shared" /* 4488 */;
import _mod8349 from "module_8349" /* 8349 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalNeutralDesaturated.tsx");

export const getFeedbackModalNeutralDesaturatedSource = function getFeedbackModalNeutralDesaturatedSource(theme) {
  return _mod8349.getIllustrationSource(theme, {
    dark() {
      return require("module_11771");
    },
    darker() {
      return require("module_11772");
    },
    light() {
      return require("module_11773");
    }
  });
};
export const useFeedbackModalNeutralDesaturatedSource = function useFeedbackModalNeutralDesaturatedSource() {
  const obj = shared;
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11771");
    },
    darker() {
      return require("module_11772");
    },
    light() {
      return require("module_11773");
    }
  });
};
export const FeedbackModalNeutralDesaturated = function FeedbackModalNeutralDesaturated(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11771");
    },
    darker() {
      return require("module_11772");
    },
    light() {
      return require("module_11773");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
