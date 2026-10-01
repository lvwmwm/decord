// Module ID: 16026
// Function ID: 16027
// Name: ChannelListImplExperiment
// Dependencies: [1435, 2]

// Module 16026 (ChannelListImplExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-09-channel-list-impl", defaultConfig: { list: "fast" }, variations: null };
const obj2 = { 1: null };
obj2[1] = { list: "legend" };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListImplExperiment.tsx");

export default apexExperiment;
