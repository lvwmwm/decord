// Module ID: 7774
// Function ID: 61714
// Name: checkForJumboEmoji
// Dependencies: []
// Exports: runMessageMarkupPostProcessors

// Module 7774 (checkForJumboEmoji)
let MessageEmbedTypes;
function checkForJumboEmoji(content) {
  if (content.some((type) => {
    let tmp = "emoji" !== type.type;
    if (tmp) {
      tmp = "customEmoji" !== type.type;
    }
    if (tmp) {
      let tmp2 = "string" !== typeof type.content;
      if (!tmp2) {
        tmp2 = "" !== type.content.trim();
        const str3 = type.content;
      }
      tmp = tmp2;
    }
    return tmp;
  })) {
    return content;
  } else {
    let closure_0 = 0;
    const item = content.forEach((type) => {
      let tmp = "emoji" !== type.type;
      if (tmp) {
        tmp = "customEmoji" !== type.type;
      }
      if (!tmp) {
        closure_0 = closure_0 + 1;
      }
      if (closure_0 > 30) {
        return false;
      }
    });
    if (closure_0 <= 30) {
      const item1 = content.forEach((arg0) => {
        arg0.jumboable = true;
      });
    }
    return content;
  }
}
function checkSpoilerEmbeds(content, inline) {
  if (inline) {
    let tmp = hasAnySpoilerEmbeds(content);
  } else {
    tmp = "paragraph" === content[0].type;
    if (tmp) {
      const _Array = Array;
      tmp = content[0].content instanceof Array;
    }
    if (tmp) {
      tmp = hasAnySpoilerEmbeds(content[0].content);
    }
  }
  return tmp;
}
function containsMatchingNode(content, arg1) {
  const require = arg1;
  if (content instanceof Array) {
    return content.some((arg0) => callback(arg0, arg1));
  } else {
    const tmp = arg1(content);
    if (null != tmp) {
      return tmp;
    } else {
      const _Array = Array;
      if (content.content instanceof Array) {
        let someResult = containsMatchingNode(content.content, arg1);
      } else {
        const _Array2 = Array;
        someResult = content.items instanceof Array;
        if (someResult) {
          const items = content.items;
          someResult = items.some((arg0) => callback(arg0, arg1));
        }
      }
    }
  }
}
function hasAnySpoilerEmbeds(content) {
  return containsMatchingNode(content, (type) => {
    let tmp = null;
    if ("spoiler" === type.type) {
      tmp = callback(type, (type) => {
        let tmp = "link" === type.type;
        if (!tmp) {
          tmp = "attachmentLink" === type.type;
        }
        if (!tmp) {
          tmp = null;
        }
        return tmp;
      });
    }
    return tmp;
  });
}
function checkForSimpleEmbedMessage(arg0, first1) {
  if (1 === arg0.length) {
    if (1 === first1.length) {
      const first = arg0[0];
      first1 = first1[0];
      if ("link" === first.type) {
        let items = arg0;
        if (set.has(first1.type)) {
          items = arg0;
          if (obj.isEmbedInline(first1)) {
            items = [];
          }
          const obj = require(dependencyMap[1]);
        }
      } else {
        items = arg0;
      }
      return items;
    }
  }
  return arg0;
}
function removeBuildOverrideLinks(tmp3Result) {
  return tmp3Result.filter((type) => {
    let tmp = "link" !== type.type;
    if (!tmp) {
      tmp = !callback(closure_2[2]).isBuildOverrideLink(type.target);
      const obj = callback(closure_2[2]);
    }
    return tmp;
  });
}
function removeExperimentLinks(arr) {
  return arr.filter((type) => {
    let tmp = "link" !== type.type;
    if (!tmp) {
      tmp = !callback(closure_2[3]).isExperimentEmbedURL(type.target);
      const obj = callback(closure_2[3]);
    }
    return tmp;
  });
}
function removeQuestsEmbedLinks(arr) {
  let closure_0 = arr.some((type) => "link" !== type.type);
  return arr.filter((type) => {
    let tmp = "link" === type.type;
    let parseQuestsEmbedCodeResult = null;
    if (null != type.target) {
      parseQuestsEmbedCodeResult = callback(closure_2[4]).parseQuestsEmbedCode(type.target);
      const obj = callback(closure_2[4]);
    }
    if (tmp) {
      tmp = null != parseQuestsEmbedCodeResult;
    }
    if (tmp) {
      tmp = !callback;
    }
    return !tmp;
  });
}
function convertNewlinesInContent(arr) {
  const item = arr.forEach((type) => {
    let hasItem = set.has(type.type);
    if (hasItem) {
      hasItem = null != type.content;
    }
    if (hasItem) {
      const _Array = Array;
      if (Array.isArray(type.content)) {
        callback2(type.content);
      } else if ("string" === typeof type.content) {
        type.content = type.content.replace(/\n/g, " ");
        const str5 = type.content;
      } else {
        type = type.type;
        const _Object = Object;
        const _HermesInternal = HermesInternal;
        callback(closure_2[5]).captureMessage("AST node type:" + type + " with content typeof " + typeof type.content + ". Keys " + Object.keys(type));
        const obj = callback(closure_2[5]);
      }
    }
  });
  return arr;
}
const _module = require(dependencyMap[0]);
({ MessageEmbedTypes, MessageTypes: closure_3 } = _module);
const items = [, ];
({ IMAGE: arr[0], GIFV: arr[1] } = MessageEmbedTypes);
const set = new Set(items);
const set1 = new Set(["Array", "9SNdf4", "%SharedArrayBufferPrototype%", "NATIVE_REQUIRED_ASSETS", "callerSource", "Array", "labelVisible"]);
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("modules/messages/MarkupPostProcessors.tsx");

