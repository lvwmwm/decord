// Module ID: 16120
// Function ID: 124263
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16120 (_isNativeReflectConstruct)
let Fonts;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getUserAvatarSource(arg0, action, guildId) {
  if (action.action !== constants.AUTO_MODERATION_BLOCK_MESSAGE) {
    if (action.action !== constants.AUTO_MODERATION_FLAG_TO_CHANNEL) {
      if (action.action !== constants.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) {
        if (action.action !== constants.AUTO_MODERATION_QUARANTINE_USER) {
          if (null != action.options.integration_type) {
            const value = importDefault(dependencyMap[17]).get(action.options.integration_type);
            if (null != value) {
              const icon = value.icon;
              const obj2 = action(dependencyMap[18]);
              const tmp9 = action(dependencyMap[18]).isThemeDark(arg0) ? icon.darkPNG : icon.lightPNG;
              return action(dependencyMap[16]).makeSource(tmp9);
            }
            const obj = importDefault(dependencyMap[17]);
          }
          let tmp4;
          if (null != guildId) {
            const user = action.user;
            let avatarSource;
            if (null != user) {
              avatarSource = user.getAvatarSource(guildId, false);
            }
            tmp4 = avatarSource;
          }
          return tmp4;
        }
      }
    }
  }
  const obj4 = action(dependencyMap[15]);
  const obj5 = action(dependencyMap[16]);
  return obj4.ensureAvatarSource(obj5.makeSource(action(dependencyMap[15]).getAutomodAvatarURL()));
}
function ApplicationHook(applicationId) {
  let obj = arg1(dependencyMap[19]);
  const getOrFetchApplication = obj.useGetOrFetchApplication(applicationId.applicationId);
  let tmp2 = null;
  if (null != getOrFetchApplication) {
    obj = { hasMaxConnections: 1, isBoostOnlySubscription: 1, children: getOrFetchApplication.name };
    tmp2 = callback3(arg1(dependencyMap[20]).Text, obj);
  }
  return tmp2;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const importAllResult = importAll(dependencyMap[5]);
const View = arg1(dependencyMap[6]).View;
const importDefaultResult = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
({ AuditLogTargetTypes: closure_15, AuditLogActionTypes: closure_16, AuditLogActions: closure_17, Fonts, AuditLogChangeKeys: closure_18 } = arg1(dependencyMap[11]));
const tmp4 = arg1(dependencyMap[11]);
({ jsx: closure_19, jsxs: closure_20 } = arg1(dependencyMap[12]));
let obj = arg1(dependencyMap[13]);
obj = { container: { accessibilityElementsHidden: -197062189, importantForAccessibility: 1912603177, children: 272 }, rowContainer: { "Null": null, "Null": "\u{1F469}\u{1F3FC}\u200D\u{1F9B1}", "Null": true }, titleContainer: { "Bool(false)": null, "Bool(false)": null }, title: { marginHorizontal: 8 } };
obj = { 9223372036854775807: "<string:11497792>", 0: "<string:1107361792>", color: importDefault(dependencyMap[14]).unsafe_rawColors.PRIMARY_400 };
obj.discriminator = obj;
obj.avatar = { flexDirection: "isArray", gap: "CONTROL_RADIO_ICON_SIZE_DEFAULT", flex: "tagInverted" };
const obj1 = { y: "OrientationLockState", ESCAPE: "FIN", y: "ERNhYf", color: importDefault(dependencyMap[14]).unsafe_rawColors.PRIMARY_400 };
obj.timestamp = obj1;
const tmp5 = arg1(dependencyMap[12]);
obj.arrow = { tintColor: importDefault(dependencyMap[14]).colors.INTERACTIVE_TEXT_DEFAULT };
const items = [{ rotate: "90deg" }];
obj.rotate90 = { transform: items };
const obj2 = { tintColor: importDefault(dependencyMap[14]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.changesContainer = { marginTop: importDefault(dependencyMap[14]).space.PX_4, padding: importDefault(dependencyMap[14]).space.PX_8, borderRadius: importDefault(dependencyMap[14]).radii.md, backgroundColor: importDefault(dependencyMap[14]).colors.BACKGROUND_MOD_MUTED };
obj.changeRow = {};
obj.changeNumberText = { fontFamily: Fonts.CODE_BOLD };
const obj4 = { "Null": false, "Null": false, "Bool(false)": false, color: importDefault(dependencyMap[14]).unsafe_rawColors.PRIMARY_400 };
obj.changeItemText = obj4;
const obj5 = { 2122157199: "Array", -2108594079: "fr-NE", 1371431202: "isStaticChannelRoute", borderColor: importDefault(dependencyMap[14]).unsafe_rawColors.TRANSPARENT };
obj.colorHook = obj5;
obj.colorsHook = { fontFamily: Fonts.PRIMARY_MEDIUM };
obj.changeItemContent = {};
obj.changeItemTextContainer = { "Null": "md", "Null": "submitHamReportForFirstDM", "Null": "getChannelIconComponent" };
obj.forumTag = { <string:151424082>: null, <string:1374314758>: "#000000", <string:3429202876>: 0.13 };
obj.imageEmoji = { y: false, isArray: false };
obj.textEmoji = { 9223372036854775807: "<string:1854755072>", 0: "construct" };
let closure_21 = obj.createLegacyClassComponentStyles(obj);
const tmp6 = (PureComponent) => {
  class AuditLog {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, AuditLog);
      items1 = [...items];
      obj = closure_7(AuditLog);
      tmp2 = closure_6;
      if (closure_22()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      AuditLog = tmp2Result;
      tmp2Result.onHeaderClick = () => {
        const props = tmp2Result.props;
        props.onHeaderClick(props.log);
      };
      return tmp2Result;
    }
  }
  const arg1 = AuditLog;
  callback2(AuditLog, PureComponent);
  let obj = {
    key: "renderTitle",
    value() {
      const tmp = callback6(this.context);
      const AuditLog = tmp;
      const log = this.props.log;
      const user = log.user;
      const target = log.target;
      let subtarget = log.options;
      let obj = user(target[21]);
      const changeTitle = obj.getChangeTitle(log);
      if (null == changeTitle) {
        return null;
      } else {
        obj = { Opened: null, marginVertical: null, marginStart: null, marginEnd: null, style: tmp.title };
        const intl = AuditLog(target[22]).intl;
        obj = {
          user,
          target,
          userHook() {
              if (null != user) {
                let obj = {};
                obj = { mode: "username" };
                const items = [log(target[23]).getUserTag(user, obj), ];
                let tmp19 = !user.hasUniqueUsername();
                if (tmp19) {
                  const obj1 = { style: tmp.discriminator, children: `#${closure_2.discriminator}` };
                  tmp19 = callback(tmp(target[24]).LegacyText, obj1);
                }
                items[1] = tmp19;
                obj.children = items;
                return closure_20(tmp(target[20]).Text, obj, "user" + user.id);
              } else if (null != subtarget.integration_type) {
                obj = log(target[17]);
                const value = obj.get(subtarget.integration_type);
                let name;
                if (null != value) {
                  name = value.name;
                }
                if (null == name) {
                  const intl2 = tmp(target[22]).intl;
                  name = intl2.string(tmp(target[22]).t.n+olu7);
                }
                const obj2 = { children: name };
                return callback(tmp(target[20]).Text, obj2, "integration" + subtarget.integration_type);
              } else {
                const intl = tmp(target[22]).intl;
                return intl.string(tmp(target[22]).t.30mdIx);
              }
            },
          targetHook(children) {
              if (log.targetType === constants.USER) {
                if (target instanceof closure_12) {
                  let obj = {};
                  obj = { mode: "username" };
                  const items = [log(target[23]).getUserTag(target, obj), ];
                  let tmp17 = "0" !== target.discriminator;
                  if (tmp17) {
                    const obj1 = { style: tmp.discriminator, children: `#${closure_3.discriminator}` };
                    tmp17 = callback(tmp(target[24]).LegacyText, obj1);
                  }
                  items[1] = tmp17;
                  obj.children = items;
                  let tmp12Result = closure_20(tmp(target[20]).Text, obj, `target${closure_3.id}`);
                  const obj5 = log(target[23]);
                  const tmp12 = closure_20;
                }
                return tmp12Result;
              }
              if (log.targetType === constants.GUILD) {
                if ("object" === typeof target) {
                  obj = tmp(target[25]);
                  if (obj.isGuildRecord(target)) {
                    const obj2 = { children: target.name };
                    tmp12Result = callback(tmp(target[20]).Text, obj2, `target${closure_3.id}`);
                  }
                }
              }
              tmp12Result = callback(tmp(target[20]).Text, { children }, arg1);
            }
        };
        const count = subtarget.count;
        let str = "";
        if (null != count) {
          str = count;
        }
        obj.count = str;
        if (null != subtarget.channel) {
          if ("string" !== typeof subtarget.channel) {
            const obj4 = AuditLog(target[26]);
            let channel = obj4.computeChannelName(subtarget.channel, closure_14, closure_13, true);
          }
          obj.channel = channel;
          obj.channelHook = function channelHook(children) {
            return callback(tmp(target[20]).Text, { children }, arg1);
          };
          subtarget = subtarget.subtarget;
          obj.subtarget = subtarget;
          obj = intl.format(changeTitle, obj);
          obj.children = obj;
          tmp3(AuditLog(target[20]).Text, obj);
        }
        channel = subtarget.channel;
        const tmp3 = closure_19;
      }
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "renderRoleUpdate",
    value(newValue) {
      newValue = newValue.newValue;
      let mapped = null;
      if (Array.isArray(newValue)) {
        mapped = newValue.map((name) => {
          const obj = { hasMaxConnections: "<string:3086024708>", isBoostOnlySubscription: "<string:625475588>", children: name.name };
          return callback2(callback(closure_3[20]).Text, obj, name.id);
        });
      }
      return mapped;
    }
  };
  items[1] = obj;
  obj = {
    key: "renderPermissionUpdate",
    value(newValue) {
      const AuditLog = this;
      newValue = newValue.newValue;
      let mapped = null;
      if (Array.isArray(newValue)) {
        mapped = newValue.map((arg0) => {
          const obj = { hasMaxConnections: "<string:3086024708>", isBoostOnlySubscription: "<string:625475588>", children: callback(closure_3[21]).getStringForPermission(arg0, self.props.log) };
          return callback2(self(closure_3[20]).Text, obj, arg0);
        });
      }
      return mapped;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "renderChangeDetails",
    value(arg0) {
      const AuditLog = this;
      const tmp = callback6(this.context);
      const log = this.props.log;
      if (null == log.changes) {
        return null;
      } else {
        let closure_4 = 0;
        const changes = log.changes;
        const obj = {
          style: tmp.changesContainer,
          children: changes.map((key) => {
              let obj = tmp(log[21]);
              if (obj.shouldNotRenderChangeDetail(log, key)) {
                return null;
              } else {
                if (log.action === constants3.CHANNEL_UPDATE) {
                  if (key.key === constants4.TYPE) {
                    obj = {};
                    let oldValue = key.oldValue;
                    if (null == oldValue) {
                      let obj10 = self(log[27]);
                      obj = { type: key.oldValue };
                      oldValue = obj10.channelTypeString(obj);
                    }
                    obj.oldValue = oldValue;
                    let newValue2 = key.newValue;
                    if (null == newValue2) {
                      let obj12 = self(log[27]);
                      const obj1 = { type: key.newValue };
                      newValue2 = obj12.channelTypeString(obj1);
                    }
                    obj.newValue = newValue2;
                    obj.transformedValues = true;
                    let obj15 = obj;
                  }
                  const oldValue2 = obj15.oldValue;
                  const self = oldValue2;
                  let newValue = obj15.newValue;
                  key = newValue;
                  if (log.action !== constants3.MEMBER_ROLE_UPDATE) {
                    if (log.action === constants3.INVITE_CREATE) {
                      let tmp35Result;
                      if (null != key[key.key]) {
                        tmp35Result = tmp35(key);
                      }
                      if (null == tmp35Result) {
                        return null;
                      } else {
                        const intl = self(log[22]).intl;
                        const obj2 = { oldValue: oldValue2, newValue };
                        const _Array = Array;
                        let num5 = 0;
                        if (Array.isArray(newValue)) {
                          num5 = newValue.length;
                        }
                        obj2.count = num5;
                        let subtarget = log.options.subtarget;
                        if (null == subtarget) {
                          subtarget = key.subtarget;
                        }
                        let str2 = "";
                        if (null != subtarget) {
                          str2 = subtarget;
                        }
                        obj2.subtarget = str2;
                        obj2.newColorHook = function newColorHook() {
                          return null;
                        };
                        obj2.newColorsHook = function newColorsHook(arg0, arg1) {
                          const obj = { style: closure_2.colorsHook };
                          const items = [, , ];
                          ({ primary_color: arr[0], secondary_color: arr[1], tertiary_color: arr[2] } = newValue);
                          const found = items.filter(oldValue2(closure_3[29]).isNotNullish);
                          obj.children = found.map((color) => {
                            let obj = {};
                            obj = { variant: "text-sm/bold" };
                            let str = "";
                            if (arg1 > 0) {
                              str = ", ";
                            }
                            const obj3 = callback(closure_3[30]);
                            const tmp = closure_20;
                            const tmp2 = callback2;
                            obj.children = "" + str + callback(closure_3[30]).int2hex(color).toUpperCase() + " ";
                            const items = [tmp2(callback(closure_3[20]).Text, obj), ];
                            obj = {};
                            const items1 = [colorHook.colorHook, ];
                            const obj1 = {};
                            const str2 = callback(closure_3[30]).int2hex(color);
                            obj1.backgroundColor = callback(closure_3[30]).int2hex(color);
                            items1[1] = obj1;
                            obj.style = items1;
                            items[1] = callback2(closure_10, obj);
                            obj.children = items;
                            return tmp(React.Fragment, obj, arg1);
                          });
                          return callback(closure_10, obj, arg1);
                        };
                        obj2.oldColorHook = function oldColorHook() {
                          return null;
                        };
                        obj2.oldTagHook = function oldTagHook(arg0, arg1) {
                          return callback(oldValue2(closure_3[31]).AppliedForumTagPill, { tag: oldValue2, containerStyle: closure_2.forumTag, disableEndMargin: true }, arg1);
                        };
                        obj2.newTagHook = function newTagHook(arg0, arg1) {
                          return callback(oldValue2(closure_3[31]).AppliedForumTagPill, { tag: newValue, containerStyle: closure_2.forumTag, disableEndMargin: true }, arg1);
                        };
                        obj2.oldEmojiHook = function oldEmojiHook(arg0, arg1) {
                          let emojiURL;
                          if (null != oldValue2) {
                            let obj = newValue(closure_3[16]);
                            obj = { id: oldValue2 };
                            emojiURL = obj.getEmojiURL(obj);
                          }
                          obj = { src: emojiURL, name: oldValue2 };
                          ({ textEmoji: obj3.textEmojiStyle, imageEmoji: obj3.fastImageStyle } = closure_2);
                          return callback(newValue(closure_3[32]), obj, arg1);
                        };
                        obj2.newEmojiHook = function newEmojiHook(arg0, arg1) {
                          let emojiURL;
                          if (null != newValue) {
                            let obj = newValue(closure_3[16]);
                            obj = { id: newValue };
                            emojiURL = obj.getEmojiURL(obj);
                          }
                          obj = { src: emojiURL, name: newValue };
                          ({ textEmoji: obj3.textEmojiStyle, imageEmoji: obj3.fastImageStyle } = closure_2);
                          return callback(newValue(closure_3[32]), obj, arg1);
                        };
                        obj2.applicationHook = function applicationHook(arg0, arg1) {
                          const obj = {};
                          let application_id;
                          if (null != oldValue2) {
                            application_id = oldValue2.application_id;
                          }
                          if (null == application_id) {
                            let application_id1;
                            if (null != newValue) {
                              application_id1 = newValue.application_id;
                            }
                            application_id = application_id1;
                          }
                          obj.applicationId = application_id;
                          return closure_19(closure_24, obj, arg1);
                        };
                        const formatResult = intl.format(tmp35Result, obj2);
                        if (null == formatResult) {
                          return null;
                        } else {
                          const actionType = log.actionType;
                          if (constants2.CREATE === actionType) {
                            let RED_400 = key(log[14]).unsafe_rawColors.GREEN_360;
                          } else if (constants2.UPDATE === actionType) {
                            RED_400 = key(log[14]).unsafe_rawColors.YELLOW_300;
                          } else if (constants2.DELETE === actionType) {
                            RED_400 = key(log[14]).unsafe_rawColors.RED_400;
                          }
                          closure_4 = closure_4 + 1;
                          let obj3 = { style: tmp.changeRow };
                          const obj4 = { variant: "text-sm/bold" };
                          const items = [tmp.changeNumberText, ];
                          let obj5 = { color: RED_400 };
                          items[1] = obj5;
                          obj4.style = items;
                          let str4 = null;
                          if (closure_4 < 10) {
                            str4 = "0";
                          }
                          const items1 = [str4, closure_4, " \u2014"];
                          obj4.children = items1;
                          const items2 = [closure_20(self(log[20]).Text, obj4), ];
                          const obj6 = { style: tmp.changeItemContent };
                          let obj7 = { style: tmp.changeItemTextContainer };
                          const obj8 = { variant: "text-sm/normal", style: tmp.changeItemTextContainer, children: formatResult };
                          const items3 = [callback(self(log[20]).Text, obj8), ];
                          let tmp62 = null;
                          if (null != newValue) {
                            tmp62 = null;
                            if (true !== tmp21) {
                              const obj9 = {};
                              const items4 = [tmp.colorHook, ];
                              obj10 = { backgroundColor: newValue };
                              items4[1] = obj10;
                              obj9.style = items4;
                              tmp62 = callback(closure_10, obj9);
                            }
                          }
                          items3[1] = tmp62;
                          obj7.children = items3;
                          const items5 = [closure_20(closure_10, obj7), ];
                          let tmp66 = null;
                          if (null != result) {
                            tmp66 = result;
                          }
                          items5[1] = tmp66;
                          obj6.children = items5;
                          items2[1] = closure_20(closure_10, obj6);
                          obj3.children = items2;
                          return closure_20(closure_10, obj3, arg1);
                        }
                      }
                    }
                    if (log.targetType !== constants.ROLE) {
                      if (log.action !== constants3.CHANNEL_OVERWRITE_CREATE) {
                        let result = null;
                      }
                    }
                    result = self.renderPermissionUpdate(key);
                  }
                  result = self.renderRoleUpdate(key);
                }
                if (log.action === constants3.MEMBER_UPDATE) {
                  if (key.key === constants4.COMMUNICATION_DISABLED_UNTIL) {
                    obj7 = key(log[28])(key.newValue);
                    const obj11 = { oldValue: key.oldValue };
                    if (obj7.isValid()) {
                      newValue = obj7.calendar();
                    } else {
                      newValue = key.newValue;
                    }
                    obj11.newValue = newValue;
                    obj11.transformedValues = true;
                    obj15 = obj11;
                  }
                }
                if (log.action === constants3.GUILD_UPDATE) {
                  if (key.key === constants4.OWNER_ID) {
                    obj12 = {};
                    obj3 = key(log[23]);
                    const obj13 = { mode: "username" };
                    obj12.oldValue = obj3.getUserTag(key.oldValue, obj13);
                    obj5 = key(log[23]);
                    const obj14 = { mode: "username" };
                    obj12.newValue = obj5.getUserTag(key.newValue, obj14);
                    obj12.transformedValues = true;
                    obj15 = obj12;
                  }
                }
                obj15 = {};
                ({ oldValue: obj2.oldValue, newValue: obj2.newValue } = key);
                obj15.transformedValues = false;
              }
            })
        };
        return callback4(closure_10, obj);
      }
    }
  };
  items[4] = {
    key: "renderChangeSummary",
    value() {
      const self = this;
      let renderChangeDetailsResult = null;
      if (this.props.expanded) {
        renderChangeDetailsResult = self.renderChangeDetails(callback(closure_3[21]).getChangeStrings(tmp));
        const obj = callback(closure_3[21]);
      }
      return renderChangeDetailsResult;
    }
  };
  items[5] = {
    key: "render",
    value() {
      let containerStyle;
      let expanded;
      let guildId;
      let log;
      let theme;
      const self = this;
      const tmp = callback6(this.context);
      const props = this.props;
      ({ log, expanded, channel: closure_0 } = props);
      const user = log.user;
      ({ guildId, containerStyle, theme } = props);
      let obj = callback(closure_3[21]);
      const checkChangesToRenderResult = obj.checkChangesToRender(log);
      const timestampStart = log.timestampStart;
      const calendarResult = timestampStart.calendar();
      const timestampEnd = log.timestampEnd;
      const calendarResult1 = timestampEnd.calendar();
      if (calendarResult === calendarResult1) {
        obj = { style: tmp.timestamp, children: calendarResult };
        let tmp8 = callback4(AuditLog(closure_3[24]).LegacyText, obj);
      } else {
        obj = { style: tmp.timestamp };
        const items = [calendarResult, "\u2014", calendarResult1];
        obj.children = items;
        tmp8 = callback5(AuditLog(closure_3[24]).LegacyText, obj);
      }
      let onHeaderClick;
      if (checkChangesToRenderResult) {
        onHeaderClick = self.onHeaderClick;
      }
      let rotate90 = null;
      if (expanded) {
        rotate90 = tmp.rotate90;
      }
      const obj1 = { accessible: false, style: items1 };
      const items1 = [tmp.container, containerStyle];
      let str2 = "secondary";
      if (expanded) {
        str2 = "primary";
      }
      obj1.variant = str2;
      let str3 = "none";
      if (expanded) {
        str3 = "strong";
      }
      obj1.border = str3;
      obj1.onPress = onHeaderClick;
      const obj2 = { style: tmp.rowContainer };
      const items2 = [callback4(user(closure_3[34]), { action: log.action }), , , ];
      const obj4 = { accessibilityRole: "button" };
      const intl = AuditLog(closure_3[22]).intl;
      obj4.accessibilityLabel = intl.string(AuditLog(closure_3[22]).t.iXAna6);
      let username;
      if (null != user) {
        username = user.username;
      }
      obj4.accessibilityHint = username;
      obj4.onPress = function onPress() {
        let obj = user(closure_3[36]);
        obj.hideActionSheet();
        if (null != user) {
          obj = { userId: user.id, channelId: id.id };
          user(closure_3[37])(obj);
        }
      };
      const obj5 = { style: tmp.avatar, source: callback8(theme, log, guildId), size: AuditLog(closure_3[24]).AvatarSizes.SMALL };
      obj4.children = callback4(AuditLog(closure_3[24]).Avatar, obj5);
      items2[1] = callback4(AuditLog(closure_3[35]).PressableOpacity, obj4);
      const obj6 = { accessibilityRole: "button", accessibilityState: obj7, onPress: onHeaderClick, style: tmp.titleContainer, disabled: !checkChangesToRenderResult };
      const items3 = [self.renderTitle(), tmp8];
      obj6.children = items3;
      items2[2] = callback5(AuditLog(closure_3[35]).PressableOpacity, obj6);
      let tmp19 = null;
      if (checkChangesToRenderResult) {
        const obj8 = {};
        const items4 = [tmp.arrow, rotate90];
        obj8.style = items4;
        obj8.size = AuditLog(closure_3[24]).Icon.Sizes.CUSTOM;
        obj8.source = user(closure_3[38]);
        tmp19 = callback4(AuditLog(closure_3[24]).Icon, obj8);
      }
      items2[3] = tmp19;
      obj2.children = items2;
      const items5 = [callback5(closure_10, obj2), ];
      let renderChangeSummaryResult = null;
      if (expanded) {
        renderChangeSummaryResult = self.renderChangeSummary();
      }
      items5[1] = renderChangeSummaryResult;
      obj1.children = items5;
      return callback5(AuditLog(closure_3[33]).Card, obj1);
    }
  };
  return callback(AuditLog, items);
}(importAllResult.PureComponent);
tmp6.contextType = arg1(dependencyMap[39]).ThemeContext;
const obj3 = { marginTop: importDefault(dependencyMap[14]).space.PX_4, padding: importDefault(dependencyMap[14]).space.PX_8, borderRadius: importDefault(dependencyMap[14]).radii.md, backgroundColor: importDefault(dependencyMap[14]).colors.BACKGROUND_MOD_MUTED };
const items1 = [importDefaultResult];
const importDefaultResult1 = importDefault(dependencyMap[40]);
const tmp7 = importDefault(dependencyMap[40]).connectStores(items1, () => ({ theme: importDefaultResult.theme }))(tmp6);
const result = arg1(dependencyMap[41]).fileFinishedImporting("modules/guild_settings/audit_log/native/AuditLog.tsx");

export default tmp7;
