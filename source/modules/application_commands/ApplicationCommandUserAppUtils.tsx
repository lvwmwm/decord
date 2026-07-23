// Module ID: 7762
// Function ID: 61648
// Name: getEphemeralReasonMessage
// Dependencies: [7763, 1212, 2]
// Exports: getEphemeralReasonMessage

// Module 7762 (getEphemeralReasonMessage)
const result = require("set").fileFinishedImporting("modules/application_commands/ApplicationCommandUserAppUtils.tsx");

export const getEphemeralReasonMessage = function getEphemeralReasonMessage(ephemerality_reason1) {
  if (require(7763) /* EphemeralMessageReason */.EphemeralMessageReason.FEATURE_LIMITED === ephemerality_reason1) {
    const intl19 = require(1212) /* getSystemLocale */.intl;
    return intl19.string(require(1212) /* getSystemLocale */.t.WCvmrR);
  } else if (require(7763) /* EphemeralMessageReason */.EphemeralMessageReason.GUILD_FEATURE_LIMITED === ephemerality_reason1) {
    const intl18 = require(1212) /* getSystemLocale */.intl;
    return intl18.string(require(1212) /* getSystemLocale */.t["0QUDYf"]);
  } else if (require(7763) /* EphemeralMessageReason */.EphemeralMessageReason.USER_FEATURE_LIMITED === ephemerality_reason1) {
    const intl17 = require(1212) /* getSystemLocale */.intl;
    return intl17.string(require(1212) /* getSystemLocale */.t.gs1sxd);
  } else if (require(7763) /* EphemeralMessageReason */.EphemeralMessageReason.SLOWMODE === ephemerality_reason1) {
    const intl16 = require(1212) /* getSystemLocale */.intl;
    return intl16.string(require(1212) /* getSystemLocale */.t["9UAXh4"]);
  } else if (require(7763) /* EphemeralMessageReason */.EphemeralMessageReason.RATE_LIMIT === ephemerality_reason1) {
    const intl15 = require(1212) /* getSystemLocale */.intl;
    return intl15.string(require(1212) /* getSystemLocale */.t.zBB9xD);
  } else if (require(7763) /* EphemeralMessageReason */.EphemeralMessageReason.CANNOT_MESSAGE_USER === ephemerality_reason1) {
    const intl14 = require(1212) /* getSystemLocale */.intl;
    return intl14.string(require(1212) /* getSystemLocale */.t.w7sHnP);
  } else if (require(7763) /* EphemeralMessageReason */.EphemeralMessageReason.USER_VERIFICATION_LEVEL === ephemerality_reason1) {
    const intl13 = require(1212) /* getSystemLocale */.intl;
    return intl13.string(require(1212) /* getSystemLocale */.t.SLAkFX);
  } else if (require(7763) /* EphemeralMessageReason */.EphemeralMessageReason.CANNOT_UNARCHIVE_THREAD === ephemerality_reason1) {
    const intl12 = require(1212) /* getSystemLocale */.intl;
    return intl12.string(require(1212) /* getSystemLocale */.t.AIqS3n);
  } else if (require(7763) /* EphemeralMessageReason */.EphemeralMessageReason.CANNOT_JOIN_THREAD === ephemerality_reason1) {
    const intl11 = require(1212) /* getSystemLocale */.intl;
    return intl11.string(require(1212) /* getSystemLocale */.t.BqKxlT);
  } else if (require(7763) /* EphemeralMessageReason */.EphemeralMessageReason.MISSING_PERMISSIONS === ephemerality_reason1) {
    const intl10 = require(1212) /* getSystemLocale */.intl;
    return intl10.string(require(1212) /* getSystemLocale */.t.LLF2DJ);
  } else if (require(7763) /* EphemeralMessageReason */.EphemeralMessageReason.CANNOT_SEND_ATTACHMENTS === ephemerality_reason1) {
    const intl9 = require(1212) /* getSystemLocale */.intl;
    return intl9.string(require(1212) /* getSystemLocale */.t.Htl7W1);
  } else if (require(7763) /* EphemeralMessageReason */.EphemeralMessageReason.CANNOT_SEND_EMBEDS === ephemerality_reason1) {
    const intl8 = require(1212) /* getSystemLocale */.intl;
    return intl8.string(require(1212) /* getSystemLocale */.t.vGgPMH);
  } else if (require(7763) /* EphemeralMessageReason */.EphemeralMessageReason.CANNOT_SEND_STICKERS === ephemerality_reason1) {
    const intl7 = require(1212) /* getSystemLocale */.intl;
    return intl7.string(require(1212) /* getSystemLocale */.t.byrr7l);
  } else if (require(7763) /* EphemeralMessageReason */.EphemeralMessageReason.AUTOMOD_BLOCKED === ephemerality_reason1) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    return intl6.string(require(1212) /* getSystemLocale */.t["24PAJ+"]);
  } else if (require(7763) /* EphemeralMessageReason */.EphemeralMessageReason.HARMFUL_LINK === ephemerality_reason1) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t.zeqgmP);
  } else if (require(7763) /* EphemeralMessageReason */.EphemeralMessageReason.CANNOT_USE_COMMAND === ephemerality_reason1) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.kzMhhk);
  } else if (require(7763) /* EphemeralMessageReason */.EphemeralMessageReason.BETA_GUILD_SIZE === ephemerality_reason1) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.Af3rGY);
  } else if (require(7763) /* EphemeralMessageReason */.EphemeralMessageReason.CANNOT_USE_EXTERNAL_APPS === ephemerality_reason1) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.Ji4l7E);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["v/OAcs"]);
  }
};
