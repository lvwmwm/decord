// Module ID: 3825
// Function ID: 31793
// Dependencies: []

// Module 3825
const Linking = require(dependencyMap[0]).Linking;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("lib/native/Linking.tsx");

export default {
  openURL(defaultResult1, defaultResult2) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    const obj = { allowExternal: flag };
    require(dependencyMap[1]).default(defaultResult1, defaultResult2, obj);
  },
  openURLExternally(href, SAFARI) {
    require(dependencyMap[1]).default(href, SAFARI, { forceExternalBrowser: true });
  },
  performURLNavigation(href) {
    Linking.openURL(href).catch(() => {

    });
  }
};
