// Module ID: 17788
// Function ID: 17789
// Name: MentionsBadge
// Dependencies: [19, 21, 1186, 2]
// Exports: default

// Module 17788 (MentionsBadge)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1186 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_sidebar/native/MentionsBadge.tsx");

export default function MentionsBadge(arg0) {
  let isMentionLowImportance;
  let mentionsCount;
  ({ mentionsCount, isMentionLowImportance } = arg0);
  return jsx(native.Badge, { value, isMentionLowImportance });
};
