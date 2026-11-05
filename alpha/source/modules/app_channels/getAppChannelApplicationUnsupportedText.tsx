// Module ID: 9195
// Function ID: 9196
// Name: getAppChannelApplicationUnsupportedText
// Dependencies: [9196, 1113, 2]
// Exports: default

// Module 9195 (getAppChannelApplicationUnsupportedText)
import intl4 from "intl" /* 1113 */;
import GuildEmbeddedApplicationUnsupportedReason from "GuildEmbeddedApplicationUnsupportedReason" /* 9196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/getAppChannelApplicationUnsupportedText.tsx");

export default function getAppChannelApplicationUnsupportedText(supported) {
  if (!supported.supported) {
    const reason = supported.reason;
    if (GuildEmbeddedApplicationUnsupportedReason.GuildEmbeddedApplicationUnsupportedReason.REQUIRES_BOT === reason) {
      const intl3 = tmp(1113).intl;
      return intl3.string(intl4.t.V4y5nG);
    } else if (GuildEmbeddedApplicationUnsupportedReason.GuildEmbeddedApplicationUnsupportedReason.SURFACE_NOT_SUPPORTED === reason) {
      const intl2 = tmp(1113).intl;
      return intl2.string(intl4.t["iUWcU/"]);
    } else {
      const intl = tmp(1113).intl;
      return intl.string(intl4.t.GZa4J0);
    }
  }
};
