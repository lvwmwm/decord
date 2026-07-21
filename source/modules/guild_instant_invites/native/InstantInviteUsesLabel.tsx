// Module ID: 10176
// Function ID: 78617
// Name: InstantInviteUsesLabel
// Dependencies: []
// Exports: default

// Module 10176 (InstantInviteUsesLabel)
importAll(dependencyMap[0]);
const jsxs = arg1(dependencyMap[1]).jsxs;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteUsesLabel.tsx");

export default function InstantInviteUsesLabel(style) {
  let maxUses;
  let uses;
  ({ uses, maxUses } = style);
  let combined = uses;
  if (0 !== maxUses) {
    const _HermesInternal = HermesInternal;
    combined = "" + uses + "/" + maxUses;
  }
  const obj = { hasMaxConnections: false, isBoostOnlySubscription: false, style: style.style };
  const items = [, combined];
  obj.children = items;
  return jsxs(arg1(dependencyMap[2]).Text, obj);
};
