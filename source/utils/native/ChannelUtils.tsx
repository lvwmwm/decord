// Module ID: 4590
// Function ID: 40203
// Name: getThreadChannelIcon
// Dependencies: []
// Exports: getChannelIconComponentWithGuild, getChannelIconWithGuild, getChannelMentionIcon, getSimpleChannelIcon, getSimpleChannelIconComponent

// Module 4590 (getThreadChannelIcon)
function getThreadChannelIcon(type) {
  if (ChannelTypes.PRIVATE_THREAD === type) {
    return importDefault(dependencyMap[4]);
  } else {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
      if (ChannelTypes.PUBLIC_THREAD !== type) {
        return null;
      }
    }
    return importDefault(dependencyMap[5]);
  }
}
function getChannelIcon(guild_id, ignoreTraits) {
  let isRulesChannel;
  let locked;
  let obj = ignoreTraits;
  if (null == ignoreTraits) {
    obj = {};
  }
  ({ isRulesChannel, locked } = obj);
  const items = [closure_4, closure_5, closure_3];
  let result = ignoreTraits(dependencyMap[29]).shouldShowMembershipVerificationGate(guild_id.guild_id, items);
  if (guild_id.isForumPost()) {
    result = importDefault;
    result = dependencyMap;
    return importDefault(dependencyMap[22]);
  } else {
    const tmp3 = getThreadChannelIcon(guild_id.type);
    if (null != tmp3) {
      return tmp3;
    } else {
      result = guild_id.isMediaChannel();
      result = guild_id.isNSFW();
      const type = guild_id.type;
      result = ChannelTypes;
      if (ChannelTypes.PRIVATE_THREAD !== type) {
        result = ChannelTypes;
        if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
          result = ChannelTypes;
          if (ChannelTypes.PUBLIC_THREAD !== type) {
            result = ChannelTypes;
            if (ChannelTypes.GUILD_CATEGORY === type) {
              result = importDefault;
              result = dependencyMap;
              return importDefault(dependencyMap[6]);
            } else {
              result = ChannelTypes;
              if (ChannelTypes.GUILD_TEXT === type) {
                if (isRulesChannel) {
                  result = importDefault;
                  result = dependencyMap;
                  result = importDefault(dependencyMap[30]);
                } else {
                  if (result) {
                    result = importDefault;
                    result = dependencyMap;
                    result = importDefault(dependencyMap[18]);
                  }
                  if (guild_id.isSpoilerChannel()) {
                    if (null == ignoreTraits) {
                      result = importDefault;
                      result = dependencyMap;
                      result = importDefault(dependencyMap[19]);
                    }
                  }
                  result = importDefault;
                  result = dependencyMap;
                  if (importDefault(dependencyMap[31])(guild_id)) {
                    if (null == ignoreTraits) {
                      result = importDefault;
                      result = dependencyMap;
                      result = importDefault(dependencyMap[28]);
                    }
                  }
                  if (null != guild_id.linkedLobby) {
                    result = importDefault;
                    result = dependencyMap;
                    result = importDefault(dependencyMap[32]);
                  } else {
                    result = importDefault;
                    result = dependencyMap;
                    result = importDefault(dependencyMap[7]);
                  }
                }
                return result;
              } else {
                result = ChannelTypes;
                if (ChannelTypes.GUILD_FORUM === type) {
                  if (isRulesChannel) {
                    result = importDefault;
                    result = dependencyMap;
                    let tmp83Result = importDefault(dependencyMap[30]);
                  } else {
                    if (result) {
                      if (result) {
                        let tmp85 = tmp84[27];
                      } else {
                        tmp85 = tmp84[24];
                      }
                      tmp83Result = importDefault(tmp85);
                      const tmp83 = importDefault;
                    }
                    if (guild_id.isSpoilerChannel()) {
                      if (null == ignoreTraits) {
                        importDefault(dependencyMap[25]);
                      }
                    }
                    if (importDefault(dependencyMap[31])(guild_id)) {
                      if (null == ignoreTraits) {
                        if (result) {
                          let tmp93 = tmp92[33];
                        } else {
                          tmp93 = tmp92[34];
                        }
                        importDefault(tmp93);
                        const tmp91 = importDefault;
                      }
                    }
                    if (result) {
                      let tmp96 = tmp95[26];
                    } else {
                      tmp96 = tmp95[23];
                    }
                    importDefault(tmp96);
                    const tmp94 = importDefault;
                  }
                  return tmp83Result;
                } else {
                  result = ChannelTypes;
                  if (ChannelTypes.GUILD_MEDIA === type) {
                    if (isRulesChannel) {
                      let tmp69 = importDefault(dependencyMap[30]);
                    } else {
                      if (result) {
                        tmp69 = importDefault(dependencyMap[27]);
                      }
                      if (guild_id.isSpoilerChannel()) {
                        if (null == ignoreTraits) {
                          importDefault(dependencyMap[25]);
                        }
                      }
                      if (!importDefault(dependencyMap[31])(guild_id)) {
                        let tmp76 = importDefault(dependencyMap[26]);
                      } else if (null == ignoreTraits) {
                        tmp76 = importDefault(dependencyMap[33]);
                      }
                    }
                    return tmp69;
                  } else {
                    result = ChannelTypes;
                    if (ChannelTypes.GROUP_DM === type) {
                      return importDefault(dependencyMap[8]);
                    } else {
                      result = ChannelTypes;
                      if (ChannelTypes.DM === type) {
                        return importDefault(dependencyMap[9]);
                      } else {
                        result = ChannelTypes;
                        if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
                          if (isRulesChannel) {
                            let tmp49 = importDefault(dependencyMap[30]);
                          } else {
                            if (result) {
                              tmp49 = importDefault(dependencyMap[20]);
                            }
                            if (guild_id.isSpoilerChannel()) {
                              if (null == ignoreTraits) {
                                importDefault(dependencyMap[21]);
                              }
                            }
                            if (!importDefault(dependencyMap[31])(guild_id)) {
                              let tmp56 = importDefault(dependencyMap[10]);
                            } else if (null == ignoreTraits) {
                              tmp56 = importDefault(dependencyMap[35]);
                            }
                          }
                          return tmp49;
                        } else {
                          result = ChannelTypes;
                          if (ChannelTypes.GUILD_STAGE_VOICE === type) {
                            if (result) {
                              if (importDefault(dependencyMap[31])(guild_id)) {
                                let tmp33Result = tmp33(tmp34[36]);
                              } else {
                                tmp33Result = tmp33(tmp34[17]);
                              }
                              return tmp33Result;
                            }
                            if (locked) {
                              if (null == ignoreTraits) {
                                importDefault(dependencyMap[36]);
                              }
                            }
                            if (!importDefault(dependencyMap[31])(guild_id)) {
                              let tmp42 = importDefault(dependencyMap[11]);
                            } else if (null == ignoreTraits) {
                              tmp42 = importDefault(dependencyMap[17]);
                            }
                          } else {
                            result = ChannelTypes;
                            if (ChannelTypes.GUILD_VOICE === type) {
                              if (obj.textFocused) {
                                let tmp9Result = importDefault(dependencyMap[22]);
                              } else {
                                if (result) {
                                  if (importDefault(dependencyMap[31])(guild_id)) {
                                    tmp9Result = tmp9(tmp10[36]);
                                  } else {
                                    tmp9Result = tmp9(tmp10[14]);
                                  }
                                }
                                if (locked) {
                                  if (null == ignoreTraits) {
                                    importDefault(dependencyMap[36]);
                                  }
                                }
                                if (importDefault(dependencyMap[31])(guild_id)) {
                                  if (null == ignoreTraits) {
                                    importDefault(dependencyMap[14]);
                                  }
                                }
                                if (result) {
                                  if (null == ignoreTraits) {
                                    importDefault(dependencyMap[15]);
                                  }
                                }
                                if (!guild_id.isSpoilerChannel()) {
                                  let tmp22 = importDefault(dependencyMap[12]);
                                } else if (null == ignoreTraits) {
                                  tmp22 = importDefault(dependencyMap[16]);
                                }
                              }
                              return tmp9Result;
                            } else if (ChannelTypes.GUILD_DIRECTORY === type) {
                              return importDefault(dependencyMap[13]);
                            } else {
                              return null;
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
      result = getThreadChannelIcon;
      return getThreadChannelIcon(guild_id.type);
    }
  }
  const obj2 = ignoreTraits(dependencyMap[29]);
}
function getChannelIconComponent(channel, ignoreTraits) {
  let isRulesChannel;
  let locked;
  let obj = ignoreTraits;
  if (null == ignoreTraits) {
    obj = {};
  }
  ({ isRulesChannel, locked } = obj);
  const items = [closure_4, closure_5, closure_3];
  let result = ignoreTraits(dependencyMap[29]).shouldShowMembershipVerificationGate(channel.guild_id, items);
  if (channel.isForumPost()) {
    result = ignoreTraits;
    result = dependencyMap;
    return ignoreTraits(dependencyMap[37]).ChatIcon;
  } else {
    const isMediaChannelResult = channel.isMediaChannel();
    const isNSFWResult = channel.isNSFW();
    const type = channel.type;
    if (ChannelTypes.PRIVATE_THREAD === type) {
      result = ignoreTraits;
      result = dependencyMap;
      return ignoreTraits(dependencyMap[38]).ThreadLockIcon;
    } else {
      result = ChannelTypes;
      if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
        result = ChannelTypes;
        if (ChannelTypes.PUBLIC_THREAD !== type) {
          result = ChannelTypes;
          if (ChannelTypes.GUILD_CATEGORY === type) {
            result = dependencyMap;
            return ignoreTraits(dependencyMap[40]).FolderIcon;
          } else {
            result = ChannelTypes;
            if (ChannelTypes.GUILD_TEXT === type) {
              if (isRulesChannel) {
                let TextWarningIcon = ignoreTraits(dependencyMap[41]).BookCheckIcon;
              } else {
                if (isNSFWResult) {
                  TextWarningIcon = ignoreTraits(dependencyMap[42]).TextWarningIcon;
                }
                if (channel.isSpoilerChannel()) {
                  if (null == ignoreTraits) {
                    const TextSpoilerIcon = ignoreTraits(dependencyMap[43]).TextSpoilerIcon;
                  }
                }
                if (importDefault(dependencyMap[31])(channel)) {
                  if (null == ignoreTraits) {
                    const TextLockIcon = ignoreTraits(dependencyMap[44]).TextLockIcon;
                  }
                }
                if (null != channel.linkedLobby) {
                  let TextIcon = ignoreTraits(dependencyMap[45]).TextControllerIcon;
                } else {
                  TextIcon = ignoreTraits(dependencyMap[46]).TextIcon;
                }
              }
              return TextWarningIcon;
            } else {
              result = ChannelTypes;
              if (ChannelTypes.GUILD_FORUM === type) {
                if (isRulesChannel) {
                  let ForumWarningIcon = ignoreTraits(dependencyMap[41]).BookCheckIcon;
                } else {
                  if (isNSFWResult) {
                    if (isMediaChannelResult) {
                      ForumWarningIcon = tmp70(tmp71[47]).ImageWarningIcon;
                    } else {
                      ForumWarningIcon = tmp70(tmp71[48]).ForumWarningIcon;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    if (null == ignoreTraits) {
                      const ForumSpoilerIcon2 = ignoreTraits(dependencyMap[49]).ForumSpoilerIcon;
                    }
                  }
                  if (importDefault(dependencyMap[31])(channel)) {
                    if (null == ignoreTraits) {
                      if (isMediaChannelResult) {
                        let ForumLockIcon = tmp76(tmp77[50]).ImageLockIcon;
                      } else {
                        ForumLockIcon = tmp76(tmp77[51]).ForumLockIcon;
                      }
                    }
                  }
                  if (isMediaChannelResult) {
                    let ForumIcon = tmp78(tmp79[52]).ImageIcon;
                  } else {
                    ForumIcon = tmp78(tmp79[53]).ForumIcon;
                  }
                }
                return ForumWarningIcon;
              } else {
                result = ChannelTypes;
                if (ChannelTypes.GUILD_MEDIA === type) {
                  if (isRulesChannel) {
                    let ImageWarningIcon = ignoreTraits(dependencyMap[41]).BookCheckIcon;
                  } else {
                    if (isNSFWResult) {
                      ImageWarningIcon = ignoreTraits(dependencyMap[47]).ImageWarningIcon;
                    }
                    if (channel.isSpoilerChannel()) {
                      if (null == ignoreTraits) {
                        const ForumSpoilerIcon = ignoreTraits(dependencyMap[49]).ForumSpoilerIcon;
                      }
                    }
                    if (!importDefault(dependencyMap[31])(channel)) {
                      let ImageLockIcon = ignoreTraits(dependencyMap[52]).ImageIcon;
                    } else if (null == ignoreTraits) {
                      ImageLockIcon = ignoreTraits(dependencyMap[50]).ImageLockIcon;
                    }
                  }
                  return ImageWarningIcon;
                } else {
                  result = ChannelTypes;
                  if (ChannelTypes.GROUP_DM === type) {
                    return ignoreTraits(dependencyMap[54]).GroupIcon;
                  } else {
                    result = ChannelTypes;
                    if (ChannelTypes.DM === type) {
                      return ignoreTraits(dependencyMap[55]).AtIcon;
                    } else {
                      result = ChannelTypes;
                      if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
                        if (isRulesChannel) {
                          let AnnouncementsWarningIcon = ignoreTraits(dependencyMap[41]).BookCheckIcon;
                        } else {
                          if (isNSFWResult) {
                            AnnouncementsWarningIcon = ignoreTraits(dependencyMap[56]).AnnouncementsWarningIcon;
                          }
                          if (channel.isSpoilerChannel()) {
                            if (null == ignoreTraits) {
                              const AnnouncementsSpoilerIcon = ignoreTraits(dependencyMap[57]).AnnouncementsSpoilerIcon;
                            }
                          }
                          if (!importDefault(dependencyMap[31])(channel)) {
                            let AnnouncementsLockIcon = ignoreTraits(dependencyMap[59]).AnnouncementsIcon;
                          } else if (null == ignoreTraits) {
                            AnnouncementsLockIcon = ignoreTraits(dependencyMap[58]).AnnouncementsLockIcon;
                          }
                        }
                        return AnnouncementsWarningIcon;
                      } else {
                        result = ChannelTypes;
                        if (ChannelTypes.GUILD_STAGE_VOICE === type) {
                          if (result) {
                            if (importDefault(dependencyMap[31])(channel)) {
                              let StageLockIcon = tmp29(tmp30[60]).LockIcon;
                            } else {
                              StageLockIcon = tmp29(tmp30[61]).StageLockIcon;
                            }
                            return StageLockIcon;
                          }
                          if (locked) {
                            if (null == ignoreTraits) {
                              const LockIcon2 = ignoreTraits(dependencyMap[60]).LockIcon;
                            }
                          }
                          if (!importDefault(dependencyMap[31])(channel)) {
                            let StageLockIcon2 = ignoreTraits(dependencyMap[62]).StageIcon;
                          } else if (null == ignoreTraits) {
                            StageLockIcon2 = ignoreTraits(dependencyMap[61]).StageLockIcon;
                          }
                        } else {
                          result = ChannelTypes;
                          if (ChannelTypes.GUILD_VOICE === type) {
                            if (obj.textFocused) {
                              let VoiceLockIcon = ignoreTraits(dependencyMap[37]).ChatIcon;
                            } else {
                              if (result) {
                                if (importDefault(dependencyMap[31])(channel)) {
                                  VoiceLockIcon = tmp10(tmp11[60]).LockIcon;
                                } else {
                                  VoiceLockIcon = tmp10(tmp11[63]).VoiceLockIcon;
                                }
                              }
                              if (locked) {
                                if (null == ignoreTraits) {
                                  const LockIcon = ignoreTraits(dependencyMap[60]).LockIcon;
                                }
                              }
                              if (importDefault(dependencyMap[31])(channel)) {
                                if (null == ignoreTraits) {
                                  const VoiceLockIcon2 = ignoreTraits(dependencyMap[63]).VoiceLockIcon;
                                }
                              }
                              if (isNSFWResult) {
                                if (null == ignoreTraits) {
                                  const VoiceWarningIcon = ignoreTraits(dependencyMap[64]).VoiceWarningIcon;
                                }
                              }
                              if (!channel.isSpoilerChannel()) {
                                let VoiceNormalSpoilerIcon = ignoreTraits(dependencyMap[66]).VoiceNormalIcon;
                              } else if (null == ignoreTraits) {
                                VoiceNormalSpoilerIcon = ignoreTraits(dependencyMap[65]).VoiceNormalSpoilerIcon;
                              }
                            }
                            return VoiceLockIcon;
                          } else if (ChannelTypes.GUILD_DIRECTORY === type) {
                            return ignoreTraits(dependencyMap[67]).HubIcon;
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
      result = ignoreTraits;
      result = dependencyMap;
      return ignoreTraits(dependencyMap[39]).ThreadIcon;
    }
  }
  const obj2 = ignoreTraits(dependencyMap[29]);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const ChannelTypes = arg1(dependencyMap[3]).ChannelTypes;
const result = arg1(dependencyMap[68]).fileFinishedImporting("utils/native/ChannelUtils.tsx");

export { getThreadChannelIcon };
export const getSimpleChannelIcon = function getSimpleChannelIcon(channel) {
  const tmp = getThreadChannelIcon(channel.type);
  if (null != tmp) {
    return tmp;
  } else {
    const type = channel.type;
    if (ChannelTypes.PRIVATE_THREAD !== type) {
      if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
        if (ChannelTypes.PUBLIC_THREAD !== type) {
          if (ChannelTypes.GUILD_CATEGORY === type) {
            return importDefault(dependencyMap[6]);
          } else {
            if (ChannelTypes.GUILD_TEXT !== type) {
              if (ChannelTypes.GUILD_FORUM !== type) {
                if (ChannelTypes.GUILD_MEDIA !== type) {
                  if (ChannelTypes.GROUP_DM === type) {
                    return importDefault(dependencyMap[8]);
                  } else if (ChannelTypes.DM === type) {
                    return importDefault(dependencyMap[9]);
                  } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
                    return importDefault(dependencyMap[10]);
                  } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
                    return importDefault(dependencyMap[11]);
                  } else if (ChannelTypes.GUILD_VOICE === type) {
                    return importDefault(dependencyMap[12]);
                  } else if (ChannelTypes.GUILD_DIRECTORY === type) {
                    return importDefault(dependencyMap[13]);
                  } else {
                    return null;
                  }
                }
              }
            }
            return importDefault(dependencyMap[7]);
          }
        }
      }
    }
    return getThreadChannelIcon(channel.type);
  }
};
export const getChannelIconWithGuild = function getChannelIconWithGuild(channel, guild) {
  const obj = {};
  let rulesChannelId;
  if (null != guild) {
    rulesChannelId = guild.rulesChannelId;
  }
  obj.isRulesChannel = rulesChannelId === channel.id;
  return getChannelIcon(channel, obj);
};
export const getChannelMentionIcon = function getChannelMentionIcon(iconType) {
  if ("voice" === iconType) {
    return importDefault(dependencyMap[12]);
  } else if ("voice-locked" === iconType) {
    return importDefault(dependencyMap[14]);
  } else if ("voice-nsfw" === iconType) {
    return importDefault(dependencyMap[15]);
  } else if ("voice-spoiler" === iconType) {
    return importDefault(dependencyMap[16]);
  } else if ("stage" === iconType) {
    return importDefault(dependencyMap[11]);
  } else if ("stage-locked" === iconType) {
    return importDefault(dependencyMap[17]);
  } else if ("text" === iconType) {
    return importDefault(dependencyMap[7]);
  } else if ("text-nsfw" === iconType) {
    return importDefault(dependencyMap[18]);
  } else if ("text-spoiler" === iconType) {
    return importDefault(dependencyMap[19]);
  } else if ("announcement" === iconType) {
    return importDefault(dependencyMap[10]);
  } else if ("announcement-nsfw" === iconType) {
    return importDefault(dependencyMap[20]);
  } else if ("announcement-spoiler" === iconType) {
    return importDefault(dependencyMap[21]);
  } else if ("thread" === iconType) {
    return importDefault(dependencyMap[5]);
  } else {
    if ("post" !== iconType) {
      if ("message" !== iconType) {
        if ("forum" === iconType) {
          return importDefault(dependencyMap[23]);
        } else if ("forum-nsfw" === iconType) {
          return importDefault(dependencyMap[24]);
        } else if ("forum-spoiler" === iconType) {
          return importDefault(dependencyMap[25]);
        } else if ("media" === iconType) {
          return importDefault(dependencyMap[26]);
        } else if ("media-nsfw" === iconType) {
          return importDefault(dependencyMap[27]);
        } else if ("locked" === iconType) {
          return importDefault(dependencyMap[28]);
        } else {
          return null;
        }
      }
    }
    return importDefault(dependencyMap[22]);
  }
};
export { getChannelIcon };
export const getChannelIconComponentWithGuild = function getChannelIconComponentWithGuild(channel, guild) {
  const obj = {};
  let rulesChannelId;
  if (null != guild) {
    rulesChannelId = guild.rulesChannelId;
  }
  obj.isRulesChannel = rulesChannelId === channel.id;
  return getChannelIconComponent(channel, obj);
};
export { getChannelIconComponent };
export const getSimpleChannelIconComponent = function getSimpleChannelIconComponent(channel) {
  const type = channel.type;
  if (ChannelTypes.PRIVATE_THREAD !== type) {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
      if (ChannelTypes.PUBLIC_THREAD !== type) {
        if (ChannelTypes.GUILD_CATEGORY === type) {
          return arg1(dependencyMap[40]).FolderIcon;
        } else if (ChannelTypes.GUILD_TEXT === type) {
          return arg1(dependencyMap[46]).TextIcon;
        } else if (ChannelTypes.GUILD_FORUM === type) {
          return arg1(dependencyMap[53]).ForumIcon;
        } else if (ChannelTypes.GUILD_MEDIA === type) {
          return arg1(dependencyMap[52]).ImageIcon;
        } else if (ChannelTypes.GROUP_DM === type) {
          return arg1(dependencyMap[54]).GroupIcon;
        } else if (ChannelTypes.DM === type) {
          return arg1(dependencyMap[55]).AtIcon;
        } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
          return arg1(dependencyMap[59]).AnnouncementsIcon;
        } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
          return arg1(dependencyMap[62]).StageIcon;
        } else if (ChannelTypes.GUILD_VOICE === type) {
          return arg1(dependencyMap[66]).VoiceNormalIcon;
        } else if (ChannelTypes.GUILD_DIRECTORY === type) {
          return arg1(dependencyMap[67]).HubIcon;
        } else {
          return null;
        }
      }
    }
  }
  if (channel.isForumPost()) {
    let ThreadIcon = tmp24(tmp25[37]).ChatIcon;
  } else {
    ThreadIcon = tmp24(tmp25[39]).ThreadIcon;
  }
  return ThreadIcon;
};
