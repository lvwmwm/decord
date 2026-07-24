// Module ID: 15910
// Function ID: 122933
// Name: ConnectButton
// Dependencies: [31, 1348, 33, 4130, 689, 10046, 15855, 566, 4345, 5723, 4944, 4472, 15911, 15914, 15915, 12381, 15909, 1212, 4126, 2]
// Exports: default

// Module 15910 (ConnectButton)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360, paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_8, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.connectButton = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.connectText = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelConnectButton.tsx");

export default function ConnectButton(props) {
  let isChannelContentGated;
  let isChannelSpoilerGated;
  const tmp = isChannelSpoilerGated();
  const require = tmp;
  const context = canConnect.useContext(channelId(guildId[5]));
  channelId = context.channelId;
  guildId = context.guildId;
  const tmp3 = channelId(guildId[6])(channelId);
  canConnect = tmp3.canConnect;
  const isAtMaxCapacity = tmp3.isAtMaxCapacity;
  let obj = require(guildId[7]);
  const items = [isAtMaxCapacity];
  const stateFromStores = obj.useStateFromStores(items, () => isAtMaxCapacity.getChannel(channelId));
  isChannelContentGated = require(guildId[8]).useIsChannelContentGated(stateFromStores);
  if (isChannelContentGated) {
    isChannelContentGated = null != guildId;
  }
  if (isChannelContentGated) {
    isChannelContentGated = null != channelId;
  }
  const obj2 = require(guildId[8]);
  isChannelSpoilerGated = require(guildId[9]).useIsChannelSpoilerGated(stateFromStores);
  if (isChannelSpoilerGated) {
    isChannelSpoilerGated = null != guildId;
  }
  if (isChannelSpoilerGated) {
    isChannelSpoilerGated = null != channelId;
  }
  const items1 = [canConnect, isAtMaxCapacity, channelId, isChannelContentGated, isChannelSpoilerGated, guildId];
  const callback = canConnect.useCallback(() => {
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
  let obj3 = require(guildId[9]);
  let intl = require(guildId[17]).intl;
  obj.accessibilityLabel = intl.string(require(guildId[17]).t["96ANUN"]);
  obj.style = tmp.connectButton;
  const items2 = [tmp.connectText];
  obj.children = canConnect.useMemo(() => {
    const obj = { variant: "text-sm/semibold", color: "text-overlay-light", style: tmp.connectText };
    const intl = tmp(guildId[17]).intl;
    obj.children = intl.string(tmp(guildId[17]).t["96ANUN"]);
    return isChannelContentGated(tmp(guildId[18]).Text, obj);
  }, items2);
  return isChannelContentGated(channelId(guildId[16]), obj);
};
