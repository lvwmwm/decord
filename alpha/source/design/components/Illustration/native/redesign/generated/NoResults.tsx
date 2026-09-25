// Module ID: 7670
// Function ID: 7671
// Name: generated/NoResults
// Dependencies: [19, 17, 21, 7671, 7672, 7673, 7674, 4682, 2]
// Exports: NoResults, getNoResultsSource, useNoResultsSource

// Module 7670 (generated/NoResults)
import shared from "shared" /* 4682 */;
import _mod7671 from "module_7671" /* 7671 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  return _mod7671.getIllustrationSource(theme, {
    dark() {
      return require("module_7672");
    },
    darker() {
      return require("module_7673");
    },
    light() {
      return require("module_7674");
    }
  });
};
export const useNoResultsSource = function useNoResultsSource() {
  const obj = shared;
  return _mod7671.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_7672");
    },
    darker() {
      return require("module_7673");
    },
    light() {
      return require("module_7674");
    }
  });
};
export const NoResults = function NoResults(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod7671.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_7672");
    },
    darker() {
      return require("module_7673");
    },
    light() {
      return require("module_7674");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
