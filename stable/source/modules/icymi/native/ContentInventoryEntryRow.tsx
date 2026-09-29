// Module ID: 16843
// Function ID: 16844
// Name: ContentInventoryEntryRow
// Dependencies: [19, 4437, 21, 504, 8431, 16844, 16853, 2]
// Exports: default

// Module 16843 (ContentInventoryEntryRow)
import GamingLikeEntryRowDefault from "GamingLikeEntryRow" /* 16844 */;
import CustomStatusEntryRowDefault from "CustomStatusEntryRow" /* 16853 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4437 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/ContentInventoryEntryRow.tsx");

export default function ContentInventoryEntryRow(content) {
  content = content.content;
  let flag = content.renderForScreenshot;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = content.visible;
  const items = [RelationshipStore];
  if (obj.useStateFromStores(items, () => RelationshipStore.isBlockedOrIgnored(content.author_id))) {
    return null;
  } else {
    const content_type = content.content_type;
    if (tmp(8431).ContentInventoryEntryType.TOP_GAME !== content_type) {
      if (tmp(8431).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
        if (tmp(8431).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
          const obj2 = { content, renderForScreenshot: flag, visible: null };
          if (flag2 == null) {
            flag2 = false;
          }
          obj2.visible = flag2;
          return jsx(CustomStatusEntryRowDefault, { content, renderForScreenshot: flag, visible: null });
        } else {
          return null;
        }
      }
    }
    const obj3 = { content, renderForScreenshot: flag };
    return jsx(GamingLikeEntryRowDefault, { content, renderForScreenshot: flag });
  }
  obj = content(504);
};
