// Module ID: 16622
// Function ID: 16623
// Name: DiscordVariants
// Dependencies: [7434, 16623, 2]
// Exports: getCurrentVariant, isVariantInstalled, launchVariant

// Module 16622 (DiscordVariants)
import react_nativeDefault from "react-native" /* 7434 */;
import DiscordVariantTypes from "DiscordVariantTypes" /* 16623 */;
import size from "module_2" /* 2 */;

const f125367 = (item) => item === closure_0;
const result = size.fileFinishedImporting("modules/links/native/DiscordVariants.android.tsx");

export const getCurrentVariant = function getCurrentVariant() {
  const obj = react_nativeDefault;
  const currentDiscordVariant = obj.getCurrentDiscordVariant();
  const DISCORD_VARIANT_LIST = DiscordVariantTypes.DISCORD_VARIANT_LIST;
  let found = DISCORD_VARIANT_LIST.find(f125367);
  if (found == null) {
    found = null;
  }
  return found;
};
export const isVariantInstalled = function isVariantInstalled(item) {
  let resolved;
  const obj = react_nativeDefault;
  const currentDiscordVariant = obj.getCurrentDiscordVariant();
  const DISCORD_VARIANT_LIST = DiscordVariantTypes.DISCORD_VARIANT_LIST;
  let found = DISCORD_VARIANT_LIST.find(f125367);
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
};
export const launchVariant = function launchVariant(arg0) {
  let resolved;
  const obj = react_nativeDefault;
  const currentDiscordVariant = obj.getCurrentDiscordVariant();
  const DISCORD_VARIANT_LIST = DiscordVariantTypes.DISCORD_VARIANT_LIST;
  let found = DISCORD_VARIANT_LIST.find(f125367);
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
};
