// Module ID: 11322
// Function ID: 11323
// Name: GuildEnableCommunicationAlert
// Dependencies: [5, 32, 19, 17, 1372, 2110, 1074, 21, 4836, 7419, 5298, 1241, 11321, 4528, 1115, 8810, 5300, 4832, 4988, 10391, 2]
// Exports: default

// Module 11322 (GuildEnableCommunicationAlert)
import react_native from "react-native" /* 17 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import CountDownDefault from "CountDown" /* 10391 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import GuildDisableCommunicationConstants from "GuildDisableCommunicationConstants" /* 2110 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c1, c2, dependencyMap;

let Fonts;
let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
const View = react_native.View;
({ CLEAR_COMMUNICATION_DISABLED_MODAL_NAME: metroImportDefault, GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK: metroImportAll } = GuildDisableCommunicationConstants);
({ AnalyticEvents: c9, Fonts } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = { wrapper: { padding: 16 }, body: { paddingTop: 16 }, description: { lineHeight: 18 }, cta: { paddingTop: 8 }, countdown: { fontFamily: Fonts.PRIMARY_SEMIBOLD } };
let closure_12 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_communication_disabled/native/GuildEnableCommunicationAlert.tsx");

export default function GuildEnableCommunicationAlert(guildId) {
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
  let obj = function _handleConfirmRemoveTimeout() {
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
          return { value: "HermesInternal", done: null };
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
              const obj2 = c1(c2[12]);
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
            const obj6 = { key: "GUILD_ENABLE_COMMUNICATION_SUCCESS", content: intl.string(tmp3(c2[14]).t["/Mmbfv"]), icon: c1(c2[15]) };
            const open = c1(c2[13]).open;
            const tmp15 = c1(c2[13]);
            intl = tmp3(c2[14]).intl;
            open(obj6);
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp8) {
          c2 = 3;
          throw tmp8;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp2 = closure_12();
  dependencyMap = tmp2;
  const tmp3 = userId;
  let closure_3 = obj(userId(7419)(userId, guildId), 1)[0];
  userId(5298)(() => {
    obj = AnalyticsUtilsDefault;
    const obj2 = { type: metroImportDefault, guild_id: guildId, other_user_id: userId };
    obj.track(constants.OPEN_MODAL, obj2);
  });
  obj = {
    title: intl.string(guildId(1115).t["+ZD3ou"]),
    style: tmp2.wrapper,
    cancelText: intl2.string(guildId(1115).t["ETE/oC"]),
    onClose,
    onCancel,
    confirmText: intl3.string(tmp9(1115).t.qXtNtS),
    onConfirm: function handleConfirmRemoveTimeout() {
      return obj(...arguments);
    },
    children: tmp11(tmp12, obj2)
  };
  const tmp7 = userId(5300);
  const merged1 = Object.assign(merged);
  intl = guildId(1115).intl;
  intl2 = guildId(1115).intl;
  onClose = undefined;
  if (merged != null) {
    onClose = merged.onClose;
  }
  intl3 = tmp9(1115).intl;
  obj2 = { style: tmp2.body, children: items };
  let obj3 = { style: tmp2.description, variant: "text-sm/medium", children: format(prop, obj4) };
  const Text = tmp9(4832).Text;
  const intl4 = tmp9(1115).intl;
  format = intl4.format;
  prop = tmp9(1115).t["t+abNU"];
  const user = UserStore.getUser(userId);
  const tmp3Result = tmp3(4988);
  let str = tmp3Result.getName(guildId, null, user);
  tmp11 = closure_11;
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
      return authStore(CountDownDefault, obj);
    }
  };
  items = [tmp6(Text, obj3), ];
  let obj5 = { style: items1, variant: "text-sm/medium", children: intl5.format(tmp9(1115).t.KtENkK, obj6) };
  items1 = [, ];
  ({ cta: arr2[0], description: arr2[1] } = tmp2);
  const Text2 = tmp9(4832).Text;
  intl5 = tmp9(1115).intl;
  obj6 = { link };
  items[1] = closure_10(Text2, obj5);
  return closure_10(tmp7, obj);
};
