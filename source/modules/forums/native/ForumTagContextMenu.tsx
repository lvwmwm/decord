// Module ID: 10628
// Function ID: 10629
// Name: ForumTagContextMenu
// Dependencies: [21, 1935, 1114, 10629, 7190, 4258, 8666, 2]
// Exports: default

// Module 10628 (ForumTagContextMenu)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(children) {
  const tagId = children.tagId;
  const DeveloperMode = tagId(1935).DeveloperMode;
  let obj = { label: null, IconComponent: null, action: null };
  const enabled = DeveloperMode.useSetting();
  const intl = tagId(1114).intl;
  obj[0] = intl.string(tagId(1114).t["8VG6IY"]);
  obj[1] = tagId(10629).IdIcon;
  obj[2] = function action() {
    tagId(closure_1_1[4]).copy(tagId);
    const obj = tagId(closure_1_1[4]);
    tagId(closure_1_1[5]).presentIdCopied();
  };
  const items = [obj];
  return jsx(tagId(8666).ContextMenu, { triggerOnLongPress: true, items, enabled, children: children.children });
};
