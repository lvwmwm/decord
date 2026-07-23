// Module ID: 11496
// Function ID: 89468
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1917, 1849, 3747, 686, 5078, 2]

// Module 11496 (_isNativeReflectConstruct)
import closure_3 from "_isNativeReflectConstruct";
import isCommunicationDisabled from "isCommunicationDisabled";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import tmp3 from "AutomaticLifecycleManager";

let closure_8;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function clearGuildMemberTimeout(outer1_2, outer1_1) {
  member = member.getMember(outer1_2, outer1_1);
  user = user.getUser(outer1_1);
  if (null != member) {
    if (null != user) {
      if (!obj6.isMemberCommunicationDisabled(member)) {
        let obj = {};
        const merged = Object.assign(member);
        obj["guildId"] = outer1_2;
        let username = member.nick;
        if (null == username) {
          username = user.username;
        }
        obj["nick"] = username;
        const avatar = member.avatar;
        let tmp5;
        if (null != avatar) {
          tmp5 = avatar;
        }
        obj["avatar"] = tmp5;
        let tmp6;
        if (null != member.avatarDecoration) {
          obj = {};
          const merged1 = Object.assign(member.avatarDecoration);
          tmp6 = obj;
        }
        obj["avatarDecoration"] = tmp6;
        const premiumSince = member.premiumSince;
        let tmp9;
        if (null != premiumSince) {
          tmp9 = premiumSince;
        }
        obj["premiumSince"] = tmp9;
        const isPending = member.isPending;
        obj["isPending"] = null != isPending && isPending;
        obj = {};
        const merged2 = Object.assign(user);
        const email = user.email;
        let tmp14;
        if (null != email) {
          tmp14 = email;
        }
        obj["email"] = tmp14;
        const phone = user.phone;
        let tmp15;
        if (null != phone) {
          tmp15 = phone;
        }
        obj["phone"] = tmp15;
        obj["user"] = obj;
        obj["communicationDisabledUntil"] = null;
        const obj1 = { type: "GUILD_MEMBER_UPDATE" };
        const merged3 = Object.assign(obj);
        importDefault(686).dispatch(obj1);
        const obj4 = importDefault(686);
        const tmp10 = null != isPending && isPending;
      }
      obj6 = require(3747) /* isCommunicationDisabled */;
    }
  }
}
({ getGuildIdFromCommunicationDisabledUserKey: closure_8, getUserIdFromCommunicationDisabledUserKey: closure_9 } = _isNativeReflectConstruct);
let c12 = null;
tmp3 = new tmp3();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_communication_disabled/CommunicationDisabledManager.tsx");

export default tmp3;
