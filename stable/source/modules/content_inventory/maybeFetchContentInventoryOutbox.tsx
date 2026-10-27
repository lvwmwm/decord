// Module ID: 14166
// Function ID: 14167
// Name: maybeFetchContentInventoryOutbox
// Dependencies: [9288, 1104, 14167, 2]
// Exports: default

// Module 14166 (maybeFetchContentInventoryOutbox)
import DurationsDefault from "Durations" /* 1104 */;
import ContentInventoryHttpApi from "ContentInventoryHttpApi" /* 14167 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 9288 */;
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
