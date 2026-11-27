// Module ID: 19999
// Function ID: 20000
// Name: fuzzysearch
// Dependencies: [6988, 2]
// Exports: default

// Module 19999 (fuzzysearch)
import fuzzysearchDefault from "fuzzysearch" /* 6988 */;
import size from "module_2" /* 2 */;

let application;

const result = size.fileFinishedImporting("modules/integration_settings/filterIntegrationApps.tsx");

export default function filterIntegrationApps(arr, str) {
  let found;
  str = str.trim();
  const formatted = str.toLowerCase();
  if ("" === formatted) {
    const items = [];
    let tmp5 = arr;
    HermesBuiltin.arraySpread(items, arr, 0);
    found = items;
  } else {
    found = arr.filter((application) => {
      application = application.application;
      let tmp5Result = application.id === formatted;
      if (!tmp5Result) {
        const str = application.name;
        const tmp5 = fuzzysearchDefault;
        tmp5Result = tmp5(tmp, str.toLowerCase());
      }
      if (!tmp5Result) {
        let tmp10Result = null != application.bot;
        if (tmp10Result) {
          const str2 = application.bot.username;
          const tmp10 = fuzzysearchDefault;
          tmp10Result = tmp10(tmp, str2.toLowerCase());
        }
        tmp5Result = tmp10Result;
      }
      return tmp5Result;
    });
  }
  return found;
};
