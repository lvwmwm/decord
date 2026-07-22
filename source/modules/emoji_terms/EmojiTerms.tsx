// Module ID: 4996
// Function ID: 43233
// Name: importDefaultResult2
// Dependencies: []

// Module 4996 (importDefaultResult2)
importDefault(dependencyMap[0]);
importDefault(dependencyMap[1]);
let importDefaultResult2 = importDefault(dependencyMap[2]);
importDefaultResult2 = new importDefaultResult2(function loadEmoji(arg0) {
  const tmp = arg1(dependencyMap[3]).emojiTermsImporter[arg0];
  if (undefined !== tmp) {
    let nextPromise = tmp().then((arg0) => arg0.default);
    const tmpResult = tmp();
  } else {
    nextPromise = Promise.resolve({});
  }
  return nextPromise;
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/emoji_terms/EmojiTerms.tsx");

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
