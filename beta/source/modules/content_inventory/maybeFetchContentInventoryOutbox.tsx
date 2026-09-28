// Module ID: 12652
// Function ID: 12653
// Name: maybeFetchContentInventoryOutbox
// Dependencies: [8254, 1091, 12653, 2]
// Exports: default

// Module 12652 (maybeFetchContentInventoryOutbox)
import DurationsDefault from "Durations" /* 1091 */;
import ContentInventoryHttpApi from "ContentInventoryHttpApi" /* 12653 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8254 */;

require = fn;
const MINUTE = DurationsDefault.Millis.MINUTE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/content_inventory/maybeFetchContentInventoryOutbox.tsx");

export default function maybeFetchContentInventoryOutbox(id, arg1) {
  if (!ContentInventoryOutboxStore.isFetchingUserOutbox(id)) {
    const userOutbox = ContentInventoryOutboxStore.getUserOutbox(id);
    let num;
    if (userOutbox != null) {
      num = userOutbox.lastFetched;
    }
    if (num == null) {
      num = 0;
    }
    const _Date = Date;
    if (Date.now() - num >= MINUTE) {
      return ContentInventoryHttpApi.getContentInventoryOutbox(id, arg1);
    }
  }
};
