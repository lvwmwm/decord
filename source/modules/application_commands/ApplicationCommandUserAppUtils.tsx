// Module ID: 7756
// Function ID: 61601
// Name: getEphemeralReasonMessage
// Dependencies: []
// Exports: getEphemeralReasonMessage

// Module 7756 (getEphemeralReasonMessage)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/application_commands/ApplicationCommandUserAppUtils.tsx");

export const getEphemeralReasonMessage = function getEphemeralReasonMessage(ephemerality_reason1) {
  if (require(dependencyMap[0]).EphemeralMessageReason.FEATURE_LIMITED === ephemerality_reason1) {
    const intl19 = require(dependencyMap[1]).intl;
    return intl19.string(require(dependencyMap[1]).t.WCvmrR);
  } else if (require(dependencyMap[0]).EphemeralMessageReason.GUILD_FEATURE_LIMITED === ephemerality_reason1) {
    const intl18 = require(dependencyMap[1]).intl;
    return intl18.string(require(dependencyMap[1]).t.0QUDYf);
  } else if (require(dependencyMap[0]).EphemeralMessageReason.USER_FEATURE_LIMITED === ephemerality_reason1) {
    const intl17 = require(dependencyMap[1]).intl;
    return intl17.string(require(dependencyMap[1]).t.gs1sxd);
  } else if (require(dependencyMap[0]).EphemeralMessageReason.SLOWMODE === ephemerality_reason1) {
    const intl16 = require(dependencyMap[1]).intl;
    return intl16.string(require(dependencyMap[1]).t.9UAXh4);
  } else if (require(dependencyMap[0]).EphemeralMessageReason.RATE_LIMIT === ephemerality_reason1) {
    const intl15 = require(dependencyMap[1]).intl;
    return intl15.string(require(dependencyMap[1]).t.zBB9xD);
  } else if (require(dependencyMap[0]).EphemeralMessageReason.CANNOT_MESSAGE_USER === ephemerality_reason1) {
    const intl14 = require(dependencyMap[1]).intl;
    return intl14.string(require(dependencyMap[1]).t.w7sHnP);
  } else if (require(dependencyMap[0]).EphemeralMessageReason.USER_VERIFICATION_LEVEL === ephemerality_reason1) {
    const intl13 = require(dependencyMap[1]).intl;
    return intl13.string(require(dependencyMap[1]).t.SLAkFX);
  } else if (require(dependencyMap[0]).EphemeralMessageReason.CANNOT_UNARCHIVE_THREAD === ephemerality_reason1) {
    const intl12 = require(dependencyMap[1]).intl;
    return intl12.string(require(dependencyMap[1]).t.AIqS3n);
  } else if (require(dependencyMap[0]).EphemeralMessageReason.CANNOT_JOIN_THREAD === ephemerality_reason1) {
    const intl11 = require(dependencyMap[1]).intl;
    return intl11.string(require(dependencyMap[1]).t.BqKxlT);
  } else if (require(dependencyMap[0]).EphemeralMessageReason.MISSING_PERMISSIONS === ephemerality_reason1) {
    const intl10 = require(dependencyMap[1]).intl;
    return intl10.string(require(dependencyMap[1]).t.LLF2DJ);
  } else if (require(dependencyMap[0]).EphemeralMessageReason.CANNOT_SEND_ATTACHMENTS === ephemerality_reason1) {
    const intl9 = require(dependencyMap[1]).intl;
    return intl9.string(require(dependencyMap[1]).t.Htl7W1);
  } else if (require(dependencyMap[0]).EphemeralMessageReason.CANNOT_SEND_EMBEDS === ephemerality_reason1) {
    const intl8 = require(dependencyMap[1]).intl;
    return intl8.string(require(dependencyMap[1]).t.vGgPMH);
  } else if (require(dependencyMap[0]).EphemeralMessageReason.CANNOT_SEND_STICKERS === ephemerality_reason1) {
    const intl7 = require(dependencyMap[1]).intl;
    return intl7.string(require(dependencyMap[1]).t.byrr7l);
  } else if (require(dependencyMap[0]).EphemeralMessageReason.AUTOMOD_BLOCKED === ephemerality_reason1) {
    const intl6 = require(dependencyMap[1]).intl;
    return intl6.string(require(dependencyMap[1]).t.24PAJ+);
  } else if (require(dependencyMap[0]).EphemeralMessageReason.HARMFUL_LINK === ephemerality_reason1) {
    const intl5 = require(dependencyMap[1]).intl;
    return intl5.string(require(dependencyMap[1]).t.zeqgmP);
  } else if (require(dependencyMap[0]).EphemeralMessageReason.CANNOT_USE_COMMAND === ephemerality_reason1) {
    const intl4 = require(dependencyMap[1]).intl;
    return intl4.string(require(dependencyMap[1]).t.kzMhhk);
  } else if (require(dependencyMap[0]).EphemeralMessageReason.BETA_GUILD_SIZE === ephemerality_reason1) {
    const intl3 = require(dependencyMap[1]).intl;
    return intl3.string(require(dependencyMap[1]).t.Af3rGY);
  } else if (require(dependencyMap[0]).EphemeralMessageReason.CANNOT_USE_EXTERNAL_APPS === ephemerality_reason1) {
    const intl2 = require(dependencyMap[1]).intl;
    return intl2.string(require(dependencyMap[1]).t.Ji4l7E);
  } else {
    const intl = require(dependencyMap[1]).intl;
    return intl.string(require(dependencyMap[1]).t.v/OAcs);
  }
};
