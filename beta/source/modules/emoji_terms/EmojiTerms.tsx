// Module ID: 5779
// Function ID: 5780
// Name: EmojiTerms
// Dependencies: [5780, 5781, 2]

// Module 5779 (EmojiTerms)
import LazyPromiseInitializerDefault from "LazyPromiseInitializer" /* 5780 */;
import EmojiTermsImporter from "EmojiTermsImporter" /* 5781 */;
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
