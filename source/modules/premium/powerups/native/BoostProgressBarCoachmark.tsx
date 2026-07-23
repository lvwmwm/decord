// Module ID: 14999
// Function ID: 114261
// Name: BoostProgressBarCoachmark
// Dependencies: [31, 27, 1345, 33, 4130, 8438, 1212, 2230, 3842, 8563, 2]
// Exports: default

// Module 14999 (BoostProgressBarCoachmark)
import result from "result";
import { View } from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ riveContainer: { width: 120, height: 80, alignSelf: "center" } });
const result = require("ContentDismissActionType").fileFinishedImporting("modules/premium/powerups/native/BoostProgressBarCoachmark.tsx");

export default function BoostProgressBarCoachmark(guild) {
  guild = guild.guild;
  const markAsDismissed = guild.markAsDismissed;
  let tmp = callback();
  const dependencyMap = tmp;
  const items = [markAsDismissed];
  callback = callback.useCallback(() => {
    markAsDismissed(outer1_5.USER_DISMISS);
  }, items);
  const items1 = [guild.id, markAsDismissed];
  const callback1 = callback.useCallback(() => {
    const tmp = markAsDismissed(outer1_5.TAKE_ACTION);
    markAsDismissed(markAsDismissed(outer1_5.TAKE_ACTION)[5]).saveGuild(guild.id, { premiumProgressBarEnabled: true });
  }, items1);
  const items2 = [callback, callback1, tmp.riveContainer];
  const memo = callback.useMemo(() => {
    const obj = { title: null, description: null, visible: true, position: "bottom", offsetY: 8 };
    const intl = guild(tmp[6]).intl;
    obj.title = intl.string(markAsDismissed(tmp[7]).uwV2dH);
    const intl2 = guild(tmp[6]).intl;
    obj.description = intl2.string(markAsDismissed(tmp[7]).MIwlcR);
    obj.onDismiss = callback;
    obj.renderImgComponent = function renderImgComponent() {
      return outer2_6(callback1, { style: outer1_2.riveContainer, children: outer2_6(guild(table[8]).BoostThisServerRive, { stateMachine: "State Machine 1" }) });
    };
    const intl3 = guild(tmp[6]).intl;
    obj.buttonLabel = intl3.string(guild(tmp[6]).t["0CJWP2"]);
    obj.buttonVariant = "primary";
    obj.onButtonPress = callback1;
    return obj;
  }, items2);
  const coachmark = guild(8563).useCoachmark(guild.targetRef, memo);
  return null;
};
