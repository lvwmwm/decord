// Module ID: 11775
// Function ID: 11776
// Name: FeedbackModalHappyDesaturated
// Dependencies: [19, 17, 21, 8349, 11776, 11777, 11778, 4488, 2]
// Exports: FeedbackModalHappyDesaturated, getFeedbackModalHappyDesaturatedSource, useFeedbackModalHappyDesaturatedSource

// Module 11775 (FeedbackModalHappyDesaturated)
import shared from "shared" /* 4488 */;
import _mod8349 from "module_8349" /* 8349 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalHappyDesaturated.tsx");

export const getFeedbackModalHappyDesaturatedSource = function getFeedbackModalHappyDesaturatedSource(theme) {
  return _mod8349.getIllustrationSource(theme, {
    dark() {
      return require("module_11776");
    },
    darker() {
      return require("module_11777");
    },
    light() {
      return require("module_11778");
    }
  });
};
export const useFeedbackModalHappyDesaturatedSource = function useFeedbackModalHappyDesaturatedSource() {
  const obj = shared;
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11776");
    },
    darker() {
      return require("module_11777");
    },
    light() {
      return require("module_11778");
    }
  });
};
export const FeedbackModalHappyDesaturated = function FeedbackModalHappyDesaturated(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11776");
    },
    darker() {
      return require("module_11777");
    },
    light() {
      return require("module_11778");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
