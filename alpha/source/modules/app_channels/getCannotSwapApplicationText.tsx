// Module ID: 17296
// Function ID: 17297
// Name: getCannotSwapApplicationText
// Dependencies: [2109, 4396, 4403, 1115, 9345, 2]
// Exports: default

// Module 17296 (getCannotSwapApplicationText)
import LocaleStore from "LocaleStore" /* 2109 */;
import PermissionStore from "PermissionStore" /* 4396 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_channels/getCannotSwapApplicationText.tsx");

export default function getCannotSwapApplicationText(arg0) {
  _require = arg0;
  const prop = require("AppChannelPermissions").SWAP_APP_CHANNEL_APPLICATION_PERMISSION_LIST;
  const found = prop.filter((item) => !PermissionStore.can(item, closure_0));
  if (0 !== found.length) {
    const _Intl = Intl;
    const listFormat = new Intl.ListFormat(LocaleStore.locale);
    const intl = tmp(1115).intl;
    const obj = { permissions: listFormat.format(found.map(tmp(9345).getPermissionName)), count: found.length };
    return intl.formatToPlainString(tmp(1115).t.na1rJc, obj);
  }
};
