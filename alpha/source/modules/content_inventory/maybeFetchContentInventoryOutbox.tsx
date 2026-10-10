// Module ID: 13358
// Function ID: 13359
// Name: maybeFetchContentInventoryOutbox
// Dependencies: [8996, 1102, 13359, 2]
// Exports: default

// Module 13358 (maybeFetchContentInventoryOutbox)
import DurationsDefault from "Durations" /* 1102 */;
import ContentInventoryHttpApi from "ContentInventoryHttpApi" /* 13359 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8996 */;
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
