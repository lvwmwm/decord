// Module ID: 15112
// Function ID: 113985
// Name: ContentInventoryEntryRow
// Dependencies: []
// Exports: default

// Module 15112 (ContentInventoryEntryRow)
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/icymi/native/ContentInventoryEntryRow.tsx");

export default function ContentInventoryEntryRow(content) {
  content = content.content;
  const arg1 = content;
  let flag = content.renderForScreenshot;
  if (flag === undefined) {
    flag = false;
  }
  const visible = content.visible;
  let obj = arg1(dependencyMap[3]);
  const items = [closure_3];
  if (obj.useStateFromStores(items, () => blockedOrIgnored.isBlockedOrIgnored(content.author_id))) {
    return null;
  } else {
    const content_type = content.content_type;
    if (arg1(dependencyMap[4]).ContentInventoryEntryType.TOP_GAME !== content_type) {
      if (arg1(dependencyMap[4]).ContentInventoryEntryType.PLAYED_GAME !== content_type) {
        if (arg1(dependencyMap[4]).ContentInventoryEntryType.CUSTOM_STATUS === content_type) {
          obj = { content, renderForScreenshot: flag };
          let tmp11 = null != visible;
          if (tmp11) {
            tmp11 = visible;
          }
          obj.visible = tmp11;
          return jsx(importDefault(dependencyMap[6]), obj);
        } else {
          return null;
        }
      }
    }
    obj = { content, renderForScreenshot: flag };
    return jsx(importDefault(dependencyMap[5]), obj);
  }
};
