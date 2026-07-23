// Module ID: 9638
// Function ID: 75053
// Name: useHorizontalAutocompleteResults
// Dependencies: [57, 31, 653, 9639, 668, 566, 2]
// Exports: useHorizontalAutocompleteResults

// Module 9638 (useHorizontalAutocompleteResults)
import _slicedToArray from "_slicedToArray";
import result from "result";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
({ AutoCompleteResultTypes: closure_4, ChannelTypes: closure_5 } = ME);
const result = require("ME").fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/hooks/useHorizontalAutocompleteResults.tsx");

export const useHorizontalAutocompleteResults = function useHorizontalAutocompleteResults(channel) {
  channel = channel.channel;
  const selection = channel.selection;
  const text = channel.text;
  let tmp = text(first.useState([]), 2);
  first = tmp[0];
  let closure_4 = tmp[1];
  let items = [channel];
  const memo = first.useMemo(() => channel(selection[3]).getAutocompleteOptions(channel, false, false), items);
  let obj = { text, selectionStart: selection.start, selectionEnd: selection.end };
  let tmp4 = text(first.useState(obj), 2);
  const first1 = tmp4[0];
  const text2 = first1.text;
  const selectionStart = first1.selectionStart;
  const selectionEnd = first1.selectionEnd;
  let closure_9 = tmp4[1];
  const items1 = [text, selection];
  const effect = first.useEffect(() => {
    const timeout = setTimeout(() => {
      outer1_9({ text: outer1_2, selectionStart: outer1_1.start, selectionEnd: outer1_1.end });
    }, 16);
    return () => {
      clearTimeout(closure_0);
    };
  }, items1);
  const items2 = [selectionStart, selectionEnd, text2, memo];
  const memo1 = first.useMemo(() => {
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp = selectionStart;
    let diff = selectionStart;
    if (null != text2) {
      if (0 !== text2.trim().length) {
        while (true) {
          let tmp2 = channel;
          let tmp3 = selection;
          let WHITESPACE_RE = channel(selection[4]).WHITESPACE_RE;
          let tmp4 = text2;
          if (0 === tmp) {
            let tmp7 = selectionEnd;
            let tmp8 = tmp;
            let tmp6 = text2;
            if (null != selectionEnd) {
              tmp8 = selectionEnd;
            }
            let substr = text2.slice(tmp, tmp8);
            let closure_0 = substr[0];
            let str = substr.slice(1);
            let formatted = str.toLowerCase();
            let _Object = Object;
            let tmp10 = memo;
            let keys = Object.keys(memo);
            let found = keys.find((arg0) => {
              let matchesResult = undefined !== closure_0;
              if (matchesResult) {
                matchesResult = undefined !== formatted;
              }
              if (matchesResult) {
                matchesResult = obj.matches(closure_0, formatted, _slicedToArray);
              }
              return matchesResult;
            });
            let tmp12 = formatted;
            tmp13 = formatted;
            tmp14 = tmp;
            tmp15 = found;
            if (null != found) {
              break;
            }
          }
          diff = tmp - 1;
          tmp = diff;
          tmp15 = found;
          tmp13 = tmp12;
          tmp14 = diff;
          if (diff < 0) {
            break;
          }
        }
        let obj = { query: tmp13, autocompleteType: tmp15, autocompleteSelectionStart: tmp14 };
        obj = { includeEmojiPremiumUpsell: false };
        const items = [, , , ];
        ({ GUILD_FORUM: arr3[0], GUILD_MEDIA: arr3[1], GUILD_TEXT: arr3[2], GUILD_ANNOUNCEMENT: arr3[3] } = memo);
        obj.channelTypes = items;
        obj.queryOptions = obj;
        return obj;
      }
    }
    return { query: null, autocompleteType: null, autocompleteSelectionStart: null };
  }, items2);
  const autocompleteType = memo1.autocompleteType;
  const query = memo1.query;
  const queryOptions = memo1.queryOptions;
  const items3 = [autocompleteType, query, queryOptions, memo];
  const callback = first.useCallback((arg0) => {
    if (null != autocompleteType) {
      if (null != query) {
        callback(memo[autocompleteType].queryResults(query, queryOptions, arg0));
        const obj = memo[autocompleteType];
      }
    }
    callback([]);
  }, items3);
  const items4 = [autocompleteType, callback, memo];
  const effect1 = first.useEffect(() => {
    let tmp = null;
    if (null != autocompleteType) {
      let stores;
      if (null != memo) {
        stores = memo[autocompleteType].stores;
      }
      tmp = stores;
    }
    if (null != tmp) {
      const BatchedStoreListener = channel(selection[5]).BatchedStoreListener;
      const prototype = BatchedStoreListener.prototype;
      const batchedStoreListener = new BatchedStoreListener(tmp, () => outer1_13(false));
      batchedStoreListener.attach("useHorizontalAutocompleteResults");
      return () => batchedStoreListener.detach();
    }
  }, items4);
  const items5 = [callback];
  const effect2 = first.useEffect(() => {
    callback(true);
  }, items5);
  obj = {
    results: first.useMemo(() => first.filter((type) => {
      type = type.type;
      let tmp = type === constants.USER;
      if (!tmp) {
        tmp = type === constants.ROLE;
      }
      if (!tmp) {
        tmp = type === constants.CHANNEL;
      }
      if (!tmp) {
        tmp = type === constants.EMOJI;
      }
      return tmp;
    }), items6),
    autocompleteSelectionStart: memo1.autocompleteSelectionStart,
    query
  };
  items6 = [first];
  return obj;
};
