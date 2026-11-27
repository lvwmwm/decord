// Module ID: 14955
// Function ID: 14956
// Name: completeStreamVolumeMovedTutorial
// Dependencies: [14954, 4889, 5075, 4876, 2]
// Exports: default

// Module 14955 (completeStreamVolumeMovedTutorial)
import dismissible_content from "dismissible_content" /* 4876 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4889 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5075 */;
import StreamVolumeMovedStore from "StreamVolumeMovedStore" /* 14954 */;
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
