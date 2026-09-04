// Module ID: 10557
// Function ID: 10558
// Name: ForumTagContextMenu
// Dependencies: [21, 4166, 1233, 10558, 7130, 4193, 8596, 2]
// Exports: default

// Module 10557 (ForumTagContextMenu)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(children) {
  const tagId = children.tagId;
  const DeveloperMode = tagId(4166).DeveloperMode;
  let obj = { label: null, IconComponent: null, action: null };
  const enabled = DeveloperMode.useSetting();
  const intl = tagId(1233).intl;
  obj[0] = intl.string(tagId(1233).t["8VG6IY"]);
  obj[1] = tagId(10558).IdIcon;
  obj[2] = function action() {
    tagId(closure_1_1[4]).copy(tagId);
    const obj = tagId(closure_1_1[4]);
    tagId(closure_1_1[5]).presentIdCopied();
  };
  const items = [obj];
  return jsx(tagId(8596).ContextMenu, { triggerOnLongPress: true, items, enabled, children: children.children });
};
