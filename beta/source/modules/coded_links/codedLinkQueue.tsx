// Module ID: 17547
// Function ID: 17548
// Name: codedLinkQueue
// Dependencies: [3, 17548, 2]
// Exports: queueMessageLinkFetch

// Module 17547 (codedLinkQueue)
import LoggerDefault from "Logger" /* 3 */;
import _modDef17548 from "module_17548" /* 17548 */;
import size from "module_2" /* 2 */;

const logger = new LoggerDefault("codedLinkQueue");
const tmp2 = new LoggerDefault("codedLinkQueue");
const obj = new _modDef17548({ concurrency: 5, intervalCap: 10, interval: 2000 });
obj.on("add", () => {
  if (obj.size > 0) {
    logger.warn("Message link fetch queue backlog:", tmp.size);
  }
});
const result = size.fileFinishedImporting("modules/coded_links/codedLinkQueue.tsx");

export const queueMessageLinkFetch = function queueMessageLinkFetch(arg0) {
  obj.add(arg0);
};
