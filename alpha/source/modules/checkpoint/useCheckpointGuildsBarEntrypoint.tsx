// Module ID: 12637
// Function ID: 12638
// Name: useCheckpointGuildsBarEntrypoint
// Dependencies: [32, 4889, 5075, 4876, 6769, 9562, 2]
// Exports: dismissCheckpointIntro, useCheckpointGuildsBarEntrypoint

// Module 12637 (useCheckpointGuildsBarEntrypoint)
import dismissible_content from "dismissible_content" /* 4876 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4889 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5075 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6769 */;
import useSelectedDismissibleContent2 from "useSelectedDismissibleContent" /* 9562 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const guilds_bar = "guilds_bar";
let result = size.fileFinishedImporting("modules/checkpoint/useCheckpointGuildsBarEntrypoint.tsx");

export const CHECKPOINT_GUILDS_BAR_SOURCE = "guilds_bar";
export function dismissCheckpointIntro(devtools) {
  let INDIRECT_ACTION;
  const UNSAFE_markDismissibleContentAsDismissed = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed;
  DismissibleContentUnsafeUtils;
  const BUILD_A_BEAR_INTRO = dismissible_content.DismissibleContent.BUILD_A_BEAR_INTRO;
  if (devtools === guilds_bar) {
    INDIRECT_ACTION = ContentDismissActionType.TAKE_ACTION;
  } else {
    INDIRECT_ACTION = ContentDismissActionType.INDIRECT_ACTION;
  }
  const result = UNSAFE_markDismissibleContentAsDismissed(BUILD_A_BEAR_INTRO, { dismissAction: INDIRECT_ACTION });
}
export function useCheckpointGuildsBarEntrypoint(GuildsBar) {
  let items1;
  let tmp6;
  let tmp7;
  const obj = CheckpointExperiments;
  const isCheckpointIntroEnabled = obj.useIsCheckpointIntroEnabled(GuildsBar);
  const useSelectedDismissibleContent = useSelectedDismissibleContent2.useSelectedDismissibleContent;
  useSelectedDismissibleContent2;
  if (isCheckpointIntroEnabled) {
    const items = [dismissible_content.DismissibleContent.BUILD_A_BEAR_INTRO];
    items1 = items;
  } else {
    items1 = [];
  }
  const tmp5 = _slicedToArray(useSelectedDismissibleContent(items1), 2);
  const obj2 = { visible: tmp6 === dismissible_content.DismissibleContent.BUILD_A_BEAR_INTRO, markAsDismissed: tmp7 };
  [tmp6, tmp7] = tmp5;
  return obj2;
}
