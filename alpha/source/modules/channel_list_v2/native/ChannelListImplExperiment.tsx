// Module ID: 16957
// Function ID: 16958
// Name: ChannelListImplExperiment
// Dependencies: [1453, 2]

// Module 16957 (ChannelListImplExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-09-channel-list-impl", defaultConfig: { list: "fast" }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { list: "legend" };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListImplExperiment.tsx");

export default apexExperiment;
