// Module ID: 19892
// Function ID: 19893
// Name: InterestGuildJoinButton
// Dependencies: [5, 32, 19, 17, 5021, 21, 5170, 575, 504, 7000, 5204, 8914, 19893, 1113, 2534, 5788, 2]
// Exports: default

// Module 19892 (InterestGuildJoinButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import reactDefault from "react" /* 8914 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildMembershipStore from "GuildMembershipStore" /* 5021 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let c1, c4, closure_2;

let obj2;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { button: obj2 };
obj2 = { width: nativeDefault.space.PX_64 + nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildJoinButton.tsx");

export default function InterestGuildJoinButton(guildId) {
  let Button;
  let closure_4;
  let closure_6;
  let formatToPlainStringResult;
  let fullWidth;
  let guildName;
  let loading;
  let obj7;
  let str2;
  let stringResult;
  guildId = guildId.guildId;
  ({ guildName, fullWidth } = guildId);
  if (fullWidth === undefined) {
    fullWidth = false;
  }
  ({ onJoinTapped: importDefault, onJoinResult: dependencyMap } = guildId);
  _slicedToArray = undefined;
  loading = undefined;
  closure_6 = undefined;
  let closure_7;
  let obj = function _handleJoin() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let obj2;
      if (c4 === 2) {
        c4 = 3;
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
        let c3;
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const tmp37 = stateFromStores;
              if (!tmp37) {
                const tmp22 = closure_2_4;
                if (!tmp22) {
                  const tmp23 = loading;
                  if (!tmp23) {
                    closure_2_6(true);
                    c3 = 1;
                    c1 = 2;
                    c4 = 1;
                    const obj5 = { value: obj2.joinInterestGuild(guildId, importDefault, dependencyMap), done: false };
                    obj2 = tmp(closure_2[12]);
                    return obj5;
                  }
                }
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            const tmp16 = closure_2;
            if (closure_128_7()) {
              closure_128_6(false);
            }
            throw tmp16;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            if (closure_128_7()) {
              closure_128_6(false);
            }
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            if (closure_128_7()) {
              closure_128_6(false);
            }
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp31) {
          closure_2 = tmp31;
          if (0 === c3) {
            c4 = 3;
            throw tmp31;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp3 = dependencyMap;
  const tmp = closure_9();
  obj = guildId(504);
  const items = [closure_7];
  const items1 = [guildId];
  let stateFromStores = obj.useStateFromStores(items, () => GuildMembershipStore.isMember(guildId), items1);
  let obj2 = guildId(7000);
  const currentUserGuildJoinRequest = obj2.useCurrentUserGuildJoinRequest(guildId);
  let applicationStatus;
  if (currentUserGuildJoinRequest != null) {
    applicationStatus = currentUserGuildJoinRequest.applicationStatus;
  }
  const tmp7 = applicationStatus === guildId(5204).GuildJoinRequestApplicationStatuses.SUBMITTED;
  _slicedToArray = tmp7;
  [loading, closure_6] = loading.useState(false);
  closure_7 = reactDefault();
  const intl = tmp2(1113).intl;
  const string = intl.string;
  if (stateFromStores) {
    stringResult = string(tmp10(2534).X4zfDg);
    const intl4 = tmp2(1113).intl;
    let obj3 = { guild: guildName };
    formatToPlainStringResult = intl4.formatToPlainString(tmp10(2534).t1du0D, obj3);
  } else if (tmp7) {
    stringResult = string(tmp10(2534).fVWYWS);
    const intl3 = tmp2(1113).intl;
    let obj4 = { guild: guildName };
    formatToPlainStringResult = intl3.formatToPlainString(tmp10(2534).nQnkb3, obj4);
  } else {
    const stringResult1 = string(guildId(1113).t.VJlc0S);
    const intl2 = tmp2(1113).intl;
    let obj5 = { guild: guildName };
    formatToPlainStringResult = intl2.formatToPlainString(tmp10(2534).NOfX8z, obj5);
    stringResult = stringResult1;
  }
  let button;
  const tmp15 = closure_6;
  if (!fullWidth) {
    button = tmp.button;
  }
  let str = "sm";
  const obj6 = { style: button, children: obj(Button, obj7) };
  Button = tmp2(5788).Button;
  if (fullWidth) {
    str = "lg";
  }
  obj7 = {
    size: str,
    text: stringResult,
    accessibilityLabel: formatToPlainStringResult,
    variant: str2,
    disabled: stateFromStores,
    loading,
    onPress: function handleJoin() {
      return obj(...arguments);
    }
  };
  if (stateFromStores) {
    str2 = "secondary";
  } else {
    str2 = "primary";
  }
  if (!stateFromStores) {
    stateFromStores = tmp7;
  }
  if (!stateFromStores) {
    stateFromStores = loading;
  }
  return obj(tmp15, obj6);
};
