// Module ID: 16853
// Function ID: 16854
// Name: ActivityInviteSheetRow
// Dependencies: [19, 17, 2045, 2067, 1372, 7155, 21, 4836, 576, 504, 4989, 9277, 5435, 1177, 9094, 4678, 1115, 1397, 2011, 4832, 5917, 9351, 2]

// Module 16853 (ActivityInviteSheetRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 7155 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserStore from "UserStore" /* 1372 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

let size;
const View = react_native.View;
const InviteSendStates = Constants.InviteSendStates;
const jsx = Fragment.jsx;
let obj = { acronym: size };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center", overflow: "hidden", marginTop: 0, marginRight: 10, borderColor: nativeDefault.colors.BORDER_MUTED, borderStyle: "solid", borderWidth: 2 };
let closure_9 = createStyles.createStyles(obj);
const memoResult = react.memo(function ActivityInviteSheetRow(row) {
  let end;
  let error;
  let fn;
  let isSubmitting;
  let obj16;
  let onPressAvatar;
  let start;
  let tmp28;
  let tmp32;
  ({ onInviteSent: require, onPressAvatar } = row);
  row = row.row;
  const sendState = row.sendState;
  ({ end, error, isSubmitting, start } = row);
  const id = row.item.id;
  const tmp2 = require;
  let tmp = closure_9();
  const items = [ChannelStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(id));
  let str = onPressAvatar(row[10])(stateFromStores);
  const type = row.type;
  if (require("InstantInviteUtils").RowTypes.DM !== type) {
    let str2;
    let tmp14;
    if (tmp2(row[11]).RowTypes.FRIEND !== type) {
      if (tmp2(row[11]).RowTypes.GROUP_DM === type) {
        let tmp20 = null;
        if (null != stateFromStores) {
          const Avatar2 = tmp2(tmp3[13]).Avatar;
          const makeSource2 = tmp5(tmp3[17]).makeSource;
          onPressAvatar(row[17]);
          const obj3 = { id: null, icon: null, applicationId: null, size: 32 };
          ({ id: obj10.id, icon: obj10.icon, application_id: obj10.applicationId } = stateFromStores);
          tmp20 = <Avatar2 source={makeSource2(onPressAvatar(row[17]).getChannelIconURL(obj3))} size={tmp2(tmp3[13]).AvatarSizes.REFRESH_MEDIUM_32} />;
          const tmp5Result6 = onPressAvatar(row[17]);
        }
        if (str == null) {
          str = "";
        }
        str2 = str;
        tmp14 = tmp20;
      } else if (tmp2(row[11]).RowTypes.CHANNEL === type) {
        let guild_id;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        let guild;
        if (null != guild_id) {
          guild = GuildStore.getGuild(stateFromStores.guild_id);
        }
        if (null == guild) {
          return null;
        } else {
          if (null != guild.icon) {
            const Avatar = tmp2(tmp3[13]).Avatar;
            const makeSource = tmp5(tmp3[17]).makeSource;
            onPressAvatar(row[17]);
            const obj5 = { id: null, icon: null, size: 32 };
            ({ id: obj7.id, icon: obj7.icon } = guild);
            tmp14 = <Avatar source={makeSource(onPressAvatar(row[17]).getGuildIconURL(obj5))} size={tmp2(tmp3[13]).AvatarSizes.REFRESH_MEDIUM_32} />;
            const tmp5Result8 = onPressAvatar(row[17]);
          } else {
            const tmp2Result = tmp2(row[18]);
            const acronym = tmp2Result.getAcronym(guild.name);
            tmp14 = <id style={tmp.acronym}>{null}</id>;
          }
          str2 = "";
          if (null != str) {
            const _HermesInternal = HermesInternal;
            str2 = "#" + str;
          }
        }
      } else {
        return null;
      }
    }
    function handlePress() {
      require(row);
    }
    const obj9 = { start, end, icon: tmp14, label: str2, trailing: null, onPress: handlePress, disabled: tmp32, accessibilityActions: tmp28, onAccessibilityAction: fn };
    const TableRow = tmp2(tmp3[20]).TableRow;
    tmp32 = null != error || isSubmitting;
    const tmp30 = jsx;
    if (!tmp32) {
      tmp32 = sendState === InviteSendStates.SENT;
    }
    return tmp30(TableRow, obj9);
  }
  const user = UserStore.getUser(id);
  const PressableOpacity = tmp2(tmp3[12]).PressableOpacity;
  let avatarSource;
  const Avatar3 = tmp2(tmp3[13]).Avatar;
  if (user != null) {
    avatarSource = user.getAvatarSource(undefined);
  }
  if (avatarSource == null) {
    avatarSource = null;
  }
  ({ source: avatarSource, size: tmp2(row[13]).AvatarSizes.REFRESH_MEDIUM_32 });
  const tmp23Result = <PressableOpacity importantForAccessibility="no-hide-descendants" accessibilityElementsHidden onPress={function onPress(stopPropagation) {
    stopPropagation.stopPropagation();
    if (onPressAvatar != null) {
      tmp2(id);
    }
  }} style={{ padding: 8, margin: -8 }}>{null}</PressableOpacity>;
  onPressAvatar(row[14]);
  tmp28 = undefined;
  const tmp23Result2 = <tmp5Result9 nick={onPressAvatar(row[15]).getGlobalName(user)} user={user} />;
  if (null != onPressAvatar) {
    const intl = tmp2(tmp3[16]).intl;
    const formatToPlainString = intl.formatToPlainString;
    let tag;
    const uCenkh = tmp2(tmp3[16]).t.uCenkh;
    if (user != null) {
      tag = user.tag;
    }
    const obj15 = { name: "viewProfile", label: formatToPlainString(uCenkh, obj16) };
    const items1 = [obj15];
    tmp28 = items1;
    obj16 = { username: tag };
  }
  fn = function w(nativeEvent) {
    const tmp = "viewProfile" === nativeEvent.nativeEvent.actionName && null !== onPressAvatar;
    if (tmp) {
      if (onPressAvatar != null) {
        tmp4(id);
      }
    }
  };
  str2 = tmp23Result2;
  tmp14 = tmp23Result;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheetRow.tsx");

export default memoResult;
