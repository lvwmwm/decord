// Module ID: 10990
// Function ID: 10991
// Name: MentionPillOffset
// Dependencies: [1377, 2]

// Module 10990 (MentionPillOffset)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

let num = 2;
if (PlatformUtils.isAndroid()) {
  num = 4;
}
const result = size.fileFinishedImporting("modules/markup/native/MentionPillOffset.tsx");

export const MENTION_PILL_OFFSET_Y = num;
