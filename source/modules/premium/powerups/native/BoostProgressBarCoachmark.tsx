// Module ID: 14875
// Function ID: 112050
// Name: BoostProgressBarCoachmark
// Dependencies: []
// Exports: default

// Module 14875 (BoostProgressBarCoachmark)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const ContentDismissActionType = arg1(dependencyMap[2]).ContentDismissActionType;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = arg1(dependencyMap[4]).createStyles({ riveContainer: {} });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/premium/powerups/native/BoostProgressBarCoachmark.tsx");

export default function BoostProgressBarCoachmark(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const markAsDismissed = guild.markAsDismissed;
  const importDefault = markAsDismissed;
  const tmp = callback();
  const dependencyMap = tmp;
  const items = [markAsDismissed];
  const callback = React.useCallback(() => {
    markAsDismissed(constants.USER_DISMISS);
  }, items);
  const React = callback;
  const items1 = [guild.id, markAsDismissed];
  const callback1 = React.useCallback(() => {
    const tmp = markAsDismissed(constants.TAKE_ACTION);
    markAsDismissed(markAsDismissed(constants.TAKE_ACTION)[5]).saveGuild(guild.id, { premiumProgressBarEnabled: true });
  }, items1);
  const View = callback1;
  const items2 = [callback, callback1, tmp.riveContainer];
  const memo = React.useMemo(() => {
    const obj = {};
    const intl = guild(tmp[6]).intl;
    obj.title = intl.string(markAsDismissed(tmp[7]).uwV2dH);
    const intl2 = guild(tmp[6]).intl;
    obj.description = intl2.string(markAsDismissed(tmp[7]).MIwlcR);
    obj.onDismiss = callback;
    obj.renderImgComponent = function renderImgComponent() {
      return callback2(closure_4, { style: riveContainer.riveContainer, children: callback2(callback(riveContainer[8]).BoostThisServerRive, { stateMachine: "State Machine 1" }) });
    };
    const intl3 = guild(tmp[6]).intl;
    obj.buttonLabel = intl3.string(guild(tmp[6]).t.0CJWP2);
    obj.buttonVariant = "primary";
    obj.onButtonPress = callback1;
    return obj;
  }, items2);
  const coachmark = arg1(dependencyMap[9]).useCoachmark(guild.targetRef, memo);
  return null;
};
