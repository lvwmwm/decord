// Module ID: 14493
// Function ID: 14494
// Name: maybeFetchContentInventoryOutbox
// Dependencies: [8874, 1089, 14494, 2]
// Exports: default

// Module 14493 (maybeFetchContentInventoryOutbox)
import DurationsDefault from "Durations" /* 1089 */;
import ContentInventoryHttpApi from "ContentInventoryHttpApi" /* 14494 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8874 */;
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
