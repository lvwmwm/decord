// Module ID: 13623
// Function ID: 13624
// Name: GuildSubscriptionNoGuilds
// Dependencies: [19, 17, 21, 8349, 13624, 13625, 13626, 4488, 2]
// Exports: GuildSubscriptionNoGuilds, getGuildSubscriptionNoGuildsSource, useGuildSubscriptionNoGuildsSource

// Module 13623 (GuildSubscriptionNoGuilds)
import shared from "shared" /* 4488 */;
import _mod8349 from "module_8349" /* 8349 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export const getGuildSubscriptionNoGuildsSource = function getGuildSubscriptionNoGuildsSource(theme) {
  return _mod8349.getIllustrationSource(theme, {
    dark() {
      return require("module_13624");
    },
    darker() {
      return require("module_13625");
    },
    light() {
      return require("module_13626");
    }
  });
};
export const useGuildSubscriptionNoGuildsSource = function useGuildSubscriptionNoGuildsSource() {
  const obj = shared;
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13624");
    },
    darker() {
      return require("module_13625");
    },
    light() {
      return require("module_13626");
    }
  });
};
export const GuildSubscriptionNoGuilds = function GuildSubscriptionNoGuilds(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_13624");
    },
    darker() {
      return require("module_13625");
    },
    light() {
      return require("module_13626");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
