// Module ID: 12548
// Function ID: 12549
// Name: NotificationSettingsChannel
// Dependencies: [19, 17, 5973, 21, 5091, 587, 558, 576, 10413, 1126, 5418, 1503, 6205, 6805, 6800, 504, 12549, 12550, 12554, 12561, 12566, 5376, 8563, 2]

// Module 12548 (NotificationSettingsChannel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import useChannelNameDefault from "useChannelName" /* 5418 */;
import NavigatorHeader from "NavigatorHeader" /* 6205 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6800 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6805 */;
import notficationSettingsChannelFlagUtils from "notficationSettingsChannelFlagUtils" /* 10413 */;
import react_mod from "react" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5973 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, navigation, obj1, setOptionsResult, setOptionsResult1;

let metroImportDefault;
let metroRequire;
let obj2;
let react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { screenContainer: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 16 };
let closure_8 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function NotificationSettingsChannel(channel) {
  let Button;
  let closure_2;
  let first;
  let intl2;
  let obj11;
  _require = channel;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(39);
  let obj2 = require("notficationSettingsChannelFlagUtils");
  const channelPresetInheritance = obj2.useChannelPresetInheritance(channel.channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.h850Ss);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  const tmp7 = first(5418)(channel.channel);
  dependencyMap = tmp7;
  const tmpResult = tmp(1503);
  navigation = tmpResult.useNavigation();
  const tmp9 = closure_8();
  if (cResult[1] === navigation) {
    if (cResult[2] === channel.inGuildContext) {
      let tmp10;
      if (cResult[3] === tmp7) {
        tmp10 = cResult[4];
      }
      const layoutEffect = navigation.useLayoutEffect(tmp10);
      if (cResult[5] === channel.channel.guild_id) {
        let tmp13;
        if (cResult[6] === channel.channel.id) {
          tmp13 = cResult[7];
        }
        if (cResult[8] === channel.channel.guild_id) {
          let tmp14;
          let tmp15;
          if (cResult[9] === channel.channel.id) {
            tmp14 = cResult[10];
          }
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [UserGuildSettingsStore];
            cResult[11] = items;
            class M {
              constructor() {
                const obj = { config: UserGuildSettingsStore.getChannelMuteConfig(channel.channel.guild_id, channel.channel.id), muted: UserGuildSettingsStore.isChannelMuted(channel.channel.guild_id, channel.channel.id) };
                return obj;
              }
            }
          } else {
            tmp15 = cResult[11];
          }
          if (cResult[12] === channel.channel.guild_id) {
            let tmp17;
            if (cResult[13] === channel.channel.id) {
              tmp17 = cResult[14];
            }
            const tmpResult2 = tmp(504);
            const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp15, tmp17);
            if (cResult[15] === stateFromStoresObject.config) {
              if (cResult[16] === stateFromStoresObject.muted) {
                let tmp19;
                let tmp20;
                let tmp25;
                let tmp27;
                let tmp26;
                if (cResult[17] === tmp14) {
                  tmp19 = cResult[18];
                }
                if (cResult[19] !== channel.channel) {
                  let obj3 = { channel: channel.channel };
                  const tmp22 = closure_6(tmp(12550).NotificationSettingsChannelPresets, obj3);
                  class M {
                    constructor() {
                      const obj = { config: UserGuildSettingsStore.getChannelMuteConfig(channel.channel.guild_id, channel.channel.id), muted: UserGuildSettingsStore.isChannelMuted(channel.channel.guild_id, channel.channel.id) };
                      return obj;
                    }
                  }
                  cResult[20] = tmp22;
                  tmp20 = tmp22;
                } else {
                  tmp20 = cResult[20];
                }
                const _Symbol2 = Symbol;
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj4 = { marginTop: 24 };
                  cResult[21] = obj4;
                }
                class M {
                  constructor() {
                    const obj = { config: UserGuildSettingsStore.getChannelMuteConfig(channel.channel.guild_id, channel.channel.id), muted: UserGuildSettingsStore.isChannelMuted(channel.channel.guild_id, channel.channel.id) };
                    return obj;
                  }
                }
                const _Symbol3 = Symbol;
                if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj5 = { marginTop: 24 };
                  cResult[24] = obj5;
                  tmp25 = obj5;
                } else {
                  tmp25 = cResult[24];
                }
                if (cResult[25] !== channel.channel) {
                  const obj6 = { style: tmp25, channel: channel.channel };
                  const tmp29 = closure_6(tmp(12561).NotificationSettingsChannelMessageUnread, obj6);
                  const tmp28 = closure_6;
                  class M {
                    constructor() {
                      const obj = { config: UserGuildSettingsStore.getChannelMuteConfig(channel.channel.guild_id, channel.channel.id), muted: UserGuildSettingsStore.isChannelMuted(channel.channel.guild_id, channel.channel.id) };
                      return obj;
                    }
                  }
                  let isForumLikeChannelResult = obj9.isForumLikeChannel();
                  if (isForumLikeChannelResult) {
                    const obj7 = { style: { marginTop: 24 }, channel: channel.channel };
                    isForumLikeChannelResult = tmp28(tmp(12566).NotificationSettingsChannelPost, obj7);
                  }
                  cResult[25] = channel.channel;
                  cResult[26] = tmp29;
                  cResult[27] = isForumLikeChannelResult;
                  tmp27 = isForumLikeChannelResult;
                  tmp26 = tmp29;
                } else {
                  tmp26 = cResult[26];
                  tmp27 = cResult[27];
                }
                if (cResult[28] === channelPresetInheritance.inherited) {
                  let tmp31;
                  if (cResult[29] === tmp13) {
                    tmp31 = cResult[30];
                  }
                  if (cResult[31] === tmp9.screenContainer) {
                    if (cResult[32] === tmp26) {
                      if (cResult[33] === tmp27) {
                        if (cResult[34] === tmp31) {
                          if (cResult[35] === tmp19) {
                            if (cResult[36] === tmp20) {
                              let tmp35;
                              if (cResult[37] === tmp24) {
                                tmp35 = cResult[38];
                              }
                              return tmp35;
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj8 = { style: tmp9.screenContainer, children: tmp37 };
                  class M {
                    constructor() {
                      const obj = { config: UserGuildSettingsStore.getChannelMuteConfig(channel.channel.guild_id, channel.channel.id), muted: UserGuildSettingsStore.isChannelMuted(channel.channel.guild_id, channel.channel.id) };
                      return obj;
                    }
                  }
                  tmp37[0] = tmp19;
                  tmp37[1] = tmp20;
                  tmp37[2] = tmp24;
                  tmp37[3] = tmp26;
                  tmp37[4] = tmp27;
                  tmp37[5] = tmp31;
                  const tmp38 = closure_7(tmp(8563).Form, obj8);
                  cResult[31] = tmp9.screenContainer;
                  cResult[32] = tmp26;
                  cResult[33] = tmp27;
                  cResult[34] = tmp31;
                  cResult[35] = tmp19;
                  class S {
                    constructor() {
                      tmp = closure_3;
                      obj = {
                        title: "" + closure_1 + " (" + closure_2 + ")",
                        headerTitle() {
                                              const obj = { title, subtitle };
                                              return closure_2_6(channel(subtitle[12]).NavigatorHeader, obj);
                                            }
                      };
                      setOptionsResult = closure_3.setOptions(obj);
                      if (closure_0.inGuildContext) {
                        obj1 = { headerLeft: null };
                        tmp3 = closure_0;
                        tmp4 = closure_2;
                        setOptions = tmp.setOptions;
                        obj3 = closure_0(closure_2[12]);
                        obj1.headerLeft = obj3.getHeaderBackButton(() => navigation.popToTop());
                        setOptionsResult1 = setOptions(obj1);
                      }
                      return;
                    }
                  }
                  cResult[37] = tmp24;
                  cResult[38] = tmp38;
                  tmp35 = tmp38;
                }
                let tmp32 = !channelPresetInheritance.inherited;
                if (tmp32) {
                  const obj10 = { style: { marginTop: 24 }, children: closure_6(Button, obj11) };
                  obj11 = { variant: "secondary", onPress: null, text: intl2.string(tmp(1126).t["3PBFN6"]) };
                  class M {
                    constructor() {
                      const obj = { config: UserGuildSettingsStore.getChannelMuteConfig(channel.channel.guild_id, channel.channel.id), muted: UserGuildSettingsStore.isChannelMuted(channel.channel.guild_id, channel.channel.id) };
                      return obj;
                    }
                  }
                  Button = tmp(5376).Button;
                  intl2 = tmp(1126).intl;
                  tmp32 = closure_6(View, obj10);
                }
                cResult[28] = channelPresetInheritance.inherited;
                cResult[29] = tmp13;
                cResult[30] = tmp32;
                tmp31 = tmp32;
              }
            }
            const muted = stateFromStoresObject.muted;
            class M {
              constructor() {
                const obj = { config: UserGuildSettingsStore.getChannelMuteConfig(channel.channel.guild_id, channel.channel.id), muted: UserGuildSettingsStore.isChannelMuted(channel.channel.guild_id, channel.channel.id) };
                return obj;
              }
            }
            cResult[15] = stateFromStoresObject.config;
            cResult[16] = stateFromStoresObject.muted;
            cResult[17] = tmp14;
            cResult[18] = muted;
            tmp19 = muted;
          }
          class M {
            constructor() {
              const obj = { config: UserGuildSettingsStore.getChannelMuteConfig(channel.channel.guild_id, channel.channel.id), muted: UserGuildSettingsStore.isChannelMuted(channel.channel.guild_id, channel.channel.id) };
              return obj;
            }
          }
          cResult[12] = channel.channel.guild_id;
          cResult[13] = channel.channel.id;
          cResult[14] = M;
          tmp17 = M;
        }
        const fn2 = function v() {
          const obj = NotificationSettingsModalActionCreatorsDefault;
          const obj2 = { guildId: channel.channel.guild_id, channelId: channel.channel.id, settings: { muted: false }, label: NotificationSettingsUtils.NotificationLabels.Unmuted };
          const result = obj.updateChannelOverrideSettings(obj2);
        };
        cResult[8] = channel.channel.guild_id;
        cResult[9] = channel.channel.id;
        cResult[10] = fn2;
        tmp14 = fn2;
      }
      const fn = function _() {
        const obj = notficationSettingsChannelFlagUtils;
        return obj.updateChannelToGuildDefault(channel.channel.guild_id, channel.channel.id);
      };
      cResult[5] = channel.channel.guild_id;
      cResult[6] = channel.channel.id;
      cResult[7] = fn;
      tmp13 = fn;
    }
  }
  class S {
    constructor() {
      tmp = closure_3;
      obj = {
        title: "" + closure_1 + " (" + closure_2 + ")",
        headerTitle() {
              const obj = { title, subtitle };
              return closure_2_6(channel(subtitle[12]).NavigatorHeader, obj);
            }
      };
      setOptionsResult = closure_3.setOptions(obj);
      if (closure_0.inGuildContext) {
        obj1 = { headerLeft: null };
        tmp3 = closure_0;
        tmp4 = closure_2;
        setOptions = tmp.setOptions;
        obj3 = closure_0(closure_2[12]);
        obj1.headerLeft = obj3.getHeaderBackButton(() => navigation.popToTop());
        setOptionsResult1 = setOptions(obj1);
      }
      return;
    }
  }
  cResult[1] = navigation;
  cResult[2] = channel.inGuildContext;
  cResult[3] = tmp7;
  cResult[4] = S;
  tmp10 = S;
}) : (function NotificationSettingsChannel(channel) {
  let Button;
  let closure_1;
  let closure_2;
  let intl2;
  let intl3;
  let items3;
  let obj11;
  let options;
  let tmpResult;
  _require = channel;
  let tmp = _require;
  let obj = require("notficationSettingsChannelFlagUtils");
  const channelPresetInheritance = obj.useChannelPresetInheritance(channel.channel);
  const intl = require("intl").intl;
  importDefault = intl.string(require("intl").t.h850Ss);
  dependencyMap = useChannelNameDefault(channel.channel);
  let obj2 = require("useNavigation");
  react = obj2.useNavigation();
  const tmp4 = closure_8();
  const layoutEffect = react.useLayoutEffect(() => {
    let obj3;
    let obj = {
      title: "" + title + " (" + subtitle + ")",
      headerTitle() {
        const obj = { title, subtitle };
        return closure_2_6(channel(subtitle[12]).NavigatorHeader, obj);
      }
    };
    options.setOptions(obj);
    const tmp = options;
    if (channel.inGuildContext) {
      const setOptions = tmp.setOptions;
      const obj2 = { headerLeft: obj3.getHeaderBackButton(() => options.popToTop()) };
      obj3 = NavigatorHeader;
      setOptions(obj2);
    }
  });
  const items = [channel.channel];
  const items1 = [channel.channel];
  const callback = react.useCallback(() => {
    const obj = notficationSettingsChannelFlagUtils;
    return obj.updateChannelToGuildDefault(channel.channel.guild_id, channel.channel.id);
  }, items);
  const callback1 = react.useCallback(() => {
    const obj = NotificationSettingsModalActionCreatorsDefault;
    const obj2 = { guildId: channel.channel.guild_id, channelId: channel.channel.id, settings: { muted: false }, label: NotificationSettingsUtils.NotificationLabels.Unmuted };
    const result = obj.updateChannelOverrideSettings(obj2);
  }, items1);
  let obj3 = require("get initialized");
  const items2 = [UserGuildSettingsStore];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items2, () => {
    const obj = { config: UserGuildSettingsStore.getChannelMuteConfig(channel.channel.guild_id, channel.channel.id), muted: UserGuildSettingsStore.isChannelMuted(channel.channel.guild_id, channel.channel.id) };
    return obj;
  });
  let muted = stateFromStoresObject.muted;
  const obj4 = { style: tmp4.screenContainer, children: items3 };
  const Form = require("Form").Form;
  const tmp9 = closure_7;
  if (muted) {
    const obj5 = { style: { marginBottom: 16 }, title: intl2.string(tmp(1126).t["6MCxAy"]), subtitle: tmpResult.getMuteBannerSubtitleFromConfig(stateFromStoresObject.config), onPressUnmute: callback1 };
    const NotificationSettingsMuteBanner = tmp(12549).NotificationSettingsMuteBanner;
    intl2 = tmp(1126).intl;
    tmpResult = tmp(12549);
    muted = closure_6(NotificationSettingsMuteBanner, obj5);
  }
  items3 = [muted, , , , , ];
  const obj6 = { channel: channel.channel };
  items3[1] = closure_6(tmp(12550).NotificationSettingsChannelPresets, obj6);
  const obj7 = { style: { marginTop: 24 }, channel: channel.channel };
  items3[2] = closure_6(tmp(12554).NotificationSettingsChannelMessageNotification, obj7);
  const obj8 = { style: { marginTop: 24 }, channel: channel.channel };
  items3[3] = closure_6(tmp(12561).NotificationSettingsChannelMessageUnread, obj8);
  channel = channel.channel;
  let isForumLikeChannelResult = channel.isForumLikeChannel();
  if (isForumLikeChannelResult) {
    const obj9 = { style: { marginTop: 24 }, channel: channel.channel };
    isForumLikeChannelResult = tmp11(tmp(12566).NotificationSettingsChannelPost, obj9);
  }
  items3[4] = isForumLikeChannelResult;
  let tmp11Result = !channelPresetInheritance.inherited;
  if (tmp11Result) {
    const obj10 = { style: { marginTop: 24 }, children: closure_6(Button, obj11) };
    obj11 = { variant: "secondary", onPress: callback, text: intl3.string(tmp(1126).t["3PBFN6"]) };
    Button = tmp(5376).Button;
    intl3 = tmp(1126).intl;
    tmp11Result = tmp11(View, obj10);
  }
  items3[5] = tmp11Result;
  return tmp9(Form, obj4);
});
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsChannel.tsx");

export default tmp3;
