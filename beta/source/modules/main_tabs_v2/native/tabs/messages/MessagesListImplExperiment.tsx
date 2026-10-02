// Module ID: 15679
// Function ID: 15680
// Name: MessagesListImplExperiment
// Dependencies: [1441, 2]

// Module 15679 (MessagesListImplExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-06-messages-list-impl", defaultConfig: { list: "fastest", recycleItems: false }, variations: obj2 };
obj2 = { 1: null, 2: { list: "flash", recycleItems: false }, 3: { list: "legend", recycleItems: false } };
obj2[3] = { list: "legend", recycleItems: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesListImplExperiment.tsx");

export default apexExperiment;
