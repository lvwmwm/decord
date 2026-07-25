// Module ID: 15284
// Function ID: 116604
// Name: ContentInventoryEntryRow
// Dependencies: [31, 3768, 33, 566, 7848, 15285, 15294, 2]
// Exports: default

// Module 15284 (ContentInventoryEntryRow)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/icymi/native/ContentInventoryEntryRow.tsx");

export default function ContentInventoryEntryRow(content) {
  content = content.content;
  let flag = content.renderForScreenshot;
  if (flag === undefined) {
    flag = false;
  }
  const visible = content.visible;
  let obj = content(566);
  const items = [_isNativeReflectConstruct];
  if (obj.useStateFromStores(items, () => outer1_3.isBlockedOrIgnored(content.author_id))) {
    return null;
  } else {
    const content_type = content.content_type;
    if (content(7848).ContentInventoryEntryType.TOP_GAME !== content_type) {
      if (content(7848).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
        if (content(7848).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
          obj = { content, renderForScreenshot: flag };
          let tmp11 = null != visible;
          if (tmp11) {
            tmp11 = visible;
          }
          obj.visible = tmp11;
          return jsx(importDefault(15294), { content, renderForScreenshot: flag });
        } else {
          return null;
        }
      }
    }
    obj = { content, renderForScreenshot: flag };
    return jsx(importDefault(15285), { content, renderForScreenshot: flag });
  }
};
