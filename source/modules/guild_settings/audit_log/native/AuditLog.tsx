// Module ID: 16292
// Function ID: 126802
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 1278, 1857, 3767, 1849, 653, 33, 4130, 689, 1395, 1392, 4814, 3976, 5468, 4126, 16275, 1212, 3969, 1273, 1387, 4320, 4312, 3712, 1327, 665, 9680, 5151, 5167, 16284, 4660, 4098, 8537, 13625, 3842, 566, 2]

// Module 16292 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ensureAvatarSource from "ensureAvatarSource";
import getPlatformUserUrl from "getPlatformUserUrl";
import AccessibilityAnnouncer from "AccessibilityAnnouncer";
import importAllResult from "AppliedForumTag";
import { View } from "_createForOfIteratorHelperLoose";
import importDefaultResult from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "getCardBackgroundToken";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult1 from "initialize";

let Fonts;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
const require = arg1;
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
            const value = importDefault(4814).get(action.options.integration_type);
            if (null != value) {
              const icon = value.icon;
              const obj2 = require(3976) /* AccessibilityAnnouncer */;
              const tmp9 = require(3976) /* AccessibilityAnnouncer */.isThemeDark(arg0) ? icon.darkPNG : icon.lightPNG;
              return require(1392) /* getAvatarURL */.makeSource(tmp9);
            }
            const obj = importDefault(4814);
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
  const obj4 = require(1395) /* ensureAvatarSource */;
  const obj5 = require(1392) /* getAvatarURL */;
  return obj4.ensureAvatarSource(obj5.makeSource(require(1395) /* ensureAvatarSource */.getAutomodAvatarURL()));
}
function ApplicationHook(applicationId) {
  let obj = require(5468) /* useGetOrFetchApplications */;
  const getOrFetchApplication = obj.useGetOrFetchApplication(applicationId.applicationId);
  let tmp2 = null;
  if (null != getOrFetchApplication) {
    obj = { variant: "text-md/normal", color: "text-default", children: getOrFetchApplication.name };
    tmp2 = callback3(require(4126) /* Text */.Text, obj);
  }
  return tmp2;
}
({ AuditLogTargetTypes: closure_15, AuditLogActionTypes: closure_16, AuditLogActions: closure_17, Fonts, AuditLogChangeKeys: closure_18 } = ME);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { marginHorizontal: 8, marginVertical: 4, borderRadius: 3 }, rowContainer: { flex: 1, flexDirection: "row", alignItems: "center" }, titleContainer: { marginRight: 24, flex: 1 }, title: { marginHorizontal: 8 } };
_createForOfIteratorHelperLoose = { fontSize: 12, lineHeight: 30, color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_400 };
_createForOfIteratorHelperLoose.discriminator = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.avatar = { marginLeft: 10, height: 32, width: 32 };
let obj1 = { fontSize: 12, marginHorizontal: 8, marginTop: 8, color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_400 };
_createForOfIteratorHelperLoose.timestamp = obj1;
let obj2 = { height: 13, width: 8, marginRight: 8, tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.arrow = obj2;
let items = [{ rotate: "90deg" }];
_createForOfIteratorHelperLoose.rotate90 = { transform: items };
_createForOfIteratorHelperLoose.changesContainer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4, padding: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
_createForOfIteratorHelperLoose.changeRow = { flexDirection: "row", flex: 1, alignItems: "flex-start" };
let obj4 = { marginRight: 10, fontFamily: Fonts.CODE_BOLD, lineHeight: 24 };
_createForOfIteratorHelperLoose.changeNumberText = obj4;
let obj5 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_400, alignItems: "baseline", fontSize: 14 };
_createForOfIteratorHelperLoose.changeItemText = obj5;
let obj6 = { height: 10, width: 10, borderRadius: 5, borderColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.TRANSPARENT };
_createForOfIteratorHelperLoose.colorHook = obj6;
let obj7 = { display: "flex", flexDirection: "row", fontFamily: Fonts.PRIMARY_MEDIUM, justifyContent: "center", alignItems: "center", marginTop: -2 };
_createForOfIteratorHelperLoose.colorsHook = obj7;
_createForOfIteratorHelperLoose.changeItemContent = { flex: 1, alignItems: "flex-start" };
_createForOfIteratorHelperLoose.changeItemTextContainer = { alignItems: "center", flexDirection: "row", lineHeight: 24 };
_createForOfIteratorHelperLoose.forumTag = { height: "auto", paddingVertical: 0, paddingHorizontal: 4 };
_createForOfIteratorHelperLoose.imageEmoji = { height: 14, width: 14 };
_createForOfIteratorHelperLoose.textEmoji = { fontSize: 14, lineHeight: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
const tmp6 = ((PureComponent) => {
  class AuditLog {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_4(this, apply);
      items1 = [...items];
      obj = outer1_7(apply);
      tmp2 = outer1_6;
      if (outer1_22()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_7;
        constructResult = Reflect.construct(obj, items1, outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.onHeaderClick = () => {
        const props = tmp2Result.props;
        props.onHeaderClick(props.log);
      };
      return tmp2Result;
    }
  }
  callback2(AuditLog, PureComponent);
  let obj = {
    key: "renderTitle",
    value() {
      const tmp = outer1_21(this.context);
      const AuditLog = tmp;
      const log = this.props.log;
      const user = log.user;
      const target = log.target;
      let subtarget = log.options;
      let obj = outer1_2(outer1_3[21]);
      const changeTitle = obj.getChangeTitle(log);
      if (null == changeTitle) {
        return null;
      } else {
        obj = { style: tmp.title, accessibilityRole: "header", variant: "text-md/medium", color: "mobile-text-heading-primary" };
        let intl = AuditLog(outer1_3[22]).intl;
        obj = {
          user,
          target,
          userHook() {
              if (null != user) {
                let obj = { variant: "text-md/medium", color: "text-default" };
                obj = { mode: "username" };
                const items = [outer2_1(outer2_3[23]).getUserTag(user, obj), ];
                let tmp19 = !user.hasUniqueUsername();
                if (tmp19) {
                  const obj1 = { style: tmp.discriminator, children: `#${user.discriminator}` };
                  tmp19 = outer2_19(AuditLog(outer2_3[24]).LegacyText, obj1);
                }
                items[1] = tmp19;
                obj.children = items;
                return outer2_20(AuditLog(outer2_3[20]).Text, obj, "user" + user.id);
              } else if (null != subtarget.integration_type) {
                obj = outer2_1(outer2_3[17]);
                const value = obj.get(subtarget.integration_type);
                let name;
                if (null != value) {
                  name = value.name;
                }
                if (null == name) {
                  const intl2 = AuditLog(outer2_3[22]).intl;
                  name = intl2.string(AuditLog(outer2_3[22]).t["n+olu7"]);
                }
                const obj2 = { variant: "text-md/medium", color: "text-default", children: name };
                return outer2_19(AuditLog(outer2_3[20]).Text, obj2, "integration" + subtarget.integration_type);
              } else {
                const intl = AuditLog(outer2_3[22]).intl;
                return intl.string(AuditLog(outer2_3[22]).t["30mdIx"]);
              }
            },
          targetHook(children) {
              if (log.targetType === outer2_15.USER) {
                if (target instanceof outer2_12) {
                  let obj = { variant: "text-md/medium", color: "text-default" };
                  obj = { mode: "username" };
                  const items = [outer2_1(outer2_3[23]).getUserTag(target, obj), ];
                  let tmp17 = "0" !== target.discriminator;
                  if (tmp17) {
                    const obj1 = { style: tmp.discriminator, children: `#${target.discriminator}` };
                    tmp17 = outer2_19(AuditLog(outer2_3[24]).LegacyText, obj1);
                  }
                  items[1] = tmp17;
                  obj.children = items;
                  let tmp12Result = outer2_20(AuditLog(outer2_3[20]).Text, obj, `target${target.id}`);
                  const obj5 = outer2_1(outer2_3[23]);
                  const tmp12 = outer2_20;
                }
                return tmp12Result;
              }
              if (log.targetType === outer2_15.GUILD) {
                if ("object" === typeof target) {
                  obj = AuditLog(outer2_3[25]);
                  if (obj.isGuildRecord(target)) {
                    const obj2 = { variant: "text-md/medium", color: "text-default", children: target.name };
                    tmp12Result = outer2_19(AuditLog(outer2_3[20]).Text, obj2, `target${target.id}`);
                  }
                }
              }
              const obj3 = { variant: "text-md/medium", color: "text-default", children };
              tmp12Result = outer2_19(AuditLog(outer2_3[20]).Text, obj3, arg1);
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
            const obj4 = AuditLog(outer1_3[26]);
            let channel = obj4.computeChannelName(subtarget.channel, outer1_14, outer1_13, true);
          }
          obj.channel = channel;
          obj.channelHook = function channelHook(children) {
            const obj = { variant: "text-md/medium", color: "text-default", children };
            return outer2_19(AuditLog(outer2_3[20]).Text, obj, arg1);
          };
          subtarget = subtarget.subtarget;
          obj.subtarget = subtarget;
          obj = intl.format(changeTitle, obj);
          obj.children = obj;
          tmp3(AuditLog(outer1_3[20]).Text, obj);
        }
        channel = subtarget.channel;
        tmp3 = outer1_19;
      }
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "renderRoleUpdate",
    value(newValue) {
      newValue = newValue.newValue;
      let mapped = null;
      if (Array.isArray(newValue)) {
        mapped = newValue.map((name) => {
          const obj = { variant: "text-sm/medium", color: "text-muted", children: name.name };
          return outer2_19(AuditLog(outer2_3[20]).Text, obj, name.id);
        });
      }
      return mapped;
    }
  };
  items[1] = obj;
  obj = {
    key: "renderPermissionUpdate",
    value(newValue) {
      const self = this;
      newValue = newValue.newValue;
      let mapped = null;
      if (Array.isArray(newValue)) {
        mapped = newValue.map((arg0) => {
          const obj = { variant: "text-sm/medium", color: "text-muted", children: outer2_2(outer2_3[21]).getStringForPermission(arg0, self.props.log) };
          return outer2_19(AuditLog(outer2_3[20]).Text, obj, arg0);
        });
      }
      return mapped;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "renderChangeDetails",
    value(arg0) {
      const self = this;
      let closure_1 = arg0;
      let tmp = outer1_21(this.context);
      let closure_2 = tmp;
      const log = this.props.log;
      if (null == log.changes) {
        return null;
      } else {
        let c4 = 0;
        const changes = log.changes;
        let obj = {
          style: tmp.changesContainer,
          children: changes.map((key) => {
              let obj = outer2_2(outer2_3[21]);
              if (obj.shouldNotRenderChangeDetail(log, key)) {
                return null;
              } else {
                if (log.action === outer2_17.CHANNEL_UPDATE) {
                  if (key.key === outer2_18.TYPE) {
                    obj = {};
                    let oldValue = key.oldValue;
                    if (null == oldValue) {
                      let obj10 = AuditLog(outer2_3[27]);
                      obj = { type: key.oldValue };
                      oldValue = obj10.channelTypeString(obj);
                    }
                    obj.oldValue = oldValue;
                    let newValue2 = key.newValue;
                    if (null == newValue2) {
                      let obj12 = AuditLog(outer2_3[27]);
                      let obj1 = { type: key.newValue };
                      newValue2 = obj12.channelTypeString(obj1);
                    }
                    obj.newValue = newValue2;
                    obj.transformedValues = true;
                    let obj15 = obj;
                  }
                  const oldValue2 = obj15.oldValue;
                  let newValue = obj15.newValue;
                  if (log.action !== outer2_17.MEMBER_ROLE_UPDATE) {
                    if (log.action === outer2_17.INVITE_CREATE) {
                      let tmp35Result;
                      if (null != newValue[key.key]) {
                        tmp35Result = tmp35(key);
                      }
                      if (null == tmp35Result) {
                        return null;
                      } else {
                        const intl = AuditLog(outer2_3[22]).intl;
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
                          let obj = { style: outer1_2.colorsHook };
                          let items = [, , ];
                          ({ primary_color: arr[0], secondary_color: arr[1], tertiary_color: arr[2] } = newValue);
                          const found = items.filter(AuditLog(outer3_3[29]).isNotNullish);
                          obj.children = found.map((color) => {
                            let obj = {};
                            obj = { variant: "text-sm/bold" };
                            let str = "";
                            if (arg1 > 0) {
                              str = ", ";
                            }
                            const obj3 = AuditLog(outer4_3[30]);
                            const tmp = outer4_20;
                            const tmp2 = outer4_19;
                            obj.children = "" + str + AuditLog(outer4_3[30]).int2hex(color).toUpperCase() + " ";
                            const items = [tmp2(AuditLog(outer4_3[20]).Text, obj), ];
                            obj = {};
                            const items1 = [outer2_2.colorHook, ];
                            const obj1 = {};
                            const str2 = AuditLog(outer4_3[30]).int2hex(color);
                            obj1.backgroundColor = AuditLog(outer4_3[30]).int2hex(color);
                            items1[1] = obj1;
                            obj.style = items1;
                            items[1] = outer4_19(outer4_10, obj);
                            obj.children = items;
                            return tmp(outer4_9.Fragment, obj, arg1);
                          });
                          return outer3_19(outer3_10, obj, arg1);
                        };
                        obj2.oldColorHook = function oldColorHook() {
                          return null;
                        };
                        obj2.oldTagHook = function oldTagHook(arg0, arg1) {
                          return outer3_19(AuditLog(outer3_3[31]).AppliedForumTagPill, { tag: oldValue2, containerStyle: outer1_2.forumTag, disableEndMargin: true }, arg1);
                        };
                        obj2.newTagHook = function newTagHook(arg0, arg1) {
                          return outer3_19(AuditLog(outer3_3[31]).AppliedForumTagPill, { tag: newValue, containerStyle: outer1_2.forumTag, disableEndMargin: true }, arg1);
                        };
                        obj2.oldEmojiHook = function oldEmojiHook(arg0, arg1) {
                          let emojiURL;
                          if (null != oldValue2) {
                            let obj = outer3_1(outer3_3[16]);
                            obj = { id: oldValue2, animated: false, size: 24 };
                            emojiURL = obj.getEmojiURL(obj);
                          }
                          obj = { src: emojiURL, name: oldValue2 };
                          ({ textEmoji: obj3.textEmojiStyle, imageEmoji: obj3.fastImageStyle } = outer1_2);
                          return outer3_19(outer3_1(outer3_3[32]), obj, arg1);
                        };
                        obj2.newEmojiHook = function newEmojiHook(arg0, arg1) {
                          let emojiURL;
                          if (null != newValue) {
                            let obj = outer3_1(outer3_3[16]);
                            obj = { id: newValue, animated: false, size: 24 };
                            emojiURL = obj.getEmojiURL(obj);
                          }
                          obj = { src: emojiURL, name: newValue };
                          ({ textEmoji: obj3.textEmojiStyle, imageEmoji: obj3.fastImageStyle } = outer1_2);
                          return outer3_19(outer3_1(outer3_3[32]), obj, arg1);
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
                          return outer3_19(outer3_24, obj, arg1);
                        };
                        const formatResult = intl.format(tmp35Result, obj2);
                        if (null == formatResult) {
                          return null;
                        } else {
                          const actionType = log.actionType;
                          if (outer2_16.CREATE === actionType) {
                            let RED_400 = outer2_1(outer2_3[14]).unsafe_rawColors.GREEN_360;
                          } else if (outer2_16.UPDATE === actionType) {
                            RED_400 = outer2_1(outer2_3[14]).unsafe_rawColors.YELLOW_300;
                          } else if (outer2_16.DELETE === actionType) {
                            RED_400 = outer2_1(outer2_3[14]).unsafe_rawColors.RED_400;
                          }
                          getActivityIndicator = getActivityIndicator + 1;
                          let obj3 = { style: tmp.changeRow };
                          const obj4 = { variant: "text-sm/bold" };
                          let items = [tmp.changeNumberText, ];
                          let obj5 = { color: RED_400 };
                          items[1] = obj5;
                          obj4.style = items;
                          let str4 = null;
                          if (getActivityIndicator < 10) {
                            str4 = "0";
                          }
                          let items1 = [str4, getActivityIndicator, " \u2014"];
                          obj4.children = items1;
                          const items2 = [outer2_20(AuditLog(outer2_3[20]).Text, obj4), ];
                          const obj6 = { style: tmp.changeItemContent };
                          let obj7 = { style: tmp.changeItemTextContainer };
                          const obj8 = { variant: "text-sm/normal", style: tmp.changeItemTextContainer, children: formatResult };
                          const items3 = [outer2_19(AuditLog(outer2_3[20]).Text, obj8), ];
                          let tmp62 = null;
                          if (null != newValue) {
                            tmp62 = null;
                            if (true !== tmp21) {
                              const obj9 = {};
                              const items4 = [tmp.colorHook, ];
                              obj10 = { backgroundColor: newValue };
                              items4[1] = obj10;
                              obj9.style = items4;
                              tmp62 = outer2_19(outer2_10, obj9);
                            }
                          }
                          items3[1] = tmp62;
                          obj7.children = items3;
                          const items5 = [outer2_20(outer2_10, obj7), ];
                          let tmp66 = null;
                          if (null != result) {
                            tmp66 = result;
                          }
                          items5[1] = tmp66;
                          obj6.children = items5;
                          items2[1] = outer2_20(outer2_10, obj6);
                          obj3.children = items2;
                          return outer2_20(outer2_10, obj3, arg1);
                        }
                      }
                    }
                    if (log.targetType !== outer2_15.ROLE) {
                      if (log.action !== outer2_17.CHANNEL_OVERWRITE_CREATE) {
                        result = null;
                      }
                    }
                    result = oldValue2.renderPermissionUpdate(key);
                  }
                  result = oldValue2.renderRoleUpdate(key);
                }
                if (log.action === outer2_17.MEMBER_UPDATE) {
                  if (key.key === outer2_18.COMMUNICATION_DISABLED_UNTIL) {
                    obj7 = outer2_1(outer2_3[28])(key.newValue);
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
                if (log.action === outer2_17.GUILD_UPDATE) {
                  if (key.key === outer2_18.OWNER_ID) {
                    obj12 = {};
                    obj3 = outer2_1(outer2_3[23]);
                    const obj13 = { mode: "username" };
                    obj12.oldValue = obj3.getUserTag(key.oldValue, obj13);
                    obj5 = outer2_1(outer2_3[23]);
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
        return outer1_19(outer1_10, obj);
      }
    }
  };
  items[4] = {
    key: "renderChangeSummary",
    value() {
      const self = this;
      let renderChangeDetailsResult = null;
      if (this.props.expanded) {
        renderChangeDetailsResult = self.renderChangeDetails(outer1_2(outer1_3[21]).getChangeStrings(tmp));
        const obj = outer1_2(outer1_3[21]);
      }
      return renderChangeDetailsResult;
    }
  };
  items[5] = {
    key: "render",
    value() {
      let AuditLog;
      let containerStyle;
      let expanded;
      let guildId;
      let log;
      let theme;
      const self = this;
      const tmp = outer1_21(this.context);
      const props = this.props;
      ({ log, expanded, channel: AuditLog } = props);
      const user = log.user;
      ({ guildId, containerStyle, theme } = props);
      let obj = outer1_2(outer1_3[21]);
      const checkChangesToRenderResult = obj.checkChangesToRender(log);
      const timestampStart = log.timestampStart;
      const calendarResult = timestampStart.calendar();
      const timestampEnd = log.timestampEnd;
      const calendarResult1 = timestampEnd.calendar();
      if (calendarResult === calendarResult1) {
        obj = { style: tmp.timestamp, children: calendarResult };
        let tmp8 = outer1_19(AuditLog(outer1_3[24]).LegacyText, obj);
      } else {
        obj = { style: tmp.timestamp };
        const items = [calendarResult, "\u2014", calendarResult1];
        obj.children = items;
        tmp8 = outer1_20(AuditLog(outer1_3[24]).LegacyText, obj);
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
      items1 = [tmp.container, containerStyle];
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
      const items2 = [outer1_19(outer1_1(outer1_3[34]), { action: log.action }), , , ];
      const obj4 = { accessibilityRole: "button" };
      const intl = AuditLog(outer1_3[22]).intl;
      obj4.accessibilityLabel = intl.string(AuditLog(outer1_3[22]).t.iXAna6);
      let username;
      if (null != user) {
        username = user.username;
      }
      obj4.accessibilityHint = username;
      obj4.onPress = function onPress() {
        let obj = outer2_1(outer2_3[36]);
        obj.hideActionSheet();
        if (null != user) {
          obj = { userId: user.id, channelId: id.id };
          outer2_1(outer2_3[37])(obj);
        }
      };
      const obj5 = { style: tmp.avatar, source: outer1_23(theme, log, guildId), size: AuditLog(outer1_3[24]).AvatarSizes.SMALL };
      obj4.children = outer1_19(AuditLog(outer1_3[24]).Avatar, obj5);
      items2[1] = outer1_19(AuditLog(outer1_3[35]).PressableOpacity, obj4);
      const obj6 = { accessibilityRole: "button", accessibilityState: obj7, onPress: onHeaderClick, style: tmp.titleContainer, disabled: !checkChangesToRenderResult };
      const items3 = [self.renderTitle(), tmp8];
      obj6.children = items3;
      items2[2] = outer1_20(AuditLog(outer1_3[35]).PressableOpacity, obj6);
      let tmp19 = null;
      if (checkChangesToRenderResult) {
        const obj8 = {};
        const items4 = [tmp.arrow, rotate90];
        obj8.style = items4;
        obj8.size = AuditLog(outer1_3[24]).Icon.Sizes.CUSTOM;
        obj8.source = outer1_1(outer1_3[38]);
        tmp19 = outer1_19(AuditLog(outer1_3[24]).Icon, obj8);
      }
      items2[3] = tmp19;
      obj2.children = items2;
      const items5 = [outer1_20(outer1_10, obj2), ];
      let renderChangeSummaryResult = null;
      if (expanded) {
        renderChangeSummaryResult = self.renderChangeSummary();
      }
      items5[1] = renderChangeSummaryResult;
      obj1.children = items5;
      return outer1_20(AuditLog(outer1_3[33]).Card, obj1);
    }
  };
  return callback(AuditLog, items);
})(importAllResult.PureComponent);
tmp6.contextType = require("ManaContext").ThemeContext;
let obj3 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4, padding: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
let items1 = [importDefaultResult];
const tmp7 = require("initialize").connectStores(items1, () => ({ theme: importDefaultResult.theme }))(tmp6);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_settings/audit_log/native/AuditLog.tsx");

export default tmp7;
