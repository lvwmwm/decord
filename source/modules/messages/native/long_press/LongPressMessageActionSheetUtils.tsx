// Module ID: 9534
// Function ID: 74246
// Name: getContextBarCancelReason
// Dependencies: []
// Exports: longPressMessageOptionHandler

// Module 9534 (getContextBarCancelReason)
function getContextBarCancelReason(edit, cancel) {
  if ("message_swipe" === cancel) {
    let str6 = "swipe_reply";
    if ("reply" === edit) {
      str6 = "swipe_edit";
    }
    return str6;
  } else if ("action_sheet" === cancel) {
    let str4 = "action_sheet_reply";
    if ("reply" === edit) {
      str4 = "action_sheet_edit";
    }
    return str4;
  } else if ("cancel" === cancel) {
    return "pressed_cancel";
  }
}
function handleEdit(id, isForumPost, current, source) {
  let flag = arg4;
  if (arg4 === undefined) {
    flag = false;
  }
  if (isForumPost.isForumPost()) {
    let obj = importDefault(dependencyMap[12]);
    if (isForumPost.id === obj.castMessageIdAsChannelId(id.id)) {
      if (null != isForumPost.parent_id) {
        isForumPost(dependencyMap[13]).deletePendingReply(isForumPost.id);
        const obj9 = isForumPost(dependencyMap[13]);
        obj = {};
        ({ guild_id: obj11.guildId, parent_id: obj11.parentChannelId, id: obj11.threadId } = isForumPost);
        obj.messageId = id.id;
        obj.isEdit = true;
        const items = [importDefault(dependencyMap[15]).FORUM_CHANNEL, importDefault(dependencyMap[15]).GUILD_CHANNEL];
        obj.analyticsLocations = items;
        obj = { page: constants3.GUILD_CHANNEL, section: constants4.FORUM_POST_HEADER, object: constants2.CONTEXT_MENU };
        obj.analyticsLocationObject = obj;
        const result = isForumPost(dependencyMap[14]).openCreateForumPostModal(obj);
        const obj10 = isForumPost(dependencyMap[14]);
      }
    }
  }
  if (flag) {
    if ("message_swipe" === source) {
      if (editing.isEditing(isForumPost.id, id.id)) {
        const currentUser = authStore.getCurrentUser();
        let obj1 = { message_id: id.id };
        ({ id: obj6.channel_id, guild_id: obj6.guild_id } = isForumPost);
        obj1.context_action = "edit";
        obj1.reason = "swipe_edit_undo";
        let tmp17 = null != currentUser;
        if (tmp17) {
          tmp17 = currentUser.id === id.author.id;
        }
        obj1.is_own_message = tmp17;
        importDefault(dependencyMap[16]).track(constants.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj1);
        const obj5 = importDefault(dependencyMap[16]);
        importDefault(dependencyMap[17]).endEditMessage(isForumPost.id);
        let tmp22 = null == current;
        if (!tmp22) {
          const current2 = current.current;
          tmp22 = null == current2;
          const obj8 = current2;
        }
        if (!tmp22) {
          obj8.dismissKeyboard();
        }
        const obj7 = importDefault(dependencyMap[17]);
      }
    }
  }
  const pendingReply = pendingReply.getPendingReply(isForumPost.id);
  if (null != pendingReply) {
    const currentUser1 = authStore.getCurrentUser();
    let obj2 = { message_id: id.id };
    ({ id: obj14.channel_id, guild_id: obj14.guild_id } = isForumPost);
    obj2.context_action = "reply";
    obj2.reason = getContextBarCancelReason("reply", source);
    obj2.is_own_message = null != currentUser1 && currentUser1.id === pendingReply.message.author.id;
    importDefault(dependencyMap[16]).track(constants.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj2);
    const obj13 = importDefault(dependencyMap[16]);
  }
  obj1 = isForumPost(dependencyMap[13]);
  obj1.deletePendingReply(isForumPost.id);
  obj2 = importDefault(dependencyMap[17]);
  const result1 = obj2.startEditMessageRecord(isForumPost.id, id, source);
  let tmp9 = null == current;
  if (!tmp9) {
    current = current.current;
    tmp9 = null == current;
    const obj4 = current;
  }
  if (!tmp9) {
    obj4.openSystemKeyboard();
  }
}
function handleConfirmDelete(id, id2, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  importDefault(dependencyMap[17]).deleteMessage(id, id2, flag);
}
function handleCreateThread(guild_id, id, SUMMARY_ACTION_SHEET) {
  let str = SUMMARY_ACTION_SHEET;
  if (SUMMARY_ACTION_SHEET === undefined) {
    str = "Message";
  }
  id = undefined;
  if (null != id) {
    id = id.id;
  }
  const result = importDefault(dependencyMap[26]).openThreadCreationForMobile(guild_id, id, str);
  let result1 = null == id;
  if (!result1) {
    const obj2 = id(dependencyMap[27]);
    result1 = obj2.navigateToCreateThread(guild_id.guild_id, importDefault(dependencyMap[12]).castMessageIdAsChannelId(id.id));
    const obj3 = importDefault(dependencyMap[12]);
  }
  if (!result1) {
    const obj4 = id(dependencyMap[28]);
    obj4.transitionToGuild(guild_id.guild_id, importDefault(dependencyMap[12]).castMessageIdAsChannelId(id.id));
    const obj5 = importDefault(dependencyMap[12]);
  }
}
function handleCopyMessageLink(channel, id2) {
  let obj = importDefault(dependencyMap[16]);
  obj = { message_id: id2, channel: channel.id };
  obj.track(constants.MESSAGE_LINK_COPIED, obj);
  handleCopyLink(id2(dependencyMap[32]).getChannelPermalink(channel.guild_id, channel.id, id2));
}
function getChannelAnalyticsMetadata(id) {
  const tmp = isStaticChannelRoute(id);
  const obj = {};
  let tmp2;
  if (!tmp) {
    tmp2 = id;
  }
  obj.channel_id = tmp2;
  let tmp3;
  if (tmp) {
    tmp3 = id;
  }
  obj.channel_static_route = tmp3;
  return obj;
}
function handleCopyLink(channelPermalink) {
  let flag = null != channelPermalink;
  if (flag) {
    arg1(dependencyMap[30]).copy(channelPermalink);
    const obj = arg1(dependencyMap[30]);
    arg1(dependencyMap[31]).presentLinkCopied();
    flag = true;
    const obj2 = arg1(dependencyMap[31]);
  }
  return flag;
}
function handleCopyId(id2) {
  arg1(dependencyMap[30]).copy(id2);
  const obj = arg1(dependencyMap[30]);
  const result = arg1(dependencyMap[31]).presentMessageIdCopied();
}
function handleSuppressEmbeds(id, chatInputRef, id2) {
  chatInputRef = id;
  const importDefault = id2;
  let tmp = null == chatInputRef;
  if (!tmp) {
    const current = chatInputRef.current;
    tmp = null == current;
    let obj = current;
  }
  if (!tmp) {
    obj.dismissKeyboard();
  }
  obj = {};
  const intl = chatInputRef(dependencyMap[19]).intl;
  obj.title = intl.string(chatInputRef(dependencyMap[19]).t.VL1KOk);
  const intl2 = chatInputRef(dependencyMap[19]).intl;
  obj.body = intl2.string(chatInputRef(dependencyMap[19]).t.vXZ+Fo);
  const intl3 = chatInputRef(dependencyMap[19]).intl;
  obj.cancelText = intl3.string(chatInputRef(dependencyMap[19]).t.ETE/oC);
  const intl4 = chatInputRef(dependencyMap[19]).intl;
  obj.confirmText = intl4.string(chatInputRef(dependencyMap[19]).t.YEHppG);
  obj.onConfirm = function onConfirm() {
    arg2(closure_2[17]).suppressEmbeds(arg0, arg2);
  };
  importDefault(dependencyMap[18]).show(obj);
}
function handleRemoveAttachment(id, chatInputRef, message, selectedMedia) {
  chatInputRef = id;
  const importDefault = message;
  const dependencyMap = selectedMedia;
  let sourceType;
  if (null != selectedMedia) {
    sourceType = selectedMedia.sourceType;
  }
  if ("attachment" === sourceType) {
    let tmp2 = null == chatInputRef;
    if (!tmp2) {
      const current = chatInputRef.current;
      tmp2 = null == current;
      let obj = current;
    }
    if (!tmp2) {
      obj.dismissKeyboard();
    }
    obj = {};
    const intl = chatInputRef(dependencyMap[19]).intl;
    obj.title = intl.string(chatInputRef(dependencyMap[19]).t.CbTIEo);
    const intl2 = chatInputRef(dependencyMap[19]).intl;
    obj.body = intl2.string(chatInputRef(dependencyMap[19]).t.faHmO3);
    const intl3 = chatInputRef(dependencyMap[19]).intl;
    obj.cancelText = intl3.string(chatInputRef(dependencyMap[19]).t.ETE/oC);
    const intl4 = chatInputRef(dependencyMap[19]).intl;
    obj.confirmText = intl4.string(chatInputRef(dependencyMap[19]).t.kFwAsa);
    obj.onConfirm = function onConfirm() {
      function handleConfirmRemoveAttachment(arg0, attachments, id) {
        attachments = attachments.attachments;
        const found = attachments.filter((id) => id.id !== arg2);
        const result = callback(closure_2[17]).patchMessageAttachments(arg0, attachments.id, found);
      }(arg0, arg2, arg3.source.id);
    };
    importDefault(dependencyMap[18]).show(obj);
    const obj2 = importDefault(dependencyMap[18]);
  }
}
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const isMessageComponentsV2 = arg1(dependencyMap[2]).isMessageComponentsV2;
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
({ AnalyticEvents: closure_9, AnalyticsObjects: closure_10, AnalyticsPages: closure_11, AnalyticsSections: closure_12, ComponentActions: closure_13, GIF_RE_IOS: closure_14, MediaType: closure_15, MessageStates: closure_16, MessageTypes: closure_17 } = arg1(dependencyMap[7]));
const isStaticChannelRoute = arg1(dependencyMap[8]).isStaticChannelRoute;
let closure_19 = arg1(dependencyMap[9]).EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
const jsx = arg1(dependencyMap[10]).jsx;
const tmp3 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[61]).fileFinishedImporting("modules/messages/native/long_press/LongPressMessageActionSheetUtils.tsx");

