// Module ID: 10003
// Function ID: 10004
// Name: ForumTagContextMenu
// Dependencies: [21, 3974, 1236, 9546, 5756, 4001, 8598, 2]
// Exports: default

// Module 10003 (ForumTagContextMenu)
import { jsx } from "jsxProd";

const result = require("getSystemLocale").fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(children) {
  const tagId = children.tagId;
  const DeveloperMode = tagId(3974).DeveloperMode;
  let obj = { label: null, IconComponent: null, action: null };
  const enabled = DeveloperMode.useSetting();
  const intl = tagId(1236).intl;
  obj[0] = intl.string(tagId(1236).t["8VG6IY"]);
  obj[1] = tagId(9546).IdIcon;
  obj[2] = function action() {
    tagId(outer1_1[4]).copy(tagId);
    const obj = tagId(outer1_1[4]);
    tagId(outer1_1[5]).presentIdCopied();
  };
  const items = [obj];
  return jsx(tagId(8598).ContextMenu, { triggerOnLongPress: true, items, enabled, children: children.children });
};
