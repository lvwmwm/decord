// Module ID: 10673
// Function ID: 83199
// Dependencies: []

// Module 10673
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_8 = arg1(dependencyMap[3]).createStyles({ container: { explicitContentGuilds: "\u{1F9D1}\u{1F3FC}\u200D\u{1F9BD}\u200D\u27A1\uFE0F", CHANNEL_ICON_EMOJIS_GENERATED: true, questDockHeaderActionDisclosures: null, savedMessageDeleteObjectToClient: 15.1, FJD: null } });
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  const arg1 = channel;
  let View;
  let isStageVideoEnabledResult;
  let callback;
  let obj = arg1(dependencyMap[4]);
  const canModerateRequestToSpeak = obj.useCanModerateRequestToSpeak(channel.id);
  const importDefault = canModerateRequestToSpeak;
  const tmp = callback();
  const actionBarPrimaryButton = arg1(dependencyMap[5]).useActionBarPrimaryButton({ channel });
  const dependencyMap = actionBarPrimaryButton;
  const obj2 = arg1(dependencyMap[5]);
  const getActionBarHeight = arg1(dependencyMap[6]).useGetActionBarHeight(channel.id);
  const tmp5 = importDefault(dependencyMap[7])(channel.id);
  const obj3 = arg1(dependencyMap[6]);
  const tmp6 = arg1(dependencyMap[8]).useShowStageMusicMuteButton(channel.id) && !tmp5;
  View = tmp6;
  const obj4 = arg1(dependencyMap[8]);
  isStageVideoEnabledResult = arg1(dependencyMap[9]).isStageVideoEnabled(channel.guild_id);
  const items = [actionBarPrimaryButton, channel];
  callback = importAllResult.useCallback((isSmallSize) => {
    if (actionBarPrimaryButton === channel(actionBarPrimaryButton[5]).ActionBarPrimaryButton.END_STREAM) {
      let obj = { channel, isSmallSize };
      let tmp4 = isStageVideoEnabledResult(channel(actionBarPrimaryButton[5]).DisconnectStreamButton, obj);
    } else {
      tmp4 = null;
      if (actionBarPrimaryButton === channel(actionBarPrimaryButton[5]).ActionBarPrimaryButton.END_CALL) {
        obj = { channel, isSmallSize };
        tmp4 = isStageVideoEnabledResult(channel(actionBarPrimaryButton[10]).DisconnectStageButton, obj);
      }
    }
    return tmp4;
  }, items);
  const items1 = [tmp6, channel, canModerateRequestToSpeak, tmp5, callback, isStageVideoEnabledResult];
  obj = {
    pointerEvents: "box-none",
    style: items2,
    children: importAllResult.useMemo(() => {
      if (tmp5) {
        let obj = {};
        let tmp26 = isStageVideoEnabledResult;
        if (isStageVideoEnabledResult) {
          obj = { channel, isSmallSize: tmp23 };
          tmp26 = isStageVideoEnabledResult(channel(actionBarPrimaryButton[5]).VideoButton, obj);
        }
        const items = [tmp26, , , , ];
        const obj1 = { channel, isSmallSize: isStageVideoEnabledResult };
        items[1] = isStageVideoEnabledResult(channel(actionBarPrimaryButton[11]).ChannelCallMicButton, obj1);
        let ChatButton = channel(actionBarPrimaryButton[10]);
        const obj2 = { channel, isSmallSize: isStageVideoEnabledResult };
        items[2] = isStageVideoEnabledResult(canModerateRequestToSpeak ? ChatButton.RequestToSpeakListButton : ChatButton.MoveToAudienceButton, obj2);
        ChatButton = channel(actionBarPrimaryButton[10]).ChatButton;
        const obj3 = { channel, isSmallSize: isStageVideoEnabledResult };
        items[3] = isStageVideoEnabledResult(ChatButton, obj3);
        items[4] = callback(isStageVideoEnabledResult);
        obj.children = items;
        closure_7(callback, obj);
        const tmp24 = closure_7;
        const tmp25 = callback;
        const tmp31 = isStageVideoEnabledResult;
      } else {
        let tmp = tmp6;
        if (tmp6) {
          tmp = canModerateRequestToSpeak;
        }
        obj = {};
        let tmp4 = tmp6;
        if (tmp6) {
          const obj4 = { channel, isSmallSize: tmp };
          tmp4 = isStageVideoEnabledResult(channel(actionBarPrimaryButton[10]).MusicMuteButton, obj4);
          const tmp5 = isStageVideoEnabledResult;
        }
        const items1 = [tmp4, , , , ];
        const obj5 = { channel, isSmallSize: tmp };
        items1[1] = isStageVideoEnabledResult(channel(actionBarPrimaryButton[10]).RequestToSpeakButton, obj5);
        let tmp13 = canModerateRequestToSpeak;
        if (canModerateRequestToSpeak) {
          const obj6 = { channel, isSmallSize: tmp };
          tmp13 = isStageVideoEnabledResult(channel(actionBarPrimaryButton[10]).RequestToSpeakListButton, obj6);
        }
        items1[2] = tmp13;
        const obj7 = { channel, isSmallSize: tmp };
        items1[3] = isStageVideoEnabledResult(channel(actionBarPrimaryButton[10]).ChatButton, obj7);
        items1[4] = callback(tmp);
        obj.children = items1;
        return closure_7(callback, obj);
      }
    }, items1)
  };
  const items2 = [tmp.container, { height: getActionBarHeight }];
  return isStageVideoEnabledResult(View, obj);
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/stage_channels/native/components/StageActionBar.tsx");

export default memoResult;
