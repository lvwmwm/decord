// Module ID: 12639
// Function ID: 12640
// Name: LongPressMessageActionSheetUtils
// Dependencies: [19, 8784, 5249, 8785, 9021, 1388, 12640, 1072, 5162, 8637, 21, 5372, 11, 12641, 11151, 7937, 1256, 8660, 6268, 1113, 12642, 12645, 12646, 5315, 9016, 12648, 8864, 5492, 1099, 6376, 7943, 6014, 6356, 8134, 10993, 6361, 1381, 9100, 8633, 7653, 7656, 8634, 5552, 12649, 2121, 11161, 12063, 2835, 11159, 6063, 8476, 12651, 6067, 11866, 12652, 1108, 10239, 2119, 11915, 11925, 11922, 12653, 12666, 2]
// Exports: getContextBarCancelReason, handleCopyId, handleCopyMessageLink, handleCreateThread, longPressMessageOptionHandler

// Module 12639 (LongPressMessageActionSheetUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Fragment from "Fragment" /* 21 */;
import router_utils from "router_utils" /* 1099 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import ChannelConstants from "ChannelConstants" /* 5162 */;
import MessageRecord from "MessageRecord" /* 5249 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5492 */;
import ToastUtils from "ToastUtils" /* 6014 */;
import ChannelUtils from "ChannelUtils" /* 6356 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7937 */;
import ClipboardUtils from "ClipboardUtils" /* 7943 */;
import ExplicitMediaRedactionConstants from "ExplicitMediaRedactionConstants" /* 8637 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 8660 */;
import ThreadActionCreatorsDefault from "ThreadActionCreators" /* 8864 */;
import ForumComposerModalActionCreators from "ForumComposerModalActionCreators" /* 11151 */;
import SavedMessageHelpers from "SavedMessageHelpers" /* 11915 */;
import SavedMessageSources from "SavedMessageSources" /* 11925 */;
import PendingReplyActionCreators from "PendingReplyActionCreators" /* 12641 */;
import react from "react" /* 19 */;
import PendingReplyStore from "PendingReplyStore" /* 8784 */;
import EditMessageStore from "EditMessageStore" /* 8785 */;
import UploadStore from "UploadStore" /* 9021 */;
import UserStore from "UserStore" /* 1388 */;
import SendMessageOptionsStore from "SendMessageOptionsStore" /* 12640 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
let unpackModuleId;
function handleEdit(id, isForumPost, current, source) {
  let items;
  let obj8;
  let str3;
  let tmp16;
  let flag = arg4;
  if (arg4 === undefined) {
    flag = false;
  }
  if (isForumPost.isForumPost()) {
    id = isForumPost.id;
    const obj = SnowflakeUtilsDefault;
    if (id === obj.castMessageIdAsChannelId(id.id)) {
      if (null != isForumPost.parent_id) {
        const obj6 = PendingReplyActionCreators;
        obj6.deletePendingReply(isForumPost.id);
        const obj5 = { guildId: null, parentChannelId: null, threadId: null, messageId: id.id, isEdit: true, analyticsLocations: items, analyticsLocationObject: obj8 };
        ({ guild_id: obj7.guildId, parent_id: obj7.parentChannelId, id: obj7.threadId } = isForumPost);
        const openCreateForumPostModal = ForumComposerModalActionCreators.openCreateForumPostModal;
        items = [, ];
        ForumComposerModalActionCreators;
        items[0] = AnalyticsLocationDefault.FORUM_CHANNEL;
        items[1] = AnalyticsLocationDefault.GUILD_CHANNEL;
        obj8 = { page: constants3.GUILD_CHANNEL, section: map1.FORUM_POST_HEADER, object: unpackModuleId.CONTEXT_MENU };
        const result = openCreateForumPostModal(obj5);
      }
    }
  }
  if (flag) {
    if ("message_swipe" === source) {
      if (EditMessageStore.isEditing(isForumPost.id, id.id)) {
        const currentUser = UserStore.getCurrentUser();
        const obj13 = { message_id: id.id, channel_id: null, guild_id: null, context_action: "edit", reason: "swipe_edit_undo", is_own_message: tmp16 };
        ({ id: obj4.channel_id, guild_id: obj4.guild_id } = isForumPost);
        tmp16 = null != currentUser;
        const track = AnalyticsUtilsDefault.track;
        const CHAT_CONTEXT_BAR_ACTION_CANCELED = constants.CHAT_CONTEXT_BAR_ACTION_CANCELED;
        AnalyticsUtilsDefault;
        const tmp11 = importDefault;
        if (tmp16) {
          tmp16 = currentUser.id === id.author.id;
        }
        track(CHAT_CONTEXT_BAR_ACTION_CANCELED, obj13);
        const tmp11Result = tmp11(8660);
        tmp11Result.endEditMessage(isForumPost.id);
        if (current != null) {
          const current2 = current.current;
          if (current2 != null) {
            current2.dismissKeyboard();
          }
        }
      }
    }
  }
  const pendingReply = PendingReplyStore.getPendingReply(isForumPost.id);
  if (null != pendingReply) {
    const currentUser1 = UserStore.getCurrentUser();
    const obj14 = { message_id: id.id, channel_id: null, guild_id: null, context_action: "reply", reason: str3, is_own_message: null != currentUser1 && currentUser1.id === pendingReply.message.author.id };
    ({ id: obj9.channel_id, guild_id: obj9.guild_id } = isForumPost);
    const track2 = AnalyticsUtilsDefault.track;
    const CHAT_CONTEXT_BAR_ACTION_CANCELED2 = constants.CHAT_CONTEXT_BAR_ACTION_CANCELED;
    AnalyticsUtilsDefault;
    if ("message_swipe" === source) {
      str3 = "swipe_edit";
    } else if ("action_sheet" === source) {
      str3 = "action_sheet_edit";
    } else {
      str3 = "pressed_cancel";
    }
    track2(CHAT_CONTEXT_BAR_ACTION_CANCELED2, obj14);
  }
  const obj2 = PendingReplyActionCreators;
  obj2.deletePendingReply(isForumPost.id);
  const obj3 = MessageActionCreatorsDefault;
  const result1 = obj3.startEditMessageRecord(isForumPost.id, id, source);
  if (current != null) {
    current = current.current;
    if (current != null) {
      current.openSystemKeyboard();
    }
  }
}
const isMessageComponentsV2 = MessageRecord.isMessageComponentsV2;
({ AnalyticEvents: c10, AnalyticsObjects: unpackModuleId, AnalyticsPages: closure_12, AnalyticsSections: map1, ComponentActions: closure_14, GIF_RE_IOS: closure_15, MediaType: closure_16, MessageStates: closure_17, MessageTypes: closure_18 } = Constants);
const isStaticChannelRoute = ChannelConstants.isStaticChannelRoute;
let closure_20 = ExplicitMediaRedactionConstants.EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
const jsx = Fragment.jsx;
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
export function handleCreateThread(guild_id, id, Message) {
  let str = Message;
  if (Message === undefined) {
    str = "Message";
  }
  id = undefined;
  const openThreadCreationForMobile = ThreadActionCreatorsDefault.openThreadCreationForMobile;
  ThreadActionCreatorsDefault;
  if (id != null) {
    id = id.id;
  }
  const result = openThreadCreationForMobile(guild_id, id, str);
  let result1 = null == id;
  if (!result1) {
    const navigateToCreateThread = NavigationRouteUtils.navigateToCreateThread;
    guild_id = guild_id.guild_id;
    NavigationRouteUtils;
    const tmpResult = SnowflakeUtilsDefault;
    result1 = navigateToCreateThread(guild_id, tmpResult.castMessageIdAsChannelId(id.id));
  }
  if (!result1) {
    const transitionToGuild = router_utils.transitionToGuild;
    const guild_id2 = guild_id.guild_id;
    router_utils;
    const tmpResult2 = SnowflakeUtilsDefault;
    transitionToGuild(guild_id2, tmpResult2.castMessageIdAsChannelId(id.id));
  }
}
export function handleCopyMessageLink(channel, message_id) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { message_id, channel: channel.id };
  obj.track(constants.MESSAGE_LINK_COPIED, obj2);
  const obj3 = ChannelUtils;
  const channelPermalink = obj3.getChannelPermalink(channel.guild_id, channel.id, message_id);
  if (null != channelPermalink) {
    const tmp3Result = ClipboardUtils;
    tmp3Result.copy(channelPermalink);
    const tmp3Result2 = ToastUtils;
    tmp3Result2.presentLinkCopied();
  }
}
export function handleCopyId(arg0) {
  const obj = ClipboardUtils;
  obj.copy(arg0);
  const obj2 = ToastUtils;
  const result = obj2.presentMessageIdCopied();
}
export function longPressMessageOptionHandler(analyticsLocations) {
  let actionSheetSource;
  let channel;
  let chatInputRef;
  let disabled;
  let guild_id;
  let id;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl20;
  let intl21;
  let intl22;
  let intl23;
  let intl24;
  let intl25;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let label;
  let message;
  let obj19;
  let onActionExecuted;
  let onBack;
  let selectedMedia;
  let tmp51;
  ({ label, message, channel } = analyticsLocations);
  ({ chatInputRef, selectedMedia, actionSheetSource, onActionExecuted, onBack, disabled } = analyticsLocations);
  analyticsLocations = analyticsLocations.analyticsLocations;
  if (disabled === undefined) {
    disabled = false;
  }
  id = undefined;
  ({ guild_id, id } = channel);
  const id2 = message.id;
  if (!disabled) {
    const tmp = channel;
    let intl = channel(1113).intl;
    if (label !== intl.string(channel(1113).t.PHjkRE)) {
      let obj = id(5552);
      obj.hideActionSheet();
    }
    let intl2 = tmp(1113).intl;
    if (intl2.string(tmp(1113).t["+78Pfm"]) !== label) {
      const intl26 = tmp(1113).intl;
      if (intl26.string(tmp(1113).t.n5EBAJ) !== label) {
        const intl27 = tmp(1113).intl;
        if (intl27.string(id(2835)["1D+vqy"]) === label) {
          const tmpResult = tmp(11159);
          if (tmpResult.canReportMessageToMods(message)) {
            const tmpResult34 = tmp(12063);
            let result = tmpResult34.showReportToModMessageModal(message);
          }
        } else {
          const intl28 = tmp(1113).intl;
          if (intl28.string(tmp(1113).t.k5WiPf) === label) {
            if (message.type === constants8.THREAD_STARTER_MESSAGE) {
              if (null != message.messageReference) {
                const guild_id5 = message.messageReference.guild_id;
                if (null != guild_id5) {
                  const tmpResult35 = tmp(1099);
                  tmpResult35.transitionToGuild(guild_id5, tmp161, tmp160);
                }
              }
            }
          } else {
            const intl29 = tmp(1113).intl;
            if (intl29.string(tmp(1113).t["+TSRGD"]) === label) {
              const tmpResult36 = tmp(6063);
              tmpResult36.transitionToMessage(id, id2, { navigationReplace: true });
            } else {
              const intl30 = tmp(1113).intl;
              if (intl30.string(tmp(1113).t.zBoHlf) === label) {
                const tmpResult37 = tmp(7943);
                tmpResult37.copy(id2);
                const tmpResult38 = tmp(6014);
                const result1 = tmpResult38.presentMessageIdCopied();
              } else {
                const intl31 = tmp(1113).intl;
                if (intl31.string(tmp(1113).t.P8tvKG) === label) {
                  const user = UserStore.getUser(message.author.id);
                  if (null != user) {
                    if (chatInputRef != null) {
                      const current7 = chatInputRef.current;
                      if (current7 != null) {
                        const insertText = current7.insertText;
                        const _HermesInternal = HermesInternal;
                        const tmp144Result = id(5372);
                        insertText("@" + tmp144Result.getUserTag(user, { decoration: "never" }), null, true);
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
                  const intl32 = tmp(1113).intl;
                  if (intl32.string(tmp(1113).t.cduTBL) === label) {
                    let obj2 = { userId: message.author.id, channelId: id, messageId: message.id, sourceAnalyticsLocations: analyticsLocations };
                    id(8476)(obj2);
                  } else {
                    const intl33 = tmp(1113).intl;
                    if (intl33.string(tmp(1113).t.fsBWmS) === label) {
                      handleEdit(message, channel, chatInputRef, "action_sheet");
                    } else {
                      const intl34 = tmp(1113).intl;
                      if (intl34.string(tmp(1113).t.Y8ujqr) === label) {
                        let sourceType;
                        if (selectedMedia != null) {
                          sourceType = selectedMedia.sourceType;
                        }
                        if ("attachment" === sourceType) {
                          let obj3 = { message, attachment: selectedMedia.source };
                          const tmp144Result30 = id(5552);
                          tmp144Result30.openLazy(tmp(2121)(12651, dependencyMap.paths), "EditAttachmentActionSheet", obj3);
                        }
                      } else {
                        const intl35 = tmp(1113).intl;
                        if (intl35.string(tmp(1113).t.MFGE51) === label) {
                          if (chatInputRef != null) {
                            const current6 = chatInputRef.current;
                            if (current6 != null) {
                              current6.dismissKeyboard();
                            }
                          }
                          const obj4 = {
                            title: intl23.string(tmp(1113).t.aIz1oV),
                            children: null,
                            cancelText: intl24.string(tmp(1113).t["ETE/oC"]),
                            confirmText: intl25.string(tmp(1113).t["cY+Oob"]),
                            onConfirm() {
                                                      const obj = id(dependencyMap[17]);
                                                      return obj.crosspostMessage(id, id2);
                                                    }
                          };
                          const show6 = id(6268).show;
                          id(6268);
                          intl23 = tmp(1113).intl;
                          intl24 = tmp(1113).intl;
                          intl25 = tmp(1113).intl;
                          show6(obj4);
                        } else {
                          const intl36 = tmp(1113).intl;
                          if (intl36.string(tmp(1113).t.CvQ18w) === label) {
                            if (chatInputRef != null) {
                              const current5 = chatInputRef.current;
                              if (current5 != null) {
                                current5.dismissKeyboard();
                              }
                            }
                            const obj6 = {
                              title: intl19.string(tmp(1113).t.CvQ18w),
                              body: intl20.string(tmp(1113).t.WG5dyo),
                              children: null,
                              cancelText: intl21.string(tmp(1113).t.gm1Vej),
                              confirmText: intl22.string(tmp(1113).t.p89ACt),
                              onConfirm() {
                                                          const obj = id(dependencyMap[22]);
                                                          obj.pinMessage(channel, message.id);
                                                          const AccessibilityAnnouncer = channel(dependencyMap[23]).AccessibilityAnnouncer;
                                                          const announce = AccessibilityAnnouncer.announce;
                                                          const intl = channel(dependencyMap[19]).intl;
                                                          announce(intl.string(channel(dependencyMap[19]).t.sCfDDl));
                                                        }
                            };
                            const show5 = id(6268).show;
                            id(6268);
                            intl19 = tmp(1113).intl;
                            intl20 = tmp(1113).intl;
                            intl21 = tmp(1113).intl;
                            intl22 = tmp(1113).intl;
                            show5(obj6);
                          } else {
                            const intl37 = tmp(1113).intl;
                            if (intl37.string(tmp(1113).t["Bse+F/"]) === label) {
                              if (chatInputRef != null) {
                                const current4 = chatInputRef.current;
                                if (current4 != null) {
                                  current4.dismissKeyboard();
                                }
                              }
                              const obj9 = {
                                title: intl15.string(tmp(1113).t["Bse+F/"]),
                                body: intl16.string(tmp(1113).t.NjEPp7),
                                children: null,
                                cancelText: intl17.string(tmp(1113).t.gm1Vej),
                                confirmText: intl18.string(tmp(1113).t.p89ACt),
                                onConfirm() {
                                                              const obj = id(dependencyMap[22]);
                                                              return obj.unpinMessage(channel, message.id);
                                                            }
                              };
                              const show4 = id(6268).show;
                              id(6268);
                              intl15 = tmp(1113).intl;
                              intl16 = tmp(1113).intl;
                              intl17 = tmp(1113).intl;
                              intl18 = tmp(1113).intl;
                              show4(obj9);
                            } else {
                              const intl38 = tmp(1113).intl;
                              if (intl38.string(tmp(1113).t["lE/PG3"]) === label) {
                                const tmp144Result34 = id(8660);
                                const result2 = tmp144Result34.patchMessageGuildOfficial(id, id2, true);
                              } else {
                                const intl39 = tmp(1113).intl;
                                if (intl39.string(tmp(1113).t["2km5Gf"]) === label) {
                                  const tmp144Result35 = id(8660);
                                  const result3 = tmp144Result35.patchMessageGuildOfficial(id, id2, false);
                                } else {
                                  const intl40 = tmp(1113).intl;
                                  if (intl40.string(tmp(1113).t.xwMqD7) === label) {
                                    if (message.state === constants7.SENDING) {
                                      const tmp144Result36 = id(9016);
                                      tmp144Result36.cancelRequest(id2);
                                      const tmp144Result37 = id(8660);
                                      tmp144Result37.deleteMessage(id, id2, true);
                                    } else if (message.state === tmp95.SEND_FAILED) {
                                      const tmp144Result38 = id(8660);
                                      tmp144Result38.deleteMessage(id, id2, true);
                                    } else {
                                      if (chatInputRef != null) {
                                        const current3 = chatInputRef.current;
                                        if (current3 != null) {
                                          current3.dismissKeyboard();
                                        }
                                      }
                                      const obj13 = {
                                        title: intl11.string(tmp(1113).t.MWMcg7),
                                        body: intl12.string(tmp(1113).t.AMvpS4),
                                        children: null,
                                        cancelText: intl13.string(tmp(1113).t.gm1Vej),
                                        confirmText: intl14.string(tmp(1113).t.p89ACt),
                                        onConfirm() {
                                                                              id = message.id;
                                                                              const obj = id(dependencyMap[17]);
                                                                              obj.deleteMessage(id, id, false);
                                                                            }
                                      };
                                      const show3 = id(6268).show;
                                      id(6268);
                                      intl11 = tmp(1113).intl;
                                      intl12 = tmp(1113).intl;
                                      intl13 = tmp(1113).intl;
                                      intl14 = tmp(1113).intl;
                                      show3(obj13);
                                    }
                                    const obj16 = { channel_id: id, guild_id, action_sheet_option: "delete", message_state: message.state };
                                    const tmp144Result40 = id(6067);
                                    tmp144Result40.trackWithMetadata(constants.MESSAGE_ACTION_SHEET_OPTION_PRESSED, obj16);
                                  } else {
                                    const intl41 = tmp(1113).intl;
                                    if (intl41.string(tmp(1113).t["5911Lb"]) === label) {
                                      const uploaderFileForMessageId = UploadStore.getUploaderFileForMessageId(message.id);
                                      let items;
                                      if (uploaderFileForMessageId != null) {
                                        items = uploaderFileForMessageId.items;
                                      }
                                      const tmp144Result41 = id(12648);
                                      tmp144Result41(channel, message, items, SendMessageOptionsStore.getOptions(message.id));
                                      const obj17 = { channel_id: id, guild_id, action_sheet_option: "retry", message_state: message.state };
                                      const tmp144Result42 = id(6067);
                                      tmp144Result42.trackWithMetadata(constants.MESSAGE_ACTION_SHEET_OPTION_PRESSED, obj17);
                                    } else {
                                      const intl42 = tmp(1113).intl;
                                      if (intl42.string(tmp(1113).t.JrGD7E) === label) {
                                        const contentMessage = message.getContentMessage();
                                        if (isMessageComponentsV2(contentMessage)) {
                                          const tmpResult39 = tmp(6376);
                                          const allTextDisplayContent = tmpResult39.getAllTextDisplayContent(contentMessage.components);
                                          if (null != allTextDisplayContent) {
                                            const tmpResult40 = tmp(7943);
                                            tmpResult40.copy(allTextDisplayContent);
                                          }
                                        } else {
                                          const tmpResult41 = tmp(7943);
                                          tmpResult41.copy(contentMessage.content);
                                        }
                                        const tmpResult42 = tmp(6014);
                                        tmpResult42.presentMessageCopied();
                                      } else {
                                        const intl43 = tmp(1113).intl;
                                        if (intl43.string(tmp(1113).t.lfIHs4) === label) {
                                          const tmpResult43 = tmp(11866);
                                          const result4 = tmpResult43.handleAddNewReactions(channel, id2);
                                        } else {
                                          const intl44 = tmp(1113).intl;
                                          if (intl44.string(tmp(1113).t.gHp0C4) === label) {
                                            if ("Preview" === actionSheetSource) {
                                              const tmpResult44 = tmp(11866);
                                              const result5 = tmpResult44.handleViewPreviewReactions(id2, id);
                                            } else {
                                              const obj18 = { messageId: id2, channelId: id, location: obj19 };
                                              obj19 = { object: constants2.MESSAGE_ACTION_SHEET };
                                              const tmpResult45 = tmp(11866);
                                              tmpResult45.handleViewReactions(obj18);
                                            }
                                          } else {
                                            const intl45 = tmp(1113).intl;
                                            if (intl45.string(tmp(1113).t.ZbtGBm) === label) {
                                              const tmpResult46 = tmp(11866);
                                              const result6 = tmpResult46.handleRemoveAllReactions(id, id2);
                                            } else {
                                              const intl46 = tmp(1113).intl;
                                              if (intl46.string(tmp(1113).t["g33r/P"]) === label) {
                                                const id3 = message.author.id;
                                                const obj20 = { recipientIds: id3 };
                                                const tmp144Result43 = id(8134);
                                                tmp144Result43.openPrivateChannel(obj20);
                                              } else {
                                                const intl47 = tmp(1113).intl;
                                                if (intl47.string(tmp(1113).t.Xrt5Po) === label) {
                                                  const obj21 = { message_id: id2, channel: channel.id };
                                                  const tmp144Result44 = id(1256);
                                                  tmp144Result44.track(constants.MESSAGE_LINK_COPIED, obj21);
                                                  const tmpResult47 = tmp(6356);
                                                  const channelPermalink = tmpResult47.getChannelPermalink(channel.guild_id, channel.id, id2);
                                                  if (null != channelPermalink) {
                                                    const tmpResult48 = tmp(7943);
                                                    tmpResult48.copy(channelPermalink);
                                                    const tmpResult49 = tmp(6014);
                                                    tmpResult49.presentLinkCopied();
                                                  }
                                                } else {
                                                  const intl48 = tmp(1113).intl;
                                                  if (intl48.string(tmp(1113).t.RpE9k7) === label) {
                                                    id(10993)(id, id2);
                                                  } else {
                                                    const intl49 = tmp(1113).intl;
                                                    if (intl49.string(tmp(1113).t["S/xNKV"]) === label) {
                                                      let mediaUrl;
                                                      if (selectedMedia != null) {
                                                        mediaUrl = selectedMedia.mediaUrl;
                                                      }
                                                      if (null != mediaUrl) {
                                                        const tmpResult50 = tmp(6361);
                                                        let closure_2 = tmpResult50.urlMatchesFileExtension(selectedMedia.mediaUrl, closure_15);
                                                        const tmp144Result45 = id(1381);
                                                        const toURLSafeResult = tmp144Result45.toURLSafe(selectedMedia.mediaUrl);
                                                        if (null != toURLSafeResult) {
                                                          let result7;
                                                          const obj31 = id2(9100);
                                                          const tmp62 = id2;
                                                          if (obj31.isRefreshableAttachmentUrl(toURLSafeResult)) {
                                                            const tmp62Result = tmp62(9100);
                                                            result7 = tmp62Result.maybeRefreshAttachmentUrl(selectedMedia.mediaUrl);
                                                          }
                                                          const nextPromise = result7.then((result) => {
                                                            const obj = channel(dependencyMap[38]);
                                                            return obj.downloadMediaAssetWithContentType(result, closure_2 ? constants6.GIF : constants6.IMAGE, selectedMedia.contentType);
                                                          });
                                                          nextPromise.then(() => {
                                                            let tmp7;
                                                            const obj = channel(dependencyMap[31]);
                                                            if (closure_2) {
                                                              obj.presentGifSaved();
                                                            } else {
                                                              obj.presentImageSaved();
                                                            }
                                                            const track = id(dependencyMap[16]).track;
                                                            const CONTEXT_MENU_IMAGE_SAVED = constants.CONTEXT_MENU_IMAGE_SAVED;
                                                            id(dependencyMap[16]);
                                                            const tmp5 = isStaticChannelRoute(id);
                                                            let tmp6;
                                                            if (!tmp5) {
                                                              tmp6 = tmp4;
                                                            }
                                                            const obj2 = { channel_id: tmp6, channel_static_route: tmp7 };
                                                            tmp7 = undefined;
                                                            if (tmp5) {
                                                              tmp7 = tmp4;
                                                            }
                                                            const obj3 = {};
                                                            const merged = Object.assign(obj2);
                                                            track(CONTEXT_MENU_IMAGE_SAVED, obj3);
                                                          }, () => {
                                                            let intl;
                                                            let intl2;
                                                            let tmp7;
                                                            const obj = { title: intl.string(channel(dependencyMap[19]).t.cV3alD), body: intl2.string(channel(dependencyMap[19]).t.r4Zjzv), isDismissable: true };
                                                            const show = id(dependencyMap[18]).show;
                                                            id(dependencyMap[18]);
                                                            intl = channel(dependencyMap[19]).intl;
                                                            intl2 = channel(dependencyMap[19]).intl;
                                                            show(obj);
                                                            const track = id(dependencyMap[16]).track;
                                                            const CONTEXT_MENU_IMAGE_SAVE_FAILED = constants.CONTEXT_MENU_IMAGE_SAVE_FAILED;
                                                            id(dependencyMap[16]);
                                                            const tmp5 = isStaticChannelRoute(id);
                                                            let tmp6;
                                                            if (!tmp5) {
                                                              tmp6 = tmp4;
                                                            }
                                                            const obj2 = { channel_id: tmp6, channel_static_route: tmp7 };
                                                            tmp7 = undefined;
                                                            if (tmp5) {
                                                              tmp7 = tmp4;
                                                            }
                                                            const obj3 = {};
                                                            const merged = Object.assign(obj2);
                                                            track(CONTEXT_MENU_IMAGE_SAVE_FAILED, obj3);
                                                          });
                                                        }
                                                        result7 = Promise.resolve(selectedMedia.mediaUrl);
                                                      }
                                                    } else {
                                                      const intl50 = tmp(1113).intl;
                                                      if (intl50.string(tmp(1113).t.JVuuz3) === label) {
                                                        let mediaUrl1;
                                                        if (selectedMedia != null) {
                                                          mediaUrl1 = selectedMedia.mediaUrl;
                                                        }
                                                        if (null != mediaUrl1) {
                                                          const tmpResult51 = tmp(8633);
                                                          const result8 = tmpResult51.downloadMediaAssetWithContentType(selectedMedia.mediaUrl, constants6.VIDEO, selectedMedia.contentType);
                                                          result8.then(() => {
                                                            const obj = channel(dependencyMap[31]);
                                                            obj.presentVideoSaved();
                                                          }, () => {
                                                            let intl;
                                                            let intl2;
                                                            const obj = { title: intl.string(channel(dependencyMap[19]).t.cV3alD), body: intl2.string(channel(dependencyMap[19]).t.r4Zjzv), isDismissable: true };
                                                            const show = id(dependencyMap[18]).show;
                                                            id(dependencyMap[18]);
                                                            intl = channel(dependencyMap[19]).intl;
                                                            intl2 = channel(dependencyMap[19]).intl;
                                                            show(obj);
                                                          });
                                                        }
                                                      } else {
                                                        const intl51 = tmp(1113).intl;
                                                        if (intl51.string(tmp(1113).t.vbAEaA) === label) {
                                                          let mediaUrl2;
                                                          if (selectedMedia != null) {
                                                            mediaUrl2 = selectedMedia.mediaUrl;
                                                          }
                                                          if (null != mediaUrl2) {
                                                            const obj22 = { href: mediaUrl2 };
                                                            const tmpResult52 = tmp(7653);
                                                            tmpResult52.handleClick(obj22);
                                                          }
                                                        } else {
                                                          const intl52 = tmp(1113).intl;
                                                          if (intl52.string(tmp(1113).t["92CPQ+"]) !== label) {
                                                            const intl53 = tmp(1113).intl;
                                                            if (intl53.string(tmp(1113).t["8xHmxo"]) !== label) {
                                                              const intl54 = tmp(1113).intl;
                                                              if (intl54.string(tmp(1113).t["5IEsGx"]) === label) {
                                                                const obj23 = { message, channel, chatInputRef, actionSource: "action_sheet" };
                                                                id(12652)(obj23);
                                                                if ("Preview" === actionSheetSource) {
                                                                  const tmpResult53 = tmp(6063);
                                                                  tmpResult53.transitionToMessage(channel.id, message.id);
                                                                  const _setTimeout = setTimeout;
                                                                  const timerId = setTimeout(() => {
                                                                    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                                                                    const obj = { channelId: channel.id };
                                                                    return ComponentDispatch.dispatch(constants.TEXTAREA_FOCUS, obj);
                                                                  }, 500);
                                                                }
                                                              } else {
                                                                const intl55 = tmp(1113).intl;
                                                                if (intl55.string(tmp(1113).t.I3ltXO) === label) {
                                                                  const obj24 = { message, source: "long-press-sheet" };
                                                                  const tmpResult54 = tmp(10239);
                                                                  tmpResult54.openForwardModal(obj24);
                                                                } else {
                                                                  const intl56 = tmp(1113).intl;
                                                                  if (intl56.string(tmp(1113).t.rBIGBL) === label) {
                                                                    let id1;
                                                                    const openThreadCreationForMobile = id(8864).openThreadCreationForMobile;
                                                                    id(8864);
                                                                    if (message != null) {
                                                                      id1 = message.id;
                                                                    }
                                                                    const result9 = openThreadCreationForMobile(channel, id1, "Message");
                                                                    let result10 = null == message;
                                                                    if (!result10) {
                                                                      const navigateToCreateThread = tmp(5492).navigateToCreateThread;
                                                                      const guild_id3 = channel.guild_id;
                                                                      tmp(5492);
                                                                      const tmp144Result47 = id(11);
                                                                      result10 = navigateToCreateThread(guild_id3, tmp144Result47.castMessageIdAsChannelId(message.id));
                                                                    }
                                                                    if (!result10) {
                                                                      const transitionToGuild2 = tmp(1099).transitionToGuild;
                                                                      const guild_id4 = channel.guild_id;
                                                                      tmp(1099);
                                                                      const tmp144Result48 = id(11);
                                                                      transitionToGuild2(guild_id4, tmp144Result48.castMessageIdAsChannelId(message.id));
                                                                    }
                                                                  } else {
                                                                    const intl57 = tmp(1113).intl;
                                                                    if (intl57.string(tmp(1113).t["39d0Wj"]) === label) {
                                                                      const transitionToGuild = tmp(1099).transitionToGuild;
                                                                      const guild_id2 = channel.guild_id;
                                                                      tmp(1099);
                                                                      const tmp144Result49 = id(11);
                                                                      transitionToGuild(guild_id2, tmp144Result49.castMessageIdAsChannelId(message.id));
                                                                    } else {
                                                                      const intl58 = tmp(1113).intl;
                                                                      if (intl58.string(tmp(1113).t.PHjkRE) === label) {
                                                                        const tmp144Result50 = id(5552);
                                                                        tmp144Result50.hideActionSheet();
                                                                        const obj25 = { channel, commandType: tmp(2119).ApplicationCommandType.MESSAGE, commandTargetId: message.id };
                                                                        const navigateToContextMenuCommands = tmp(5492).navigateToContextMenuCommands;
                                                                        tmp(5492);
                                                                        const result11 = navigateToContextMenuCommands(obj25);
                                                                      } else {
                                                                        const intl59 = tmp(1113).intl;
                                                                        if (intl59.string(tmp(1113).t.tpxJto) === label) {
                                                                          const obj26 = { channelId: id, messageId: id2, displayToast: true, source: tmp(11925).SavedMessageSources.LONG_PRESS_ACTION_SHEET };
                                                                          const addOrUpdateSavedMessage = tmp(11915).addOrUpdateSavedMessage;
                                                                          tmp(11915);
                                                                          const result12 = addOrUpdateSavedMessage(obj26);
                                                                        } else {
                                                                          const intl60 = tmp(1113).intl;
                                                                          if (intl60.string(tmp(1113).t.SvXS1Z) === label) {
                                                                            const obj27 = { channelId: id, messageId: id2, displayToast: true };
                                                                            const tmpResult60 = tmp(11915);
                                                                            tmpResult60.removeSavedMessage(obj27);
                                                                          } else {
                                                                            const intl61 = tmp(1113).intl;
                                                                            if (intl61.string(tmp(1113).t.mJ3P0N) === label) {
                                                                              const obj28 = {
                                                                                createReminder(dueAt) {
                                                                                                                                                              const obj = SavedMessageHelpers;
                                                                                                                                                              const obj2 = { channelId: id, messageId: id2, dueAt, displayToast: true, source: SavedMessageSources.SavedMessageSources.LONG_PRESS_ACTION_SHEET };
                                                                                                                                                              return obj.addOrUpdateSavedMessage(obj2);
                                                                                                                                                            },
                                                                                channelId: null,
                                                                                messageId: null,
                                                                                onBack
                                                                              };
                                                                              ({ channel_id: obj14.channelId, id: obj14.messageId } = message);
                                                                              const tmp144Result51 = id(5552);
                                                                              tmp144Result51.openLazy(tmp(2121)(11922, dependencyMap.paths), "MessageReminderDurationActionSheet", obj28);
                                                                            } else {
                                                                              const intl62 = tmp(1113).intl;
                                                                              if (intl62.string(tmp(1113).t.vrbqs1) === label) {
                                                                                const obj29 = {
                                                                                  createReminder(dueAt) {
                                                                                                                                                                  const obj = SavedMessageHelpers;
                                                                                                                                                                  const obj2 = { channelId: id, messageId: id2, dueAt, displayToast: true, source: SavedMessageSources.SavedMessageSources.LONG_PRESS_ACTION_SHEET };
                                                                                                                                                                  return obj.addOrUpdateSavedMessage(obj2);
                                                                                                                                                                },
                                                                                  removeReminder() {
                                                                                                                                                                  const obj = SavedMessageHelpers;
                                                                                                                                                                  const obj2 = { channelId: id, messageId: id2, displayToast: true, isReminder: true };
                                                                                                                                                                  return obj.removeSavedMessage(obj2);
                                                                                                                                                                },
                                                                                  channelId: null,
                                                                                  messageId: null,
                                                                                  onBack
                                                                                };
                                                                                ({ channel_id: obj12.channelId, id: obj12.messageId } = message);
                                                                                const tmp144Result52 = id(5552);
                                                                                tmp144Result52.openLazy(tmp(2121)(11922, dependencyMap.paths), "MessageReminderDurationActionSheet", obj29);
                                                                              } else {
                                                                                const intl63 = tmp(1113).intl;
                                                                                if (intl63.string(tmp(1113).t.ZH7P2h) === label) {
                                                                                  if (null != selectedMedia) {
                                                                                    let id4;
                                                                                    if ("embed" === selectedMedia.sourceType) {
                                                                                      id4 = selectedMedia.source.id;
                                                                                    }
                                                                                    let id5;
                                                                                    if ("attachment" === selectedMedia.sourceType) {
                                                                                      id5 = selectedMedia.source.id;
                                                                                    }
                                                                                    let result13 = undefined !== id4 || undefined !== id5;
                                                                                    if (!result13) {
                                                                                      const tmpResult61 = tmp(8634);
                                                                                      result13 = tmpResult61.messageHasObscurableMedia(message);
                                                                                    }
                                                                                    if (result13) {
                                                                                      const obj30 = { channelId: null, messageId: null, attachmentId: id5, embedId: id4 };
                                                                                      ({ channel_id: obj10.channelId, id: obj10.messageId } = message);
                                                                                      const tmp144Result53 = id(5552);
                                                                                      tmp144Result53.openLazy(tmp(2121)(12649, dependencyMap.paths), closure_20, obj30);
                                                                                    }
                                                                                  }
                                                                                } else {
                                                                                  const intl64 = tmp(1113).intl;
                                                                                  if (intl64.string(tmp(1113).t.grdwwt) === label) {
                                                                                    const obj32 = { channelId: null, messageId: null };
                                                                                    ({ channel_id: obj7.channelId, id: obj7.messageId } = message);
                                                                                    const tmp144Result54 = id(12653);
                                                                                    tmp144Result54.endPollEarly(obj32);
                                                                                  } else {
                                                                                    const intl65 = tmp(1113).intl;
                                                                                    if (intl65.string(tmp(1113).t.Rjezbz) === label) {
                                                                                      const obj33 = { message, guildId: guild_id, onBack };
                                                                                      const tmp144Result55 = id(5552);
                                                                                      tmp144Result55.openLazy(tmp(2121)(12666, dependencyMap.paths), "AppInteractionInfoActionSheet", obj33);
                                                                                    } else {
                                                                                      const intl66 = tmp(1113).intl;
                                                                                      if (intl66.string(tmp(1113).t["4sxKOb"]) !== label) {
                                                                                        const intl67 = tmp(1113).intl;
                                                                                        if (intl67.string(tmp(1113).t.wUIMqa) !== label) {
                                                                                          const intl68 = tmp(1113).intl;
                                                                                          if (intl68.string(tmp(1113).t.kFwAsa) === label) {
                                                                                            let sourceType1;
                                                                                            if (selectedMedia != null) {
                                                                                              sourceType1 = selectedMedia.sourceType;
                                                                                            }
                                                                                            if ("attachment" === sourceType1) {
                                                                                              if (chatInputRef != null) {
                                                                                                const current = chatInputRef.current;
                                                                                                if (current != null) {
                                                                                                  current.dismissKeyboard();
                                                                                                }
                                                                                              }
                                                                                              const obj34 = {
                                                                                                title: intl3.string(tmp(1113).t.CbTIEo),
                                                                                                body: intl4.string(tmp(1113).t.faHmO3),
                                                                                                cancelText: intl5.string(tmp(1113).t["ETE/oC"]),
                                                                                                confirmText: intl6.string(tmp(1113).t.kFwAsa),
                                                                                                onConfirm() {
                                                                                                                                                                                              id = selectedMedia.source.id;
                                                                                                                                                                                              const attachments = message.attachments;
                                                                                                                                                                                              const found = attachments.filter((id) => id.id !== id);
                                                                                                                                                                                              const obj = id(dependencyMap[17]);
                                                                                                                                                                                              const result = obj.patchMessageAttachments(id, message.id, found);
                                                                                                                                                                                            }
                                                                                              };
                                                                                              let show = id(6268).show;
                                                                                              id(6268);
                                                                                              intl3 = tmp(1113).intl;
                                                                                              intl4 = tmp(1113).intl;
                                                                                              intl5 = tmp(1113).intl;
                                                                                              intl6 = tmp(1113).intl;
                                                                                              show(obj34);
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                      if (chatInputRef != null) {
                                                                                        const current2 = chatInputRef.current;
                                                                                        if (current2 != null) {
                                                                                          current2.dismissKeyboard();
                                                                                        }
                                                                                      }
                                                                                      const obj35 = {
                                                                                        title: intl7.string(tmp(1113).t.VL1KOk),
                                                                                        body: intl8.string(tmp(1113).t["vXZ+Fo"]),
                                                                                        cancelText: intl9.string(tmp(1113).t["ETE/oC"]),
                                                                                        confirmText: intl10.string(tmp(1113).t.YEHppG),
                                                                                        onConfirm() {
                                                                                                                                                                              const obj = id(dependencyMap[17]);
                                                                                                                                                                              obj.suppressEmbeds(id, id2);
                                                                                                                                                                            }
                                                                                      };
                                                                                      const show2 = id(6268).show;
                                                                                      id(6268);
                                                                                      intl7 = tmp(1113).intl;
                                                                                      intl8 = tmp(1113).intl;
                                                                                      intl9 = tmp(1113).intl;
                                                                                      intl10 = tmp(1113).intl;
                                                                                      show2(obj35);
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
                                                            const tmpResult62 = tmp(7943);
                                                            tmpResult62.copy(mediaUrl3);
                                                            const tmpResult63 = tmp(6014);
                                                            tmpResult63.presentLinkCopied();
                                                            flag = true;
                                                          }
                                                          if (flag) {
                                                            let hostname;
                                                            let track = id(1256).track;
                                                            const CONTEXT_MENU_MEDIA_LINK_COPIED = constants.CONTEXT_MENU_MEDIA_LINK_COPIED;
                                                            id(1256);
                                                            if (null != mediaUrl3) {
                                                              const tmpResult64 = tmp(7656);
                                                              hostname = tmpResult64.getHostname(mediaUrl3);
                                                            }
                                                            const obj36 = { hostname };
                                                            const tmp49 = isStaticChannelRoute(id);
                                                            let tmp50;
                                                            if (!tmp49) {
                                                              tmp50 = id;
                                                            }
                                                            const obj37 = { channel_id: tmp50, channel_static_route: tmp51 };
                                                            tmp51 = undefined;
                                                            if (tmp49) {
                                                              tmp51 = id;
                                                            }
                                                            let merged = Object.assign(obj37);
                                                            track(CONTEXT_MENU_MEDIA_LINK_COPIED, obj36);
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
      }
      if (onActionExecuted != null) {
        onActionExecuted(label);
      }
    }
    const tmpResult65 = tmp(11161);
    if (tmpResult65.canReportMessage(message)) {
      const tmpResult66 = tmp(12063);
      const result14 = tmpResult66.showReportModalForMessage(message, "mobile_message_action_sheet");
    }
  }
}
