// Module ID: 11734
// Function ID: 91158
// Dependencies: []

// Module 11734
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
const importAllResult = importAll(dependencyMap[0]);
({ setSendState: closure_9, useInstantInviteSendStates: closure_10 } = arg1(dependencyMap[7]));
const InviteSendStates = arg1(dependencyMap[8]).InviteSendStates;
const jsx = arg1(dependencyMap[9]).jsx;
const tmp2 = arg1(dependencyMap[7]);
let obj = {};
obj = { "Null": "<string:487744>", "Null": "<string:3393257472>", "Null": "<string:1358955668>", "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006498507321526472, "Null": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001726197638350746, "Null": 55155053387010400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": -2228744.4946594257, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001452058518718239, "Null": 1758059902408445000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008452669374108578, "Null": -0.00000000000000000000000000000000000009991701983555151, "Null": 20449831403740110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, borderRadius: importDefault(dependencyMap[11]).radii.lg, backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOW, borderColor: importDefault(dependencyMap[11]).colors.BORDER_MUTED };
obj.acronym = obj;
let closure_13 = arg1(dependencyMap[10]).createStyles(obj);
const obj2 = arg1(dependencyMap[10]);
const memoResult = importAllResult.memo(function InstantInviteRow(row) {
  let end;
  let start;
  row = row.row;
  const arg1 = row;
  const code = row.code;
  const importDefault = code;
  const onPressAvatar = row.onPressAvatar;
  const dependencyMap = onPressAvatar;
  ({ onInviteSent: closure_3, source: closure_4 } = row);
  let closure_5;
  function handlePress() {
    function handleSendState(arg0) {
      if (null != closure_1) {
        callback2(closure_1, closure_5, arg0 ? closure_11.SENT : closure_11.ERROR);
        if (arg0) {
          if (null != callback) {
            callback();
          }
        }
      }
    }
    if (null != code) {
      callback(code, id, constants.SENDING);
      const type = row.type;
      if (row(onPressAvatar[14]).RowTypes.FRIEND !== type) {
        if (row(onPressAvatar[14]).RowTypes.DM !== type) {
          if (row(onPressAvatar[14]).RowTypes.GROUP_DM === type) {
            if (null != code) {
              let obj3 = code(onPressAvatar[15]);
              let obj = { inviteKey: code, type: row(onPressAvatar[15]).InvitePropertiesType.GROUP_DM, channel: store.getChannel(id), location: "Invite Action Sheet" };
              obj = { suggestionData: store2.getSelectedInviteMetadata(row), source: store };
              obj.inviteAnalyticsMetadata = obj;
              obj3.enqueue(obj, handleSendState);
            }
          } else if (row(onPressAvatar[14]).RowTypes.CHANNEL === type) {
            if (null != code) {
              obj = code(onPressAvatar[15]);
              const obj1 = { inviteKey: code, type: row(onPressAvatar[15]).InvitePropertiesType.CHANNEL, channel: store.getChannel(id), location: "Invite Action Sheet" };
              const obj2 = { suggestionData: store2.getSelectedInviteMetadata(row), source: store };
              obj1.inviteAnalyticsMetadata = obj2;
              obj.enqueue(obj1, handleSendState);
            }
          }
        }
      }
      if (null != code) {
        obj3 = { inviteKey: code, type: row(onPressAvatar[15]).InvitePropertiesType.USER, user: user.getUser(id), location: "Invite Action Sheet" };
        const obj4 = { suggestionData: store2.getSelectedInviteMetadata(row), source: store };
        obj3.inviteAnalyticsMetadata = obj4;
        code(onPressAvatar[15]).enqueue(obj3, handleSendState);
        const obj7 = code(onPressAvatar[15]);
      }
    }
  }
  ({ start, end } = row);
  const id = row.item.id;
  closure_5 = id;
  let obj = arg1(dependencyMap[12]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => id.isSubmitting());
  let obj1 = arg1(dependencyMap[12]);
  const items1 = [closure_5];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => id.getError());
  const tmp4 = callback((arg0) => {
    let tmp = null;
    if (null != code) {
      let tmp5;
      if (null != arg0[closure_1]) {
        tmp5 = tmp4[closure_5];
      }
      tmp = tmp5;
    }
    return tmp;
  });
  let obj2 = arg1(dependencyMap[12]);
  const items2 = [closure_4];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => store.getChannel(id));
  const tmp6 = importDefault(dependencyMap[13])(stateFromStores2);
  if (null == code) {
    return null;
  } else {
    const type = row.type;
    if (arg1(dependencyMap[14]).RowTypes.DM !== type) {
      if (arg1(dependencyMap[14]).RowTypes.FRIEND !== type) {
        if (arg1(dependencyMap[14]).RowTypes.GROUP_DM === type) {
          let tmp22 = null;
          if (null != stateFromStores2) {
            obj = {};
            let obj11 = importDefault(dependencyMap[21]);
            obj = {};
            ({ id: obj14.id, icon: obj14.icon, application_id: obj14.applicationId } = stateFromStores2);
            obj.size = 32;
            obj.source = obj11.makeSource(importDefault(dependencyMap[21]).getChannelIconURL(obj));
            obj.size = arg1(dependencyMap[17]).AvatarSizes.REFRESH_MEDIUM_32;
            tmp22 = jsx(arg1(dependencyMap[17]).Avatar, obj);
            const obj13 = importDefault(dependencyMap[21]);
          }
          let str4 = "";
          if (null != tmp6) {
            str4 = tmp6;
          }
          let str2 = str4;
          let tmp15 = tmp22;
        } else if (arg1(dependencyMap[14]).RowTypes.CHANNEL === type) {
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
              let obj7 = importDefault(dependencyMap[21]);
              let obj8 = importDefault(dependencyMap[21]);
              obj2 = {};
              ({ id: obj10.id, icon: obj10.icon } = guild);
              obj2.size = 32;
              obj1.source = obj7.makeSource(obj8.getGuildIconURL(obj2));
              obj1.size = arg1(dependencyMap[17]).AvatarSizes.REFRESH_MEDIUM_32;
              tmp15 = jsx(arg1(dependencyMap[17]).Avatar, obj1);
            } else {
              let obj3 = arg1(dependencyMap[22]);
              obj3 = { style: tmp.acronym };
              const acronym = obj3.getAcronym(guild.name);
              const obj4 = { variant: "text-sm/bold", children: acronym };
              obj3.children = jsx(arg1(dependencyMap[23]).Text, obj4);
              tmp15 = <View {...obj3} />;
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
      obj5.trailing = jsx(importDefault(dependencyMap[25]), obj6);
      obj5.onPress = handlePress;
      let tmp48 = null != stateFromStores1 || stateFromStores;
      if (!tmp48) {
        tmp48 = tmp4 === InviteSendStates.SENT;
      }
      obj5.disabled = tmp48;
      obj5.accessibilityActions = tmp21;
      obj5.onAccessibilityAction = fn;
      return jsx(arg1(dependencyMap[24]).TableRow, obj5);
    }
    const user = user.getUser(id);
    obj7 = {
      onPress(stopPropagation) {
          stopPropagation.stopPropagation();
          if (null != onPressAvatar) {
            onPressAvatar(id);
          }
        },
      style: {}
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
    obj8.size = arg1(dependencyMap[17]).AvatarSizes.REFRESH_MEDIUM_32;
    obj7.children = jsx(arg1(dependencyMap[17]).Avatar, obj8);
    const obj9 = {};
    const tmp28Result = jsx(arg1(dependencyMap[16]).PressableOpacity, obj7);
    const tmp38 = importDefault(dependencyMap[18]);
    obj9.nick = importDefault(dependencyMap[19]).getGlobalName(user);
    obj9.user = user;
    let tmp40;
    const obj19 = importDefault(dependencyMap[19]);
    if (null != onPressAvatar) {
      const obj10 = { name: "viewProfile" };
      const intl = arg1(dependencyMap[20]).intl;
      obj11 = {};
      let tag;
      if (null != user) {
        tag = user.tag;
      }
      obj11.username = tag;
      obj10.label = intl.formatToPlainString(arg1(dependencyMap[20]).t.uCenkh, obj11);
      const items3 = [obj10];
      tmp40 = items3;
    }
    const fn = function f(nativeEvent) {
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
    str2 = <tmp38 {...obj9} />;
    const tmp21 = tmp40;
    const tmp39 = <tmp38 {...obj9} />;
  }
});
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/instant_invite/native/components/InstantInviteRow.tsx");

export default memoResult;
