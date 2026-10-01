// Module ID: 9401
// Function ID: 9402
// Name: StageActionBar
// Dependencies: [19, 17, 21, 4836, 5727, 9402, 8957, 8861, 9356, 5729, 9353, 9462, 2]

// Module 9401 (StageActionBar)
import react_native from "react-native" /* 17 */;
import StageActionBarButtons from "StageActionBarButtons" /* 9353 */;
import ChannelCallActionBar from "ChannelCallActionBar" /* 9402 */;
import ChannelCallMicButton from "ChannelCallMicButton" /* 9462 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let channel;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let react = react_mod;
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { paddingHorizontal: 12, justifyContent: "center", alignItems: "center", flexDirection: "row", position: "relative" } });
const memoResult = react.memo((channel) => {
  let closure_3;
  let isSmallSize;
  let items2;
  channel = channel.channel;
  let actionBarPrimaryButton;
  let tmp = closure_8();
  let tmp2 = channel;
  let obj = channel(actionBarPrimaryButton[4]);
  const canModerateRequestToSpeak = obj.useCanModerateRequestToSpeak(channel.id);
  let obj2 = channel(actionBarPrimaryButton[5]);
  const tmp3 = actionBarPrimaryButton;
  actionBarPrimaryButton = obj2.useActionBarPrimaryButton({ channel });
  let obj3 = channel(actionBarPrimaryButton[6]);
  const getActionBarHeight = obj3.useGetActionBarHeight(channel.id);
  const tmp7 = canModerateRequestToSpeak(actionBarPrimaryButton[7])(channel.id);
  react = tmp7;
  let obj4 = channel(actionBarPrimaryButton[8]);
  const tmp8 = obj4.useShowStageMusicMuteButton(channel.id) && !tmp7;
  let closure_4 = tmp8;
  const tmp2Result = tmp2(tmp3[9]);
  const isStageVideoEnabledResult = tmp2Result.isStageVideoEnabled(channel.guild_id);
  let c5 = isStageVideoEnabledResult;
  let items = [actionBarPrimaryButton, channel];
  const callback = react.useCallback((isSmallSize) => {
    let tmp4;
    const tmp = actionBarPrimaryButton;
    if (actionBarPrimaryButton === ChannelCallActionBar.ActionBarPrimaryButton.END_STREAM) {
      const obj2 = { channel, isSmallSize };
      tmp4 = hasOwnProperty(tmp2(9402).DisconnectStreamButton, obj2);
    } else {
      tmp4 = null;
      if (tmp === ChannelCallActionBar.ActionBarPrimaryButton.END_CALL) {
        const obj = { channel, isSmallSize };
        tmp4 = hasOwnProperty(tmp2(9353).DisconnectStageButton, obj);
      }
    }
    return tmp4;
  }, items);
  let items1 = [tmp8, channel, canModerateRequestToSpeak, tmp7, callback, isStageVideoEnabledResult];
  let obj5 = {
    pointerEvents: "box-none",
    style: items2,
    children: react.useMemo(() => {
      let tmp4Result;
      const tmp = closure_3;
      if (tmp) {
        let tmp26 = isSmallSize;
        const tmp24 = metroImportDefault;
        const tmp25 = metroRequire;
        if (isSmallSize) {
          const obj2 = { channel, isSmallSize };
          tmp26 = hasOwnProperty(ChannelCallActionBar.VideoButton, obj2);
        }
        const items = [tmp26, , , , ];
        const obj3 = { channel, isSmallSize };
        items[1] = hasOwnProperty(ChannelCallMicButton.ChannelCallMicButton, obj3);
        const tmp39 = StageActionBarButtons;
        const obj4 = { children: items };
        const obj5 = { channel, isSmallSize };
        items[2] = hasOwnProperty(canModerateRequestToSpeak ? tmp39.RequestToSpeakListButton : tmp39.MoveToAudienceButton, obj5);
        const obj6 = { channel, isSmallSize };
        items[3] = hasOwnProperty(StageActionBarButtons.ChatButton, obj6);
        items[4] = callback(isSmallSize);
        tmp4Result = tmp24(tmp25, obj4);
      } else {
        let tmp2 = closure_4;
        const tmp4 = metroImportDefault;
        const tmp5 = metroRequire;
        if (tmp2) {
          const obj = { channel, isSmallSize: closure_4 && canModerateRequestToSpeak };
          tmp2 = hasOwnProperty(StageActionBarButtons.MusicMuteButton, obj);
        }
        const items1 = [tmp2, , , , ];
        const obj7 = { channel, isSmallSize: closure_4 && canModerateRequestToSpeak };
        items1[1] = hasOwnProperty(StageActionBarButtons.RequestToSpeakButton, obj7);
        let tmp14 = canModerateRequestToSpeak;
        if (tmp14) {
          const obj8 = { channel, isSmallSize: closure_4 && canModerateRequestToSpeak };
          tmp14 = hasOwnProperty(StageActionBarButtons.RequestToSpeakListButton, obj8);
        }
        const obj9 = { children: items1 };
        items1[2] = tmp14;
        const obj10 = { channel, isSmallSize: closure_4 && canModerateRequestToSpeak };
        items1[3] = hasOwnProperty(StageActionBarButtons.ChatButton, obj10);
        items1[4] = callback(closure_4 && canModerateRequestToSpeak);
        tmp4Result = tmp4(tmp5, obj9);
      }
      return tmp4Result;
    }, items1)
  };
  items2 = [tmp.container, { height: getActionBarHeight }];
  return c5(closure_4, obj5);
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageActionBar.tsx");

export default memoResult;
