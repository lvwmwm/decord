// Module ID: 14898
// Function ID: 14899
// Name: completeStreamVolumeMovedTutorial
// Dependencies: [14897, 4858, 5044, 4845, 2]
// Exports: default

// Module 14898 (completeStreamVolumeMovedTutorial)
import dismissible_content from "dismissible_content" /* 4845 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4858 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5044 */;
import StreamVolumeMovedStore from "StreamVolumeMovedStore" /* 14897 */;
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
