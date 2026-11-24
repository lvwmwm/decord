// Module ID: 14276
// Function ID: 14277
// Name: isConjureProjectLinkEmbed
// Dependencies: [1071, 5661, 2]
// Exports: default

// Module 14276 (isConjureProjectLinkEmbed)
import Constants from "Constants" /* 1071 */;
import conjureProjectLink from "conjureProjectLink" /* 5661 */;
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
