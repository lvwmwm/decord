// Module ID: 15711
// Function ID: 121157
// Dependencies: [31, 27, 1348, 1838, 1849, 6979, 33, 4130, 689, 566, 4320, 8483, 4660, 1273, 9429, 3969, 1212, 1392, 1832, 4126, 5165, 11746, 2]

// Module 15711
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import { InviteSendStates } from "InviteSendStates";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let obj = {};
obj = { width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center", overflow: "hidden", marginTop: 0, marginRight: 10, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED, borderStyle: "solid", borderWidth: 2 };
obj.acronym = obj;
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function ActivityInviteSheetRow(row) {
  let end;
  let error;
  let isSubmitting;
  let onPressAvatar;
  let require;
  let start;
  ({ onInviteSent: require, onPressAvatar } = row);
  row = row.row;
  const sendState = row.sendState;
  function handlePress() {
    callback(row);
  }
  ({ end, error, isSubmitting, start } = row);
  const id = row.item.id;
  let obj = require(row[9]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getChannel(id));
  const tmp3 = onPressAvatar(row[10])(stateFromStores);
  const type = row.type;
  if (require(row[11]).RowTypes.DM !== type) {
    if (require(row[11]).RowTypes.FRIEND !== type) {
      if (require(row[11]).RowTypes.GROUP_DM === type) {
        let tmp22 = null;
        if (null != stateFromStores) {
          obj = {};
          let obj9 = onPressAvatar(row[17]);
          let obj10 = onPressAvatar(row[17]);
          obj = {};
          ({ id: obj12.id, icon: obj12.icon, application_id: obj12.applicationId } = stateFromStores);
          obj.size = 32;
          obj.source = obj9.makeSource(obj10.getChannelIconURL(obj));
          obj.size = require(row[13]).AvatarSizes.REFRESH_MEDIUM_32;
          tmp22 = jsx(require(row[13]).Avatar, {});
        }
        let str4 = "";
        if (null != tmp3) {
          str4 = tmp3;
        }
        let str2 = str4;
        let tmp14 = tmp22;
        let P;
      } else if (require(row[11]).RowTypes.CHANNEL === type) {
        let guild_id;
        if (null != stateFromStores) {
          guild_id = stateFromStores.guild_id;
        }
        let guild;
        if (null != guild_id) {
          guild = guild.getGuild(stateFromStores.guild_id);
        }
        if (null == guild) {
          return null;
        } else {
          if (null != guild.icon) {
            let obj1 = {};
            let obj5 = onPressAvatar(row[17]);
            let obj6 = onPressAvatar(row[17]);
            const obj2 = {};
            ({ id: obj8.id, icon: obj8.icon } = guild);
            obj2.size = 32;
            obj1.source = obj5.makeSource(obj6.getGuildIconURL(obj2));
            obj1.size = require(row[13]).AvatarSizes.REFRESH_MEDIUM_32;
            tmp14 = jsx(require(row[13]).Avatar, {});
          } else {
            obj1 = require(row[18]);
            const obj3 = { style: tmp.acronym };
            const acronym = obj1.getAcronym(guild.name);
            const obj4 = { variant: "text-sm/bold", children: acronym };
            obj3.children = jsx(require(row[19]).Text, { variant: "text-sm/bold", children: acronym });
            tmp14 = <id style={tmp.acronym} />;
          }
          str2 = "";
          if (null != tmp3) {
            const _HermesInternal = HermesInternal;
            str2 = "#" + tmp3;
          }
          P = undefined;
        }
      } else {
        return null;
      }
    }
    obj5 = { start, end, icon: tmp14, label: str2 };
    obj6 = { sendState, onPressSend: handlePress };
    obj5.trailing = jsx(onPressAvatar(row[21]), { sendState, onPressSend: handlePress });
    obj5.onPress = handlePress;
    let tmp42 = null != error || isSubmitting;
    if (!tmp42) {
      tmp42 = sendState === InviteSendStates.SENT;
    }
    obj5.disabled = tmp42;
    obj5.accessibilityActions = tmp33;
    obj5.onAccessibilityAction = P;
    return jsx(require(row[20]).TableRow, { start, end, icon: tmp14, label: str2 });
  }
  user = user.getUser(id);
  const obj7 = {
    importantForAccessibility: "no-hide-descendants",
    accessibilityElementsHidden: true,
    onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      if (null != onPressAvatar) {
        onPressAvatar(id);
      }
    },
    style: { padding: 8, margin: -8 }
  };
  const obj8 = {};
  let avatarSource;
  if (null != user) {
    avatarSource = user.getAvatarSource(undefined);
  }
  let tmp29 = null;
  if (null != avatarSource) {
    tmp29 = avatarSource;
  }
  obj8.source = tmp29;
  obj8.size = require(row[13]).AvatarSizes.REFRESH_MEDIUM_32;
  obj7.children = jsx(require(row[13]).Avatar, {});
  tmp = callback();
  obj9 = {};
  const tmp27Result = jsx(require(row[12]).PressableOpacity, {
    importantForAccessibility: "no-hide-descendants",
    accessibilityElementsHidden: true,
    onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      if (null != onPressAvatar) {
        onPressAvatar(id);
      }
    },
    style: { padding: 8, margin: -8 }
  });
  const tmp31 = onPressAvatar(row[14]);
  obj9.nick = onPressAvatar(row[15]).getGlobalName(user);
  obj9.user = user;
  tmp33 = undefined;
  const obj17 = onPressAvatar(row[15]);
  if (null != onPressAvatar) {
    obj10 = { name: "viewProfile" };
    const intl = require(row[16]).intl;
    const obj11 = {};
    let tag;
    if (null != user) {
      tag = user.tag;
    }
    obj11.username = tag;
    obj10.label = intl.formatToPlainString(require(row[16]).t.uCenkh, obj11);
    const items1 = [obj10];
    tmp33 = items1;
  }
  class P {
    constructor(arg0) {
      tmp = "viewProfile" === row.nativeEvent.actionName;
      if (tmp) {
        tmp2 = onPressAvatar;
        tmp3 = null;
        tmp = null !== onPressAvatar;
      }
      if (tmp) {
        tmp4 = onPressAvatar;
        tmp5 = null;
        if (null != onPressAvatar) {
          tmp6 = onPressAvatar;
          tmp7 = id;
          tmp8 = onPressAvatar(id);
        }
      }
      return;
    }
  }
  tmp14 = tmp27Result;
  str2 = <tmp31 />;
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheetRow.tsx");

export default memoResult;
