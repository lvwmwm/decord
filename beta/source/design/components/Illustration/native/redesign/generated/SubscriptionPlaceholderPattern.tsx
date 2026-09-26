// Module ID: 13796
// Function ID: 13797
// Name: SubscriptionPlaceholderPattern
// Dependencies: [19, 17, 21, 8534, 13797, 13798, 13799, 4639, 2]
// Exports: SubscriptionPlaceholderPattern, getSubscriptionPlaceholderPatternSource, useSubscriptionPlaceholderPatternSource

// Module 13796 (SubscriptionPlaceholderPattern)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/SubscriptionPlaceholderPattern.tsx");

export const getSubscriptionPlaceholderPatternSource = function getSubscriptionPlaceholderPatternSource(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_13797");
    },
    darker() {
      return require("module_13798");
    },
    light() {
      return require("module_13799");
    }
  });
};
export const useSubscriptionPlaceholderPatternSource = function useSubscriptionPlaceholderPatternSource() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13797");
    },
    darker() {
      return require("module_13798");
    },
    light() {
      return require("module_13799");
    }
  });
};
export const SubscriptionPlaceholderPattern = function SubscriptionPlaceholderPattern(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13797");
    },
    darker() {
      return require("module_13798");
    },
    light() {
      return require("module_13799");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
