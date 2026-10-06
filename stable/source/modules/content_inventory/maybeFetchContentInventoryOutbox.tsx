// Module ID: 12654
// Function ID: 12655
// Name: maybeFetchContentInventoryOutbox
// Dependencies: [8251, 1103, 12655, 2]
// Exports: default

// Module 12654 (maybeFetchContentInventoryOutbox)
import DurationsDefault from "Durations" /* 1103 */;
import ContentInventoryHttpApi from "ContentInventoryHttpApi" /* 12655 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8251 */;
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
