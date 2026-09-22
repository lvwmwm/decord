// Module ID: 11800
// Function ID: 11801
// Name: LongPressMessageActionSheetUtils
// Dependencies: [19, 7782, 4286, 7783, 7940, 1371, 11801, 1074, 1964, 7703, 21, 4481, 11, 11802, 10380, 7285, 1240, 7559, 4980, 1114, 11803, 11806, 11807, 4348, 7936, 11809, 7867, 4494, 1100, 4861, 7292, 4334, 4781, 4649, 10376, 4786, 1365, 10072, 8383, 8488, 8491, 7395, 4603, 11810, 1896, 7392, 8752, 2528, 7379, 4647, 8296, 4816, 11391, 11812, 1109, 11813, 1894, 11837, 11842, 11843, 11847, 11860, 2]
// Exports: getContextBarCancelReason, handleCopyId, handleCopyMessageLink, handleCreateThread, longPressMessageOptionHandler

// Module 11800 (LongPressMessageActionSheetUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import router_utils from "router_utils" /* 1100 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import ToastUtils from "ToastUtils" /* 4334 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4348 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4494 */;
import ChannelUtils from "ChannelUtils" /* 4781 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4980 */;
import ClipboardUtils from "ClipboardUtils" /* 7292 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7559 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 7867 */;
import MediaSourceUtil from "MediaSourceUtil" /* 8383 */;
import ForumComposerModalActionCreators from "ForumComposerModalActionCreators" /* 10380 */;
import PendingReplyActionCreators from "PendingReplyActionCreators" /* 11802 */;
import ChannelPinActionCreatorsDefault from "ChannelPinActionCreators" /* 11807 */;
import SavedMessageHelpers from "SavedMessageHelpers" /* 11837 */;
import SavedMessageSources from "SavedMessageSources" /* 11842 */;
import noop from "module_19" /* 19 */;
import PendingReplyStore from "PendingReplyStore" /* 7782 */;
import EditMessageStore from "EditMessageStore" /* 7783 */;
import UploadStore from "UploadStore" /* 7940 */;
import UserStore from "UserStore" /* 1371 */;
import SendMessageOptionsStore from "SendMessageOptionsStore" /* 11801 */;

require = fn;
function handleEdit(id, isForumPost, current, source) {
  let flag = arg4;
  if (arg4 === undefined) {
    flag = false;
  }
  if (isForumPost.isForumPost()) {
    if (isForumPost.id === obj.castMessageIdAsChannelId(id.id)) {
      if (null != isForumPost.parent_id) {
        PendingReplyActionCreators.deletePendingReply(isForumPost.id);
        const obj6 = { guildId: null, parentChannelId: null, threadId: null, messageId: null, isEdit: true, analyticsLocations: null, analyticsLocationObject: null };
        ({ guild_id: obj9.guildId, parent_id: obj9.parentChannelId, id: obj9.threadId } = isForumPost);
        obj6.messageId = id.id;
        const items = [tmp(7285).FORUM_CHANNEL, tmp(7285).GUILD_CHANNEL];
        obj6.analyticsLocations = items;
        const obj10 = { page: constants3.GUILD_CHANNEL, section: constants4.FORUM_POST_HEADER, object: constants2.CONTEXT_MENU };
        obj6.analyticsLocationObject = obj10;
        const result = ForumComposerModalActionCreators.openCreateForumPostModal(obj6);
      }
    }
    obj = SnowflakeUtilsDefault;
  }
  if (flag) {
    if ("message_swipe" === source) {
      if (EditMessageStore.isEditing(isForumPost.id, id.id)) {
        const currentUser = UserStore.getCurrentUser();
        const obj16 = { message_id: id.id, channel_id: null, guild_id: null, context_action: "edit", reason: "swipe_edit_undo", is_own_message: null };
        ({ id: obj5.channel_id, guild_id: obj5.guild_id } = isForumPost);
        let tmp15 = null != currentUser;
        if (tmp15) {
          tmp15 = currentUser.id === id.author.id;
        }
        obj16.is_own_message = tmp15;
        AnalyticsUtilsDefault.track(constants.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj16);
        MessageActionCreatorsDefault.endEditMessage(isForumPost.id);
        if (current != null) {
          const current2 = current.current;
          if (current2 != null) {
            current2.dismissKeyboard();
          }
        }
        const tmp11Result = MessageActionCreatorsDefault;
      }
    }
  }
  const pendingReply = PendingReplyStore.getPendingReply(isForumPost.id);
  if (null != pendingReply) {
    const currentUser1 = UserStore.getCurrentUser();
    const obj17 = { message_id: id.id, channel_id: null, guild_id: null, context_action: "reply", reason: null, is_own_message: null };
    ({ id: obj12.channel_id, guild_id: obj12.guild_id } = isForumPost);
    if ("message_swipe" === source) {
      let str3 = "swipe_edit";
    } else if ("action_sheet" === source) {
      str3 = "action_sheet_edit";
    } else {
      str3 = "pressed_cancel";
    }
    obj17.reason = str3;
    obj17.is_own_message = null != currentUser1 && currentUser1.id === pendingReply.message.author.id;
    AnalyticsUtilsDefault.track(constants.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj17);
  }
  PendingReplyActionCreators.deletePendingReply(isForumPost.id);
  const result1 = MessageActionCreatorsDefault.startEditMessageRecord(isForumPost.id, id, source);
  if (current != null) {
    current = current.current;
    if (current != null) {
      current.openSystemKeyboard();
    }
  }
}
const isMessageComponentsV2 = fn(4286).isMessageComponentsV2;
const Constants = fn(1074);
({ AnalyticEvents: c10, AnalyticsObjects: closure_11, AnalyticsPages: closure_12, AnalyticsSections: map1, ComponentActions: closure_14, GIF_RE_IOS: closure_15, MediaType: closure_16, MessageStates: closure_17, MessageTypes: closure_18 } = Constants);
const isStaticChannelRoute = fn(1964).isStaticChannelRoute;
let closure_20 = fn(7703).EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/long_press/LongPressMessageActionSheetUtils.tsx");

