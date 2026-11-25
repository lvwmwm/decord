// Module ID: 11144
// Function ID: 11145
// Name: MentionPillOffset
// Dependencies: [1378, 2]

// Module 11144 (MentionPillOffset)
import PlatformUtils from "PlatformUtils" /* 1378 */;
import size from "module_2" /* 2 */;

let num = 2;
if (PlatformUtils.isAndroid()) {
  num = 4;
}
const result = size.fileFinishedImporting("modules/markup/native/MentionPillOffset.tsx");

export const MENTION_PILL_OFFSET_Y = num;
