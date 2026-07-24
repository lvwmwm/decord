// Module ID: 5687
// Function ID: 48951
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 33, 22, 5688, 620, 1184, 2]
// Exports: default, useSubscribeGuildMembers

// Module 5687 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import jsxProd from "jsxProd";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_10 from "result";
import { jsx } from "jsxProd";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = ["forwardedRef"];
let c12 = false;
let result = require("_defineProperties").fileFinishedImporting("lib/guild/subscribeGuildMembers.tsx");

export default function subscribeGuildMembers(arg0) {
  let closure_0 = arg0;
  return (displayName) => {
    let closure_0 = displayName;
    let name = displayName.displayName;
    if (null == name) {
      name = displayName.name;
    }
    let str = "Component";
    if (null != name) {
      str = name;
    }
    const combined = "SubscribeGuildMembersContainer(" + str + ")";
    let tmp2 = ((Component) => {
      class WrappedComponent {
        constructor(arg0) {
          self = this;
          tmp = outer3_5(this, WrappedComponent);
          items = [];
          items[0] = Component;
          obj = outer3_8(WrappedComponent);
          tmp2 = outer3_7;
          if (outer3_13()) {
            tmp4 = globalThis;
            _Reflect = Reflect;
            tmp5 = outer3_8;
            constructResult = Reflect.construct(obj, items, outer3_8(self).constructor);
          } else {
            constructResult = obj.apply(self, items);
          }
          tmp2Result = tmp2(self, constructResult);
          tmp7 = closure_0(Component);
          arr2 = outer3_1(outer3_2[8]);
          item = arr2.forEach(tmp7, (userIds, guildId) => callback(outer4_2[9]).subscribeMembers(guildId, userIds));
          tmp2Result._subscriptions = tmp7;
          return tmp2Result;
        }
      }
      outer2_9(WrappedComponent, Component);
      let obj = {
        key: "componentDidUpdate",
        value(arg0) {
          const self = this;
          if (!outer3_1(outer3_2[10])(this.props, arg0)) {
            const tmp2 = WrappedComponent(self.props);
            let isEqualResult = null != self._subscriptions;
            if (isEqualResult) {
              isEqualResult = outer3_1(outer3_2[8]).isEqual(self._subscriptions, tmp2);
              const obj = outer3_1(outer3_2[8]);
            }
            if (!isEqualResult) {
              if (null != self._subscriptions) {
                const item = outer3_1(outer3_2[8]).forEach(self._subscriptions, (userIds, guildId) => callback(outer4_2[9]).unsubscribeMembers(guildId, userIds));
                const arr = outer3_1(outer3_2[8]);
              }
              const item1 = outer3_1(outer3_2[8]).forEach(tmp2, (userIds, guildId) => callback(outer4_2[9]).subscribeMembers(guildId, userIds));
              self._subscriptions = tmp2;
              const arr2 = outer3_1(outer3_2[8]);
            }
          }
        }
      };
      let items = [obj, , ];
      obj = {
        key: "componentWillUnmount",
        value() {
          if (null != this._subscriptions) {
            const item = outer3_1(outer3_2[8]).forEach(tmp._subscriptions, (userIds, guildId) => callback(outer4_2[9]).unsubscribeMembers(guildId, userIds));
            const arr = outer3_1(outer3_2[8]);
          }
        }
      };
      items[1] = obj;
      obj = {
        key: "render",
        value() {
          const props = this.props;
          const merged = Object.assign(outer3_4(props, outer3_3));
          return outer3_11(WrappedComponent, { ref: props.forwardedRef });
        }
      };
      items[2] = obj;
      return outer2_6(WrappedComponent, items);
    })(outer1_10.Component);
    let closure_1 = tmp2;
    tmp2.displayName = combined;
    const forwardRefResult = outer1_10.forwardRef((arg0, arg1) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["forwardedRef"] = arg1;
      return outer2_11(closure_1, obj);
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
  const effect = React.useEffect(() => {
    let item = AddMembersActionSheet(outer1_2[8]).forEach(closure_0, (userIds, guildId) => {
      let tmp = !outer2_12;
      if (!outer2_12) {
        tmp = userIds.length > 50;
      }
      if (tmp) {
        outer2_12 = true;
        let obj = callback2(outer2_2[11]);
        obj = {};
        obj = { count: userIds.length, guildId, reason: outer1_1 };
        obj.extra = obj;
        obj.captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj);
      }
      callback(outer2_2[9]).subscribeMembers(guildId, userIds);
    });
    return () => {
      const item = callback2(outer2_2[8]).forEach(outer1_0, (userIds, guildId) => callback(outer3_2[9]).unsubscribeMembers(guildId, userIds));
    };
  }, items);
};
