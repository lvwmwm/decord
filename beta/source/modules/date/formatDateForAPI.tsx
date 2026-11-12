// Module ID: 18376
// Function ID: 18377
// Name: formatDateForAPI
// Dependencies: [2]
// Exports: default

// Module 18376 (formatDateForAPI)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/date/formatDateForAPI.tsx");

export default function formatDateForAPI(clone) {
  const cloneResult = clone.clone();
  const localeResult = cloneResult.locale("en");
  return localeResult.format("YYYY-MM-DD");
};
