// Module ID: 15607
// Function ID: 15608
// Name: ContentInventoryEntryRow
// Dependencies: [19, 3938, 21, 589, 8234, 15608, 15617, 2]
// Exports: default

// Module 15607 (ContentInventoryEntryRow)
import "noop";
import upsertRelationship from "upsertRelationship";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/icymi/native/ContentInventoryEntryRow.tsx");

export default function ContentInventoryEntryRow(content) {
  content = content.content;
  let flag = content.renderForScreenshot;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = content.visible;
  let obj = content(589);
  const items = [upsertRelationship];
  if (obj.useStateFromStores(items, () => outer1_3.isBlockedOrIgnored(content.author_id))) {
    return null;
  } else {
    const content_type = content.content_type;
    if (tmp(8234).ContentInventoryEntryType.TOP_GAME !== content_type) {
      if (tmp(8234).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
        if (tmp(8234).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
          obj = { content: null, renderForScreenshot: null, visible: null };
          obj[0] = content;
          obj[1] = flag;
          if (flag2 == null) {
            flag2 = false;
          }
          obj[2] = flag2;
          return jsx(importDefault(15617), { content: null, renderForScreenshot: null, visible: null });
        } else {
          return null;
        }
      }
    }
    obj = { content: null, renderForScreenshot: null };
    obj[0] = content;
    obj[1] = flag;
    return jsx(importDefault(15608), { content: null, renderForScreenshot: null });
  }
};
