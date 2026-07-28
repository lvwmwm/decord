// Module ID: 11529
// Function ID: 89552
// Dependencies: [31, 1920, 33, 11530, 11516, 11020, 1212, 2]

// Module 11529
import { GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK as closure_3 } from "getFriendlyDurationString";
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const memoResult = require("result").memo(function CommunicationDisabledNoticeForGuild(guildMember) {
  guildMember = guildMember.guildMember;
  let obj = require(11530) /* useCommunicationDisabledCountdownCleanup */;
  const communicationDisabledCountdownCleanup = obj.useCommunicationDisabledCountdownCleanup(guildMember);
  const communicationDisabledUntil = guildMember.communicationDisabledUntil;
  if (null == communicationDisabledUntil) {
    const _Date2 = Date;
    let date = new Date();
  } else {
    const _Date = Date;
    date = new Date(communicationDisabledUntil);
  }
  obj = { type: "simple-action", icon: jsx(require(11020) /* ClockWarningIcon */.ClockWarningIcon, {}) };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.message = intl.string(require(1212) /* getSystemLocale */.t.VSpdzK);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj = { link: closure_3 };
  obj.subtext = intl2.format(require(1212) /* getSystemLocale */.t["4ZwD5G"], obj);
  obj.countdown = date;
  return jsx(importDefault(11516), { link: closure_3 });
});
const result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildCommunicationDisabled.tsx");

export default memoResult;
