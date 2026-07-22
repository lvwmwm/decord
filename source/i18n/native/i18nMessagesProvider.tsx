// Module ID: 16475
// Function ID: 127318
// Name: i18nManager
// Dependencies: []
// Exports: default

// Module 16475 (i18nManager)
const _module = require(dependencyMap[1]);
if (_module.isAndroid()) {
  let i18nManager = importDefault(dependencyMap[2]);
} else {
  i18nManager = require(dependencyMap[0]).NativeModules.i18nManager;
}
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("i18n/native/i18nMessagesProvider.tsx");

export default function newIntlMessagesProvider() {
  return new Promise((arg0) => {
    closure_2.keysRequest((arr) => {
      closure_2.valuesResult(arr.map((code) => {
        const result = callback(closure_1[3]).runtimeHashMessageKey(code);
        const tmp2 = callback(closure_1[4]).t[result];
        let str = "";
        if (null != tmp2) {
          const intl = callback(closure_1[4]).intl;
          str = intl.reserialize(tmp2);
        }
        return str;
      }));
      arr(true);
    });
  });
};
