// Module ID: 5245
// Function ID: 5246
// Dependencies: [5246, 5247, 2]

// Module 5245
const require = arg1;
const obj = {
  setEmojiLocale(locale) {
    tmp2.setParams(locale);
  },
  getTermsForEmoji(name) {
    const value = tmp2.get();
    if (undefined !== value) {
      let items = value[name];
      tmp2 = name;
    } else {
      items = [];
    }
    return items;
  }
};
let tmp2 = new require("setParams")(function loadEmoji(arg0) {
  const tmp = require(5247) /* emojiTermsImporter */.emojiTermsImporter[arg0];
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
