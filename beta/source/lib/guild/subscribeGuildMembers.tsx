// Module ID: 7555
// Function ID: 7556
// Name: subscribeGuildMembers
// Dependencies: [109, 19, 21, 12, 7556, 560, 558, 568, 1235, 2]
// Exports: default

// Module 7555 (subscribeGuildMembers)
import _modDef12 from "module_12" /* 12 */;
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 560 */;
import c from "c" /* 568 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["forwardedRef"];
const jsx = fn(21).jsx;
let c7 = false;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("lib/guild/subscribeGuildMembers.tsx");

export default function subscribeGuildMembers(arg0) {
  closure_0 = arg0;
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
        arr = closure_1(closure_2[3]);
        item = arr.forEach(tmp4, (userIds, guildId) => displayName(WrappedComponent[4]).subscribeMembers(guildId, userIds));
        tmp3._subscriptions = tmp4;
        return tmp3;
      }
    }
    const prototype = WrappedComponent.prototype;
    prototype["componentDidUpdate"] = function componentDidUpdate(arg0) {
      const self = this;
      if (!discord_common_shallowEqualDefault(this.props, arg0)) {
        const tmp4 = displayName(self.props);
        let isEqualResult = null != self._subscriptions;
        if (isEqualResult) {
          isEqualResult = tmp(12).isEqual(self._subscriptions, tmp4);
          const tmpResult = tmp(12);
        }
        if (!isEqualResult) {
          if (null != self._subscriptions) {
            const item = tmp(12).forEach(self._subscriptions, (userIds, guildId) => displayName(7556).unsubscribeMembers(guildId, userIds));
            const tmpResult3 = tmp(12);
          }
          const item1 = tmp(12).forEach(tmp4, (userIds, guildId) => displayName(7556).subscribeMembers(guildId, userIds));
          self._subscriptions = tmp4;
          const tmpResult4 = tmp(12);
        }
      }
    };
    prototype["componentWillUnmount"] = function componentWillUnmount() {
      if (null != this._subscriptions) {
        const item = WrappedComponent(WrappedComponent[3]).forEach(tmp._subscriptions, (userIds, guildId) => displayName(WrappedComponent[4]).unsubscribeMembers(guildId, userIds));
        const arr = WrappedComponent(WrappedComponent[3]);
      }
    };
    prototype["render"] = function render() {
      const props = this.props;
      const merged = Object.assign(_objectWithoutProperties(props, closure_3));
      return <closure_0 ref={props.forwardedRef} />;
    };
    WrappedComponent.displayName = combined;
    const forwardRefResult = React.forwardRef(displayName(558).isReactCompilerEnabled() ? ((arg0, forwardedRef) => {
      const cResult = c.c(3);
      if (cResult[0] === arg0) {
        if (cResult[1] === forwardedRef) {
          let tmp2 = cResult[2];
        }
        return tmp2;
      }
      const obj2 = {};
      const merged = Object.assign(arg0);
      obj2.forwardedRef = forwardedRef;
      const tmp4 = <WrappedComponent />;
      cResult[0] = arg0;
      cResult[1] = forwardedRef;
      cResult[2] = tmp4;
      tmp2 = tmp4;
    }) : ((arg0, forwardedRef) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.forwardedRef = forwardedRef;
      return <WrappedComponent />;
    }));
    forwardRefResult.displayName = "ForwardRef(" + combined + ")";
    return forwardRefResult;
  };
};
export const MAX_GUILD_MEMBER_SUBSCRIPTIONS = 50;
export const useSubscribeGuildMembers = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(4);
  if (cResult[0] === arg1) {
    if (cResult[1] === arg0) {
      let tmp2 = cResult[2];
      let tmp3 = cResult[3];
    }
    const effect = noop.useEffect(tmp2, tmp3);
  }
  const fn = function u() {
    let item = _modDef12.forEach(closure_0, (userIds, guildId) => {
      let tmp = !c7;
      if (!c7) {
        tmp = userIds.length > 50;
      }
      if (tmp) {
        c7 = true;
        const obj2 = { extra: null };
        const obj3 = { count: userIds.length, guildId, reason };
        obj2.extra = obj3;
        reason(1235).captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj2);
        const obj = reason(1235);
      }
      closure_0(7556).subscribeMembers(guildId, userIds);
    });
    return () => {
      const item = reason(12).forEach(closure_1_0, (userIds, guildId) => closure_1_0(closure_1_2[4]).unsubscribeMembers(guildId, userIds));
    };
  };
  const items = [arg0, arg1];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp3 = items;
  tmp2 = fn;
}) : ((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  const effect = noop.useEffect(() => {
    let item = _modDef12.forEach(closure_0, (userIds, guildId) => {
      let tmp = !c7;
      if (!c7) {
        tmp = userIds.length > 50;
      }
      if (tmp) {
        c7 = true;
        const obj2 = { extra: null };
        const obj3 = { count: userIds.length, guildId, reason };
        obj2.extra = obj3;
        reason(1235).captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj2);
        const obj = reason(1235);
      }
      closure_0(7556).subscribeMembers(guildId, userIds);
    });
    return () => {
      const item = reason(12).forEach(closure_1_0, (userIds, guildId) => closure_1_0(closure_1_2[4]).unsubscribeMembers(guildId, userIds));
    };
  }, items);
});