export { getContextBarCancelReason };
export { handleEdit };
export { handleCreateThread };
export { handleCopyMessageLink };
export { handleCopyId };
export const longPressMessageOptionHandler = function longPressMessageOptionHandler(analyticsLocations) {
  let actionSheetSource;
  let channel;
  let chatInputRef;
  let disabled;
  let guild_id;
  let id;
  let label;
  let message;
  let onActionExecuted;
  let onBack;
  let selectedMedia;
  ({ label, message, channel } = analyticsLocations);
  const arg1 = channel;
  ({ chatInputRef, selectedMedia, actionSheetSource, onActionExecuted, onBack, disabled } = analyticsLocations);
  if (disabled === undefined) {
    disabled = false;
  }
  let importDefault;
  let dependencyMap;
  ({ guild_id, id } = channel);
  importDefault = id;
  const id2 = message.id;
  dependencyMap = id2;
  if (!disabled) {
    let result = arg1;
    const intl = arg1(dependencyMap[19]).intl;
    if (label !== intl.string(arg1(dependencyMap[19]).t.PHjkRE)) {
      let obj = importDefault(dependencyMap[42]);
      obj.hideActionSheet();
    }
    const intl2 = arg1(dependencyMap[19]).intl;
    if (intl2.string(arg1(dependencyMap[19]).t.+78Pfm) !== label) {
      result = arg1;
      result = dependencyMap;
      const intl4 = arg1(dependencyMap[19]).intl;
      if (intl4.string(arg1(dependencyMap[19]).t.n5EBAJ) !== label) {
        result = arg1;
        result = dependencyMap;
        const intl5 = arg1(dependencyMap[19]).intl;
        result = importDefault;
        if (intl5.string(importDefault(dependencyMap[47]).1D+vqy) === label) {
          result = arg1;
          result = dependencyMap;
          if (obj54.canReportMessageToMods(message)) {
            result = arg1;
            result = dependencyMap;
            result = arg1(dependencyMap[46]).showReportToModMessageModal(message);
            const obj55 = arg1(dependencyMap[46]);
          }
          const obj54 = arg1(dependencyMap[48]);
        } else {
          result = arg1;
          result = dependencyMap;
          const intl6 = arg1(dependencyMap[19]).intl;
          if (intl6.string(arg1(dependencyMap[19]).t.k5WiPf) === label) {
            result = constants6;
            if (message.type === constants6.THREAD_STARTER_MESSAGE) {
              result = null;
              if (null != message.messageReference) {
                const guild_id2 = message.messageReference.guild_id;
                if (null != guild_id2) {
                  result = arg1;
                  result = dependencyMap;
                  result = arg1(dependencyMap[28]).transitionToGuild(guild_id2, result, result);
                  const obj61 = arg1(dependencyMap[28]);
                }
              }
            }
          } else {
            result = arg1;
            result = dependencyMap;
            const intl7 = arg1(dependencyMap[19]).intl;
            if (intl7.string(arg1(dependencyMap[19]).t.+TSRGD) === label) {
              result = arg1;
              result = dependencyMap;
              result = arg1(dependencyMap[49]).transitionToMessage(channel.id, message.id);
              const obj53 = arg1(dependencyMap[49]);
            } else {
              result = arg1;
              result = dependencyMap;
              const intl8 = arg1(dependencyMap[19]).intl;
              if (intl8.string(arg1(dependencyMap[19]).t.zBoHlf) === label) {
                result = handleCopyId;
                result = handleCopyId(id2);
              } else {
                result = arg1;
                result = dependencyMap;
                const intl9 = arg1(dependencyMap[19]).intl;
                if (intl9.string(arg1(dependencyMap[19]).t.P8tvKG) === label) {
                  result = authStore;
                  result = authStore.getUser(message.author.id);
                  result = null;
                  if (null != result) {
                    result = null == chatInputRef;
                    if (!result) {
                      const current = chatInputRef.current;
                      result = null == current;
                      const obj48 = current;
                    }
                    if (!result) {
                      result = importDefault;
                      result = dependencyMap;
                      obj = { decoration: "never" };
                      result = globalThis;
                      const _HermesInternal = HermesInternal;
                      result = obj48.insertText("@" + importDefault(dependencyMap[11]).getUserTag(result, obj), null, true);
                      const obj49 = importDefault(dependencyMap[11]);
                    }
                    result = null == chatInputRef;
                    if (!result) {
                      const current2 = chatInputRef.current;
                      result = null == current2;
                      const obj51 = current2;
                    }
                    if (!result) {
                      result = obj51.focus();
                    }
                    result = null == chatInputRef;
                    if (!result) {
                      const current3 = chatInputRef.current;
                      result = null == current3;
                      const obj52 = current3;
                    }
                    if (!result) {
                      result = obj52.openSystemKeyboard();
                    }
                  }
                } else {
                  result = arg1;
                  result = dependencyMap;
                  const intl10 = arg1(dependencyMap[19]).intl;
                  if (intl10.string(arg1(dependencyMap[19]).t.cduTBL) === label) {
                    result = importDefault;
                    result = dependencyMap;
                    obj = { userId: message.author.id, channelId: id, messageId: message.id, sourceAnalyticsLocations: analyticsLocations.analyticsLocations };
                    result = importDefault(dependencyMap[50])(obj);
                  } else {
                    result = arg1;
                    result = dependencyMap;
                    const intl11 = arg1(dependencyMap[19]).intl;
                    if (intl11.string(arg1(dependencyMap[19]).t.fsBWmS) === label) {
                      result = handleEdit;
                      result = message;
                      result = channel;
                      result = chatInputRef;
                      result = handleEdit(message, channel, chatInputRef, "action_sheet");
                    } else {
                      result = arg1;
                      result = dependencyMap;
                      const intl12 = arg1(dependencyMap[19]).intl;
                      if (intl12.string(arg1(dependencyMap[19]).t.MFGE51) === label) {
                        result = function handlePublish(id, chatInputRef, id2) {
                          const channel = id;
                          id = id2;
                          let tmp = null == chatInputRef;
                          if (!tmp) {
                            const current = chatInputRef.current;
                            tmp = null == current;
                            let obj = current;
                          }
                          if (!tmp) {
                            obj.dismissKeyboard();
                          }
                          obj = {};
                          const intl = channel(id2[19]).intl;
                          obj.title = intl.string(channel(id2[19]).t.aIz1oV);
                          obj = { channelId: id };
                          obj.children = callback(id(id2[20]), obj);
                          const intl2 = channel(id2[19]).intl;
                          obj.cancelText = intl2.string(channel(id2[19]).t.ETE/oC);
                          const intl3 = channel(id2[19]).intl;
                          obj.confirmText = intl3.string(channel(id2[19]).t.cY+Oob);
                          obj.onConfirm = function onConfirm() {
                            return arg2(closure_2[17]).crosspostMessage(arg0, arg2);
                          };
                          id(id2[18]).show(obj);
                        }(id, chatInputRef, id2);
                      } else {
                        result = arg1;
                        result = dependencyMap;
                        const intl13 = arg1(dependencyMap[19]).intl;
                        if (intl13.string(arg1(dependencyMap[19]).t.CvQ18w) === label) {
                          result = function handlePin(channel, chatInputRef, message) {
                            const id = message;
                            let tmp = null == chatInputRef;
                            if (!tmp) {
                              const current = chatInputRef.current;
                              tmp = null == current;
                              let obj = current;
                            }
                            if (!tmp) {
                              obj.dismissKeyboard();
                            }
                            obj = {};
                            const intl = channel(id2[19]).intl;
                            obj.title = intl.string(channel(id2[19]).t.CvQ18w);
                            const intl2 = channel(id2[19]).intl;
                            obj.body = intl2.string(channel(id2[19]).t.WG5dyo);
                            obj = { message };
                            obj.children = callback(id(id2[21]), obj);
                            const intl3 = channel(id2[19]).intl;
                            obj.cancelText = intl3.string(channel(id2[19]).t.gm1Vej);
                            const intl4 = channel(id2[19]).intl;
                            obj.confirmText = intl4.string(channel(id2[19]).t.p89ACt);
                            obj.onConfirm = function onConfirm() {
                              arg2(closure_2[22]).pinMessage(arg0, arg2.id);
                              const AccessibilityAnnouncer = arg0(closure_2[23]).AccessibilityAnnouncer;
                              const intl = arg0(closure_2[19]).intl;
                              AccessibilityAnnouncer.announce(intl.string(arg0(closure_2[19]).t.sCfDDl));
                            };
                            id(id2[18]).show(obj);
                          }(channel, chatInputRef, message);
                        } else {
                          result = arg1;
                          result = dependencyMap;
                          const intl14 = arg1(dependencyMap[19]).intl;
                          if (intl14.string(arg1(dependencyMap[19]).t.Bse+F/) === label) {
                            result = function handleUnpin(channel, chatInputRef, message) {
                              const id = message;
                              let tmp = null == chatInputRef;
                              if (!tmp) {
                                const current = chatInputRef.current;
                                tmp = null == current;
                                let obj = current;
                              }
                              if (!tmp) {
                                obj.dismissKeyboard();
                              }
                              obj = {};
                              const intl = channel(id2[19]).intl;
                              obj.title = intl.string(channel(id2[19]).t.Bse+F/);
                              const intl2 = channel(id2[19]).intl;
                              obj.body = intl2.string(channel(id2[19]).t.NjEPp7);
                              obj = { message };
                              obj.children = callback(id(id2[21]), obj);
                              const intl3 = channel(id2[19]).intl;
                              obj.cancelText = intl3.string(channel(id2[19]).t.gm1Vej);
                              const intl4 = channel(id2[19]).intl;
                              obj.confirmText = intl4.string(channel(id2[19]).t.p89ACt);
                              obj.onConfirm = function onConfirm() {
                                return arg2(closure_2[22]).unpinMessage(arg0, arg2.id);
                              };
                              id(id2[18]).show(obj);
                            }(channel, chatInputRef, message);
                          } else {
                            result = arg1;
                            result = dependencyMap;
                            const intl15 = arg1(dependencyMap[19]).intl;
                            if (intl15.string(arg1(dependencyMap[19]).t.lE/PG3) === label) {
                              result = importDefault;
                              result = dependencyMap;
                              result = importDefault(dependencyMap[17]).patchMessageGuildOfficial(id, id2, true);
                              const obj46 = importDefault(dependencyMap[17]);
                            } else {
                              result = arg1;
                              result = dependencyMap;
                              const intl16 = arg1(dependencyMap[19]).intl;
                              if (intl16.string(arg1(dependencyMap[19]).t.2km5Gf) === label) {
                                result = importDefault;
                                result = dependencyMap;
                                result = importDefault(dependencyMap[17]).patchMessageGuildOfficial(id, id2, false);
                                const obj45 = importDefault(dependencyMap[17]);
                              } else {
                                result = arg1;
                                result = dependencyMap;
                                const intl17 = arg1(dependencyMap[19]).intl;
                                if (intl17.string(arg1(dependencyMap[19]).t.xwMqD7) === label) {
                                  result = constants5;
                                  if (message.state === constants5.SENDING) {
                                    result = importDefault;
                                    result = dependencyMap;
                                    result = importDefault(dependencyMap[24]).cancelRequest(id2);
                                    const obj42 = importDefault(dependencyMap[24]);
                                  } else {
                                    result = constants5;
                                    if (message.state === constants5.SEND_FAILED) {
                                      result = handleConfirmDelete;
                                      result = handleConfirmDelete(id, id2, true);
                                    } else {
                                      result = function handleDelete(id, chatInputRef, message) {
                                        const channel = id;
                                        id = message;
                                        let tmp = null == chatInputRef;
                                        if (!tmp) {
                                          const current = chatInputRef.current;
                                          tmp = null == current;
                                          let obj = current;
                                        }
                                        if (!tmp) {
                                          obj.dismissKeyboard();
                                        }
                                        obj = {};
                                        const intl = channel(id2[19]).intl;
                                        obj.title = intl.string(channel(id2[19]).t.MWMcg7);
                                        const intl2 = channel(id2[19]).intl;
                                        obj.body = intl2.string(channel(id2[19]).t.AMvpS4);
                                        obj = { message };
                                        obj.children = callback(id(id2[21]), obj);
                                        const intl3 = channel(id2[19]).intl;
                                        obj.cancelText = intl3.string(channel(id2[19]).t.gm1Vej);
                                        const intl4 = channel(id2[19]).intl;
                                        obj.confirmText = intl4.string(channel(id2[19]).t.p89ACt);
                                        obj.onConfirm = function onConfirm() {
                                          callback(arg0, arg2.id);
                                        };
                                        id(id2[18]).show(obj);
                                      }(id, chatInputRef, message);
                                    }
                                  }
                                  result = importDefault;
                                  result = dependencyMap;
                                  result = constants;
                                  let obj1 = { channel_id: id, guild_id, action_sheet_option: "delete", message_state: message.state };
                                  result = importDefault(dependencyMap[51]).trackWithMetadata(constants.MESSAGE_ACTION_SHEET_OPTION_PRESSED, obj1);
                                  const obj43 = importDefault(dependencyMap[51]);
                                } else {
                                  result = arg1;
                                  result = dependencyMap;
                                  const intl18 = arg1(dependencyMap[19]).intl;
                                  if (intl18.string(arg1(dependencyMap[19]).t.5911Lb) === label) {
                                    result = uploaderFileForMessageId;
                                    result = uploaderFileForMessageId.getUploaderFileForMessageId(message.id);
                                    result = null;
                                    result = undefined;
                                    if (null != result) {
                                      result = result.items;
                                    }
                                    result = undefined;
                                    result = importDefault;
                                    result = dependencyMap;
                                    result = options;
                                    result = importDefault(dependencyMap[25]);
                                    result = channel;
                                    result = message;
                                    result = result(channel, message, result, options.getOptions(message.id));
                                    result = constants;
                                    const obj2 = { channel_id: id, guild_id, action_sheet_option: "retry", message_state: message.state };
                                    result = importDefault(dependencyMap[51]).trackWithMetadata(constants.MESSAGE_ACTION_SHEET_OPTION_PRESSED, obj2);
                                    const obj40 = importDefault(dependencyMap[51]);
                                  } else {
                                    result = arg1;
                                    result = dependencyMap;
                                    const intl19 = arg1(dependencyMap[19]).intl;
                                    if (intl19.string(arg1(dependencyMap[19]).t.JrGD7E) === label) {
                                      result = message.getContentMessage();
                                      result = isMessageComponentsV2;
                                      result = arg1;
                                      result = dependencyMap;
                                      if (isMessageComponentsV2(result)) {
                                        result = result(result[29]).getAllTextDisplayContent(result.components);
                                        result = null;
                                        if (null != result) {
                                          result = arg1;
                                          result = dependencyMap;
                                          result = arg1(dependencyMap[30]).copy(result);
                                          const obj38 = arg1(dependencyMap[30]);
                                        }
                                        const resultResult = result(result[29]);
                                      } else {
                                        result = result(result[30]).copy(result.content);
                                        const resultResult1 = result(result[30]);
                                      }
                                      result = arg1;
                                      result = dependencyMap;
                                      result = arg1(dependencyMap[31]).presentMessageCopied();
                                      const obj39 = arg1(dependencyMap[31]);
                                    } else {
                                      result = arg1;
                                      result = dependencyMap;
                                      const intl20 = arg1(dependencyMap[19]).intl;
                                      if (intl20.string(arg1(dependencyMap[19]).t.lfIHs4) === label) {
                                        const result1 = arg1(dependencyMap[52]).handleAddNewReactions(channel, id2);
                                        const obj35 = arg1(dependencyMap[52]);
                                      } else {
                                        result = arg1;
                                        result = dependencyMap;
                                        const intl21 = arg1(dependencyMap[19]).intl;
                                        if (intl21.string(arg1(dependencyMap[19]).t.gHp0C4) === label) {
                                          if ("Preview" === actionSheetSource) {
                                            const result2 = arg1(dependencyMap[52]).handleViewPreviewReactions(id2, id);
                                            const obj34 = arg1(dependencyMap[52]);
                                          } else {
                                            let obj3 = { messageId: id2, channelId: id };
                                            const obj4 = { object: constants2.MESSAGE_ACTION_SHEET };
                                            obj3.location = obj4;
                                            arg1(dependencyMap[52]).handleViewReactions(obj3);
                                            const obj31 = arg1(dependencyMap[52]);
                                          }
                                        } else {
                                          result = arg1;
                                          result = dependencyMap;
                                          const intl22 = arg1(dependencyMap[19]).intl;
                                          if (intl22.string(arg1(dependencyMap[19]).t.ZbtGBm) === label) {
                                            const result3 = arg1(dependencyMap[52]).handleRemoveAllReactions(id, id2);
                                            const obj30 = arg1(dependencyMap[52]);
                                          } else {
                                            result = arg1;
                                            result = dependencyMap;
                                            const intl23 = arg1(dependencyMap[19]).intl;
                                            if (intl23.string(arg1(dependencyMap[19]).t.g33r/P) === label) {
                                              let obj5 = { recipientIds: message.author.id };
                                              importDefault(dependencyMap[33]).openPrivateChannel(obj5);
                                              const obj28 = importDefault(dependencyMap[33]);
                                            } else {
                                              result = arg1;
                                              result = dependencyMap;
                                              const intl24 = arg1(dependencyMap[19]).intl;
                                              if (intl24.string(arg1(dependencyMap[19]).t.Xrt5Po) === label) {
                                                handleCopyMessageLink(channel, id2);
                                              } else {
                                                result = arg1;
                                                result = dependencyMap;
                                                const intl25 = arg1(dependencyMap[19]).intl;
                                                if (intl25.string(arg1(dependencyMap[19]).t.RpE9k7) === label) {
                                                  importDefault(dependencyMap[34])(id, id2);
                                                } else {
                                                  result = arg1;
                                                  result = dependencyMap;
                                                  const intl26 = arg1(dependencyMap[19]).intl;
                                                  if (intl26.string(arg1(dependencyMap[19]).t.S/xNKV) === label) {
                                                    function handleSaveImage(selectedMedia, id) {
                                                      let fn = selectedMedia;
                                                      const channel = selectedMedia;
                                                      let mediaUrl;
                                                      if (null != selectedMedia) {
                                                        mediaUrl = fn.mediaUrl;
                                                      }
                                                      if (null != mediaUrl) {
                                                        closure_2 = channel(closure_2[35]).urlMatchesFileExtension(fn.mediaUrl, closure_14);
                                                        const obj3 = channel(closure_2[35]);
                                                        let num = id(closure_2[36]).toURLSafe;
                                                        const numResult = num(fn.mediaUrl);
                                                        if (null == numResult) {
                                                          let resolved = Promise.resolve(fn.mediaUrl);
                                                          fn = () => {
                                                            let obj = arg0(closure_2[31]);
                                                            if (closure_2) {
                                                              obj.presentGifSaved();
                                                            } else {
                                                              obj.presentImageSaved();
                                                            }
                                                            obj = {};
                                                            const merged = Object.assign(callback(arg1));
                                                            arg1(closure_2[16]).track(constants.CONTEXT_MENU_IMAGE_SAVED, obj);
                                                          };
                                                          resolved.then((mediaUrl) => mediaUrl(closure_2[38]).downloadMediaAssetWithContentType(mediaUrl, closure_2 ? closure_15.GIF : closure_15.IMAGE, mediaUrl.contentType)).then(fn, () => {
                                                            let obj = arg1(closure_2[18]);
                                                            obj = {};
                                                            const intl = arg0(closure_2[19]).intl;
                                                            obj.title = intl.string(arg0(closure_2[19]).t.cV3alD);
                                                            const intl2 = arg0(closure_2[19]).intl;
                                                            obj.body = intl2.string(arg0(closure_2[19]).t.r4Zjzv);
                                                            obj.isDismissable = true;
                                                            obj.show(obj);
                                                            obj = {};
                                                            const merged = Object.assign(callback(arg1));
                                                            arg1(closure_2[16]).track(constants.CONTEXT_MENU_IMAGE_SAVE_FAILED, obj);
                                                          });
                                                          const nextPromise = resolved.then((mediaUrl) => mediaUrl(closure_2[38]).downloadMediaAssetWithContentType(mediaUrl, closure_2 ? closure_15.GIF : closure_15.IMAGE, mediaUrl.contentType));
                                                        } else {
                                                          num = 37;
                                                          const obj = channel(closure_2[37]);
                                                        }
                                                        const tmp12 = id(closure_2[36]);
                                                        resolved = channel(closure_2[num]).maybeRefreshAttachmentUrl(fn.mediaUrl);
                                                        const obj2 = channel(closure_2[num]);
                                                      }
                                                    }(selectedMedia, id);
                                                  } else {
                                                    result = arg1;
                                                    result = dependencyMap;
                                                    const intl27 = arg1(dependencyMap[19]).intl;
                                                    if (intl27.string(arg1(dependencyMap[19]).t.JVuuz3) === label) {
                                                      function handleSaveVideo(selectedMedia) {
                                                        let mediaUrl;
                                                        if (null != selectedMedia) {
                                                          mediaUrl = selectedMedia.mediaUrl;
                                                        }
                                                        if (null != mediaUrl) {
                                                          const result = channel(id2[38]).downloadMediaAssetWithContentType(selectedMedia.mediaUrl, constants2.VIDEO, selectedMedia.contentType);
                                                          result.then(() => {
                                                            callback(closure_2[31]).presentVideoSaved();
                                                          }, () => {
                                                            let obj = callback2(closure_2[18]);
                                                            obj = {};
                                                            const intl = callback(closure_2[19]).intl;
                                                            obj.title = intl.string(callback(closure_2[19]).t.cV3alD);
                                                            const intl2 = callback(closure_2[19]).intl;
                                                            obj.body = intl2.string(callback(closure_2[19]).t.r4Zjzv);
                                                            obj.isDismissable = true;
                                                            obj.show(obj);
                                                          });
                                                          const obj = channel(id2[38]);
                                                        }
                                                      }(selectedMedia);
                                                    } else {
                                                      result = arg1;
                                                      result = dependencyMap;
                                                      const intl28 = arg1(dependencyMap[19]).intl;
                                                      if (intl28.string(arg1(dependencyMap[19]).t.vbAEaA) === label) {
                                                        let mediaUrl;
                                                        if (null != selectedMedia) {
                                                          mediaUrl = selectedMedia.mediaUrl;
                                                        }
                                                        if (null != mediaUrl) {
                                                          result = arg1;
                                                          result = dependencyMap;
                                                          let obj6 = { href: mediaUrl };
                                                          result = arg1(dependencyMap[39]).handleClick(obj6);
                                                          const obj59 = arg1(dependencyMap[39]);
                                                        }
                                                      } else {
                                                        result = arg1;
                                                        result = dependencyMap;
                                                        const intl29 = arg1(dependencyMap[19]).intl;
                                                        if (intl29.string(arg1(dependencyMap[19]).t.92CPQ+) !== label) {
                                                          result = arg1;
                                                          result = dependencyMap;
                                                          const intl30 = arg1(dependencyMap[19]).intl;
                                                          if (intl30.string(arg1(dependencyMap[19]).t.8xHmxo) !== label) {
                                                            result = arg1;
                                                            result = dependencyMap;
                                                            const intl31 = arg1(dependencyMap[19]).intl;
                                                            if (intl31.string(arg1(dependencyMap[19]).t.5IEsGx) === label) {
                                                              const obj7 = { message, channel, chatInputRef, actionSource: "action_sheet" };
                                                              importDefault(dependencyMap[53])(obj7);
                                                              if ("Preview" === actionSheetSource) {
                                                                result = arg1;
                                                                result = dependencyMap;
                                                                result = arg1(dependencyMap[49]).transitionToMessage(channel.id, message.id);
                                                                result = globalThis;
                                                                const _setTimeout = setTimeout;
                                                                result = setTimeout(() => {
                                                                  const ComponentDispatch = channel(id2[54]).ComponentDispatch;
                                                                  return ComponentDispatch.dispatch(constants.TEXTAREA_FOCUS, { channelId: channel.id });
                                                                }, 500);
                                                                const obj58 = arg1(dependencyMap[49]);
                                                              }
                                                            } else {
                                                              result = arg1;
                                                              result = dependencyMap;
                                                              const intl32 = arg1(dependencyMap[19]).intl;
                                                              if (intl32.string(arg1(dependencyMap[19]).t.I3ltXO) === label) {
                                                                let obj8 = { message, source: "long-press-sheet" };
                                                                arg1(dependencyMap[55]).openForwardModal(obj8);
                                                                const obj22 = arg1(dependencyMap[55]);
                                                              } else {
                                                                result = arg1;
                                                                result = dependencyMap;
                                                                const intl33 = arg1(dependencyMap[19]).intl;
                                                                if (intl33.string(arg1(dependencyMap[19]).t.rBIGBL) === label) {
                                                                  handleCreateThread(channel, message);
                                                                } else {
                                                                  result = arg1;
                                                                  result = dependencyMap;
                                                                  const intl34 = arg1(dependencyMap[19]).intl;
                                                                  if (intl34.string(arg1(dependencyMap[19]).t.39d0Wj) === label) {
                                                                    const obj20 = arg1(dependencyMap[28]);
                                                                    obj20.transitionToGuild(channel.guild_id, importDefault(dependencyMap[12]).castMessageIdAsChannelId(message.id));
                                                                    const obj21 = importDefault(dependencyMap[12]);
                                                                  } else {
                                                                    result = arg1;
                                                                    result = dependencyMap;
                                                                    const intl35 = arg1(dependencyMap[19]).intl;
                                                                    if (intl35.string(arg1(dependencyMap[19]).t.PHjkRE) === label) {
                                                                      let obj16 = importDefault(dependencyMap[42]);
                                                                      obj16.hideActionSheet();
                                                                      let obj17 = arg1(dependencyMap[27]);
                                                                      const obj9 = { channel, commandType: arg1(dependencyMap[56]).ApplicationCommandType.MESSAGE, commandTargetId: message.id };
                                                                      const result4 = obj17.navigateToContextMenuCommands(obj9);
                                                                    } else {
                                                                      result = arg1;
                                                                      result = dependencyMap;
                                                                      const intl36 = arg1(dependencyMap[19]).intl;
                                                                      if (intl36.string(arg1(dependencyMap[19]).t.tpxJto) === label) {
                                                                        let obj14 = arg1(dependencyMap[57]);
                                                                        let obj10 = { channelId: id, messageId: id2, displayToast: true };
                                                                        const result5 = obj14.addOrUpdateSavedMessage(obj10);
                                                                      } else {
                                                                        result = arg1;
                                                                        result = dependencyMap;
                                                                        const intl37 = arg1(dependencyMap[19]).intl;
                                                                        if (intl37.string(arg1(dependencyMap[19]).t.SvXS1Z) === label) {
                                                                          let obj12 = arg1(dependencyMap[57]);
                                                                          const obj11 = { channelId: id, messageId: id2, displayToast: true };
                                                                          obj12.removeSavedMessage(obj11);
                                                                        } else {
                                                                          result = arg1;
                                                                          result = dependencyMap;
                                                                          const intl38 = arg1(dependencyMap[19]).intl;
                                                                          if (intl38.string(arg1(dependencyMap[19]).t.mJ3P0N) === label) {
                                                                            obj10 = importDefault(dependencyMap[42]);
                                                                            obj12 = {
                                                                              createReminder(dueAt) {
                                                                                                                                                          let obj = channel(id2[57]);
                                                                                                                                                          obj = { channelId: id, messageId: id2, dueAt, displayToast: true };
                                                                                                                                                          return obj.addOrUpdateSavedMessage(obj);
                                                                                                                                                        }
                                                                            };
                                                                            ({ channel_id: obj12.channelId, id: obj12.messageId } = message);
                                                                            obj12.onBack = onBack;
                                                                            obj10.openLazy(arg1(dependencyMap[44])(dependencyMap[58], dependencyMap.paths), "MessageReminderDurationActionSheet", obj12);
                                                                          } else {
                                                                            result = arg1;
                                                                            result = dependencyMap;
                                                                            const intl39 = arg1(dependencyMap[19]).intl;
                                                                            if (intl39.string(arg1(dependencyMap[19]).t.vrbqs1) === label) {
                                                                              obj8 = importDefault(dependencyMap[42]);
                                                                              const obj13 = {
                                                                                createReminder(dueAt) {
                                                                                                                                                              let obj = channel(id2[57]);
                                                                                                                                                              obj = { channelId: id, messageId: id2, dueAt, displayToast: true };
                                                                                                                                                              return obj.addOrUpdateSavedMessage(obj);
                                                                                                                                                            },
                                                                                removeReminder(arg0) {
                                                                                                                                                              let obj = channel(id2[57]);
                                                                                                                                                              obj = { channelId: id, messageId: id2, dueAt: undefined, displayToast: true };
                                                                                                                                                              return obj.addOrUpdateSavedMessage(obj);
                                                                                                                                                            }
                                                                              };
                                                                              ({ channel_id: obj10.channelId, id: obj10.messageId } = message);
                                                                              obj13.onBack = onBack;
                                                                              obj8.openLazy(arg1(dependencyMap[44])(dependencyMap[58], dependencyMap.paths), "MessageReminderDurationActionSheet", obj13);
                                                                            } else {
                                                                              result = arg1;
                                                                              result = dependencyMap;
                                                                              const intl40 = arg1(dependencyMap[19]).intl;
                                                                              if (intl40.string(arg1(dependencyMap[19]).t.ZH7P2h) === label) {
                                                                                if (null != selectedMedia) {
                                                                                  id = undefined;
                                                                                  if ("embed" === selectedMedia.sourceType) {
                                                                                    id = selectedMedia.source.id;
                                                                                  }
                                                                                  let id1;
                                                                                  if ("attachment" === selectedMedia.sourceType) {
                                                                                    id1 = selectedMedia.source.id;
                                                                                  }
                                                                                  let result6 = undefined !== id || undefined !== id1;
                                                                                  if (!result6) {
                                                                                    obj5 = arg1(dependencyMap[41]);
                                                                                    result6 = obj5.messageHasObscurableMedia(message);
                                                                                  }
                                                                                  if (result6) {
                                                                                    obj6 = importDefault(dependencyMap[42]);
                                                                                    obj14 = {};
                                                                                    ({ channel_id: obj8.channelId, id: obj8.messageId } = message);
                                                                                    obj14.attachmentId = id1;
                                                                                    obj14.embedId = id;
                                                                                    obj6.openLazy(arg1(dependencyMap[44])(dependencyMap[43], dependencyMap.paths), closure_19, obj14);
                                                                                  }
                                                                                }
                                                                              } else {
                                                                                result = arg1;
                                                                                result = dependencyMap;
                                                                                const intl41 = arg1(dependencyMap[19]).intl;
                                                                                if (intl41.string(arg1(dependencyMap[19]).t.grdwwt) === label) {
                                                                                  obj3 = importDefault(dependencyMap[59]);
                                                                                  ({ channel_id: obj5.channelId, id: obj5.messageId } = message);
                                                                                  obj3.endPollEarly({});
                                                                                  const obj15 = {};
                                                                                } else {
                                                                                  result = arg1;
                                                                                  result = dependencyMap;
                                                                                  const intl42 = arg1(dependencyMap[19]).intl;
                                                                                  if (intl42.string(arg1(dependencyMap[19]).t.Rjezbz) === label) {
                                                                                    obj1 = importDefault(dependencyMap[42]);
                                                                                    obj16 = { message, guildId: guild_id, onBack };
                                                                                    obj1.openLazy(arg1(dependencyMap[44])(dependencyMap[60], dependencyMap.paths), "AppInteractionInfoActionSheet", obj16);
                                                                                  } else {
                                                                                    result = arg1;
                                                                                    result = dependencyMap;
                                                                                    const intl43 = arg1(dependencyMap[19]).intl;
                                                                                    if (intl43.string(arg1(dependencyMap[19]).t.4sxKOb) !== label) {
                                                                                      result = arg1;
                                                                                      result = dependencyMap;
                                                                                      const intl44 = arg1(dependencyMap[19]).intl;
                                                                                      if (intl44.string(arg1(dependencyMap[19]).t.wUIMqa) !== label) {
                                                                                        const intl3 = arg1(dependencyMap[19]).intl;
                                                                                        if (intl3.string(arg1(dependencyMap[19]).t.kFwAsa) === label) {
                                                                                          result = handleRemoveAttachment;
                                                                                          result = id;
                                                                                          result = chatInputRef;
                                                                                          result = message;
                                                                                          result = selectedMedia;
                                                                                          result = handleRemoveAttachment(id, chatInputRef, message, selectedMedia);
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                    handleSuppressEmbeds(id, chatInputRef, id2);
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
                                                        let mediaUrl1;
                                                        if (null != selectedMedia) {
                                                          mediaUrl1 = selectedMedia.mediaUrl;
                                                        }
                                                        if (handleCopyLink(mediaUrl1)) {
                                                          obj17 = {};
                                                          let hostname;
                                                          if (null != mediaUrl1) {
                                                            hostname = arg1(dependencyMap[40]).getHostname(mediaUrl1);
                                                            const obj27 = arg1(dependencyMap[40]);
                                                          }
                                                          obj17.hostname = hostname;
                                                          const merged = Object.assign(getChannelAnalyticsMetadata(id));
                                                          importDefault(dependencyMap[16]).track(constants.CONTEXT_MENU_MEDIA_LINK_COPIED, obj17);
                                                          const obj25 = importDefault(dependencyMap[16]);
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
      result = null;
      if (null != onActionExecuted) {
        result = onActionExecuted(label);
      }
    }
    result = arg1;
    result = dependencyMap;
    if (obj56.canReportMessage(message)) {
      result = arg1;
      result = dependencyMap;
      result = arg1(dependencyMap[46]).showReportModalForMessage(message, "mobile_message_action_sheet");
      const obj57 = arg1(dependencyMap[46]);
    }
    const obj56 = arg1(dependencyMap[45]);
  }
};
