// Module ID: 10968
// Function ID: 85310
// Name: GuildDisableCommunicationModal
// Dependencies: [31, 33, 9038, 9040, 1212, 4320, 10969, 2]
// Exports: default

// Module 10968 (GuildDisableCommunicationModal)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useNavigatorBackHandler").fileFinishedImporting("modules/guild_communication_disabled/native/GuildDisableCommunicationModal.tsx");

export default function GuildDisableCommunicationModal(onBeforeGoBack) {
  const guildId = onBeforeGoBack.guildId;
  const user = onBeforeGoBack.user;
  onGoBack = user(onGoBack[2])({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
  let obj = { screenKey: "disableCommunication" };
  const intl = guildId(onGoBack[4]).intl;
  obj = {};
  const tmp = user(onGoBack[3]);
  obj.user = user(onGoBack[5]).getName(guildId, null, user);
  obj.title = intl.formatToPlainString(guildId(onGoBack[4]).t.FN7NIS, obj);
  obj.render = function render() {
    return outer1_3(user(onGoBack[6]), { user, guildId, onClose: onGoBack });
  };
  return <tmp />;
};
