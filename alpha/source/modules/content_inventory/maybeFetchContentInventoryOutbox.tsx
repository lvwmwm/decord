// Module ID: 14438
// Function ID: 14439
// Name: maybeFetchContentInventoryOutbox
// Dependencies: [9385, 1101, 14439, 2]
// Exports: default

// Module 14438 (maybeFetchContentInventoryOutbox)
import DurationsDefault from "Durations" /* 1101 */;
import ContentInventoryHttpApi from "ContentInventoryHttpApi" /* 14439 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 9385 */;
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