export function getContextBarCancelReason(edit, cancel) {
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
export { handleEdit };
export const handleCreateThread = function handleCreateThread(guild_id, id, Message) {
  let str = Message;
  if (Message === undefined) {
    str = "Message";
  }
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const result = ThreadActionCreatorsDefault.openThreadCreationForMobile(guild_id, id, str);
  let result1 = null == id;
  if (!result1) {
    const obj2 = NavigationRouteUtils;
    result1 = obj2.navigateToCreateThread(guild_id.guild_id, tmp(11).castMessageIdAsChannelId(id.id));
    const tmpResult = tmp(11);
  }
  if (!result1) {
    const obj4 = router_utils;
    obj4.transitionToGuild(guild_id.guild_id, tmp(11).castMessageIdAsChannelId(id.id));
    const tmpResult2 = tmp(11);
  }
};
export const handleCopyMessageLink = function handleCopyMessageLink(channel, message_id) {
  AnalyticsUtilsDefault.track(constants.MESSAGE_LINK_COPIED, { message_id, channel: channel.id });
  const obj2 = { message_id, channel: channel.id };
  const channelPermalink = ChannelUtils.getChannelPermalink(channel.guild_id, channel.id, message_id);
  if (null != channelPermalink) {
    tmp3(7292).copy(channelPermalink);
    const tmp3Result = tmp3(7292);
    tmp3(4334).presentLinkCopied();
    const tmp3Result2 = tmp3(4334);
  }
};
export const handleCopyId = function handleCopyId(arg0) {
  ClipboardUtils.copy(arg0);
  const result = ToastUtils.presentMessageIdCopied();
};
export const longPressMessageOptionHandler = function longPressMessageOptionHandler(analyticsLocations) {
  ({ label, message, channel } = analyticsLocations);
  ({ chatInputRef, selectedMedia, actionSheetSource, onActionExecuted, onBack, disabled } = analyticsLocations);
  if (disabled === undefined) {
    disabled = false;
  }
  id = undefined;
  ({ guild_id, id } = channel);
  const id2 = message.id;
  if (!disabled) {
    const tmp = channel;
    let intl = channel(1114).intl;
    if (label !== intl.string(channel(1114).t.PHjkRE)) {
      id(4603).hideActionSheet();
      let obj = id(4603);
    }
    let intl2 = tmp(1114).intl;
    if (intl2.string(tmp(1114).t["+78Pfm"]) !== label) {
      const intl26 = tmp(1114).intl;
      if (intl26.string(tmp(1114).t.n5EBAJ) !== label) {
        const intl27 = tmp(1114).intl;
        if (intl27.string(id(2528)["1D+vqy"]) === label) {
          if (tmpResult.canReportMessageToMods(message)) {
            let result = tmp(8752).showReportToModMessageModal(message);
            const tmpResult34 = tmp(8752);
          }
          tmpResult = tmp(7379);
        } else {
          const intl28 = tmp(1114).intl;
          if (intl28.string(tmp(1114).t.k5WiPf) === label) {
            if (message.type === constants8.THREAD_STARTER_MESSAGE) {
              if (null != message.messageReference) {
                const guild_id2 = message.messageReference.guild_id;
                if (null != guild_id2) {
                  tmp(1100).transitionToGuild(guild_id2, tmp146, tmp145);
                  const tmpResult35 = tmp(1100);
                }
              }
            }
          } else {
            const intl29 = tmp(1114).intl;
            if (intl29.string(tmp(1114).t["+TSRGD"]) === label) {
              tmp(4647).transitionToMessage(channel.id, message.id);
              const tmpResult36 = tmp(4647);
            } else {
              const intl30 = tmp(1114).intl;
              if (intl30.string(tmp(1114).t.zBoHlf) === label) {
                tmp(7292).copy(id2);
                const tmpResult37 = tmp(7292);
                const result1 = tmp(4334).presentMessageIdCopied();
                const tmpResult38 = tmp(4334);
              } else {
                const intl31 = tmp(1114).intl;
                if (intl31.string(tmp(1114).t.P8tvKG) === label) {
                  const user = UserStore.getUser(message.author.id);
                  if (null != user) {
                    if (chatInputRef != null) {
                      const current7 = chatInputRef.current;
                      if (current7 != null) {
                        const _HermesInternal = HermesInternal;
                        current7.insertText("@" + tmp130(4481).getUserTag(user, { decoration: "never" }), null, true);
                        const tmp130Result = tmp130(4481);
                      }
                    }
                    if (chatInputRef != null) {
                      const current8 = chatInputRef.current;
                      if (current8 != null) {
                        current8.focus();
                      }
                    }
                    if (chatInputRef != null) {
                      const current9 = chatInputRef.current;
                      if (current9 != null) {
                        current9.openSystemKeyboard();
                      }
                    }
                  }
                } else {
                  const intl32 = tmp(1114).intl;
                  if (intl32.string(tmp(1114).t.cduTBL) === label) {
                    let obj2 = { userId: message.author.id, channelId: id, messageId: message.id, sourceAnalyticsLocations: analyticsLocations.analyticsLocations };
                    tmp130(8296)(obj2);
                  } else {
                    const intl33 = tmp(1114).intl;
                    if (intl33.string(tmp(1114).t.fsBWmS) === label) {
                      handleEdit(message, channel, chatInputRef, "action_sheet");
                    } else {
                      const intl34 = tmp(1114).intl;
                      if (intl34.string(tmp(1114).t.MFGE51) === label) {
                        closure_135_0 = id;
                        closure_135_1 = id2;
                        if (chatInputRef != null) {
                          const current6 = chatInputRef.current;
                          if (current6 != null) {
                            current6.dismissKeyboard();
                          }
                        }
                        let obj3 = { title: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
                        const intl23 = tmp(1114).intl;
                        obj3.title = intl23.string(tmp(1114).t.aIz1oV);
                        let obj4 = { channelId: id };
                        obj3.children = jsx(tmp130(11803), { channelId: id });
                        const intl24 = tmp(1114).intl;
                        obj3.cancelText = intl24.string(tmp(1114).t["ETE/oC"]);
                        const intl25 = tmp(1114).intl;
                        obj3.confirmText = intl25.string(tmp(1114).t["cY+Oob"]);
                        obj3.onConfirm = function onConfirm() {
                          return MessageActionCreatorsDefault.crosspostMessage(channel, id);
                        };
                        tmp130(4980).show(obj3);
                        const tmp130Result29 = tmp130(4980);
                      } else {
                        const intl35 = tmp(1114).intl;
                        if (intl35.string(tmp(1114).t.CvQ18w) === label) {
                          closure_134_0 = channel;
                          closure_134_1 = message;
                          if (chatInputRef != null) {
                            const current5 = chatInputRef.current;
                            if (current5 != null) {
                              current5.dismissKeyboard();
                            }
                          }
                          const obj5 = { title: null, body: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
                          const intl19 = tmp(1114).intl;
                          obj5.title = intl19.string(tmp(1114).t.CvQ18w);
                          const intl20 = tmp(1114).intl;
                          obj5.body = intl20.string(tmp(1114).t.WG5dyo);
                          const obj6 = { message };
                          obj5.children = jsx(tmp130(11806), { message });
                          const intl21 = tmp(1114).intl;
                          obj5.cancelText = intl21.string(tmp(1114).t.gm1Vej);
                          const intl22 = tmp(1114).intl;
                          obj5.confirmText = intl22.string(tmp(1114).t.p89ACt);
                          obj5.onConfirm = function onConfirm() {
                            ChannelPinActionCreatorsDefault.pinMessage(channel, id.id);
                            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                            const intl = util.intl;
                            AccessibilityAnnouncer.announce(intl.string(util.t.sCfDDl));
                          };
                          tmp130(4980).show(obj5);
                          const tmp130Result30 = tmp130(4980);
                        } else {
                          const intl36 = tmp(1114).intl;
                          if (intl36.string(tmp(1114).t["Bse+F/"]) === label) {
                            closure_133_0 = channel;
                            closure_133_1 = message;
                            if (chatInputRef != null) {
                              const current4 = chatInputRef.current;
                              if (current4 != null) {
                                current4.dismissKeyboard();
                              }
                            }
                            const obj7 = { title: null, body: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
                            const intl15 = tmp(1114).intl;
                            obj7.title = intl15.string(tmp(1114).t["Bse+F/"]);
                            const intl16 = tmp(1114).intl;
                            obj7.body = intl16.string(tmp(1114).t.NjEPp7);
                            const obj8 = { message };
                            obj7.children = jsx(tmp130(11806), { message });
                            const intl17 = tmp(1114).intl;
                            obj7.cancelText = intl17.string(tmp(1114).t.gm1Vej);
                            const intl18 = tmp(1114).intl;
                            obj7.confirmText = intl18.string(tmp(1114).t.p89ACt);
                            obj7.onConfirm = function onConfirm() {
                              return ChannelPinActionCreatorsDefault.unpinMessage(channel, id.id);
                            };
                            tmp130(4980).show(obj7);
                            const tmp130Result31 = tmp130(4980);
                          } else {
                            const intl37 = tmp(1114).intl;
                            if (intl37.string(tmp(1114).t["lE/PG3"]) === label) {
                              const result2 = tmp130(7559).patchMessageGuildOfficial(id, id2, true);
                              const tmp130Result32 = tmp130(7559);
                            } else {
                              const intl38 = tmp(1114).intl;
                              if (intl38.string(tmp(1114).t["2km5Gf"]) === label) {
                                const result3 = tmp130(7559).patchMessageGuildOfficial(id, id2, false);
                                const tmp130Result33 = tmp130(7559);
                              } else {
                                const intl39 = tmp(1114).intl;
                                if (intl39.string(tmp(1114).t.xwMqD7) === label) {
                                  if (message.state === constants7.SENDING) {
                                    tmp130(7936).cancelRequest(id2);
                                    const tmp130Result34 = tmp130(7936);
                                    tmp130(7559).deleteMessage(id, id2, true);
                                    const tmp130Result35 = tmp130(7559);
                                  } else if (message.state === tmp86.SEND_FAILED) {
                                    tmp130(7559).deleteMessage(id, id2, true);
                                    const tmp130Result36 = tmp130(7559);
                                  } else {
                                    closure_132_0 = id;
                                    closure_132_1 = message;
                                    if (chatInputRef != null) {
                                      const current3 = chatInputRef.current;
                                      if (current3 != null) {
                                        current3.dismissKeyboard();
                                      }
                                    }
                                    const obj10 = { title: null, body: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
                                    const intl11 = tmp(1114).intl;
                                    obj10.title = intl11.string(tmp(1114).t.MWMcg7);
                                    const intl12 = tmp(1114).intl;
                                    obj10.body = intl12.string(tmp(1114).t.AMvpS4);
                                    const obj11 = { message };
                                    obj10.children = jsx(tmp130(11806), { message });
                                    const intl13 = tmp(1114).intl;
                                    obj10.cancelText = intl13.string(tmp(1114).t.gm1Vej);
                                    const intl14 = tmp(1114).intl;
                                    obj10.confirmText = intl14.string(tmp(1114).t.p89ACt);
                                    obj10.onConfirm = function onConfirm() {
                                      MessageActionCreatorsDefault.deleteMessage(channel, id.id, false);
                                    };
                                    tmp130(4980).show(obj10);
                                    const tmp130Result37 = tmp130(4980);
                                  }
                                  const obj13 = { channel_id: id, guild_id, action_sheet_option: "delete", message_state: message.state };
                                  tmp130(4816).trackWithMetadata(constants.MESSAGE_ACTION_SHEET_OPTION_PRESSED, obj13);
                                  const tmp130Result38 = tmp130(4816);
                                } else {
                                  const intl40 = tmp(1114).intl;
                                  if (intl40.string(tmp(1114).t["5911Lb"]) === label) {
                                    const uploaderFileForMessageId = UploadStore.getUploaderFileForMessageId(message.id);
                                    let items;
                                    if (uploaderFileForMessageId != null) {
                                      items = uploaderFileForMessageId.items;
                                    }
                                    tmp130(11809)(channel, message, items, SendMessageOptionsStore.getOptions(message.id));
                                    const tmp130Result39 = tmp130(11809);
                                    const obj15 = { channel_id: id, guild_id, action_sheet_option: "retry", message_state: message.state };
                                    tmp130(4816).trackWithMetadata(constants.MESSAGE_ACTION_SHEET_OPTION_PRESSED, obj15);
                                    const tmp130Result40 = tmp130(4816);
                                  } else {
                                    const intl41 = tmp(1114).intl;
                                    if (intl41.string(tmp(1114).t.JrGD7E) === label) {
                                      const contentMessage = message.getContentMessage();
                                      if (isMessageComponentsV2(contentMessage)) {
                                        const allTextDisplayContent = tmp(4861).getAllTextDisplayContent(contentMessage.components);
                                        if (null != allTextDisplayContent) {
                                          tmp(7292).copy(allTextDisplayContent);
                                          const tmpResult40 = tmp(7292);
                                        }
                                        const tmpResult39 = tmp(4861);
                                      } else {
                                        tmp(7292).copy(contentMessage.content);
                                        const tmpResult41 = tmp(7292);
                                      }
                                      tmp(4334).presentMessageCopied();
                                      const tmpResult42 = tmp(4334);
                                    } else {
                                      const intl42 = tmp(1114).intl;
                                      if (intl42.string(tmp(1114).t.lfIHs4) === label) {
                                        const result4 = tmp(11391).handleAddNewReactions(channel, id2);
                                        const tmpResult43 = tmp(11391);
                                      } else {
                                        const intl43 = tmp(1114).intl;
                                        if (intl43.string(tmp(1114).t.gHp0C4) === label) {
                                          if ("Preview" === actionSheetSource) {
                                            const result5 = tmp(11391).handleViewPreviewReactions(id2, id);
                                            const tmpResult44 = tmp(11391);
                                          } else {
                                            const obj17 = { messageId: id2, channelId: id, location: null };
                                            const obj18 = { object: constants2.MESSAGE_ACTION_SHEET };
                                            obj17.location = obj18;
                                            tmp(11391).handleViewReactions(obj17);
                                            const tmpResult45 = tmp(11391);
                                          }
                                        } else {
                                          const intl44 = tmp(1114).intl;
                                          if (intl44.string(tmp(1114).t.ZbtGBm) === label) {
                                            const result6 = tmp(11391).handleRemoveAllReactions(id, id2);
                                            const tmpResult46 = tmp(11391);
                                          } else {
                                            const intl45 = tmp(1114).intl;
                                            if (intl45.string(tmp(1114).t["g33r/P"]) === label) {
                                              const obj19 = { recipientIds: message.author.id };
                                              tmp130(4649).openPrivateChannel(obj19);
                                              const tmp130Result41 = tmp130(4649);
                                            } else {
                                              const intl46 = tmp(1114).intl;
                                              if (intl46.string(tmp(1114).t.Xrt5Po) === label) {
                                                const obj20 = { message_id: id2, channel: channel.id };
                                                tmp130(1240).track(constants.MESSAGE_LINK_COPIED, obj20);
                                                const tmp130Result42 = tmp130(1240);
                                                const channelPermalink = tmp(4781).getChannelPermalink(channel.guild_id, channel.id, id2);
                                                if (null != channelPermalink) {
                                                  tmp(7292).copy(channelPermalink);
                                                  const tmpResult48 = tmp(7292);
                                                  tmp(4334).presentLinkCopied();
                                                  const tmpResult49 = tmp(4334);
                                                }
                                                const tmpResult47 = tmp(4781);
                                              } else {
                                                const intl47 = tmp(1114).intl;
                                                if (intl47.string(tmp(1114).t.RpE9k7) === label) {
                                                  tmp130(10376)(id, id2);
                                                } else {
                                                  const intl48 = tmp(1114).intl;
                                                  if (intl48.string(tmp(1114).t["S/xNKV"]) === label) {
                                                    closure_131_0 = selectedMedia;
                                                    closure_131_1 = id;
                                                    let mediaUrl;
                                                    if (selectedMedia != null) {
                                                      mediaUrl = selectedMedia.mediaUrl;
                                                    }
                                                    if (null != mediaUrl) {
                                                      closure_131_2 = tmp(4786).urlMatchesFileExtension(selectedMedia.mediaUrl, closure_15);
                                                      const tmpResult50 = tmp(4786);
                                                      const toURLSafeResult = tmp130(1365).toURLSafe(selectedMedia.mediaUrl);
                                                      if (null != toURLSafeResult) {
                                                        if (obj40.isRefreshableAttachmentUrl(toURLSafeResult)) {
                                                          let result7 = tmp53(10072).maybeRefreshAttachmentUrl(selectedMedia.mediaUrl);
                                                          const tmp53Result = tmp53(10072);
                                                        }
                                                        obj40 = id2(10072);
                                                        tmp53 = id2;
                                                        result7.then((result) => MediaSourceUtil.downloadMediaAssetWithContentType(result, id2 ? constants6.GIF : constants6.IMAGE, channel.contentType)).then(() => {
                                                          const obj = ToastUtils;
                                                          if (id2) {
                                                            obj.presentGifSaved();
                                                          } else {
                                                            obj.presentImageSaved();
                                                          }
                                                          const tmp4 = isStaticChannelRoute(id);
                                                          let tmp5;
                                                          if (!tmp4) {
                                                            tmp5 = tmp3;
                                                          }
                                                          const obj3 = { channel_id: tmp5, channel_static_route: null };
                                                          let tmp6;
                                                          if (tmp4) {
                                                            tmp6 = tmp3;
                                                          }
                                                          obj3.channel_static_route = tmp6;
                                                          const merged = Object.assign(obj3);
                                                          AnalyticsUtilsDefault.track(constants.CONTEXT_MENU_IMAGE_SAVED, {});
                                                        }, () => {
                                                          const obj2 = { title: null, body: null, isDismissable: true };
                                                          const intl = util.intl;
                                                          obj2.title = intl.string(util.t.cV3alD);
                                                          const intl2 = util.intl;
                                                          obj2.body = intl2.string(util.t.r4Zjzv);
                                                          AlertActionCreatorsDefault.show(obj2);
                                                          const tmp3 = isStaticChannelRoute(id);
                                                          let tmp4;
                                                          if (!tmp3) {
                                                            tmp4 = tmp2;
                                                          }
                                                          const obj4 = { channel_id: tmp4, channel_static_route: null };
                                                          let tmp5;
                                                          if (tmp3) {
                                                            tmp5 = tmp2;
                                                          }
                                                          obj4.channel_static_route = tmp5;
                                                          const merged = Object.assign(obj4);
                                                          AnalyticsUtilsDefault.track(constants.CONTEXT_MENU_IMAGE_SAVE_FAILED, {});
                                                        });
                                                        const nextPromise = result7.then((result) => MediaSourceUtil.downloadMediaAssetWithContentType(result, id2 ? constants6.GIF : constants6.IMAGE, channel.contentType));
                                                      }
                                                      result7 = Promise.resolve(selectedMedia.mediaUrl);
                                                      const tmp130Result43 = tmp130(1365);
                                                    }
                                                  } else {
                                                    const intl49 = tmp(1114).intl;
                                                    if (intl49.string(tmp(1114).t.JVuuz3) === label) {
                                                      let mediaUrl1;
                                                      if (selectedMedia != null) {
                                                        mediaUrl1 = selectedMedia.mediaUrl;
                                                      }
                                                      if (null != mediaUrl1) {
                                                        const result8 = tmp(8383).downloadMediaAssetWithContentType(selectedMedia.mediaUrl, constants6.VIDEO, selectedMedia.contentType);
                                                        result8.then(() => {
                                                          channel(4334).presentVideoSaved();
                                                        }, () => {
                                                          const obj2 = { title: null, body: null, isDismissable: true };
                                                          const intl = channel(1114).intl;
                                                          obj2.title = intl.string(channel(1114).t.cV3alD);
                                                          const intl2 = channel(1114).intl;
                                                          obj2.body = intl2.string(channel(1114).t.r4Zjzv);
                                                          id(4980).show(obj2);
                                                        });
                                                        const tmpResult51 = tmp(8383);
                                                      }
                                                    } else {
                                                      const intl50 = tmp(1114).intl;
                                                      if (intl50.string(tmp(1114).t.vbAEaA) === label) {
                                                        let mediaUrl2;
                                                        if (selectedMedia != null) {
                                                          mediaUrl2 = selectedMedia.mediaUrl;
                                                        }
                                                        if (null != mediaUrl2) {
                                                          const obj21 = { href: mediaUrl2 };
                                                          tmp(8488).handleClick(obj21);
                                                          const tmpResult52 = tmp(8488);
                                                        }
                                                      } else {
                                                        const intl51 = tmp(1114).intl;
                                                        if (intl51.string(tmp(1114).t["92CPQ+"]) !== label) {
                                                          const intl52 = tmp(1114).intl;
                                                          if (intl52.string(tmp(1114).t["8xHmxo"]) !== label) {
                                                            const intl53 = tmp(1114).intl;
                                                            if (intl53.string(tmp(1114).t["5IEsGx"]) === label) {
                                                              const obj22 = { message, channel, chatInputRef, actionSource: "action_sheet" };
                                                              tmp130(11812)(obj22);
                                                              if ("Preview" === actionSheetSource) {
                                                                tmp(4647).transitionToMessage(channel.id, message.id);
                                                                const _setTimeout = setTimeout;
                                                                const timerId = setTimeout(() => {
                                                                  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                                                                  return ComponentDispatch.dispatch(constants5.TEXTAREA_FOCUS, { channelId: channel.id });
                                                                }, 500);
                                                                const tmpResult53 = tmp(4647);
                                                              }
                                                            } else {
                                                              const intl54 = tmp(1114).intl;
                                                              if (intl54.string(tmp(1114).t.I3ltXO) === label) {
                                                                const obj23 = { message, source: "long-press-sheet" };
                                                                tmp(11813).openForwardModal(obj23);
                                                                const tmpResult54 = tmp(11813);
                                                              } else {
                                                                const intl55 = tmp(1114).intl;
                                                                if (intl55.string(tmp(1114).t.rBIGBL) === label) {
                                                                  let id1;
                                                                  if (message != null) {
                                                                    id1 = message.id;
                                                                  }
                                                                  const result9 = tmp130(7867).openThreadCreationForMobile(channel, id1, "Message");
                                                                  let result10 = null == message;
                                                                  if (!result10) {
                                                                    const tmpResult55 = tmp(4494);
                                                                    result10 = tmpResult55.navigateToCreateThread(channel.guild_id, tmp130(11).castMessageIdAsChannelId(message.id));
                                                                    const tmp130Result45 = tmp130(11);
                                                                  }
                                                                  if (!result10) {
                                                                    const tmpResult56 = tmp(1100);
                                                                    tmpResult56.transitionToGuild(channel.guild_id, tmp130(11).castMessageIdAsChannelId(message.id));
                                                                    const tmp130Result46 = tmp130(11);
                                                                  }
                                                                  const tmp130Result44 = tmp130(7867);
                                                                } else {
                                                                  const intl56 = tmp(1114).intl;
                                                                  if (intl56.string(tmp(1114).t["39d0Wj"]) === label) {
                                                                    const tmpResult57 = tmp(1100);
                                                                    tmpResult57.transitionToGuild(channel.guild_id, tmp130(11).castMessageIdAsChannelId(message.id));
                                                                    const tmp130Result47 = tmp130(11);
                                                                  } else {
                                                                    const intl57 = tmp(1114).intl;
                                                                    if (intl57.string(tmp(1114).t.PHjkRE) === label) {
                                                                      tmp130(4603).hideActionSheet();
                                                                      const tmp130Result48 = tmp130(4603);
                                                                      const obj24 = { channel, commandType: tmp(1894).ApplicationCommandType.MESSAGE, commandTargetId: message.id };
                                                                      const result11 = tmp(4494).navigateToContextMenuCommands(obj24);
                                                                      const tmpResult58 = tmp(4494);
                                                                    } else {
                                                                      const intl58 = tmp(1114).intl;
                                                                      if (intl58.string(tmp(1114).t.tpxJto) === label) {
                                                                        const obj25 = { channelId: id, messageId: id2, displayToast: true, source: tmp(11842).SavedMessageSources.LONG_PRESS_ACTION_SHEET };
                                                                        const result12 = tmp(11837).addOrUpdateSavedMessage(obj25);
                                                                        const tmpResult59 = tmp(11837);
                                                                      } else {
                                                                        const intl59 = tmp(1114).intl;
                                                                        if (intl59.string(tmp(1114).t.SvXS1Z) === label) {
                                                                          const obj26 = { channelId: id, messageId: id2, displayToast: true };
                                                                          tmp(11837).removeSavedMessage(obj26);
                                                                          const tmpResult60 = tmp(11837);
                                                                        } else {
                                                                          const intl60 = tmp(1114).intl;
                                                                          if (intl60.string(tmp(1114).t.mJ3P0N) === label) {
                                                                            const obj27 = {
                                                                              createReminder(dueAt) {
                                                                                                                                                          const obj = SavedMessageHelpers;
                                                                                                                                                          return obj.addOrUpdateSavedMessage({ channelId: id, messageId: id2, dueAt, displayToast: true, source: SavedMessageSources.SavedMessageSources.LONG_PRESS_ACTION_SHEET });
                                                                                                                                                        },
                                                                              channelId: null,
                                                                              messageId: null,
                                                                              onBack: null
                                                                            };
                                                                            ({ channel_id: obj16.channelId, id: obj16.messageId } = message);
                                                                            obj27.onBack = onBack;
                                                                            tmp130(4603).openLazy(tmp(1896)(11843, tmp2.paths), "MessageReminderDurationActionSheet", obj27);
                                                                            const tmp130Result49 = tmp130(4603);
                                                                          } else {
                                                                            const intl61 = tmp(1114).intl;
                                                                            if (intl61.string(tmp(1114).t.vrbqs1) === label) {
                                                                              const obj28 = {
                                                                                createReminder(dueAt) {
                                                                                                                                                              const obj = SavedMessageHelpers;
                                                                                                                                                              return obj.addOrUpdateSavedMessage({ channelId: id, messageId: id2, dueAt, displayToast: true, source: SavedMessageSources.SavedMessageSources.LONG_PRESS_ACTION_SHEET });
                                                                                                                                                            },
                                                                                removeReminder() {
                                                                                                                                                              return SavedMessageHelpers.removeSavedMessage({ channelId: id, messageId: id2, displayToast: true, isReminder: true });
                                                                                                                                                            },
                                                                                channelId: null,
                                                                                messageId: null,
                                                                                onBack: null
                                                                              };
                                                                              ({ channel_id: obj14.channelId, id: obj14.messageId } = message);
                                                                              obj28.onBack = onBack;
                                                                              tmp130(4603).openLazy(tmp(1896)(11843, tmp2.paths), "MessageReminderDurationActionSheet", obj28);
                                                                              const tmp130Result50 = tmp130(4603);
                                                                            } else {
                                                                              const intl62 = tmp(1114).intl;
                                                                              if (intl62.string(tmp(1114).t.ZH7P2h) === label) {
                                                                                if (null != selectedMedia) {
                                                                                  let id3;
                                                                                  if ("embed" === selectedMedia.sourceType) {
                                                                                    id3 = selectedMedia.source.id;
                                                                                  }
                                                                                  let id4;
                                                                                  if ("attachment" === selectedMedia.sourceType) {
                                                                                    id4 = selectedMedia.source.id;
                                                                                  }
                                                                                  let result13 = undefined !== id3 || undefined !== id4;
                                                                                  if (!result13) {
                                                                                    result13 = tmp(7395).messageHasObscurableMedia(message);
                                                                                    const tmpResult61 = tmp(7395);
                                                                                  }
                                                                                  if (result13) {
                                                                                    const obj29 = { channelId: null, messageId: null, attachmentId: null, embedId: null };
                                                                                    ({ channel_id: obj12.channelId, id: obj12.messageId } = message);
                                                                                    obj29.attachmentId = id4;
                                                                                    obj29.embedId = id3;
                                                                                    tmp130(4603).openLazy(tmp(1896)(11810, tmp2.paths), closure_20, obj29);
                                                                                    const tmp130Result51 = tmp130(4603);
                                                                                  }
                                                                                }
                                                                              } else {
                                                                                const intl63 = tmp(1114).intl;
                                                                                if (intl63.string(tmp(1114).t.grdwwt) === label) {
                                                                                  ({ channel_id: obj9.channelId, id: obj9.messageId } = message);
                                                                                  tmp130(11847).endPollEarly({ channelId: null, messageId: null });
                                                                                  const obj30 = { channelId: null, messageId: null };
                                                                                  const tmp130Result52 = tmp130(11847);
                                                                                } else {
                                                                                  const intl64 = tmp(1114).intl;
                                                                                  if (intl64.string(tmp(1114).t.Rjezbz) === label) {
                                                                                    const obj31 = { message, guildId: guild_id, onBack };
                                                                                    tmp130(4603).openLazy(tmp(1896)(11860, tmp2.paths), "AppInteractionInfoActionSheet", obj31);
                                                                                    const tmp130Result53 = tmp130(4603);
                                                                                  } else {
                                                                                    const intl65 = tmp(1114).intl;
                                                                                    if (intl65.string(tmp(1114).t["4sxKOb"]) !== label) {
                                                                                      const intl66 = tmp(1114).intl;
                                                                                      if (intl66.string(tmp(1114).t.wUIMqa) !== label) {
                                                                                        const intl67 = tmp(1114).intl;
                                                                                        if (intl67.string(tmp(1114).t.kFwAsa) === label) {
                                                                                          closure_129_0 = id;
                                                                                          closure_129_1 = message;
                                                                                          closure_129_2 = selectedMedia;
                                                                                          let sourceType;
                                                                                          if (selectedMedia != null) {
                                                                                            sourceType = selectedMedia.sourceType;
                                                                                          }
                                                                                          if ("attachment" === sourceType) {
                                                                                            if (chatInputRef != null) {
                                                                                              const current = chatInputRef.current;
                                                                                              if (current != null) {
                                                                                                current.dismissKeyboard();
                                                                                              }
                                                                                            }
                                                                                            const obj32 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
                                                                                            const intl3 = tmp(1114).intl;
                                                                                            obj32.title = intl3.string(tmp(1114).t.CbTIEo);
                                                                                            const intl4 = tmp(1114).intl;
                                                                                            obj32.body = intl4.string(tmp(1114).t.faHmO3);
                                                                                            const intl5 = tmp(1114).intl;
                                                                                            obj32.cancelText = intl5.string(tmp(1114).t["ETE/oC"]);
                                                                                            const intl6 = tmp(1114).intl;
                                                                                            obj32.confirmText = intl6.string(tmp(1114).t.kFwAsa);
                                                                                            obj32.onConfirm = function onConfirm() {
                                                                                              id = id2.source.id;
                                                                                              const attachments = id.attachments;
                                                                                              const found = attachments.filter((id) => id.id !== id);
                                                                                              const result = MessageActionCreatorsDefault.patchMessageAttachments(channel, id.id, found);
                                                                                            };
                                                                                            tmp130(4980).show(obj32);
                                                                                            const tmp130Result54 = tmp130(4980);
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                    closure_130_0 = id;
                                                                                    closure_130_1 = id2;
                                                                                    if (chatInputRef != null) {
                                                                                      const current2 = chatInputRef.current;
                                                                                      if (current2 != null) {
                                                                                        current2.dismissKeyboard();
                                                                                      }
                                                                                    }
                                                                                    const obj33 = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null };
                                                                                    const intl7 = tmp(1114).intl;
                                                                                    obj33.title = intl7.string(tmp(1114).t.VL1KOk);
                                                                                    const intl8 = tmp(1114).intl;
                                                                                    obj33.body = intl8.string(tmp(1114).t["vXZ+Fo"]);
                                                                                    const intl9 = tmp(1114).intl;
                                                                                    obj33.cancelText = intl9.string(tmp(1114).t["ETE/oC"]);
                                                                                    const intl10 = tmp(1114).intl;
                                                                                    obj33.confirmText = intl10.string(tmp(1114).t.YEHppG);
                                                                                    obj33.onConfirm = function onConfirm() {
                                                                                      MessageActionCreatorsDefault.suppressEmbeds(channel, id);
                                                                                    };
                                                                                    tmp130(4980).show(obj33);
                                                                                    const tmp130Result55 = tmp130(4980);
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
                                                        let mediaUrl3;
                                                        if (selectedMedia != null) {
                                                          mediaUrl3 = selectedMedia.mediaUrl;
                                                        }
                                                        let flag = null != mediaUrl3;
                                                        if (flag) {
                                                          tmp(7292).copy(mediaUrl3);
                                                          const tmpResult62 = tmp(7292);
                                                          tmp(4334).presentLinkCopied();
                                                          flag = true;
                                                          const tmpResult63 = tmp(4334);
                                                        }
                                                        if (flag) {
                                                          let hostname;
                                                          if (null != mediaUrl3) {
                                                            hostname = tmp(8491).getHostname(mediaUrl3);
                                                            const tmpResult64 = tmp(8491);
                                                          }
                                                          const obj34 = { hostname };
                                                          const tmp40 = isStaticChannelRoute(id);
                                                          let tmp41;
                                                          if (!tmp40) {
                                                            tmp41 = id;
                                                          }
                                                          const obj35 = { channel_id: tmp41, channel_static_route: null };
                                                          let tmp42;
                                                          if (tmp40) {
                                                            tmp42 = id;
                                                          }
                                                          obj35.channel_static_route = tmp42;
                                                          let merged = Object.assign(obj35);
                                                          tmp130(1240).track(constants.CONTEXT_MENU_MEDIA_LINK_COPIED, obj34);
                                                          const tmp130Result56 = tmp130(1240);
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
      if (onActionExecuted != null) {
        onActionExecuted(label);
      }
    }
    if (tmpResult65.canReportMessage(message)) {
      const result14 = tmp(8752).showReportModalForMessage(message, "mobile_message_action_sheet");
      const tmpResult66 = tmp(8752);
    }
    tmpResult65 = tmp(7392);
  }
};
