// Module ID: 11920
// Function ID: 11921
// Name: useEmojiSuggestions
// Dependencies: [32, 19, 5771, 5306, 1375, 504, 5754, 2]
// Exports: default

// Module 11920 (useEmojiSuggestions)
import EmojiConstants from "EmojiConstants" /* 1375 */;
import ChannelAutocompleteConstants from "ChannelAutocompleteConstants" /* 5306 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5754 */;
import EmojiStore2 from "EmojiStore" /* 5771 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let importDefault;

function findWordSpan(text, selectionStart, selectionEnd) {
  if (selectionStart !== selectionEnd) {
    const obj2 = { query: text.slice(selectionStart, selectionEnd), queryStart: selectionStart, queryEnd: selectionEnd };
    return obj2;
  } else {
    const substr = text.slice(0, selectionStart);
    const obj4 = /\S+$/;
    const substr1 = text.slice(selectionStart);
    const match = obj4.exec(substr);
    const obj5 = /^\S+/;
    const match1 = obj5.exec(substr1);
    if (null == match) {
      if (null == match1) {
        const match2 = re9.exec(substr);
        let tmp3 = null;
        if (null != match2) {
          tmp3 = { query: match2[1], queryStart: match2.index, queryEnd: selectionStart };
          const obj = { query: match2[1], queryStart: match2.index, queryEnd: selectionStart };
        }
        return tmp3;
      }
    }
    let str;
    if (match != null) {
      str = match[0];
    }
    if (str == null) {
      str = "";
    }
    let str2;
    if (match1 != null) {
      str2 = match1[0];
    }
    if (str2 == null) {
      str2 = "";
    }
    return { query: str + str2, queryStart: selectionStart - str.length, queryEnd: selectionStart + str2.length };
  }
}
const LoadState = EmojiStore2.LoadState;
const EMOJI_SENTINEL = ChannelAutocompleteConstants.EMOJI_SENTINEL;
const EmojiIntention = EmojiConstants.EmojiIntention;
const re9 = /(\S+)\s$/;
let closure_10 = { unlockedEmojis: [], lockedEmojis: [], queryStart: 0, queryEnd: 0 };
const result = size.fileFinishedImporting("modules/chat_input/native/useEmojiSuggestions.tsx");

export default function useEmojiSuggestions(channel) {
  let _undefined;
  let tmp5;
  let tmp6;
  channel = channel.channel;
  const text = channel.text;
  importDefault = text;
  const selectionStart = channel.selectionStart;
  const selectionEnd = channel.selectionEnd;
  const enabled = channel.enabled;
  const maxCount = channel.maxCount;
  const minUnlockedEmojis = channel.minUnlockedEmojis;
  closure_10 = undefined;
  let obj = channel(selectionStart[5]);
  const items = [maxCount];
  const stateFromStores = obj.useStateFromStores(items, () => maxCount.loadState);
  let obj2 = enabled;
  const items1 = [channel, stateFromStores, enabled, maxCount, minUnlockedEmojis, selectionEnd, selectionStart, text];
  const memo = enabled.useMemo(() => {
    const tmp = enabled;
    if (tmp) {
      if (stateFromStores === LoadState.Loaded) {
        const tmp11 = findWordSpan(importDefault, selectionStart, selectionEnd);
        let tmp4 = null;
        if (null != tmp11) {
          tmp4 = null;
          if (tmp11.query.length >= 3) {
            const query = tmp11.query;
            tmp4 = null;
            if (!query.startsWith(EMOJI_SENTINEL)) {
              tmp4 = tmp11;
            }
          }
        }
        if (null == tmp4) {
          return closure_10;
        } else {
          let obj;
          const obj3 = { query: tmp4.query, channel, intention: EmojiIntention.CHAT, maxCount };
          const obj2 = AutocompleteUtilsDefault;
          const emojis = obj2.queryEmojiResults(obj3).emojis;
          if (emojis.unlocked.length < minUnlockedEmojis) {
            obj = closure_10;
          } else {
            obj = { unlockedEmojis: null, lockedEmojis: null, queryStart: null, queryEnd: null };
            ({ unlocked: obj.unlockedEmojis, locked: obj.lockedEmojis } = emojis);
            ({ queryStart: obj.queryStart, queryEnd: obj.queryEnd } = tmp4);
          }
          return obj;
        }
      }
    }
    return closure_10;
  }, items1);
  let tmp3 = closure_10;
  let tmp4 = selectionEnd(enabled.useState(closure_10), 2);
  [tmp5, tmp6] = tmp4;
  let c9 = tmp6;
  closure_10 = tmp7;
  const ref = obj2.useRef(null);
  let tmp8 = enabled;
  if (tmp8) {
    tmp8 = "" !== text;
  }
  if (!tmp8) {
    tmp8 = tmp5 === tmp3;
  }
  if (!tmp8) {
    tmp6(tmp3);
  }
  const items2 = [enabled, text, memo, tmp7];
  const effect = obj2.useEffect(() => {
    let closure_0;
    const tmp = enabled;
    if (tmp) {
      if ("" !== closure_1) {
        const tmp3 = closure_10;
        if (tmp3) {
          let num = ref.current;
          if (num == null) {
            num = -Infinity;
          }
          const _Math = Math;
          const _Date = Date;
          const sum = num + 500;
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            ref.current = Date.now();
            _undefined(memo);
          }, Math.max(0, sum - Date.now()));
          return () => clearTimeout(closure_0);
        }
      }
    }
    ref.current = null;
  }, items2);
  const items3 = [text, selectionStart, selectionEnd];
  const callback = obj2.useCallback(() => {
    ref.current = null;
    _undefined(closure_10);
  }, []);
  const memo1 = obj2.useMemo(() => {
    let tmp3 = findWordSpan(importDefault, selectionStart, selectionEnd);
    const tmp = selectionStart;
    const tmp2 = selectionEnd;
    if (tmp3 == null) {
      tmp3 = { queryStart: tmp, queryEnd: tmp2 };
      const obj = { queryStart: tmp, queryEnd: tmp2 };
    }
    return tmp3;
  }, items3);
  if (enabled) {
    tmp3 = tmp5;
  }
  let obj3 = { unlockedEmojis: tmp3.unlockedEmojis, lockedEmojis: tmp3.lockedEmojis, queryStart: memo1.queryStart, queryEnd: memo1.queryEnd, clear: callback };
  return obj3;
};
