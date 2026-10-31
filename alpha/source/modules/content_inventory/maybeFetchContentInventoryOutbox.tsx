// Module ID: 14971
// Function ID: 14972
// Name: maybeFetchContentInventoryOutbox
// Dependencies: [9487, 1089, 14972, 2]
// Exports: default

// Module 14971 (maybeFetchContentInventoryOutbox)
import DurationsDefault from "Durations" /* 1089 */;
import ContentInventoryHttpApi from "ContentInventoryHttpApi" /* 14972 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 9487 */;
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
