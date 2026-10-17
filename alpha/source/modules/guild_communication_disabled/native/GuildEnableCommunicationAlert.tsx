// Module ID: 12560
// Function ID: 12561
// Name: GuildEnableCommunicationAlert
// Dependencies: [5, 32, 109, 19, 17, 1392, 2130, 1087, 21, 5191, 558, 576, 8262, 9939, 1267, 5496, 5509, 12559, 4904, 1128, 5187, 5498, 2]

// Module 12560 (GuildEnableCommunicationAlert)
import react_native from "react-native" /* 17 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5509 */;
import useUserCommunicationDisabledDefault from "useUserCommunicationDisabled" /* 8262 */;
import CountDownDefault from "CountDown" /* 9939 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1392 */;
import GuildDisableCommunicationConstants from "GuildDisableCommunicationConstants" /* 2130 */;
import Constants from "Constants" /* 1087 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5191 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c2, dependencyMap, importDefault;

let Fonts;
let c10;
let c9;
let closure_12;
let map1;
let tmp11;
let unpackModuleId;
const useMountEffectDefault = tmp11(5496);
let closure_3 = ["guildId", "userId", "onCancel"];
const View = react_native.View;
({ CLEAR_COMMUNICATION_DISABLED_MODAL_NAME: c9, GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK: c10 } = GuildDisableCommunicationConstants);
({ AnalyticEvents: unpackModuleId, Fonts } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let obj = { wrapper: { padding: 16 }, body: { paddingTop: 16 }, description: { lineHeight: 18 }, cta: { paddingTop: 8 }, countdown: { fontFamily: Fonts.PRIMARY_SEMIBOLD } };
let closure_14 = createStyles.createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildEnableCommunicationAlert(guildId) {
  let _require;
  let first;
  let other_user_id;
  const tmp = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(43);
  if (cResult[0] !== guildId) {
    guildId = guildId.guildId;
    _require = guildId;
    const userId = guildId.userId;
    importDefault = userId;
    const onCancel = guildId.onCancel;
    const tmp9 = _objectWithoutProperties(guildId, first);
    let num = 0;
    cResult[0] = guildId;
    cResult[1] = tmp9;
    cResult[2] = guildId;
    cResult[3] = onCancel;
    cResult[4] = userId;
  } else {
    _require = cResult[2];
    importDefault = cResult[4];
  }
  const tmp10 = closure_14();
  dependencyMap = tmp10;
  first = _slicedToArray(useUserCommunicationDisabledDefault(tmp6, tmp4), 1)[0];
  if (cResult[5] === first) {
    if (cResult[8] === tmp4) {
      let tmp14;
      if (cResult[9] === tmp6) {
        tmp14 = cResult[10];
      }
      useMountEffectDefault(tmp14);
      class U {
        constructor() {
          const obj = AnalyticsUtilsDefault;
          const obj2 = { type, guild_id, other_user_id };
          obj.track(unpackModuleId.OPEN_MODAL, obj2);
        }
      }
      function getUsername() {
        const user = UserStore.getUser(other_user_id);
        const obj = NicknameUtilsDefault;
        let str = obj.getName(guild_id, null, user);
        if (str == null) {
          str = "";
        }
        return str;
      }
      cResult[11] = tmp4;
      cResult[12] = tmp6;
      cResult[13] = getUsername;
    }
    class U {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { type, guild_id, other_user_id };
        obj.track(unpackModuleId.OPEN_MODAL, obj2);
      }
    }
    cResult[8] = tmp4;
    cResult[9] = tmp6;
    cResult[10] = U;
    tmp14 = U;
  }
  function countdown() {
    let num = 0;
    if (null != first) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      num = new Date(tmp);
    }
    const obj = { style: countdown.countdown, deadline: num, withUnits: true };
    return authStore2(CountDownDefault, obj);
  }
  cResult[5] = first;
  cResult[6] = tmp10.countdown;
  cResult[7] = countdown;
}) : (function GuildEnableCommunicationAlert(guildId) {
  let countdown;
  let format;
  let intl;
  let intl2;
  let intl3;
  let intl5;
  let items;
  let items1;
  let obj2;
  let obj4;
  let obj6;
  let onClose;
  let prop;
  let tmp11;
  let tmp12;
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const onCancel = guildId.onCancel;
  const merged = Object.assign(guildId, Object.assign({ guildId: 0, userId: 0, onCancel: 0 }));
  let obj = function _handleConfirmRemoveTimeout2() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let intl;
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const obj2 = c1(c2[17]);
              c1 = 1;
              c2 = 1;
              const obj5 = { value: obj2.setCommunicationDisabledDuration(guildId, userId), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const obj6 = { text: intl.string(tmp3(c2[19]).t["/Mmbfv"]), variant: "success" };
            const open = c1(c2[18]).open;
            const tmp15 = c1(c2[18]);
            intl = tmp3(c2[19]).intl;
            open("GUILD_ENABLE_COMMUNICATION_SUCCESS", obj6);
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp8) {
          c2 = 3;
          throw tmp8;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp2 = closure_14();
  dependencyMap = tmp2;
  const tmp3 = userId;
  closure_3 = _slicedToArray(userId(8262)(userId, guildId), 1)[0];
  userId(5496)(() => {
    obj = AnalyticsUtilsDefault;
    const obj2 = { type, guild_id: guildId, other_user_id: userId };
    obj.track(unpackModuleId.OPEN_MODAL, obj2);
  });
  obj = {
    title: intl.string(guildId(1128).t["+ZD3ou"]),
    style: tmp2.wrapper,
    cancelText: intl2.string(guildId(1128).t["ETE/oC"]),
    onClose,
    onCancel,
    confirmText: intl3.string(tmp9(1128).t.qXtNtS),
    onConfirm: function handleConfirmRemoveTimeout() {
      return obj(...arguments);
    },
    children: tmp11(tmp12, obj2)
  };
  const tmp7 = userId(5498);
  const merged1 = Object.assign(merged);
  intl = guildId(1128).intl;
  intl2 = guildId(1128).intl;
  onClose = undefined;
  if (merged != null) {
    onClose = merged.onClose;
  }
  intl3 = tmp9(1128).intl;
  obj2 = { style: tmp2.body, children: items };
  let obj3 = { style: tmp2.description, variant: "text-sm/medium", children: format(prop, obj4) };
  const Text = tmp9(5187).Text;
  const intl4 = tmp9(1128).intl;
  format = intl4.format;
  prop = tmp9(1128).t["t+abNU"];
  const user = UserStore.getUser(userId);
  const tmp3Result = tmp3(5509);
  let str = tmp3Result.getName(guildId, null, user);
  tmp11 = closure_13;
  tmp12 = View;
  if (str == null) {
    str = "";
  }
  obj4 = {
    username: str,
    countdown(arg0) {
      let num = 0;
      if (null != closure_3) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        num = new Date(tmp);
      }
      obj = { style: countdown.countdown, deadline: num, withUnits: true };
      return authStore2(CountDownDefault, obj);
    }
  };
  items = [tmp6(Text, obj3), ];
  let obj5 = { style: items1, variant: "text-sm/medium", children: intl5.format(tmp9(1128).t.KtENkK, obj6) };
  items1 = [, ];
  ({ cta: arr2[0], description: arr2[1] } = tmp2);
  const Text2 = tmp9(5187).Text;
  intl5 = tmp9(1128).intl;
  obj6 = { link };
  items[1] = closure_12(Text2, obj5);
  return closure_12(tmp7, obj);
});
const result = size.fileFinishedImporting("modules/guild_communication_disabled/native/GuildEnableCommunicationAlert.tsx");

export default tmp6;
