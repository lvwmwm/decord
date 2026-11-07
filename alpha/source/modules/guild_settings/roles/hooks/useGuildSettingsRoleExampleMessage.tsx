// Module ID: 20191
// Function ID: 20192
// Name: useGuildSettingsRoleExampleMessage
// Dependencies: [19, 1404, 1072, 6196, 10438, 1113, 8823, 11319, 2]
// Exports: useGuildSettingsRoleExampleMessage

// Module 20191 (useGuildSettingsRoleExampleMessage)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import MessageRecordUtils from "MessageRecordUtils" /* 6196 */;
import UserActionCreatorsAll from "UserActionCreators" /* 8823 */;
import createMessageDefault from "createMessage" /* 10438 */;
import react from "react" /* 19 */;
import UserRecord from "UserRecord" /* 1404 */;
import size from "module_2" /* 2 */;

const MessageStates = Constants.MessageStates;
const result = size.fileFinishedImporting("modules/guild_settings/roles/hooks/useGuildSettingsRoleExampleMessage.tsx");

export function useGuildSettingsRoleExampleMessage(intl) {
  const content = intl;
  const items = [intl];
  return react.useMemo(() => {
    let intl;
    const obj = { state: MessageStates.SENT, id: "31337" };
    const createMessageRecord = MessageRecordUtils.createMessageRecord;
    const obj2 = { channelId: "1337", content };
    MessageRecordUtils;
    const merged = Object.assign(createMessageDefault(obj2));
    const messageRecord = createMessageRecord(obj);
    const obj3 = { id: "313337", username: intl.string(intl2.t.cqpybK), discriminator: "0000", bot: false };
    intl = intl2.intl;
    const tmp4 = new UserRecord(obj3);
    messageRecord.author = tmp4;
    const obj4 = UserActionCreatorsAll;
    const insertStaticUserResult = obj4.insertStaticUser(tmp4);
    if (null != insertStaticUserResult) {
      messageRecord.author = insertStaticUserResult;
      messageRecord.author.getAvatarURL = () => closure_1_1(closure_1_3[7]);
    }
    return messageRecord;
  }, items);
}
