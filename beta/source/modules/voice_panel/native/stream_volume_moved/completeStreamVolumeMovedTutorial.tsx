// Module ID: 15766
// Function ID: 15767
// Name: completeStreamVolumeMovedTutorial
// Dependencies: [15765, 5152, 5338, 5139, 2]
// Exports: default

// Module 15766 (completeStreamVolumeMovedTutorial)
import dismissible_content from "dismissible_content" /* 5139 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5152 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5338 */;
import StreamVolumeMovedStore from "StreamVolumeMovedStore" /* 15765 */;
import size from "module_2" /* 2 */;

const hideStreamVolumeCoachmark = StreamVolumeMovedStore.hideStreamVolumeCoachmark;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let result = size.fileFinishedImporting("modules/voice_panel/native/stream_volume_moved/completeStreamVolumeMovedTutorial.tsx");

export default function completeStreamVolumeMovedTutorial() {
  hideStreamVolumeCoachmark();
  const obj = DismissibleContentUnsafeUtils;
  const obj2 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.VOICE_PANEL_STREAM_VOLUME_MOVED_NOTICE, obj2);
};
