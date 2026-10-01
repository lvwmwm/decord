// Module ID: 6729
// Function ID: 6730
// Name: subscribeGuildMembers
// Dependencies: [109, 19, 5738, 1372, 21, 12, 6730, 558, 1231, 2]
// Exports: default, useEnsureHydratedGuildUsers, useSubscribeGuildMembers

// Module 6729 (subscribeGuildMembers)
import _modDef12 from "module_12" /* 12 */;
import Fragment from "Fragment" /* 21 */;
import shallowEqualDefault from "shallowEqual" /* 558 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import GuildMemberRequesterStore from "GuildMemberRequesterStore" /* 5738 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

let isEqualResult, item1, tmp2, tmp3, tmp5, tmpResult, tmpResult1, tmpResult2;

let closure_3 = ["forwardedRef"];
const jsx = Fragment.jsx;
let c9 = false;
const result = size.fileFinishedImporting("lib/guild/subscribeGuildMembers.tsx");

export default function subscribeGuildMembers(arg0) {
  let closure_0 = arg0;
  return (displayName) => {
    let str = displayName.displayName;
    if (str == null) {
      str = displayName.name;
    }
    if (str == null) {
      str = "Component";
    }
    const combined = "SubscribeGuildMembersContainer(" + str + ")";
    const Component = React.Component;
    class WrappedComponent extends Component {
      constructor(arg0) {
        tmp3 = new WrappedComponent(displayName, tmp2, tmp);
        tmp4 = closure_0(displayName);
        arr = closure_1(closure_2[5]);
        item = arr.forEach(tmp4, (userIds, guildId) => {
          const obj = displayName(WrappedComponent[6]);
          return obj.subscribeMembers(guildId, userIds);
        });
        tmp3._subscriptions = tmp4;
        return tmp3;
      }
      componentDidUpdate(arg0) {
        self = this;
        tmp = closure_2_1;
        tmp2 = closure_2_2;
        if (!closure_2_1(closure_2_2[7])(this.props, displayName)) {
          tmp3 = closure_0;
          tmp4 = closure_0(self.props);
          tmp5 = null;
          isEqualResult = null != self._subscriptions;
          if (isEqualResult) {
            tmpResult = tmp(tmp2[5]);
            isEqualResult = tmpResult.isEqual(self._subscriptions, tmp4);
          }
          if (!isEqualResult) {
            if (null != self._subscriptions) {
              tmpResult1 = tmp(tmp2[5]);
              item = tmpResult1.forEach(self._subscriptions, (userIds, guildId) => {
                const obj = displayName(WrappedComponent[6]);
                return obj.unsubscribeMembers(guildId, userIds);
              });
            }
            tmpResult2 = tmp(tmp2[5]);
            item1 = tmpResult2.forEach(tmp4, (userIds, guildId) => {
              const obj = displayName(WrappedComponent[6]);
              return obj.subscribeMembers(guildId, userIds);
            });
            self._subscriptions = tmp4;
          }
        }
        return;
      }
      componentWillUnmount() {
        if (null != this._subscriptions) {
          tmp2 = WrappedComponent;
          tmp3 = WrappedComponent;
          arr = WrappedComponent(WrappedComponent[5]);
          item = arr.forEach(tmp._subscriptions, (userIds, guildId) => {
            const obj = displayName(WrappedComponent[6]);
            return obj.unsubscribeMembers(guildId, userIds);
          });
        }
        return;
      }
      render() {
        const props = this.props;
        const merged = Object.assign(_objectWithoutProperties(props, closure_3));
        return <displayName ref={props.forwardedRef} />;
      }
    }
    WrappedComponent.displayName = combined;
    const forwardRefResult = React.forwardRef((arg0, forwardedRef) => {
      const merged = Object.assign(arg0);
      return <WrappedComponent forwardedRef={arg1} />;
    });
    forwardRefResult.displayName = "ForwardRef(" + combined + ")";
    return forwardRefResult;
  };
};
export const MAX_GUILD_MEMBER_SUBSCRIPTIONS = 50;
export const useSubscribeGuildMembers = function useSubscribeGuildMembers(memo, AddMembersActionSheet) {
  let closure_0 = memo;
  let closure_1 = AddMembersActionSheet;
  const items = [memo, AddMembersActionSheet];
  const effect = react.useEffect(() => {
    let reason;
    let arr = useEnsureHydratedGuildUsers(dependencyMap[5]);
    let item = arr.forEach(memo, (userIds, guildId) => {
      let obj3;
      const tmp = !c9 && userIds.length > 50;
      if (tmp) {
        c9 = true;
        const obj2 = { extra: obj3 };
        obj3 = { count: userIds.length, guildId, reason };
        const obj = useEnsureHydratedGuildUsers(closure_2_2[8]);
        obj.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj2);
      }
      const obj4 = memo(closure_2_2[6]);
      obj4.subscribeMembers(guildId, userIds);
    });
    return () => {
      const arr = useEnsureHydratedGuildUsers(closure_2_2[5]);
      const item = arr.forEach(memo, (userIds, guildId) => {
        const obj = closure_1_0(closure_1_2[6]);
        return obj.unsubscribeMembers(guildId, userIds);
      });
    };
  }, items);
};
export const useEnsureHydratedGuildUsers = function useEnsureHydratedGuildUsers(guild_id, items1) {
  let user;
  let closure_0 = guild_id;
  const items = [guild_id, items1];
  const memo = react.useMemo(() => {
    let obj;
    if (0 === items1.length) {
      obj = {};
    } else {
      obj = {};
      obj[guild_id] = tmp;
    }
    return obj;
  }, items);
  items1 = [guild_id, items1];
  const effect = react.useEffect(() => {
    const item = items1.forEach((item) => {
      if (null == user.getUser(item)) {
        const member = GuildMemberRequesterStore.requestMember(guild_id, item);
      }
    });
  }, items1);
  const useEnsureHydratedGuildUsers = "useEnsureHydratedGuildUsers";
  const items2 = [memo, "useEnsureHydratedGuildUsers"];
  const effect1 = react.useEffect(() => {
    let reason;
    let arr = useEnsureHydratedGuildUsers(dependencyMap[5]);
    let item = arr.forEach(memo, (userIds, guildId) => {
      let obj3;
      const tmp = !c9 && userIds.length > 50;
      if (tmp) {
        c9 = true;
        const obj2 = { extra: obj3 };
        obj3 = { count: userIds.length, guildId, reason };
        const obj = useEnsureHydratedGuildUsers(closure_2_2[8]);
        obj.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj2);
      }
      const obj4 = memo(closure_2_2[6]);
      obj4.subscribeMembers(guildId, userIds);
    });
    return () => {
      const arr = useEnsureHydratedGuildUsers(closure_2_2[5]);
      const item = arr.forEach(memo, (userIds, guildId) => {
        const obj = closure_1_0(closure_1_2[6]);
        return obj.unsubscribeMembers(guildId, userIds);
      });
    };
  }, items2);
};
