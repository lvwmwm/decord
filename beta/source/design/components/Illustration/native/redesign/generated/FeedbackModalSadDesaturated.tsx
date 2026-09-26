// Module ID: 11912
// Function ID: 11913
// Name: FeedbackModalSadDesaturated
// Dependencies: [19, 17, 21, 8534, 11913, 11914, 11915, 4639, 2]
// Exports: FeedbackModalSadDesaturated, getFeedbackModalSadDesaturatedSource, useFeedbackModalSadDesaturatedSource

// Module 11912 (FeedbackModalSadDesaturated)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/FeedbackModalSadDesaturated.tsx");

export const getFeedbackModalSadDesaturatedSource = function getFeedbackModalSadDesaturatedSource(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_11913");
    },
    darker() {
      return require("module_11914");
    },
    light() {
      return require("module_11915");
    }
  });
};
export const useFeedbackModalSadDesaturatedSource = function useFeedbackModalSadDesaturatedSource() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11913");
    },
    darker() {
      return require("module_11914");
    },
    light() {
      return require("module_11915");
    }
  });
};
export const FeedbackModalSadDesaturated = function FeedbackModalSadDesaturated(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11913");
    },
    darker() {
      return require("module_11914");
    },
    light() {
      return require("module_11915");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
