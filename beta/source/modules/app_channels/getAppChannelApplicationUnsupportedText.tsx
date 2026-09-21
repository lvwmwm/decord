// Module ID: 9810
// Function ID: 9811
// Name: getAppChannelApplicationUnsupportedText
// Dependencies: [9811, 1119, 2]
// Exports: default

// Module 9810 (getAppChannelApplicationUnsupportedText)
import GuildEmbeddedApplicationUnsupportedReason from "GuildEmbeddedApplicationUnsupportedReason" /* 9811 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/getAppChannelApplicationUnsupportedText.tsx");

export default function getAppChannelApplicationUnsupportedText(supported) {
  if (!supported.supported) {
    const reason = supported.reason;
    if (GuildEmbeddedApplicationUnsupportedReason.GuildEmbeddedApplicationUnsupportedReason.REQUIRES_BOT === reason) {
      const intl3 = tmp(1119).intl;
      return intl3.string(tmp(1119).t.V4y5nG);
    } else if (tmp(9811).GuildEmbeddedApplicationUnsupportedReason.SURFACE_NOT_SUPPORTED === reason) {
      const intl2 = tmp(1119).intl;
      return intl2.string(tmp(1119).t["iUWcU/"]);
    } else {
      const intl = tmp(1119).intl;
      return intl.string(tmp(1119).t.GZa4J0);
    }
  }
};
