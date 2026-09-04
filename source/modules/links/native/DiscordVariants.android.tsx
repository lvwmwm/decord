// Module ID: 16305
// Function ID: 16306
// Name: getCurrentVariant
// Dependencies: [4661, 16306, 2]
// Exports: getCurrentVariant, isVariantInstalled, launchVariant

// Module 16305 (getCurrentVariant)
import set from "set" /* 2 */;
import enforcingDefault from "enforcing" /* 4661 */;

const result = set.fileFinishedImporting("modules/links/native/DiscordVariants.android.tsx");

export const getCurrentVariant = function getCurrentVariant() {
  const _require = enforcingDefault.getCurrentDiscordVariant();
  const DISCORD_VARIANT_LIST = _require(16306).DISCORD_VARIANT_LIST;
  let found = DISCORD_VARIANT_LIST.find((arg0) => arg0 === closure_0);
  if (found == null) {
    found = null;
  }
  return found;
};
export const isVariantInstalled = function isVariantInstalled(arg0) {
  const _require = enforcingDefault.getCurrentDiscordVariant();
  const DISCORD_VARIANT_LIST = _require(16306).DISCORD_VARIANT_LIST;
  let found = DISCORD_VARIANT_LIST.find((arg0) => arg0 === closure_0);
  if (found == null) {
    found = null;
  }
  if (arg0 === found) {
    let resolved = Promise.resolve(true);
  } else {
    resolved = Promise.resolve(enforcingDefault.isDiscordVariantInstalled(arg0));
    const tmpResult = enforcingDefault;
  }
  return resolved;
};
export const launchVariant = function launchVariant(arg0) {
  const _require = enforcingDefault.getCurrentDiscordVariant();
  const DISCORD_VARIANT_LIST = _require(16306).DISCORD_VARIANT_LIST;
  let found = DISCORD_VARIANT_LIST.find((arg0) => arg0 === closure_0);
  if (found == null) {
    found = null;
  }
  if (arg0 === found) {
    let resolved = Promise.resolve(false);
  } else {
    resolved = Promise.resolve(enforcingDefault.launchDiscordVariant(arg0));
    const tmpResult = enforcingDefault;
  }
  return resolved;
};
