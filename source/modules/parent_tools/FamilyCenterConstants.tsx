// Module ID: 6765
// Function ID: 53057
// Name: items
// Dependencies: []
// Exports: ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER, FAMILY_CENTER_REQUEST_QR_CODE_URL, PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER

// Module 6765 (items)
const result = 30 * importDefault(dependencyMap[0]).Millis.SECOND;
const result1 = 5 * importDefault(dependencyMap[0]).Millis.MINUTE;
const result2 = 5 * importDefault(dependencyMap[0]).Millis.MINUTE;
let obj = arg1(dependencyMap[1]);
obj = { USER_ADD: 1, [1]: "USER_ADD", GUILD_ADD: 2, [2]: "GUILD_ADD", USER_INTERACTION: 3, [3]: "USER_INTERACTION", GUILD_INTERACTION: 4, [4]: "GUILD_INTERACTION", USER_CALLED: 5, [5]: "USER_CALLED", TOTAL_VOICE_MINUTES: 6, [6]: "TOTAL_VOICE_MINUTES", PURCHASES: 7, [7]: "PURCHASES", GIFTS: 8, [8]: "GIFTS" };
const items = [obj.USER_INTERACTION, ];
obj = {
  priority: 100,
  tooltipHeader() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).kvTgWP);
  },
  tooltipDescription(arg0) {
    const intl = arg1(dependencyMap[2]).intl;
    const string = intl.string;
    const tmp = importDefault(dependencyMap[3]);
    if (arg0) {
      let stringResult = string(tmp.w4wmnb);
    } else {
      stringResult = string(tmp.foTzbd);
    }
    return stringResult;
  },
  sectionHeader(count) {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.formatToPlainString(importDefault(dependencyMap[3]).4T3zWT, { count });
  },
  sectionDescription(arg0) {
    const intl = arg1(dependencyMap[2]).intl;
    const string = intl.string;
    const tmp = importDefault(dependencyMap[3]);
    if (arg0) {
      let stringResult = string(tmp.w4wmnb);
    } else {
      stringResult = string(tmp.foTzbd);
    }
    return stringResult;
  },
  timestampFormatter() {
    const obj = {};
    const intl = arg1(dependencyMap[2]).intl;
    obj.today = intl.string(importDefault(dependencyMap[3]).fLBUx7);
    const intl2 = arg1(dependencyMap[2]).intl;
    obj.yesterday = intl2.string(importDefault(dependencyMap[3]).cHHgxI);
    obj.days = importDefault(dependencyMap[3]).qvKjp8;
    return obj;
  }
};
items[1] = obj;
const items1 = [items, , , , , , , ];
const items2 = [
  obj.USER_CALLED,
  {
    priority: 200,
    tooltipHeader() {
      const intl = arg1(dependencyMap[2]).intl;
      return intl.string(importDefault(dependencyMap[3]).D7Sngz);
    },
    tooltipDescription(arg0) {
      const intl = arg1(dependencyMap[2]).intl;
      const string = intl.string;
      const tmp = importDefault(dependencyMap[3]);
      if (arg0) {
        let stringResult = string(tmp.aiAhnQ);
      } else {
        stringResult = string(tmp.4ufgdz);
      }
      return stringResult;
    },
    sectionHeader(count) {
      const intl = arg1(dependencyMap[2]).intl;
      return intl.formatToPlainString(importDefault(dependencyMap[3]).0GE4Ni, { count });
    },
    sectionDescription(arg0) {
      const intl = arg1(dependencyMap[2]).intl;
      const string = intl.string;
      const tmp = importDefault(dependencyMap[3]);
      if (arg0) {
        let stringResult = string(tmp.aiAhnQ);
      } else {
        stringResult = string(tmp.4ufgdz);
      }
      return stringResult;
    },
    timestampFormatter() {
      const obj = {};
      const intl = arg1(dependencyMap[2]).intl;
      obj.today = intl.string(importDefault(dependencyMap[3]).IHd5cZ);
      const intl2 = arg1(dependencyMap[2]).intl;
      obj.yesterday = intl2.string(importDefault(dependencyMap[3]).wOsfxv);
      obj.days = importDefault(dependencyMap[3]).oCk8c4;
      return obj;
    }
  }
];
items1[1] = items2;
const items3 = [
  obj.USER_ADD,
  {
    priority: 300,
    tooltipHeader() {
      const intl = arg1(dependencyMap[2]).intl;
      return intl.string(importDefault(dependencyMap[3]).kIcKAj);
    },
    tooltipDescription(arg0) {
      const intl = arg1(dependencyMap[2]).intl;
      const string = intl.string;
      const tmp = importDefault(dependencyMap[3]);
      if (arg0) {
        let stringResult = string(tmp.BkVb1X);
      } else {
        stringResult = string(tmp.mpHHfa);
      }
      return stringResult;
    },
    sectionHeader(count) {
      const intl = arg1(dependencyMap[2]).intl;
      return intl.formatToPlainString(importDefault(dependencyMap[3]).TEvo+H, { count });
    },
    sectionDescription(arg0) {
      const intl = arg1(dependencyMap[2]).intl;
      const string = intl.string;
      const tmp = importDefault(dependencyMap[3]);
      if (arg0) {
        let stringResult = string(tmp.BkVb1X);
      } else {
        stringResult = string(tmp.mpHHfa);
      }
      return stringResult;
    },
    timestampFormatter() {
      const obj = {};
      const intl = arg1(dependencyMap[2]).intl;
      obj.today = intl.string(importDefault(dependencyMap[3]).JUHIYZ);
      const intl2 = arg1(dependencyMap[2]).intl;
      obj.yesterday = intl2.string(importDefault(dependencyMap[3]).GiswUW);
      obj.days = importDefault(dependencyMap[3]).fwQgE/;
      return obj;
    }
  }
];
items1[2] = items3;
const items4 = [
  obj.GUILD_ADD,
  {
    priority: 400,
    tooltipHeader() {
      const intl = arg1(dependencyMap[2]).intl;
      return intl.string(importDefault(dependencyMap[3]).uav9Bh);
    },
    tooltipDescription(arg0) {
      const intl = arg1(dependencyMap[2]).intl;
      const string = intl.string;
      const tmp = importDefault(dependencyMap[3]);
      if (arg0) {
        let stringResult = string(tmp.LVNgTD);
      } else {
        stringResult = string(tmp.TA8GFt);
      }
      return stringResult;
    },
    sectionHeader(count) {
      const intl = arg1(dependencyMap[2]).intl;
      return intl.formatToPlainString(importDefault(dependencyMap[3]).7feG7T, { count });
    },
    sectionDescription(arg0) {
      const intl = arg1(dependencyMap[2]).intl;
      const string = intl.string;
      const tmp = importDefault(dependencyMap[3]);
      if (arg0) {
        let stringResult = string(tmp.LVNgTD);
      } else {
        stringResult = string(tmp.TA8GFt);
      }
      return stringResult;
    }
  }
];
items1[3] = items4;
const items5 = [
  obj.GUILD_INTERACTION,
  {
    priority: 500,
    tooltipHeader() {
      const intl = arg1(dependencyMap[2]).intl;
      return intl.string(importDefault(dependencyMap[3]).CcrbCw);
    },
    tooltipDescription(arg0) {
      const intl = arg1(dependencyMap[2]).intl;
      const string = intl.string;
      const tmp = importDefault(dependencyMap[3]);
      if (arg0) {
        let stringResult = string(tmp.BLgIrk);
      } else {
        stringResult = string(tmp.sSJauZ);
      }
      return stringResult;
    },
    sectionHeader(count) {
      const intl = arg1(dependencyMap[2]).intl;
      return intl.formatToPlainString(importDefault(dependencyMap[3]).rcPInc, { count });
    },
    sectionDescription(arg0) {
      const intl = arg1(dependencyMap[2]).intl;
      const string = intl.string;
      const tmp = importDefault(dependencyMap[3]);
      if (arg0) {
        let stringResult = string(tmp.BLgIrk);
      } else {
        stringResult = string(tmp.sSJauZ);
      }
      return stringResult;
    }
  }
];
items1[4] = items5;
const items6 = [
  obj.TOTAL_VOICE_MINUTES,
  {
    priority: 175,
    tooltipHeader() {
      const intl = arg1(dependencyMap[2]).intl;
      return intl.string(importDefault(dependencyMap[3]).eo4Fxh);
    },
    tooltipDescription() {
      const intl = arg1(dependencyMap[2]).intl;
      return intl.string(importDefault(dependencyMap[3]).O/AElu);
    },
    sectionHeader(count) {
      const intl = arg1(dependencyMap[2]).intl;
      return intl.formatToPlainString(importDefault(dependencyMap[3]).eGFWUd, { count });
    },
    sectionDescription() {
      const intl = arg1(dependencyMap[2]).intl;
      return intl.string(importDefault(dependencyMap[3]).O/AElu);
    }
  }
];
items1[5] = items6;
const items7 = [
  obj.PURCHASES,
  {
    priority: 150,
    tooltipHeader() {
      const intl = arg1(dependencyMap[2]).intl;
      return intl.string(importDefault(dependencyMap[3]).NMYKsh);
    },
    tooltipDescription(arg0) {
      const intl = arg1(dependencyMap[2]).intl;
      const string = intl.string;
      const tmp = importDefault(dependencyMap[3]);
      if (arg0) {
        let stringResult = string(tmp.cqIdqZ);
      } else {
        stringResult = string(tmp.85PtWu);
      }
      return stringResult;
    },
    sectionHeader(amount) {
      const intl = arg1(dependencyMap[2]).intl;
      return intl.formatToPlainString(importDefault(dependencyMap[3]).FPViWL, { amount });
    },
    sectionDescription(arg0) {
      const intl = arg1(dependencyMap[2]).intl;
      const string = intl.string;
      const tmp = importDefault(dependencyMap[3]);
      if (arg0) {
        let stringResult = string(tmp.cqIdqZ);
      } else {
        stringResult = string(tmp.85PtWu);
      }
      return stringResult;
    }
  }
];
items1[6] = items7;
const items8 = [
  obj.GIFTS,
  {
    priority: 600,
    tooltipHeader() {
      const intl = arg1(dependencyMap[2]).intl;
      return intl.string(importDefault(dependencyMap[3]).ULUspo);
    },
    tooltipDescription() {
      const intl = arg1(dependencyMap[2]).intl;
      return intl.string(importDefault(dependencyMap[3]).nH8vlc);
    },
    sectionHeader(amount) {
      const intl = arg1(dependencyMap[2]).intl;
      return intl.formatToPlainString(importDefault(dependencyMap[3]).0R6I/b, { amount });
    },
    sectionDescription() {
      const intl = arg1(dependencyMap[2]).intl;
      return intl.string(importDefault(dependencyMap[3]).nH8vlc);
    }
  }
];
items1[7] = items8;
const obj1 = {
  priority: 200,
  tooltipHeader() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).D7Sngz);
  },
  tooltipDescription(arg0) {
    const intl = arg1(dependencyMap[2]).intl;
    const string = intl.string;
    const tmp = importDefault(dependencyMap[3]);
    if (arg0) {
      let stringResult = string(tmp.aiAhnQ);
    } else {
      stringResult = string(tmp.4ufgdz);
    }
    return stringResult;
  },
  sectionHeader(count) {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.formatToPlainString(importDefault(dependencyMap[3]).0GE4Ni, { count });
  },
  sectionDescription(arg0) {
    const intl = arg1(dependencyMap[2]).intl;
    const string = intl.string;
    const tmp = importDefault(dependencyMap[3]);
    if (arg0) {
      let stringResult = string(tmp.aiAhnQ);
    } else {
      stringResult = string(tmp.4ufgdz);
    }
    return stringResult;
  },
  timestampFormatter() {
    const obj = {};
    const intl = arg1(dependencyMap[2]).intl;
    obj.today = intl.string(importDefault(dependencyMap[3]).IHd5cZ);
    const intl2 = arg1(dependencyMap[2]).intl;
    obj.yesterday = intl2.string(importDefault(dependencyMap[3]).wOsfxv);
    obj.days = importDefault(dependencyMap[3]).oCk8c4;
    return obj;
  }
};
const obj2 = {
  priority: 300,
  tooltipHeader() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).kIcKAj);
  },
  tooltipDescription(arg0) {
    const intl = arg1(dependencyMap[2]).intl;
    const string = intl.string;
    const tmp = importDefault(dependencyMap[3]);
    if (arg0) {
      let stringResult = string(tmp.BkVb1X);
    } else {
      stringResult = string(tmp.mpHHfa);
    }
    return stringResult;
  },
  sectionHeader(count) {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.formatToPlainString(importDefault(dependencyMap[3]).TEvo+H, { count });
  },
  sectionDescription(arg0) {
    const intl = arg1(dependencyMap[2]).intl;
    const string = intl.string;
    const tmp = importDefault(dependencyMap[3]);
    if (arg0) {
      let stringResult = string(tmp.BkVb1X);
    } else {
      stringResult = string(tmp.mpHHfa);
    }
    return stringResult;
  },
  timestampFormatter() {
    const obj = {};
    const intl = arg1(dependencyMap[2]).intl;
    obj.today = intl.string(importDefault(dependencyMap[3]).JUHIYZ);
    const intl2 = arg1(dependencyMap[2]).intl;
    obj.yesterday = intl2.string(importDefault(dependencyMap[3]).GiswUW);
    obj.days = importDefault(dependencyMap[3]).fwQgE/;
    return obj;
  }
};
const obj3 = {
  priority: 400,
  tooltipHeader() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).uav9Bh);
  },
  tooltipDescription(arg0) {
    const intl = arg1(dependencyMap[2]).intl;
    const string = intl.string;
    const tmp = importDefault(dependencyMap[3]);
    if (arg0) {
      let stringResult = string(tmp.LVNgTD);
    } else {
      stringResult = string(tmp.TA8GFt);
    }
    return stringResult;
  },
  sectionHeader(count) {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.formatToPlainString(importDefault(dependencyMap[3]).7feG7T, { count });
  },
  sectionDescription(arg0) {
    const intl = arg1(dependencyMap[2]).intl;
    const string = intl.string;
    const tmp = importDefault(dependencyMap[3]);
    if (arg0) {
      let stringResult = string(tmp.LVNgTD);
    } else {
      stringResult = string(tmp.TA8GFt);
    }
    return stringResult;
  }
};
const obj4 = {
  priority: 500,
  tooltipHeader() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).CcrbCw);
  },
  tooltipDescription(arg0) {
    const intl = arg1(dependencyMap[2]).intl;
    const string = intl.string;
    const tmp = importDefault(dependencyMap[3]);
    if (arg0) {
      let stringResult = string(tmp.BLgIrk);
    } else {
      stringResult = string(tmp.sSJauZ);
    }
    return stringResult;
  },
  sectionHeader(count) {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.formatToPlainString(importDefault(dependencyMap[3]).rcPInc, { count });
  },
  sectionDescription(arg0) {
    const intl = arg1(dependencyMap[2]).intl;
    const string = intl.string;
    const tmp = importDefault(dependencyMap[3]);
    if (arg0) {
      let stringResult = string(tmp.BLgIrk);
    } else {
      stringResult = string(tmp.sSJauZ);
    }
    return stringResult;
  }
};
const obj5 = {
  priority: 175,
  tooltipHeader() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).eo4Fxh);
  },
  tooltipDescription() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).O/AElu);
  },
  sectionHeader(count) {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.formatToPlainString(importDefault(dependencyMap[3]).eGFWUd, { count });
  },
  sectionDescription() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).O/AElu);
  }
};
const obj6 = {
  priority: 150,
  tooltipHeader() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).NMYKsh);
  },
  tooltipDescription(arg0) {
    const intl = arg1(dependencyMap[2]).intl;
    const string = intl.string;
    const tmp = importDefault(dependencyMap[3]);
    if (arg0) {
      let stringResult = string(tmp.cqIdqZ);
    } else {
      stringResult = string(tmp.85PtWu);
    }
    return stringResult;
  },
  sectionHeader(amount) {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.formatToPlainString(importDefault(dependencyMap[3]).FPViWL, { amount });
  },
  sectionDescription(arg0) {
    const intl = arg1(dependencyMap[2]).intl;
    const string = intl.string;
    const tmp = importDefault(dependencyMap[3]);
    if (arg0) {
      let stringResult = string(tmp.cqIdqZ);
    } else {
      stringResult = string(tmp.85PtWu);
    }
    return stringResult;
  }
};
const obj7 = {
  priority: 600,
  tooltipHeader() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).ULUspo);
  },
  tooltipDescription() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).nH8vlc);
  },
  sectionHeader(amount) {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.formatToPlainString(importDefault(dependencyMap[3]).0R6I/b, { amount });
  },
  sectionDescription() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).nH8vlc);
  }
};
const wrapPathsResult = obj.wrapPaths(Object.freeze({}), []);
const obj8 = { CHECK: 0, [0]: "CHECK", X: 1, [1]: "X" };
const obj9 = { GENERIC_ERROR: 0, [0]: "GENERIC_ERROR", INELIGIBLE_FOR_FAMILY_CENTER: 1, [1]: "INELIGIBLE_FOR_FAMILY_CENTER", PENDING_REQUEST_EXISTS: 2, [2]: "PENDING_REQUEST_EXISTS", MAX_CONNECTIONS_REACHED: 3, [3]: "MAX_CONNECTIONS_REACHED" };
const map = new Map(items1);
const obj10 = { [290000]: obj9.INELIGIBLE_FOR_FAMILY_CENTER, [290002]: obj9.MAX_CONNECTIONS_REACHED, [290005]: obj9.PENDING_REQUEST_EXISTS };
const obj11 = {
  header() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).nGX8Co);
  },
  description() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).Uss2dn);
  },
  icon: obj8.X
};
const obj12 = {
  header() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).tu0MRv);
  },
  description(email) {
    email = email.email;
    if (null != email) {
      const intl2 = arg1(dependencyMap[2]).intl;
      const obj = { email };
      let formatToPlainStringResult = intl2.formatToPlainString(importDefault(dependencyMap[3]).xNEkdx, obj);
    } else {
      const intl = arg1(dependencyMap[2]).intl;
      formatToPlainStringResult = intl.string(importDefault(dependencyMap[3]).Xyjnwn);
    }
    return formatToPlainStringResult;
  },
  icon: obj8.CHECK
};
const obj13 = {
  header(isAdult) {
    const intl = arg1(dependencyMap[2]).intl;
    const string = intl.string;
    const tmp = importDefault(dependencyMap[3]);
    if (isAdult.isAdult) {
      let stringResult = string(tmp.bS5x94);
    } else {
      stringResult = string(tmp.MzX4RP);
    }
    return stringResult;
  },
  description(isAdult) {
    const intl = arg1(dependencyMap[2]).intl;
    const format = intl.format;
    const tmp = importDefault(dependencyMap[3]);
    if (isAdult.isAdult) {
      let obj = { link: "https://support.discord.com/hc/articles/14155043715735" };
      let formatResult = format(tmp.GKzqWi, obj);
    } else {
      obj = { link: "https://support.discord.com/hc/articles/14155060633623" };
      formatResult = format(tmp.69F+eS, obj);
    }
    return formatResult;
  },
  icon: obj8.X
};
const obj14 = {
  header() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.string(importDefault(dependencyMap[3]).W9JLJh);
  },
  description() {
    const intl = arg1(dependencyMap[2]).intl;
    return intl.format(importDefault(dependencyMap[3]).On5iRI, { link: "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731" });
  },
  icon: obj8.X
};
const result3 = arg1(dependencyMap[4]).fileFinishedImporting("modules/parent_tools/FamilyCenterConstants.tsx");

