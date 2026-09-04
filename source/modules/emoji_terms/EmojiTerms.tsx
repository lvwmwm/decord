// Module ID: 5427
// Function ID: 5428
// Dependencies: [5428, 5429, 2]

// Module 5427
import setParamsDefault from "setParams" /* 5428 */;
import emojiTermsImporter from "emojiTermsImporter" /* 5429 */;

require = arg1;
let closure_2 = new setParamsDefault(function loadEmoji(arg0) {
  const tmp = emojiTermsImporter.emojiTermsImporter[arg0];
  if (undefined !== tmp) {
    let nextPromise = tmp().then((arg0) => arg0.default);
    const tmpResult = tmp();
  } else {
    nextPromise = Promise.resolve({});
  }
  return nextPromise;
});
const obj = {
  setEmojiLocale(locale) {
    store.setParams(locale);
  },
  getTermsForEmoji(name) {
    const value = store.get();
    if (undefined !== value) {
      let items = value[name];
    } else {
      items = [];
    }
    return items;
  }
};
const tmp2 = new setParamsDefault(function loadEmoji(arg0) {
  const tmp = emojiTermsImporter.emojiTermsImporter[arg0];
  if (undefined !== tmp) {
    let nextPromise = tmp().then((arg0) => arg0.default);
    const tmpResult = tmp();
  } else {
    nextPromise = Promise.resolve({});
  }
  return nextPromise;
});
const result = require("set").fileFinishedImporting("modules/emoji_terms/EmojiTerms.tsx");

export default obj;
