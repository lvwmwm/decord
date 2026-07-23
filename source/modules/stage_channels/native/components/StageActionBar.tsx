// Module ID: 10683
// Function ID: 83249
// Dependencies: [31, 27, 33, 4130, 4948, 10684, 10628, 10367, 10648, 4950, 10645, 10732, 2]

// Module 10683
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ container: { paddingHorizontal: 12, justifyContent: "center", alignItems: "center", flexDirection: "row", position: "relative" } });
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  let c4;
  let callback;
  callback = undefined;
  let obj = channel(actionBarPrimaryButton[4]);
  const canModerateRequestToSpeak = obj.useCanModerateRequestToSpeak(channel.id);
  let tmp = callback2();
  actionBarPrimaryButton = channel(actionBarPrimaryButton[5]).useActionBarPrimaryButton({ channel });
  let obj2 = channel(actionBarPrimaryButton[5]);
  const getActionBarHeight = channel(actionBarPrimaryButton[6]).useGetActionBarHeight(channel.id);
  const tmp5 = canModerateRequestToSpeak(actionBarPrimaryButton[7])(channel.id);
  let obj3 = channel(actionBarPrimaryButton[6]);
  const tmp6 = channel(actionBarPrimaryButton[8]).useShowStageMusicMuteButton(channel.id) && !tmp5;
  c4 = tmp6;
  let obj4 = channel(actionBarPrimaryButton[8]);
  const isStageVideoEnabledResult = channel(actionBarPrimaryButton[9]).isStageVideoEnabled(channel.guild_id);
  callback = isStageVideoEnabledResult;
  let items = [actionBarPrimaryButton, channel];
  callback = importAllResult.useCallback((isSmallSize) => {
    if (actionBarPrimaryButton === channel(actionBarPrimaryButton[5]).ActionBarPrimaryButton.END_STREAM) {
      let obj = { channel, isSmallSize };
      let tmp4 = _undefined(channel(actionBarPrimaryButton[5]).DisconnectStreamButton, obj);
    } else {
      tmp4 = null;
      if (actionBarPrimaryButton === channel(actionBarPrimaryButton[5]).ActionBarPrimaryButton.END_CALL) {
        obj = { channel, isSmallSize };
        tmp4 = _undefined(channel(actionBarPrimaryButton[10]).DisconnectStageButton, obj);
      }
    }
    return tmp4;
  }, items);
  let items1 = [tmp6, channel, canModerateRequestToSpeak, tmp5, callback, isStageVideoEnabledResult];
  obj = {
    pointerEvents: "box-none",
    style: items2,
    children: importAllResult.useMemo(() => {
      if (closure_3) {
        let obj = {};
        let tmp26 = _undefined;
        if (_undefined) {
          obj = { channel, isSmallSize: tmp23 };
          tmp26 = _undefined(channel(actionBarPrimaryButton[5]).VideoButton, obj);
        }
        const items = [tmp26, , , , ];
        const obj1 = { channel, isSmallSize: _undefined };
        items[1] = _undefined(channel(actionBarPrimaryButton[11]).ChannelCallMicButton, obj1);
        let ChatButton = channel(actionBarPrimaryButton[10]);
        const obj2 = { channel, isSmallSize: _undefined };
        items[2] = _undefined(canModerateRequestToSpeak ? ChatButton.RequestToSpeakListButton : ChatButton.MoveToAudienceButton, obj2);
        ChatButton = channel(actionBarPrimaryButton[10]).ChatButton;
        const obj3 = { channel, isSmallSize: _undefined };
        items[3] = _undefined(ChatButton, obj3);
        items[4] = callback(_undefined);
        obj.children = items;
        outer1_7(callback, obj);
        const tmp24 = outer1_7;
        const tmp25 = callback;
        const tmp31 = _undefined;
      } else {
        let tmp = c4;
        if (c4) {
          tmp = canModerateRequestToSpeak;
        }
        obj = {};
        let tmp4 = c4;
        if (c4) {
          const obj4 = { channel, isSmallSize: tmp };
          tmp4 = _undefined(channel(actionBarPrimaryButton[10]).MusicMuteButton, obj4);
        }
        const items1 = [tmp4, , , , ];
        const obj5 = { channel, isSmallSize: tmp };
        items1[1] = _undefined(channel(actionBarPrimaryButton[10]).RequestToSpeakButton, obj5);
        let tmp13 = canModerateRequestToSpeak;
        if (canModerateRequestToSpeak) {
          const obj6 = { channel, isSmallSize: tmp };
          tmp13 = _undefined(channel(actionBarPrimaryButton[10]).RequestToSpeakListButton, obj6);
        }
        items1[2] = tmp13;
        const obj7 = { channel, isSmallSize: tmp };
        items1[3] = _undefined(channel(actionBarPrimaryButton[10]).ChatButton, obj7);
        items1[4] = callback(tmp);
        obj.children = items1;
        return outer1_7(callback, obj);
      }
    }, items1)
  };
  items2 = [tmp.container, { height: getActionBarHeight }];
  return callback(c4, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/stage_channels/native/components/StageActionBar.tsx");

export default memoResult;
