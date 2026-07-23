// Module ID: 11543
// Function ID: 89888
// Name: useShowGuildPowerupRollbackSheet
// Dependencies: [57, 31, 1345, 11544, 5802, 11546, 4098, 2]
// Exports: default

// Module 11543 (useShowGuildPowerupRollbackSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { ContentDismissActionType } from "ContentDismissActionType";

const require = arg1;
const result = require("ContentDismissActionType").fileFinishedImporting("modules/premium/powerups/native/hooks/useShowGuildPowerupRollbackSheet.tsx");

export default function useShowGuildPowerupRollbackSheet(arg0, arg1) {
  let modalConfig;
  let shouldShow;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  modalConfig = undefined;
  let first;
  let dependencyMap;
  let callback;
  ({ shouldShow, modalConfig } = first(11544)(arg0, arg1));
  const items = [];
  if (shouldShow) {
    shouldShow = null != modalConfig;
  }
  if (shouldShow) {
    shouldShow = !flag;
  }
  if (shouldShow) {
    items.push(modalConfig.dismissibleContent);
  }
  const tmp = first(11544)(arg0, arg1);
  const tmp4 = callback(modalConfig(5802).useSelectedDismissibleContent(items), 2);
  first = tmp4[0];
  dependencyMap = tmp6;
  callback = React.useRef(false);
  const items1 = [first, modalConfig, tmp4[1]];
  const effect = React.useEffect(() => {
    let current = ref.current;
    if (!current) {
      current = null == modalConfig;
    }
    if (!current) {
      current = null == modalConfig.primaryButtonText;
    }
    if (!current) {
      current = first !== modalConfig.dismissibleContent;
    }
    if (!current) {
      ref.current = true;
      const obj = { header: modalConfig.header };
      const bodies = modalConfig.bodies;
      obj.body = bodies.join("\n\n");
      obj.ctaText = modalConfig.primaryButtonText;
      obj.onCtaPress = function onCtaPress() {
        outer1_2(outer2_5.TAKE_ACTION);
        first(4098).hideActionSheet(modalConfig(11546).GUILD_POWERUP_ROLLBACK_SHEET_KEY);
      };
      obj.onDismiss = function onDismiss() {
        outer1_2(outer2_5.USER_DISMISS);
      };
      first(_undefined[5])(obj);
      const tmp10 = first(_undefined[5]);
    }
  }, items1);
};
