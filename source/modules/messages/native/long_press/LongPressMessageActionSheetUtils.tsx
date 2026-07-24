// Module ID: 9578
// Function ID: 74509
// Name: getContextBarCancelReason
// Dependencies: [31, 6921, 3768, 6922, 7079, 1849, 9579, 653, 1355, 6835, 33, 3969, 21, 9580, 9581, 5482, 675, 6691, 4470, 1212, 9891, 9895, 9896, 3843, 7075, 9898, 7006, 3981, 1198, 4353, 5490, 3830, 4312, 4140, 9899, 4317, 1443, 9617, 8320, 8380, 8383, 5670, 4098, 9900, 1934, 5667, 7689, 2298, 5655, 4138, 8537, 4324, 9351, 9903, 1207, 9904, 1881, 9943, 9955, 9967, 9974, 2]
// Exports: longPressMessageOptionHandler

// Module 9578 (getContextBarCancelReason)
import "presentAddedFriendToast";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { isMessageComponentsV2 } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";
import { isStaticChannelRoute } from "set";
import { EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY as closure_19 } from "USER_SETTING_ACTION_SHEET_KEY";
import { jsx } from "module_4140";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_9;
const require = arg1;
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
    let obj = importDefault(21);
    if (isForumPost.id === obj.castMessageIdAsChannelId(id.id)) {
      if (null != isForumPost.parent_id) {
        require(9580) /* createPendingReply */.deletePendingReply(isForumPost.id);
        const obj9 = require(9580) /* createPendingReply */;
        obj = {};
        ({ guild_id: obj11.guildId, parent_id: obj11.parentChannelId, id: obj11.threadId } = isForumPost);
        obj.messageId = id.id;
        obj.isEdit = true;
        const items = [importDefault(5482).FORUM_CHANNEL, importDefault(5482).GUILD_CHANNEL];
        obj.analyticsLocations = items;
        obj = { page: constants3.GUILD_CHANNEL, section: constants4.FORUM_POST_HEADER, object: constants2.CONTEXT_MENU };
        obj.analyticsLocationObject = obj;
        const result = require(9581) /* openCreateForumPostModal */.openCreateForumPostModal(obj);
        const obj10 = require(9581) /* openCreateForumPostModal */;
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
        importDefault(675).track(constants.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj1);
        const obj5 = importDefault(675);
        importDefault(6691).endEditMessage(isForumPost.id);
        let tmp22 = null == current;
        if (!tmp22) {
          const current2 = current.current;
          tmp22 = null == current2;
          const obj8 = current2;
        }
        if (!tmp22) {
          obj8.dismissKeyboard();
        }
        const obj7 = importDefault(6691);
      }
    }
  }
  pendingReply = pendingReply.getPendingReply(isForumPost.id);
  if (null != pendingReply) {
    const currentUser1 = authStore.getCurrentUser();
    let obj2 = { message_id: id.id };
    ({ id: obj14.channel_id, guild_id: obj14.guild_id } = isForumPost);
    obj2.context_action = "reply";
    obj2.reason = getContextBarCancelReason("reply", source);
    obj2.is_own_message = null != currentUser1 && currentUser1.id === pendingReply.message.author.id;
    importDefault(675).track(constants.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj2);
    const obj13 = importDefault(675);
  }
  obj1 = require(9580) /* createPendingReply */;
  obj1.deletePendingReply(isForumPost.id);
  obj2 = importDefault(6691);
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
  importDefault(6691).deleteMessage(id, id2, flag);
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
  const result = importDefault(7006).openThreadCreationForMobile(guild_id, id, str);
  let result1 = null == id;
  if (!result1) {
    const obj2 = require(3981) /* _createForOfIteratorHelperLoose */;
    result1 = obj2.navigateToCreateThread(guild_id.guild_id, importDefault(21).castMessageIdAsChannelId(id.id));
    const obj3 = importDefault(21);
  }
  if (!result1) {
    const obj4 = require(1198) /* shouldNavigate */;
    obj4.transitionToGuild(guild_id.guild_id, importDefault(21).castMessageIdAsChannelId(id.id));
    const obj5 = importDefault(21);
  }
}
function handleCopyMessageLink(channel, id2) {
  let obj = importDefault(675);
  obj = { message_id: id2, channel: channel.id };
  obj.track(constants.MESSAGE_LINK_COPIED, obj);
  handleCopyLink(require(4312) /* _createForOfIteratorHelperLoose */.getChannelPermalink(channel.guild_id, channel.id, id2));
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
    require(5490) /* _copy */.copy(channelPermalink);
    const obj = require(5490) /* _copy */;
    require(3830) /* presentAddedFriendToast */.presentLinkCopied();
    flag = true;
    const obj2 = require(3830) /* presentAddedFriendToast */;
  }
  return flag;
}
function handleCopyId(id2) {
  require(5490) /* _copy */.copy(id2);
  const obj = require(5490) /* _copy */;
  const result = require(3830) /* presentAddedFriendToast */.presentMessageIdCopied();
}
function handleSuppressEmbeds(id, chatInputRef, id2) {
  const _require = id;
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
  const intl = _require(1212).intl;
  obj.title = intl.string(_require(1212).t.VL1KOk);
  const intl2 = _require(1212).intl;
  obj.body = intl2.string(_require(1212).t["vXZ+Fo"]);
  const intl3 = _require(1212).intl;
  obj.cancelText = intl3.string(_require(1212).t["ETE/oC"]);
  const intl4 = _require(1212).intl;
  obj.confirmText = intl4.string(_require(1212).t.YEHppG);
  obj.onConfirm = function onConfirm() {
    id2(outer1_2[17]).suppressEmbeds(closure_0, id2);
  };
  importDefault(4470).show(obj);
}
function handleRemoveAttachment(id, chatInputRef, message, selectedMedia) {
  const _require = id;
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
    const intl = _require(1212).intl;
    obj.title = intl.string(_require(1212).t.CbTIEo);
    const intl2 = _require(1212).intl;
    obj.body = intl2.string(_require(1212).t.faHmO3);
    const intl3 = _require(1212).intl;
    obj.cancelText = intl3.string(_require(1212).t["ETE/oC"]);
    const intl4 = _require(1212).intl;
    obj.confirmText = intl4.string(_require(1212).t.kFwAsa);
    obj.onConfirm = function onConfirm() {
      (function handleConfirmRemoveAttachment(closure_0, closure_1, id) {
        closure_0 = id;
        const attachments = closure_1.attachments;
        const found = attachments.filter((id) => id.id !== closure_0);
        const result = callback(table[17]).patchMessageAttachments(closure_0, closure_1.id, found);
      })(closure_0, closure_1, selectedMedia.source.id);
    };
    importDefault(4470).show(obj);
    const obj2 = importDefault(4470);
  }
}
({ AnalyticEvents: closure_9, AnalyticsObjects: closure_10, AnalyticsPages: closure_11, AnalyticsSections: closure_12, ComponentActions: closure_13, GIF_RE_IOS: closure_14, MediaType: closure_15, MessageStates: closure_16, MessageTypes: closure_17 } = ME);
let result = require("_callSuper").fileFinishedImporting("modules/messages/native/long_press/LongPressMessageActionSheetUtils.tsx");

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
  ({ chatInputRef, selectedMedia, actionSheetSource, onActionExecuted, onBack, disabled } = analyticsLocations);
  if (disabled === undefined) {
    disabled = false;
  }
  id = undefined;
  let id2;
  ({ guild_id, id } = channel);
  id2 = message.id;
  if (!disabled) {
    let result = channel;
    let intl = channel(id2[19]).intl;
    if (label !== intl.string(channel(id2[19]).t.PHjkRE)) {
      let obj = id(id2[42]);
      obj.hideActionSheet();
    }
    let intl2 = channel(id2[19]).intl;
    if (intl2.string(channel(id2[19]).t["+78Pfm"]) !== label) {
      result = channel;
      result = id2;
      let intl4 = channel(id2[19]).intl;
      if (intl4.string(channel(id2[19]).t.n5EBAJ) !== label) {
        result = channel;
        result = id2;
        const intl5 = channel(id2[19]).intl;
        result = id;
        if (intl5.string(id(id2[47])["1D+vqy"]) === label) {
          result = channel;
          result = id2;
          if (obj54.canReportMessageToMods(message)) {
            result = channel;
            result = id2;
            result = channel(id2[46]).showReportToModMessageModal(message);
            const obj55 = channel(id2[46]);
          }
          obj54 = channel(id2[48]);
        } else {
          result = channel;
          result = id2;
          const intl6 = channel(id2[19]).intl;
          if (intl6.string(channel(id2[19]).t.k5WiPf) === label) {
            result = constants6;
            if (message.type === constants6.THREAD_STARTER_MESSAGE) {
              result = null;
              if (null != message.messageReference) {
                const guild_id2 = message.messageReference.guild_id;
                if (null != guild_id2) {
                  result = channel;
                  result = id2;
                  result = channel(id2[28]).transitionToGuild(guild_id2, result, result);
                  const obj61 = channel(id2[28]);
                }
              }
            }
          } else {
            result = channel;
            result = id2;
            const intl7 = channel(id2[19]).intl;
            if (intl7.string(channel(id2[19]).t["+TSRGD"]) === label) {
              result = channel;
              result = id2;
              result = channel(id2[49]).transitionToMessage(channel.id, message.id);
              const obj53 = channel(id2[49]);
            } else {
              result = channel;
              result = id2;
              const intl8 = channel(id2[19]).intl;
              if (intl8.string(channel(id2[19]).t.zBoHlf) === label) {
                result = handleCopyId;
                result = handleCopyId(id2);
              } else {
                result = channel;
                result = id2;
                const intl9 = channel(id2[19]).intl;
                if (intl9.string(channel(id2[19]).t.P8tvKG) === label) {
                  result = authStore;
                  result = authStore.getUser(message.author.id);
                  result = null;
                  if (null != result) {
                    result = null == chatInputRef;
                    if (!result) {
                      let current = chatInputRef.current;
                      result = null == current;
                      const obj48 = current;
                    }
                    if (!result) {
                      result = id;
                      result = id2;
                      obj = { decoration: "never" };
                      result = globalThis;
                      const _HermesInternal = HermesInternal;
                      result = obj48.insertText("@" + id(id2[11]).getUserTag(result, obj), null, true);
                      const obj49 = id(id2[11]);
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
                  result = channel;
                  result = id2;
                  const intl10 = channel(id2[19]).intl;
                  if (intl10.string(channel(id2[19]).t.cduTBL) === label) {
                    result = id;
                    result = id2;
                    obj = { userId: message.author.id, channelId: id, messageId: message.id, sourceAnalyticsLocations: analyticsLocations.analyticsLocations };
                    result = id(id2[50])(obj);
                  } else {
                    result = channel;
                    result = id2;
                    const intl11 = channel(id2[19]).intl;
                    if (intl11.string(channel(id2[19]).t.fsBWmS) === label) {
                      result = handleEdit;
                      result = message;
                      result = channel;
                      result = chatInputRef;
                      result = handleEdit(message, channel, chatInputRef, "action_sheet");
                    } else {
                      result = channel;
                      result = id2;
                      const intl12 = channel(id2[19]).intl;
                      if (intl12.string(channel(id2[19]).t.MFGE51) === label) {
                        result = (function handlePublish(id, chatInputRef, id2) {
                          let closure_0 = id;
                          let closure_1 = id2;
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
                          obj.children = outer1_20(id(id2[20]), obj);
                          const intl2 = channel(id2[19]).intl;
                          obj.cancelText = intl2.string(channel(id2[19]).t["ETE/oC"]);
                          const intl3 = channel(id2[19]).intl;
                          obj.confirmText = intl3.string(channel(id2[19]).t["cY+Oob"]);
                          obj.onConfirm = function onConfirm() {
                            return id(id2[17]).crosspostMessage(closure_0, closure_1);
                          };
                          id(id2[18]).show(obj);
                        })(id, chatInputRef, id2);
                      } else {
                        result = channel;
                        result = id2;
                        const intl13 = channel(id2[19]).intl;
                        if (intl13.string(channel(id2[19]).t.CvQ18w) === label) {
                          result = (function handlePin(channel, chatInputRef, message) {
                            let closure_0 = channel;
                            let closure_1 = message;
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
                            let intl = channel(id2[19]).intl;
                            obj.title = intl.string(channel(id2[19]).t.CvQ18w);
                            const intl2 = channel(id2[19]).intl;
                            obj.body = intl2.string(channel(id2[19]).t.WG5dyo);
                            obj = { message };
                            obj.children = outer1_20(id(id2[21]), obj);
                            const intl3 = channel(id2[19]).intl;
                            obj.cancelText = intl3.string(channel(id2[19]).t.gm1Vej);
                            const intl4 = channel(id2[19]).intl;
                            obj.confirmText = intl4.string(channel(id2[19]).t.p89ACt);
                            obj.onConfirm = function onConfirm() {
                              id(id2[22]).pinMessage(closure_0, message.id);
                              const AccessibilityAnnouncer = channel(id2[23]).AccessibilityAnnouncer;
                              const intl = channel(id2[19]).intl;
                              AccessibilityAnnouncer.announce(intl.string(channel(id2[19]).t.sCfDDl));
                            };
                            id(id2[18]).show(obj);
                          })(channel, chatInputRef, message);
                        } else {
                          result = channel;
                          result = id2;
                          const intl14 = channel(id2[19]).intl;
                          if (intl14.string(channel(id2[19]).t["Bse+F/"]) === label) {
                            result = (function handleUnpin(channel, chatInputRef, message) {
                              let closure_0 = channel;
                              let closure_1 = message;
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
                              obj.title = intl.string(channel(id2[19]).t["Bse+F/"]);
                              const intl2 = channel(id2[19]).intl;
                              obj.body = intl2.string(channel(id2[19]).t.NjEPp7);
                              obj = { message };
                              obj.children = outer1_20(id(id2[21]), obj);
                              const intl3 = channel(id2[19]).intl;
                              obj.cancelText = intl3.string(channel(id2[19]).t.gm1Vej);
                              const intl4 = channel(id2[19]).intl;
                              obj.confirmText = intl4.string(channel(id2[19]).t.p89ACt);
                              obj.onConfirm = function onConfirm() {
                                return id(id2[22]).unpinMessage(closure_0, message.id);
                              };
                              id(id2[18]).show(obj);
                            })(channel, chatInputRef, message);
                          } else {
                            result = channel;
                            result = id2;
                            const intl15 = channel(id2[19]).intl;
                            if (intl15.string(channel(id2[19]).t["lE/PG3"]) === label) {
                              result = id;
                              result = id2;
                              result = id(id2[17]).patchMessageGuildOfficial(id, id2, true);
                              const obj46 = id(id2[17]);
                            } else {
                              result = channel;
                              result = id2;
                              const intl16 = channel(id2[19]).intl;
                              if (intl16.string(channel(id2[19]).t["2km5Gf"]) === label) {
                                result = id;
                                result = id2;
                                result = id(id2[17]).patchMessageGuildOfficial(id, id2, false);
                                const obj45 = id(id2[17]);
                              } else {
                                result = channel;
                                result = id2;
                                const intl17 = channel(id2[19]).intl;
                                if (intl17.string(channel(id2[19]).t.xwMqD7) === label) {
                                  result = constants5;
                                  if (message.state === constants5.SENDING) {
                                    result = id;
                                    result = id2;
                                    result = id(id2[24]).cancelRequest(id2);
                                    const obj42 = id(id2[24]);
                                  } else {
                                    result = constants5;
                                    if (message.state === constants5.SEND_FAILED) {
                                      result = handleConfirmDelete;
                                      result = handleConfirmDelete(id, id2, true);
                                    } else {
                                      result = (function handleDelete(id, chatInputRef, message) {
                                        let closure_0 = id;
                                        let closure_1 = message;
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
                                        obj.children = outer1_20(id(id2[21]), obj);
                                        const intl3 = channel(id2[19]).intl;
                                        obj.cancelText = intl3.string(channel(id2[19]).t.gm1Vej);
                                        const intl4 = channel(id2[19]).intl;
                                        obj.confirmText = intl4.string(channel(id2[19]).t.p89ACt);
                                        obj.onConfirm = function onConfirm() {
                                          outer2_23(closure_0, message.id);
                                        };
                                        id(id2[18]).show(obj);
                                      })(id, chatInputRef, message);
                                    }
                                  }
                                  result = id;
                                  result = id2;
                                  result = constants;
                                  let obj1 = { channel_id: id, guild_id, action_sheet_option: "delete", message_state: message.state };
                                  result = id(id2[51]).trackWithMetadata(constants.MESSAGE_ACTION_SHEET_OPTION_PRESSED, obj1);
                                  const obj43 = id(id2[51]);
                                } else {
                                  result = channel;
                                  result = id2;
                                  const intl18 = channel(id2[19]).intl;
                                  if (intl18.string(channel(id2[19]).t["5911Lb"]) === label) {
                                    result = uploaderFileForMessageId;
                                    result = uploaderFileForMessageId.getUploaderFileForMessageId(message.id);
                                    result = null;
                                    result = undefined;
                                    if (null != result) {
                                      result = result.items;
                                    }
                                    result = undefined;
                                    result = id;
                                    result = id2;
                                    result = options;
                                    result = id(id2[25]);
                                    result = channel;
                                    result = message;
                                    result = result(channel, message, result, options.getOptions(message.id));
                                    result = constants;
                                    let obj2 = { channel_id: id, guild_id, action_sheet_option: "retry", message_state: message.state };
                                    result = id(id2[51]).trackWithMetadata(constants.MESSAGE_ACTION_SHEET_OPTION_PRESSED, obj2);
                                    const obj40 = id(id2[51]);
                                  } else {
                                    result = channel;
                                    result = id2;
                                    const intl19 = channel(id2[19]).intl;
                                    if (intl19.string(channel(id2[19]).t.JrGD7E) === label) {
                                      result = message.getContentMessage();
                                      result = isMessageComponentsV2;
                                      result = channel;
                                      result = id2;
                                      if (isMessageComponentsV2(result)) {
                                        result = result(result[29]).getAllTextDisplayContent(result.components);
                                        result = null;
                                        if (null != result) {
                                          result = channel;
                                          result = id2;
                                          result = channel(id2[30]).copy(result);
                                          const obj38 = channel(id2[30]);
                                        }
                                        const resultResult = result(result[29]);
                                      } else {
                                        result = result(result[30]).copy(result.content);
                                        const resultResult1 = result(result[30]);
                                      }
                                      result = channel;
                                      result = id2;
                                      result = channel(id2[31]).presentMessageCopied();
                                      const obj39 = channel(id2[31]);
                                    } else {
                                      result = channel;
                                      result = id2;
                                      const intl20 = channel(id2[19]).intl;
                                      if (intl20.string(channel(id2[19]).t.lfIHs4) === label) {
                                        const result1 = channel(id2[52]).handleAddNewReactions(channel, id2);
                                        const obj35 = channel(id2[52]);
                                      } else {
                                        result = channel;
                                        result = id2;
                                        const intl21 = channel(id2[19]).intl;
                                        if (intl21.string(channel(id2[19]).t.gHp0C4) === label) {
                                          if ("Preview" === actionSheetSource) {
                                            const result2 = channel(id2[52]).handleViewPreviewReactions(id2, id);
                                            const obj34 = channel(id2[52]);
                                          } else {
                                            let obj3 = { messageId: id2, channelId: id };
                                            const obj4 = { object: constants2.MESSAGE_ACTION_SHEET };
                                            obj3.location = obj4;
                                            channel(id2[52]).handleViewReactions(obj3);
                                            const obj31 = channel(id2[52]);
                                          }
                                        } else {
                                          result = channel;
                                          result = id2;
                                          const intl22 = channel(id2[19]).intl;
                                          if (intl22.string(channel(id2[19]).t.ZbtGBm) === label) {
                                            const result3 = channel(id2[52]).handleRemoveAllReactions(id, id2);
                                            const obj30 = channel(id2[52]);
                                          } else {
                                            result = channel;
                                            result = id2;
                                            const intl23 = channel(id2[19]).intl;
                                            if (intl23.string(channel(id2[19]).t["g33r/P"]) === label) {
                                              let obj5 = { recipientIds: message.author.id };
                                              id(id2[33]).openPrivateChannel(obj5);
                                              const obj28 = id(id2[33]);
                                            } else {
                                              result = channel;
                                              result = id2;
                                              const intl24 = channel(id2[19]).intl;
                                              if (intl24.string(channel(id2[19]).t.Xrt5Po) === label) {
                                                handleCopyMessageLink(channel, id2);
                                              } else {
                                                result = channel;
                                                result = id2;
                                                const intl25 = channel(id2[19]).intl;
                                                if (intl25.string(channel(id2[19]).t.RpE9k7) === label) {
                                                  id(id2[34])(id, id2);
                                                } else {
                                                  result = channel;
                                                  result = id2;
                                                  const intl26 = channel(id2[19]).intl;
                                                  if (intl26.string(channel(id2[19]).t["S/xNKV"]) === label) {
                                                    (function handleSaveImage(selectedMedia, id) {
                                                      let fn = selectedMedia;
                                                      let closure_0 = selectedMedia;
                                                      let closure_1 = id;
                                                      let mediaUrl;
                                                      if (null != selectedMedia) {
                                                        mediaUrl = fn.mediaUrl;
                                                      }
                                                      if (null != mediaUrl) {
                                                        let closure_2 = channel(id2[35]).urlMatchesFileExtension(fn.mediaUrl, outer1_14);
                                                        const obj3 = channel(id2[35]);
                                                        let num = id(id2[36]).toURLSafe;
                                                        const numResult = num(fn.mediaUrl);
                                                        if (null == numResult) {
                                                          let resolved = Promise.resolve(fn.mediaUrl);
                                                          fn = () => {
                                                            let obj = channel(id2[31]);
                                                            if (closure_2) {
                                                              obj.presentGifSaved();
                                                            } else {
                                                              obj.presentImageSaved();
                                                            }
                                                            obj = {};
                                                            const merged = Object.assign(outer2_26(closure_1));
                                                            id(id2[16]).track(outer2_9.CONTEXT_MENU_IMAGE_SAVED, obj);
                                                          };
                                                          resolved.then((mediaUrl) => channel(id2[38]).downloadMediaAssetWithContentType(mediaUrl, closure_2 ? outer2_15.GIF : outer2_15.IMAGE, selectedMedia.contentType)).then(fn, () => {
                                                            let obj = id(id2[18]);
                                                            obj = {};
                                                            const intl = channel(id2[19]).intl;
                                                            obj.title = intl.string(channel(id2[19]).t.cV3alD);
                                                            const intl2 = channel(id2[19]).intl;
                                                            obj.body = intl2.string(channel(id2[19]).t.r4Zjzv);
                                                            obj.isDismissable = true;
                                                            obj.show(obj);
                                                            obj = {};
                                                            const merged = Object.assign(outer2_26(closure_1));
                                                            id(id2[16]).track(outer2_9.CONTEXT_MENU_IMAGE_SAVE_FAILED, obj);
                                                          });
                                                          const nextPromise = resolved.then((mediaUrl) => channel(id2[38]).downloadMediaAssetWithContentType(mediaUrl, closure_2 ? outer2_15.GIF : outer2_15.IMAGE, selectedMedia.contentType));
                                                        } else {
                                                          num = 37;
                                                          let obj = channel(id2[37]);
                                                        }
                                                        const tmp12 = id(id2[36]);
                                                        resolved = channel(id2[num]).maybeRefreshAttachmentUrl(fn.mediaUrl);
                                                        const obj2 = channel(id2[num]);
                                                      }
                                                    })(selectedMedia, id);
                                                  } else {
                                                    result = channel;
                                                    result = id2;
                                                    const intl27 = channel(id2[19]).intl;
                                                    if (intl27.string(channel(id2[19]).t.JVuuz3) === label) {
                                                      (function handleSaveVideo(selectedMedia) {
                                                        let mediaUrl;
                                                        if (null != selectedMedia) {
                                                          mediaUrl = selectedMedia.mediaUrl;
                                                        }
                                                        if (null != mediaUrl) {
                                                          const result = channel(id2[38]).downloadMediaAssetWithContentType(selectedMedia.mediaUrl, outer1_15.VIDEO, selectedMedia.contentType);
                                                          result.then(() => {
                                                            channel(id2[31]).presentVideoSaved();
                                                          }, () => {
                                                            let obj = id(id2[18]);
                                                            obj = {};
                                                            const intl = channel(id2[19]).intl;
                                                            obj.title = intl.string(channel(id2[19]).t.cV3alD);
                                                            const intl2 = channel(id2[19]).intl;
                                                            obj.body = intl2.string(channel(id2[19]).t.r4Zjzv);
                                                            obj.isDismissable = true;
                                                            obj.show(obj);
                                                          });
                                                          let obj = channel(id2[38]);
                                                        }
                                                      })(selectedMedia);
                                                    } else {
                                                      result = channel;
                                                      result = id2;
                                                      const intl28 = channel(id2[19]).intl;
                                                      if (intl28.string(channel(id2[19]).t.vbAEaA) === label) {
                                                        let mediaUrl;
                                                        if (null != selectedMedia) {
                                                          mediaUrl = selectedMedia.mediaUrl;
                                                        }
                                                        if (null != mediaUrl) {
                                                          result = channel;
                                                          result = id2;
                                                          let obj6 = { href: mediaUrl };
                                                          result = channel(id2[39]).handleClick(obj6);
                                                          const obj59 = channel(id2[39]);
                                                        }
                                                      } else {
                                                        result = channel;
                                                        result = id2;
                                                        const intl29 = channel(id2[19]).intl;
                                                        if (intl29.string(channel(id2[19]).t["92CPQ+"]) !== label) {
                                                          result = channel;
                                                          result = id2;
                                                          const intl30 = channel(id2[19]).intl;
                                                          if (intl30.string(channel(id2[19]).t["8xHmxo"]) !== label) {
                                                            result = channel;
                                                            result = id2;
                                                            const intl31 = channel(id2[19]).intl;
                                                            if (intl31.string(channel(id2[19]).t["5IEsGx"]) === label) {
                                                              const obj7 = { message, channel, chatInputRef, actionSource: "action_sheet" };
                                                              id(id2[53])(obj7);
                                                              if ("Preview" === actionSheetSource) {
                                                                result = channel;
                                                                result = id2;
                                                                result = channel(id2[49]).transitionToMessage(channel.id, message.id);
                                                                result = globalThis;
                                                                const _setTimeout = setTimeout;
                                                                result = setTimeout(() => {
                                                                  const ComponentDispatch = channel(id2[54]).ComponentDispatch;
                                                                  return ComponentDispatch.dispatch(outer1_13.TEXTAREA_FOCUS, { channelId: channel.id });
                                                                }, 500);
                                                                const obj58 = channel(id2[49]);
                                                              }
                                                            } else {
                                                              result = channel;
                                                              result = id2;
                                                              const intl32 = channel(id2[19]).intl;
                                                              if (intl32.string(channel(id2[19]).t.I3ltXO) === label) {
                                                                let obj8 = { message, source: "long-press-sheet" };
                                                                channel(id2[55]).openForwardModal(obj8);
                                                                const obj22 = channel(id2[55]);
                                                              } else {
                                                                result = channel;
                                                                result = id2;
                                                                const intl33 = channel(id2[19]).intl;
                                                                if (intl33.string(channel(id2[19]).t.rBIGBL) === label) {
                                                                  handleCreateThread(channel, message);
                                                                } else {
                                                                  result = channel;
                                                                  result = id2;
                                                                  const intl34 = channel(id2[19]).intl;
                                                                  if (intl34.string(channel(id2[19]).t["39d0Wj"]) === label) {
                                                                    const obj20 = channel(id2[28]);
                                                                    obj20.transitionToGuild(channel.guild_id, id(id2[12]).castMessageIdAsChannelId(message.id));
                                                                    const obj21 = id(id2[12]);
                                                                  } else {
                                                                    result = channel;
                                                                    result = id2;
                                                                    const intl35 = channel(id2[19]).intl;
                                                                    if (intl35.string(channel(id2[19]).t.PHjkRE) === label) {
                                                                      let obj16 = id(id2[42]);
                                                                      obj16.hideActionSheet();
                                                                      let obj17 = channel(id2[27]);
                                                                      const obj9 = { channel, commandType: channel(id2[56]).ApplicationCommandType.MESSAGE, commandTargetId: message.id };
                                                                      const result4 = obj17.navigateToContextMenuCommands(obj9);
                                                                    } else {
                                                                      result = channel;
                                                                      result = id2;
                                                                      const intl36 = channel(id2[19]).intl;
                                                                      if (intl36.string(channel(id2[19]).t.tpxJto) === label) {
                                                                        let obj14 = channel(id2[57]);
                                                                        let obj10 = { channelId: id, messageId: id2, displayToast: true };
                                                                        const result5 = obj14.addOrUpdateSavedMessage(obj10);
                                                                      } else {
                                                                        result = channel;
                                                                        result = id2;
                                                                        const intl37 = channel(id2[19]).intl;
                                                                        if (intl37.string(channel(id2[19]).t.SvXS1Z) === label) {
                                                                          let obj12 = channel(id2[57]);
                                                                          const obj11 = { channelId: id, messageId: id2, displayToast: true };
                                                                          obj12.removeSavedMessage(obj11);
                                                                        } else {
                                                                          result = channel;
                                                                          result = id2;
                                                                          const intl38 = channel(id2[19]).intl;
                                                                          if (intl38.string(channel(id2[19]).t.mJ3P0N) === label) {
                                                                            obj10 = id(id2[42]);
                                                                            obj12 = {
                                                                              createReminder(dueAt) {
                                                                                                                                                          let obj = channel(id2[57]);
                                                                                                                                                          obj = { channelId: id, messageId: id2, dueAt, displayToast: true };
                                                                                                                                                          return obj.addOrUpdateSavedMessage(obj);
                                                                                                                                                        }
                                                                            };
                                                                            ({ channel_id: obj12.channelId, id: obj12.messageId } = message);
                                                                            obj12.onBack = onBack;
                                                                            obj10.openLazy(channel(id2[44])(id2[58], id2.paths), "MessageReminderDurationActionSheet", obj12);
                                                                          } else {
                                                                            result = channel;
                                                                            result = id2;
                                                                            const intl39 = channel(id2[19]).intl;
                                                                            if (intl39.string(channel(id2[19]).t.vrbqs1) === label) {
                                                                              obj8 = id(id2[42]);
                                                                              const obj13 = {
                                                                                createReminder(dueAt) {
                                                                                                                                                              let obj = channel(id2[57]);
                                                                                                                                                              obj = { channelId: id, messageId: id2, dueAt, displayToast: true };
                                                                                                                                                              return obj.addOrUpdateSavedMessage(obj);
                                                                                                                                                            },
                                                                                removeReminder() {
                                                                                                                                                              let obj = channel(id2[57]);
                                                                                                                                                              obj = { channelId: id, messageId: id2, displayToast: true, isReminder: true };
                                                                                                                                                              return obj.removeSavedMessage(obj);
                                                                                                                                                            }
                                                                              };
                                                                              ({ channel_id: obj10.channelId, id: obj10.messageId } = message);
                                                                              obj13.onBack = onBack;
                                                                              obj8.openLazy(channel(id2[44])(id2[58], id2.paths), "MessageReminderDurationActionSheet", obj13);
                                                                            } else {
                                                                              result = channel;
                                                                              result = id2;
                                                                              const intl40 = channel(id2[19]).intl;
                                                                              if (intl40.string(channel(id2[19]).t.ZH7P2h) === label) {
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
                                                                                    obj5 = channel(id2[41]);
                                                                                    result6 = obj5.messageHasObscurableMedia(message);
                                                                                  }
                                                                                  if (result6) {
                                                                                    obj6 = id(id2[42]);
                                                                                    obj14 = {};
                                                                                    ({ channel_id: obj8.channelId, id: obj8.messageId } = message);
                                                                                    obj14.attachmentId = id1;
                                                                                    obj14.embedId = id;
                                                                                    obj6.openLazy(channel(id2[44])(id2[43], id2.paths), closure_19, obj14);
                                                                                  }
                                                                                }
                                                                              } else {
                                                                                result = channel;
                                                                                result = id2;
                                                                                const intl41 = channel(id2[19]).intl;
                                                                                if (intl41.string(channel(id2[19]).t.grdwwt) === label) {
                                                                                  obj3 = id(id2[59]);
                                                                                  ({ channel_id: obj5.channelId, id: obj5.messageId } = message);
                                                                                  obj3.endPollEarly({});
                                                                                  const obj15 = {};
                                                                                } else {
                                                                                  result = channel;
                                                                                  result = id2;
                                                                                  const intl42 = channel(id2[19]).intl;
                                                                                  if (intl42.string(channel(id2[19]).t.Rjezbz) === label) {
                                                                                    obj1 = id(id2[42]);
                                                                                    obj16 = { message, guildId: guild_id, onBack };
                                                                                    obj1.openLazy(channel(id2[44])(id2[60], id2.paths), "AppInteractionInfoActionSheet", obj16);
                                                                                  } else {
                                                                                    result = channel;
                                                                                    result = id2;
                                                                                    const intl43 = channel(id2[19]).intl;
                                                                                    if (intl43.string(channel(id2[19]).t["4sxKOb"]) !== label) {
                                                                                      result = channel;
                                                                                      result = id2;
                                                                                      const intl44 = channel(id2[19]).intl;
                                                                                      if (intl44.string(channel(id2[19]).t.wUIMqa) !== label) {
                                                                                        let intl3 = channel(id2[19]).intl;
                                                                                        if (intl3.string(channel(id2[19]).t.kFwAsa) === label) {
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
                                                            hostname = channel(id2[40]).getHostname(mediaUrl1);
                                                            const obj27 = channel(id2[40]);
                                                          }
                                                          obj17.hostname = hostname;
                                                          let merged = Object.assign(getChannelAnalyticsMetadata(id));
                                                          id(id2[16]).track(constants.CONTEXT_MENU_MEDIA_LINK_COPIED, obj17);
                                                          const obj25 = id(id2[16]);
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
    result = channel;
    result = id2;
    if (obj56.canReportMessage(message)) {
      result = channel;
      result = id2;
      result = channel(id2[46]).showReportModalForMessage(message, "mobile_message_action_sheet");
      const obj57 = channel(id2[46]);
    }
    obj56 = channel(id2[45]);
  }
};
