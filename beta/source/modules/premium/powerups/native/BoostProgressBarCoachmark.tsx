// Module ID: 15800
// Function ID: 15801
// Name: BoostProgressBarCoachmark
// Dependencies: [19, 17, 2042, 21, 4836, 9048, 1115, 2519, 4616, 10589, 2]
// Exports: default

// Module 15800 (BoostProgressBarCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1115 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import _modDef2519 from "module_2519" /* 2519 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
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
      title: intl.string(_modDef2519.uwV2dH),
      description: intl2.string(_modDef2519.MIwlcR),
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
  let obj = guild(10589);
  const coachmark = obj.useCoachmark(targetRef, memo);
  return null;
};
