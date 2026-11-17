// Module ID: 15798
// Function ID: 15799
// Name: completeStreamVolumeMovedTutorial
// Dependencies: [15797, 5156, 5342, 5143, 2]
// Exports: default

// Module 15798 (completeStreamVolumeMovedTutorial)
import dismissible_content from "dismissible_content" /* 5143 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5156 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5342 */;
import StreamVolumeMovedStore from "StreamVolumeMovedStore" /* 15797 */;
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
