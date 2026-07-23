// Module ID: 15402
// Function ID: 117554
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 3768, 15403, 22, 10078, 15407, 2]

// Module 15402 (_isNativeReflectConstruct)
import apply from "apply";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _callSuper from "_callSuper";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let tmp2 = ((CachedSearchResultParser) => {
  class SearchResultMessageParser {
    constructor(arg0, arg1) {
      self = this;
      tmp = outer1_3(this, apply);
      obj = outer1_5(apply);
      tmp2 = outer1_4;
      if (outer1_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, [], outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.truncateMessage = (str) => {
        let num = arg2;
        if (arg2 === undefined) {
          num = 1;
        }
        let set;
        if (null == str) {
          return null;
        } else {
          const str4 = str.replace(/(\r\n|\n|\r)/gm, " ");
          const _Set = Set;
          set = new Set(SearchResultMessageParser(outer2_1[6]).analyze(arg1));
          const parts = str4.split(/(\W+)/g);
          const found = parts.find((arg0) => SearchResultMessageParser(outer3_1[6]).shouldHighlight(arg0, set));
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
          const obj = SearchResultMessageParser(outer2_1[6]);
        }
      };
      tmp2Result.getSearchResults = (content) => {
        if (null != tmp2Result.tokenizedQueryContent) {
          if ("" !== tmp2Result.tokenizedQueryContent) {
            let truncateMessageResult = tmp2Result.truncateMessage(content.content, tmp2Result.tokenizedQueryContent, tmp2Result.lineClamp);
            if (null != truncateMessageResult) {
              const prototype2 = outer2_7.prototype;
              const tmp11 = new outer2_7(content);
              tmp11.content = truncateMessageResult;
              return tmp11;
            } else {
              const obj = SearchResultMessageParser(outer2_1[7]);
              const mapped = SearchResultMessageParser(outer2_1[7]).chain(content.embeds).map((rawTitle) => {
                let truncateMessageResult = outer1_0.truncateMessage(rawTitle.rawTitle, outer1_0.tokenizedQueryContent, outer1_0.lineClamp);
                if (null == truncateMessageResult) {
                  truncateMessageResult = outer1_0.truncateMessage(rawTitle.rawDescription, outer1_0.tokenizedQueryContent, outer1_0.lineClamp);
                }
                return truncateMessageResult;
              });
              const chainResult = SearchResultMessageParser(outer2_1[7]).chain(content.embeds);
              const valueResult = mapped.find((arg0) => null != arg0).value();
              if (null != valueResult) {
                const prototype = outer2_7.prototype;
                const tmp5 = new outer2_7(content);
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
      obj2 = SearchResultMessageParser(outer1_1[8]);
      tokenizeQueryResult = obj2.tokenizeQuery(CachedSearchResultParser);
      obj3 = SearchResultMessageParser(outer1_1[8]);
      searchQueryFromTokens = obj3.getSearchQueryFromTokens(tokenizeQueryResult);
      obj4 = SearchResultMessageParser(outer1_1[8]);
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
  callback2(SearchResultMessageParser, CachedSearchResultParser);
  return callback(SearchResultMessageParser);
})(require("CachedSearchResultParser").CachedSearchResultParser);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/search/native/message_parsers/MessageSearchResultParser.tsx");

export default tmp2;
