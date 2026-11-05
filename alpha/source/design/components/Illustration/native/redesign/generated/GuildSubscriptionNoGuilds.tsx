// Module ID: 15662
// Function ID: 15663
// Name: GuildSubscriptionNoGuilds
// Dependencies: [19, 21, 8952, 15663, 15664, 15665, 5150, 5854, 2]
// Exports: GuildSubscriptionNoGuilds, getGuildSubscriptionNoGuildsSource, useGuildSubscriptionNoGuildsSource

// Module 15662 (GuildSubscriptionNoGuilds)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 5150 */;
import FastImageDefault from "FastImage" /* 5854 */;
import _mod8952 from "module_8952" /* 8952 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function dark() {
  return require("AssetRegistry");
}
function darker() {
  return require("AssetRegistry");
}
function light() {
  return require("AssetRegistry");
}
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/GuildSubscriptionNoGuilds.tsx");

export function getGuildSubscriptionNoGuildsSource(theme) {
  const obj = _mod8952;
  const obj2 = { dark, darker, light };
  return obj.getIllustrationSource(theme, obj2);
}
export function useGuildSubscriptionNoGuildsSource() {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8952;
  const obj3 = { dark, darker, light };
  return obj2.getIllustrationSource(theme, obj3);
}
export function GuildSubscriptionNoGuilds(arg0) {
  const obj = shared;
  const theme = obj.useThemeContext().theme;
  const obj2 = _mod8952;
  const obj3 = { dark, darker, light };
  const illustrationSource = obj2.getIllustrationSource(theme, obj3);
  FastImageDefault;
  const merged = Object.assign(arg0);
  return <tmp2 source={illustrationSource} />;
}
