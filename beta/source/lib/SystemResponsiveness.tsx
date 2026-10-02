// Module ID: 13365
// Function ID: 13366
// Name: SystemResponsiveness
// Dependencies: [7165, 4892, 12, 2]

// Module 13365 (SystemResponsiveness)
import _modDef12 from "module_12" /* 12 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4892 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/SystemResponsiveness.tsx");
class SystemResponsiveness {
  constructor(connection) {
    const obj = Object.create(new.target.prototype);
    obj.sampleStats = function sampleStats(rtp) {
      if (null != rtp) {
        const arr = _modDef12;
        const item = arr.forEach(rtp.rtp.outbound, (type) => {
          if ("audio" === type.type) {
            let prop = type.pttQueueLatencyMicrosSamples;
            if (prop == null) {
              prop = [];
            }
            const iter = prop[Symbol.iterator]();
            while (iter !== undefined) {
              let pttQueueLatencyHistogram = obj.pttQueueLatencyHistogram;
              let addSampleResult = pttQueueLatencyHistogram.addSample(iter.next() / 1000);
              continue;
            }
          }
        });
      }
    };
    obj.connection = connection;
    const histogram = new obj(7165).Histogram();
    obj.pttQueueLatencyHistogram = histogram;
    return obj;
  }
  start() {
    const connection = this.connection;
    connection.on(BaseConnectionEvent.BaseConnectionEvent.Stats, this.sampleStats);
  }
  stop() {
    const connection = this.connection;
    connection.off(BaseConnectionEvent.BaseConnectionEvent.Stats, this.sampleStats);
  }
  getPttQueueLatencyStats() {
    const pttQueueLatencyHistogram = this.pttQueueLatencyHistogram;
    const report = pttQueueLatencyHistogram.getReport([50, 95]);
    return { ptt_queue_latency_max: report.max, ptt_queue_latency_mean: report.mean, ptt_queue_latency_p50: report.percentiles[50], ptt_queue_latency_p95: report.percentiles[95], ptt_queue_latency_samples: report.samples };
  }
}
const prototype = SystemResponsiveness.prototype;

export default SystemResponsiveness;
