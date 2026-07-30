// Module ID: 11549
// Function ID: 11550
// Dependencies: [19, 1944, 21, 11550, 11536, 11040, 1236, 2]

// Module 11549
import { GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK as closure_3 } from "getFriendlyDurationString";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function CommunicationDisabledNoticeForGuild(guildMember) {
  guildMember = guildMember.guildMember;
  let obj = require(11550) /* useCommunicationDisabledCountdownCleanup */;
  const communicationDisabledCountdownCleanup = obj.useCommunicationDisabledCountdownCleanup(guildMember);
  const communicationDisabledUntil = guildMember.communicationDisabledUntil;
  if (null == communicationDisabledUntil) {
    const _Date2 = Date;
    let date = new Date();
  } else {
    const _Date = Date;
    date = new Date(communicationDisabledUntil);
  }
  obj = { type: "simple-action", icon: null, message: null, subtext: null, countdown: null };
  obj[1] = jsx(require(11040) /* ClockWarningIcon */.ClockWarningIcon, {});
  const intl = tmp(1236).intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.VSpdzK);
  const intl2 = tmp(1236).intl;
  obj = { link: closure_3 };
  obj[3] = intl2.format(require(1236) /* getSystemLocale */.t["4ZwD5G"], obj);
  obj[4] = date;
  return jsx(importDefault(11536), { link: closure_3 });
});
const result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardGuildCommunicationDisabled.tsx");

export default memoResult;
