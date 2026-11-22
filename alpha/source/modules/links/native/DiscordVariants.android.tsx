// Module ID: 17961
// Function ID: 17962
// Name: DiscordVariants
// Dependencies: [6451, 17962, 2]
// Exports: getCurrentVariant, isVariantInstalled, launchVariant

// Module 17961 (DiscordVariants)
import react_nativeDefault from "react-native" /* 6451 */;
import DiscordVariantTypes from "DiscordVariantTypes" /* 17962 */;
import size from "module_2" /* 2 */;

const f113379 = (item) => item === closure_0;
const result = size.fileFinishedImporting("modules/links/native/DiscordVariants.android.tsx");

export function getCurrentVariant() {
  const obj = react_nativeDefault;
  const currentDiscordVariant = obj.getCurrentDiscordVariant();
  const DISCORD_VARIANT_LIST = DiscordVariantTypes.DISCORD_VARIANT_LIST;
  let found = DISCORD_VARIANT_LIST.find(f113379);
  if (found == null) {
    found = null;
  }
  return found;
}
export function isVariantInstalled(item) {
  let resolved;
  const obj = react_nativeDefault;
  const currentDiscordVariant = obj.getCurrentDiscordVariant();
  const DISCORD_VARIANT_LIST = DiscordVariantTypes.DISCORD_VARIANT_LIST;
  let found = DISCORD_VARIANT_LIST.find(f113379);
  if (found == null) {
    found = null;
  }
  if (item === found) {
    resolved = Promise.resolve(true);
  } else {
    const tmpResult = react_nativeDefault;
    resolved = resolve(tmpResult.isDiscordVariantInstalled(item));
  }
  return resolved;
}
export function launchVariant(arg0) {
  let resolved;
  const obj = react_nativeDefault;
  const currentDiscordVariant = obj.getCurrentDiscordVariant();
  const DISCORD_VARIANT_LIST = DiscordVariantTypes.DISCORD_VARIANT_LIST;
  let found = DISCORD_VARIANT_LIST.find(f113379);
  if (found == null) {
    found = null;
  }
  if (arg0 === found) {
    resolved = Promise.resolve(false);
  } else {
    const tmpResult = react_nativeDefault;
    resolved = resolve(tmpResult.launchDiscordVariant(arg0));
  }
  return resolved;
}
