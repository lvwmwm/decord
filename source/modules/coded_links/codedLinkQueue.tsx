// Module ID: 16341
// Function ID: 16342
// Name: queueMessageLinkFetch
// Dependencies: [3, 16342, 2]
// Exports: queueMessageLinkFetch

// Module 16341 (queueMessageLinkFetch)
let c0 = new require("timestamp")("codedLinkQueue");
const obj = new require("_isNativeReflectConstruct")({ concurrency: 5, intervalCap: 10, interval: 2000 });
obj.on("add", () => {
  if (obj.size > 0) {
    tmp2.warn("Message link fetch queue backlog:", tmp.size);
  }
});
const tmp2 = new require("timestamp")("codedLinkQueue");
const result = require("set").fileFinishedImporting("modules/coded_links/codedLinkQueue.tsx");

export const queueMessageLinkFetch = function queueMessageLinkFetch(arg0) {
  obj.add(arg0);
};
