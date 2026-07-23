// Module ID: 10268
// Function ID: 79335
// Name: createInlineChannelReact
// Dependencies: [31, 33, 9969, 1273, 1327, 2]
// Exports: createInlineChannelReact, inlineChannelMentionReact

// Module 10268 (createInlineChannelReact)
import "result";
import { jsxs } from "jsxProd";

const require = arg1;
function createInlineChannelReact(arg0) {
  let str = arg0;
  if (arg0 === undefined) {
    str = "\u{1F4AC}";
  }
  return (iconType, output, key) => {
    iconType = iconType.iconType;
    if ("text" !== iconType) {
      if ("text-nsfw" !== iconType) {
        if ("text-spoiler" !== iconType) {
          if ("announcement" !== iconType) {
            if ("announcement-nsfw" !== iconType) {
              if ("announcement-spoiler" !== iconType) {
                if ("forum" !== iconType) {
                  if ("forum-nsfw" !== iconType) {
                    if ("forum-spoiler" !== iconType) {
                      if ("media" !== iconType) {
                        if ("media-nsfw" !== iconType) {
                          if ("thread" !== iconType) {
                            if ("post" !== iconType) {
                              if ("message" === iconType) {
                                let str2 = str;
                              } else if ("voice" !== iconType) {
                                if ("voice-locked" !== iconType) {
                                  if ("voice-nsfw" !== iconType) {
                                    if ("voice-spoiler" !== iconType) {
                                      if ("stage" !== iconType) {
                                        if ("stage-locked" !== iconType) {
                                          if ("locked" !== iconType) {
                                            if ("guide" !== iconType) {
                                              if ("home" !== iconType) {
                                                if ("browse" !== iconType) {
                                                  if ("customize" !== iconType) {
                                                    if ("linked-roles" !== iconType) {
                                                      let obj = str(outer1_1[4]);
                                                      obj.assertNever(iconType);
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          str2 = "\"";
                        }
                        obj = {};
                        const items = [str2, str(outer1_1[2]).smartOutput(iconType, output, key), str3];
                        obj.children = items;
                        return outer1_2(str(outer1_1[3]).LegacyText, obj, key.key);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    str2 = "#";
  };
}
const inlineChannelReact = createInlineChannelReact();
const result = require("smartOutput").fileFinishedImporting("modules/markup/native/MarkupInlineChannelMentionRules.tsx");

export const inlineChannelMentionReact = function inlineChannelMentionReact(inContent, output, key) {
  if (null == inContent.inContent) {
    let smartOutputResult = require(9969) /* smartOutput */.smartOutput(inContent, output, key);
    const obj3 = require(9969) /* smartOutput */;
  } else {
    const obj = {};
    const items = [output(inContent.inContent, key), " \u203A ", require(9969) /* smartOutput */.smartOutput(inContent, output, key)];
    obj.children = items;
    smartOutputResult = jsxs(require(1273) /* Button */.LegacyText, {}, key.key);
    const obj2 = require(9969) /* smartOutput */;
  }
  return smartOutputResult;
};
export { createInlineChannelReact };
export { inlineChannelReact };
