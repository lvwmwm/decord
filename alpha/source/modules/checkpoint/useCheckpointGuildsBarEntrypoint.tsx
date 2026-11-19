// Module ID: 17966
// Function ID: 17967
// Name: useCheckpointGuildsBarEntrypoint
// Dependencies: [32, 19, 4638, 6219, 8960, 4625, 17967, 2]
// Exports: useCheckpointGuildsBarEntrypoint

// Module 17966 (useCheckpointGuildsBarEntrypoint)
import DismissibleContentConstants from "DismissibleContentConstants" /* 4638 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const result = size.fileFinishedImporting("modules/checkpoint/useCheckpointGuildsBarEntrypoint.tsx");

export const CHECKPOINT_GUILDS_BAR_SOURCE = "guilds_bar";
export function useCheckpointGuildsBarEntrypoint(GuildsBar) {
  let isCheckpointOpen;
  let items1;
  let markAsDismissed;
  let visible;
  let tmp = markAsDismissed;
  const obj = markAsDismissed(visible[3]);
  const isCheckpointIntroEnabled = obj.useIsCheckpointIntroEnabled(GuildsBar);
  const useSelectedDismissibleContent = markAsDismissed(visible[4]).useSelectedDismissibleContent;
  const tmp4 = markAsDismissed(visible[4]);
  if (isCheckpointIntroEnabled) {
    const items = [tmp(tmp2[5]).DismissibleContent.BUILD_A_BEAR_INTRO];
    items1 = items;
  } else {
    items1 = [];
  }
  const tmp5 = isCheckpointOpen(useSelectedDismissibleContent(items1), 2);
  markAsDismissed = tmp5[1];
  visible = tmp5[0] === tmp(tmp2[5]).DismissibleContent.BUILD_A_BEAR_INTRO;
  const tmpResult = tmp(visible[6]);
  isCheckpointOpen = tmpResult.useIsCheckpointOpen();
  const items2 = [visible, isCheckpointOpen, markAsDismissed];
  const effect = react.useEffect(() => {
    const tmp = visible && isCheckpointOpen;
    if (tmp) {
      markAsDismissed(ContentDismissActionType.INDIRECT_ACTION);
    }
  }, items2);
  return { visible, markAsDismissed };
}
