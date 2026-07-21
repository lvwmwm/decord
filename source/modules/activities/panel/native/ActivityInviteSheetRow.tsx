// Module ID: 15586
// Function ID: 118941
// Dependencies: []

// Module 15586
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const InviteSendStates = arg1(dependencyMap[5]).InviteSendStates;
const jsx = arg1(dependencyMap[6]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let obj = {};
obj = { borderRadius: importDefault(dependencyMap[8]).radii.lg, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW, borderColor: importDefault(dependencyMap[8]).colors.BORDER_MUTED };
obj.acronym = obj;
let closure_9 = arg1(dependencyMap[7]).createStyles(obj);
const obj2 = arg1(dependencyMap[7]);
const memoResult = importAllResult.memo(function ActivityInviteSheetRow(row) {
  let end;
  let error;
  let isSubmitting;
  let onPressAvatar;
  let start;
  ({ onInviteSent: closure_0, onPressAvatar } = row);
  const importDefault = onPressAvatar;
  row = row.row;
  const dependencyMap = row;
  const sendState = row.sendState;
  function handlePress() {
    callback(row);
  }
  ({ end, error, isSubmitting, start } = row);
  const id = row.item.id;
  const View = id;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(id));
  const tmp3 = importDefault(dependencyMap[10])(stateFromStores);
  const type = row.type;
  if (arg1(dependencyMap[11]).RowTypes.DM !== type) {
    if (arg1(dependencyMap[11]).RowTypes.FRIEND !== type) {
      if (arg1(dependencyMap[11]).RowTypes.GROUP_DM === type) {
        let tmp22 = null;
        if (null != stateFromStores) {
          obj = {};
          let obj9 = importDefault(dependencyMap[17]);
          let obj10 = importDefault(dependencyMap[17]);
          obj = {};
          ({ id: obj12.id, icon: obj12.icon, application_id: obj12.applicationId } = stateFromStores);
          obj.size = 32;
          obj.source = obj9.makeSource(obj10.getChannelIconURL(obj));
          obj.size = arg1(dependencyMap[13]).AvatarSizes.REFRESH_MEDIUM_32;
          tmp22 = jsx(arg1(dependencyMap[13]).Avatar, obj);
        }
        let str4 = "";
        if (null != tmp3) {
          str4 = tmp3;
        }
        let str2 = str4;
        let tmp14 = tmp22;
        let P;
      } else if (arg1(dependencyMap[11]).RowTypes.CHANNEL === type) {
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
            let obj5 = importDefault(dependencyMap[17]);
            let obj6 = importDefault(dependencyMap[17]);
            const obj2 = {};
            ({ id: obj8.id, icon: obj8.icon } = guild);
            obj2.size = 32;
            obj1.source = obj5.makeSource(obj6.getGuildIconURL(obj2));
            obj1.size = arg1(dependencyMap[13]).AvatarSizes.REFRESH_MEDIUM_32;
            tmp14 = jsx(arg1(dependencyMap[13]).Avatar, obj1);
          } else {
            obj1 = arg1(dependencyMap[18]);
            const obj3 = { style: tmp.acronym };
            const acronym = obj1.getAcronym(guild.name);
            const obj4 = { variant: "text-sm/bold", children: acronym };
            obj3.children = jsx(arg1(dependencyMap[19]).Text, obj4);
            tmp14 = <View {...obj3} />;
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
    obj5.trailing = jsx(importDefault(dependencyMap[21]), obj6);
    obj5.onPress = handlePress;
    let tmp42 = null != error || isSubmitting;
    if (!tmp42) {
      tmp42 = sendState === InviteSendStates.SENT;
    }
    obj5.disabled = tmp42;
    obj5.accessibilityActions = tmp33;
    obj5.onAccessibilityAction = P;
    return jsx(arg1(dependencyMap[20]).TableRow, obj5);
  }
  const user = user.getUser(id);
  const obj7 = {
    9223372036854775807: null,
    9223372036854775807: null,
    onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      if (null != onPressAvatar) {
        onPressAvatar(id);
      }
    },
    style: {}
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
  obj8.size = arg1(dependencyMap[13]).AvatarSizes.REFRESH_MEDIUM_32;
  obj7.children = jsx(arg1(dependencyMap[13]).Avatar, obj8);
  const tmp = callback();
  obj9 = {};
  const tmp27Result = jsx(arg1(dependencyMap[12]).PressableOpacity, obj7);
  const tmp31 = importDefault(dependencyMap[14]);
  obj9.nick = importDefault(dependencyMap[15]).getGlobalName(user);
  obj9.user = user;
  let tmp33;
  const obj17 = importDefault(dependencyMap[15]);
  if (null != onPressAvatar) {
    obj10 = { name: "viewProfile" };
    const intl = arg1(dependencyMap[16]).intl;
    const obj11 = {};
    let tag;
    if (null != user) {
      tag = user.tag;
    }
    obj11.username = tag;
    obj10.label = intl.formatToPlainString(arg1(dependencyMap[16]).t.uCenkh, obj11);
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
  str2 = <tmp31 {...obj9} />;
});
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheetRow.tsx");

export default memoResult;
