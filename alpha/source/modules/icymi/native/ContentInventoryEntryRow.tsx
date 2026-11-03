// Module ID: 18732
// Function ID: 18733
// Name: ContentInventoryEntryRow
// Dependencies: [19, 5083, 21, 504, 8838, 18733, 18740, 2]
// Exports: default

// Module 18732 (ContentInventoryEntryRow)
import Fragment from "Fragment" /* 21 */;
import GamingLikeEntryRowDefault from "GamingLikeEntryRow" /* 18733 */;
import CustomStatusEntryRowDefault from "CustomStatusEntryRow" /* 18740 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 5083 */;
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
    if (content(8838).ContentInventoryEntryType.TOP_GAME !== content_type) {
      if (content(8838).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
        if (content(8838).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
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
