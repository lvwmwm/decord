// Module ID: 18105
// Function ID: 18106
// Name: ChannelSetup
// Dependencies: [19, 17, 21, 8502, 18106, 18107, 18108, 4607, 2]
// Exports: ChannelSetup, getChannelSetupSource, useChannelSetupSource

// Module 18105 (ChannelSetup)
import shared from "shared" /* 4607 */;
import _mod8502 from "module_8502" /* 8502 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/ChannelSetup.tsx");

export const getChannelSetupSource = function getChannelSetupSource(theme) {
  return _mod8502.getIllustrationSource(theme, {
    dark() {
      return require("module_18106");
    },
    darker() {
      return require("module_18107");
    },
    light() {
      return require("module_18108");
    }
  });
};
export const useChannelSetupSource = function useChannelSetupSource() {
  const obj = shared;
  return _mod8502.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18106");
    },
    darker() {
      return require("module_18107");
    },
    light() {
      return require("module_18108");
    }
  });
};
export const ChannelSetup = function ChannelSetup(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8502.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_18106");
    },
    darker() {
      return require("module_18107");
    },
    light() {
      return require("module_18108");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
