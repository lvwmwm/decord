// Module ID: 11740
// Function ID: 91195
// Name: AcceptInviteContainer
// Dependencies: []
// Exports: default

// Module 11740 (AcceptInviteContainer)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const GuildMemberFlags = arg1(dependencyMap[5]).GuildMemberFlags;
const jsx = arg1(dependencyMap[6]).jsx;
let obj = arg1(dependencyMap[7]);
obj = { flex: { flex: 1 } };
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
obj.paddingContainer = obj;
let closure_10 = obj.createStyles(obj);
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/create_guild/native/components/AcceptInviteContainer.tsx");

export default function AcceptInviteContainer(code) {
  code = code.code;
  const arg1 = code;
  const onPressClose = code.onPressClose;
  const importDefault = onPressClose;
  const inviteInstanceId = code.inviteInstanceId;
  const dependencyMap = inviteInstanceId;
  let obj = { "Bool(false)": "spring", "Bool(false)": 0.4, "Bool(false)": 1 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(code, obj);
  const isRegistration = merged.isRegistration;
  let callback = isRegistration;
  const tmp4 = callback2();
  const navigation = arg1(dependencyMap[9]).useNavigation();
  const React = navigation;
  const obj2 = arg1(dependencyMap[9]);
  const items = [closure_7, closure_5, closure_6];
  const stateFromStoresObject = arg1(dependencyMap[10]).useStateFromStoresObject(items, () => {
    const invite = store.getInvite(code);
    let guild;
    const inviteError = store.getInviteError(code);
    if (null != invite) {
      guild = invite.guild;
    }
    let tmp4 = null != guild;
    if (tmp4) {
      tmp4 = null != callback.getGuild(invite.guild.id);
    }
    let guild1;
    if (null != invite) {
      guild1 = invite.guild;
    }
    let selfMember = null;
    if (null != guild1) {
      selfMember = stateFromStoresObject.getSelfMember(invite.guild.id);
    }
    let flag = false;
    if (tmp4) {
      let roles;
      if (null != invite) {
        roles = invite.roles;
      }
      flag = false;
      if (null != roles) {
        flag = false;
        if (invite.roles.length > 0) {
          let _Set = Set;
          let roles1;
          if (null != selfMember) {
            roles1 = selfMember.roles;
          }
          if (null == roles1) {
            roles1 = [];
          }
          const prototype = _Set.prototype;
          _Set = new _Set(roles1);
          const code = _Set;
          roles = invite.roles;
          flag = roles.some((id) => !_Set.has(id.id));
        }
      }
    }
    const obj = { invite, inviteError };
    if (tmp4) {
      tmp4 = !flag;
    }
    obj.isGuildMember = tmp4;
    obj.guildMember = selfMember;
    return obj;
  });
  closure_5 = stateFromStoresObject;
  const items1 = [stateFromStoresObject, navigation, onPressClose];
  const layoutEffect = React.useLayoutEffect(() => {
    const obj = {};
    if (null != stateFromStoresObject.invite) {
      let fn = () => null;
    } else {
      fn = code(inviteInstanceId[11]).getHeaderBackButton(onPressClose);
      const obj2 = code(inviteInstanceId[11]);
    }
    obj.headerLeft = fn;
    navigation.setOptions(obj);
  }, items1);
  // CreateGeneratorClosureLongIndex (0x67)
  const items2 = [isRegistration, stateFromStoresObject];
  callback = React.useCallback(callback(items1), items2);
  closure_6 = callback;
  // CreateGeneratorClosureLongIndex (0x67)
  const items3 = [stateFromStoresObject, callback, onPressClose, inviteInstanceId, code];
  const callback1 = React.useCallback(callback(tmp), items3);
  obj = { code, onPressClose, onPressJoin: callback1 };
  const obj3 = arg1(dependencyMap[10]);
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(stateFromStoresObject);
  const tmp10 = importDefault(dependencyMap[20]);
  obj = { style: items4, bottom: true };
  const items4 = [, ];
  ({ flex: arr5[0], paddingContainer: arr5[1] } = tmp4);
  obj.children = jsx(arg1(dependencyMap[22]).ThemeContextProvider, { theme: "darker", children: jsx(importDefault(dependencyMap[20]), obj) });
  return jsx(arg1(dependencyMap[21]).SafeAreaPaddingView, obj);
};
