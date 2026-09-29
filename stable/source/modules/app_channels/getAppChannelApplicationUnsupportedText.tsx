// Module ID: 9864
// Function ID: 9865
// Name: getAppChannelApplicationUnsupportedText
// Dependencies: [9865, 1115, 2]
// Exports: default

// Module 9864 (getAppChannelApplicationUnsupportedText)
import GuildEmbeddedApplicationUnsupportedReason from "GuildEmbeddedApplicationUnsupportedReason" /* 9865 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/getAppChannelApplicationUnsupportedText.tsx");

export default function getAppChannelApplicationUnsupportedText(supported) {
  if (!supported.supported) {
    const reason = supported.reason;
    if (GuildEmbeddedApplicationUnsupportedReason.GuildEmbeddedApplicationUnsupportedReason.REQUIRES_BOT === reason) {
      const intl3 = tmp(1115).intl;
      return intl3.string(tmp(1115).t.V4y5nG);
    } else if (tmp(9865).GuildEmbeddedApplicationUnsupportedReason.SURFACE_NOT_SUPPORTED === reason) {
      const intl2 = tmp(1115).intl;
      return intl2.string(tmp(1115).t["iUWcU/"]);
    } else {
      const intl = tmp(1115).intl;
      return intl.string(tmp(1115).t.GZa4J0);
    }
  }
};
