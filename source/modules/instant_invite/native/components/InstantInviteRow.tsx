// Module ID: 11744
// Function ID: 91207
// Dependencies: [31, 27, 1348, 8482, 1838, 10065, 1849, 11743, 6979, 33, 4130, 689, 566, 4320, 8483, 11745, 4660, 1273, 9429, 3969, 1212, 1392, 1832, 4126, 5165, 11746, 2]

// Module 11744
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import setSendState from "setSendState";
import { InviteSendStates } from "InviteSendStates";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_10;
let closure_9;
const require = arg1;
({ setSendState: closure_9, useInstantInviteSendStates: closure_10 } = setSendState);
let obj = {};
obj = { width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center", overflow: "hidden", marginTop: 0, marginRight: 10, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_MUTED, borderStyle: "solid", borderWidth: 2 };
obj.acronym = obj;
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function InstantInviteRow(row) {
  let View;
  let _isNativeReflectConstruct;
  let end;
  let start;
  row = row.row;
  const code = row.code;
  const onPressAvatar = row.onPressAvatar;
  ({ onInviteSent: View, source: _isNativeReflectConstruct } = row);
  let id;
  function handlePress() {
    function handleSendState(arg0) {
      if (null != outer1_1) {
        outer2_9(outer1_1, outer1_5, arg0 ? outer2_11.SENT : outer2_11.ERROR);
        if (arg0) {
          if (null != outer1_3) {
            outer1_3();
          }
        }
      }
    }
    if (null != code) {
      outer1_9(code, id, outer1_11.SENDING);
      const type = row.type;
      if (row(onPressAvatar[14]).RowTypes.FRIEND !== type) {
        if (row(onPressAvatar[14]).RowTypes.DM !== type) {
          if (row(onPressAvatar[14]).RowTypes.GROUP_DM === type) {
            if (null != code) {
              let obj3 = code(onPressAvatar[15]);
              let obj = { inviteKey: code, type: row(onPressAvatar[15]).InvitePropertiesType.GROUP_DM, channel: outer1_4.getChannel(id), location: "Invite Action Sheet" };
              obj = { suggestionData: outer1_7.getSelectedInviteMetadata(row), source: _isNativeReflectConstruct };
              obj.inviteAnalyticsMetadata = obj;
              obj3.enqueue(obj, handleSendState);
            }
          } else if (row(onPressAvatar[14]).RowTypes.CHANNEL === type) {
            if (null != code) {
              obj = code(onPressAvatar[15]);
              const obj1 = { inviteKey: code, type: row(onPressAvatar[15]).InvitePropertiesType.CHANNEL, channel: outer1_4.getChannel(id), location: "Invite Action Sheet" };
              const obj2 = { suggestionData: outer1_7.getSelectedInviteMetadata(row), source: _isNativeReflectConstruct };
              obj1.inviteAnalyticsMetadata = obj2;
              obj.enqueue(obj1, handleSendState);
            }
          }
        }
      }
      if (null != code) {
        obj3 = { inviteKey: code, type: row(onPressAvatar[15]).InvitePropertiesType.USER, user: outer1_8.getUser(id), location: "Invite Action Sheet" };
        const obj4 = { suggestionData: outer1_7.getSelectedInviteMetadata(row), source: _isNativeReflectConstruct };
        obj3.inviteAnalyticsMetadata = obj4;
        code(onPressAvatar[15]).enqueue(obj3, handleSendState);
        const obj7 = code(onPressAvatar[15]);
      }
    }
  }
  ({ start, end } = row);
  id = row.item.id;
  let obj = row(onPressAvatar[12]);
  const items = [id];
  const stateFromStores = obj.useStateFromStores(items, () => id.isSubmitting());
  let obj1 = row(onPressAvatar[12]);
  const items1 = [id];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => id.getError());
  const tmp4 = callback((arg0) => {
    let tmp = null;
    if (null != code) {
      let tmp5;
      if (null != arg0[code]) {
        tmp5 = tmp4[id];
      }
      tmp = tmp5;
    }
    return tmp;
  });
  let obj2 = row(onPressAvatar[12]);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => outer1_4.getChannel(id));
  const tmp6 = code(onPressAvatar[13])(stateFromStores2);
  if (null == code) {
    return null;
  } else {
    let type = row.type;
    if (row(onPressAvatar[14]).RowTypes.DM !== type) {
      if (row(onPressAvatar[14]).RowTypes.FRIEND !== type) {
        if (row(onPressAvatar[14]).RowTypes.GROUP_DM === type) {
          let tmp22 = null;
          if (null != stateFromStores2) {
            obj = {};
            let obj11 = code(onPressAvatar[21]);
            obj = {};
            ({ id: obj14.id, icon: obj14.icon, application_id: obj14.applicationId } = stateFromStores2);
            obj.size = 32;
            obj.source = obj11.makeSource(code(onPressAvatar[21]).getChannelIconURL(obj));
            obj.size = row(onPressAvatar[17]).AvatarSizes.REFRESH_MEDIUM_32;
            tmp22 = jsx(row(onPressAvatar[17]).Avatar, {});
            const obj13 = code(onPressAvatar[21]);
          }
          let str4 = "";
          if (null != tmp6) {
            str4 = tmp6;
          }
          let str2 = str4;
          let tmp15 = tmp22;
        } else if (row(onPressAvatar[14]).RowTypes.CHANNEL === type) {
          let guild_id;
          if (null != stateFromStores2) {
            guild_id = stateFromStores2.guild_id;
          }
          let guild;
          if (null != guild_id) {
            guild = guild.getGuild(stateFromStores2.guild_id);
          }
          if (null == guild) {
            return null;
          } else {
            if (null != guild.icon) {
              obj1 = {};
              let obj7 = code(onPressAvatar[21]);
              let obj8 = code(onPressAvatar[21]);
              obj2 = {};
              ({ id: obj10.id, icon: obj10.icon } = guild);
              obj2.size = 32;
              obj1.source = obj7.makeSource(obj8.getGuildIconURL(obj2));
              obj1.size = row(onPressAvatar[17]).AvatarSizes.REFRESH_MEDIUM_32;
              tmp15 = jsx(row(onPressAvatar[17]).Avatar, {});
            } else {
              let obj3 = row(onPressAvatar[22]);
              obj3 = { style: tmp.acronym };
              const acronym = obj3.getAcronym(guild.name);
              let obj4 = { variant: "text-sm/bold", children: acronym };
              obj3.children = jsx(row(onPressAvatar[23]).Text, { variant: "text-sm/bold", children: acronym });
              tmp15 = <View style={tmp.acronym} />;
            }
            str2 = "";
            if (null != tmp6) {
              const _HermesInternal = HermesInternal;
              str2 = "#" + tmp6;
            }
          }
        } else {
          return null;
        }
      }
      const obj5 = { start, end, icon: tmp15, label: str2 };
      const obj6 = { sendState: tmp4, onPressSend: handlePress };
      obj5.trailing = jsx(code(onPressAvatar[25]), { sendState: tmp4, onPressSend: handlePress });
      obj5.onPress = handlePress;
      let tmp48 = null != stateFromStores1 || stateFromStores;
      if (!tmp48) {
        tmp48 = tmp4 === InviteSendStates.SENT;
      }
      obj5.disabled = tmp48;
      obj5.accessibilityActions = tmp21;
      obj5.onAccessibilityAction = fn;
      return jsx(row(onPressAvatar[24]).TableRow, { start, end, icon: tmp15, label: str2 });
    }
    user = user.getUser(id);
    obj7 = {
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
    obj8 = {};
    let avatarSource;
    if (null != user) {
      avatarSource = user.getAvatarSource(undefined);
    }
    let tmp32 = null;
    if (null != avatarSource) {
      tmp32 = avatarSource;
    }
    obj8.source = tmp32;
    obj8.size = row(onPressAvatar[17]).AvatarSizes.REFRESH_MEDIUM_32;
    obj7.children = jsx(row(onPressAvatar[17]).Avatar, {});
    const obj9 = {};
    const tmp28Result = jsx(row(onPressAvatar[16]).PressableOpacity, {
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
    const tmp38 = code(onPressAvatar[18]);
    obj9.nick = code(onPressAvatar[19]).getGlobalName(user);
    obj9.user = user;
    let tmp40;
    const obj19 = code(onPressAvatar[19]);
    if (null != onPressAvatar) {
      const obj10 = { name: "viewProfile" };
      const intl = row(onPressAvatar[20]).intl;
      obj11 = {};
      let tag;
      if (null != user) {
        tag = user.tag;
      }
      obj11.username = tag;
      obj10.label = intl.formatToPlainString(row(onPressAvatar[20]).t.uCenkh, obj11);
      const items3 = [obj10];
      tmp40 = items3;
    }
    fn = function f(nativeEvent) {
      let tmp = "viewProfile" === nativeEvent.nativeEvent.actionName;
      if (tmp) {
        tmp = null !== onPressAvatar;
      }
      if (tmp) {
        if (null != onPressAvatar) {
          onPressAvatar(id);
        }
      }
    };
    tmp15 = tmp28Result;
    str2 = <tmp38 />;
    tmp21 = tmp40;
    const tmp39 = <tmp38 />;
  }
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/instant_invite/native/components/InstantInviteRow.tsx");

export default memoResult;
