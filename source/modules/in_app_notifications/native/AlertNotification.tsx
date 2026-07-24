// Module ID: 10365
// Function ID: 79973
// Name: AlertNotification
// Dependencies: [31, 27, 33, 5513, 7961, 689, 4130, 10269, 1212, 4138, 10339, 7631, 10284, 2]
// Exports: default

// Module 10365 (AlertNotification)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
let obj = { shape: require("SolidCutout").CutoutShape.RoundedRect, x: require("makeSizeStyle").ImageSizes[require("makeSizeStyle").GuildIconSizes.NORMAL] - -6 - 24, y: -6, width: 24, height: 24, cornerRadius: require("_createForOfIteratorHelperLoose").radii.sm };
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ warningBadge: { position: "absolute", top: -6, right: -6, width: 24, height: 24, alignItems: "center", justifyContent: "center" }, warningIcon: { width: 16, height: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/in_app_notifications/native/AlertNotification.tsx");

export default function AlertNotification(notification) {
  notification = notification.notification;
  const channel = notification.channel;
  const guild = notification.guild;
  const tmp = callback3();
  let obj = channel(10269);
  const incidentData = obj.useGuildIncidentsState(notification.key).incidentData;
  let raidDetectedAt;
  if (null != incidentData) {
    raidDetectedAt = incidentData.raidDetectedAt;
  }
  if (null != raidDetectedAt) {
    const intl2 = channel(1212).intl;
    let stringResult = intl2.string(channel(1212).t.Mn3elp);
  } else {
    let intl = channel(1212).intl;
    stringResult = intl.string(channel(1212).t.evRhwg);
  }
  const items = [guild];
  const items1 = [channel.id];
  const memo = React.useMemo(() => {
    const obj = { type: "simple" };
    let name;
    const intl = channel(outer1_2[8]).intl;
    obj.text = intl.string(channel(outer1_2[8]).t["2IY4YN"]);
    if (null != guild) {
      name = guild.name;
    }
    obj.secondaryText = name;
    return obj;
  }, items);
  const callback = React.useCallback(() => {
    channel(outer1_2[9]).transitionToChannel(channel.id, { navigationReplace: true });
  }, items1);
  obj = {};
  obj = {};
  const obj1 = { cutouts: items2 };
  items2 = [obj];
  obj1.children = callback(guild(5513), { guild, selected: false });
  const items3 = [callback(guild(7961), obj1), ];
  const obj2 = { style: tmp.warningBadge };
  const obj3 = { style: tmp.warningIcon, color: guild(689).colors.ICON_FEEDBACK_WARNING };
  obj2.children = callback(channel(7631).WarningIcon, obj3);
  items3[1] = callback(View, obj2);
  obj.children = items3;
  obj.icon = callback2(closure_6, obj);
  obj.header = memo;
  const obj4 = { text: stringResult };
  obj.children = callback(channel(10284).SystemMessageText, obj4);
  obj.onPress = callback;
  obj.notification = notification;
  return callback(channel(10339).NotificationPressable, obj);
};
