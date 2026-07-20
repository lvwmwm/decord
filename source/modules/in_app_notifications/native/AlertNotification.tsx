// Module ID: 10316
// Function ID: 79665
// Name: AlertNotification
// Dependencies: []
// Exports: default

// Module 10316 (AlertNotification)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
const obj = { position: "showAllButtonUnderline", padding: "toggleVoiceChannelChat", marginTop: "ig", paddingTop: "ZENDESK", marginBottom: "em", shape: arg1(dependencyMap[4]).CutoutShape.RoundedRect, x: arg1(dependencyMap[3]).ImageSizes[arg1(undefined, dependencyMap[3]).GuildIconSizes.NORMAL] - -6 - 24, cornerRadius: importDefault(dependencyMap[5]).radii.sm };
const tmp2 = arg1(dependencyMap[2]);
let closure_9 = arg1(dependencyMap[6]).createStyles({ warningBadge: {}, warningIcon: { aze: "<string:16777479>", azj: "<string:36295491>" } });
const obj2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/in_app_notifications/native/AlertNotification.tsx");

export default function AlertNotification(notification) {
  notification = notification.notification;
  const channel = notification.channel;
  const arg1 = channel;
  const guild = notification.guild;
  const importDefault = guild;
  const tmp = callback3();
  let obj = arg1(dependencyMap[7]);
  const incidentData = obj.useGuildIncidentsState(notification.key).incidentData;
  let raidDetectedAt;
  if (null != incidentData) {
    raidDetectedAt = incidentData.raidDetectedAt;
  }
  if (null != raidDetectedAt) {
    const intl2 = arg1(dependencyMap[8]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[8]).t.Mn3elp);
  } else {
    const intl = arg1(dependencyMap[8]).intl;
    stringResult = intl.string(arg1(dependencyMap[8]).t.evRhwg);
  }
  const items = [guild];
  const items1 = [channel.id];
  const memo = React.useMemo(() => {
    const obj = { type: "simple" };
    let name;
    const intl = channel(closure_2[8]).intl;
    obj.text = intl.string(channel(closure_2[8]).t.2IY4YN);
    if (null != guild) {
      name = guild.name;
    }
    obj.secondaryText = name;
    return obj;
  }, items);
  const callback = React.useCallback(() => {
    channel(closure_2[9]).transitionToChannel(channel.id, { navigationReplace: true });
  }, items1);
  obj = {};
  obj = {};
  const obj1 = { cutouts: items2 };
  const items2 = [obj];
  obj1.children = callback(importDefault(dependencyMap[3]), { guild, selected: false });
  const items3 = [callback(importDefault(dependencyMap[4]), obj1), ];
  const obj2 = { style: tmp.warningBadge };
  const obj3 = { style: tmp.warningIcon, color: importDefault(dependencyMap[5]).colors.ICON_FEEDBACK_WARNING };
  obj2.children = callback(arg1(dependencyMap[11]).WarningIcon, obj3);
  items3[1] = callback(View, obj2);
  obj.children = items3;
  obj.icon = callback2(closure_6, obj);
  obj.header = memo;
  const obj4 = { text: stringResult };
  obj.children = callback(arg1(dependencyMap[12]).SystemMessageText, obj4);
  obj.onPress = callback;
  obj.notification = notification;
  return callback(arg1(dependencyMap[10]).NotificationPressable, obj);
};
