// Module ID: 9265
// Function ID: 9266
// Name: useStartEvent
// Dependencies: [5, 32, 19, 9266, 9267, 4735, 2]
// Exports: default

// Module 9265 (useStartEvent)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c6, c7, c8, closure_5;

let closure_6 = {
  onSuccess() {

  },
  permissionOverwrites: []
};
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useStartEvent.tsx");

export default function useStartEvent() {
  let closure_0;
  let first;
  let obj = function _startEvent() {
    obj = _asyncToGenerator(async function(arg0, value) {
      let obj11;
      let obj2;
      let obj5;
      let obj8;
      closure_0 = arg0;
      closure_1 = value;
      let closure_2 = arg2;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let onSuccess;
          let permissionOverwrites;
          let aPIError;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_4 = tmp;
              let closure_3 = tmp4;
              onSuccess = undefined;
              permissionOverwrites = undefined;
              let tmp52 = closure_2;
              if (closure_2 === undefined) {
                tmp52 = c6;
              }
              onSuccess = tmp52.onSuccess ?? c6.onSuccess;
              permissionOverwrites = tmp52.permissionOverwrites ?? c6.permissionOverwrites;
              aPIError = undefined;
              c7 = 1;
              c8 = 1;
              return { value: "flex", done: true };
            }
          } else if (1 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_132_0(true);
              c6 = 1;
              c7 = 3;
              c8 = 1;
              const obj7 = { value: obj11.preStartEventActions(closure_0, permissionOverwrites), done: false };
              obj11 = closure_1(closure_2[3]);
              return obj7;
            }
          } else {
            if (2 === c7) {
              c6 = 0;
              const self = this;
              const self2 = this;
              aPIError = new closure_0(closure_2[5]).APIError(closure_5);
              closure_132_1(aPIError);
              closure_132_0(false);
            } else if (3 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                const obj9 = { value, done: true };
                return obj9;
              } else {
                c7 = 4;
                c8 = 1;
                const obj10 = { value: obj8.setEventAsActive(closure_0, closure_1), done: false };
                obj8 = closure_1(closure_2[3]);
                return obj10;
              }
            } else if (4 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                const obj12 = { value, done: true };
                return obj12;
              } else {
                c7 = 5;
                c8 = 1;
                const obj13 = { value: obj5.navigateToEvent(closure_0, onSuccess), done: false };
                obj5 = closure_0(closure_2[4]);
                return obj13;
              }
            } else if (5 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                const obj14 = { value, done: true };
                return obj14;
              } else {
                c7 = 6;
                c8 = 1;
                const obj15 = { value: obj2.postStartActions(closure_0, onSuccess), done: false };
                obj2 = closure_0(closure_2[4]);
                return obj15;
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_132_0(false);
              c6 = 0;
            }
            closure_132_0(false);
            c8 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp55) {
          closure_5 = tmp55;
          if (0 === c6) {
            c8 = 3;
            throw tmp55;
          } else {
            c7 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  [first, closure_0] = react.useState(false);
  const tmp3 = _slicedToArray(react.useState(null), 2);
  let closure_1 = tmp3[1];
  const items = [
    function startEvent(arg0, arg1) {
      return obj(...arguments);
    },
    { loading: first, error: tmp3[0] }
  ];
  return items;
};
