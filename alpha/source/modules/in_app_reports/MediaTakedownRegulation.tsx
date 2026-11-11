// Module ID: 5939
// Function ID: 5940
// Name: MediaTakedownRegulation
// Dependencies: [2]
// Exports: isMediaTakedownRegulation

// Module 5939 (MediaTakedownRegulation)
import size from "module_2" /* 2 */;

const MediaTakedownRegulation = { TIDA: "tida", UK_STOPNCII: "uk_stopncii", BRAZIL_ONLINE_SAFETY_OF_WOMEN: "brazil_online_safety_of_women" };
const result = size.fileFinishedImporting("modules/in_app_reports/MediaTakedownRegulation.tsx");

export { MediaTakedownRegulation };
export function isMediaTakedownRegulation(arg0) {
  const values = Object.values(obj);
  return values.includes(arg0);
}
