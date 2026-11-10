// Module ID: 8492
// Function ID: 8493
// Name: UnlinkedGamePlayerPlaceholders
// Dependencies: [1072, 2]
// Exports: getFirstMessagePerAuthor, isUnlinkedGamePlayerPlaceholder

// Module 8492 (UnlinkedGamePlayerPlaceholders)
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let set;

const MessageTypes = Constants.MessageTypes;
const re1 = /^Sent a message to .+ but has not yet linked their Discord account\.$/;
const result = size.fileFinishedImporting("modules/messages/UnlinkedGamePlayerPlaceholders.tsx");

export const MAX_NAMED_PLAYERS = 2;
export function isUnlinkedGamePlayerPlaceholder(linkedLobby, items1) {
  let isProvisional = null != linkedLobby.linkedLobby && items1.type === MessageTypes.DEFAULT && "1384671873593512078" === items1.applicationId;
  if (isProvisional) {
    isProvisional = null == items1.additionalName || "" === items1.additionalName;
    const tmp2 = null == items1.additionalName || "" === items1.additionalName;
  }
  if (isProvisional) {
    isProvisional = items1.author.isProvisional;
  }
  if (isProvisional) {
    isProvisional = 0 === items1.attachments.length;
  }
  if (isProvisional) {
    isProvisional = 0 === items1.embeds.length;
  }
  if (isProvisional) {
    isProvisional = re1.test(items1.content);
  }
  return isProvisional;
}
export function getFirstMessagePerAuthor(unlinkedGamePlayerPlaceholders) {
  set = new Set();
  const items = [];
  const iter = unlinkedGamePlayerPlaceholders[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (!set.has(nextResult.author.id)) {
      let addResult = set.add(tmp2.author.id);
      let arr = items.push(tmp2);
    }
    continue;
  }
  return items;
}
