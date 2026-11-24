// Module ID: 14776
// Function ID: 14777
// Name: completeStreamVolumeMovedTutorial
// Dependencies: [14775, 4763, 4949, 4750, 2]
// Exports: default

// Module 14776 (completeStreamVolumeMovedTutorial)
import dismissible_content from "dismissible_content" /* 4750 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4763 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4949 */;
import StreamVolumeMovedStore from "StreamVolumeMovedStore" /* 14775 */;
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
