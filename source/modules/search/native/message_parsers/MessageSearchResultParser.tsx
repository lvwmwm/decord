// Module ID: 15277
// Function ID: 115337
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15277 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const tmp2 = (CachedSearchResultParser) => {
  class SearchResultMessageParser {
    constructor(arg0, arg1) {
      self = this;
      tmp = closure_3(this, SearchResultMessageParser);
      obj = closure_5(SearchResultMessageParser);
      tmp2 = closure_4;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, [], closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      SearchResultMessageParser = tmp2Result;
      tmp2Result.truncateMessage = (str) => {
        let num = arg2;
        if (arg2 === undefined) {
          num = 1;
        }
        let tmp2Result;
        if (null == str) {
          return null;
        } else {
          const str4 = str.replace(/(\r\n|\n|\r)/gm, " ");
          const _Set = Set;
          const set = new Set(tmp2Result(closure_1[6]).analyze(arg1));
          tmp2Result = set;
          const parts = str4.split(/(\W+)/g);
          const found = parts.find((arg0) => set(closure_1[6]).shouldHighlight(arg0, set));
          if (null == found) {
            return null;
          } else {
            const _RegExp = RegExp;
            const regExp = new RegExp("\\b" + found + "\\b");
            const searchResult = str4.search(regExp);
            if (-1 === searchResult) {
              return null;
            } else {
              const _Math = Math;
              const bound = Math.max(0, searchResult - (30 * num - found.length));
              let str2 = "";
              if (bound > 0) {
                str2 = "...";
              }
              const _HermesInternal = HermesInternal;
              return "" + str2 + str4.substring(bound);
            }
          }
          const obj = tmp2Result(closure_1[6]);
        }
      };
      tmp2Result.getSearchResults = (content) => {
        if (null != tmp2Result.tokenizedQueryContent) {
          if ("" !== tmp2Result.tokenizedQueryContent) {
            const truncateMessageResult = tmp2Result.truncateMessage(content.content, tmp2Result.tokenizedQueryContent, tmp2Result.lineClamp);
            if (null != truncateMessageResult) {
              const prototype2 = ctor.prototype;
              const tmp11 = new ctor(content);
              tmp11.content = truncateMessageResult;
              return tmp11;
            } else {
              const obj = tmp2Result(closure_1[7]);
              const mapped = tmp2Result(closure_1[7]).chain(content.embeds).map((rawTitle) => {
                let truncateMessageResult = closure_0.truncateMessage(rawTitle.rawTitle, closure_0.tokenizedQueryContent, closure_0.lineClamp);
                if (null == truncateMessageResult) {
                  truncateMessageResult = closure_0.truncateMessage(rawTitle.rawDescription, closure_0.tokenizedQueryContent, closure_0.lineClamp);
                }
                return truncateMessageResult;
              });
              const chainResult = tmp2Result(closure_1[7]).chain(content.embeds);
              const valueResult = mapped.find((arg0) => null != arg0).value();
              if (null != valueResult) {
                const prototype = ctor.prototype;
                const tmp5 = new ctor(content);
                tmp5.content = valueResult;
                return tmp5;
              } else {
                return content;
              }
              const iter = mapped.find((arg0) => null != arg0);
            }
          }
        }
        return content;
      };
      obj2 = SearchResultMessageParser(closure_1[8]);
      tokenizeQueryResult = obj2.tokenizeQuery(CachedSearchResultParser);
      obj3 = SearchResultMessageParser(closure_1[8]);
      searchQueryFromTokens = obj3.getSearchQueryFromTokens(tokenizeQueryResult);
      obj4 = SearchResultMessageParser(closure_1[8]);
      str = obj4.getQueryContentString(searchQueryFromTokens);
      trimmed = undefined;
      if (null != str) {
        trimmed = str.trim();
      }
      str2 = "";
      if (null != trimmed) {
        str2 = trimmed;
      }
      tmp2Result.tokenizedQueryContent = str2;
      tmp2Result.lineClamp = arg1;
      return tmp2Result;
    }
  }
  const arg1 = SearchResultMessageParser;
  callback2(SearchResultMessageParser, CachedSearchResultParser);
  return callback(SearchResultMessageParser);
}(arg1(dependencyMap[9]).CachedSearchResultParser);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/search/native/message_parsers/MessageSearchResultParser.tsx");

export default tmp2;
