// Module ID: 16207
// Function ID: 125219
// Name: useGuildSettingsRoleExampleMessage
// Dependencies: []
// Exports: useGuildSettingsRoleExampleMessage

// Module 16207 (useGuildSettingsRoleExampleMessage)
let closure_4 = importAll(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const MessageStates = arg1(dependencyMap[2]).MessageStates;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_settings/roles/hooks/useGuildSettingsRoleExampleMessage.tsx");

export const useGuildSettingsRoleExampleMessage = function useGuildSettingsRoleExampleMessage(intl) {
  const arg1 = intl;
  const items = [intl];
  return React.useMemo(() => {
    let obj = arg0(closure_3[3]);
    obj = {};
    obj = { channelId: "1337", content: arg0 };
    const merged = Object.assign(callback(closure_3[4])(obj));
    obj["state"] = constants.SENT;
    obj["id"] = "31337";
    const messageRecord = obj.createMessageRecord(obj);
    const obj1 = { "Null": true, "Null": "/assets/design/components/Illustration/native/redesign/generated/images", "Null": 375, "Null": 180 };
    const intl = arg0(closure_3[5]).intl;
    obj1.username = intl.string(arg0(closure_3[5]).t.cqpybK);
    const tmp3 = new closure_5(obj1);
    messageRecord.author = tmp3;
    const insertStaticUserResult = callback2(closure_3[6]).insertStaticUser(tmp3);
    if (null != insertStaticUserResult) {
      messageRecord.author = insertStaticUserResult;
      messageRecord.author.getAvatarURL = () => callback(closure_3[7]);
    }
    return messageRecord;
  }, items);
};
