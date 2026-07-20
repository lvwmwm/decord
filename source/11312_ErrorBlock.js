// Module ID: 11312
// Function ID: 88043
// Name: ErrorBlock
// Dependencies: []
// Exports: default

// Module 11312 (ErrorBlock)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/ErrorBlock.tsx");

export default function ErrorBlock(children) {
  const obj = { color: arg1(dependencyMap[2]).MessageBlockColors.RED, children: children.children };
  return jsx(importDefault(dependencyMap[2]), obj);
};