export const RESTRICTED_HOURS_LAYER_KEY = "RESTRICTED_HOURS_LAYER";
export const FAMILY_CENTER_REFETCH_COOLDOWN = result;
export const FAMILY_CENTER_AGE_VERIFICATION_RESUME_TIMEOUT = result1;
export const MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS = 8;
export const MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS = 3;
export const FAMILY_CENTER_REQUEST_SECTION_HEIGHT = 26;
export const FAMILY_CENTER_REQUEST_ROW_HEIGHT = 64;
export const FAMILY_CENTER_LINK_REQUEST_REGEX = /\/feature\/family-center\/my-family\/(\w+)\/(\w+)/;
export const FAMILY_CENTER_REQUEST_QR_CODE_URL = (arg0, arg1) => "https://discord.com/feature/family-center/my-family/" + arg0 + "/" + arg1;
export const FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS = 4;
export const QR_CODE_AUTO_HIDE_TIMEOUT = result2;
export const PLACEHOLDER_QR_CODE_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
export const FAMILY_CENTER_SUB_ROUTES = wrapPathsResult;
export const TeenActionType = { DM_MESSAGE_SEND: 1, [1]: "DM_MESSAGE_SEND", GDM_MESSAGE_SEND: 2, [2]: "GDM_MESSAGE_SEND", MESSAGE_REACT: 3, [3]: "MESSAGE_REACT", ADD_FRIEND: 4, [4]: "ADD_FRIEND", SEND_CALL: 5, [5]: "SEND_CALL", CALL_JOIN: 6, [6]: "CALL_JOIN", GUILD_JOIN: 7, [7]: "GUILD_JOIN", GUILD_MESSAGE_SEND: 8, [8]: "GUILD_MESSAGE_SEND", GUILD_VC_JOIN: 9, [9]: "GUILD_VC_JOIN", GUILD_VOICE_CHANNEL_LEAVE: 10, [10]: "GUILD_VOICE_CHANNEL_LEAVE", CALL_LEAVE: 11, [11]: "CALL_LEAVE", CALL_START: 12, [12]: "CALL_START", INVOICE_COMPLETE: 13, [13]: "INVOICE_COMPLETE" };
export const UserLinkType = { PARENT: 1, [1]: "PARENT", CHILD: 2, [2]: "CHILD" };
export const UserLinkStatus = { PENDING: 1, [1]: "PENDING", ACTIVE: 2, [2]: "ACTIVE", INACTIVE: 3, [3]: "INACTIVE", DECLINED: 4, [4]: "DECLINED", EXPIRED: 5, [5]: "EXPIRED" };
export const TeenActionDisplayType = obj;
export const FamilyCenterSubPages = { ACTIVITY: "ACTIVITY", REQUESTS: "REQUESTS", SETTINGS: "SETTINGS", CONTENT_AND_SOCIAL: "CONTENT_AND_SOCIAL", DATA_AND_PRIVACY: "DATA_AND_PRIVACY", SCREEN_TIME_CONTROLS: "SCREEN_TIME_CONTROLS" };
export const FamilyCenterSubPageAnalyticsIds = { ACTIVITY: 0, [0]: "ACTIVITY", REQUESTS: 1, [1]: "REQUESTS", SETTINGS: 2, [2]: "SETTINGS", CONTENT_AND_SOCIAL: 3, [3]: "CONTENT_AND_SOCIAL", DATA_AND_PRIVACY: 4, [4]: "DATA_AND_PRIVACY", SCREEN_TIME_CONTROLS: 5, [5]: "SCREEN_TIME_CONTROLS" };
export const FamilyCenterPageLocation = { SIDENAV: "SIDENAV", SETTINGS: "SETTINGS" };
export const FamilyCenterPageLocationAnalyticsIds = { SIDENAV: 0, [0]: "SIDENAV", SETTINGS: 1, [1]: "SETTINGS" };
export const FamilyCenterAction = { TabChange: 0, [0]: "TabChange", ShowQRCodeModal: 1, [1]: "ShowQRCodeModal", RevealQRCode: 2, [2]: "RevealQRCode", ScanQRCodeButton: 3, [3]: "ScanQRCodeButton", ScanQRCode: 4, [4]: "ScanQRCode", LoadMore: 5, [5]: "LoadMore", SelectTeen: 6, [6]: "SelectTeen", HideQRCode: 7, [7]: "HideQRCode", NufConsentGateLinkCodeError: 8, [8]: "NufConsentGateLinkCodeError", ShareLink: 9, [9]: "ShareLink", CopyLink: 10, [10]: "CopyLink" };
export const ACTION_TO_TEXT = map;
export const FamilyCenterIconType = obj8;
export const FamilyCenterFailureCode = obj9;
export const FAMILY_CENTER_ERROR_CODE_TO_FAILURE = obj10;
export const FAMILY_CENTER_LINK_REQUEST_ERROR_EXPERIENCES = { [obj9.GENERIC_ERROR]: obj11, [obj9.PENDING_REQUEST_EXISTS]: obj12, [obj9.MAX_CONNECTIONS_REACHED]: obj13, [obj9.INELIGIBLE_FOR_FAMILY_CENTER]: obj14 };
export const CONNECT_GUARDIAN_BOTTOM_SHEET_KEY = "ConnectGuardianBottomSheet";
export const PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER = () => {
  const obj = {};
  const intl = arg1(dependencyMap[2]).intl;
  obj.seconds = intl.string(importDefault(dependencyMap[3]).CJdoee);
  obj.minutes = importDefault(dependencyMap[3]).InzMn3;
  obj.hours = importDefault(dependencyMap[3]).ErkYCI;
  const intl2 = arg1(dependencyMap[2]).intl;
  obj.yesterday = intl2.string(importDefault(dependencyMap[3]).GvfssA);
  obj.days = importDefault(dependencyMap[3]).pWig18;
  obj.date = importDefault(dependencyMap[3]).MP3khg;
  return obj;
};
export const ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER = () => {
  const obj = {};
  const intl = arg1(dependencyMap[2]).intl;
  obj.seconds = intl.string(importDefault(dependencyMap[3]).Bqsamd);
  obj.minutes = importDefault(dependencyMap[3]).kX3wJg;
  obj.hours = importDefault(dependencyMap[3]).J18GbG;
  const intl2 = arg1(dependencyMap[2]).intl;
  obj.yesterday = intl2.string(importDefault(dependencyMap[3]).Ln9zMn);
  obj.days = importDefault(dependencyMap[3]).WRtySz;
  obj.date = importDefault(dependencyMap[3]).Y3ZYtM;
  return obj;
};
