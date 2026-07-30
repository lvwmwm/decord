// Module ID: 9664
// Function ID: 9665
// Name: ForumTagContextMenu
// Dependencies: [21, 3862, 1236, 6773, 5543, 3889, 9295, 2]
// Exports: default

// Module 9664 (ForumTagContextMenu)
import { jsx } from "jsxProd";

const result = require("getSystemLocale").fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(children) {
  const tagId = children.tagId;
  const DeveloperMode = tagId(3862).DeveloperMode;
  let obj = { label: null, IconComponent: null, action: null };
  const enabled = DeveloperMode.useSetting();
  const intl = tagId(1236).intl;
  obj[0] = intl.string(tagId(1236).t["8VG6IY"]);
  obj[1] = tagId(6773).IdIcon;
  obj[2] = function action() {
    tagId(outer1_1[4]).copy(tagId);
    const obj = tagId(outer1_1[4]);
    tagId(outer1_1[5]).presentIdCopied();
  };
  const items = [obj];
  return jsx(tagId(9295).ContextMenu, { triggerOnLongPress: true, items, enabled, children: children.children });
};
