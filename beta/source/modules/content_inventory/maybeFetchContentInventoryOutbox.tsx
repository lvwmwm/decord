// Module ID: 15275
// Function ID: 15276
// Name: maybeFetchContentInventoryOutbox
// Dependencies: [9604, 1089, 15276, 2]
// Exports: default

// Module 15275 (maybeFetchContentInventoryOutbox)
import DurationsDefault from "Durations" /* 1089 */;
import ContentInventoryHttpApi from "ContentInventoryHttpApi" /* 15276 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 9604 */;
import size from "module_2" /* 2 */;

const MINUTE = DurationsDefault.Millis.MINUTE;
const result = size.fileFinishedImporting("modules/content_inventory/maybeFetchContentInventoryOutbox.tsx");

export default function maybeFetchContentInventoryOutbox(id, arg1) {
  const obj = ContentInventoryOutboxStore;
  if (!ContentInventoryOutboxStore.isFetchingUserOutbox(id)) {
    const userOutbox = obj.getUserOutbox(id);
    let num;
    if (userOutbox != null) {
      num = userOutbox.lastFetched;
    }
    if (num == null) {
      num = 0;
    }
    const _Date = Date;
    if (Date.now() - num >= MINUTE) {
      const obj2 = ContentInventoryHttpApi;
      return obj2.getContentInventoryOutbox(id, arg1);
    }
  }
};
