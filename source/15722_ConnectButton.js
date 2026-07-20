// Module ID: 15722
// Function ID: 120206
// Name: ConnectButton
// Dependencies: []
// Exports: default

// Module 15722 (ConnectButton)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).unsafe_rawColors.GREEN_360, paddingLeft: importDefault(dependencyMap[4]).space.PX_8, paddingRight: importDefault(dependencyMap[4]).space.PX_8 };
obj.connectButton = obj;
obj.connectText = { textAlign: "center" };
let closure_6 = obj.createStyles(obj);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelConnectButton.tsx");

export default function ConnectButton(props) {
  let jsx;
  let callback;
  const tmp = callback();
  const arg1 = tmp;
  const context = React.useContext(importDefault(dependencyMap[5]));
  const channelId = context.channelId;
  const importDefault = channelId;
  const guildId = context.guildId;
  const dependencyMap = guildId;
  const tmp3 = importDefault(dependencyMap[6])(channelId);
  const canConnect = tmp3.canConnect;
  const React = canConnect;
  const isAtMaxCapacity = tmp3.isAtMaxCapacity;
  let closure_4 = isAtMaxCapacity;
  let obj = arg1(dependencyMap[7]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => isAtMaxCapacity.getChannel(channelId));
  let isChannelContentGated = arg1(dependencyMap[8]).useIsChannelContentGated(stateFromStores);
  if (isChannelContentGated) {
    isChannelContentGated = null != guildId;
  }
  if (isChannelContentGated) {
    isChannelContentGated = null != channelId;
  }
  jsx = isChannelContentGated;
  const obj2 = arg1(dependencyMap[8]);
  let isChannelSpoilerGated = arg1(dependencyMap[9]).useIsChannelSpoilerGated(stateFromStores);
  if (isChannelSpoilerGated) {
    isChannelSpoilerGated = null != guildId;
  }
  if (isChannelSpoilerGated) {
    isChannelSpoilerGated = null != channelId;
  }
  callback = isChannelSpoilerGated;
  const items1 = [canConnect, isAtMaxCapacity, channelId, isChannelContentGated, isChannelSpoilerGated, guildId];
  callback = React.useCallback(() => {
    if (canConnect) {
      if (!isAtMaxCapacity) {
        if (!isChannelContentGated) {
          if (!isChannelSpoilerGated) {
            let obj = channelId(guildId[10]);
            const voiceChannel = obj.selectVoiceChannel(channelId);
          }
        }
      }
    }
    if (canConnect) {
      if (isAtMaxCapacity) {
        obj = { channelId };
        tmp(guildId[11]).openAlert(tmp(guildId[13]).VOICE_PANEL_MAX_CAPACITY_KEY, isChannelContentGated(channelId(guildId[13]), obj));
        const obj7 = tmp(guildId[11]);
      } else if (isChannelContentGated) {
        obj = { guildId, channelId };
        tmp(guildId[11]).openAlert(tmp(guildId[14]).VOICE_PANEL_NSFW_KEY, isChannelContentGated(channelId(guildId[14]), obj));
        const obj5 = tmp(guildId[11]);
      } else if (isChannelSpoilerGated) {
        let obj1 = { channelId };
        tmp(guildId[11]).openAlert(tmp(guildId[15]).VOICE_PANEL_SPOILER_KEY, isChannelContentGated(channelId(guildId[15]), obj1));
        const obj3 = tmp(guildId[11]);
      }
    } else {
      obj1 = tmp(guildId[11]);
      obj1.openAlert(tmp(guildId[12]).VOICE_PANEL_NO_JOIN_PERMS_KEY, isChannelContentGated(channelId(guildId[12]), {}));
    }
  }, items1);
  obj = { onPress: callback, props: props.props };
  const obj3 = arg1(dependencyMap[9]);
  const intl = arg1(dependencyMap[17]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[17]).t.96ANUN);
  obj.style = tmp.connectButton;
  const items2 = [tmp.connectText];
  obj.children = React.useMemo(() => {
    const obj = { INTEGRATION_CREATE: null, ConstraintReasonCode: "flex-start", style: tmp.connectText };
    const intl = tmp(guildId[17]).intl;
    obj.children = intl.string(tmp(guildId[17]).t.96ANUN);
    return isChannelContentGated(tmp(guildId[18]).Text, obj);
  }, items2);
  return jsx(importDefault(dependencyMap[16]), obj);
};
