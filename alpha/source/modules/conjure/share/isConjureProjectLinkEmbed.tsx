// Module ID: 8778
// Function ID: 8779
// Name: isConjureProjectLinkEmbed
// Dependencies: [1072, 8779, 2]
// Exports: default

// Module 8778 (isConjureProjectLinkEmbed)
import Constants from "Constants" /* 1072 */;
import conjureProjectLink from "conjureProjectLink" /* 8779 */;
import size from "module_2" /* 2 */;

const MessageEmbedTypes = Constants.MessageEmbedTypes;
const result = size.fileFinishedImporting("modules/conjure/share/isConjureProjectLinkEmbed.tsx");

export default function isConjureProjectLinkEmbed(url) {
  url = url.url;
  if (url.type !== MessageEmbedTypes.RICH) {
    if (null != url) {
      try {
        const _URL = URL;
        const self = this;
        const self2 = this;
        const parseConjureProjectLink = conjureProjectLink.parseConjureProjectLink;
        conjureProjectLink;
        const uRL = new URL(url);
        return null != parseConjureProjectLink(uRL);
      } catch (err) {
        return false;
      }
    }
  }
  return false;
};
