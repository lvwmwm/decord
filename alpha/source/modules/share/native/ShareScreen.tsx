// Module ID: 14841
// Function ID: 14842
// Name: ShareScreen
// Dependencies: [5, 32, 19, 17, 2072, 2068, 4809, 1087, 12610, 10457, 21, 5154, 587, 1128, 14842, 12611, 14843, 14844, 1267, 9554, 5165, 1384, 8710, 9502, 12646, 2002, 5364, 14845, 14846, 6434, 12621, 1630, 12622, 14847, 2]
// Exports: default

// Module 14841 (ShareScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1128 */;
import UserRowConstants from "UserRowConstants" /* 10457 */;
import ForwardConstants from "ForwardConstants" /* 12610 */;
import ShareAttachmentsDefault from "ShareAttachments" /* 14845 */;
import ShareEmbedDefault from "ShareEmbed" /* 14846 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ChannelRecord from "ChannelRecord" /* 2072 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import PermissionStore from "PermissionStore" /* 4809 */;
import Constants from "Constants" /* 1087 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5154 */;
import size from "module_2" /* 2 */;

let React, attachment_mimetypes, c4, channelId, closure_0, closure_1, closure_4, destination;

let closure_12;
let closure_16;
let closure_17;
let closure_18;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let unpackModuleId;
function getAttachmentsRestriction(type) {
  let intl;
  if (type instanceof metroImportDefault) {
    if (metroImportAll(type.type)) {
      let tmp4;
      if (!PermissionStore.can(constants.ATTACH_FILES, type)) {
        const obj = { label: intl.string(intl6.t.P7yvbm) };
        intl = intl6.intl;
        tmp4 = obj;
      }
      return tmp4;
    }
  }
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ ChannelRecordBase: metroImportDefault, isGuildChannelType: metroImportAll } = ChannelRecord);
({ AnalyticEvents: unpackModuleId, Permissions: closure_12, MAX_UPLOAD_COUNT: map1 } = Constants);
const MAX_DESTINATION_COUNT = ForwardConstants.MAX_DESTINATION_COUNT;
const UserRowModes = UserRowConstants.UserRowModes;
({ jsx: closure_16, Fragment: closure_17, jsxs: closure_18 } = Fragment);
let obj = { container: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_19 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/share/native/ShareScreen.tsx");

export default function ShareScreen(appEntryKey) {
  let PX_8;
  let _undefined;
  let c6;
  let formatToPlainStringResult;
  let initialSelectedDestinations;
  let intl5;
  let items3;
  let stringResult;
  let tmp16;
  let tmp18;
  let tmp20;
  let tmp20Result4;
  let tmp35;
  let tmp37;
  let tmp39;
  let tmp4;
  let tmp6;
  appEntryKey = appEntryKey.appEntryKey;
  const sharedContent = appEntryKey.sharedContent;
  const onClose = appEntryKey.onClose;
  initialSelectedDestinations = undefined;
  _slicedToArray = undefined;
  react = undefined;
  c6 = undefined;
  let closure_7;
  let first2;
  let embed;
  let isLoading;
  let obj = react;
  let items = [sharedContent];
  let tmp = closure_19();
  [initialSelectedDestinations, _slicedToArray] = react.useState(react.useMemo(() => {
    const items = [];
    if (null != sharedContent.targetUserId) {
      const obj = { type: "user", id: sharedContent.targetUserId };
      items.push(obj);
    }
    if (null != sharedContent.targetChannelId) {
      const obj2 = { type: "channel", id: sharedContent.targetChannelId };
      items.push(obj2);
    }
    return items;
  }, items));
  let tmp5 = sharedContent.attachments.length > closure_13;
  if (tmp5) {
    let tmp10 = appEntryKey;
    let tmp11 = onClose;
    let intl2 = appEntryKey(onClose[13]).intl;
    let obj2 = { limit: tmp4 };
    formatToPlainStringResult = intl2.formatToPlainString(appEntryKey(onClose[13]).t["qqyp/e"], obj2);
  } else if (initialSelectedDestinations.length >= MAX_DESTINATION_COUNT) {
    let tmp9 = onClose;
    let intl = appEntryKey(onClose[13]).intl;
    let obj3 = { count: tmp6 };
    formatToPlainStringResult = intl.formatToPlainString(appEntryKey(onClose[13]).t["3Fbkir"], obj3);
  }
  const callback = obj.useCallback((arg0) => {
    closure_4(arg0);
  }, []);
  const tmp2Result = _slicedToArray(obj.useState(0), 2);
  react = tmp2Result[1];
  const first1 = tmp2Result[0];
  [tmp16, c6] = _slicedToArray(obj.useState(false), 2);
  _slicedToArray(obj.useState(false), 2);
  closure_7 = obj.useRef(tmp16);
  if (initialSelectedDestinations.length <= 1) {
    let tmp21 = appEntryKey;
    let tmp22 = onClose;
    const intl4 = appEntryKey(onClose[13]).intl;
    stringResult = intl4.string(appEntryKey(onClose[13]).t.TXNS7S);
    tmp18 = onClose;
    tmp20 = appEntryKey;
  } else {
    let tmp17 = appEntryKey;
    tmp18 = onClose;
    let intl3 = appEntryKey(onClose[13]).intl;
    let obj4 = { count: initialSelectedDestinations.length };
    stringResult = intl3.formatToPlainString(appEntryKey(onClose[13]).t.jWtYUm, obj4);
    tmp20 = appEntryKey;
  }
  let str = sharedContent.text;
  const useState = obj.useState;
  if (str == null) {
    str = "";
  }
  const tmp2Result4 = _slicedToArray(useState(str), 2);
  first2 = tmp2Result4[0];
  let tmp26 = sharedContent;
  let tmp25 = tmp2Result4[1];
  let tmp27 = sharedContent(tmp18[14])(first2);
  embed = tmp27.embed;
  isLoading = tmp27.isLoading;
  const items1 = [appEntryKey, onClose, initialSelectedDestinations, sharedContent.attachments, first2];
  const items2 = [embed, isLoading, sharedContent.attachments];
  const callback1 = obj.useCallback(initialSelectedDestinations(function*(arg0, value) {
    let closure_2;
    let intl;
    let intl2;
    let obj14;
    let paths;
    if (React === 2) {
      React = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let tmp;
        let attachments;
        let sentDestinations;
        let failedDestinations;
        let transitionChannelId;
        let uploadErrorToAlert;
        let closure_10;
        React = 2;
        const tmp4 = c4;
        if (0 === c4) {
          if (arg0 === 1) {
            React = 3;
            throw value;
          } else if (arg0 === 2) {
            React = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            appEntryKey = undefined;
            tmp = undefined;
            attachments = undefined;
            let closure_3;
            closure_4 = undefined;
            React = undefined;
            sentDestinations = undefined;
            failedDestinations = undefined;
            transitionChannelId = undefined;
            uploadErrorToAlert = undefined;
            closure_10 = undefined;
            if (!ref.current) {
              ref.current = true;
              _undefined(true);
              c3 = 1;
              c4 = 2;
              React = 1;
              let obj4 = { value: Promise.all(first.map(appEntryKey(paths[15]).getOrResolveChannelIdFromDestinationId)), done: false };
              return obj4;
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          closure_129_6(false);
          closure_129_7.current = false;
          throw paths;
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            React = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_6(false);
            closure_129_7.current = false;
            React = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            appEntryKey = value;
            const obj21 = appEntryKey(paths[16]);
            tmp = obj21.pairDestinationsWithChannels(closure_129_3, appEntryKey);
            if (0 === tmp.length) {
              const showInformationToast = appEntryKey(paths[17]).showInformationToast;
              const tmp76 = appEntryKey(paths[17]);
              const intl3 = appEntryKey(paths[13]).intl;
              showInformationToast(intl3.string(appEntryKey(paths[13]).t.wFcUiF));
              c3 = 0;
              closure_129_6(false);
              closure_129_7.current = false;
              React = 3;
              const obj7 = { value: undefined, done: true };
              return obj7;
            } else {
              attachments = closure_129_1.attachments;
              closure_3 = attachments.map((mimeType) => {
                let str = mimeType.mimeType;
                if (str == null) {
                  str = "unknown";
                }
                return str;
              });
              c4 = 3;
              React = 1;
              const obj8 = {
                value: Promise.all(tmp.map((() => {
                            let comment;
                            closure_0 = c3((destination) => {
                              let c5 = 0;
                              let c6 = 0;
                              c4 = 0;
                              const iter = (function*(arg0, value) {
                                let c0;
                                let c1;
                                let obj4;
                                let obj6;
                                if (c6 === 2) {
                                  c6 = 3;
                                  throw new TypeError("Generator functions may not be called on executing generators");
                                } else if (tmp3 === 3) {
                                  if (arg0 === 1) {
                                    throw value;
                                  } else if (arg0 === 2) {
                                    return { value, done: true };
                                  } else {
                                    return { value: "IconComponent", done: null };
                                  }
                                } else {
                                  try {
                                    let tmp;
                                    c6 = 2;
                                    if (0 === c5) {
                                      if (arg0 === 1) {
                                        c6 = 3;
                                        throw value;
                                      } else if (arg0 === 2) {
                                        c6 = 3;
                                        return { value, done: true };
                                      } else {
                                        closure_1 = tmp4;
                                        destination = undefined;
                                        channelId = undefined;
                                        ({ destination: c0, channelId: c1 } = closure_0);
                                        tmp = undefined;
                                        c5 = 1;
                                        c6 = 1;
                                        return { value: "test", done: true };
                                      }
                                    } else if (1 === c5) {
                                      if (arg0 === 1) {
                                        c6 = 3;
                                        throw value;
                                      } else if (arg0 === 2) {
                                        c6 = 3;
                                        return { value, done: true };
                                      } else {
                                        tmp = channel.getChannel(channelId);
                                        if (null == tmp) {
                                          c6 = 3;
                                          return { value: { status: "failed", destination, uploadError: null }, done: true };
                                        } else {
                                          c4 = 1;
                                          c5 = 3;
                                          c6 = 1;
                                          const obj9 = { attachments: tmp, channel: tmp, comment };
                                          const obj10 = { value: obj6.sendShareMessage(obj9), done: false };
                                          obj6 = closure_3_0(paths[17]);
                                          return obj10;
                                        }
                                      }
                                    } else if (2 === c5) {
                                      c4 = 0;
                                      const obj11 = { status: "failed", destination, uploadError: obj4.getShareUploadError(attachment_mimetypes) };
                                      c6 = 3;
                                      obj4 = closure_3_0(paths[16]);
                                      return { value: obj11, done: true };
                                    } else if (arg0 === 1) {
                                      c6 = 3;
                                      throw value;
                                    } else if (arg0 === 2) {
                                      c4 = 0;
                                      c6 = 3;
                                      return { value, done: true };
                                    } else {
                                      c4 = 0;
                                      const obj15 = { guild_id: tmp.guild_id, channel_id: tmp.id, channel_type: tmp.type, num_attachments: tmp.length, attachment_mimetypes };
                                      const obj14 = closure_3_1(paths[18]);
                                      obj14.track(constants.SHARE_MESSAGE_SENT, obj15);
                                      c6 = 3;
                                      return { value: { status: "sent", destination, channelId }, done: true };
                                    }
                                  } catch (tmp23) {
                                    attachment_mimetypes = tmp23;
                                    if (0 === c4) {
                                      c6 = 3;
                                      throw tmp23;
                                    } else {
                                      c5 = 2;
                                    }
                                  }
                                }
                              })();
                              iter.next();
                              return iter;
                            });
                            return function() {
                              return closure_0(...arguments);
                            };
                          })())),
                done: false
              };
              return obj8;
            }
          }
        } else if (3 === tmp4) {
          if (arg0 === 1) {
            React = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_6(false);
            closure_129_7.current = false;
            React = 3;
            let obj9 = { value, done: true };
            return obj9;
          } else {
            closure_4 = value;
            const obj18 = appEntryKey(paths[16]);
            React = obj18.resolveShareSendOutcome(closure_4);
            sentDestinations = React.sentDestinations;
            failedDestinations = React.failedDestinations;
            transitionChannelId = React.transitionChannelId;
            uploadErrorToAlert = React.uploadErrorToAlert;
            if (0 === failedDestinations.length) {
              if (null != transitionChannelId) {
                let obj6 = tmp(paths[19]);
                let obj10 = { channelId: transitionChannelId };
                c4 = 4;
                React = 1;
                let obj11 = { value: obj6.fetchMessages(obj10), done: false };
                return obj11;
              }
            }
            const tmp23 = sentDestinations;
            if (sentDestinations.length > 0) {
              const tmp27 = closure_129_4((arr) => {
                const obj = appEntryKey(onClose[16]);
                return obj.withoutSentDestinations(arr, closure_1_6);
              });
              const tmp29 = closure_129_5((arg0) => arg0 + 1);
            }
            if (null != uploadErrorToAlert) {
              const obj12 = { file: uploadErrorToAlert.file, guildId: uploadErrorToAlert.guildId, analyticsLocations: [], code: uploadErrorToAlert.code, reason: uploadErrorToAlert.reason, appEntryKey: closure_129_0 };
              const obj19 = appEntryKey(paths[23]);
              if (obj19.handleUploadMessageAttachmentsErrors(obj12)) {
                c3 = 0;
                closure_129_6(false);
                closure_129_7.current = false;
                React = 3;
                return { value: "IconComponent", done: null };
              }
            }
            closure_10 = React.lazy(() => closure_1_0(paths[25])(paths[24], paths.paths));
            const tmp37 = appEntryKey(paths[26]);
            const obj13 = { title: intl.string(appEntryKey(paths[13]).t.dA1gbw), content: intl2.formatToPlainString(appEntryKey(paths[13]).t.thm88D, obj14), failedDestinations };
            const openAlert = tmp37.openAlert;
            intl = appEntryKey(paths[13]).intl;
            intl2 = appEntryKey(paths[13]).intl;
            obj14 = { count: failedDestinations.length };
            openAlert("share-failed-alert-modal", closure_1_16(closure_10, obj13));
            c3 = 0;
            closure_129_6(false);
            closure_129_7.current = false;
          }
        } else if (arg0 === 1) {
          React = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          const tmp18 = closure_129_6(false);
          closure_129_7.current = false;
          React = 3;
          let obj15 = { value, done: true };
          return obj15;
        } else {
          const obj16 = appEntryKey(paths[20]);
          obj16.transitionToChannel(transitionChannelId, { navigationReplace: true, openTextInVoiceIfVoiceChannel: true });
          const obj17 = appEntryKey(paths[21]);
          if (obj17.isAndroid()) {
            let obj = tmp(paths[22]);
            obj.launchApp();
          }
          const tmp11 = closure_129_2();
          c3 = 0;
          const tmp14 = closure_129_6(false);
          closure_129_7.current = false;
          React = 3;
          const obj20 = { value: undefined, done: true };
          return obj20;
        }
        React = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp102) {
        paths = tmp102;
        if (0 === c3) {
          React = 3;
          throw tmp102;
        } else {
          c4 = 1;
        }
      }
    }
  }), items1);
  let tmp30 = closure_16;
  const memo = obj.useMemo(() => {
    let tmp4Result;
    if (null != embed) {
      const obj = { attachments: sharedContent.attachments, isRevamp: true };
      const items = [authStore4(ShareAttachmentsDefault, obj), ];
      embed = undefined;
      const tmp10 = ShareEmbedDefault;
      const tmp4 = authStore5;
      const tmp5 = closure_17;
      const tmp6 = authStore4;
      if (embed != null) {
        embed = tmp.embed;
      }
      const obj2 = { children: items };
      const obj3 = { embed, isLoadingEmbed: isLoading, isRevamp: true };
      items[1] = tmp6(tmp10, obj3);
      tmp4Result = tmp4(tmp5, obj2);
    } else {
      tmp4Result = null;
    }
    return tmp4Result;
  }, items2);
  let obj5 = { style: tmp.container, children: items3 };
  const SafeAreaProviderCompat = tmp20(tmp18[29]).SafeAreaProviderCompat;
  let tmp31 = closure_18;
  let tmp32 = c6;
  let obj6 = { title: intl5.string(tmp20(tmp18[13]).t["MR7/kg"]), subtitle: formatToPlainStringResult, subtitleColor: "text-feedback-warning", headerStatusBarHeight: PX_8, onClose: tmp35 };
  let tmp33 = sharedContent(tmp18[30]);
  intl5 = tmp20(tmp18[13]).intl;
  PX_8 = undefined;
  const tmp20Result = tmp20(tmp18[21]);
  if (tmp20Result.isIOS()) {
    PX_8 = tmp26(tmp18[12]).space.PX_8;
  }
  tmp35 = undefined;
  const tmp20Result3 = tmp20(tmp18[31]);
  if (!tmp20Result3.isMetaQuest()) {
    tmp35 = onClose;
  }
  items3 = [tmp30(tmp33, obj6), , ];
  let obj7 = { rowMode: UserRowModes.TOGGLE, initialSelectedDestinations, onSelectedDestinationChange: callback, getRowIsUnavailable: tmp37, insetEnd: 0, disableGradient: true, disableStickySections: true, disableSelection: initialSelectedDestinations.length >= MAX_DESTINATION_COUNT || tmp5, disableLongPress: tmp20Result4.isAndroid() };
  tmp37 = undefined;
  const tmp26Result = tmp26(tmp18[32]);
  if (sharedContent.attachments.length > 0) {
    tmp37 = getAttachmentsRestriction;
  }
  tmp20Result4 = tmp20(tmp18[21]);
  items3[1] = tmp30(tmp26Result, obj7, first1);
  let obj8 = { text: first2, setText: tmp25, preview: memo, sendLabel: stringResult, canSend: tmp39, isSending: tmp16, onSend: callback1, disabled: tmp5, appEntryKey };
  tmp39 = length > 0;
  const tmp26Result2 = tmp26(tmp18[33]);
  if (tmp39) {
    tmp39 = !tmp5;
  }
  let obj9 = { children: tmp31(tmp32, obj5) };
  items3[2] = tmp30(tmp26Result2, obj8);
  return tmp30(SafeAreaProviderCompat, obj9);
};
