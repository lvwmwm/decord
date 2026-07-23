// Module ID: 4593
// Function ID: 40250
// Name: getThreadChannelIcon
// Dependencies: [1917, 1838, 1849, 653, 4594, 4595, 4596, 4597, 4598, 4599, 4600, 4601, 4602, 4603, 4604, 4605, 4606, 4607, 4608, 4609, 4610, 4611, 4612, 4613, 4614, 4615, 4616, 4617, 4618, 4619, 4622, 4623, 4624, 4625, 4626, 4627, 4628, 4629, 4630, 4631, 4632, 4633, 4634, 4635, 4636, 4637, 4638, 4639, 4640, 4641, 4642, 4643, 4644, 4645, 4646, 4647, 4648, 4649, 4650, 4651, 4652, 4653, 4654, 4655, 4656, 4657, 4658, 4659, 2]
// Exports: getChannelIconComponentWithGuild, getChannelIconWithGuild, getChannelMentionIcon, getSimpleChannelIcon, getSimpleChannelIconComponent

// Module 4593 (getThreadChannelIcon)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_isNativeReflectConstruct";
import { ChannelTypes } from "ME";

const require = arg1;
function getThreadChannelIcon(type) {
  if (ChannelTypes.PRIVATE_THREAD === type) {
    return importDefault(4594);
  } else {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
      if (ChannelTypes.PUBLIC_THREAD !== type) {
        return null;
      }
    }
    return importDefault(4595);
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
  const items = [_createForOfIteratorHelperLoose, closure_5, _isNativeReflectConstruct];
  let result = require(4619) /* shouldShowMembershipVerificationGate */.shouldShowMembershipVerificationGate(guild_id.guild_id, items);
  if (guild_id.isForumPost()) {
    result = importDefault;
    result = dependencyMap;
    return importDefault(4612);
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
              return importDefault(4596);
            } else {
              result = ChannelTypes;
              if (ChannelTypes.GUILD_TEXT === type) {
                if (isRulesChannel) {
                  result = importDefault;
                  result = dependencyMap;
                  result = importDefault(4622);
                } else {
                  if (result) {
                    result = importDefault;
                    result = dependencyMap;
                    result = importDefault(4608);
                  }
                  if (guild_id.isSpoilerChannel()) {
                    if (null == ignoreTraits) {
                      result = importDefault;
                      result = dependencyMap;
                      result = importDefault(4609);
                    }
                  }
                  result = importDefault;
                  result = dependencyMap;
                  if (importDefault(4623)(guild_id)) {
                    if (null == ignoreTraits) {
                      result = importDefault;
                      result = dependencyMap;
                      result = importDefault(4618);
                    }
                  }
                  if (null != guild_id.linkedLobby) {
                    result = importDefault;
                    result = dependencyMap;
                    result = importDefault(4624);
                  } else {
                    result = importDefault;
                    result = dependencyMap;
                    result = importDefault(4597);
                  }
                }
                return result;
              } else {
                result = ChannelTypes;
                if (ChannelTypes.GUILD_FORUM === type) {
                  if (isRulesChannel) {
                    result = importDefault;
                    result = dependencyMap;
                    let tmp83Result = importDefault(4622);
                  } else {
                    if (result) {
                      if (result) {
                        let tmp85 = 4617;
                      } else {
                        tmp85 = 4614;
                      }
                      tmp83Result = importDefault(tmp85);
                      const tmp83 = importDefault;
                    }
                    if (guild_id.isSpoilerChannel()) {
                      if (null == ignoreTraits) {
                        importDefault(4615);
                      }
                    }
                    if (importDefault(4623)(guild_id)) {
                      if (null == ignoreTraits) {
                        if (result) {
                          let tmp93 = 4625;
                        } else {
                          tmp93 = 4626;
                        }
                        importDefault(tmp93);
                        const tmp91 = importDefault;
                      }
                    }
                    if (result) {
                      let tmp96 = 4616;
                    } else {
                      tmp96 = 4613;
                    }
                    importDefault(tmp96);
                    const tmp94 = importDefault;
                  }
                  return tmp83Result;
                } else {
                  result = ChannelTypes;
                  if (ChannelTypes.GUILD_MEDIA === type) {
                    if (isRulesChannel) {
                      let tmp69 = importDefault(4622);
                    } else {
                      if (result) {
                        tmp69 = importDefault(4617);
                      }
                      if (guild_id.isSpoilerChannel()) {
                        if (null == ignoreTraits) {
                          importDefault(4615);
                        }
                      }
                      if (!importDefault(4623)(guild_id)) {
                        let tmp76 = importDefault(4616);
                      } else if (null == ignoreTraits) {
                        tmp76 = importDefault(4625);
                      }
                    }
                    return tmp69;
                  } else {
                    result = ChannelTypes;
                    if (ChannelTypes.GROUP_DM === type) {
                      return importDefault(4598);
                    } else {
                      result = ChannelTypes;
                      if (ChannelTypes.DM === type) {
                        return importDefault(4599);
                      } else {
                        result = ChannelTypes;
                        if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
                          if (isRulesChannel) {
                            let tmp49 = importDefault(4622);
                          } else {
                            if (result) {
                              tmp49 = importDefault(4610);
                            }
                            if (guild_id.isSpoilerChannel()) {
                              if (null == ignoreTraits) {
                                importDefault(4611);
                              }
                            }
                            if (!importDefault(4623)(guild_id)) {
                              let tmp56 = importDefault(4600);
                            } else if (null == ignoreTraits) {
                              tmp56 = importDefault(4627);
                            }
                          }
                          return tmp49;
                        } else {
                          result = ChannelTypes;
                          if (ChannelTypes.GUILD_STAGE_VOICE === type) {
                            if (result) {
                              if (importDefault(4623)(guild_id)) {
                                let tmp33Result = tmp33(4628);
                              } else {
                                tmp33Result = tmp33(4607);
                              }
                              return tmp33Result;
                            }
                            if (locked) {
                              if (null == ignoreTraits) {
                                importDefault(4628);
                              }
                            }
                            if (!importDefault(4623)(guild_id)) {
                              let tmp42 = importDefault(4601);
                            } else if (null == ignoreTraits) {
                              tmp42 = importDefault(4607);
                            }
                          } else {
                            result = ChannelTypes;
                            if (ChannelTypes.GUILD_VOICE === type) {
                              if (obj.textFocused) {
                                let tmp9Result = importDefault(4612);
                              } else {
                                if (result) {
                                  if (importDefault(4623)(guild_id)) {
                                    tmp9Result = tmp9(4628);
                                  } else {
                                    tmp9Result = tmp9(4604);
                                  }
                                }
                                if (locked) {
                                  if (null == ignoreTraits) {
                                    importDefault(4628);
                                  }
                                }
                                if (importDefault(4623)(guild_id)) {
                                  if (null == ignoreTraits) {
                                    importDefault(4604);
                                  }
                                }
                                if (result) {
                                  if (null == ignoreTraits) {
                                    importDefault(4605);
                                  }
                                }
                                if (!guild_id.isSpoilerChannel()) {
                                  let tmp22 = importDefault(4602);
                                } else if (null == ignoreTraits) {
                                  tmp22 = importDefault(4606);
                                }
                              }
                              return tmp9Result;
                            } else if (ChannelTypes.GUILD_DIRECTORY === type) {
                              return importDefault(4603);
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
  const obj2 = require(4619) /* shouldShowMembershipVerificationGate */;
}
function getChannelIconComponent(channel, ignoreTraits) {
  let isRulesChannel;
  let locked;
  let obj = ignoreTraits;
  if (null == ignoreTraits) {
    obj = {};
  }
  ({ isRulesChannel, locked } = obj);
  const items = [_createForOfIteratorHelperLoose, closure_5, _isNativeReflectConstruct];
  let result = require(4619) /* shouldShowMembershipVerificationGate */.shouldShowMembershipVerificationGate(channel.guild_id, items);
  if (channel.isForumPost()) {
    result = require;
    result = dependencyMap;
    return require(4629) /* ChatIcon */.ChatIcon;
  } else {
    const isMediaChannelResult = channel.isMediaChannel();
    const isNSFWResult = channel.isNSFW();
    const type = channel.type;
    if (ChannelTypes.PRIVATE_THREAD === type) {
      result = require;
      result = dependencyMap;
      return require(4630) /* ThreadLockIcon */.ThreadLockIcon;
    } else {
      result = ChannelTypes;
      if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
        result = ChannelTypes;
        if (ChannelTypes.PUBLIC_THREAD !== type) {
          result = ChannelTypes;
          if (ChannelTypes.GUILD_CATEGORY === type) {
            result = dependencyMap;
            return require(4632) /* FolderIcon */.FolderIcon;
          } else {
            result = ChannelTypes;
            if (ChannelTypes.GUILD_TEXT === type) {
              if (isRulesChannel) {
                let TextWarningIcon = require(4633) /* BookCheckIcon */.BookCheckIcon;
              } else {
                if (isNSFWResult) {
                  TextWarningIcon = require(4634) /* TextWarningIcon */.TextWarningIcon;
                }
                if (channel.isSpoilerChannel()) {
                  if (null == ignoreTraits) {
                    const TextSpoilerIcon = require(4635) /* TextSpoilerIcon */.TextSpoilerIcon;
                  }
                }
                if (importDefault(4623)(channel)) {
                  if (null == ignoreTraits) {
                    const TextLockIcon = require(4636) /* TextLockIcon */.TextLockIcon;
                  }
                }
                if (null != channel.linkedLobby) {
                  let TextIcon = require(4637) /* TextControllerIcon */.TextControllerIcon;
                } else {
                  TextIcon = require(4638) /* TextIcon */.TextIcon;
                }
              }
              return TextWarningIcon;
            } else {
              result = ChannelTypes;
              if (ChannelTypes.GUILD_FORUM === type) {
                if (isRulesChannel) {
                  let ForumWarningIcon = require(4633) /* BookCheckIcon */.BookCheckIcon;
                } else {
                  if (isNSFWResult) {
                    if (isMediaChannelResult) {
                      ForumWarningIcon = tmp70(4639).ImageWarningIcon;
                    } else {
                      ForumWarningIcon = tmp70(4640).ForumWarningIcon;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    if (null == ignoreTraits) {
                      const ForumSpoilerIcon2 = require(4641) /* ForumSpoilerIcon */.ForumSpoilerIcon;
                    }
                  }
                  if (importDefault(4623)(channel)) {
                    if (null == ignoreTraits) {
                      if (isMediaChannelResult) {
                        let ForumLockIcon = tmp76(4642).ImageLockIcon;
                      } else {
                        ForumLockIcon = tmp76(4643).ForumLockIcon;
                      }
                    }
                  }
                  if (isMediaChannelResult) {
                    let ForumIcon = tmp78(4644).ImageIcon;
                  } else {
                    ForumIcon = tmp78(4645).ForumIcon;
                  }
                }
                return ForumWarningIcon;
              } else {
                result = ChannelTypes;
                if (ChannelTypes.GUILD_MEDIA === type) {
                  if (isRulesChannel) {
                    let ImageWarningIcon = require(4633) /* BookCheckIcon */.BookCheckIcon;
                  } else {
                    if (isNSFWResult) {
                      ImageWarningIcon = require(4639) /* ImageWarningIcon */.ImageWarningIcon;
                    }
                    if (channel.isSpoilerChannel()) {
                      if (null == ignoreTraits) {
                        const ForumSpoilerIcon = require(4641) /* ForumSpoilerIcon */.ForumSpoilerIcon;
                      }
                    }
                    if (!importDefault(4623)(channel)) {
                      let ImageLockIcon = require(4644) /* ImageIcon */.ImageIcon;
                    } else if (null == ignoreTraits) {
                      ImageLockIcon = require(4642) /* ImageLockIcon */.ImageLockIcon;
                    }
                  }
                  return ImageWarningIcon;
                } else {
                  result = ChannelTypes;
                  if (ChannelTypes.GROUP_DM === type) {
                    return require(4646) /* GroupIcon */.GroupIcon;
                  } else {
                    result = ChannelTypes;
                    if (ChannelTypes.DM === type) {
                      return require(4647) /* AtIcon */.AtIcon;
                    } else {
                      result = ChannelTypes;
                      if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
                        if (isRulesChannel) {
                          let AnnouncementsWarningIcon = require(4633) /* BookCheckIcon */.BookCheckIcon;
                        } else {
                          if (isNSFWResult) {
                            AnnouncementsWarningIcon = require(4648) /* AnnouncementsWarningIcon */.AnnouncementsWarningIcon;
                          }
                          if (channel.isSpoilerChannel()) {
                            if (null == ignoreTraits) {
                              const AnnouncementsSpoilerIcon = require(4649) /* AnnouncementsSpoilerIcon */.AnnouncementsSpoilerIcon;
                            }
                          }
                          if (!importDefault(4623)(channel)) {
                            let AnnouncementsLockIcon = require(4651) /* AnnouncementsIcon */.AnnouncementsIcon;
                          } else if (null == ignoreTraits) {
                            AnnouncementsLockIcon = require(4650) /* AnnouncementsLockIcon */.AnnouncementsLockIcon;
                          }
                        }
                        return AnnouncementsWarningIcon;
                      } else {
                        result = ChannelTypes;
                        if (ChannelTypes.GUILD_STAGE_VOICE === type) {
                          if (result) {
                            if (importDefault(4623)(channel)) {
                              let StageLockIcon = tmp29(4652).LockIcon;
                            } else {
                              StageLockIcon = tmp29(4653).StageLockIcon;
                            }
                            return StageLockIcon;
                          }
                          if (locked) {
                            if (null == ignoreTraits) {
                              const LockIcon2 = require(4652) /* LockIcon */.LockIcon;
                            }
                          }
                          if (!importDefault(4623)(channel)) {
                            let StageLockIcon2 = require(4654) /* StageIcon */.StageIcon;
                          } else if (null == ignoreTraits) {
                            StageLockIcon2 = require(4653) /* StageLockIcon */.StageLockIcon;
                          }
                        } else {
                          result = ChannelTypes;
                          if (ChannelTypes.GUILD_VOICE === type) {
                            if (obj.textFocused) {
                              let VoiceLockIcon = require(4629) /* ChatIcon */.ChatIcon;
                            } else {
                              if (result) {
                                if (importDefault(4623)(channel)) {
                                  VoiceLockIcon = tmp10(4652).LockIcon;
                                } else {
                                  VoiceLockIcon = tmp10(4655).VoiceLockIcon;
                                }
                              }
                              if (locked) {
                                if (null == ignoreTraits) {
                                  const LockIcon = require(4652) /* LockIcon */.LockIcon;
                                }
                              }
                              if (importDefault(4623)(channel)) {
                                if (null == ignoreTraits) {
                                  const VoiceLockIcon2 = require(4655) /* VoiceLockIcon */.VoiceLockIcon;
                                }
                              }
                              if (isNSFWResult) {
                                if (null == ignoreTraits) {
                                  const VoiceWarningIcon = require(4656) /* VoiceWarningIcon */.VoiceWarningIcon;
                                }
                              }
                              if (!channel.isSpoilerChannel()) {
                                let VoiceNormalSpoilerIcon = require(4658) /* VoiceNormalIcon */.VoiceNormalIcon;
                              } else if (null == ignoreTraits) {
                                VoiceNormalSpoilerIcon = require(4657) /* VoiceNormalSpoilerIcon */.VoiceNormalSpoilerIcon;
                              }
                            }
                            return VoiceLockIcon;
                          } else if (ChannelTypes.GUILD_DIRECTORY === type) {
                            return require(4659) /* HubIcon */.HubIcon;
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
      result = require;
      result = dependencyMap;
      return require(4631) /* ThreadIcon */.ThreadIcon;
    }
  }
  const obj2 = require(4619) /* shouldShowMembershipVerificationGate */;
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("utils/native/ChannelUtils.tsx");

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
            return importDefault(4596);
          } else {
            if (ChannelTypes.GUILD_TEXT !== type) {
              if (ChannelTypes.GUILD_FORUM !== type) {
                if (ChannelTypes.GUILD_MEDIA !== type) {
                  if (ChannelTypes.GROUP_DM === type) {
                    return importDefault(4598);
                  } else if (ChannelTypes.DM === type) {
                    return importDefault(4599);
                  } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
                    return importDefault(4600);
                  } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
                    return importDefault(4601);
                  } else if (ChannelTypes.GUILD_VOICE === type) {
                    return importDefault(4602);
                  } else if (ChannelTypes.GUILD_DIRECTORY === type) {
                    return importDefault(4603);
                  } else {
                    return null;
                  }
                }
              }
            }
            return importDefault(4597);
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
    return importDefault(4602);
  } else if ("voice-locked" === iconType) {
    return importDefault(4604);
  } else if ("voice-nsfw" === iconType) {
    return importDefault(4605);
  } else if ("voice-spoiler" === iconType) {
    return importDefault(4606);
  } else if ("stage" === iconType) {
    return importDefault(4601);
  } else if ("stage-locked" === iconType) {
    return importDefault(4607);
  } else if ("text" === iconType) {
    return importDefault(4597);
  } else if ("text-nsfw" === iconType) {
    return importDefault(4608);
  } else if ("text-spoiler" === iconType) {
    return importDefault(4609);
  } else if ("announcement" === iconType) {
    return importDefault(4600);
  } else if ("announcement-nsfw" === iconType) {
    return importDefault(4610);
  } else if ("announcement-spoiler" === iconType) {
    return importDefault(4611);
  } else if ("thread" === iconType) {
    return importDefault(4595);
  } else {
    if ("post" !== iconType) {
      if ("message" !== iconType) {
        if ("forum" === iconType) {
          return importDefault(4613);
        } else if ("forum-nsfw" === iconType) {
          return importDefault(4614);
        } else if ("forum-spoiler" === iconType) {
          return importDefault(4615);
        } else if ("media" === iconType) {
          return importDefault(4616);
        } else if ("media-nsfw" === iconType) {
          return importDefault(4617);
        } else if ("locked" === iconType) {
          return importDefault(4618);
        } else {
          return null;
        }
      }
    }
    return importDefault(4612);
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
          return require(4632) /* FolderIcon */.FolderIcon;
        } else if (ChannelTypes.GUILD_TEXT === type) {
          return require(4638) /* TextIcon */.TextIcon;
        } else if (ChannelTypes.GUILD_FORUM === type) {
          return require(4645) /* ForumIcon */.ForumIcon;
        } else if (ChannelTypes.GUILD_MEDIA === type) {
          return require(4644) /* ImageIcon */.ImageIcon;
        } else if (ChannelTypes.GROUP_DM === type) {
          return require(4646) /* GroupIcon */.GroupIcon;
        } else if (ChannelTypes.DM === type) {
          return require(4647) /* AtIcon */.AtIcon;
        } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
          return require(4651) /* AnnouncementsIcon */.AnnouncementsIcon;
        } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
          return require(4654) /* StageIcon */.StageIcon;
        } else if (ChannelTypes.GUILD_VOICE === type) {
          return require(4658) /* VoiceNormalIcon */.VoiceNormalIcon;
        } else if (ChannelTypes.GUILD_DIRECTORY === type) {
          return require(4659) /* HubIcon */.HubIcon;
        } else {
          return null;
        }
      }
    }
  }
  if (channel.isForumPost()) {
    let ThreadIcon = tmp24(4629).ChatIcon;
  } else {
    ThreadIcon = tmp24(4631).ThreadIcon;
  }
  return ThreadIcon;
};
