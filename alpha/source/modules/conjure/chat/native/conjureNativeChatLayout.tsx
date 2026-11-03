// Module ID: 12770
// Function ID: 12771
// Name: conjureNativeChatLayout
// Dependencies: [575, 12761, 2]

// Module 12770 (conjureNativeChatLayout)
import nativeDefault from "native" /* 575 */;
import ConjureNativeStatusLine from "ConjureNativeStatusLine" /* 12761 */;
import size from "module_2" /* 2 */;

const PX_8 = nativeDefault.space.PX_8;
const PX_12 = nativeDefault.space.PX_12;
const diff = ConjureNativeStatusLine.MESSAGE_CONTENT_INSET - ConjureNativeStatusLine.MESSAGE_EDGE_INSET;
const result = size.fileFinishedImporting("modules/conjure/chat/native/conjureNativeChatLayout.tsx");

export const BLOCK_GAP = PX_8;
export const ROW_PAD = 2;
export const GROUP_GAP = PX_12;
export const RAIL_INDENT = diff;
