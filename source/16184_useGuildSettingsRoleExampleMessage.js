// Module ID: 16184
// Function ID: 125085
// Name: useGuildSettingsRoleExampleMessage
// Dependencies: []
// Exports: useGuildSettingsRoleExampleMessage

// Module 16184 (useGuildSettingsRoleExampleMessage)
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
    const obj1 = { y: "94dc9b38f111b503d8ad130993060a96", isArray: "intro_header_dark", opacity: "png", dispatch: true };
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
