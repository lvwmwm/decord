// Module ID: 16640
// Function ID: 16641
// Name: getCannotSwapApplicationText
// Dependencies: [2115, 4472, 4479, 1127, 8523, 2]
// Exports: default

// Module 16640 (getCannotSwapApplicationText)
import LocaleStore from "LocaleStore" /* 2115 */;
import PermissionStore from "PermissionStore" /* 4472 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/app_channels/getCannotSwapApplicationText.tsx");

export default function getCannotSwapApplicationText(arg0) {
  let closure_0;
  _require = arg0;
  const prop = require("AppChannelPermissions").SWAP_APP_CHANNEL_APPLICATION_PERMISSION_LIST;
  const found = prop.filter((item) => !PermissionStore.can(item, closure_0));
  if (0 !== found.length) {
    const _Intl = Intl;
    const self = this;
    const self2 = this;
    const listFormat = new Intl.ListFormat(LocaleStore.locale);
    const intl = tmp(1127).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { permissions: listFormat.format(found.map(require("permissions").getPermissionName)), count: found.length };
    const na1rJc = tmp(1127).t.na1rJc;
    return formatToPlainString(na1rJc, obj);
  }
};
