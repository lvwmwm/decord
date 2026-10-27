// Module ID: 17649
// Function ID: 17650
// Name: ChannelListImplExperiment
// Dependencies: [1452, 2]

// Module 17649 (ChannelListImplExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-10-channel-list-impl-v2", defaultConfig: { list: "fast", drawDistance: "viewport" }, variations: obj2 };
obj2 = { 1: null, 2: { list: "legend", drawDistance: "viewport" }, 3: { list: "legend", drawDistance: "default" }, 4: { list: "legend", drawDistance: "small" } };
obj2[4] = { list: "fast", drawDistance: "default" };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListImplExperiment.tsx");

export default apexExperiment;
