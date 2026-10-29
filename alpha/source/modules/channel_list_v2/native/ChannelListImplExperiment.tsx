// Module ID: 18122
// Function ID: 18123
// Name: ChannelListImplExperiment
// Dependencies: [1453, 2]

// Module 18122 (ChannelListImplExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-10-channel-list-impl-v2", defaultConfig: { list: "fast", drawDistance: "viewport" }, variations: obj2 };
obj2 = { 1: null, 2: { list: "legend", drawDistance: "viewport" }, 3: { list: "legend", drawDistance: "default" }, 4: { list: "legend", drawDistance: "small" } };
obj2[4] = { list: "fast", drawDistance: "default" };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListImplExperiment.tsx");

export default apexExperiment;
