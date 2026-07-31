// Module ID: 9679
// Function ID: 9680
// Name: ForumTagContextMenu
// Dependencies: [21, 3866, 1236, 9680, 5547, 3893, 9310, 2]
// Exports: default

// Module 9679 (ForumTagContextMenu)
import { jsx } from "jsxProd";

const result = require("getSystemLocale").fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(children) {
  const tagId = children.tagId;
  const DeveloperMode = tagId(3866).DeveloperMode;
  let obj = { label: null, IconComponent: null, action: null };
  const enabled = DeveloperMode.useSetting();
  const intl = tagId(1236).intl;
  obj[0] = intl.string(tagId(1236).t["8VG6IY"]);
  obj[1] = tagId(9680).IdIcon;
  obj[2] = function action() {
    tagId(outer1_1[4]).copy(tagId);
    const obj = tagId(outer1_1[4]);
    tagId(outer1_1[5]).presentIdCopied();
  };
  const items = [obj];
  return jsx(tagId(9310).ContextMenu, { triggerOnLongPress: true, items, enabled, children: children.children });
};
