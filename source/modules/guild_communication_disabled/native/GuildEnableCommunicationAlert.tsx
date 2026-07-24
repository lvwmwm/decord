// Module ID: 11015
// Function ID: 85713
// Name: GuildEnableCommunicationAlert
// Dependencies: [5, 57, 31, 27, 1849, 1919, 653, 33, 4130, 7753, 4559, 675, 11014, 3831, 1212, 10361, 4561, 4126, 4319, 10196, 2]
// Exports: default

// Module 11015 (GuildEnableCommunicationAlert)
import closure_3 from "getFriendlyDurationString";
import _slicedToArray from "_slicedToArray";
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import getFriendlyDurationString from "getFriendlyDurationString";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_7;
let closure_8;
const require = arg1;
({ CLEAR_COMMUNICATION_DISABLED_MODAL_NAME: closure_7, GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK: closure_8 } = getFriendlyDurationString);
const AnalyticEvents = ME.AnalyticEvents;
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = { fontFamily: ME.Fonts.PRIMARY_SEMIBOLD };
let closure_12 = _createForOfIteratorHelperLoose.createStyles({ wrapper: { padding: 16 }, body: { paddingTop: 16 }, description: { lineHeight: 18 }, cta: { paddingTop: 8 }, countdown: _createForOfIteratorHelperLoose });
const result = require("result").fileFinishedImporting("modules/guild_communication_disabled/native/GuildEnableCommunicationAlert.tsx");

export default function GuildEnableCommunicationAlert(guildId) {
  guildId = guildId.guildId;
  const userId = guildId.userId;
  let obj = { guildId: 0, userId: 0, onCancel: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(guildId, obj);
  function _handleConfirmRemoveTimeout(arg0, arg1) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    return obj(...arguments);
  }
  const tmp3 = callback();
  const dependencyMap = tmp3;
  let closure_3 = _handleConfirmRemoveTimeout(userId(7753)(userId, guildId), 1)[0];
  userId(4559)(() => {
    let obj = userId(tmp3[11]);
    obj = { type: outer1_7, guild_id: guildId, other_user_id: userId };
    obj.track(outer1_9.OPEN_MODAL, obj);
  });
  obj = {};
  const merged1 = Object.assign(merged);
  const intl = guildId(1212).intl;
  obj["title"] = intl.string(guildId(1212).t["+ZD3ou"]);
  obj["style"] = tmp3.wrapper;
  const intl2 = guildId(1212).intl;
  obj["cancelText"] = intl2.string(guildId(1212).t["ETE/oC"]);
  let onClose;
  if (null != merged) {
    onClose = merged.onClose;
  }
  obj["onClose"] = onClose;
  obj["onCancel"] = guildId.onCancel;
  const intl3 = guildId(1212).intl;
  obj["confirmText"] = intl3.string(guildId(1212).t.qXtNtS);
  obj["onConfirm"] = function handleConfirmRemoveTimeout() {
    return _handleConfirmRemoveTimeout(...arguments);
  };
  obj = { style: tmp3.body };
  const obj1 = { style: tmp3.description, variant: "text-sm/medium" };
  const intl4 = guildId(1212).intl;
  const obj2 = {};
  user = user.getUser(userId);
  const tmp11 = closure_11;
  const tmp12 = View;
  const tmp5 = closure_10;
  const tmp6 = userId(4561);
  const name = userId(4319).getName(guildId, null, user);
  let str = "";
  if (null != name) {
    str = name;
  }
  obj2.username = str;
  obj2.countdown = function countdown(arg0) {
    let num = 0;
    if (null != closure_3) {
      const _Date = Date;
      num = new Date(closure_3);
    }
    const obj = { style: tmp3.countdown, deadline: num, withUnits: true };
    return outer1_10(userId(tmp3[19]), obj);
  };
  obj1.children = intl4.format(guildId(1212).t["t+abNU"], obj2);
  const items = [closure_10(guildId(4126).Text, obj1), ];
  const obj3 = { style: items1, variant: "text-sm/medium" };
  items1 = [, ];
  ({ cta: arr2[0], description: arr2[1] } = tmp3);
  const intl5 = tmp9(1212).intl;
  obj3.children = intl5.format(guildId(1212).t.KtENkK, { link: closure_8 });
  items[1] = closure_10(guildId(4126).Text, obj3);
  obj.children = items;
  obj["children"] = tmp11(tmp12, obj);
  return tmp5(tmp6, obj);
};
