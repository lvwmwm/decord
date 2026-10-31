// Module ID: 18214
// Function ID: 18215
// Name: BoostProgressBarCoachmark
// Dependencies: [19, 17, 4860, 21, 5014, 9074, 1113, 2570, 5147, 9954, 2]
// Exports: default

// Module 18214 (BoostProgressBarCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1113 */;
import _modDef2570 from "module_2570" /* 2570 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9074 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ riveContainer: { width: 120, height: 80, alignSelf: "center" } });
const result = size.fileFinishedImporting("modules/premium/powerups/native/BoostProgressBarCoachmark.tsx");

export default function BoostProgressBarCoachmark(guild) {
  let closure_2;
  guild = guild.guild;
  const markAsDismissed = guild.markAsDismissed;
  let onDismiss;
  const targetRef = guild.targetRef;
  const tmp = closure_7();
  dependencyMap = tmp;
  const items = [markAsDismissed];
  onDismiss = onDismiss.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items);
  const items1 = [guild.id, markAsDismissed];
  const callback1 = onDismiss.useCallback(() => {
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    const obj = GuildSettingsActionCreatorsDefault;
    obj.saveGuild(guild.id, { premiumProgressBarEnabled: true });
  }, items1);
  const items2 = [onDismiss, callback1, tmp.riveContainer];
  const memo = onDismiss.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let riveContainer;
    const obj = {
      title: intl.string(_modDef2570.uwV2dH),
      description: intl2.string(_modDef2570.MIwlcR),
      visible: true,
      position: "bottom",
      offsetY: 8,
      onDismiss,
      renderImgComponent() {
        return <callback1 style={riveContainer.riveContainer}>{jsx(guild(riveContainer[8]).BoostThisServerRive, { stateMachine: "State Machine 1" })}</callback1>;
      },
      buttonLabel: intl3.string(intl4.t["0CJWP2"]),
      buttonVariant: "primary",
      onButtonPress: callback1
    };
    intl = intl4.intl;
    intl2 = intl4.intl;
    intl3 = intl4.intl;
    return obj;
  }, items2);
  let obj = guild(9954);
  const coachmark = obj.useCoachmark(targetRef, memo);
  return null;
};
