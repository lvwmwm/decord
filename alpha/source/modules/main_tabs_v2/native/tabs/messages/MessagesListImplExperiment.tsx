// Module ID: 16392
// Function ID: 16393
// Name: MessagesListImplExperiment
// Dependencies: [1453, 2]

// Module 16392 (MessagesListImplExperiment)
import ApexExperiment_mod from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj3;
let obj5;
const obj = { list: "fastest", recycleItems: false };
let ApexExperiment = ApexExperiment_mod;
const obj2 = { kind: "user", name: "2026-06-messages-list-impl", defaultConfig: obj, variations: obj3 };
obj3 = { 1: null, 2: { list: "flash", recycleItems: false }, 3: { list: "legend", recycleItems: false } };
obj3[3] = { list: "legend", recycleItems: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
ApexExperiment = ApexExperiment_mod;
const obj4 = { kind: "user", name: "2026-10-android-messages-list-impl", defaultConfig: obj, variations: obj5 };
obj5 = { 1: null };
obj5[1] = { list: "legend", recycleItems: true };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj4);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesListImplExperiment.tsx");

export default apexExperiment;
export const AndroidMessagesListImplExperiment = apexExperiment1;
