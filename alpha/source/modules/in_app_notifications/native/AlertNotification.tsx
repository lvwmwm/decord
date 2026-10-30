// Module ID: 11110
// Function ID: 11111
// Name: AlertNotification
// Dependencies: [19, 17, 21, 6951, 9487, 575, 5009, 11006, 1114, 5751, 11057, 8018, 11018, 2]
// Exports: default

// Module 11110 (AlertNotification)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import transitionToChannel from "transitionToChannel" /* 5751 */;
import GuildIcon from "GuildIcon" /* 6951 */;
import ClipView from "ClipView" /* 9487 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp3;
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let size = { shape: ClipView.CutoutShape.RoundedRect, x: tmp3 - -6 - 24, y: -6, width: 24, height: 24, cornerRadius: nativeDefault.radii.sm };
tmp3 = GuildIcon.ImageSizes[GuildIcon.GuildIconSizes.NORMAL];
let closure_9 = createStyles.createStyles({ warningBadge: { position: "absolute", top: -6, right: -6, width: 24, height: 24, alignItems: "center", justifyContent: "center" }, warningIcon: { width: 16, height: 16 } });
size = size_mod;
const result = size.fileFinishedImporting("modules/in_app_notifications/native/AlertNotification.tsx");

export default function AlertNotification(notification) {
  let WarningIcon;
  let items2;
  let items3;
  let obj3;
  let obj6;
  let stringResult;
  notification = notification.notification;
  const channel = notification.channel;
  const guild = notification.guild;
  const key = notification.key;
  const tmp = closure_9();
  let obj = channel(11006);
  const incidentData = obj.useGuildIncidentsState(key).incidentData;
  let raidDetectedAt;
  if (incidentData != null) {
    raidDetectedAt = incidentData.raidDetectedAt;
  }
  if (null != raidDetectedAt) {
    const intl2 = tmp2(1114).intl;
    stringResult = intl2.string(tmp2(1114).t.Mn3elp);
  } else {
    let intl = tmp2(1114).intl;
    stringResult = intl.string(tmp2(1114).t.evRhwg);
  }
  const items = [guild];
  const items1 = [channel.id];
  const memo = react.useMemo(() => {
    let intl;
    let name;
    const obj = { type: "simple", text: intl.string(intl3.t["2IY4YN"]), secondaryText: name };
    intl = intl3.intl;
    name = undefined;
    if (guild != null) {
      name = guild.name;
    }
    return obj;
  }, items);
  const callback = react.useCallback(() => {
    const obj = transitionToChannel;
    obj.transitionToChannel(channel.id, { navigationReplace: true });
  }, items1);
  const obj2 = { icon: closure_7(closure_6, obj3), header: memo, children: closure_5(channel(11018).SystemMessageText, { text: stringResult }), onPress: callback, notification };
  obj3 = { children: items3 };
  const NotificationPressable = tmp2(11057).NotificationPressable;
  const obj4 = { cutouts: items2, children: closure_5(guild(6951), { guild, selected: false }) };
  items2 = [size];
  const tmp8 = guild(9487);
  items3 = [closure_5(tmp8, obj4), ];
  const obj5 = { style: tmp.warningBadge, children: closure_5(WarningIcon, obj6) };
  obj6 = { style: tmp.warningIcon, color: guild(575).colors.ICON_FEEDBACK_WARNING };
  WarningIcon = tmp2(8018).WarningIcon;
  items3[1] = closure_5(View, obj5);
  return closure_5(NotificationPressable, obj2);
};
