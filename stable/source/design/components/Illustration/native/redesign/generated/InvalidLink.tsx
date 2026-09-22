// Module ID: 11930
// Function ID: 11931
// Name: InvalidLink
// Dependencies: [19, 17, 21, 8349, 11591, 11931, 11592, 4488, 2]
// Exports: InvalidLink, getInvalidLinkSource, useInvalidLinkSource

// Module 11930 (InvalidLink)
import shared from "shared" /* 4488 */;
import _mod8349 from "module_8349" /* 8349 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  return _mod8349.getIllustrationSource(theme, {
    dark() {
      return require("module_11591");
    },
    darker() {
      return require("module_11931");
    },
    light() {
      return require("module_11592");
    }
  });
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  const obj = shared;
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11591");
    },
    darker() {
      return require("module_11931");
    },
    light() {
      return require("module_11592");
    }
  });
};
export const InvalidLink = function InvalidLink(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11591");
    },
    darker() {
      return require("module_11931");
    },
    light() {
      return require("module_11592");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
