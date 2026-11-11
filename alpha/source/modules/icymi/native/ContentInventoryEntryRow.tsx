// Module ID: 19145
// Function ID: 19146
// Name: ContentInventoryEntryRow
// Dependencies: [19, 5185, 21, 504, 8355, 19146, 19153, 2]
// Exports: default

// Module 19145 (ContentInventoryEntryRow)
import Fragment from "Fragment" /* 21 */;
import GamingLikeEntryRowDefault from "GamingLikeEntryRow" /* 19146 */;
import CustomStatusEntryRowDefault from "CustomStatusEntryRow" /* 19153 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 5185 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/icymi/native/ContentInventoryEntryRow.tsx");

export default function ContentInventoryEntryRow(content) {
  content = content.content;
  let flag = content.renderForScreenshot;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = content.visible;
  const items = [RelationshipStore];
  const obj = content(504);
  if (obj.useStateFromStores(items, () => RelationshipStore.isBlockedOrIgnored(content.author_id))) {
    return null;
  } else {
    const content_type = content.content_type;
    if (content(8355).ContentInventoryEntryType.TOP_GAME !== content_type) {
      if (content(8355).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
        if (content(8355).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
          const obj2 = { content, renderForScreenshot: flag, visible: flag2 };
          const tmp4 = jsx;
          const tmp6 = CustomStatusEntryRowDefault;
          if (flag2 == null) {
            flag2 = false;
          }
          return tmp4(tmp6, obj2);
        } else {
          return null;
        }
      }
    }
    return jsx(GamingLikeEntryRowDefault, { content, renderForScreenshot: flag });
  }
};
