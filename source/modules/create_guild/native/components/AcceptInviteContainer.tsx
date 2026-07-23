// Module ID: 11750
// Function ID: 91244
// Name: AcceptInviteContainer
// Dependencies: [5, 31, 1917, 1838, 4115, 3746, 33, 4130, 689, 1456, 566, 5087, 1360, 5053, 1934, 6978, 8365, 5691, 7460, 9348, 11751, 5121, 3842, 2]
// Exports: default

// Module 11750 (AcceptInviteContainer)
import GuildMemberFlags from "GuildMemberFlags";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import { GuildMemberFlags } from "GuildMemberFlags";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = { flex: { flex: 1 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.paddingContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/create_guild/native/components/AcceptInviteContainer.tsx");

export default function AcceptInviteContainer(code) {
  code = code.code;
  const onPressClose = code.onPressClose;
  const inviteInstanceId = code.inviteInstanceId;
  let obj = { code: 0, onPressClose: 0, inviteInstanceId: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(code, obj);
  const isRegistration = merged.isRegistration;
  let tmp4 = _createForOfIteratorHelperLoose();
  const navigation = code(inviteInstanceId[9]).useNavigation();
  let obj2 = code(inviteInstanceId[9]);
  const items = [closure_7, stateFromStoresObject, callback];
  stateFromStoresObject = code(inviteInstanceId[10]).useStateFromStoresObject(items, () => {
    const invite = outer1_7.getInvite(_Set);
    let guild;
    const inviteError = outer1_7.getInviteError(_Set);
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
          _Set = Set;
          let roles1;
          if (null != selfMember) {
            roles1 = selfMember.roles;
          }
          if (null == roles1) {
            roles1 = [];
          }
          const prototype = _Set.prototype;
          _Set = new _Set(roles1);
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
  const items1 = [stateFromStoresObject, navigation, onPressClose];
  const layoutEffect = navigation.useLayoutEffect(() => {
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
  callback = navigation.useCallback(isRegistration(items1), items2);
  // CreateGeneratorClosureLongIndex (0x67)
  const items3 = [stateFromStoresObject, callback, onPressClose, inviteInstanceId, code];
  const callback1 = navigation.useCallback(isRegistration(tmp), items3);
  obj = { code, onPressClose, onPressJoin: callback1 };
  const obj3 = code(inviteInstanceId[10]);
  const merged1 = Object.assign(merged);
  const merged2 = Object.assign(stateFromStoresObject);
  const tmp10 = onPressClose(inviteInstanceId[20]);
  obj = { style: items4, bottom: true };
  items4 = [, ];
  ({ flex: arr5[0], paddingContainer: arr5[1] } = tmp4);
  obj.children = jsx(code(inviteInstanceId[22]).ThemeContextProvider, { theme: "darker", children: jsx(onPressClose(inviteInstanceId[20]), { style: items4, bottom: true }) });
  return jsx(code(inviteInstanceId[21]).SafeAreaPaddingView, { style: items4, bottom: true });
};
