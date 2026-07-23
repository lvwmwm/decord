// Module ID: 15227
// Function ID: 116154
// Name: ContentInventoryEntryRow
// Dependencies: [31, 3767, 33, 566, 7810, 15228, 15237, 2]
// Exports: default

// Module 15227 (ContentInventoryEntryRow)
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
    if (content(7810).ContentInventoryEntryType.TOP_GAME !== content_type) {
      if (content(7810).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
        if (content(7810).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
          obj = { content, renderForScreenshot: flag };
          let tmp11 = null != visible;
          if (tmp11) {
            tmp11 = visible;
          }
          obj.visible = tmp11;
          return jsx(importDefault(15237), { content, renderForScreenshot: flag });
        } else {
          return null;
        }
      }
    }
    obj = { content, renderForScreenshot: flag };
    return jsx(importDefault(15228), { content, renderForScreenshot: flag });
  }
};
