// Module ID: 6983
// Function ID: 6984
// Name: EmojiTerms
// Dependencies: [6984, 6985, 2]

// Module 6983 (EmojiTerms)
import LazyPromiseInitializerDefault from "LazyPromiseInitializer" /* 6984 */;
import EmojiTermsImporter from "EmojiTermsImporter" /* 6985 */;
import size from "module_2" /* 2 */;

function loadEmoji(arg0) {
  let nextPromise;
  const tmp = EmojiTermsImporter.emojiTermsImporter[arg0];
  if (undefined !== tmp) {
    const tmpResult = tmp();
    nextPromise = tmpResult.then((result) => result.default);
  } else {
    nextPromise = Promise.resolve({});
  }
  return nextPromise;
}
let closure_2 = new LazyPromiseInitializerDefault(loadEmoji);
const obj = {
  setEmojiLocale(locale) {
    closure_2.setParams(locale);
  },
  getTermsForEmoji(name) {
    let items;
    const value = closure_2.get();
    if (undefined !== value) {
      items = value[name];
    } else {
      items = [];
    }
    return items;
  }
};
const tmp2 = new LazyPromiseInitializerDefault(loadEmoji);
const result = size.fileFinishedImporting("modules/emoji_terms/EmojiTerms.tsx");

export default obj;
