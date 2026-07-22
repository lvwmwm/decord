// Module ID: 11382
// Function ID: 88513
// Dependencies: []

// Module 11382
const importAllResult = importAll(dependencyMap[0]);
({ View: closure_4, Pressable: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[1]);
({ NOOP: closure_8, Permissions: closure_9 } = arg1(dependencyMap[4]));
const jsx = arg1(dependencyMap[5]).jsx;
const tmp3 = arg1(dependencyMap[4]);
let closure_11 = arg1(dependencyMap[6]).createStyles((arg0, arg1) => {
  let obj = {};
  obj = { borderRadius: importDefault(dependencyMap[7]).radii.xxl, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_8, paddingVertical: importDefault(dependencyMap[7]).space.PX_4, marginVertical: -importDefault(dependencyMap[7]).space.PX_4, backgroundColor: importDefault(dependencyMap[7]).colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, minHeight: 28, justifyContent: "center" };
  let num = 1;
  if (arg0) {
    num = 0;
  }
  obj.elevation = num;
  obj.shadowRadius = 4;
  obj.shadowOffset = {};
  obj.shadowColor = importDefault(dependencyMap[7]).colors.BLACK;
  let num2 = 0.14;
  if (arg1) {
    num2 = 0.08;
  }
  obj.shadowOpacity = num2;
  let str = "rgba(255, 255, 255, 0.14)";
  if (arg1) {
    str = "rgba(0, 0, 0, 0.08)";
  }
  obj.borderColor = str;
  obj.borderWidth = 1;
  obj.joinButton = obj;
  obj.joinButtonContent = {};
  obj = { tintColor: importDefault(dependencyMap[7]).colors.WHITE };
  obj.joinButtonIconActive = obj;
  obj.joinButtonIconInactive = { tintColor: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_DEFAULT };
  const obj2 = {};
  const obj1 = { tintColor: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_DEFAULT };
  let num3 = 0;
  if (obj6.isAndroid()) {
    num3 = -2;
  }
  obj2.marginTop = num3;
  obj.joinButtonText = obj2;
  return obj;
});
const obj2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo(function VocalChannelJoinButton(channel) {
  let noIcon;
  let small;
  channel = channel.channel;
  const arg1 = channel;
  let voiceStates = channel.voiceStates;
  if (voiceStates === undefined) {
    voiceStates = [];
  }
  const importDefault = voiceStates;
  ({ small, noIcon } = channel);
  if (small === undefined) {
    small = false;
  }
  const tmp = importDefault(dependencyMap[9])();
  let obj = arg1(dependencyMap[11]);
  let intl = callback(tmp, obj.isThemeLight(importDefault(dependencyMap[10])()));
  let obj1 = arg1(dependencyMap[12]);
  const isConnectedToVoiceChannel = obj1.useIsConnectedToVoiceChannel(channel);
  let obj2 = arg1(dependencyMap[13]);
  const items = [closure_6];
  const stateFromStores = obj2.useStateFromStores(items, () => !closure_6.can(constants.CONNECT, channel));
  let obj3 = arg1(dependencyMap[14]);
  const stageParticipantsCount = obj3.useStageParticipantsCount(channel.id, arg1(dependencyMap[15]).StageChannelParticipantNamedIndex.AUDIENCE);
  const isGuildStageVoiceResult = channel.isGuildStageVoice();
  let obj4 = arg1(dependencyMap[16]);
  const tmp2 = importDefault(dependencyMap[10])();
  let obj5 = arg1(dependencyMap[13]);
  const items1 = [closure_7];
  const stateFromStores1 = obj5.useStateFromStores(items1, () => closure_7.hasVideo(channel.id));
  const sum = stageParticipantsCount + voiceStates.length;
  let num = 0;
  if (null != sum) {
    num = sum;
  }
  const items2 = [voiceStates];
  const memo = importAllResult.useMemo(() => {
    let found;
    if (null != voiceStates) {
      found = voiceStates.find((voiceState) => voiceState.voiceState.selfStream);
    }
    return null != found;
  }, items2);
  let tmp12 = stateFromStores1;
  if (!stateFromStores1) {
    tmp12 = tmp7;
  }
  const tmp7 = obj4.useStageHasMedia(channel.id) && isGuildStageVoiceResult;
  obj = { channel, video: tmp12 };
  const connectedUserLimit = arg1(dependencyMap[17]).useConnectedUserLimit(obj);
  const obj7 = arg1(dependencyMap[17]);
  obj = { channel, video: tmp12, userCount: num };
  let connectedUserLimitFormatted = arg1(dependencyMap[17]).useConnectedUserLimitFormatted(obj);
  let tmp15 = !stateFromStores && !isConnectedToVoiceChannel && tmp10 != connectedUserLimitFormatted && num > 0;
  if (tmp15) {
    tmp15 = num >= connectedUserLimit / 2 + 1;
  }
  if (isConnectedToVoiceChannel) {
    return null;
  } else if (small) {
    obj1 = { onPress: closure_8, style: intl.joinButton };
    obj2 = { style: intl.joinButtonContent };
    obj3 = {};
    intl = intl.joinButtonText;
    obj3.style = intl;
    if (tmp10 == connectedUserLimitFormatted) {
      intl = arg1(dependencyMap[19]).intl;
      connectedUserLimitFormatted = intl.string(arg1(dependencyMap[19]).t.VJlc0S);
    }
    obj3.children = connectedUserLimitFormatted;
    obj2.children = tmp16(arg1(dependencyMap[18]).Text, obj3);
    obj1.children = tmp16(closure_4, obj2);
    let tmp16Result = tmp16(closure_5, obj1);
    const tmp30 = closure_5;
    const tmp32 = closure_4;
  } else {
    obj4 = {};
    if (tmp15) {
      obj4.text = connectedUserLimitFormatted;
      if (!noIcon) {
        if (!isConnectedToVoiceChannel) {
          if (!memo) {
            let joinButtonIconActive = intl.joinButtonIconInactive;
          }
          const items3 = [joinButtonIconActive, { "Null": "icon-strong", "Null": "text-md/medium" }];
          let tmp26 = arg1;
          let str2 = dependencyMap;
          if (isGuildStageVoiceResult) {
            let VoiceNormalIcon = tmp26(str2[21]).StageIcon;
          } else {
            VoiceNormalIcon = tmp26(str2[22]).VoiceNormalIcon;
          }
          tmp26 = jsx;
          obj5 = {};
          str2 = "xs";
          obj5.size = "xs";
          obj5.style = items3;
          <VoiceNormalIcon {...obj5} />;
        }
        joinButtonIconActive = intl.joinButtonIconActive;
      }
      obj4.icon = undefined;
      obj4.size = "sm";
      let str4 = "tertiary";
      if (memo) {
        str4 = "destructive";
      }
      obj4.variant = str4;
      obj4.onPress = closure_8;
      obj4.pointerEvents = "none";
      obj4.accessible = false;
      obj4.accessibilityElementsHidden = true;
      obj4.importantForAccessibility = "no";
      tmp16Result = tmp16(tmp19, obj4);
    } else {
      const intl2 = arg1(dependencyMap[19]).intl;
      let str = intl2.string;
      let toUpperCase = arg1(dependencyMap[19]).t;
      if (memo) {
        str = str(toUpperCase.dI3q4h);
        toUpperCase = str.toUpperCase;
        let formatted = toUpperCase();
      } else {
        formatted = str(toUpperCase.VJlc0S);
      }
    }
  }
});
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/channel_list_v2/native/components/VocalChannelJoinButton.tsx");

export default memoResult;
