// Module ID: 10208
// Function ID: 78831
// Name: InstantInviteDetails
// Dependencies: [31, 27, 1352, 3767, 1849, 33, 4130, 689, 4593, 4638, 4541, 4126, 4320, 4094, 1212, 10196, 2]
// Exports: default

// Module 10208 (InstantInviteDetails)
import result from "result";
import { View } from "get ActivityIndicator";
import { createChannelRecordFromInvite as closure_5 } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
class InstantInviteDetails {
  constructor(arg0) {
    ({ channel, expiresAt } = global);
    tmp = c10();
    obj = require("getThreadChannelIcon");
    TextIcon = obj.getSimpleChannelIconComponent(channel);
    if (null == TextIcon) {
      tmp2 = closure_0;
      tmp3 = closure_2;
      num = 9;
      TextIcon = require("TextIcon").TextIcon;
    }
    tmp4 = jsxs;
    obj = {};
    obj1 = { direction: "horizontal", align: "center" };
    items = [, ];
    items[0] = jsx(TextIcon, { color: "icon-subtle", size: "xs" });
    obj2 = { variant: "text-md/semibold", color: "text-subtle", style: null, lineClamp: 1 };
    obj2.style = tmp.channel;
    obj5 = require("computeDefaultGroupDmNameFromUserIds");
    obj2.children = obj5.computeChannelName(channel, c7, c6, false);
    items[1] = jsx(require("Text").Text, obj2);
    obj1.children = items;
    items1 = [, ];
    items1[0] = jsxs(require("Stack").Stack, obj1);
    tmp5 = null != expiresAt;
    if (tmp5) {
      tmp6 = jsxs;
      tmp7 = closure_0;
      tmp8 = closure_2;
      obj3 = { direction: "horizontal", align: "center" };
      tmp9 = jsx;
      num2 = 13;
      items2 = [, , ];
      items2[0] = jsx(require("ClockIcon").ClockIcon, { size: "xs", color: "icon-subtle" });
      tmp10 = jsx;
      obj4 = { variant: "text-md/semibold", color: "text-subtle" };
      num3 = 14;
      intl = require("getSystemLocale").intl;
      obj4.children = intl.string(require("getSystemLocale").t.aTABYx);
      items2[1] = jsx(require("Text").Text, obj4);
      tmp11 = jsx;
      tmp12 = closure_1;
      num4 = 15;
      obj5 = {};
      obj5.style = tmp.time;
      obj5.deadline = expiresAt;
      items2[2] = jsx(require("_isNativeReflectConstruct"), obj5);
      obj3.children = items2;
      tmp5 = jsxs(require("Stack").Stack, obj3);
    }
    items1[1] = tmp5;
    obj.children = items1;
    return tmp4(require("Stack").Stack, obj);
  }
}
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = { flex: { flex: 1 }, channel: { flex: 0 } };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_POSITIVE };
_createForOfIteratorHelperLoose.time = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_callSuper").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteCode.tsx");

export default function InstantInviteCode(invite) {
  invite = invite.invite;
  const items = [invite.channel];
  let obj = { style: _createForOfIteratorHelperLoose().flex };
  const memo = React.useMemo(() => outer1_5(invite.channel), items);
  obj = {};
  obj = { variant: "text-lg/bold", tabularNumbers: true, children: invite.code };
  const items1 = [callback(invite(4126).Text, obj), ];
  const tmp = _createForOfIteratorHelperLoose();
  items1[1] = callback(InstantInviteDetails, { channel: memo, expiresAt: invite.getExpiresAt() });
  obj.children = items1;
  obj.children = callback2(invite(4541).Stack, obj);
  return callback(View, obj);
};
export { InstantInviteDetails };
