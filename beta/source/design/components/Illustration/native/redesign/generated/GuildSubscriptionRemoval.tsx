// Module ID: 13911
// Function ID: 13912
// Name: GuildSubscriptionRemoval
// Dependencies: [19, 17, 21, 8534, 13912, 13913, 13914, 4639, 2]
// Exports: GuildSubscriptionRemoval, getGuildSubscriptionRemovalSource, useGuildSubscriptionRemovalSource

// Module 13911 (GuildSubscriptionRemoval)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionRemoval.tsx");

export const getGuildSubscriptionRemovalSource = function getGuildSubscriptionRemovalSource(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_13912");
    },
    darker() {
      return require("module_13913");
    },
    light() {
      return require("module_13914");
    }
  });
};
export const useGuildSubscriptionRemovalSource = function useGuildSubscriptionRemovalSource() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13912");
    },
    darker() {
      return require("module_13913");
    },
    light() {
      return require("module_13914");
    }
  });
};
export const GuildSubscriptionRemoval = function GuildSubscriptionRemoval(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13912");
    },
    darker() {
      return require("module_13913");
    },
    light() {
      return require("module_13914");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
