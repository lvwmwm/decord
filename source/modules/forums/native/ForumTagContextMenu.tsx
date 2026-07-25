// Module ID: 9605
// Function ID: 74929
// Name: ForumTagContextMenu
// Dependencies: [33, 3804, 1212, 6719, 5490, 3831, 9231, 2]
// Exports: default

// Module 9605 (ForumTagContextMenu)
import { jsx } from "jsxProd";

const result = require("getSystemLocale").fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(children) {
  const tagId = children.tagId;
  const DeveloperMode = tagId(3804).DeveloperMode;
  let obj = {};
  const enabled = DeveloperMode.useSetting();
  const intl = tagId(1212).intl;
  obj.label = intl.string(tagId(1212).t["8VG6IY"]);
  obj.IconComponent = tagId(6719).IdIcon;
  obj.action = function action() {
    tagId(outer1_1[4]).copy(tagId);
    const obj = tagId(outer1_1[4]);
    tagId(outer1_1[5]).presentIdCopied();
  };
  const items = [obj];
  return jsx(tagId(9231).ContextMenu, { triggerOnLongPress: true, items, enabled, children: children.children });
};
