// Module ID: 9002
// Function ID: 9003
// Name: getAppChannelApplicationUnsupportedText
// Dependencies: [9003, 1127, 2]
// Exports: default

// Module 9002 (getAppChannelApplicationUnsupportedText)
import intl4 from "intl" /* 1127 */;
import GuildEmbeddedApplicationUnsupportedReason from "GuildEmbeddedApplicationUnsupportedReason" /* 9003 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/getAppChannelApplicationUnsupportedText.tsx");

export default function getAppChannelApplicationUnsupportedText(supported) {
  if (!supported.supported) {
    const reason = supported.reason;
    if (GuildEmbeddedApplicationUnsupportedReason.GuildEmbeddedApplicationUnsupportedReason.REQUIRES_BOT === reason) {
      const intl3 = tmp(1127).intl;
      return intl3.string(intl4.t.V4y5nG);
    } else if (GuildEmbeddedApplicationUnsupportedReason.GuildEmbeddedApplicationUnsupportedReason.SURFACE_NOT_SUPPORTED === reason) {
      const intl2 = tmp(1127).intl;
      return intl2.string(intl4.t["iUWcU/"]);
    } else {
      const intl = tmp(1127).intl;
      return intl.string(intl4.t.GZa4J0);
    }
  }
};
