// Module ID: 8533
// Function ID: 8534
// Name: generated/NoResults
// Dependencies: [19, 17, 21, 8534, 8535, 8536, 8537, 4639, 2]
// Exports: NoResults, getNoResultsSource, useNoResultsSource

// Module 8533 (generated/NoResults)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/NoResults.tsx");

export const getNoResultsSource = function getNoResultsSource(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_8535");
    },
    darker() {
      return require("module_8536");
    },
    light() {
      return require("module_8537");
    }
  });
};
export const useNoResultsSource = function useNoResultsSource() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_8535");
    },
    darker() {
      return require("module_8536");
    },
    light() {
      return require("module_8537");
    }
  });
};
export const NoResults = function NoResults(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_8535");
    },
    darker() {
      return require("module_8536");
    },
    light() {
      return require("module_8537");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
