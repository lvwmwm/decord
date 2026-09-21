// Module ID: 17824
// Function ID: 17825
// Name: codedLinkQueue
// Dependencies: [3, 17825, 2]
// Exports: queueMessageLinkFetch

// Module 17824 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef17825 from "module_17825" /* 17825 */;

const logger = new LoggerDefault("codedLinkQueue");
const obj = new _modDef17825({ concurrency: 5, intervalCap: 10, interval: 2000 });
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
