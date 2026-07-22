// Module ID: 9638
// Function ID: 75078
// Name: ForumTagContextMenu
// Dependencies: []
// Exports: default

// Module 9638 (ForumTagContextMenu)
const jsx = require(dependencyMap[0]).jsx;
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(children) {
  const require = children.tagId;
  const DeveloperMode = require(dependencyMap[1]).DeveloperMode;
  const obj = {};
  const enabled = DeveloperMode.useSetting();
  const intl = require(dependencyMap[2]).intl;
  obj.label = intl.string(require(dependencyMap[2]).t.8VG6IY);
  obj.IconComponent = require(dependencyMap[3]).IdIcon;
  obj.action = function action() {
    tagId(closure_1[4]).copy(tagId);
    const obj = tagId(closure_1[4]);
    tagId(closure_1[5]).presentIdCopied();
  };
  const items = [obj];
  return jsx(require(dependencyMap[6]).ContextMenu, { triggerOnLongPress: true, items, enabled, children: children.children });
};
