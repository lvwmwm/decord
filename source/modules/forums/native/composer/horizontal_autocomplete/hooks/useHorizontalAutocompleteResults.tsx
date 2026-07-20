// Module ID: 9625
// Function ID: 74971
// Name: useHorizontalAutocompleteResults
// Dependencies: []
// Exports: useHorizontalAutocompleteResults

// Module 9625 (useHorizontalAutocompleteResults)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
({ AutoCompleteResultTypes: closure_4, ChannelTypes: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/hooks/useHorizontalAutocompleteResults.tsx");

export const useHorizontalAutocompleteResults = function useHorizontalAutocompleteResults(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const selection = channel.selection;
  const dependencyMap = selection;
  const text = channel.text;
  let callback = text;
  const tmp = callback(React.useState([]), 2);
  const first = tmp[0];
  const React = first;
  let closure_4 = tmp[1];
  const items = [channel];
  const memo = React.useMemo(() => channel(selection[3]).getAutocompleteOptions(channel, false, false), items);
  let obj = { text, selectionStart: selection.start, selectionEnd: selection.end };
  const tmp4 = callback(React.useState(obj), 2);
  const first1 = tmp4[0];
  const text2 = first1.text;
  const selectionStart = first1.selectionStart;
  const selectionEnd = first1.selectionEnd;
  let closure_9 = tmp4[1];
  const items1 = [text, selection];
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      callback({ text: closure_2, selectionStart: closure_1.start, selectionEnd: closure_1.end });
    }, 16);
    return () => {
      clearTimeout(closure_0);
    };
  }, items1);
  const items2 = [selectionStart, selectionEnd, text2, memo];
  const memo1 = React.useMemo(() => {
    let tmp13;
    let tmp14;
    let tmp15;
    let tmp = selectionStart;
    let text = selectionStart;
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
            let channel = substr[0];
            let str = substr.slice(1);
            let formatted = str.toLowerCase();
            let selection = formatted;
            let _Object = Object;
            let tmp10 = memo;
            let keys = Object.keys(memo);
            let found = keys.find((arg0) => {
              let matchesResult = undefined !== closure_0;
              if (matchesResult) {
                matchesResult = undefined !== formatted;
              }
              if (matchesResult) {
                matchesResult = obj.matches(closure_0, formatted, diff);
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
          let diff = tmp - 1;
          text = diff;
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
    return { "Bool(true)": "Normal", "Bool(true)": true, "Bool(true)": "AbortSignal" };
  }, items2);
  const autocompleteType = memo1.autocompleteType;
  const query = memo1.query;
  const queryOptions = memo1.queryOptions;
  const items3 = [autocompleteType, query, queryOptions, memo];
  callback = React.useCallback((arg0) => {
    if (null != autocompleteType) {
      if (null != query) {
        callback(memo[closure_10].queryResults(query, queryOptions, arg0));
        const obj = memo[closure_10];
      }
    }
    callback([]);
  }, items3);
  const items4 = [autocompleteType, callback, memo];
  const effect1 = React.useEffect(() => {
    let tmp = null;
    if (null != autocompleteType) {
      let stores;
      if (null != memo) {
        stores = memo[closure_10].stores;
      }
      tmp = stores;
    }
    if (null != tmp) {
      const BatchedStoreListener = channel(selection[5]).BatchedStoreListener;
      const prototype = BatchedStoreListener.prototype;
      const batchedStoreListener = new BatchedStoreListener(tmp, () => callback(false));
      const channel = batchedStoreListener;
      batchedStoreListener.attach("useHorizontalAutocompleteResults");
      return () => batchedStoreListener.detach();
    }
  }, items4);
  const items5 = [callback];
  const effect2 = React.useEffect(() => {
    callback(true);
  }, items5);
  obj = {
    results: React.useMemo(() => first.filter((type) => {
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
  const items6 = [first];
  return obj;
};
