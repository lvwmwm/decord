// Module ID: 5668
// Function ID: 48727
// Name: ContentHarmType
// Dependencies: []

// Module 5668 (ContentHarmType)
let MessageAttachmentFlags;
let MessageEmbedFlags;
const _module = require(dependencyMap[0]);
({ MessageAttachmentFlags, MessageEmbedFlags } = _module);
let obj = { EXPLICIT: "explicit", GORE: "gore", SELF_HARM: "self_harm" };
obj = { NONE: 0, [0]: "NONE", EXPLICIT: 1, [1]: "EXPLICIT", GORE: 2, [2]: "GORE", SELF_HARM: 4, [4]: "SELF_HARM", ALL: 7, [7]: "ALL" };
obj = {};
obj[obj.EXPLICIT] = {
  harmType: obj.EXPLICIT,
  obscureReason: require(dependencyMap[1]).ObscureReason.EXPLICIT_CONTENT,
  attachmentFlag: MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA,
  embedFlag: MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA,
  genericMediaFlag: require(dependencyMap[2]).ContentScanFlags.EXPLICIT,
  bitmask: obj.EXPLICIT,
  devSettingKey: "obscure_blur_effect_explicit_content_enabled",
  getProtoUserSettings(textAndImages) {
    let prop;
    if (null != textAndImages) {
      textAndImages = textAndImages.textAndImages;
      if (null != textAndImages) {
        prop = textAndImages.explicitContentSettings;
      }
    }
    const obj = {};
    let prop1;
    if (null != prop) {
      prop1 = prop.explicitContentGuilds;
    }
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.GUILD] = prop1;
    let prop2;
    if (null != prop) {
      prop2 = prop.explicitContentFriendDm;
    }
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.FRIEND_DM] = prop2;
    let prop3;
    if (null != prop) {
      prop3 = prop.explicitContentNonFriendDm;
    }
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.NON_FRIEND_DM] = prop3;
    return obj;
  },
  getUserSettingsWithDefaults(arg0) {
    let tmp = arg0;
    if (null == arg0) {
      let obj = {};
      const ExplicitContentSettings3 = require(dependencyMap[4]).ExplicitContentSettings;
      const setting = ExplicitContentSettings3.getSetting();
      let prop;
      if (null != setting) {
        prop = setting.explicitContentGuilds;
      }
      obj[require(dependencyMap[3]).ContentHarmTypeChannel.GUILD] = prop;
      const ExplicitContentSettings = require(dependencyMap[4]).ExplicitContentSettings;
      const setting1 = ExplicitContentSettings.getSetting();
      let prop1;
      if (null != setting1) {
        prop1 = setting1.explicitContentFriendDm;
      }
      obj[require(dependencyMap[3]).ContentHarmTypeChannel.FRIEND_DM] = prop1;
      const ExplicitContentSettings2 = require(dependencyMap[4]).ExplicitContentSettings;
      const setting2 = ExplicitContentSettings2.getSetting();
      let prop2;
      if (null != setting2) {
        prop2 = setting2.explicitContentNonFriendDm;
      }
      obj[require(dependencyMap[3]).ContentHarmTypeChannel.NON_FRIEND_DM] = prop2;
      tmp = obj;
    }
    obj = {};
    let obj1 = require(dependencyMap[5]);
    obj = {};
    let tmp11;
    if (null != tmp) {
      tmp11 = tmp[closure_0(undefined, closure_1[3]).ContentHarmTypeChannel.GUILD];
    }
    obj.setting = tmp11;
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.GUILD] = obj1.resolveExplicitContentSettingWithDefaults(obj);
    obj1 = { 315917: null, 315887: null, 315891: null };
    let tmp14;
    if (null != tmp) {
      tmp14 = tmp[closure_0(undefined, closure_1[3]).ContentHarmTypeChannel.FRIEND_DM];
    }
    obj1.setting = tmp14;
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.FRIEND_DM] = require(dependencyMap[5]).resolveExplicitContentSettingWithDefaults(obj1);
    const obj4 = require(dependencyMap[5]);
    const obj2 = {};
    let tmp17;
    if (null != tmp) {
      tmp17 = tmp[closure_0(undefined, closure_1[3]).ContentHarmTypeChannel.NON_FRIEND_DM];
    }
    obj2.setting = tmp17;
    obj2.isDm = true;
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.NON_FRIEND_DM] = require(dependencyMap[5]).resolveExplicitContentSettingWithDefaults(obj2);
    return obj;
  }
};
const obj1 = {
  harmType: obj.EXPLICIT,
  obscureReason: require(dependencyMap[1]).ObscureReason.EXPLICIT_CONTENT,
  attachmentFlag: MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA,
  embedFlag: MessageEmbedFlags.CONTAINS_EXPLICIT_MEDIA,
  genericMediaFlag: require(dependencyMap[2]).ContentScanFlags.EXPLICIT,
  bitmask: obj.EXPLICIT,
  devSettingKey: "obscure_blur_effect_explicit_content_enabled",
  getProtoUserSettings(textAndImages) {
    let prop;
    if (null != textAndImages) {
      textAndImages = textAndImages.textAndImages;
      if (null != textAndImages) {
        prop = textAndImages.explicitContentSettings;
      }
    }
    const obj = {};
    let prop1;
    if (null != prop) {
      prop1 = prop.explicitContentGuilds;
    }
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.GUILD] = prop1;
    let prop2;
    if (null != prop) {
      prop2 = prop.explicitContentFriendDm;
    }
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.FRIEND_DM] = prop2;
    let prop3;
    if (null != prop) {
      prop3 = prop.explicitContentNonFriendDm;
    }
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.NON_FRIEND_DM] = prop3;
    return obj;
  },
  getUserSettingsWithDefaults(arg0) {
    let tmp = arg0;
    if (null == arg0) {
      let obj = {};
      const ExplicitContentSettings3 = require(dependencyMap[4]).ExplicitContentSettings;
      const setting = ExplicitContentSettings3.getSetting();
      let prop;
      if (null != setting) {
        prop = setting.explicitContentGuilds;
      }
      obj[require(dependencyMap[3]).ContentHarmTypeChannel.GUILD] = prop;
      const ExplicitContentSettings = require(dependencyMap[4]).ExplicitContentSettings;
      const setting1 = ExplicitContentSettings.getSetting();
      let prop1;
      if (null != setting1) {
        prop1 = setting1.explicitContentFriendDm;
      }
      obj[require(dependencyMap[3]).ContentHarmTypeChannel.FRIEND_DM] = prop1;
      const ExplicitContentSettings2 = require(dependencyMap[4]).ExplicitContentSettings;
      const setting2 = ExplicitContentSettings2.getSetting();
      let prop2;
      if (null != setting2) {
        prop2 = setting2.explicitContentNonFriendDm;
      }
      obj[require(dependencyMap[3]).ContentHarmTypeChannel.NON_FRIEND_DM] = prop2;
      tmp = obj;
    }
    obj = {};
    let obj1 = require(dependencyMap[5]);
    obj = {};
    let tmp11;
    if (null != tmp) {
      tmp11 = tmp[closure_0(undefined, closure_1[3]).ContentHarmTypeChannel.GUILD];
    }
    obj.setting = tmp11;
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.GUILD] = obj1.resolveExplicitContentSettingWithDefaults(obj);
    obj1 = { 315917: null, 315887: null, 315891: null };
    let tmp14;
    if (null != tmp) {
      tmp14 = tmp[closure_0(undefined, closure_1[3]).ContentHarmTypeChannel.FRIEND_DM];
    }
    obj1.setting = tmp14;
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.FRIEND_DM] = require(dependencyMap[5]).resolveExplicitContentSettingWithDefaults(obj1);
    const obj4 = require(dependencyMap[5]);
    const obj2 = {};
    let tmp17;
    if (null != tmp) {
      tmp17 = tmp[closure_0(undefined, closure_1[3]).ContentHarmTypeChannel.NON_FRIEND_DM];
    }
    obj2.setting = tmp17;
    obj2.isDm = true;
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.NON_FRIEND_DM] = require(dependencyMap[5]).resolveExplicitContentSettingWithDefaults(obj2);
    return obj;
  }
};
obj[obj.GORE] = {
  harmType: obj.GORE,
  obscureReason: require(dependencyMap[1]).ObscureReason.GORE_CONTENT,
  attachmentFlag: MessageAttachmentFlags.CONTAINS_GORE_CONTENT,
  embedFlag: MessageEmbedFlags.CONTAINS_GORE_CONTENT,
  genericMediaFlag: require(dependencyMap[2]).ContentScanFlags.GORE,
  bitmask: obj.GORE,
  devSettingKey: "obscure_blur_effect_gore_content_enabled",
  getProtoUserSettings(textAndImages) {
    let goreContentSettings;
    if (null != textAndImages) {
      textAndImages = textAndImages.textAndImages;
      if (null != textAndImages) {
        goreContentSettings = textAndImages.goreContentSettings;
      }
    }
    const obj = {};
    let goreContentGuilds;
    if (null != goreContentSettings) {
      goreContentGuilds = goreContentSettings.goreContentGuilds;
    }
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.GUILD] = goreContentGuilds;
    let goreContentFriendDm;
    if (null != goreContentSettings) {
      goreContentFriendDm = goreContentSettings.goreContentFriendDm;
    }
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.FRIEND_DM] = goreContentFriendDm;
    let prop;
    if (null != goreContentSettings) {
      prop = goreContentSettings.goreContentNonFriendDm;
    }
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.NON_FRIEND_DM] = prop;
    return obj;
  },
  getUserSettingsWithDefaults(arg0) {
    let tmp = arg0;
    if (null == arg0) {
      let obj = {};
      const GoreContentSettings3 = require(dependencyMap[4]).GoreContentSettings;
      const setting = GoreContentSettings3.getSetting();
      let goreContentGuilds;
      if (null != setting) {
        goreContentGuilds = setting.goreContentGuilds;
      }
      obj[require(dependencyMap[3]).ContentHarmTypeChannel.GUILD] = goreContentGuilds;
      const GoreContentSettings = require(dependencyMap[4]).GoreContentSettings;
      const setting1 = GoreContentSettings.getSetting();
      let goreContentFriendDm;
      if (null != setting1) {
        goreContentFriendDm = setting1.goreContentFriendDm;
      }
      obj[require(dependencyMap[3]).ContentHarmTypeChannel.FRIEND_DM] = goreContentFriendDm;
      const GoreContentSettings2 = require(dependencyMap[4]).GoreContentSettings;
      const setting2 = GoreContentSettings2.getSetting();
      let prop;
      if (null != setting2) {
        prop = setting2.goreContentNonFriendDm;
      }
      obj[require(dependencyMap[3]).ContentHarmTypeChannel.NON_FRIEND_DM] = prop;
      tmp = obj;
    }
    obj = {};
    let obj1 = require(dependencyMap[6]);
    obj = {};
    let tmp11;
    if (null != tmp) {
      tmp11 = tmp[closure_0(undefined, closure_1[3]).ContentHarmTypeChannel.GUILD];
    }
    obj.setting = tmp11;
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.GUILD] = obj1.resolveGoreSettingWithDefaults(obj);
    obj1 = { 315917: null, 315887: null, 315891: null };
    let tmp14;
    if (null != tmp) {
      tmp14 = tmp[closure_0(undefined, closure_1[3]).ContentHarmTypeChannel.FRIEND_DM];
    }
    obj1.setting = tmp14;
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.FRIEND_DM] = require(dependencyMap[6]).resolveGoreSettingWithDefaults(obj1);
    const obj4 = require(dependencyMap[6]);
    const obj2 = {};
    let tmp17;
    if (null != tmp) {
      tmp17 = tmp[closure_0(undefined, closure_1[3]).ContentHarmTypeChannel.NON_FRIEND_DM];
    }
    obj2.setting = tmp17;
    obj2.isDm = true;
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.NON_FRIEND_DM] = require(dependencyMap[6]).resolveGoreSettingWithDefaults(obj2);
    return obj;
  }
};
const obj2 = {
  harmType: obj.GORE,
  obscureReason: require(dependencyMap[1]).ObscureReason.GORE_CONTENT,
  attachmentFlag: MessageAttachmentFlags.CONTAINS_GORE_CONTENT,
  embedFlag: MessageEmbedFlags.CONTAINS_GORE_CONTENT,
  genericMediaFlag: require(dependencyMap[2]).ContentScanFlags.GORE,
  bitmask: obj.GORE,
  devSettingKey: "obscure_blur_effect_gore_content_enabled",
  getProtoUserSettings(textAndImages) {
    let goreContentSettings;
    if (null != textAndImages) {
      textAndImages = textAndImages.textAndImages;
      if (null != textAndImages) {
        goreContentSettings = textAndImages.goreContentSettings;
      }
    }
    const obj = {};
    let goreContentGuilds;
    if (null != goreContentSettings) {
      goreContentGuilds = goreContentSettings.goreContentGuilds;
    }
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.GUILD] = goreContentGuilds;
    let goreContentFriendDm;
    if (null != goreContentSettings) {
      goreContentFriendDm = goreContentSettings.goreContentFriendDm;
    }
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.FRIEND_DM] = goreContentFriendDm;
    let prop;
    if (null != goreContentSettings) {
      prop = goreContentSettings.goreContentNonFriendDm;
    }
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.NON_FRIEND_DM] = prop;
    return obj;
  },
  getUserSettingsWithDefaults(arg0) {
    let tmp = arg0;
    if (null == arg0) {
      let obj = {};
      const GoreContentSettings3 = require(dependencyMap[4]).GoreContentSettings;
      const setting = GoreContentSettings3.getSetting();
      let goreContentGuilds;
      if (null != setting) {
        goreContentGuilds = setting.goreContentGuilds;
      }
      obj[require(dependencyMap[3]).ContentHarmTypeChannel.GUILD] = goreContentGuilds;
      const GoreContentSettings = require(dependencyMap[4]).GoreContentSettings;
      const setting1 = GoreContentSettings.getSetting();
      let goreContentFriendDm;
      if (null != setting1) {
        goreContentFriendDm = setting1.goreContentFriendDm;
      }
      obj[require(dependencyMap[3]).ContentHarmTypeChannel.FRIEND_DM] = goreContentFriendDm;
      const GoreContentSettings2 = require(dependencyMap[4]).GoreContentSettings;
      const setting2 = GoreContentSettings2.getSetting();
      let prop;
      if (null != setting2) {
        prop = setting2.goreContentNonFriendDm;
      }
      obj[require(dependencyMap[3]).ContentHarmTypeChannel.NON_FRIEND_DM] = prop;
      tmp = obj;
    }
    obj = {};
    let obj1 = require(dependencyMap[6]);
    obj = {};
    let tmp11;
    if (null != tmp) {
      tmp11 = tmp[closure_0(undefined, closure_1[3]).ContentHarmTypeChannel.GUILD];
    }
    obj.setting = tmp11;
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.GUILD] = obj1.resolveGoreSettingWithDefaults(obj);
    obj1 = { 315917: null, 315887: null, 315891: null };
    let tmp14;
    if (null != tmp) {
      tmp14 = tmp[closure_0(undefined, closure_1[3]).ContentHarmTypeChannel.FRIEND_DM];
    }
    obj1.setting = tmp14;
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.FRIEND_DM] = require(dependencyMap[6]).resolveGoreSettingWithDefaults(obj1);
    const obj4 = require(dependencyMap[6]);
    const obj2 = {};
    let tmp17;
    if (null != tmp) {
      tmp17 = tmp[closure_0(undefined, closure_1[3]).ContentHarmTypeChannel.NON_FRIEND_DM];
    }
    obj2.setting = tmp17;
    obj2.isDm = true;
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.NON_FRIEND_DM] = require(dependencyMap[6]).resolveGoreSettingWithDefaults(obj2);
    return obj;
  }
};
obj[obj.SELF_HARM] = {
  harmType: obj.SELF_HARM,
  obscureReason: require(dependencyMap[1]).ObscureReason.SELF_HARM_CONTENT,
  attachmentFlag: MessageAttachmentFlags.CONTAINS_SELF_HARM_CONTENT,
  embedFlag: MessageEmbedFlags.CONTAINS_SELF_HARM_CONTENT,
  genericMediaFlag: require(dependencyMap[2]).ContentScanFlags.SELF_HARM,
  bitmask: obj.SELF_HARM,
  devSettingKey: "obscure_blur_effect_self_harm_content_enabled",
  getProtoUserSettings(textAndImages) {
    let prop;
    if (null != textAndImages) {
      textAndImages = textAndImages.textAndImages;
      if (null != textAndImages) {
        prop = textAndImages.selfHarmContentSettings;
      }
    }
    const obj = {};
    let prop1;
    if (null != prop) {
      prop1 = prop.selfHarmContentGuilds;
    }
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.GUILD] = prop1;
    let prop2;
    if (null != prop) {
      prop2 = prop.selfHarmContentFriendDm;
    }
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.FRIEND_DM] = prop2;
    let prop3;
    if (null != prop) {
      prop3 = prop.selfHarmContentNonFriendDm;
    }
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.NON_FRIEND_DM] = prop3;
    return obj;
  },
  getUserSettingsWithDefaults() {
    const obj = {};
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.GUILD] = require(dependencyMap[7]).ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.FRIEND_DM] = require(dependencyMap[7]).ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
    obj[require(dependencyMap[3]).ContentHarmTypeChannel.NON_FRIEND_DM] = require(dependencyMap[7]).ExplicitContentRedaction.UNSET_EXPLICIT_CONTENT_REDACTION;
    return obj;
  }
};
const _module1 = require(dependencyMap[8]);
const result = _module1.fileFinishedImporting("modules/explicit_media_redaction/HarmTypeConfiguration.tsx");

export const ContentHarmType = obj;
export const ContentHarmTypeBitMask = obj;
export const CONTENT_SCAN_TYPE_REGISTRY = obj;
