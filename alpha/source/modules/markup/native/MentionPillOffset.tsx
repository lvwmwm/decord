// Module ID: 11077
// Function ID: 11078
// Name: MentionPillOffset
// Dependencies: [1380, 2]

// Module 11077 (MentionPillOffset)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import size from "module_2" /* 2 */;

let num = 2;
if (PlatformUtils.isAndroid()) {
  num = 4;
}
const result = size.fileFinishedImporting("modules/markup/native/MentionPillOffset.tsx");

export const MENTION_PILL_OFFSET_Y = num;
