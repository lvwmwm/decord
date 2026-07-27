// Module ID: 5000
// Function ID: 43268
// Name: importDefaultResult2
// Dependencies: [7, 6, 5001, 5002, 2]

// Module 5000 (importDefaultResult2)
import "_defineProperties";
import "_classCallCheck";
import importDefaultResult2 from "LazyPromiseInitializer";

const require = arg1;
importDefaultResult2 = new importDefaultResult2(function loadEmoji(arg0) {
  const tmp = require(5002) /* emojiTermsImporter */.emojiTermsImporter[arg0];
  if (undefined !== tmp) {
    let nextPromise = tmp().then((arg0) => arg0.default);
    const tmpResult = tmp();
  } else {
    nextPromise = Promise.resolve({});
  }
  return nextPromise;
});
const result = require("LazyPromiseInitializer").fileFinishedImporting("modules/emoji_terms/EmojiTerms.tsx");

export default {
  setEmojiLocale(locale) {
    importDefaultResult2.setParams(locale);
  },
  getTermsForEmoji(name) {
    const value = importDefaultResult2.get();
    if (undefined !== value) {
      let items = value[name];
    } else {
      items = [];
    }
    return items;
  }
};
