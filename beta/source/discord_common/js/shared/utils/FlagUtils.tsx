// Module ID: 1396
// Function ID: 1397
// Name: FlagUtils
// Dependencies: [2]
// Exports: addFlag, hasAnyFlag, hasFlag, removeFlag, removeFlags, setFlag, toggleFlag

// Module 1396 (FlagUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/FlagUtils.tsx");

export function hasFlag(arg0, arg1) {
  return (arg0 & arg1) === arg1;
}
export function hasAnyFlag(flags, arg1) {
  return flags & arg1;
}
export function addFlag(flags, SUPPRESS_NOTIFICATIONS) {
  return flags | SUPPRESS_NOTIFICATIONS;
}
export function removeFlag(flags, OBFUSCATED) {
  return flags & ~OBFUSCATED;
}
export function removeFlags(setting) {
  const substr = [...arguments].slice();
  return substr.reduce((acc, item) => acc & ~item, setting);
}
export function setFlag(arg0, arg1, arg2) {
  let tmp2;
  const tmp = arg2;
  if (tmp) {
    tmp2 = arg0 | arg1;
  } else {
    tmp2 = arg0 & ~arg1;
  }
  return tmp2;
}
export function toggleFlag(arg0, arg1) {
  let tmp;
  if ((arg0 & arg1) === arg1) {
    tmp = arg0 & ~arg1;
  } else {
    tmp = arg0 | arg1;
  }
  return tmp;
}
