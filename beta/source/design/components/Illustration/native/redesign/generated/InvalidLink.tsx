// Module ID: 12079
// Function ID: 12080
// Name: InvalidLink
// Dependencies: [19, 17, 21, 8534, 11746, 12080, 11747, 4639, 2]
// Exports: InvalidLink, getInvalidLinkSource, useInvalidLinkSource

// Module 12079 (InvalidLink)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_11746");
    },
    darker() {
      return require("module_12080");
    },
    light() {
      return require("module_11747");
    }
  });
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11746");
    },
    darker() {
      return require("module_12080");
    },
    light() {
      return require("module_11747");
    }
  });
};
export const InvalidLink = function InvalidLink(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11746");
    },
    darker() {
      return require("module_12080");
    },
    light() {
      return require("module_11747");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
