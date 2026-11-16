// Module ID: 11217
// Function ID: 11218
// Name: MentionPillOffset
// Dependencies: [1377, 2]

// Module 11217 (MentionPillOffset)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

let num = 2;
if (PlatformUtils.isAndroid()) {
  num = 4;
}
const result = size.fileFinishedImporting("modules/markup/native/MentionPillOffset.tsx");

export const MENTION_PILL_OFFSET_Y = num;
