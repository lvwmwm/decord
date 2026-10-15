// Module ID: 17419
// Function ID: 17420
// Name: DiscordVariants
// Dependencies: [7656, 17420, 2]
// Exports: getCurrentVariant, isVariantInstalled, launchVariant

// Module 17419 (DiscordVariants)
import react_nativeDefault from "react-native" /* 7656 */;
import DiscordVariantTypes from "DiscordVariantTypes" /* 17420 */;
import size from "module_2" /* 2 */;

const f128724 = (item) => item === closure_0;
const result = size.fileFinishedImporting("modules/links/native/DiscordVariants.android.tsx");

export const getCurrentVariant = function getCurrentVariant() {
  const obj = react_nativeDefault;
  const currentDiscordVariant = obj.getCurrentDiscordVariant();
  const DISCORD_VARIANT_LIST = DiscordVariantTypes.DISCORD_VARIANT_LIST;
  let found = DISCORD_VARIANT_LIST.find(f128724);
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
  let found = DISCORD_VARIANT_LIST.find(f128724);
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
  let found = DISCORD_VARIANT_LIST.find(f128724);
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
