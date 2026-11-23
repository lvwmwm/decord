// Module ID: 14507
// Function ID: 14508
// Name: completeStreamVolumeMovedTutorial
// Dependencies: [14506, 4759, 4945, 4746, 2]
// Exports: default

// Module 14507 (completeStreamVolumeMovedTutorial)
import dismissible_content from "dismissible_content" /* 4746 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4759 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4945 */;
import StreamVolumeMovedStore from "StreamVolumeMovedStore" /* 14506 */;
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
