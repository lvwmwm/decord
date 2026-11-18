// Module ID: 11099
// Function ID: 11100
// Name: MentionPillOffset
// Dependencies: [1380, 2]

// Module 11099 (MentionPillOffset)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import size from "module_2" /* 2 */;

let num = 2;
if (PlatformUtils.isAndroid()) {
  num = 4;
}
const result = size.fileFinishedImporting("modules/markup/native/MentionPillOffset.tsx");

export const MENTION_PILL_OFFSET_Y = num;
