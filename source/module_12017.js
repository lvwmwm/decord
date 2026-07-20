// Module ID: 12017
// Function ID: 92882
// Dependencies: []

// Module 12017
const View = arg1(dependencyMap[1]).View;
const useGuildInviteSendStates = arg1(dependencyMap[2]).useGuildInviteSendStates;
const InviteSendStates = arg1(dependencyMap[3]).InviteSendStates;
const jsx = arg1(dependencyMap[4]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function GuildInviteRow(arg0) {
  let end;
  let row;
  let start;
  ({ row, recipientId: closure_0, source: closure_1 } = arg0);
  let dependencyMap;
  function handlePress() {
    callback(guild[5]).sendGuildInvite(callback, guild.id, closure_1);
  }
  const guild = row.guild;
  dependencyMap = guild;
  ({ start, end } = arg0);
  const tmp = useGuildInviteSendStates((arg0) => {
    let tmp2;
    if (null != arg0[closure_0]) {
      tmp2 = tmp[closure_2.id];
    }
    return tmp2;
  });
  let obj = { display: 0, flexDirection: 0 };
  obj = { guild };
  const tmp2 = jsx(importDefault(dependencyMap[6]), { sendState: tmp, onPressSend: handlePress });
  obj.size = arg1(dependencyMap[7]).GuildIconSizes.SMALL;
  obj.children = jsx(importDefault(dependencyMap[7]), obj);
  const tmp3 = importDefault(dependencyMap[7]);
  obj = {};
  const intl = arg1(dependencyMap[9]).intl;
  obj.children = intl.format(arg1(dependencyMap[9]).t.zRl6XR, { count: row.memberCount });
  let tmp6 = tmp === InviteSendStates.SENDING;
  const obj1 = { count: row.memberCount };
  const tmp4 = <View {...obj} />;
  if (!tmp6) {
    tmp6 = tmp === InviteSendStates.SENT;
  }
  const obj2 = { icon: tmp4, label: guild.name, trailing: tmp2, subLabel: jsx(arg1(dependencyMap[8]).Text, obj), onPress: handlePress, disabled: tmp6 };
  const obj3 = { disabled: tmp6 };
  obj2.accessibilityState = obj3;
  obj2.start = start;
  obj2.end = end;
  return jsx(arg1(dependencyMap[10]).TableRow, obj2);
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteRow.tsx");

export default memoResult;
