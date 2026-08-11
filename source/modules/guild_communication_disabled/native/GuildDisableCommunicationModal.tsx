// Module ID: 11245
// Function ID: 11246
// Name: GuildDisableCommunicationModal
// Dependencies: [19, 21, 9681, 9682, 1236, 4493, 11246, 2]
// Exports: default

// Module 11245 (GuildDisableCommunicationModal)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useNavigatorBackHandler").fileFinishedImporting("modules/guild_communication_disabled/native/GuildDisableCommunicationModal.tsx");

export default function GuildDisableCommunicationModal(onBeforeGoBack) {
  const guildId = onBeforeGoBack.guildId;
  const user = onBeforeGoBack.user;
  let onGoBack;
  onGoBack = user(onGoBack[2])({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
  let obj = { screenKey: "disableCommunication", title: null, render: null };
  const intl = guildId(onGoBack[4]).intl;
  obj = { user: null };
  const tmp = user(onGoBack[3]);
  obj[0] = user(onGoBack[5]).getName(guildId, null, user);
  obj[1] = intl.formatToPlainString(guildId(onGoBack[4]).t.FN7NIS, obj);
  obj[2] = function render() {
    return outer1_3(user(onGoBack[6]), { user, guildId, onClose: onGoBack });
  };
  return <tmp user={null} />;
};
