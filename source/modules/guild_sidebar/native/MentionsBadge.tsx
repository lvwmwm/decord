// Module ID: 14929
// Function ID: 112403
// Name: MentionsBadge
// Dependencies: []
// Exports: default

// Module 14929 (MentionsBadge)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/guild_sidebar/native/MentionsBadge.tsx");

export default function MentionsBadge(arg0) {
  let isMentionLowImportance;
  let mentionsCount;
  ({ mentionsCount, isMentionLowImportance } = arg0);
  return jsx(arg1(dependencyMap[2]).Badge, { value, isMentionLowImportance });
};
