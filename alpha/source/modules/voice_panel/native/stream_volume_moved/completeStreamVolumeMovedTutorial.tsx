// Module ID: 14430
// Function ID: 14431
// Name: completeStreamVolumeMovedTutorial
// Dependencies: [14429, 4669, 4855, 4656, 2]
// Exports: default

// Module 14430 (completeStreamVolumeMovedTutorial)
import dismissible_content from "dismissible_content" /* 4656 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4669 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4855 */;
import StreamVolumeMovedStore from "StreamVolumeMovedStore" /* 14429 */;
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
