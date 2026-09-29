// Module ID: 17826
// Function ID: 17827
// Name: codedLinkQueue
// Dependencies: [3, 17827, 2]
// Exports: queueMessageLinkFetch

// Module 17826 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef17827 from "module_17827" /* 17827 */;

const logger = new LoggerDefault("codedLinkQueue");
const obj = new _modDef17827({ concurrency: 5, intervalCap: 10, interval: 2000 });
obj.on("add", () => {
  if (obj.size > 0) {
    logger.warn("Message link fetch queue backlog:", tmp.size);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/coded_links/codedLinkQueue.tsx");

export const queueMessageLinkFetch = function queueMessageLinkFetch(arg0) {
  obj.add(arg0);
};
