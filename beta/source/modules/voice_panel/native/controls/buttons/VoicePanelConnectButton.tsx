// Module ID: 17010
// Function ID: 17011
// Name: VoicePanelConnectButton
// Dependencies: [19, 2045, 21, 4836, 576, 11754, 16950, 504, 1115, 5046, 6747, 7841, 5723, 5205, 17011, 17014, 17015, 12489, 17009, 4832, 2]
// Exports: default

// Module 17010 (VoicePanelConnectButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import useAlertStore from "useAlertStore" /* 5205 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5723 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7841 */;
import VoicePanelSpoilerAlert from "VoicePanelSpoilerAlert" /* 12489 */;
import VoicePanelNoJoinPermissionsAlert from "VoicePanelNoJoinPermissionsAlert" /* 17011 */;
import VoicePanelMaxCapacityAlert from "VoicePanelMaxCapacityAlert" /* 17014 */;
import VoicePanelNsfwAlert from "VoicePanelNsfwAlert" /* 17015 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const VoicePanelSpoilerAlertDefault = VoicePanelSpoilerAlert;
const VoicePanelNoJoinPermissionsAlertDefault = VoicePanelNoJoinPermissionsAlert;
const VoicePanelMaxCapacityAlertDefault = VoicePanelMaxCapacityAlert;
const VoicePanelNsfwAlertDefault = VoicePanelNsfwAlert;
let _require;

let obj2;
const jsx = Fragment.jsx;
let obj = { connectButton: obj2, connectText: { textAlign: "center" } };
obj2 = { backgroundColor: nativeDefault.unsafe_rawColors.GREEN_360, paddingLeft: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelConnectButton.tsx");

export default function ConnectButton(props) {
  let children;
  let connectText;
  let items3;
  let channelId;
  let guildId;
  let canConnect;
  let stateFromStores;
  let c6;
  let closure_7;
  let closure_8;
  let onConnect;
  props = props.props;
  const tmp = c6();
  _require = tmp;
  const obj = canConnect;
  let tmp3 = guildId;
  let tmp2 = channelId;
  const context = canConnect.useContext(channelId(guildId[5]));
  channelId = context.channelId;
  guildId = context.guildId;
  const tmp5 = channelId(guildId[6])(channelId);
  canConnect = tmp5.canConnect;
  let isAtMaxCapacity = tmp5.isAtMaxCapacity;
  let obj2 = require("get initialized");
  const items = [stateFromStores];
  stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  if (isAtMaxCapacity) {
    let isGuildStageVoiceResult;
    if (stateFromStores != null) {
      isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
    }
    isAtMaxCapacity = !isGuildStageVoiceResult;
  }
  const intl = tmp6(tmp3[8]).intl;
  let isGuildStageVoiceResult1;
  const string = intl.string;
  if (stateFromStores != null) {
    isGuildStageVoiceResult1 = stateFromStores.isGuildStageVoice();
  }
  const t = tmp6(tmp3[8]).t;
  const stringResult = string(isGuildStageVoiceResult1 ? t["7vb2cc"] : t["96ANUN"]);
  c6 = stringResult;
  const tmp6Result = require("AgeGateUtils");
  const tmp11 = tmp6Result.useIsChannelContentGated(stateFromStores) && null != guildId && null != channelId;
  closure_7 = tmp11;
  const tmp6Result2 = require("SpoilerChannelUtils");
  const tmp12 = tmp6Result2.useIsChannelSpoilerGated(stateFromStores) && null != guildId && null != channelId;
  closure_8 = tmp12;
  const items1 = [stateFromStores, channelId];
  onConnect = obj.useCallback(() => {
    let isGuildStageVoiceResult;
    if (stateFromStores != null) {
      isGuildStageVoiceResult = obj.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      const obj3 = StageChannelModalActionCreators;
      obj3.connectAndOpen(stateFromStores);
    } else {
      const obj2 = SelectedChannelActionCreatorsDefault;
      const voiceChannel = obj2.selectVoiceChannel(channelId);
    }
  }, items1);
  const items2 = [canConnect, isAtMaxCapacity, channelId, tmp11, tmp12, guildId, onConnect];
  const callback1 = obj.useCallback(() => {
    if (canConnect) {
      const tmp2 = isAtMaxCapacity;
      if (!tmp2) {
        const tmp3 = closure_7;
        if (!tmp3) {
          const tmp4 = closure_8;
          if (!tmp4) {
            onConnect();
          }
        }
      }
    }
    if (canConnect) {
      const tmp16 = isAtMaxCapacity;
      if (tmp16) {
        const openAlert4 = useAlertStore.openAlert;
        useAlertStore;
        openAlert4(VoicePanelMaxCapacityAlert.VOICE_PANEL_MAX_CAPACITY_KEY, jsx(VoicePanelMaxCapacityAlertDefault, { channelId }));
      } else {
        const tmp17 = closure_7;
        if (tmp17) {
          const openAlert3 = useAlertStore.openAlert;
          useAlertStore;
          openAlert3(VoicePanelNsfwAlert.VOICE_PANEL_NSFW_KEY, jsx(VoicePanelNsfwAlertDefault, { guildId, onConnect }));
        } else {
          const tmp18 = closure_8;
          if (tmp18) {
            const openAlert2 = useAlertStore.openAlert;
            useAlertStore;
            openAlert2(VoicePanelSpoilerAlert.VOICE_PANEL_SPOILER_KEY, jsx(VoicePanelSpoilerAlertDefault, { channelId, onConnect }));
          }
        }
      }
    } else {
      const openAlert = useAlertStore.openAlert;
      useAlertStore;
      openAlert(VoicePanelNoJoinPermissionsAlert.VOICE_PANEL_NO_JOIN_PERMS_KEY, jsx(VoicePanelNoJoinPermissionsAlertDefault, {}));
    }
  }, items2);
  const element = { onPress: callback1, props, accessibilityLabel: stringResult, style: tmp.connectButton, children: obj.useMemo(() => jsx(Text_Text.Text, { variant: "text-sm/semibold", color: "text-overlay-light", style: connectText.connectText, children }), items3) };
  items3 = [stringResult, tmp.connectText];
  const tmp2Result = tmp2(tmp3[18]);
  return isAtMaxCapacity(tmp2Result, element);
};
