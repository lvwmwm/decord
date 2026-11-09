// Module ID: 510
// Function ID: 511
// Name: Storage
// Dependencies: [2, 511]
// Exports: isStoragePersistent

// Module 510 (Storage)
import storage_Storage from "storage/Storage" /* 511 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/storage/Storage.tsx");

export const Storage = storage_Storage.impl;
export function isStoragePersistent() {
  return true;
}