export { checkSpoilerEmbeds };
export { checkForSimpleEmbedMessage };
export { removeBuildOverrideLinks };
export { removeExperimentLinks };
export { removeQuestsEmbedLinks };
export { convertNewlinesInContent };
export const runMessageMarkupPostProcessors = function runMessageMarkupPostProcessors(arg0) {
  let ast;
  let contentMessage;
  let formatInline;
  let hasBailedAst;
  let hideSimpleEmbedContent;
  let inline;
  let message;
  let messageContent;
  let toAST;
  ({ ast, inline, message, contentMessage, messageContent, formatInline } = arg0);
  ({ hasBailedAst, hideSimpleEmbedContent, toAST } = arg0);
  let tmp = ast;
  if (!Array.isArray(ast)) {
    const items = [ast];
    tmp = items;
  }
  if (hasBailedAst) {
    let obj = { type: "text", content: messageContent };
    obj = { index: 0 };
    obj[0] = messageContent;
    obj.originalMatch = obj;
    const items1 = [obj];
    tmp = items1;
  }
  let tmp3Result = tmp;
  if (hideSimpleEmbedContent) {
    let tmp5 = message;
    if (null != contentMessage) {
      tmp5 = contentMessage;
    }
    tmp3Result = checkForSimpleEmbedMessage(tmp, tmp5.embeds);
    const tmp3 = checkForSimpleEmbedMessage;
  }
  let tmp6 = formatInline;
  if (!formatInline) {
    tmp6 = message.type === constants.MEDIA_MENTION_MESSAGE;
  }
  if (!tmp6) {
    if (inline) {
      checkForJumboEmoji(tmp3Result);
    } else {
      let tmp8 = "paragraph" === tmp3Result[0].type;
      if (tmp8) {
        const _Array = Array;
        tmp8 = tmp3Result[0].content instanceof Array;
      }
      if (tmp8) {
        const content = tmp3Result[0].content;
        checkForJumboEmoji(content);
        tmp3Result[0].content = content;
      }
    }
  }
  let tmp13 = tmp3Result;
  if (toAST) {
    tmp13 = removeExperimentLinks(removeBuildOverrideLinks(tmp3Result));
  }
  const tmp16 = removeQuestsEmbedLinks(tmp13);
  if (null != contentMessage) {
    message = contentMessage;
  }
  let flag = false;
  if (message.embeds.length > 0) {
    flag = checkSpoilerEmbeds(tmp16, inline);
  }
  if (formatInline) {
    convertNewlinesInContent(tmp16);
  }
  obj = { ast: tmp16, hasSpoilerEmbeds: flag };
  return obj;
};
