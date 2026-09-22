// Module ID: 13201
// Function ID: 13202
// Name: maybeFetchContentInventoryOutbox
// Dependencies: [8918, 1090, 13202, 2]
// Exports: default

// Module 13201 (maybeFetchContentInventoryOutbox)
import DurationsDefault from "Durations" /* 1090 */;
import ContentInventoryHttpApi from "ContentInventoryHttpApi" /* 13202 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8918 */;

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
