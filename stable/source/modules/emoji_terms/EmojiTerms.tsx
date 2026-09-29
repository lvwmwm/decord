// Module ID: 5716
// Function ID: 5717
// Name: EmojiTerms
// Dependencies: [5717, 5718, 2]

// Module 5716 (EmojiTerms)
import LazyPromiseInitializerDefault from "LazyPromiseInitializer" /* 5717 */;
import EmojiTermsImporter from "EmojiTermsImporter" /* 5718 */;

require = fn;
let closure_2 = new LazyPromiseInitializerDefault(function loadEmoji(arg0) {
  const tmp = EmojiTermsImporter.emojiTermsImporter[arg0];
  if (undefined !== tmp) {
    let nextPromise = tmp().then((result) => result.default);
    const tmpResult = tmp();
  } else {
    nextPromise = Promise.resolve({});
  }
  return nextPromise;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_terms/EmojiTerms.tsx");

export default {
  setEmojiLocale(locale) {
    closure_2.setParams(locale);
  },
  getTermsForEmoji(name) {
    value = closure_2.get();
    if (undefined !== value) {
      let items = value[name];
    } else {
      items = [];
    }
    return items;
  }
};
