// Module ID: 4628
// Function ID: 40382
// Name: getThreadChannelIcon
// Dependencies: [1918, 1838, 1850, 653, 4629, 4630, 4631, 4632, 4633, 4634, 4635, 4636, 4637, 4638, 4639, 4640, 4641, 4642, 4643, 4644, 4645, 4646, 4647, 4648, 4649, 4650, 4651, 4652, 4653, 4654, 4657, 4658, 4659, 4660, 4661, 4662, 4663, 4664, 4665, 4666, 4667, 4668, 4669, 4670, 4671, 4672, 4673, 4674, 4675, 4676, 4677, 4678, 4679, 4680, 4681, 4682, 4683, 4684, 4685, 4686, 4687, 4688, 4689, 4690, 4691, 4692, 4693, 4694, 2]
// Exports: getChannelIconComponentWithGuild, getChannelIconWithGuild, getChannelMentionIcon, getSimpleChannelIcon, getSimpleChannelIconComponent

// Module 4628 (getThreadChannelIcon)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_isNativeReflectConstruct";
import { ChannelTypes } from "ME";

const require = arg1;
function getThreadChannelIcon(type) {
  if (ChannelTypes.PRIVATE_THREAD === type) {
    return importDefault(4629);
  } else {
    if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
      if (ChannelTypes.PUBLIC_THREAD !== type) {
        return null;
      }
    }
    return importDefault(4630);
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
  let result = require(4654) /* shouldShowMembershipVerificationGate */.shouldShowMembershipVerificationGate(guild_id.guild_id, items);
  if (guild_id.isForumPost()) {
    result = importDefault;
    result = dependencyMap;
    return importDefault(4647);
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
              return importDefault(4631);
            } else {
              result = ChannelTypes;
              if (ChannelTypes.GUILD_TEXT === type) {
                if (isRulesChannel) {
                  result = importDefault;
                  result = dependencyMap;
                  result = importDefault(4657);
                } else {
                  if (result) {
                    result = importDefault;
                    result = dependencyMap;
                    result = importDefault(4643);
                  }
                  if (guild_id.isSpoilerChannel()) {
                    if (null == ignoreTraits) {
                      result = importDefault;
                      result = dependencyMap;
                      result = importDefault(4644);
                    }
                  }
                  result = importDefault;
                  result = dependencyMap;
                  if (importDefault(4658)(guild_id)) {
                    if (null == ignoreTraits) {
                      result = importDefault;
                      result = dependencyMap;
                      result = importDefault(4653);
                    }
                  }
                  if (null != guild_id.linkedLobby) {
                    result = importDefault;
                    result = dependencyMap;
                    result = importDefault(4659);
                  } else {
                    result = importDefault;
                    result = dependencyMap;
                    result = importDefault(4632);
                  }
                }
                return result;
              } else {
                result = ChannelTypes;
                if (ChannelTypes.GUILD_FORUM === type) {
                  if (isRulesChannel) {
                    result = importDefault;
                    result = dependencyMap;
                    let tmp83Result = importDefault(4657);
                  } else {
                    if (result) {
                      if (result) {
                        let tmp85 = 4652;
                      } else {
                        tmp85 = 4649;
                      }
                      tmp83Result = importDefault(tmp85);
                      const tmp83 = importDefault;
                    }
                    if (guild_id.isSpoilerChannel()) {
                      if (null == ignoreTraits) {
                        importDefault(4650);
                      }
                    }
                    if (importDefault(4658)(guild_id)) {
                      if (null == ignoreTraits) {
                        if (result) {
                          let tmp93 = 4660;
                        } else {
                          tmp93 = 4661;
                        }
                        importDefault(tmp93);
                        const tmp91 = importDefault;
                      }
                    }
                    if (result) {
                      let tmp96 = 4651;
                    } else {
                      tmp96 = 4648;
                    }
                    importDefault(tmp96);
                    const tmp94 = importDefault;
                  }
                  return tmp83Result;
                } else {
                  result = ChannelTypes;
                  if (ChannelTypes.GUILD_MEDIA === type) {
                    if (isRulesChannel) {
                      let tmp69 = importDefault(4657);
                    } else {
                      if (result) {
                        tmp69 = importDefault(4652);
                      }
                      if (guild_id.isSpoilerChannel()) {
                        if (null == ignoreTraits) {
                          importDefault(4650);
                        }
                      }
                      if (!importDefault(4658)(guild_id)) {
                        let tmp76 = importDefault(4651);
                      } else if (null == ignoreTraits) {
                        tmp76 = importDefault(4660);
                      }
                    }
                    return tmp69;
                  } else {
                    result = ChannelTypes;
                    if (ChannelTypes.GROUP_DM === type) {
                      return importDefault(4633);
                    } else {
                      result = ChannelTypes;
                      if (ChannelTypes.DM === type) {
                        return importDefault(4634);
                      } else {
                        result = ChannelTypes;
                        if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
                          if (isRulesChannel) {
                            let tmp49 = importDefault(4657);
                          } else {
                            if (result) {
                              tmp49 = importDefault(4645);
                            }
                            if (guild_id.isSpoilerChannel()) {
                              if (null == ignoreTraits) {
                                importDefault(4646);
                              }
                            }
                            if (!importDefault(4658)(guild_id)) {
                              let tmp56 = importDefault(4635);
                            } else if (null == ignoreTraits) {
                              tmp56 = importDefault(4662);
                            }
                          }
                          return tmp49;
                        } else {
                          result = ChannelTypes;
                          if (ChannelTypes.GUILD_STAGE_VOICE === type) {
                            if (result) {
                              if (importDefault(4658)(guild_id)) {
                                let tmp33Result = tmp33(4663);
                              } else {
                                tmp33Result = tmp33(4642);
                              }
                              return tmp33Result;
                            }
                            if (locked) {
                              if (null == ignoreTraits) {
                                importDefault(4663);
                              }
                            }
                            if (!importDefault(4658)(guild_id)) {
                              let tmp42 = importDefault(4636);
                            } else if (null == ignoreTraits) {
                              tmp42 = importDefault(4642);
                            }
                          } else {
                            result = ChannelTypes;
                            if (ChannelTypes.GUILD_VOICE === type) {
                              if (obj.textFocused) {
                                let tmp9Result = importDefault(4647);
                              } else {
                                if (result) {
                                  if (importDefault(4658)(guild_id)) {
                                    tmp9Result = tmp9(4663);
                                  } else {
                                    tmp9Result = tmp9(4639);
                                  }
                                }
                                if (locked) {
                                  if (null == ignoreTraits) {
                                    importDefault(4663);
                                  }
                                }
                                if (importDefault(4658)(guild_id)) {
                                  if (null == ignoreTraits) {
                                    importDefault(4639);
                                  }
                                }
                                if (result) {
                                  if (null == ignoreTraits) {
                                    importDefault(4640);
                                  }
                                }
                                if (!guild_id.isSpoilerChannel()) {
                                  let tmp22 = importDefault(4637);
                                } else if (null == ignoreTraits) {
                                  tmp22 = importDefault(4641);
                                }
                              }
                              return tmp9Result;
                            } else if (ChannelTypes.GUILD_DIRECTORY === type) {
                              return importDefault(4638);
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
  const obj2 = require(4654) /* shouldShowMembershipVerificationGate */;
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
  let result = require(4654) /* shouldShowMembershipVerificationGate */.shouldShowMembershipVerificationGate(channel.guild_id, items);
  if (channel.isForumPost()) {
    result = require;
    result = dependencyMap;
    return require(4664) /* ChatIcon */.ChatIcon;
  } else {
    const isMediaChannelResult = channel.isMediaChannel();
    const isNSFWResult = channel.isNSFW();
    const type = channel.type;
    if (ChannelTypes.PRIVATE_THREAD === type) {
      result = require;
      result = dependencyMap;
      return require(4665) /* ThreadLockIcon */.ThreadLockIcon;
    } else {
      result = ChannelTypes;
      if (ChannelTypes.ANNOUNCEMENT_THREAD !== type) {
        result = ChannelTypes;
        if (ChannelTypes.PUBLIC_THREAD !== type) {
          result = ChannelTypes;
          if (ChannelTypes.GUILD_CATEGORY === type) {
            result = dependencyMap;
            return require(4667) /* FolderIcon */.FolderIcon;
          } else {
            result = ChannelTypes;
            if (ChannelTypes.GUILD_TEXT === type) {
              if (isRulesChannel) {
                let TextWarningIcon = require(4668) /* BookCheckIcon */.BookCheckIcon;
              } else {
                if (isNSFWResult) {
                  TextWarningIcon = require(4669) /* TextWarningIcon */.TextWarningIcon;
                }
                if (channel.isSpoilerChannel()) {
                  if (null == ignoreTraits) {
                    const TextSpoilerIcon = require(4670) /* TextSpoilerIcon */.TextSpoilerIcon;
                  }
                }
                if (importDefault(4658)(channel)) {
                  if (null == ignoreTraits) {
                    const TextLockIcon = require(4671) /* TextLockIcon */.TextLockIcon;
                  }
                }
                if (null != channel.linkedLobby) {
                  let TextIcon = require(4672) /* TextControllerIcon */.TextControllerIcon;
                } else {
                  TextIcon = require(4673) /* TextIcon */.TextIcon;
                }
              }
              return TextWarningIcon;
            } else {
              result = ChannelTypes;
              if (ChannelTypes.GUILD_FORUM === type) {
                if (isRulesChannel) {
                  let ForumWarningIcon = require(4668) /* BookCheckIcon */.BookCheckIcon;
                } else {
                  if (isNSFWResult) {
                    if (isMediaChannelResult) {
                      ForumWarningIcon = tmp70(4674).ImageWarningIcon;
                    } else {
                      ForumWarningIcon = tmp70(4675).ForumWarningIcon;
                    }
                  }
                  if (channel.isSpoilerChannel()) {
                    if (null == ignoreTraits) {
                      const ForumSpoilerIcon2 = require(4676) /* ForumSpoilerIcon */.ForumSpoilerIcon;
                    }
                  }
                  if (importDefault(4658)(channel)) {
                    if (null == ignoreTraits) {
                      if (isMediaChannelResult) {
                        let ForumLockIcon = tmp76(4677).ImageLockIcon;
                      } else {
                        ForumLockIcon = tmp76(4678).ForumLockIcon;
                      }
                    }
                  }
                  if (isMediaChannelResult) {
                    let ForumIcon = tmp78(4679).ImageIcon;
                  } else {
                    ForumIcon = tmp78(4680).ForumIcon;
                  }
                }
                return ForumWarningIcon;
              } else {
                result = ChannelTypes;
                if (ChannelTypes.GUILD_MEDIA === type) {
                  if (isRulesChannel) {
                    let ImageWarningIcon = require(4668) /* BookCheckIcon */.BookCheckIcon;
                  } else {
                    if (isNSFWResult) {
                      ImageWarningIcon = require(4674) /* ImageWarningIcon */.ImageWarningIcon;
                    }
                    if (channel.isSpoilerChannel()) {
                      if (null == ignoreTraits) {
                        const ForumSpoilerIcon = require(4676) /* ForumSpoilerIcon */.ForumSpoilerIcon;
                      }
                    }
                    if (!importDefault(4658)(channel)) {
                      let ImageLockIcon = require(4679) /* ImageIcon */.ImageIcon;
                    } else if (null == ignoreTraits) {
                      ImageLockIcon = require(4677) /* ImageLockIcon */.ImageLockIcon;
                    }
                  }
                  return ImageWarningIcon;
                } else {
                  result = ChannelTypes;
                  if (ChannelTypes.GROUP_DM === type) {
                    return require(4681) /* GroupIcon */.GroupIcon;
                  } else {
                    result = ChannelTypes;
                    if (ChannelTypes.DM === type) {
                      return require(4682) /* AtIcon */.AtIcon;
                    } else {
                      result = ChannelTypes;
                      if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
                        if (isRulesChannel) {
                          let AnnouncementsWarningIcon = require(4668) /* BookCheckIcon */.BookCheckIcon;
                        } else {
                          if (isNSFWResult) {
                            AnnouncementsWarningIcon = require(4683) /* AnnouncementsWarningIcon */.AnnouncementsWarningIcon;
                          }
                          if (channel.isSpoilerChannel()) {
                            if (null == ignoreTraits) {
                              const AnnouncementsSpoilerIcon = require(4684) /* AnnouncementsSpoilerIcon */.AnnouncementsSpoilerIcon;
                            }
                          }
                          if (!importDefault(4658)(channel)) {
                            let AnnouncementsLockIcon = require(4686) /* AnnouncementsIcon */.AnnouncementsIcon;
                          } else if (null == ignoreTraits) {
                            AnnouncementsLockIcon = require(4685) /* AnnouncementsLockIcon */.AnnouncementsLockIcon;
                          }
                        }
                        return AnnouncementsWarningIcon;
                      } else {
                        result = ChannelTypes;
                        if (ChannelTypes.GUILD_STAGE_VOICE === type) {
                          if (result) {
                            if (importDefault(4658)(channel)) {
                              let StageLockIcon = tmp29(4687).LockIcon;
                            } else {
                              StageLockIcon = tmp29(4688).StageLockIcon;
                            }
                            return StageLockIcon;
                          }
                          if (locked) {
                            if (null == ignoreTraits) {
                              const LockIcon2 = require(4687) /* LockIcon */.LockIcon;
                            }
                          }
                          if (!importDefault(4658)(channel)) {
                            let StageLockIcon2 = require(4689) /* StageIcon */.StageIcon;
                          } else if (null == ignoreTraits) {
                            StageLockIcon2 = require(4688) /* StageLockIcon */.StageLockIcon;
                          }
                        } else {
                          result = ChannelTypes;
                          if (ChannelTypes.GUILD_VOICE === type) {
                            if (obj.textFocused) {
                              let VoiceLockIcon = require(4664) /* ChatIcon */.ChatIcon;
                            } else {
                              if (result) {
                                if (importDefault(4658)(channel)) {
                                  VoiceLockIcon = tmp10(4687).LockIcon;
                                } else {
                                  VoiceLockIcon = tmp10(4690).VoiceLockIcon;
                                }
                              }
                              if (locked) {
                                if (null == ignoreTraits) {
                                  const LockIcon = require(4687) /* LockIcon */.LockIcon;
                                }
                              }
                              if (importDefault(4658)(channel)) {
                                if (null == ignoreTraits) {
                                  const VoiceLockIcon2 = require(4690) /* VoiceLockIcon */.VoiceLockIcon;
                                }
                              }
                              if (isNSFWResult) {
                                if (null == ignoreTraits) {
                                  const VoiceWarningIcon = require(4691) /* VoiceWarningIcon */.VoiceWarningIcon;
                                }
                              }
                              if (!channel.isSpoilerChannel()) {
                                let VoiceNormalSpoilerIcon = require(4693) /* VoiceNormalIcon */.VoiceNormalIcon;
                              } else if (null == ignoreTraits) {
                                VoiceNormalSpoilerIcon = require(4692) /* VoiceNormalSpoilerIcon */.VoiceNormalSpoilerIcon;
                              }
                            }
                            return VoiceLockIcon;
                          } else if (ChannelTypes.GUILD_DIRECTORY === type) {
                            return require(4694) /* HubIcon */.HubIcon;
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
      return require(4666) /* ThreadIcon */.ThreadIcon;
    }
  }
  const obj2 = require(4654) /* shouldShowMembershipVerificationGate */;
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
            return importDefault(4631);
          } else {
            if (ChannelTypes.GUILD_TEXT !== type) {
              if (ChannelTypes.GUILD_FORUM !== type) {
                if (ChannelTypes.GUILD_MEDIA !== type) {
                  if (ChannelTypes.GROUP_DM === type) {
                    return importDefault(4633);
                  } else if (ChannelTypes.DM === type) {
                    return importDefault(4634);
                  } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
                    return importDefault(4635);
                  } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
                    return importDefault(4636);
                  } else if (ChannelTypes.GUILD_VOICE === type) {
                    return importDefault(4637);
                  } else if (ChannelTypes.GUILD_DIRECTORY === type) {
                    return importDefault(4638);
                  } else {
                    return null;
                  }
                }
              }
            }
            return importDefault(4632);
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
    return importDefault(4637);
  } else if ("voice-locked" === iconType) {
    return importDefault(4639);
  } else if ("voice-nsfw" === iconType) {
    return importDefault(4640);
  } else if ("voice-spoiler" === iconType) {
    return importDefault(4641);
  } else if ("stage" === iconType) {
    return importDefault(4636);
  } else if ("stage-locked" === iconType) {
    return importDefault(4642);
  } else if ("text" === iconType) {
    return importDefault(4632);
  } else if ("text-nsfw" === iconType) {
    return importDefault(4643);
  } else if ("text-spoiler" === iconType) {
    return importDefault(4644);
  } else if ("announcement" === iconType) {
    return importDefault(4635);
  } else if ("announcement-nsfw" === iconType) {
    return importDefault(4645);
  } else if ("announcement-spoiler" === iconType) {
    return importDefault(4646);
  } else if ("thread" === iconType) {
    return importDefault(4630);
  } else {
    if ("post" !== iconType) {
      if ("message" !== iconType) {
        if ("forum" === iconType) {
          return importDefault(4648);
        } else if ("forum-nsfw" === iconType) {
          return importDefault(4649);
        } else if ("forum-spoiler" === iconType) {
          return importDefault(4650);
        } else if ("media" === iconType) {
          return importDefault(4651);
        } else if ("media-nsfw" === iconType) {
          return importDefault(4652);
        } else if ("locked" === iconType) {
          return importDefault(4653);
        } else {
          return null;
        }
      }
    }
    return importDefault(4647);
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
          return require(4667) /* FolderIcon */.FolderIcon;
        } else if (ChannelTypes.GUILD_TEXT === type) {
          return require(4673) /* TextIcon */.TextIcon;
        } else if (ChannelTypes.GUILD_FORUM === type) {
          return require(4680) /* ForumIcon */.ForumIcon;
        } else if (ChannelTypes.GUILD_MEDIA === type) {
          return require(4679) /* ImageIcon */.ImageIcon;
        } else if (ChannelTypes.GROUP_DM === type) {
          return require(4681) /* GroupIcon */.GroupIcon;
        } else if (ChannelTypes.DM === type) {
          return require(4682) /* AtIcon */.AtIcon;
        } else if (ChannelTypes.GUILD_ANNOUNCEMENT === type) {
          return require(4686) /* AnnouncementsIcon */.AnnouncementsIcon;
        } else if (ChannelTypes.GUILD_STAGE_VOICE === type) {
          return require(4689) /* StageIcon */.StageIcon;
        } else if (ChannelTypes.GUILD_VOICE === type) {
          return require(4693) /* VoiceNormalIcon */.VoiceNormalIcon;
        } else if (ChannelTypes.GUILD_DIRECTORY === type) {
          return require(4694) /* HubIcon */.HubIcon;
        } else {
          return null;
        }
      }
    }
  }
  if (channel.isForumPost()) {
    let ThreadIcon = tmp24(4664).ChatIcon;
  } else {
    ThreadIcon = tmp24(4666).ThreadIcon;
  }
  return ThreadIcon;
};
