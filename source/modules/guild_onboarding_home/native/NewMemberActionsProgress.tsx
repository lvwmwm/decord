// Module ID: 15082
// Function ID: 114845
// Name: ProgressBar
// Dependencies: [31, 27, 1917, 4333, 4334, 1355, 3746, 33, 4130, 689, 4554, 624, 1360, 4660, 1198, 4126, 1212, 1273, 10710, 2]
// Exports: NewMemberActionsProgress

// Module 15082 (ProgressBar)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { StaticChannelRoute } from "set";
import { GuildMemberFlags } from "GuildMemberFlags";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
function ProgressBar(percent) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.progressBackground };
  obj = {};
  const items = [tmp.progressForeground, ];
  obj = { width: "" + percent.percent + "%" };
  items[1] = obj;
  obj.style = items;
  obj.colors = ["rgba(103, 203, 134, 1)", "rgba(59, 165, 92, 1)"];
  obj.useAngle = true;
  obj.angle = -90;
  obj.children = callback(importDefault(4554), obj);
  return callback(View, obj);
}
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { padding: 16 }, horizontal: { flexDirection: "row", alignItems: "center" }, spaceBetween: { justifyContent: "space-between" }, spaceBelow: { marginBottom: 8 } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, height: 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL };
_createForOfIteratorHelperLoose.progressBackground = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.progressForeground = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE_BACKGROUND, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, height: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.STATUS_POSITIVE_BACKGROUND, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, height: 8 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_onboarding_home/native/NewMemberActionsProgress.tsx");

export const NewMemberActionsProgress = function NewMemberActionsProgress(guildId) {
  guildId = guildId.guildId;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = guildId(stateFromStores1[11]);
  const items = [closure_6];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getNewMemberActions(guildId), items1);
  let obj1 = guildId(stateFromStores1[11]);
  const items2 = [closure_7];
  stateFromStores1 = obj1.useStateFromStores(items2, () => outer1_7.getCompletedActions(guildId));
  let obj2 = guildId(stateFromStores1[11]);
  const items3 = [_isNativeReflectConstruct];
  const stateFromStores2 = obj2.useStateFromStores(items3, () => outer1_5.getSelfMember(guildId));
  let length;
  if (null != stateFromStores) {
    length = stateFromStores.length;
  }
  let num = 0;
  if (null != length) {
    num = length;
  }
  const items4 = [stateFromStores1, stateFromStores];
  const memo = React.useMemo(() => {
    if (null != stateFromStores) {
      if (null != stateFromStores1) {
        let c0 = 0;
        const item = stateFromStores.forEach((arg0) => {
          if (null != outer1_2[arg0.channelId]) {
            closure_0 = closure_0 + 1;
          }
        });
        return c0;
      }
    }
    return 0;
  }, items4);
  let obj3 = guildId(stateFromStores1[12]);
  let flags;
  if (null != stateFromStores2) {
    flags = stateFromStores2.flags;
  }
  let num2 = 0;
  if (null != flags) {
    num2 = flags;
  }
  let tmp7 = null;
  if (!obj3.hasFlag(num2, GuildMemberFlags.COMPLETED_HOME_ACTIONS)) {
    tmp7 = null;
    if (0 !== num) {
      tmp7 = null;
      if (memo + num !== 0) {
        obj = {
          accessibilityRole: "button",
          activeOpacity: 0.4,
          style: tmp.container,
          onPress() {
                  guildId(stateFromStores1[14]).transitionTo(outer1_8.GUILD_HOME);
                }
        };
        obj = {};
        const items5 = [, , ];
        ({ horizontal: arr7[0], spaceBetween: arr7[1], spaceBelow: arr7[2] } = tmp);
        obj.style = items5;
        obj1 = { variant: "text-xs/bold", color: "mobile-text-heading-primary" };
        const intl = guildId(stateFromStores1[16]).intl;
        obj1.children = intl.string(guildId(stateFromStores1[16]).t.LhlgY9);
        const items6 = [callback(guildId(stateFromStores1[15]).Text, obj1), ];
        obj2 = { style: tmp.horizontal };
        obj3 = { variant: "text-xs/bold", color: "mobile-text-heading-primary", children: memo };
        const items7 = [callback(guildId(stateFromStores1[15]).Text, obj3), callback(guildId(stateFromStores1[15]).Text, { variant: "text-xs/medium", color: "text-default", children: "/" }), , ];
        const obj4 = { variant: "text-xs/bold", color: "mobile-text-heading-primary", children: num };
        items7[2] = callback(guildId(stateFromStores1[15]).Text, obj4);
        const obj5 = { size: guildId(stateFromStores1[17]).Icon.Sizes.REFRESH_SMALL_16, source: stateFromStores(stateFromStores1[18]) };
        items7[3] = callback(guildId(stateFromStores1[17]).Icon, obj5);
        obj2.children = items7;
        items6[1] = callback2(View, obj2);
        obj.children = items6;
        const items8 = [callback2(View, obj), ];
        const obj6 = { percent: memo / num * 100 + 3 };
        items8[1] = callback(ProgressBar, obj6);
        obj.children = items8;
        tmp7 = callback2(guildId(stateFromStores1[13]).PressableOpacity, obj);
      }
    }
  }
  return tmp7;
};
