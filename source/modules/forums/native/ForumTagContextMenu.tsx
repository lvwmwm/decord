// Module ID: 9645
// Function ID: 75119
// Name: ForumTagContextMenu
// Dependencies: [33, 3803, 1212, 9646, 5492, 3830, 9302, 2]
// Exports: default

// Module 9645 (ForumTagContextMenu)
import { jsx } from "jsxProd";

const result = require("getSystemLocale").fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(children) {
  const tagId = children.tagId;
  const DeveloperMode = tagId(3803).DeveloperMode;
  let obj = {};
  const enabled = DeveloperMode.useSetting();
  const intl = tagId(1212).intl;
  obj.label = intl.string(tagId(1212).t["8VG6IY"]);
  obj.IconComponent = tagId(9646).IdIcon;
  obj.action = function action() {
    tagId(outer1_1[4]).copy(tagId);
    const obj = tagId(outer1_1[4]);
    tagId(outer1_1[5]).presentIdCopied();
  };
  const items = [obj];
  return jsx(tagId(9302).ContextMenu, { triggerOnLongPress: true, items, enabled, children: children.children });
};
