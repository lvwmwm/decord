// Module ID: 5886
// Function ID: 51743
// Name: stripUploadDataUri
// Dependencies: [6, 7, 29, 5879, 636, 2]
// Exports: createDefaultPersonalWidgetTop

// Module 5886 (stripUploadDataUri)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _objectWithoutProperties from "_objectWithoutProperties";

const require = arg1;
function stripUploadDataUri(localDataUri) {
  if (null != localDataUri) {
    if ("localDataUri" in localDataUri) {
      localDataUri = localDataUri.localDataUri;
      return callback2(localDataUri, closure_3);
    }
  }
  return localDataUri;
}
let closure_3 = ["localDataUri"];
let tmp2 = (() => {
  class UserProfilePersonalWidget {
    constructor(arg0) {
      self = this;
      ({ header, top, bottom } = arg0);
      tmp = outer1_4(this, UserProfilePersonalWidget);
      this.id = arg0.id;
      this.type = UserProfilePersonalWidget(outer1_2[3]).WidgetType.PERSONAL;
      str = "";
      str2 = "";
      if (null != header) {
        str2 = header;
      }
      self.header = str2;
      tmp2 = undefined;
      if (null != top) {
        obj = {};
        title = top.title;
        tmp3 = str;
        if (null != title) {
          tmp3 = title;
        }
        obj.title = tmp3;
        subtitle = top.subtitle;
        if (null != subtitle) {
          str = subtitle;
        }
        obj.subtitle = str;
        obj.image = top.image;
        tmp2 = obj;
      }
      self.top = tmp2;
      obj = {};
      entries = undefined;
      if (null != bottom) {
        entries = bottom.entries;
      }
      if (null == entries) {
        entries = [];
      }
      obj.entries = entries.map((hideImage) => {
        let tmp = hideImage;
        if (true === hideImage.hideImage) {
          tmp = hideImage;
          if (null != hideImage.image) {
            const obj = {};
            const merged = Object.assign(hideImage);
            obj["image"] = undefined;
            tmp = obj;
          }
        }
        return tmp;
      });
      self.bottom = obj;
      return;
    }
  }
  let obj = {
    key: "toSubmission",
    value() {
      const self = this;
      let obj = { id: this.id };
      obj = { type: this.type };
      obj = { header: this.header };
      let tmp;
      if (null != this.top) {
        const obj1 = {};
        let merged = Object.assign(self.top);
        obj1["image"] = outer1_7(self.top.image);
        tmp = obj1;
      }
      obj.top = tmp;
      const obj2 = {};
      const merged1 = Object.assign(self.bottom);
      const entries = self.bottom.entries;
      obj2["entries"] = entries.map((image) => {
        const obj = {};
        const merged = Object.assign(image);
        obj["image"] = outer2_7(image.image);
        return obj;
      });
      obj.bottom = obj2;
      obj.title = JSON.stringify(obj);
      obj.data = obj;
      return obj;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "isDiscardable",
    value() {
      const self = this;
      let everyResult = "" === this.header.trim();
      if (everyResult) {
        let tmp3 = null == self.top;
        if (!tmp3) {
          let tmp4 = "" === self.top.title.trim();
          if (tmp4) {
            tmp4 = "" === self.top.subtitle.trim();
            const str3 = self.top.subtitle;
          }
          if (tmp4) {
            tmp4 = null == self.top.image;
          }
          tmp3 = tmp4;
          let str2 = self.top.title;
        }
        everyResult = tmp3;
      }
      if (everyResult) {
        const entries = self.bottom.entries;
        everyResult = entries.every((value) => {
          let tmp = "" === value.value.trim();
          if (tmp) {
            tmp = "" === value.label.trim();
            const str2 = value.label;
          }
          if (tmp) {
            tmp = null == value.image;
          }
          return tmp;
        });
      }
      return everyResult;
    }
  };
  items[1] = obj;
  obj = {
    key: "isValid",
    value() {
      return !this.isDiscardable();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isEqual",
    value(header) {
      const self = this;
      let tmp = header instanceof UserProfilePersonalWidget;
      if (tmp) {
        let tmp4 = outer1_1(outer1_2[4])(self.header, header.header);
        if (tmp4) {
          tmp4 = outer1_1(outer1_2[4])(self.top, header.top);
        }
        if (tmp4) {
          tmp4 = outer1_1(outer1_2[4])(self.bottom, header.bottom);
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getUniqueKey",
    value() {
      return this.type;
    }
  };
  items[5] = {
    key: "getProfileAnalyticsOptions",
    value() {
      return { widgetType: this.type };
    }
  };
  items[6] = {
    key: "getProfileEditAnalyticsOptions",
    value() {
      return { widgetEdited: this.type };
    }
  };
  return callback(UserProfilePersonalWidget, items);
})();
const result = require("_objectWithoutProperties").fileFinishedImporting("modules/user_profile/UserProfilePersonalWidget.tsx");

export function createDefaultPersonalWidgetTop() {
  return { title: "", subtitle: "" };
}
export const UserProfilePersonalWidget = tmp2;
