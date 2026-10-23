// Module ID: 8981
// Function ID: 8982
// Name: getAppChannelApplicationUnsupportedText
// Dependencies: [8982, 1128, 2]
// Exports: default

// Module 8981 (getAppChannelApplicationUnsupportedText)
import intl4 from "intl" /* 1128 */;
import GuildEmbeddedApplicationUnsupportedReason from "GuildEmbeddedApplicationUnsupportedReason" /* 8982 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/getAppChannelApplicationUnsupportedText.tsx");

export default function getAppChannelApplicationUnsupportedText(supported) {
  if (!supported.supported) {
    const reason = supported.reason;
    if (GuildEmbeddedApplicationUnsupportedReason.GuildEmbeddedApplicationUnsupportedReason.REQUIRES_BOT === reason) {
      const intl3 = tmp(1128).intl;
      return intl3.string(intl4.t.V4y5nG);
    } else if (GuildEmbeddedApplicationUnsupportedReason.GuildEmbeddedApplicationUnsupportedReason.SURFACE_NOT_SUPPORTED === reason) {
      const intl2 = tmp(1128).intl;
      return intl2.string(intl4.t["iUWcU/"]);
    } else {
      const intl = tmp(1128).intl;
      return intl.string(intl4.t.GZa4J0);
    }
  }
};
