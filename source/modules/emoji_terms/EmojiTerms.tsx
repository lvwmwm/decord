// Module ID: 5184
// Function ID: 5185
// Dependencies: [5185, 5186, 2]

// Module 5184
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
  const tmp = require(5186) /* emojiTermsImporter */.emojiTermsImporter[arg0];
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
