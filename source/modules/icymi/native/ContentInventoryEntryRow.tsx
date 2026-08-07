// Module ID: 15532
// Function ID: 15533
// Name: ContentInventoryEntryRow
// Dependencies: [19, 3938, 21, 589, 8174, 15533, 15542, 2]
// Exports: default

// Module 15532 (ContentInventoryEntryRow)
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
    if (tmp(8174).ContentInventoryEntryType.TOP_GAME !== content_type) {
      if (tmp(8174).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
        if (tmp(8174).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
          obj = { content: null, renderForScreenshot: null, visible: null };
          obj[0] = content;
          obj[1] = flag;
          if (flag2 == null) {
            flag2 = false;
          }
          obj[2] = flag2;
          return jsx(importDefault(15542), { content: null, renderForScreenshot: null, visible: null });
        } else {
          return null;
        }
      }
    }
    obj = { content: null, renderForScreenshot: null };
    obj[0] = content;
    obj[1] = flag;
    return jsx(importDefault(15533), { content: null, renderForScreenshot: null });
  }
};
