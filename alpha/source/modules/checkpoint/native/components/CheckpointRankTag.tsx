// Module ID: 12759
// Function ID: 12760
// Name: CheckpointRankTag
// Dependencies: [19, 21, 12760, 2]
// Exports: default

// Module 12759 (CheckpointRankTag)
import Fragment from "Fragment" /* 21 */;
import CheckpointTagDefault from "CheckpointTag" /* 12760 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsxs = Fragment.jsxs;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointRankTag.tsx");

export default function CheckpointRankTag(arg0) {
  let chamferCorner;
  let rank;
  let style;
  ({ rank, chamferCorner, style } = arg0);
  const items = ["#", rank];
  return jsxs(CheckpointTagDefault, { chamferCorner, style, children: items });
};
