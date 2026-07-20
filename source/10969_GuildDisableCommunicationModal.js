// Module ID: 10969
// Function ID: 85406
// Name: GuildDisableCommunicationModal
// Dependencies: []
// Exports: default

// Module 10969 (GuildDisableCommunicationModal)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_communication_disabled/native/GuildDisableCommunicationModal.tsx");

export default function GuildDisableCommunicationModal(onBeforeGoBack) {
  const guildId = onBeforeGoBack.guildId;
  const arg1 = guildId;
  const user = onBeforeGoBack.user;
  const importDefault = user;
  const dependencyMap = importDefault(dependencyMap[2])({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
  let obj = { screenKey: "disableCommunication" };
  const intl = arg1(dependencyMap[4]).intl;
  obj = {};
  const tmp = importDefault(dependencyMap[3]);
  obj.user = importDefault(dependencyMap[5]).getName(guildId, null, user);
  obj.title = intl.formatToPlainString(arg1(dependencyMap[4]).t.FN7NIS, obj);
  obj.render = function render() {
    return callback(user(onGoBack[6]), { user, guildId, onClose: onGoBack });
  };
  return <tmp {...obj} />;
};
