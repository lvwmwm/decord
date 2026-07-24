// Module ID: 9681
// Function ID: 75334
// Name: ForumTagContextMenu
// Dependencies: [33, 3803, 1212, 7609, 5490, 3830, 9338, 2]
// Exports: default

// Module 9681 (ForumTagContextMenu)
import { jsx } from "jsxProd";

const result = require("getSystemLocale").fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(children) {
  const tagId = children.tagId;
  const DeveloperMode = tagId(3803).DeveloperMode;
  let obj = {};
  const enabled = DeveloperMode.useSetting();
  const intl = tagId(1212).intl;
  obj.label = intl.string(tagId(1212).t["8VG6IY"]);
  obj.IconComponent = tagId(7609).IdIcon;
  obj.action = function action() {
    tagId(outer1_1[4]).copy(tagId);
    const obj = tagId(outer1_1[4]);
    tagId(outer1_1[5]).presentIdCopied();
  };
  const items = [obj];
  return jsx(tagId(9338).ContextMenu, { triggerOnLongPress: true, items, enabled, children: children.children });
};
