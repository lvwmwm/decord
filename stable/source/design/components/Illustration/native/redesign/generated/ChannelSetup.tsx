// Module ID: 18110
// Function ID: 18111
// Name: ChannelSetup
// Dependencies: [19, 17, 21, 8534, 18111, 18112, 18113, 4639, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 18110 (ChannelSetup)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_18111");
    },
    darker() {
      return require("module_18112");
    },
    light() {
      return require("module_18113");
    }
  });
};
export const useChannelSetupSource = function useChannelSetupSource() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18111");
    },
    darker() {
      return require("module_18112");
    },
    light() {
      return require("module_18113");
    }
  });
};
export const ChannelSetup = function ChannelSetup(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18111");
    },
    darker() {
      return require("module_18112");
    },
    light() {
      return require("module_18113");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
