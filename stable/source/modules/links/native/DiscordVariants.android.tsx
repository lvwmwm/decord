// Module ID: 16724
// Function ID: 16725
// Name: DiscordVariants
// Dependencies: [4922, 16725, 2]
// Exports: getCurrentVariant, isVariantInstalled, launchVariant

// Module 16724 (DiscordVariants)
import NativeIntentsModuleDefault from "NativeIntentsModule" /* 4922 */;
import DiscordVariantTypes from "DiscordVariantTypes" /* 16725 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/links/native/DiscordVariants.android.tsx");

export const getCurrentVariant = function getCurrentVariant() {
  const currentDiscordVariant = NativeIntentsModuleDefault.getCurrentDiscordVariant();
  const DISCORD_VARIANT_LIST = DiscordVariantTypes.DISCORD_VARIANT_LIST;
  let found = DISCORD_VARIANT_LIST.find((item) => item === closure_0);
  if (found == null) {
    found = null;
  }
  return found;
};
export const isVariantInstalled = function isVariantInstalled(item) {
  const currentDiscordVariant = NativeIntentsModuleDefault.getCurrentDiscordVariant();
  const DISCORD_VARIANT_LIST = DiscordVariantTypes.DISCORD_VARIANT_LIST;
  let found = DISCORD_VARIANT_LIST.find((item) => item === closure_0);
  if (found == null) {
    found = null;
  }
  if (item === found) {
    let resolved = Promise.resolve(true);
  } else {
    resolved = Promise.resolve(NativeIntentsModuleDefault.isDiscordVariantInstalled(item));
    const tmpResult = NativeIntentsModuleDefault;
  }
  return resolved;
};
export const launchVariant = function launchVariant(arg0) {
  const currentDiscordVariant = NativeIntentsModuleDefault.getCurrentDiscordVariant();
  const DISCORD_VARIANT_LIST = DiscordVariantTypes.DISCORD_VARIANT_LIST;
  let found = DISCORD_VARIANT_LIST.find((item) => item === closure_0);
  if (found == null) {
    found = null;
  }
  if (arg0 === found) {
    let resolved = Promise.resolve(false);
  } else {
    resolved = Promise.resolve(NativeIntentsModuleDefault.launchDiscordVariant(arg0));
    const tmpResult = NativeIntentsModuleDefault;
  }
  return resolved;
};
