// Module ID: 12054
// Function ID: 12055
// Name: InvalidLink
// Dependencies: [19, 17, 21, 8506, 11721, 12055, 11722, 4608, 2]
// Exports: InvalidLink, getInvalidLinkSource, useInvalidLinkSource

// Module 12054 (InvalidLink)
import shared from "shared" /* 4608 */;
import _mod8506 from "module_8506" /* 8506 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/InvalidLink.tsx");

export const getInvalidLinkSource = function getInvalidLinkSource(theme) {
  return _mod8506.getIllustrationSource(theme, {
    dark() {
      return require("module_11721");
    },
    darker() {
      return require("module_12055");
    },
    light() {
      return require("module_11722");
    }
  });
};
export const useInvalidLinkSource = function useInvalidLinkSource() {
  const obj = shared;
  return _mod8506.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11721");
    },
    darker() {
      return require("module_12055");
    },
    light() {
      return require("module_11722");
    }
  });
};
export const InvalidLink = function InvalidLink(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8506.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_11721");
    },
    darker() {
      return require("module_12055");
    },
    light() {
      return require("module_11722");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
