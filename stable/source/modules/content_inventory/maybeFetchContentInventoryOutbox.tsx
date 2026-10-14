// Module ID: 12917
// Function ID: 12918
// Name: maybeFetchContentInventoryOutbox
// Dependencies: [8447, 1102, 12918, 2]
// Exports: default

// Module 12917 (maybeFetchContentInventoryOutbox)
import DurationsDefault from "Durations" /* 1102 */;
import ContentInventoryHttpApi from "ContentInventoryHttpApi" /* 12918 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8447 */;
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
