// Module ID: 19581
// Function ID: 19582
// Name: useVoicePanelDockContextMenuItems
// Dependencies: [19, 1072, 11362, 19582, 12075, 19540, 19583, 19584, 11332, 6767, 1108, 19586, 1113, 5845, 19587, 19589, 3184, 15137, 11172, 12270, 8714, 7633, 19591, 2]
// Exports: default

// Module 19581 (useVoicePanelDockContextMenuItems)
import Constants from "Constants" /* 1072 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import intl6 from "intl" /* 1113 */;
import _modDef3184 from "module_3184" /* 3184 */;
import UserPlusIcon from "UserPlusIcon" /* 5845 */;
import SettingsIcon from "SettingsIcon" /* 7633 */;
import ChatIcon from "ChatIcon" /* 8714 */;
import ActivitiesIcon from "ActivitiesIcon" /* 12270 */;
import trackVoicePanelTabOpened from "trackVoicePanelTabOpened" /* 19586 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ComponentActions = Constants.ComponentActions;
const VoicePanelDockContextMenu = "VoicePanelDockContextMenu";
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useVoicePanelDockContextMenuItems.tsx");

export default function useVoicePanelDockContextMenuItems(id, arg1) {
  let canInviteMembers;
  let closure_0;
  let guildId;
  _require = arg1;
  guildId = canInviteMembers.useContext(guildId(id[2])).guildId;
  id = id.id;
  let obj = require("useCanInviteMembers");
  canInviteMembers = obj.useCanInviteMembers(id);
  const tmp2 = guildId(id[4])(id);
  let closure_4 = tmp2;
  let obj2 = require("useInviteMembersCallback");
  const inviteMembersCallback = obj2.useInviteMembersCallback(id);
  const tmp4 = guildId(id[6])(id, inviteMembersCallback, "dock context menu");
  let closure_6 = tmp4;
  const tmp5 = guildId(id[7])(id, inviteMembersCallback);
  let closure_7 = tmp5;
  const isGuildStageVoiceResult = id.isGuildStageVoice();
  let closure_8 = isGuildStageVoiceResult;
  const tmp7 = guildId(id[8])(id);
  let closure_9 = tmp7;
  let obj3 = require("StageMediaHooks");
  const isStageVideoEnabled = obj3.useIsStageVideoEnabled(id.guild_id);
  let items = [arg1];
  const callback = canInviteMembers.useCallback((arg0) => {
    closure_0();
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const obj = { source: trackVoicePanelTabOpened.VoicePanelTabAnalyticsSources.DOCK_CONTEXT_MENU };
    ComponentDispatch.dispatch(arg0, obj);
  }, items);
  let items1 = [canInviteMembers, tmp2, inviteMembersCallback, , , , , , , , , , , , , , , ];
  ({ isFeatureEnabled: arr2[3], videoBlocked: arr2[4], text: arr2[5], isActive: arr2[6], onPress: arr2[7] } = tmp4);
  ({ videoSupported: arr2[8], videoBlocked: arr2[9], isVideoEnabled: arr2[10], onPress: arr2[11] } = tmp5);
  items1[12] = isGuildStageVoiceResult;
  items1[13] = tmp7;
  items1[14] = isStageVideoEnabled;
  items1[15] = callback;
  items1[16] = guildId;
  items1[17] = id;
  return canInviteMembers.useMemo(() => {
    let MobilePhoneShareIcon;
    let VideoIcon;
    let intl;
    let intl3;
    let intl4;
    let intl5;
    let tmp14;
    const items = [];
    const tmp = canInviteMembers && !constants;
    if (tmp) {
      let obj = { label: intl.string(intl6.t["EE+P0H"]), IconComponent: UserPlusIcon.UserPlusIcon, action: inviteMembersCallback };
      const push = items.push;
      intl = intl6.intl;
      push(obj);
    }
    let tmp12 = closure_8;
    if (!tmp12) {
      tmp12 = !closure_6.isFeatureEnabled && !closure_6.videoBlocked;
    }
    const items1 = [];
    if (!tmp12) {
      const push2 = items1.push;
      const obj2 = { label: closure_6.text, IconComponent: MobilePhoneShareIcon, action: tmp14.onPress };
      tmp14 = closure_6;
      if (closure_6.isActive) {
        MobilePhoneShareIcon = tmp15(19587).MobilePhoneXIcon;
      } else {
        MobilePhoneShareIcon = tmp15(19589).MobilePhoneShareIcon;
      }
      push2(obj2);
    }
    let tmp18 = !tmp11;
    if (closure_8) {
      tmp18 = closure_9 && isStageVideoEnabled;
    }
    if (tmp18) {
      tmp18 = closure_7.videoSupported || closure_7.videoBlocked;
    }
    if (tmp18) {
      let stringResult;
      const push3 = items1.push;
      const isVideoEnabled = closure_7.isVideoEnabled;
      const intl2 = intl6.intl;
      const string = intl2.string;
      const tmp26 = _modDef3184;
      if (isVideoEnabled) {
        stringResult = string(tmp26.q0eP6a);
      } else {
        stringResult = string(tmp26.aySLZX);
      }
      const obj3 = { label: stringResult, IconComponent: VideoIcon, action: closure_7.onPress };
      if (closure_7.isVideoEnabled) {
        VideoIcon = tmp28(15137).VideoSlashIcon;
      } else {
        VideoIcon = tmp28(11172).VideoIcon;
      }
      push3(obj3);
    }
    if (!closure_8) {
      const push4 = items1.push;
      const obj4 = {
        label: intl3.string(intl6.t.aeuOoh),
        IconComponent: ActivitiesIcon.ActivitiesIcon,
        action() {
            return callback(constants.VOICE_PANEL_OPEN_APP_LAUNCHER_TAB);
          }
      };
      intl3 = intl6.intl;
      push4(obj4);
    }
    const push5 = items1.push;
    const obj5 = {
      label: intl4.string(intl6.t["5KxXrK"]),
      IconComponent: ChatIcon.ChatIcon,
      action() {
        return callback(constants.VOICE_PANEL_OPEN_CHAT_TAB);
      }
    };
    intl4 = intl6.intl;
    push5(obj5);
    const items2 = [items, items1, ];
    const obj6 = {
      label: intl5.string(intl6.t.NiTd0e),
      IconComponent: SettingsIcon.SettingsIcon,
      action() {
        const obj = closure_0(id[22]);
        return obj.openVoicePanelSettingsActionSheet(guildId, closure_1_2);
      }
    };
    intl5 = intl6.intl;
    const items3 = [obj6];
    items2[2] = items3;
    return items2.filter((item) => item.length > 0);
  }, items1);
};
