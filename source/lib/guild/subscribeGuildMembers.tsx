// Module ID: 5683
// Function ID: 48898
// Name: _isNativeReflectConstruct
// Dependencies: [5, 653, 491, 507, 2, 1355, 662, 4317, 5256, 2, 5, 4198, 3757]
// Exports: default, useSubscribeGuildMembers

// Module 5683 (_isNativeReflectConstruct)
import asyncGeneratorStep from "asyncGeneratorStep";
import ME from "ME";
import v1 from "v1";
import closure_7 from "_isNativeReflectConstruct";
import result2 from "result2";
import set from "set";
import MAX_FAVORITES from "MAX_FAVORITES";
import { jsx } from "canViewChannel";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = [false];
let closure_12 = false;
const result = _isNativeReflectConstruct.fileFinishedImporting("lib/guild/subscribeGuildMembers.tsx");

export default function subscribeGuildMembers(arg0) {
  const arg1 = arg0;
  return (displayName) => {
    let name = displayName.displayName;
    if (null == name) {
      name = displayName.name;
    }
    let str = "Component";
    if (null != name) {
      str = name;
    }
    const combined = "SubscribeGuildMembersContainer(" + str + ")";
    const tmp2 = (Component) => {
      class WrappedComponent {
        constructor(arg0) {
          self = this;
          tmp = ME(this, WrappedComponent);
          items = [];
          items[0] = Component;
          obj = result2(WrappedComponent);
          tmp2 = closure_7;
          if (closure_13()) {
            tmp4 = globalThis;
            _Reflect = Reflect;
            tmp5 = result2;
            constructResult = Reflect.construct(obj, items, result2(self).constructor);
          } else {
            constructResult = obj.apply(self, items);
          }
          tmp2Result = tmp2(self, constructResult);
          tmp7 = WrappedComponent(Component);
          arr2 = closure_1(closure_2[8]);
          item = arr2.forEach(tmp7, (userIds, guildId) => callback(closure_2[9]).subscribeMembers(guildId, userIds));
          tmp2Result._subscriptions = tmp7;
          return tmp2Result;
        }
      }
      Component = WrappedComponent;
      callback2(WrappedComponent, Component);
      let obj = {
        key: "componentDidUpdate",
        value(arg0) {
          const self = this;
          if (!callback(closure_2[10])(this.props, arg0)) {
            const tmp2 = WrappedComponent(self.props);
            let isEqualResult = null != self._subscriptions;
            if (isEqualResult) {
              isEqualResult = callback(closure_2[8]).isEqual(self._subscriptions, tmp2);
              const obj = callback(closure_2[8]);
            }
            if (!isEqualResult) {
              if (null != self._subscriptions) {
                const item = callback(closure_2[8]).forEach(self._subscriptions, (userIds, guildId) => callback(closure_2[9]).unsubscribeMembers(guildId, userIds));
                const arr = callback(closure_2[8]);
              }
              const item1 = callback(closure_2[8]).forEach(tmp2, (userIds, guildId) => callback(closure_2[9]).subscribeMembers(guildId, userIds));
              self._subscriptions = tmp2;
              const arr2 = callback(closure_2[8]);
            }
          }
        }
      };
      const items = [obj, , ];
      obj = {
        key: "componentWillUnmount",
        value() {
          if (null != this._subscriptions) {
            const item = callback(closure_2[8]).forEach(tmp._subscriptions, (userIds, guildId) => callback(closure_2[9]).unsubscribeMembers(guildId, userIds));
            const arr = callback(closure_2[8]);
          }
        }
      };
      items[1] = obj;
      obj = {
        key: "render",
        value() {
          const props = this.props;
          const merged = Object.assign(callback2(props, closure_3));
          return callback5(WrappedComponent, { ref: props.forwardedRef });
        }
      };
      items[2] = obj;
      return callback(WrappedComponent, items);
    }(React.Component);
    tmp2.displayName = combined;
    const forwardRefResult = React.forwardRef((arg0, arg1) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["forwardedRef"] = arg1;
      return callback3(tmp2, obj);
    });
    forwardRefResult.displayName = "ForwardRef(" + combined + ")";
    return forwardRefResult;
  };
};
export const MAX_GUILD_MEMBER_SUBSCRIPTIONS = 50;
export const useSubscribeGuildMembers = function useSubscribeGuildMembers(memo, AddMembersActionSheet) {
  AddMembersActionSheet = memo;
  const importDefault = AddMembersActionSheet;
  const items = [memo, AddMembersActionSheet];
  const effect = React.useEffect(() => {
    const item = arg1(closure_2[8]).forEach(arg0, (userIds, guildId) => {
      let tmp = !closure_12;
      if (!closure_12) {
        tmp = userIds.length > 50;
      }
      if (tmp) {
        closure_12 = true;
        let obj = callback2(closure_2[11]);
        obj = {};
        obj = { count: userIds.length, guildId, reason: callback2 };
        obj.extra = obj;
        obj.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj);
      }
      callback(closure_2[9]).subscribeMembers(guildId, userIds);
    });
    return () => {
      const item = callback2(closure_2[8]).forEach(closure_0, (userIds, guildId) => callback(closure_2[9]).unsubscribeMembers(guildId, userIds));
    };
  }, items);
};
