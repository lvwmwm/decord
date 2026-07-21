// Module ID: 10255
// Function ID: 79254
// Name: createInlineChannelReact
// Dependencies: []
// Exports: createInlineChannelReact, inlineChannelMentionReact

// Module 10255 (createInlineChannelReact)
function createInlineChannelReact(arg0) {
  let str = arg0;
  if (arg0 === undefined) {
    str = "\u{1F4AC}";
  }
  const arg1 = str;
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
                                                      let obj = str(closure_1[4]);
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
                        const items = [str2, str(closure_1[2]).smartOutput(iconType, output, key), str3];
                        obj.children = items;
                        return callback(str(closure_1[3]).LegacyText, obj, key.key);
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
importAll(dependencyMap[0]);
const jsxs = arg1(dependencyMap[1]).jsxs;
const inlineChannelReact = createInlineChannelReact();
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/markup/native/MarkupInlineChannelMentionRules.tsx");

export const inlineChannelMentionReact = function inlineChannelMentionReact(inContent, output, key) {
  if (null == inContent.inContent) {
    let smartOutputResult = output(dependencyMap[2]).smartOutput(inContent, output, key);
    const obj3 = output(dependencyMap[2]);
  } else {
    const obj = {};
    const items = [output(inContent.inContent, key), " \u203A ", output(dependencyMap[2]).smartOutput(inContent, output, key)];
    obj.children = items;
    smartOutputResult = jsxs(output(dependencyMap[3]).LegacyText, obj, key.key);
    const obj2 = output(dependencyMap[2]);
  }
  return smartOutputResult;
};
export { createInlineChannelReact };
export { inlineChannelReact };
