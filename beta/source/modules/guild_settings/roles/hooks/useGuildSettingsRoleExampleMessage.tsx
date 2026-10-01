// Module ID: 17431
// Function ID: 17432
// Name: useGuildSettingsRoleExampleMessage
// Dependencies: [19, 1386, 1074, 5058, 7171, 1115, 7626, 12871, 2]
// Exports: useGuildSettingsRoleExampleMessage

// Module 17431 (useGuildSettingsRoleExampleMessage)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5058 */;
import createMessageDefault from "createMessage" /* 7171 */;
import UserActionCreatorsAll from "UserActionCreators" /* 7626 */;
import react from "react" /* 19 */;
import UserRecord from "UserRecord" /* 1386 */;
import size from "module_2" /* 2 */;

const MessageStates = Constants.MessageStates;
const result = size.fileFinishedImporting("modules/guild_settings/roles/hooks/useGuildSettingsRoleExampleMessage.tsx");

export const useGuildSettingsRoleExampleMessage = function useGuildSettingsRoleExampleMessage(intl) {
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
};
