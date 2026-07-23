// Module ID: 12839
// Function ID: 99800
// Name: getTitleFromPickedStreamContent
// Dependencies: [1212, 2]
// Exports: default

// Module 12839 (getTitleFromPickedStreamContent)
const result = require("set").fileFinishedImporting("modules/go_live/utils/getTitleFromPickedStreamContent.tsx");

export default function getTitleFromPickedStreamContent(windows) {
  if (windows.windows.length > 0) {
    windows = windows.windows;
    const mapped = windows.map((title) => title.title);
    let joined = mapped.join(", ");
  } else if (windows.applications.length > 0) {
    const applications = windows.applications;
    const mapped1 = applications.map((name) => name.name);
    joined = mapped1.join(", ");
  } else {
    joined = null;
    if (windows.displays.length > 0) {
      const intl = require(1212) /* getSystemLocale */.intl;
      joined = intl.string(require(1212) /* getSystemLocale */.t.R4wpLN);
    }
  }
  return joined;
};
