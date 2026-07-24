// Module ID: 1360
// Function ID: 16285
// Name: hasFlag
// Dependencies: [2]
// Exports: hasAnyFlag, removeFlags, setFlag, toggleFlag

// Module 1360 (hasFlag)
function hasFlag(arg0, arg1) {
  return (arg0 & arg1) === arg1;
}
function addFlag(setting, MUTUAL_FRIENDS) {
  return setting | MUTUAL_FRIENDS;
}
function removeFlag(flags, OBFUSCATED) {
  return flags & ~OBFUSCATED;
}
const result = require("set").fileFinishedImporting("../discord_common/js/shared/utils/FlagUtils.tsx");

export { hasFlag };
export const hasAnyFlag = function hasAnyFlag(flags, arg1) {
  return flags & arg1;
};
export { addFlag };
export { removeFlag };
export const removeFlags = function removeFlags(setting, MUTUAL_FRIENDS, NO_RELATION) {
  const substr = [...arguments].slice();
  return substr.reduce((arg0, arg1) => outer1_2(arg0, arg1), setting);
};
export const setFlag = function setFlag(setting, MUTUAL_FRIENDS) {
  if (arg2) {
    let tmp2 = addFlag(setting, MUTUAL_FRIENDS);
  } else {
    tmp2 = removeFlag(setting, MUTUAL_FRIENDS);
  }
  return tmp2;
};
export const toggleFlag = function toggleFlag(setting, MUTUAL_FRIENDS) {
  if (hasFlag(setting, MUTUAL_FRIENDS)) {
    let tmp2 = removeFlag(setting, MUTUAL_FRIENDS);
  } else {
    tmp2 = addFlag(setting, MUTUAL_FRIENDS);
  }
  return tmp2;
};
